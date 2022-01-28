import React from "react";
import { MovieControls } from "../MovieControls/index";
import * as S from "./styles";

export const MovieCard = ({ movie, type }) => {
  return (
    <S.MovieCardContainer>
      <S.Overlay></S.Overlay>

      <S.MovieCardImage
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </S.MovieCardContainer>
  );
};
