import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getOrders } from '../../store/actions/orders';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import OrdersList from './OrdersList';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';

function Orders({ getOrders }) {
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + '/'} exact>
          <OrdersList />
        </Route>
        <Route path={path + '/:id'}>
          <OrderForm />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getOrders,
};

export default connect(null, mapDispatchToProps)(Orders);
