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

function ProductItem({ product }) {
  const classes = useStyles();

  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() {
    
    //  history.push(url + "/" + product.id);
  }

  return (
    <TableRow className={classes.table} onClick={onRowClick}>
      <TableCell component='th' scope='row'>
        {product.id}
      </TableCell>
      <TableCell align='right'>{product.name}</TableCell>
      <TableCell align='right'>{product.rest}</TableCell>
    </TableRow>
  );
}

export default ProductItem;
