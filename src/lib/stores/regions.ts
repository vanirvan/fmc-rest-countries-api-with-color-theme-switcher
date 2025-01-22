import { create } from "zustand";
import type { Region } from "../types";

type RegionState = {
  region: Region;
  setRegion: (region: Region) => void;
};

export const useRegionStore = create<RegionState>()((set) => ({
  region: "",
  setRegion: (region: Region) => set(() => ({ region: region })),
}));
