import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import Card from "../UI/Card";
import * as S from "./styles";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <Card>
      <S.ResultCardContainer>
        <S.PosterWrapper>
          {movie.poster_path ? (
            <S.Image
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <S.FillerPoster />
          )}
        </S.PosterWrapper>

        <S.Info>
          <S.Header>
            <S.Title>{movie.title}</S.Title>
            <S.ReleaseDate>
              {movie.release_date && movie.release_date.substring(0, 4)}
            </S.ReleaseDate>
          </S.Header>

          <S.Controls>
            <S.Btn
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Plan To Watch
            </S.Btn>

            <S.Btn
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(movie)}
            >
              Watched
            </S.Btn>
          </S.Controls>
        </S.Info>
      </S.ResultCardContainer>
    </Card>
  );
};
