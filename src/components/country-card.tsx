import { Country } from "../lib/types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <a
      href={`/${country.cca3}`}
      className="flex cursor-pointer flex-col gap-8 overflow-hidden rounded-md bg-white shadow-md dark:bg-[hsl(209,23%,22%)]"
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt ?? `Flag of ${country.name.common}`}
        className="aspect-video bg-center object-cover"
      />
      <div className="flex flex-col gap-4 px-8 pb-8 text-[hsl(200,15%,8%)] dark:text-white">
        <h1>{country.name.common}</h1>
        <div className="flex flex-col">
          <p>
            Population: <span className="font-thin">{country.population}</span>
          </p>
          <p>
            Region: <span className="font-thin">{country.region}</span>
          </p>
          <p>
            Capital: <span className="font-thin">{country.capital}</span>
          </p>
        </div>
      </div>
    </a>
  );
}
