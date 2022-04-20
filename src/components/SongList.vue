<template>
  <div
    id="song-list"
    class="relative max-w-5xl w-full px-4 mx-auto h-full max-h-full overflow-y-auto pb-20"
  >
    <song-component
      v-for="(song, index) in songList"
      :key="index"
      :song="song"
    />
    <div class="w-full text-center">
      <button
        class="mx-auto mt-2 text-base font-sans text-highlight p-2 rounded-md hover:bg-navy-darker"
        v-if="songList.length % 20 == 0 && songList.length > 0 && loading == false"
        @click="$emit('showMore', songList.length)"
      >
        More songs
      </button>
    </div>
    <span
      class="font-sans text-base text-primary mt-2"
      v-if="songList.length == 0 && loading == false"
    >
      Sorry, we couldn't find anything!
    </span>
    <loader-component
      v-if="loading == true"
    />
  </div>
</template>

<script lang="ts">
import SongData from '@/types/SongData'
import { defineComponent, PropType } from 'vue'
import SongComponent from './SongComponent.vue'
import LoaderComponent from './LoaderComponent.vue'

export default defineComponent({
  name: 'SongList',
  props: {
    songList: {
      type: Array as PropType<SongData[]>
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SongComponent,
    LoaderComponent,
  },
})
</script>

<style scoped>
#song-list::-webkit-scrollbar {
  width: 0.5rem;
}

#song-list::-webkit-scrollbar-track {
  background: theme('colors.navy-darker');
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 4rem;
}

#song-list::-webkit-scrollbar-thumb {
  background: theme('colors.navy-lighter');
  border-radius: 0.25rem;
}

#song-list::-webkit-scrollbar-thumb:active {
  background: theme('colors.navy-very-light');
}
</style>
