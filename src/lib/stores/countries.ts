import { create } from "zustand";
import type { Country } from "../types";

type CountryState = {
  countries: Country[];
  setCountry: (countries: Country[]) => void;
};

export const useCountriesStore = create<CountryState>()((set) => ({
  countries: [],
  setCountry: (countries: Country[]) => set(() => ({ countries: countries })),
}));
