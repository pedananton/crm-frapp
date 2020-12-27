import React from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Field, Form, Formik } from 'formik';
import {
  deleteFormProduct,
  safeFormProduct,
} from '../../store/actions/products';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ProductForm({ product, onSave, onProductDelete }) {
  const classes = useStyles();
  const history = useHistory();

  function onFormSubmit(data) {
    onSave(data);
    history.push('/');
  }

  function onDeleteClick() {
    history.push('/');
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>NAME</TableCell>
            <TableCell align='right'>STATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Formik initialValues={product} onSubmit={onFormSubmit}>
            <Form className={classes.root} noValidate autoComplete='off'>
              <Field name='id' placeholder='Product ID' readOnly />
              <Field name='name' placeholder='Product Name' />
              <Field name='rest' placeholder='Product Amount' />
              <Field name='price' placeholder='Product Price' />
              <button type='submit'>Save</button>
              <Button
                variant='contained'
                color='primary'
                onClick={() => onProductDelete(product.id, onDeleteClick())}
              >
                Delete
              </Button>
            </Form>
          </Formik>
        </TableBody>
      </Table>
    </TableContainer>
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
      : state.products.items.find(
          (product) => product.id == props.match.params.id
        );
  return {
    product,
  };
};

const mapDispatchToProps = {
  onSave: safeFormProduct,
  onProductDelete: deleteFormProduct,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductForm)
);
