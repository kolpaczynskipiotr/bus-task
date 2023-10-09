<template>
  <div class="card mb-3" :class="[`card--${variant}`]">
    <h2 v-if="!!$slots['header']" class="card__header card-header">
      <slot name="header" />
    </h2>
    <div class="card__body card-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardVariant } from "./AppCard.types";
import { PropType, defineProps } from "vue";

defineProps({
  variant: {
    type: String as PropType<CardVariant>,
    default: CardVariant.Primary,
  },
});
</script>

<style lang="scss" scoped>
.card {
  border: none;
  padding: $spacer-xl;

  &__header {
    position: sticky;
    top: 0;
    background-color: $fg-primary;
    border: none;
    padding: 0 0 $spacer-xl + $spacer-xs 0;
    font-weight: 600;
    font-size: $typo-md;
  }

  &__body {
    padding: 0;
  }

  &--primary {
    background-color: $fg-primary;
  }
}
</style>
