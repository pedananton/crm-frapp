import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getOrders } from '../../store/actions/orders';
import { getUsers } from '../../store/actions/users';
import { getProducts } from '../../store/actions/products';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import OrdersList from './OrdersList';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';

function Orders({ getOrders, getUsers, getProducts }) {
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
  getUsers,
  getProducts,
};

export default connect(null, mapDispatchToProps)(Orders);
