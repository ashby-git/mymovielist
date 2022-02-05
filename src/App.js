import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMovieData, fetchMovieData } from "./store/movie-actions";

import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import AuthContext from "./store/auth-context";
// import { GlobalProvider } from "./store/GlobalState";

let isInitial = true;

function App() {
  const authCtx = useContext(AuthContext);

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      dispatch(fetchMovieData());
    }
  }, [dispatch, authCtx]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (movies.changed) {
      dispatch(sendMovieData(movies));
    }
  }, [movies, dispatch]);

  return (
    // <GlobalProvider>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/search">
          {authCtx.isLoggedIn && <SearchPage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/profile">
          {authCtx.isLoggedIn && <ProfilePage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
    // </GlobalProvider>
  );
}

export default App;
