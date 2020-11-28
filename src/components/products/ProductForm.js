import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import { safeFormProduct } from '../../store/actions/products';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ProductForm({ product, onSave }) {
  const classes = useStyles();

  function onFormSubmit(data) {
    onSave(data);
  }

  return (
    <Formik initialValues={product} onSubmit={onFormSubmit}>
      <Form className={classes.root} noValidate autoComplete='off'>
        <Field name='id' placeholder='Product ID' readOnly />
        <Field name='name' placeholder='Product Name' />
        <Field name='rest' placeholder='Product Amount' />
        <Field name='price' placeholder='Product Price' />
        <button type='submit'>Save</button>
      </Form>
    </Formik>
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
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductForm)
);
