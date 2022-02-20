import React from "react";
import ReactDOM from "react-dom";
import { FaTimes, FaStar } from "react-icons/fa";
import * as S from "./styles";

const Backdrop = (props) => {
  return <S.BackDrop onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  const movie = props.movie;
  return (
    <S.ModalCard>
      <S.CloseButton onClick={props.onCloseModal}>
        <FaTimes />
      </S.CloseButton>
      <S.ContentContainer>
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

        <S.MovieDetails>
          <S.Title>{movie.title}</S.Title>
          <S.Subheading>
            {movie.release_date && movie.release_date.substring(0, 4)}
          </S.Subheading>
          <S.Subheading>{movie.runtime}</S.Subheading>
          <S.Subheading>
            {movie.vote_average}/10
            <FaStar />
          </S.Subheading>
          <S.Overview>{movie.overview}</S.Overview>
        </S.MovieDetails>
      </S.ContentContainer>
    </S.ModalCard>
  );
};

const MovieDetailModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCloseModal={props.onCloseModal}
          children={props.children}
          movie={props.movie}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default MovieDetailModal;
