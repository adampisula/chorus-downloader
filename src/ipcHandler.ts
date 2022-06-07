import type { IpcMain } from "electron"
import requestDownload from './utils/requestDownload'

export default (ipcMain: IpcMain) => {
  ipcMain.on('REQUEST_DOWNLOAD', (event, hash: string) => {
    requestDownload(hash, event)
  });
  
  ipcMain.on('SAVE_CONFIG', (event, payload) => {
    setTimeout(() => {
      event.reply('SUCCESS')
    }, 2500)
  })
}