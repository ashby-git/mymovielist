import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../MovieCard/index";

import * as S from "./styles";

const ProfileContent = () => {
  const watchlistMovies = useSelector((state) => state.movies.watchlist);
  const watchedMovies = useSelector((state) => state.movies.watched);

  return (
    <S.ProfileContentContainer>
      <S.MovieListSection>
        <S.SectionContainer>
          <S.SectionHeader>
            <S.SectionTitle>Plan To Watch</S.SectionTitle>

            <S.CountPill>
              {watchlistMovies.length}{" "}
              {watchlistMovies.length === 1 ? "Movie" : "Movies"}
            </S.CountPill>
          </S.SectionHeader>

          {watchlistMovies.length > 0 ? (
            <S.MovieGrid>
              {watchlistMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watchlist" />
              ))}
            </S.MovieGrid>
          ) : (
            <S.NoMovies>No movies in your list! Add some!</S.NoMovies>
          )}
        </S.SectionContainer>
      </S.MovieListSection>
      <S.MovieListSection>
        <S.SectionContainer>
          <S.SectionHeader>
            <S.SectionTitle>Watched</S.SectionTitle>

            <S.CountPill>
              {watchedMovies.length}{" "}
              {watchedMovies.length === 1 ? "Movie" : "Movies"}
            </S.CountPill>
          </S.SectionHeader>

          {watchedMovies.length > 0 ? (
            <S.MovieGrid>
              {watchedMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watched" />
              ))}
            </S.MovieGrid>
          ) : (
            <S.NoMovies>No movies in your list! Add some!</S.NoMovies>
          )}
        </S.SectionContainer>
      </S.MovieListSection>
    </S.ProfileContentContainer>
  );
};

export default ProfileContent;
