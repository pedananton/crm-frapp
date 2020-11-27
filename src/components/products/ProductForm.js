import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ProductForm({ product }) {
  const classes = useStyles();
  console.log(product);
  return (
    <Formik initialValues={product}>
      <Form className={classes.root} noValidate autoComplete='off'>
        <Field name='id' 
        // value={product.id} 
        placeholder='Product ID' />
        <Field name='name' placeholder='Product Name' />
        <Field name='rest' placeholder='Product Amount' />
        <Field name='Product Price' placeholder='Product Price' />
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

export default withRouter(connect(mapStateToProps)(ProductForm));
