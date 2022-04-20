<template>
  <div class="mx-auto my-3">
    <div class="pl-3 block">
      <span class="font-sans text-sm text-primary ml-9 block">{{ label }}</span>
      <div class="block">
        <span
          class="inline-block text-4xl font-sans text-primary mr-4 cursor-pointer"
          @click="onSelectTier(-1)"
        >{{ (tierSelected.slice(0, 2) == 'gt') ? '≥' : '≤' }}</span>
        <div
          class="inline-block rounded-full w-7 h-7 border border-primary bg-primary bg-opacity-0 cursor-pointer"
          :class="{
            'bg-opacity-40': parseInt(tierSelected.slice(-1)) >= 1,
          }"
          @click="onSelectTier(1)"
        ></div>
        <div
          class="inline-block rounded-full w-7 h-7 border border-primary bg-primary bg-opacity-0 cursor-pointer"
          :class="{
            'bg-opacity-40': parseInt(tierSelected.slice(-1)) >= 2,
          }"
          @click="onSelectTier(2)"
        ></div>
        <div
          class="inline-block rounded-full w-7 h-7 border border-primary bg-primary bg-opacity-0 cursor-pointer"
          :class="{
            'bg-opacity-40': parseInt(tierSelected.slice(-1)) >= 3,
          }"
          @click="onSelectTier(3)"
        ></div>
        <div
          class="inline-block rounded-full w-7 h-7 border border-primary bg-primary bg-opacity-0 cursor-pointer"
          :class="{
            'bg-opacity-40': parseInt(tierSelected.slice(-1)) >= 4,
          }"
          @click="onSelectTier(4)"
        ></div>
        <div
          class="inline-block rounded-full w-7 h-7 border border-primary bg-primary bg-opacity-0 cursor-pointer"
          :class="{
            'bg-opacity-40': parseInt(tierSelected.slice(-1)) >= 5,
          }"
          @click="onSelectTier(5)"
        ></div>
      </div>
    </div>
    <div
      v-if="showDifficulty"
      class="w-full inline-block text-center mt-1"
    >
      <button
        class="px-3 py-1 first:rounded-tl-md first:rounded-bl-md bg-darker border border-navy-very-light border-r border-r-tertiary last:border-r-navy-very-light last:rounded-tr-md last:rounded-br-md font-sans text-primary text-lg"
        :class="{
          'bg-navy-very-light': isDifficultyLevelActive(1)
        }"
        @click="toggleDifficulty(1)"
      >E</button>
      <button
        class="px-3 py-1 first:rounded-tl-md first:rounded-bl-md bg-darker border border-navy-very-light border-r border-r-tertiary last:border-r-navy-very-light last:rounded-tr-md last:rounded-br-md font-sans text-primary text-lg"
        :class="{
          'bg-navy-very-light': isDifficultyLevelActive(2)
        }"
        @click="toggleDifficulty(2)"
      >M</button>
      <button
        class="px-3 py-1 first:rounded-tl-md first:rounded-bl-md bg-darker border border-navy-very-light border-r border-r-tertiary last:border-r-navy-very-light last:rounded-tr-md last:rounded-br-md font-sans text-primary text-lg"
        :class="{
          'bg-navy-very-light': isDifficultyLevelActive(4)
        }"
        @click="toggleDifficulty(4)"
      >H</button>
      <button
        class="px-3 py-1 first:rounded-tl-md first:rounded-bl-md bg-darker border border-navy-very-light border-r border-r-tertiary last:border-r-navy-very-light last:rounded-tr-md last:rounded-br-md font-sans text-primary text-lg"
        :class="{
          'bg-navy-very-light': isDifficultyLevelActive(8)
        }"
        @click="toggleDifficulty(8)"
      >X</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    showDifficulty: {
      type: Boolean,
      default: true,
    },
    tierSelected: {
      type: String,
      default: '',
    },
    difficultySelected: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onSelectTier(tier: number) {
      let emitGreaterOrLower = (tier == -1) ? ((this.tierSelected.slice(0, 2) == 'gt') ? 'lt' : 'gt') : this.tierSelected.slice(0, 2)

      if(tier == parseInt(this.tierSelected.slice(-1))) {
        tier = 0
      }

      let emitTier = (tier == -1) ? this.tierSelected.slice(-1) : tier

      this.$emit('update:tierSelected', `${emitGreaterOrLower}${emitTier}`)
    },
    isDifficultyLevelActive(level: number) {
      return (this.difficultySelected & level) > 0
    },
    toggleDifficulty(level: number) {
      let emitDifficulty = this.difficultySelected

      if(this.isDifficultyLevelActive(level)) {
        emitDifficulty -= level
      } else {
        emitDifficulty += level
      }

      this.$emit('update:difficultySelected', emitDifficulty)
    }
  },
})
</script>
