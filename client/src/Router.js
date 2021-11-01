import { Container } from "react-bootstrap";
import { Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";

const Router = () => {
    return (
        <Container className="mt-5">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/add-movies">
            <AddMovie/>
          </Route>
          <Route exact path="/:movieId">
            <MovieDetails/>
          </Route>
        </Switch>
      </Container>
    )
}

export default Router;