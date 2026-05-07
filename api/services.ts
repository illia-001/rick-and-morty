import { IChar } from "@/types/IChar";
import { IEpisode } from "@/types/IEpisode";
import { ILocation } from "@/types/ILocation";
import { TGender } from "@/types/TGender";
import { TSpecies } from "@/types/TSpecies";
import { TStatus } from "@/types/TStatus";

const BASE_URL = "https://rickandmortyapi.com/api/";

export async function getChars(
  query?: string,
  status?: TStatus,
  gender?: TGender,
  species?: TSpecies,
  page: number = 1,
  type?: string,
) {
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

  const url = `${BASE_URL}character/?${params.toString()}&page=${page}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      console.error("Something went wrong!");
      return { results: [] };
    }

    return response.json();
  } catch (e) {
    console.error("Fetch failed", e);
  }
}

export async function getCharById(id: number): Promise<IChar> {
  const response = await fetch(`${BASE_URL}character/${id}`);

  return response.json();
}

export async function getEpisodes(page: number = 1): Promise<IEpisode[]> {
  let allEpisodes: IEpisode[] = [];
  let nextUrl = `https://rickandmortyapi.com/api/episode/?page=${page}`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();

    allEpisodes = [...allEpisodes, ...data.results];

    nextUrl = data.info.next;
  }

  return allEpisodes;
}

export async function getCharsByIds(ids: string[]): Promise<IChar[]> {
  if (ids.length === 0) return [];

  const cleanIds = ids.map((id) => id.split("/").pop()).join(",");

  const response = await fetch(`${BASE_URL}character/${cleanIds}`);
  const data = await response.json();

  return Array.isArray(data) ? data : [data];
}

export async function getEpisodeById(id: number): Promise<IEpisode> {
  const response = await fetch(`${BASE_URL}episode/${id}`);

  return response.json();
}

export async function getLocationById(id: number): Promise<ILocation> {
  const response = await fetch(`${BASE_URL}location/${id}`);

  return response.json();
}

export async function getLocations(page: number = 1): Promise<ILocation[]> {
  let allLocations: ILocation[] = [];
  let nextUrl = `https://rickandmortyapi.com/api/location/?page=${page}`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();

    allLocations = [...allLocations, ...data.results];

    nextUrl = data.info.next;
  }

  return allLocations;
}
