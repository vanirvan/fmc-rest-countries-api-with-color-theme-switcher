import InputFilter from "./input-filter";
import RegionDropdown from "./region-dropdown";

export default function Filter() {
  return (
    <section
      id="filters"
      className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:gap-4 2xl:px-0"
    >
      <InputFilter />
      <RegionDropdown />
    </section>
  );
}
