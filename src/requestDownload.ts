const requestDownload = (url: string, event?: Electron.IpcMainEvent) => {
  console.log(`Got URL: ${url}`)

  if(event) {
    event.reply('DOWNLOAD_PROGRESS', { message: `Received URL: ${url}` })
  }
}

export default requestDownload