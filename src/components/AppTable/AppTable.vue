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

<style lang="scss" scoped>
thead {
  :slotted(th) {
    font-size: $typo-xs;
    padding: $spacer-md $spacer-xl;
    font-weight: 600;
    color: $text-primary;
  }
}

tbody {
  :slotted(tr) {
    display: grid;
    width: 100%;
    width: 100%;
    padding: $spacer-md $spacer-xl;
    font-size: $typo-xs;
    transition: 0.3s ease-in;
    border-bottom: 1px solid $border-primary;

    &:hover {
      background-color: $fg-secondary;
      transition: 0.3s ease-in;
    }
  }
}
</style>
