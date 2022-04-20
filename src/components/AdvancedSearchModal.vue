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
      class="px-5 py-2 max-w-5xl w-5/6 h-auto rounded-md bg-navy shadow-lg mx-auto my-8 text-center"
    >
      <div class="w-full grid grid-cols-3 text-left">
        <advanced-search-text-input
          label="Song"
          v-model="advancedSearchData.name"
        />
        <advanced-search-text-input
          label="Artist/band"
          v-model="advancedSearchData.artist"
        />
        <advanced-search-text-input
          label="Album"
          v-model="advancedSearchData.album"
        />

        <advanced-search-text-input
          label="Genre"
          v-model="advancedSearchData.genre"
        />
        <advanced-search-text-input
          label="Charter"
          v-model="advancedSearchData.charter"
        />
        <advanced-search-text-input
          label="MD5 Checksum"
          v-model="advancedSearchData.md5"
        />

        <tier-and-difficulty-input
          label="BAND"
          :showDifficulty="false"
          v-model:tierSelected="advancedSearchData.tier_band"
        />
        <tier-and-difficulty-input
          label="GUITAR"
          v-model:tierSelected="advancedSearchData.tier_guitar"
          v-model:difficultySelected="advancedSearchData.diff_guitar"
        />
        <tier-and-difficulty-input
          label="BASS"
          v-model:tierSelected="advancedSearchData.tier_bass"
          v-model:difficultySelected="advancedSearchData.diff_bass"
        />

        <tier-and-difficulty-input
          label="RHYTHM"
          v-model:tierSelected="advancedSearchData.tier_rhythm"
          v-model:difficultySelected="advancedSearchData.diff_rhythm"
        />
        <tier-and-difficulty-input
          label="DRUMS"
          v-model:tierSelected="advancedSearchData.tier_drums"
          v-model:difficultySelected="advancedSearchData.diff_drums"
        />
        <tier-and-difficulty-input
          label="VOCALS"
          :showDifficulty="false"
          v-model:tierSelected="advancedSearchData.tier_vocals"
        />

        <tier-and-difficulty-input
          label="KEYS"
          v-model:tierSelected="advancedSearchData.tier_keys"
          v-model:difficultySelected="advancedSearchData.diff_keys"
        />
        <tier-and-difficulty-input
          label="GUITARGHL"
          v-model:tierSelected="advancedSearchData.tier_guitarghl"
          v-model:difficultySelected="advancedSearchData.diff_guitarghl"
        />
        <tier-and-difficulty-input
          label="BASSGHL"
          v-model:tierSelected="advancedSearchData.tier_bassghl"
          v-model:difficultySelected="advancedSearchData.diff_bassghl"
        />

        <advanced-search-checkbox
          label="FORCED NOTES"
          v-model="advancedSearchData.hasForced"
        />
        <advanced-search-checkbox
          label="OPEN NOTES"
          v-model="advancedSearchData.hasOpen"
        />
        <advanced-search-checkbox
          label="TAP NOTES"
          v-model="advancedSearchData.hasTap"
        />

        <advanced-search-checkbox
          label="SECTIONS"
          v-model="advancedSearchData.hasSections"
        />
        <advanced-search-checkbox
          label="STAR POWER"
          v-model="advancedSearchData.hasStarPower"
        />
        <advanced-search-checkbox
          label="SOLO SECTIONS"
          v-model="advancedSearchData.hasSoloSections"
        />

        <advanced-search-checkbox
          label="STEMS"
          v-model="advancedSearchData.hasStems"
        />
        <advanced-search-checkbox
          label="VIDEO BACKGROUND"
          v-model="advancedSearchData.hasVideo"
        />
        <advanced-search-checkbox
          label="LYRICS"
          v-model="advancedSearchData.hasLyrics"
        />
      </div>
      <button
        @click="onSubmit"
        class="mt-2 mb-2 px-6 py-2 rounded-md font-sans text-primary text-lg hover:bg-navy-darker"
      >Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AdvancedSearchTextInput from './AdvancedSearchTextInput.vue'
import TierAndDifficultyInput from './TierAndDifficultyInput.vue'
import AdvancedSearchCheckbox from './AdvancedSearchCheckbox.vue'

import advancedSearchQueryToString from '../utils/advancedSearchQueryToString'

const advancedSearchDataDefault = {
  name: '',
  artist: '',
  album: '',
  genre: '',
  charter: '',
  md5: '',

  tier_band: 'gt0',
  tier_guitar: 'gt0',
  tier_bass: 'gt0',
  tier_rhythm: 'gt0',
  tier_drums: 'gt0',
  tier_vocals: 'gt0',
  tier_keys: 'gt0',
  tier_guitarghl: 'gt0',
  tier_bassghl: 'gt0',

  diff_guitar: 0,
  diff_bass: 0,
  diff_rhythm: 0,
  diff_drums: 0,
  diff_keys: 0,
  diff_guitarghl: 0,
  diff_bassghl: 0,

  hasForced: -1,
  hasOpen: -1,
  hasTap: -1,
  hasSections: -1,
  hasStarPower: -1,
  hasSoloSections: -1,
  hasStems: -1,
  hasVideo: -1,
  hasLyrics: -1,
}

export default defineComponent({
  name: 'AdvancedSearchModal',
  components: {
    AdvancedSearchTextInput,
    TierAndDifficultyInput,
    AdvancedSearchCheckbox,
  },
  data() {
    return {
      advancedSearchData: JSON.parse(JSON.stringify(advancedSearchDataDefault)), // DEEP COPY
    }
  },
  methods: {
    close() {
      this.resetData()
      this.$emit('close')
    },
    resetData() {
      this.advancedSearchData = JSON.parse(JSON.stringify(advancedSearchDataDefault))
    },
    onSubmit() {
      let query = {}

      for(const key in this.advancedSearchData) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if(this.advancedSearchData[key] != advancedSearchDataDefault[key]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          query[key] = this.advancedSearchData[key]
        }
      }

      this.$emit('onSubmit', advancedSearchQueryToString(query))
      this.close()
    },
  },
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.close()
      }
    })
  },
})
</script>

<style scoped>
#modal-container::-webkit-scrollbar {
  width: 0.5rem;
}

#modal-container::-webkit-scrollbar-track {
  background: theme('colors.navy-darker');
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

#modal-container::-webkit-scrollbar-thumb {
  background: theme('colors.navy-lighter');
  border-radius: 0.25rem;
}

#modal-container::-webkit-scrollbar-thumb:active {
  background: theme('colors.navy-very-light');
}
</style>