import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ProductItem({ product }) {
  const classes = useStyles();

  return (
    <TableRow className={classes.table}>
      <TableCell component="th" scope="row">
        {product.id}
      </TableCell>
      <TableCell align="right">{product.name}</TableCell>
      <TableCell align="right">{product.rest}</TableCell>
    </TableRow>
  );
}

export default ProductItem;
