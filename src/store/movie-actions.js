import { movieActions } from "./movie-slice";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-utils";
import { getAuth } from "firebase/auth";

export const fetchMovieData = () => {
  return async (dispatch) => {
    const auth = getAuth();
    let user;
    user = auth.currentUser?.uid;

    const docRef = doc(db, "users", `${user}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const movieData = docSnap.data();
      console.log("Document data:", docSnap.data());
      dispatch(
        movieActions.replaceMovies({
          watchlist: movieData.watchlist || [],
          watched: movieData.watched || [],
        })
      );
    } else {
      console.log("No such document!");
      dispatch(
        movieActions.resetMovies({
          watchlist: [],
          watched: [],
          changed: false,
        })
      );
    }
  };
};

export const sendMovieData = (movies) => {
  const auth = getAuth();
  let user;
  user = auth.currentUser?.uid;
  return async () => {
    await setDoc(doc(db, `users`, `${user}`), {
      watchlist: movies.watchlist,
      watched: movies.watched,
    });
  };
};
