import { create } from "zustand";

type FilterState = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const useFilterStore = create<FilterState>()((set) => ({
  filter: "",
  setFilter: (filter: string) => set(() => ({ filter: filter })),
}));
