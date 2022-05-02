import { defineStore } from "pinia";
import lodash from "lodash";
import { index } from "index9";
import { v4 as uuid } from "uuid";

export const useSyncedTodosStore = defineStore("syncedTodosStore", {
  state: () => ({
    local: [
      { id: "someId1", task: "dance", isComplete: false },
      { id: "someId2", task: "pogo stick", isComplete: false },
      { id: "someId3", task: "hop", isComplete: true },
    ],
    pending: {
      create: [],
      update: [],
      delete: [],
    },
    remote: [
      { id: "someId1", task: "dance", isComplete: false },
      { id: "someId2", task: "pogo stick", isComplete: false },
      { id: "someId3", task: "hop", isComplete: true },
    ],
  }),
  getters: {
    indexedById: (state) => index(state.local).on("id"),
    isInSync: (state) => lodash.isEqual(state.local, state.remote),
    findIndexById: (state) => (id) => state.local.findIndex((item) => item.id === id),
  },
  actions: {
    create(item) {
      const newItem = { ...item, id: item.id || uuid() };
      this.pending.create.push(newItem);
      this.local.push(newItem);
      return newItem;
    },
    read(id) {
      return this.indexedById[id];
    },
    update(item) {
      const key = this.local.findIndex(({ id }) => item.id === id);
      const isValid = key > -1;
      if (isValid) {
        this.local[key] = item;
      }

      return isValid ? item : undefined;
    },
    deleteById(id) {
      const key = this.local.findIndex((item) => item.id === id);
      const isValid = key > -1;
      if (isValid) { this.local.splice(key, 1); }

      return isValid;
    },
    delete(item) {
      return this.deleteById(item.id);
    },
  },
});
