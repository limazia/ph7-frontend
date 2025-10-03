import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useCharacters } from "@/shared/hooks/use-characters";
import { useDebounce } from "@/shared/hooks/use-debounce";

import { SearchBar } from "@/components/ui/search-bar";
import { Pagination } from "@/components/ui/pagination";
import { CharacterCard } from "./character-card";
import { CharacterCardSkeleton } from "./character-card-skeleton";
import { FilterBar } from "./filter-bar";

export function Characters() {
  // Use nuqs to manage state in URL
  const [filters, setFilters] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    search: parseAsString.withDefault(""),
    status: parseAsString.withDefault("all"),
    species: parseAsString.withDefault("all"),
    gender: parseAsString.withDefault("all"),
  });

  // Use debounce for search query
  const { debouncedValue: debouncedSearchQuery } = useDebounce(filters.search, 500);

  const {
    characters,
    isLoadingCharacters,
    isFetchingCharacters,
    isErrorCharacters,
  } = useCharacters({
    page: filters.page,
    name: debouncedSearchQuery || undefined,
    status:
      filters.status !== "all"
        ? (filters.status as "alive" | "dead" | "unknown")
        : undefined,
    species: filters.species !== "all" ? filters.species : undefined,
    gender:
      filters.gender !== "all"
        ? (filters.gender as "female" | "male" | "genderless" | "unknown")
        : undefined,
  });

  const totalPages = characters?.info?.pages || 1;

  // Reset to first page when filters change
  const handleSearchChange = (value: string) => {
    setFilters({ search: value, page: 1 });
  };

  const handleStatusChange = (value: string) => {
    setFilters({ status: value, page: 1 });
  };

  const handleSpeciesChange = (value: string) => {
    setFilters({ species: value, page: 1 });
  };

  const handleGenderChange = (value: string) => {
    setFilters({ gender: value, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setFilters({ page });
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      status: "all",
      species: "all", 
      gender: "all",
      page: 1,
    });
  };

  return (
    <div>
      <div className="mb-8 space-y-4">
        <SearchBar 
          value={filters.search} 
          onChange={handleSearchChange}
          isLoading={isFetchingCharacters && !!debouncedSearchQuery}
        />
        <FilterBar
          statusFilter={filters.status}
          speciesFilter={filters.species}
          genderFilter={filters.gender}
          onStatusChange={handleStatusChange}
          onSpeciesChange={handleSpeciesChange}
          onGenderChange={handleGenderChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(isLoadingCharacters && !characters) || isErrorCharacters ? (
          <CharacterCardSkeleton />
        ) : null}

        {characters &&
          !isFetchingCharacters &&
          characters?.results?.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>

      {characters && characters.results.length > 0 && (
        <div className="mt-8">
          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={characters.info.count}
            currentItems={characters.results.length}
          />
        </div>
      )}

      {characters &&
        characters.results.length === 0 &&
        !isLoadingCharacters && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum personagem encontrado com os filtros aplicados.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
    </div>
  );
}
