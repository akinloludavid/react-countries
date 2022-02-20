import { useQuery, useQueryClient } from "react-query";
import { ALL_COUNTRIES, COUNTRY } from "../../constants/queryKeys";
import { getAllCountries, getCountryByName } from "../api/country";

export const useGetAllCountries = () => {
  const { data, isLoading, isError, error } = useQuery(
    [ALL_COUNTRIES],
    getAllCountries
  );

  return { data, isLoading, isError, error };
};

export const useGetCountryByName = (countryName: string) => {
  const queryClient: any = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    [COUNTRY, countryName],
    getCountryByName,
    {
      initialData: () => {
        return queryClient
          .getQueryData(ALL_COUNTRIES)
          ?.find((d: any) => d.name === countryName);
      },
    }
  );

  return { data, isLoading, isError, error };
};
