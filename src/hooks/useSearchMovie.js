import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/tmdb";

export const useSearchMovie = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
    enabled: !!query.trim(),
    staleTime: 30_000,
  });
};
