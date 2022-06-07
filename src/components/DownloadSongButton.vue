<template>
  <button
    class="w-auto h-10 rounded-md bg-transparent hover:bg-navy-darker text-base text-primary px-3 py-2"
    :class="{
      'text-tertiary bg-gray-700 hover:bg-gray-700': hash == 'N-A',
      'hover:bg-transparent': downloadStatus.status == 'DOWNLOADED',
    }"
    :style="downloadStatus && downloadStatus.status == 'DOWNLOADING' ? `background: linear-gradient(to right, ${tailwindNavy}, ${tailwindNavy} ${downloadStatus.progress * 100}%, transparent 0); border: solid 2px ${tailwindNavy}` : ''"
    :disabled="hash == 'N-A' || downloadStatus.status == 'DOWNLOADED'"
  >
    <span v-if="!downloadStatus || !downloadStatus.status">
      Download <span class="font-semibold">{{ charter }}</span>'s chart
      <font-awesome-icon icon="download" class="ml-1 mb-0.5" />
    </span>
    <span v-if="downloadStatus && downloadStatus.status == 'DOWNLOADING'">
      Downloading {{ toFixed((downloadStatus.progress * 100).toString(), 2) }}%
    </span>
    <span v-if="downloadStatus && downloadStatus.status == 'WAITING'">
      Waiting for server response...
    </span>
    <span v-if="downloadStatus && downloadStatus.status == 'DOWNLOADED'">
      Song downloaded <font-awesome-icon icon="check" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindConfig from '@/../tailwind.config.js'
import DownloadStatus from '@/types/DownloadStatus'

export default defineComponent({
  props: {
    downloadStatus: {
      type: Object as PropType<DownloadStatus>,
      required: false,
    },
    charter: {
      type: String as PropType<string>,
      required: true,
    },
    hash: {
      type: String as PropType<string>,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    tailwindNavy() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return resolveConfig(tailwindConfig).theme.colors['navy']
    }
  },
  methods: {
    toFixed(num: string, fixed: number) {
      // eslint-disable-next-line
      var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
      return num.toString().match(re)![0];
    }
  }
})
</script>