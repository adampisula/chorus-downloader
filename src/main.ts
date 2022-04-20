import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faMagnifyingGlass, faDownload, faXmark, faCircleExclamation, faGuitar } from '@fortawesome/free-solid-svg-icons'
//import { ipcMain } from 'electron'

library.add(faGear, faMagnifyingGlass, faDownload, faXmark, faCircleExclamation, faGuitar)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

/*ipcMain.on('download-song', (event, arg) => {
  downloadSong(arg)
})*/

export const downloadSong = (hash: string) => {
  console.log(`Downloading song: ${hash}`)
}