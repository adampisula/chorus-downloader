<template>
  <div class="bg-navy-lighter w-screen h-auto flex flex-row py-2 px-2 border-b-2 border-navy-darker">
    <img
      src="http://placebear.com/g/40/40"
      class="rounded-full"
    />
    <div class="flex-1 h-auto ml-2 relative">
      <input 
        type="text"
        placeholder="What do you feel like playing today?"
        spellcheck="false"
        class="w-full h-10 border border-gray-400 bg-white rounded-md focus:outline-none pl-4 pr-10 font-sans font-normal text-sm"
        v-model="searchQuery"
      />
      <button
        class="absolute right-1 top-1 h-8 w-8 px-2 ml-1 bg-white text-lg rounded-full text-gray-300 hover:text-gray-400"
        @click="$emit('searchClick', searchQuery)"
      >
        <font-awesome-icon icon="magnifying-glass" />
      </button>
    </div>
    <button
      class="h-10 px-2 ml-2 border-none bg-transparent font-sans text-sm text-highlight rounded-md hover:bg-navy-darker"
      @click="$emit('advancedSearchClick')"
    >
      Advanced Search
    </button>
    <button
      class="h-10 w-10 px-2 ml-1 bg-transparent rounded-md text-primary text-xl hover:bg-navy-darker"
      @click="$emit('settingsClick')"
    >
      <font-awesome-icon icon="gear" />
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
