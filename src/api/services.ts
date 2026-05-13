import { IChar } from "@/src/types/IChar";
import { ICharacterData } from "@/src/types/IData";
import { IEpisode } from "@/src/types/IEpisode";
import { ILocation } from "@/src/types/ILocation";
import { TGender } from "@/src/types/TGender";
import { TSpecies } from "@/src/types/TSpecies";
import { TStatus } from "@/src/types/TStatus";

const BASE_URL = "https://rickandmortyapi.com/api/";

async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch!`);
  }

  return response.json();
}

export async function getChars(
  query?: string,
  status?: TStatus,
  gender?: TGender,
  species?: TSpecies,
  page: number = 1,
  type?: string,
): Promise<ICharacterData> {
  const params = new URLSearchParams();

  if (query?.trim()) {
    params.set("name", query.trim());
  }

  if (status) {
    params.set("status", status);
  }

  if (gender) {
    params.set("gender", gender);
  }
  if (species) {
    params.set("species", species);
  }

  if (type) {
    params.set("type", type);
  }

  const url = `character/?${params.toString()}&page=${page}`;

  return fetcher(url);
}

export async function getCharById(id: number): Promise<IChar> {
  return fetcher(`character/${id}`);
}

export async function getCharsByIds(ids: string[]): Promise<IChar[]> {
  if (ids.length === 0) {
    return [];
  }

  const cleanIds = ids.map((link) => link.split("/").pop());
  console.log(cleanIds);

  return fetcher(`character/${cleanIds}`);
}

export async function getEpisodeById(id: number): Promise<IEpisode> {
  return fetcher(`episode/${id}`);
}

export async function getLocationById(id: number): Promise<ILocation> {
  return fetcher(`location/${id}`);
}

export async function getLocations(page: number = 1): Promise<ILocation[]> {
  let allLocations: ILocation[] = [];
  let nextUrl = `${BASE_URL}location/?page=${page}`;

  while (nextUrl) {
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();

      if (response.ok) {
        allLocations = [...allLocations, ...data.results];

        nextUrl = data.info.next;
      }
    } catch {
      throw new Error("Fetch failed!");
    }
  }

  return allLocations;
}

export async function getEpisodes(page: number = 1): Promise<IEpisode[]> {
  let allEpisodes: IEpisode[] = [];
  let nextUrl = `${BASE_URL}episode/?page=${page}`;

  while (nextUrl) {
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      if (response.ok) {
        allEpisodes = [...allEpisodes, ...data.results];

        nextUrl = data.info.next;
      }
    } catch {
      throw new Error("Fetch failed!");
    }
  }

  return allEpisodes;
}
