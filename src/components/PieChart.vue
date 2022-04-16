<template>
  <div class="pie-chart w-4 h-4 rounded-full bg-gray-800 border border-gray-800">

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

let computedFill: string
let maskBackground: string

export default defineComponent({
  props: {
    fill: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      computedFill,
      maskBackground,
    }
  },
  mounted() {
    this.computedFill = `${Math.min((this.fill > 0.5) ? this.fill - 0.5 : this.fill, 1) * 360}deg`
    this.maskBackground = (this.fill > 0.5) ? 'red' : 'rgb(31, 41, 55)'

    console.log(this.computedFill)
    console.log(this.maskBackground)
    console.log('-')
  },
})
</script>

<style scoped>
  .pie-chart {
    background-image: linear-gradient(to right, transparent 50%, red 0);
  }

  .pie-chart::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: v-bind(maskBackground);
    transform-origin: left;
    transform: rotate(v-bind(computedFill));
  }


</style>
