<template>
  <AppCard class="app-tabs">
    <ul class="app-tabs__nav nav nav-underline">
      <slot />
    </ul>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from "@/components/AppCard/AppCard.vue";
</script>

<style lang="scss" scoped>
.app-tabs {
  padding: 0 $spacer-md;

  &__nav {
    display: flex;
    flex-wrap: nowrap;
    padding: 0 $spacer-sm;
    overflow-x: auto;
    --bs-nav-underline-gap: 0;
  }
}
</style>
