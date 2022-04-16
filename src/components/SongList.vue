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
    },
    {
      "id": 893,
      "name": "No Remorse",
      "artist": "Metallica",
      "album": "Kill 'Em All",
      "genre": "Thrash Metal",
      "year": "1983",
      "charter": "Sygenysis + Nunchuck",
      "length": 386,
      "effectiveLength": 381,
      "tier_band": 4,
      "tier_guitar": 5,
      "tier_bass": 4,
      "tier_rhythm": null,
      "tier_drums": 5,
      "tier_vocals": 1,
      "tier_keys": null,
      "tier_guitarghl": null,
      "tier_bassghl": null,
      "diff_guitar": 15,
      "diff_bass": 15,
      "diff_rhythm": null,
      "diff_drums": 15,
      "diff_keys": null,
      "diff_guitarghl": null,
      "diff_bassghl": null,
      "isPack": false,
      "hasForced": false,
      "hasOpen": {
        
      },
      "hasTap": false,
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
      "hasBrokenNotes": true,
      "hasBackground": false,
      "noteCounts": {
        "bass": {
          "e": 584,
          "h": 1635,
          "m": 1019,
          "x": 1956
        },
        "drums": {
          "e": 1070,
          "h": 1556,
          "m": 1070,
          "x": 1945
        },
        "guitar": {
          "e": 706,
          "h": 1820,
          "m": 1120,
          "x": 2453
        }
      },
      "lastModified": "2017-09-29T18:33:10.000Z",
      "uploadedAt": "2021-10-21T02:00:47.000Z",
      "link": "https://drive.google.com/file/d/1qcZ4TwnHoPSAeM6s23cC0p0OAQXF3jnq/view?usp=drivesdk",
      "directLinks": {
        "archive": "https://drive.google.com/uc?id=1qcZ4TwnHoPSAeM6s23cC0p0OAQXF3jnq&export=download"
      },
      "sources": [
        {
          "id": 1,
          "name": "CSC Charters",
          "link": "https://drive.google.com/drive/u/1/folders/1kgPCEt990poTNQC5tM0x8ghKOLVgDIZt",
          "parent": {
            "link": "https://drive.google.com/drive/folders/1hMe6a6fs4Z_YdG4mES9aBbTH37Xj2zqq",
            "name": "Sygenysis's Charts/Everything/M/Metallica"
          },
          "isSetlist": false
        }
      ],
      "hashes": {
        "drums": {
          "x": "f5b699cf2a41eed8eeadefebccb8e1b7",
          "e": "9a861b3eab41400f0748194d68aec363",
          "m": "90e0f979b88f604662cad8767d83b29e",
          "h": "c1de5197c287f033113288699e33b804"
        },
        "guitar": {
          "h": "9917745d854e1fd7bac544a86c99a36a",
          "x": "37f2734b4c110141631fc32cfd171f02",
          "m": "af57f3b86f64860735e511c5072d6640",
          "e": "b7db8d1bb798a242ef58f3678b45790c"
        },
        "file": "5d9028f8c8fb67346f12a31d3c99d253",
        "bass": {
          "e": "6fe504aae0344dc5be41e27c9d8c433f",
          "x": "e728a57e6811a83eb20082e7b1ffa5e8",
          "m": "e5c4b6ee22bc3f2adbd8fdb1add0639e",
          "h": "58cf2614bf8e33f798a77f3aeeb87aa9"
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
