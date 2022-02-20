import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaInfo } from "react-icons/fa";
import { movieActions } from "../../store/movie-slice";
import Card from "../UI/Card";
import MovieDetailModal from "../UI/MovieDetailModal";
import * as S from "./styles";

export const ResultCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const dispatch = useDispatch();
  const addMovieToWatchlistHandler = () => {
    dispatch(movieActions.addMovieToWatchlist(movie));
  };
  const addMovieToWatchedHandler = () => {
    dispatch(movieActions.addMovieToWatched(movie));
  };

  const watchlistMovies = useSelector((state) => state.movies.watchlist);
  const watchedMovies = useSelector((state) => state.movies.watched);

  let storedMovie = watchlistMovies.find((o) => o.id === movie.id);
  let storedMovieWatched = watchedMovies.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <>
      {showModal && (
        <MovieDetailModal onCloseModal={closeModal} movie={movie} />
      )}

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
                onClick={addMovieToWatchlistHandler}
              >
                Plan To Watch
              </S.Btn>

              <S.Btn
                disabled={watchedDisabled}
                onClick={addMovieToWatchedHandler}
              >
                Watched
              </S.Btn>
              <S.Btn onClick={setShowModal}>
                <FaInfo />
              </S.Btn>
            </S.Controls>
          </S.Info>
        </S.ResultCardContainer>
      </Card>
    </>
  );
};
