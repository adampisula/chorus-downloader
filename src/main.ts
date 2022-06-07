import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faMagnifyingGlass, faDownload, faXmark, faCircleExclamation, faGuitar, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faGear, faMagnifyingGlass, faDownload, faXmark, faCircleExclamation, faGuitar, faCheck)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')