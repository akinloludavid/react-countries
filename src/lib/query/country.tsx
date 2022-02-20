import { useQuery } from "react-query";
import { ALL_COUNTRIES, COUNTRY } from "../../constants/queryKeys";
import { getAllCountries, getCountryByName } from "../api/country";

export const useGetAllCountries = () => {
  const { data, isLoading, status } = useQuery(
    [ALL_COUNTRIES],
    getAllCountries
  );

  return { data, isLoading, status };
};

export const useGetCountryByName = (countryName: string) => {
  const { data, isLoading, status } = useQuery(
    [COUNTRY, countryName],
    getCountryByName
  );

  return { data, isLoading, status };
};
