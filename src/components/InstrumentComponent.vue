<template>
  <Popper
    :hover="true"
    :arrow="true"
  >
    <div class="inline-block ml-2 h-10 w-8 relative">
      <div class="relative">
        <img 
          :src="instrumentIcons[instrument.name]"
          class="h-7 mx-auto"
        />
        <pie-chart
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :fill="(instrument.tier / 6) || 0"
        />
        <span class="text-xs font-sans font-semibold inline-block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary">
          {{ displayTier(instrument.tier) }}
        </span>
      </div>
      <span class="text-2xs font-sans text-primary inline-block w-full text-center absolute -bottom-0.5">
        {{ `${this.instrument.difficulty.e ? 'E' : ''}${this.instrument.difficulty.m ? 'M' : ''}${this.instrument.difficulty.h ? 'H' : ''}${this.instrument.difficulty.x ? 'X' : ''}` }}
      </span>
    </div>
    <template #content>
      <div class="font-sans text-xs text-primary">
        <span
          v-for="(difficulty, index) in diffNotes"
          :key="index"
          class="block mb-1 last:mb-0"
        >
          <span class="block">
            <span class="font-semibold">{{ (difficulty[0] == 'e') ? 'Easy' : (difficulty[0] == 'm') ? 'Medium' : (difficulty[0] == 'h') ? 'Hard' : (difficulty[0] == 'x') ? 'Expert' : '-' }}: </span>
            {{ difficulty[1] }}
          </span>
          <span class="block text-2xs text-gray-400 -mt-0.5">
            <span class="font-semibold">Checksum: </span>
            <span class="font-mono">{{ instrument.hashes[difficulty[0]] }}</span>
          </span>
        </span>
      </div>
    </template>
  </Popper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type InstrumentTierAndDiff from '../types/InstrumentTierAndDiff'
import PieChart from './PieChart.vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Popper from 'vue3-popper' // NO TYPES AVAILABLE

let diffNotes: any = []

export default defineComponent({
  props: {
    instrument: {
      type: Object as PropType<InstrumentTierAndDiff>,
      required: true,
    }
  },
  components: {
    PieChart,
    Popper,
  },
  data() {
    return {
      // INSTRUMENT ICONS
      instrumentIcons: {
        'guitar': require('../assets/instruments/guitar.svg'),
        'bass': require('../assets/instruments/bass.svg'),
        'guitarghl': require('../assets/instruments/guitarghl.svg'),
        'bassghl': require('../assets/instruments/bassghl.svg'),
        'drums': require('../assets/instruments/drums.svg'),
        'keys': require('../assets/instruments/keys.svg'),
      },
      diffNotes,
    }
  },
  methods: {
    displayTier(tier: any): string {
      switch(tier) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          return tier.toString()
        default:
          return '?'
      }
    }
  },
  mounted() {
    const diffOrder = ['e', 'm', 'h', 'x']
    const sortedDiffNotes = []

    for(const diffNotes in this.instrument.difficulty) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sortedDiffNotes.push([diffNotes, this.instrument.difficulty[diffNotes]])
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.diffNotes = sortedDiffNotes.sort((a: string, b: string) => diffOrder.indexOf(a[0]) - diffOrder.indexOf(b[0]))
  },
})
</script>
