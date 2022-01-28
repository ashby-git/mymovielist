import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
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
            {/* <i className="fa-fw far fa-eye"></i> */}
          </S.ControlButton>

          <S.ControlButton onClick={() => removeMovieFromWatchlist(movie.id)}>
            {/* <i className="fa-fw fa fa-times"></i> */}
          </S.ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <S.ControlButton onClick={() => moveToWatchlist(movie)}>
            {/* <i className="fa-fw far fa-eye-slash"></i> */}
          </S.ControlButton>

          <S.ControlButton onClick={() => removeFromWatched(movie.id)}>
            {/* <i className="fa-fw fa fa-times"></i> */}
          </S.ControlButton>
        </>
      )}
    </S.InnerCardControls>
  );
};
