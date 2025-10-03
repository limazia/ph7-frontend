import { useQuery } from "@tanstack/react-query";

import { getCharacters } from "@/shared/http/get-characters";

interface UseCharactersParams {
  page?: number;
  name?: string;
  status?: "alive" | "dead" | "unknown" | "all";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown" | "all";
}

export function useCharacters(params: UseCharactersParams = {}) {
  const { page = 1, name, status, species, type, gender } = params;

  const {
    data: characters,
    isLoading: isLoadingCharacters,
    isFetching: isFetchingCharacters,
    isError: isErrorCharacters,
    error,
  } = useQuery({
    queryKey: ["characters", page, name, status, species, type, gender],
    queryFn: () => getCharacters({ page, name, status, species, type, gender }),
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 404) {
        return false;
      }
      return failureCount < 3;
    },
  });

  const is404Error = error?.response?.status === 404;
  const emptyResult = is404Error
    ? { results: [], info: { pages: 1, count: 0 } }
    : null;

  return {
    characters: emptyResult || characters,
    isLoadingCharacters,
    isFetchingCharacters,
    isErrorCharacters: isErrorCharacters && !is404Error,
  };
}
