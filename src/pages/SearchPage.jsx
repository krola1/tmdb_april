import { useState } from "react";
import MovieList from "../components/MovieList";
import { useSearchMovie } from "../hooks/useSearchMovie";
import { useDebouncer } from "../hooks/useDebouncer";

export default function SearchPage() {
  const [text, setText] = useState("project");
  const debouncedText = useDebouncer(text);
  const query = debouncedText.trim().length >= 3 ? debouncedText : "";
  const { data, isLoading, error, isError } = useSearchMovie(query);

  console.log(debouncedText);
  console.log(query);

  console.log(data);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <MovieList
        data={data}
        isLoading={isLoading}
        error={error}
        isError={isError}
      />
    </div>
  );
}
