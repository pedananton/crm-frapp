import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductList from "./ProductList";
import { getProducts } from "../../store/actions/products";
import { connect } from "react-redux";

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

const mapDispatchToProps = {
  getProducts,
};

export default connect(null, mapDispatchToProps)(Products);
