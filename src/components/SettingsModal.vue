<template>
  <div
    class="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-70"
    @click="close"
  >
    <h1 class="font-mono text-4xl text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Settings</h1>
    <span class="absolute right-2 bottom-2 text-sm text-gray-400">
      made with 🎸 by 
      <a 
        href="https://github.com/adampisula"
        target="_blank"
        class="underline"
      >
        Adam Pisula
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SettingsModal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>
