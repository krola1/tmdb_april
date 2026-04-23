import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../api/tmdb";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
    staleTime: 60_000,
  });
};
