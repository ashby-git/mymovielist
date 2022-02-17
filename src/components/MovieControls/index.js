import React from "react";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import * as S from "./styles";
import { movieActions } from "../../store/movie-slice";

export const MovieControls = ({ type, movie }) => {
  const dispatch = useDispatch();
  const removeMovieFromWatchlistHandler = () => {
    dispatch(movieActions.removeMovieFromWatchlist(movie.id));
  };
  const removeMovieFromWatchedHandler = () => {
    dispatch(movieActions.removeMovieFromWatched(movie.id));
  };
  const addMovieToWatchedHandler = () => {
    dispatch(movieActions.addMovieToWatched(movie));
  };
  const moveMovieToWatchlistHandler = () => {
    dispatch(movieActions.moveMovieToWatchlist(movie));
  };

  return (
    <S.InnerCardControls>
      {type === "watchlist" && (
        <>
          <S.ControlButton onClick={addMovieToWatchedHandler}>
            <FaEye />
          </S.ControlButton>

          <S.ControlButton onClick={removeMovieFromWatchlistHandler}>
            <FaTimes />
          </S.ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <S.ControlButton onClick={moveMovieToWatchlistHandler}>
            <FaEyeSlash />
          </S.ControlButton>

          <S.ControlButton onClick={removeMovieFromWatchedHandler}>
            <FaTimes />
          </S.ControlButton>
        </>
      )}
    </S.InnerCardControls>
  );
};
