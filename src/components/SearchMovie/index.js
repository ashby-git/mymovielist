import React, { useState } from "react";
import { ResultCard } from "../ResultCard";
import * as S from "./styles";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <S.AddPage>
      <S.Container>
        <S.AddContent>
          <S.InputWrapper>
            <S.Input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </S.InputWrapper>

          {results.length > 0 && (
            <S.Results>
              {results.map((movie) => (
                <S.ResultsItem key={movie.id}>
                  <ResultCard movie={movie} />
                </S.ResultsItem>
              ))}
            </S.Results>
          )}
        </S.AddContent>
      </S.Container>
    </S.AddPage>
  );
};

export default SearchMovie;
