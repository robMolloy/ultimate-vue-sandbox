import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    name: "Rob",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    add(n) {
      this.counter += n;
    },
    addOne() {
      this.add(1);
    },
  },
});
