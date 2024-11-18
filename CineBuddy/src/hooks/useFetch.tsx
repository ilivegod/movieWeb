import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface useFetchProps<T> {
  key: string[];
  options: AxiosRequestConfig;
  queryOptions: any;
}

export function useFetch<T>({ key, options, queryOptions }: useFetchProps<T>) {
  const fetcher = async (): Promise<T> => {
    const res = await axios(options);
    return res.data;
  };

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: key,
    queryFn: fetcher,
    ...queryOptions,
  });

  return { data, isLoading, error, refetch };
}
