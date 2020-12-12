import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function UserItem({ user }) {
  const classes = useStyles();

  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() {
    history.push(url + "/" + user.id);
  }

  return (
    <TableRow className={classes.table} onClick={onRowClick}>
      <TableCell component='th' scope='row'>
        {user.id}
      </TableCell>
      <TableCell align='right'>{user.name}</TableCell>
      <TableCell align='right'>{user}</TableCell>
    </TableRow>
  );
}

export default UserItem;
