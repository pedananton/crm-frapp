import React from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import { deleteOrderForm, safeOrderForm } from '../../store/actions/orders';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function OrderForm({ order, onSave, onOderDelete, items }) {
  const classes = useStyles();
  const history = useHistory();

  function onFormSubmit(data) {
    onSave(data);
    history.push('/orders');
  }

  function onDeleteClick() {
    history.push('/');
  }

  return (
    <Formik initialValues={order} onSubmit={onFormSubmit}>
      <Form className={classes.root} noValidate autoComplete='off'>
        <Field name='id' placeholder='Order ID' readOnly />
        <Field name='name' placeholder='User Name' />
        <Field name='state' placeholder='State' />
        <button type='submit'>Save</button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => onOderDelete(order.id, onDeleteClick())}
        >
          Delete
        </Button>
      </Form>
    </Formik>
  );
}

const mapStateToProps = (state, props) => {
  const order =
    props.match.params.id == 'new'
      ? {
          name: '',
          email: '',
          phone: '',
        }
      : state.orders.items.find((order) => order.id == props.match.params.id);
  return {
    order,
  };
};

const mapDispatchToProps = {
  onSave: safeOrderForm,
  onOrderDelete: deleteOrderForm,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderForm)
);
