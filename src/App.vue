<template>
  <div class="w-screen min-h-screen h-screen bg-navy overflow-hidden">
    <header-component
      @searchClick="runSearch"
      @advancedSearchClick="setAdvancedSearchModalVisibility(true)"
      @settingsClick="setSettingsModalVisibility(true)"
    />
    <song-list />

    <advanced-search-modal
      v-show="advancedSearchModalVisible"
      @close="setAdvancedSearchModalVisibility(false)"
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
    }
  },
  methods: {
    runSearch(query: string) {
      alert(query)
    },
    setAdvancedSearchModalVisibility(visible: boolean) {
      this.advancedSearchModalVisible = visible
    },
    setSettingsModalVisibility(visible: boolean) {
      this.settingsModalVisible = visible
    },
  },
})
</script>