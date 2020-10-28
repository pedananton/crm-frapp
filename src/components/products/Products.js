import Paper from "@material-ui/core/Paper";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function Products() {
  const { path } = useRouteMatch();
  return (
    <Paper>
      <Switch>
        <Route path={path + "/"} exact>
          {/* <Filters />
          <RoomsList /> */}
        </Route>
        <Route path={path + "/:id"}></Route>
      </Switch>
    </Paper>
  );
}

export default Products;
