import { useParams } from "react-router";
import Navbar from "./components/navbar";
import { IconArrowLeft } from "./components/icons";
import { useDetailCountry, useDetailCountryBorder } from "./lib/fetch";
import { useEffect } from "react";

export default function Country() {
  const { country: countryParam } = useParams<{ country: string }>();

  const { data: country, refetch: detailRefetch } = useDetailCountry(
    countryParam!,
  );
  const { data: borders, refetch: borderRefetch } = useDetailCountryBorder(
    country?.[0].borders as string[],
  );

  useEffect(() => {
    if (!country) {
      detailRefetch();
    }
  }, [detailRefetch, country]);

  useEffect(() => {
    if (country !== undefined && borders === undefined && country[0].borders) {
      borderRefetch();
    }
  }, [country, borders, borderRefetch]);

  return (
    <main className="font-nunito relative flex min-h-svh w-full flex-col gap-8 bg-[hsl(0,0%,98%)] dark:bg-[hsl(207,26%,17%)]">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-8 py-8 sm:px-6 lg:px-8 xl:px-4 2xl:px-0">
        <a
          href={"/"}
          className="flex w-max items-center gap-4 rounded-md bg-white px-8 py-4 text-[hsl(200,15%,8%)] shadow-md dark:bg-[hsl(209,23%,22%)] dark:text-white"
        >
          <IconArrowLeft className="text-[hsl(200,15%,8%)] dark:text-white" />
          Back
        </a>
      </div>
      <section
        id="country-detail"
        className="gird-cols-1 mx-auto mb-32 grid w-full max-w-7xl gap-32 px-8 py-8 text-[hsl(200,15%,8%)] sm:px-6 md:grid-cols-2 lg:px-8 xl:px-4 2xl:px-0 dark:text-white"
      >
        <img
          src={country?.[0].flags.svg}
          alt={country?.[0].flags.alt ?? `Flag of ${country?.[0].name.common}`}
          className="h-auto w-full"
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{country?.[0].name.common}</h1>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Native Name:{" "}
                <span className="font-thin">
                  {Object.values(country?.[0].name.nativeName ?? {})[0]?.common}
                </span>
              </p>
              <p className="font-bold">
                Population:{" "}
                <span className="font-thin">{country?.[0].population}</span>
              </p>
              <p className="font-bold">
                Region: <span className="font-thin">{country?.[0].region}</span>
              </p>
              <p className="font-bold">
                Sub Region:{" "}
                <span className="font-thin">{country?.[0].subregion}</span>
              </p>
              <p className="font-bold">
                Capital:{" "}
                <span className="font-thin">{country?.[0].capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Top Level Domain:{" "}
                <span className="font-thin">{country?.[0].tld[0]}</span>
              </p>
              <p className="font-bold">
                Currency:{" "}
                <span className="font-thin">
                  {Object.values(country?.[0].currencies ?? {})[0]?.name}
                </span>
              </p>
              <p className="font-bold">
                Languages:{" "}
                <span className="font-thin">
                  {Object.values(country?.[0].languages ?? {}).join(", ")}
                </span>
              </p>
            </div>
          </div>
          {borders && (
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <span>Border Countries: </span>
              {borders?.map((border, key) => (
                <a
                  key={key}
                  href={`/${border.cca3}`}
                  className="cursor-pointer rounded-sm bg-white px-4 py-2 text-[hsl(200,15%,8%)] shadow-sm dark:bg-[hsl(209,23%,22%)] dark:text-white"
                >
                  {border.name.common}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
