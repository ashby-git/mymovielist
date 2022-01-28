import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import * as S from "./styles";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <S.InnerCardControls>
      {type === "watchlist" && (
        <>
          <S.ControlButton onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </S.ControlButton>

          <S.ControlButton onClick={() => removeMovieFromWatchlist(movie.id)}>
            <FaTimes />
          </S.ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <S.ControlButton onClick={() => moveToWatchlist(movie)}>
            <FaEyeSlash />
          </S.ControlButton>

          <S.ControlButton onClick={() => removeFromWatched(movie.id)}>
            <FaTimes />
          </S.ControlButton>
        </>
      )}
    </S.InnerCardControls>
  );
};
