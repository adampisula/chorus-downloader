<template>
  <button
    class="mx-auto my-2 rounded-md font-sans bg-transparent bg-opacity-0 hover:bg-navy-darker px-3 py-2 text-tertiary"
    :class="{
      'text-primary': modelValue == 1 || modelValue == 0,
    }"
    @click="updateValue"
  >
    {{ `${(modelValue == 0) ? 'NO ' : ''}${label}` }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      default: -1,
    },
  },
  methods: {
    updateValue(e: any) {
      let newState = -1

      if(this.modelValue == -1) {
        newState = 1  
      } else if(this.modelValue == 1) {
        newState = 0
      } else {
        newState = 1
      }

      this.$emit('update:modelValue', newState)
    },
  },
})
</script>
