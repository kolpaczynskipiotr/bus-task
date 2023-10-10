<template>
  <div class="app">
    <router-link class="app__title" to="/">
      <h1 class="=mt-5 mb-4">Timetable</h1>
    </router-link>
    <AppTabs>
      <AppTab to="/">Bus Lines</AppTab>
      <AppTab to="/stops">Stops</AppTab>
    </AppTabs>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import AppTabs from "@/components/AppTabs/AppTabs.vue";
import AppTab from "@/components/AppTabs/AppTab.vue";
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>

<style lang="scss" scoped>
.app {
  &__title {
    display: block;
    margin-top: $spacer-3xl;
    text-decoration: none;
    color: $text-primary;
  }
}
</style>
