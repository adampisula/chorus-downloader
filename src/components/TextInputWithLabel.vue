<template>
  <div class="mx-3 my-2">
    <span class="font-sans text-primary text-sm ml-1">{{ label }}</span>
    <input
      type="text"
      class="w-full h-10 font-sans text-base pl-4 outline-none rounded-md border border-tertiary"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String as PropType<string>,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(e: any) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
})
</script>
