import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductList from "./ProductList";
import { getProducts } from "../../store/actions/products";

function Products({ getProducts }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
