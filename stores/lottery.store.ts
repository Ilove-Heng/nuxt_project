import { defineStore } from "pinia";

type State = "numberEl" | "toNumberEl" | "moneyEl" | "enterEl";



export const useLotteryStore = defineStore({
    id: "lottery-store",
    state: () => {
      return {
        // stateEl: <State>("numberEl"),
      };
    },
    getters: {
    //   getFiltersList: (state) => state.filtersList,
    },
    actions: {
    //   addValueToFilterList(value: string) {
    //     this.filtersList.push(value);
    //   },
    },
  });