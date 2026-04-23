import { api_tmdb } from "./tmdb_base";

export const fetchTrendingMovies = async () => {
  const result = await api_tmdb.get("trending/all/week");
  return result.data;
};

export const searchMovies = async (query) => {
  if (query.trim()) {
    const res = await api_tmdb.get("search/movie", {
      params: {
        query,
        include_adult: false,
      },
    });
    return res.data;
  }
};

export const fetchMovieByID = async (id) => {
  const res = await api_tmdb.get(`/movie/${id}`);
  return res.data;
};
