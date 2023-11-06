import { defineStore } from "pinia";

export const useFiltersStore = defineStore({
  id: "filter-store",
  state: () => {
    return {
      filtersList: ["youtube", "twitch"],
    };
  },
  getters: {
    getFiltersList: (state) => state.filtersList,
  },
  actions: {
    addValueToFilterList(value: string) {
      this.filtersList.push(value);
    },
  },
});
