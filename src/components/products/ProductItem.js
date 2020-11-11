import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

function ProductItem({ product }) {
  console.log("ProductItem", product);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">{product.id}</TableCell>
      <TableCell align="right">{product.name}</TableCell>
      <TableCell align="right">{product.rest}</TableCell>
    </TableRow>
  );
}

export default ProductItem;
