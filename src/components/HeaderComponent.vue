<template>
  <div class="bg-navy-lighter w-screen h-auto flex flex-row py-2 px-2">
    <img
      src="http://placebear.com/g/40/40"
      class="rounded-full"
    />
    <input 
      type="text"
      placeholder="Search for a song..."
      class="flex-1 h-10 border border-gray-400 bg-white rounded-md ml-2 focus:outline-none px-4 font-mono"
      v-model="searchQuery"
    />
    <button
      class="h-10 px-2 ml-1 border border-gray-400 bg-white font-mono rounded-md"
      @click="$emit('searchClick', searchQuery)"
    >
      Search
    </button>
    <button
      class="h-10 px-2 ml-1 border border-gray-400 bg-white font-mono rounded-md"
      @click="$emit('advancedSearchClick')"
    >
      Advanced Search
    </button>
    <button
      class="h-10 px-2 ml-1 border border-gray-400 bg-white font-mono rounded-md"
      @click="$emit('settingsClick')"
    >
      Settings
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  emits: ['searchClick', 'advancedSearchClick', 'settingsClick'],
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    sayHi() {
      alert('Hi man!')
    },
  },
})
</script>
