import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faMagnifyingGlass, faDownload } from '@fortawesome/free-solid-svg-icons'

library.add(faGear, faMagnifyingGlass, faDownload)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
