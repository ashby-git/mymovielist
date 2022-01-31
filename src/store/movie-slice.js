import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    watchlist: [],
    watched: [],
    changed: false,
  },
  reducers: {
    replaceMovies(state, action) {
      state.watchlist = action.payload.watchlist;
      state.watched = action.payload.watched;
    },
    addMovieToWatchlist(state, action) {
      const movie = action.payload;
      state.watchlist.push(movie);
      state.changed = true;
    },
    removeMovieFromWatchlist(state, action) {
      const id = action.payload;
      state.watchlist = state.watchlist.filter((movie) => movie.id !== id);
      state.changed = true;
    },
    addMovieToWatched(state, action) {
      const movie = action.payload;
      const id = action.payload.id;
      state.watched.push(movie);
      state.watchlist = state.watchlist.filter((movie) => movie.id !== id);
      state.changed = true;
    },
    removeMovieFromWatched(state, action) {
      const id = action.payload;
      state.watched = state.watched.filter((movie) => movie.id !== id);
      state.changed = true;
    },
    moveMovieToWatchlist(state, action) {
      const movie = action.payload;
      const id = action.payload.id;
      state.watchlist.push(movie);
      state.watched = state.watched.filter((movie) => movie.id !== id);
      state.changed = true;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
