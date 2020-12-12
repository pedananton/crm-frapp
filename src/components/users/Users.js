import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getUsers } from '../../store/actions/users';
import Paper from '@material-ui/core/Paper';
import { Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import UserForm from './UserForm';
import { connect } from 'react-redux';

function Users({ getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + '/'} exact>
          <UsersList />
        </Route>
        <Route path={path + '/:id'}>
          <UserForm />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToProps = {
  getUsers,
};

export default connect(null, mapDispatchToProps)(Users);
