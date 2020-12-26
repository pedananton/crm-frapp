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

function OrderItem({ order }) {
  const classes = useStyles();

  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() {
    history.push(url + "/" + order.id);
  }

  return (
    <TableRow className={classes.table} onClick={onRowClick}>
      <TableCell component='th' scope='row'>
        {order.id}
      </TableCell>
      <TableCell align='right'>{order.user}</TableCell>
      <TableCell align='right'>{order.state}</TableCell>
    </TableRow>
  );
}

export default OrderItem;
