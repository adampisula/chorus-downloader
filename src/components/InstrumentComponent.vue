<template>
  <div class="inline-block ml-2 h-10 w-8 relative">
    <div class="relative">
      <img 
        :src="instrumentIcons[instrument.name]"
        class="h-7 mx-auto"
      />
      <pie-chart
        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        :fill="instrument.tier / 6"
      />
      <span class="text-xs font-sans font-semibold inline-block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary">
        {{ instrument.tier }}
      </span>
    </div>
    <span class="text-2xs font-sans text-primary inline-block w-full text-center absolute -bottom-0.5">
      {{ `${this.instrument.difficulty.e ? 'E' : ''}${this.instrument.difficulty.m ? 'M' : ''}${this.instrument.difficulty.h ? 'H' : ''}${this.instrument.difficulty.x ? 'X' : ''}` }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type InstrumentTierAndDiff from '../types/InstrumentTierAndDiff'
import PieChart from './PieChart.vue'

export default defineComponent({
  props: {
    instrument: {
      type: Object as PropType<InstrumentTierAndDiff>,
      required: true,
    }
  },
  components: {
    PieChart,
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
    }
  },
})
</script>
