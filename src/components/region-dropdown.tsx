import { useState } from "react";
import { IconChevronDown } from "./icons";
import type { Region } from "../lib/types";
import { useRegionStore } from "../lib/stores/regions";
import { useShallow } from "zustand/shallow";

export default function RegionDropdown() {
  const regionLists: Region[] = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "",
  ];

  const [region, setRegion] = useRegionStore(
    useShallow((state) => [state.region, state.setRegion]),
  );

  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <>
      <div className="relative w-full max-w-48">
        <div
          onClick={() => setDropdown(!dropdown)}
          className="flex w-full cursor-pointer items-center justify-between rounded-sm bg-white p-4 shadow-md dark:bg-[hsl(209,23%,22%)]"
        >
          <h1 className="text-black dark:text-white">
            {region === "" ? "Filter by Region" : region}
          </h1>
          <IconChevronDown className="size-4 text-black dark:text-white" />
        </div>

        <div
          id="dropdown-content"
          className={`absolute left-0 top-full w-full ${dropdown ? "z-0 translate-y-2" : "-z-50 translate-y-0"} overflow-hidden transition-all duration-200`}
        >
          <div
            className={`flex h-full w-full flex-col gap-2 rounded-sm bg-white p-4 shadow-md transition-all duration-200 dark:bg-[hsl(209,23%,22%)] ${dropdown ? "z-0 opacity-100" : "-z-50 opacity-0"}`}
          >
            {regionLists.map(
              (r, key) =>
                r !== "" && (
                  <button
                    key={key}
                    onClick={() => setRegion(r)}
                    className="w-full rounded-sm px-4 py-2 text-left text-black transition-all duration-200 hover:bg-stone-200 dark:text-white dark:hover:bg-[hsl(209,23%,27%)]"
                  >
                    {r}
                  </button>
                ),
            )}
            {region !== "" && (
              <button
                onClick={() => setRegion("")}
                className="w-full rounded-sm px-4 py-2 text-left text-black transition-all duration-200 hover:bg-stone-200 dark:text-white dark:hover:bg-[hsl(209,23%,27%)]"
              >
                All
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
