import { MapPin, Globe, Calendar } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import type { Character } from "@/shared/schemas/character.schema";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-primary/20 text-primary border-primary/30";
      case "dead":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const translateStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "Vivo";
      case "dead":
        return "Morto";
      case "unknown":
        return "Desconhecido";
      default:
        return status;
    }
  };

  const translateGender = (gender: string) => {
    switch (gender.toLowerCase()) {
      case "female":
        return "Feminino";
      case "male":
        return "Masculino";
      case "genderless":
        return "Sem Gênero";
      case "unknown":
        return "Desconhecido";
      default:
        return gender;
    }
  };

  const formatCreatedDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Card className="pt-0 group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={character.image || "/placeholder.svg"}
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className={getStatusColor(character.status)}>
            {translateStatus(character.status)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-balance leading-tight mb-1">
            {character.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {character.species} • {translateGender(character.gender)}
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <Globe className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Origem</p>
              <p className="text-foreground truncate">
                {character.origin.name}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Localização</p>
              <p className="text-foreground truncate">
                {character.location.name}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Criado em</p>
              <p className="text-foreground truncate">
                {formatCreatedDate(character.created)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
