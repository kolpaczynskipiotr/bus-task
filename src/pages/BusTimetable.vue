<template>
  <div class="timetable">
    <AppCard v-if="lines">
      <template #header>Select bus line</template>
      <div class="timetable__lines">
        <AppButton
          size="sm"
          class="timetable__line"
          :class="{ active: line === selectedBusLine }"
          v-for="(line, index) in lines"
          :key="`${line}-${index}`"
          @click="selectBusLine(line)"
        >
          {{ line }}
        </AppButton>
      </div>
    </AppCard>
    <div class="d-flex flex-column flex-md-row gap-md-3">
      <AppCard v-if="selectedBusLine" class="timetable__card">
        <template #header>
          <span class="timetable__title">
            Bus Line: {{ selectedBusLine }}
          </span>
        </template>
        <AppTable>
          <template #thead>
            <tr>
              <th>Bus stops</th>
            </tr>
          </template>
          <tr
            v-for="(stop, index) in busStops"
            :key="`${stop}-${index}`"
            class="timetable__stop"
          >
            <button
              @click="selectedStop = stop"
              class="timetable__stop-btn"
              :class="{ 'timetable__stop--active': stop === selectedStop }"
            >
              {{ stop }}
            </button>
          </tr>
        </AppTable>
      </AppCard>
      <AppPlaceholder v-else class="timetable__card">
        Please select the bus line first
      </AppPlaceholder>
      <AppCard v-if="selectedStop" class="timetable__card col">
        <template #header>
          <span class="timetable__title">Bus stop: {{ selectedStop }}</span>
        </template>
        <AppTable>
          <template #thead>
            <tr>
              <th>Time</th>
            </tr>
          </template>
          <tr v-for="(time, index) in stopTimeline" :key="`${time}-${index}`">
            {{
              time
            }}
          </tr>
        </AppTable>
      </AppCard>
      <AppPlaceholder v-else class="timetable__card"
        >Please select the bus line first
      </AppPlaceholder>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppTable from "@/components/AppTable/AppTable.vue";
import AppCard from "@/components/AppCard/AppCard.vue";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppPlaceholder from "@/components/AppPlaceholder/AppPlaceholder.vue";

import { useStore } from "vuex";
import { computed, ref } from "vue";

const selectedBusLine = ref();
const selectedStop = ref();

const store = useStore();

const lines = computed(() => store.getters.getBusLines);
const busStops = computed(() =>
  store.getters.getBusStops(selectedBusLine.value)
);
const stopTimeline = computed(() =>
  store.getters.getStopTimeline(selectedBusLine.value, selectedStop.value)
);

const selectBusLine = (line: number) => {
  if (selectedBusLine.value === line) {
    return;
  }

  if (selectedStop.value) {
    selectedStop.value = null;
  }

  selectedBusLine.value = line;
};

const fetchTimetable = async () => {
  if (store.getters.hasTimeline) {
    return;
  }

  await store.dispatch("fetchTimetable");
};

fetchTimetable();
</script>

<style lang="scss" scoped>
.timetable {
  &__title {
    display: block;
    margin: $spacer-xl $spacer-xl 0;
  }

  &__stop {
    padding: 0;

    &-btn {
      border: 0;
      text-align: left;
      padding: $spacer-md $spacer-xl;
      background: transparent;
      color: $text-primary;
    }

    &--active {
      color: $text-active;
    }
  }

  &__row {
    cursor: pointer;
  }

  &__lines {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-height: 160px;
    overflow-y: auto;
  }

  &__card {
    max-width: 100%;
    margin: 0;
    padding: 0;
    min-height: 444px;
    max-height: 444px;
    overflow-y: auto;
    flex: 1;
    margin-bottom: $spacer-md;
  }

  &__line {
    min-width: 54px;
  }
}
</style>
