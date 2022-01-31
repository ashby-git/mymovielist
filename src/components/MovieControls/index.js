import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { GlobalContext } from "../../store/GlobalState";
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

  // const {
  //   removeMovieFromWatchlist,
  //   addMovieToWatched,
  //   moveToWatchlist,
  //   removeFromWatched,
  // } = useContext(GlobalContext);

  return (
    <S.InnerCardControls>
      {type === "watchlist" && (
        <>
          <S.ControlButton
            // onClick={() => addMovieToWatched(movie)}
            onClick={addMovieToWatchedHandler}
          >
            <FaEye />
          </S.ControlButton>

          <S.ControlButton
            // onClick={() => removeMovieFromWatchlist(movie.id)}
            onClick={removeMovieFromWatchlistHandler}
          >
            <FaTimes />
          </S.ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <S.ControlButton
            // onClick={() => moveToWatchlist(movie)}
            onClick={moveMovieToWatchlistHandler}
          >
            <FaEyeSlash />
          </S.ControlButton>

          <S.ControlButton
            // onClick={() => removeFromWatched(movie.id)}
            onClick={removeMovieFromWatchedHandler}
          >
            <FaTimes />
          </S.ControlButton>
        </>
      )}
    </S.InnerCardControls>
  );
};
