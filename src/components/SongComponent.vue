<template>
  <div
    class="mt-2 px-3 py-2 w-full min-h-24 h-auto rounded-md odd:bg-navy-lighter even:bg-navy-very-light shadow-lg flex flex-row"
  >
    <div class="flex-1 h-auto">
      <div
        class="w-full h-auto relative border-b border-gray-400 flex flex-row"
      >
        <div class="flex-1">
          <span
            class="text-sm font-sans font-bold text-secondary mr-1.5"
          >
            {{ song.artist }}
          </span>
          <span
            class="text-lg font-sans font-bold text-primary"
          >
            {{ song.name }}
          </span>
          <span
            class="ml-2 text-lg text-warning"
            v-if="instruments.length == 0"
          >
            <Popper
              :hover="true"
              :arrow="true"
            >
              <font-awesome-icon icon="circle-exclamation" />
              <template #content>
                <span class="font-sans text-primary text-base">
                  Corrupted file
                </span>
              </template>
            </Popper>
          </span>
        </div>
        <div>
          <span class="text-xs font-sans text-primary">
            <span class="font-semibold mr-0.5">
              {{ ratingNotes }}
            </span>
            {{ averageNotes }} average NPS
          </span>
        </div>
      </div>
      <div class="w-full h-auto mt-0.5">
        <div class="w-full h-auto flex flex-row justify-between">
          <span class="font-sans text-2xs text-secondary">
            {{ `${song.album || 'Unknown album'} (${song.year || 'N-A'}) - ${song.genre || 'Unknown genre'} - ${(song.length > 0) ? secondsToMinutes(song.length): 'N-A'} (${(song.effectiveLength > 0) ? secondsToMinutes(song.effectiveLength) : 'N-A'})` }}
          </span>
          <span class="font-sans text-2xs text-secondary">
            {{ song.lastModified || song.uploadedAt }} - 
            <a
              class="font-mono"
              :href="`${siteUrl}/search?query=md5%3D${getMainHash()}`"
              target="_blank"
            >
              {{ getMainHash() }}
            </a>
          </span>
        </div>
      </div>
      <div class="w-full h-10 mt-1 flex justify-between">
        <div>
          <button
            class="w-auto h-10 rounded-md bg-transparent hover:bg-navy-darker text-base text-primary px-3 py-2"
            :class="{
              'text-tertiary bg-gray-700 hover:bg-gray-700': getMainHash() == 'N-A'
            }"
            :disabled="getMainHash() == 'N-A'"
            @click="alert('click')"

          >
            Download <span class="font-semibold">{{ this.song.charter || 'Unknown charter' }}</span>'s chart
            <font-awesome-icon icon="download" class="ml-1 mb-0.5" />
          </button>
        </div>
        <div class="">
          <instrument-component
            v-for="(instrument, index) in instruments"
            :key="index"
            :instrument="instrument"
          />
        </div>
      </div>
    </div>

    <div class="w-1.5 my-1 ml-3 -mr-1 bg-gray-400 relative rounded-full flex items-col items-end">
      <div
        class="bottom-0 w-full bg-highlight h-1/2 rounded-full"
        :style="`height: ${Math.min(averageNotes / 15, 1) * 100}%`">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type SongData from '../types/SongData'
import type { PropType } from 'vue'
import type NoteCounts from '../types/NoteCounts'
import type InstrumentTierAndDiff from '../types/InstrumentTierAndDiff'
import InstrumentComponent from './InstrumentComponent.vue'
import { siteUrl } from '../config'

//import { ipcRenderer } from 'electron'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Popper from 'vue3-popper' // NO TYPES AVAILABLE

let averageNotes: number
let ratingNotes: string
let instruments: InstrumentTierAndDiff[] = []

export default defineComponent({
  components: {
    InstrumentComponent,
    Popper,
  },
  name: 'SongComponent',
  props: {
    song: {
      type: Object as PropType<SongData>,
      required: true
    },
  },
  data() {
    return {
      siteUrl,
      averageNotes,
      ratingNotes,
      instruments,
    }
  },
  methods: {
    getMainHash() {
      return (this.song.hashes) ? (this.song.hashes.file || 'N-A') : 'N-A'
    },
    averageNPS(noteCounts: NoteCounts, effectiveLength: number): number {
      const instrumentsOrder = ['guitar', 'bass', 'guitarghl', 'bassghl', 'drums', 'band', 'rhythm', 'keys', 'vocals']

      for(let i = 0; i < instrumentsOrder.length; i++) {
        const instrument = instrumentsOrder[i]

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if(noteCounts && noteCounts[instrument]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const notes: number = noteCounts[instrument].x || noteCounts[instrument].h || noteCounts[instrument].m || noteCounts[instrument].e || 0

          return Math.round(notes / effectiveLength * 100) / 100
        }
      }

      return 0
    },
    ratingNPS(average: number): string {
      const ratings = [
        'Are there even any notes?', // 0
        'First steps', // 1
        'Warmup', // 2
        'Apprentice', // 3
        'Solid', // 4
        'Moderate', // 5
        'Challenging', // 6
        'Nightmare', // 7
        'Pretty hard', // 8
        'Pretty damn hard', // 9
        "It's starting to hurt", // 10
        'Carpal tunnel', // 11
        'Basically Soulless 4', // 12
        'ouch', // 13
        'God help me', // 14
        "...I'm out", // 15
      ];

      for(let i = 1; i < ratings.length; i++) {
        if(average < i) {
          return ratings[i - 1]
        }
      }

      return ratings[0]
    },
    secondsToMinutes(length: number): string {
      return `${Math.floor(length / 60)}:${(0 + (length % 60).toString()).slice(-2)}`
    },
    downloadAndInstall() {
      //ipcRenderer.send('download-song', this.getMainHash())
    },
  },
  mounted() {
    this.averageNotes = this.averageNPS(this.song.noteCounts, this.song.effectiveLength)
    this.ratingNotes = this.ratingNPS(this.averageNotes)

    const displayInstruments = ['guitar', 'bass', 'guitarghl', 'bassghl', 'drums', 'keys']
    let instrumentsAvailable: InstrumentTierAndDiff[] = []

    for(const key in this.song.noteCounts) {
      if(displayInstruments.includes(key)) {
        instrumentsAvailable.push({
          name: key,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          tier: this.song[`tier_${key}`],
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          difficulty: this.song.noteCounts[key],
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          hashes: this.song.hashes[key],
        })
      }
    }

    this.instruments = instrumentsAvailable.sort((a, b) => {
      return displayInstruments.indexOf(a.name) - displayInstruments.indexOf(b.name)
    })
  }
})
</script>
