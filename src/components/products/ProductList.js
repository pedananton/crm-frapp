import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  console.log("ProductList", products);
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>name</TableCell>
              <TableCell>rest</TableCell>
              <TableCell>sum</TableCell>
              <TableCell>amount</TableCell>
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
