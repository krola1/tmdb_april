import axios from "axios";
import { env } from "../config/env";

export const api_tmdb = axios.create({
  baseURL: env.TMDB_BASE,
  headers: {
    Authorization: `Bearer ${env.TMDB_TOKEN}`,
    Accept: "application/json",
  },
});
