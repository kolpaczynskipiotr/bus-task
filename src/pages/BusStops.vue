<template>
  <div class="stops">
    <AppCard class="stops__card">
      <InputSearch class="stops__search" v-model="searchText" />
      <AppTable>
        <template #thead>
          <tr>
            <th>Bus stops</th>
          </tr>
        </template>
        <template v-if="filteredBusStops.length">
          <tr
            v-for="(stop, index) in filteredBusStops"
            :key="`${stop}-${index}`"
          >
            {{
              stop
            }}
          </tr>
        </template>
        <tr v-else>
          No results
        </tr>
      </AppTable>
    </AppCard>
  </div>
</template>

<script lang="ts" setup>
import AppTable from "@/components/AppTable/AppTable.vue";
import AppCard from "@/components/AppCard/AppCard.vue";
import InputSearch from "@/components/InputSearch/InputSearch.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";

const searchText = ref("");

const store = useStore();

const busStops = computed(() => store.state.stops ?? []);

const filteredBusStops = computed<string[]>(() =>
  searchText.value && busStops.value.length
    ? busStops.value.filter((item: string) =>
        item.toLowerCase().startsWith(searchText.value)
      )
    : busStops.value
);

const fetchTimetable = async () => {
  if (store.getters.hasStops) {
    return;
  }

  await store.dispatch("fetchTimetable");
};

fetchTimetable();
</script>

<style lang="scss" scoped>
.stops {
  &__card {
    max-height: 676px;
    overflow-y: auto;
    padding: 0;
  }

  &__search {
    padding: $spacer-sm $spacer-sm $spacer-md;
  }
}
</style>
