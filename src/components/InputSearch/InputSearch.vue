<template>
  <div>
    <input
      class="app-search__input input"
      :value="modelValue"
      type="search"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.app-search {
  &__input {
    width: 100%;
    max-width: 288px;
    min-height: 40px;
    border: 1px solid $border-primary;
    border-radius: $spacer-xs;
    font-size: $typo-sm;
    padding: 0 $spacer-md;
  }
}
</style>
