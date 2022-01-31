import { movieActions } from "./movie-slice";

export const fetchMovieData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://mymovielist-5d65c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch movie data");
      }

      const data = await response.json();

      return data;
    };
    try {
      const movieData = await fetchData();
      dispatch(
        movieActions.replaceMovies({
          watchlist: movieData.watchlist || [],
          watched: movieData.watched || [],
        })
      );
    } catch (error) {
      alert("Fetching movie data failed");
    }
  };
};

export const sendMovieData = (movies) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://mymovielist-5d65c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            watchlist: movies.watchlist,
            watched: movies.watched,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending movie data failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      alert("Sending movie data failed");
    }
  };
};
