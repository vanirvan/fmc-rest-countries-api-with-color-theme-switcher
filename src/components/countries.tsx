import { useEffect, useMemo } from "react";
import { useAllCountries, useRegion } from "../lib/fetch";
import { useRegionStore } from "../lib/stores/regions";
import { useFilterStore } from "../lib/stores/filters";
import CountryCard from "./country-card";

export default function Countries() {
  const region = useRegionStore((state) => state.region);
  const filter = useFilterStore((state) => state.filter);

  const { data: queryCountries, refetch: queryCountriesRefetch } =
    useAllCountries();

  const { data: queryRegion, refetch: queryRegionRefetch } = useRegion(region);

  const countries = useMemo(() => {
    if (filter === "") {
      return region === "" ? queryCountries : queryRegion;
    } else {
      return region === ""
        ? queryCountries?.filter((country) =>
            country.name.common.toLowerCase().includes(filter.toLowerCase()),
          )
        : queryRegion?.filter((country) =>
            country.name.common.toLowerCase().includes(filter.toLowerCase()),
          );
    }
  }, [filter, region, queryCountries, queryRegion]);

  useEffect(() => {
    if (region === "") {
      queryCountriesRefetch();
    } else {
      queryRegionRefetch();
    }
  }, [queryCountriesRefetch, queryRegionRefetch, region]);

  return (
    <section
      id="countries"
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-0"
    >
      {countries?.map((country, key) => (
        <CountryCard key={key} country={country} />
      ))}
    </section>
  );
}
