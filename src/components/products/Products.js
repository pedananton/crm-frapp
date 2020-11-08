import Paper from "@material-ui/core/Paper";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductList from "./ProductList";
/**
 * implement pulling product through test json
 */
function Products() {
  const { path } = useRouteMatch();
  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          <ProductList />
        </Route>
        <Route path={path + "/:id"}></Route>
      </Switch>
    </Paper>
  );
}

export default Products;
