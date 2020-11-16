/* eslint-disable eqeqeq */
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Field, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function ProductForm({ product }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
      <Formik
        initialValues={product}
          // onSubmit={onFormSubmit}
          // validate={validate}
      >
        <ProductForm>
          <Field name='name' type='text' placeholder='name' />
          <Field name='quantity' type='email' placeholder='quantity' />
          <Field name='price' type='price'>
            {({ field, meta }) => (
              <div>
                <input {...field} placeholder='+38' />
                {meta.error ? meta.error : null}
              </div>
            )}
          </Field>
          {/* <Field name="roomId" as="select" placeholder="Room number"> */}
          {/* {rooms.map((room) => (
              <option value={room.id} key={room.id}>
                {room.Color}
              </option>
            ))} */}
          {/* </Field> */}
          <button type='submit'>Save</button>
          <button
            type='button'
            // onClick={() => onUserDelete(user.id, onDeleteClick())}
          >
            Delete
          </button>
        </ProductForm>
      </Formik>
    </>
  );
}

const mapStateToProps = (state, props) => {
  const product =
    props.match.params.id == 'new'
      ? {
          name: '',
          quantity: '',
          price: '',
        }
      : // eslint-disable-next-line
        state.products.items.find(
          (product) => product.id == props.match.params.id
        );
  return {
    product,
  };
};

export default withRouter(connect(mapStateToProps)(ProductForm));
