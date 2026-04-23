import { useQuery } from "@tanstack/react-query";
import { fetchMovieByID } from "../api/tmdb";

export const useMovieDetails = (id) => {
  return useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieByID(id),
    enabled: !!id,
    staleTime: 5 * 60_000,
  });
};
