export type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania" | "";
export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [k: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  population: number;
  currencies: {
    [k: string]: {
      name: string;
      symbol: string;
    };
  };
  region: string;
  languages: {
    [k: string]: string;
  };
  subregion: string;
  capital: string[];
  borders?: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
};
