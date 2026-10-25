export type Country = {
  name: string;
  nativeName: string;
  alpha3Code: string;
  population: number;
  region: string;
  subregion: string;
  capital?: string;
  topLevelDomain: string[];
  currencies?: { code: string; name: string; symbol: string }[];
  languages: { name: string }[];
  borders?: string[];
  flags: { svg: string; png: string };
};
