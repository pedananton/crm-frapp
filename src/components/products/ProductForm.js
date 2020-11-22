import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Field, Form, Formik } from 'formik';

function ProductForm({ product }) {
  console.log('Form');
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
        <Form>
          Form
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
          <button type='submit'>Save</button>
          <button
            type='button'
            // onClick={() => onUserDelete(user.id, onDeleteClick())}
          >
            Delete
          </button>
        </Form>
      </Formik>
    </>
  );
}

const mapStateToProps = (state, props) => {
  console.log('props', props.match.params.id);
  const product =
    props.match.params.id == 'new'
      ? {
          name: '',
          quantity: '',
          price: '',
        }
      : state.products.items.find(
          (product) => product.id == props.match.params.id
        );
  return {
    product,
  };
};

export default withRouter(connect(mapStateToProps)(ProductForm));
