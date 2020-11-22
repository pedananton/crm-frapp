import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField label='Product ID' variant='outlined' />
      <TextField label='Product Name' variant='outlined' />
      <TextField label='Product Amount' variant='outlined' />
      <TextField label='Product Price' variant='outlined' />
    </form>
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
