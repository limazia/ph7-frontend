import { api } from "@/shared/lib/axios";

import { type Characters as CharactersResponse } from "@/shared/schemas/character.schema";

interface GetCharactersParams {
  page?: number;
  name?: string;
  status?: "alive" | "dead" | "unknown" | "all";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown" | "all";
}

export async function getCharacters({
  page = 1,
  name,
  status,
  species,
  type,
  gender,
}: GetCharactersParams) {
  const params: Record<string, any> = { page };

  if (name) params.name = name;
  if (status && status !== "all") params.status = status;
  if (species && species !== "all") params.species = species;
  if (type) params.type = type;
  if (gender && gender !== "all") params.gender = gender;

  const { data } = await api.get<CharactersResponse>("/api/character", {
    params,
  });

  return data;
}
