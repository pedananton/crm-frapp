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

function ProductList() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {users.map((user) => (
              <ListItem user={user} key={user.id} />
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button onClick={onAddButtonClick}>Add</Button> */}
    </>
  );
}

export default ProductList;
