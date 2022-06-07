<template>
  <div class="w-screen min-h-screen h-screen bg-navy overflow-hidden">
    <header-component
      v-model:searchInput="searchInput"
      @searchClick="runSearch"
      @advancedSearchClick="setAdvancedSearchModalVisibility(true)"
      @settingsClick="setSettingsModalVisibility(true)"
    />
    <song-list
      :songList="songList"
      :loading="loading"
      :downloadStatuses="downloadStatuses"
      @showMore="showMore"
    />

    <advanced-search-modal
      v-show="advancedSearchModalVisible"
      @close="setAdvancedSearchModalVisibility(false)"
      @onSubmit="advancedSearchSubmit($event)"
    />
    <settings-modal
      v-show="settingsModalVisible"
      @close="setSettingsModalVisibility(false)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './assets/global.css'

import HeaderComponent from './components/HeaderComponent.vue'
import AdvancedSearchModal from './components/AdvancedSearchModal.vue'
import SettingsModal from './components/SettingsModal.vue'
import SongList from './components/SongList.vue'
import SongData from './types/SongData'

import runQuery from './utils/runQuery'
import ExtendedWindow from './types/ExtendedWindow'
import DownloadStatus from './types/DownloadStatus'

let songList: SongData[] = []
let lastQuery = ''
let downloadStatuses: any = {}

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    AdvancedSearchModal,
    SettingsModal,
    SongList,
  },
  data() {
    return {
      advancedSearchModalVisible: false,
      settingsModalVisible: false,
      songList,
      searchInput : '',
      lastQuery,
      loading: false,

      downloadStatuses,
    }
  },
  methods: {
    runSearch(query: string) {
      this.songList = []
      this.executeQuery(`search?query=${encodeURIComponent(query)}&from=0`)
    },
    executeQuery(query: string, append = false) {
      console.log(query)

      this.lastQuery = query
      this.loading = true

      runQuery(this.lastQuery).then((results) => {
        console.log(results)

        if(!append) {
          this.songList = []
        }

        this.songList = this.songList.concat(results)
        this.loading = false
      }).catch((err) => {
        alert(err)
        this.loading = false
      })
    },
    showMore(songCount: number) {
      const urlQuery = new URLSearchParams(this.lastQuery.split('?')[1])
      urlQuery.set('from', songCount.toString())

      this.executeQuery(`${this.lastQuery.split('?')[0]}?${urlQuery.toString()}`, true)
    },
    advancedSearchSubmit(query: string) {
      this.searchInput = query
      this.runSearch(query)
    },
    setAdvancedSearchModalVisibility(visible: boolean) {
      this.advancedSearchModalVisible = visible
    },
    setSettingsModalVisibility(visible: boolean) {
      this.settingsModalVisible = visible
    },
  },
  mounted() {
    // GET 20 LATEST CHARTS
    this.executeQuery(`latest?from=0`)

    const extendedWindow: ExtendedWindow = window

    extendedWindow.ipc?.on('DOWNLOAD_STATUS', (downloadStatus, _) => {
      console.log(downloadStatus)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.downloadStatuses[downloadStatus.hash] = downloadStatus
    })
  },
})
</script>