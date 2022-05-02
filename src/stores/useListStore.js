import { defineStore } from "pinia";

export const useListStore = defineStore("list", {
  state: () => ({
    data: [],
  }),
  actions: {
    add(n) {
      this.data.push(n);
    },
  },
});
