import { useQuery } from "@tanstack/react-query";
import { Country, Region } from "./types";

const baseURL = "https://restcountries.com/v3.1";

export function useAllCountries() {
  const response = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: () => fetch(`${baseURL}/all`).then((res) => res.json()),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return response;
}

export function useRegion(region: Region) {
  const response = useQuery<Country[]>({
    queryKey: ["countries", region],
    queryFn: () =>
      fetch(`${baseURL}/region/${region}`).then((res) => res.json()),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return response;
}

export function useDetailCountry(country: string) {
  const response = useQuery<Country[]>({
    queryKey: ["countries", country],
    queryFn: () =>
      fetch(`${baseURL}/alpha/${country}`).then((res) => res.json()),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return response;
}

export function useDetailCountryBorder(borders: string[]) {
  const response = useQuery<Country[]>({
    queryKey: ["countries", borders],
    queryFn: () =>
      fetch(`${baseURL}/alpha?codes=${borders.join(",")}`).then((res) =>
        res.json(),
      ),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return response;
}
