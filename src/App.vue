<template>
  <div class="w-screen min-h-screen h-auto bg-navy">
    <header-component
      @searchClick="runSearch"
      @advancedSearchClick="setAdvancedSearchModalVisibility(true)"
      @settingsClick="setSettingsModalVisibility(true)"
    />
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

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    AdvancedSearchModal,
    SettingsModal
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