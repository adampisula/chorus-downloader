import { contextBridge, ipcRenderer } from "electron"

const validChannels = ['REQUEST_DOWNLOAD', 'DOWNLOAD_PROGRESS']

contextBridge.exposeInMainWorld(
  'ipc', {
    send: (channel, data) => {
      if(validChannels.includes(channel)) {
        ipcRenderer.send(channel, data)
      }
    },
    on: (channel, func) => {
      if(validChannels.includes(channel)) {
        ipcRenderer.on(channel, (event, ...args) => func(...args))
      }
    }
  }
)