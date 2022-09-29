import axios, { AxiosResponse } from "axios";

export const getAllCountries = async () => {
  const res = await axios.get("https://restcountries.com/v2/all");
  return res.data;
};

export const getCountryByName = async (params: any) => {
  const { queryKey } = params;
  const [, countryName] = queryKey;
  const res: AxiosResponse = await axios.get(
    `https://restcountries.com/v2/name/${countryName}`
  );
  return res.data;
};
