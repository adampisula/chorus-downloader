<template>
  <div
    class="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-70 overflow-y-auto"
    @keypress.esc="close"
    id="modal-container"
  >
    <button
      class="fixed right-4 top-5 rounded-md bg-white bg-opacity-0 hover:bg-opacity-10 text-2xl text-primary py-2 px-4"
      @click="close"
    >
      <font-awesome-icon icon="xmark" />
    </button>
    <div
      class="px-5 py-2 max-w-5xl w-5/6 h-auto rounded-md bg-navy shadow-lg mx-auto my-8"
    >
      <!--<advanced-search-text-input
        label="7-zip Executable"
        v-model:modelValue="newConfig.executablePath7Zip"
      />-->
      <button
        @click="save"
      >
        {{ (this.saveStatus == 'NONE') ? 'Save' : '' }}
        {{ (this.saveStatus == 'IN PROGRESS') ? 'Saving...' : '' }}
        {{ (this.saveStatus == 'SUCCESS') ? 'Saved successfully' : '' }}
        {{ (this.saveStatus == 'ERROR') ? 'Error while saving' : '' }}
      </button>
    </div>
    <span class="absolute right-2 bottom-2 text-sm text-gray-400">
      made with 🎸 by 
      <a 
        href="https://adampisula.pizza/"
        target="_blank"
        class="underline"
      >
        Adam Pisula
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TextInputWithLabel from './TextInputWithLabel.vue'
import type ExtendedWindow from '../types/ExtendedWindow'

import type { IpcMain } from 'electron'

let saveStatus: 'ERROR' | 'SUCCESS' | 'IN PROGRESS' | 'NONE' = 'NONE'

export default defineComponent({
  components: {
    //TextInputWithLabel,
  },
  name: 'SettingsModal',
  props: {
  },
  data() {
    return {
      saveStatus,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    save() {
      const extendedWindow: ExtendedWindow = window

      console.log('hello')
      console.log(extendedWindow)
      console.log(extendedWindow?.ipc)
    },
  },
})
</script>
