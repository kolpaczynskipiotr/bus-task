<template>
  <table class="app-table table">
    <thead v-if="!!$slots['thead']">
      <slot name="thead" />
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
thead {
  :slotted(th) {
    padding: $spacer-md $spacer-xl;
    font-size: $typo-md;
    font-weight: 600;
  }
}

tbody {
  :slotted(tr) {
    display: grid;
    width: 100%;
    width: 100%;
    padding: $spacer-md $spacer-xl;

    &:hover {
      background-color: $fg-secondary;
    }
  }
}
</style>
