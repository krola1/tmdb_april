import { api_tmdb } from "./tmdb_base";

export const fetchTrendingMovies = async () => {
  const result = await api_tmdb.get("trending/all/week");
  return result.data;
};
