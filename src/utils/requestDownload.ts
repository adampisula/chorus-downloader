import DownloadStatus from '@/types/DownloadStatus'
import http from 'https'
import fs from 'fs'
import path from 'path'

const requestDownload = (hash: string, event?: Electron.IpcMainEvent) => {
  console.log(`Got hash: ${hash}`)

  if(event) {
    let reply: DownloadStatus = {
      hash,
      status: 'WAITING',
    }

    event.reply('DOWNLOAD_STATUS', reply)

    const p = `C:\\Users\\adamp\\Documents\\GitHub\\chorus-downloader\\temp\\${hash}.zip`

    const file = fs.createWriteStream(p)
    const request = http.get(`https://chorusplus.adampisula.pizza/download/${hash}`, (response) => {
      const fileSize = parseInt(response.headers['content-length'] || '1')
      let bytesReceived = 0
      let lastSentProgress = -1

      console.log(`Total length: ${fileSize}`)

      response.pipe(file)

      response.on('data', (d) => {
        bytesReceived += d.length

        const progress = bytesReceived / fileSize
        const progressRounded = Math.floor(progress * 1000) / 1000
        
        if(progressRounded != lastSentProgress) {
          lastSentProgress = progressRounded

          reply = {
            hash,
            status: 'DOWNLOADING',
            progress: progressRounded,
          }

          event.reply('DOWNLOAD_STATUS', reply)
        }
      })

      file.on('finish', () => {
        file.close()
        
        reply = {
          hash,
          status: 'DOWNLOADED'
        }

        event.reply('DOWNLOAD_STATUS', reply)
      })
    })
  }
}

export default requestDownload