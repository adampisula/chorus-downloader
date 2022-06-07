import type { IpcRenderer } from 'electron'

interface ExtendedWindow extends Window {
  ipc?: IpcRenderer
}

export default ExtendedWindow