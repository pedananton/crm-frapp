import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Navigation from "./components/common/Navigation";
function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/products">
                <Products />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
