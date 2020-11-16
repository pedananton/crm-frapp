import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductList from './ProductList';
import { getProducts } from '../../store/actions/products';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';

function Products({ getProducts }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const { path } = useRouteMatch();
  console.log('path', path);

  return (
    <Paper>
      <Switch>
        <Route path={path + '/'} exact>
          <ProductList />
        </Route>
        <Route path={path + '/3'}>
        {/* visnet pri popitke perehoda na path */}
          <ProductForm />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getProducts,
};

export default connect(null, mapDispatchToProps)(Products);
