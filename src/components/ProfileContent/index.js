import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../store/GlobalState";
import { MovieCard } from "../MovieCard/index";

import * as S from "./styles";

const ProfileContent = () => {
  const watchlistMovies = useSelector((state) => state.movies.watchlist);
  const watchedMovies = useSelector((state) => state.movies.watched);
  // const { watchlist, watched } = useContext(GlobalContext);

  return (
    <S.ProfileContentContainer>
      <S.MovieListSection>
        <S.SectionContainer>
          <S.SectionHeader>
            <S.SectionTitle>Plan To Watch</S.SectionTitle>

            <S.CountPill>
              {/* {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"} */}
              {watchlistMovies.length}{" "}
              {watchlistMovies.length === 1 ? "Movie" : "Movies"}
            </S.CountPill>
          </S.SectionHeader>

          {/* {watchlist.length > 0 ? ( */}
          {watchlistMovies.length > 0 ? (
            <S.MovieGrid>
              {/* {watchlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watchlist" />
              ))} */}
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
              {/* {watched.length} {watched.length === 1 ? "Movie" : "Movies"} */}
              {watchedMovies.length}{" "}
              {watchedMovies.length === 1 ? "Movie" : "Movies"}
            </S.CountPill>
          </S.SectionHeader>

          {/* {watched.length > 0 ? ( */}
          {watchedMovies.length > 0 ? (
            <S.MovieGrid>
              {/* {watched.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watched" />
              ))} */}
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
