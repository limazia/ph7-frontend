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
  } = useQuery({
    queryKey: ["characters", page, name, status, species, type, gender],
    queryFn: () => getCharacters({ page, name, status, species, type, gender }),
  });

  return {
    characters,
    isLoadingCharacters,
    isFetchingCharacters,
    isErrorCharacters,
  };
}
