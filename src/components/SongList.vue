<template>
  <div
    id="song-list"
    class="relative max-w-5xl w-full px-4 mx-auto h-full max-h-full overflow-y-auto pb-20"
  >
    <song-component />
    <song-component />
    <song-component />
    <song-component />
    <song-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SongComponent from './SongComponent.vue'

export default defineComponent({
  name: 'SongList',
  props: [ 'songList' ],
  components: {
    // eslint-disable-next-line
    SongComponent
  },
  methods: {
    close() {
      this.$emit('close')
    }
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
}

#song-list::-webkit-scrollbar-thumb {
  background: theme('colors.navy-lighter');
  border-radius: 0.25rem;
}

#song-list::-webkit-scrollbar-thumb:active {
  background: theme('colors.navy-very-light');
}
</style>
