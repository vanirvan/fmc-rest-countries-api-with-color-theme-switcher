import { useShallow } from "zustand/shallow";
import { useFilterStore } from "../lib/stores/filters";
import { IconSearch } from "./icons";

export default function InputFilter() {
  const [filter, setFilter] = useFilterStore(
    useShallow((state) => [state.filter, state.setFilter]),
  );

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        id="country"
        className="w-full rounded-sm py-4 pl-24 pr-4 shadow-md dark:bg-[hsl(209,23%,22%)] dark:text-white"
        placeholder="Search for a country..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <IconSearch className="absolute left-11 top-1/2 size-4 -translate-y-1/2 text-black dark:text-white" />
    </div>
  );
}
