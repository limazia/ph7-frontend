import { Filter } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  statusFilter: string;
  speciesFilter: string;
  genderFilter: string;
  onStatusChange: (value: string) => void;
  onSpeciesChange: (value: string) => void;
  onGenderChange: (value: string) => void;
}

export function FilterBar({
  statusFilter,
  speciesFilter,
  genderFilter,
  onStatusChange,
  onSpeciesChange,
  onGenderChange,
}: FilterBarProps) {
  const hasActiveFilters = statusFilter !== "all" || speciesFilter !== "all" || genderFilter !== "all";

  const handleClearFilters = () => {
    onStatusChange("all");
    onSpeciesChange("all");
    onGenderChange("all");
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filtros:</span>
      </div>

      <Select value={statusFilter} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[140px] bg-card border-border">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="alive">Vivo</SelectItem>
          <SelectItem value="dead">Morto</SelectItem>
          <SelectItem value="unknown">Desconhecido</SelectItem>
        </SelectContent>
      </Select>

      <Select value={speciesFilter} onValueChange={onSpeciesChange}>
        <SelectTrigger className="w-[140px] bg-card border-border">
          <SelectValue placeholder="Espécie" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas Espécies</SelectItem>
          <SelectItem value="human">Humano</SelectItem>
          <SelectItem value="alien">Alienígena</SelectItem>
          <SelectItem value="humanoid">Humanoide</SelectItem>
          <SelectItem value="animal">Animal</SelectItem>
          <SelectItem value="robot">Robô</SelectItem>
          <SelectItem value="cronenberg">Cronenberg</SelectItem>
          <SelectItem value="mythological">Mitológico</SelectItem>
        </SelectContent>
      </Select>

      <Select value={genderFilter} onValueChange={onGenderChange}>
        <SelectTrigger className="w-[140px] bg-card border-border">
          <SelectValue placeholder="Gênero" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Gêneros</SelectItem>
          <SelectItem value="female">Feminino</SelectItem>
          <SelectItem value="male">Masculino</SelectItem>
          <SelectItem value="genderless">Sem Gênero</SelectItem>
          <SelectItem value="unknown">Desconhecido</SelectItem>
        </SelectContent>
      </Select>

      {hasActiveFilters && (
        <button
          onClick={handleClearFilters}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}
