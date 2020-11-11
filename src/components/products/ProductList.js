import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";
import ProductItem from "./ProductItem";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ProductList({ products }) {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">rest</TableCell>
              <TableCell align="right">sum</TableCell>
              <TableCell align="right">amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button onClick={onAddButtonClick}>Add</Button> */}
    </>
  );
}

const mapStateToProps = ({ products: { items } }) => ({
  products: items,
});

export default connect(mapStateToProps)(ProductList);