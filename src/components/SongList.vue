<template>
  <div
    id="song-list"
    class="relative max-w-5xl w-full px-4 mx-auto h-full max-h-full overflow-y-auto pb-20"
  >
    <song-component
      v-for="(song, index) in listOfSongs"
      :key="index"
      :song="song"
    />
  </div>
</template>

<script lang="ts">
import SongData from '@/types/SongData'
import { defineComponent } from 'vue'
import SongComponent from './SongComponent.vue'

const listOfSongsRaw = `
  [
    {
      "id": 229,
      "name": "Guitar Solo (Live - Seattle '89)",
      "artist": "Metallica",
      "album": "...And Justice for All (Remastered Deluxe Box Set)",
      "genre": "Thrash Metal",
      "year": "2018",
      "charter": "CyclopsDragon",
      "length": 393,
      "effectiveLength": 390,
      "tier_band": null,
      "tier_guitar": 6,
      "tier_bass": null,
      "tier_rhythm": null,
      "tier_drums": null,
      "tier_vocals": null,
      "tier_keys": null,
      "tier_guitarghl": null,
      "tier_bassghl": null,
      "diff_guitar": 8,
      "diff_bass": null,
      "diff_rhythm": null,
      "diff_drums": null,
      "diff_keys": null,
      "diff_guitarghl": null,
      "diff_bassghl": null,
      "isPack": false,
      "hasForced": true,
      "hasOpen": {
        
      },
      "hasTap": true,
      "hasSections": true,
      "hasStarPower": true,
      "hasSoloSections": true,
      "is120": false,
      "hasStems": false,
      "hasVideo": false,
      "hasLyrics": false,
      "hasNoAudio": false,
      "needsRenaming": false,
      "isFolder": false,
      "hasBrokenNotes": false,
      "hasBackground": false,
      "noteCounts": {
        "guitar": {
          "x": 2218
        }
      },
      "lastModified": "2020-07-10T20:35:10.000Z",
      "uploadedAt": "2020-07-11T02:35:17.000Z",
      "link": "https://drive.google.com/file/d/1qe9XJaZta7pEkK9ZmiGQl0ndknWGMlAy/view?usp=drivesdk",
      "directLinks": {
        "archive": "https://drive.google.com/uc?id=1qe9XJaZta7pEkK9ZmiGQl0ndknWGMlAy&export=download"
      },
      "sources": [
        {
          "id": 1,
          "name": "CSC Charters",
          "link": "https://drive.google.com/drive/u/1/folders/1kgPCEt990poTNQC5tM0x8ghKOLVgDIZt",
          "parent": {
            "link": "https://drive.google.com/drive/folders/1vqCE8SY8g-c9wxazFANvleKPo04Qkgpu",
            "name": "CyclopsDragon's charts and stuff"
          },
          "isSetlist": false
        }
      ],
      "hashes": {
        "guitar": {
          "x": "77d0052b7d3551f5804055ac82713f26"
        },
        "file": "fe737984d5841770e2e1567f433883ef"
      }
    },
    {
      "id": 324,
      "name": "One, but it's only beat one",
      "artist": "Metallica",
      "album": "...And Justice for All",
      "genre": "Thrash Metal",
      "year": "1988",
      "charter": "CyclopsDragon",
      "length": 135,
      "effectiveLength": 125,
      "tier_band": null,
      "tier_guitar": 6,
      "tier_bass": null,
      "tier_rhythm": null,
      "tier_drums": null,
      "tier_vocals": null,
      "tier_keys": null,
      "tier_guitarghl": null,
      "tier_bassghl": null,
      "diff_guitar": 8,
      "diff_bass": null,
      "diff_rhythm": null,
      "diff_drums": null,
      "diff_keys": null,
      "diff_guitarghl": null,
      "diff_bassghl": null,
      "isPack": false,
      "hasForced": true,
      "hasOpen": {
        "guitar": true
      },
      "hasTap": true,
      "hasSections": true,
      "hasStarPower": true,
      "hasSoloSections": true,
      "is120": false,
      "hasStems": false,
      "hasVideo": false,
      "hasLyrics": true,
      "hasNoAudio": false,
      "needsRenaming": false,
      "isFolder": false,
      "hasBrokenNotes": false,
      "hasBackground": false,
      "noteCounts": {
        "guitar": {
          "x": 734
        }
      },
      "lastModified": "2019-06-16T07:53:56.000Z",
      "uploadedAt": "2019-06-16T13:56:20.912Z",
      "link": "https://drive.google.com/file/d/1yio6T_kLMJ5hE0rR5A757VWcvqaFvLBe/view?usp=drivesdk",
      "directLinks": {
        "archive": "https://drive.google.com/uc?id=1yio6T_kLMJ5hE0rR5A757VWcvqaFvLBe&export=download"
      },
      "sources": [
        {
          "id": 1,
          "name": "CSC Charters",
          "link": "https://drive.google.com/drive/u/1/folders/1kgPCEt990poTNQC5tM0x8ghKOLVgDIZt",
          "parent": {
            "link": "https://drive.google.com/drive/folders/1vqCE8SY8g-c9wxazFANvleKPo04Qkgpu",
            "name": "CyclopsDragon's charts and stuff"
          },
          "isSetlist": false
        }
      ],
      "hashes": {
        "file": "2d80672d468b58390437602e5deeff5a",
        "guitar": {
          "x": "6db1438fa4d4fce34960650a127230be"
        }
      }
    }
  ]`
const listOfSongs = JSON.parse(listOfSongsRaw) as SongData[]

export default defineComponent({
  name: 'SongList',
  props: [ 'songList' ],
  data() {
    return {
      listOfSongs
    }
  },
  components: {
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
