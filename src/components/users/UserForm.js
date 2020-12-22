import React from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
/* eslint-disable eqeqeq */
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import { deleteUserForm, safeUserForm } from '../../store/actions/users';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function UserForm({ user, onSave, onUserDelete }) {
  const classes = useStyles();
  const history = useHistory();

  function onFormSubmit(data) {
    onSave(data);
    history.push('/users');
  }

  function onDeleteClick() {
    history.push('/');
  }

  return (
    <Formik initialValues={user} onSubmit={onFormSubmit}>
      <Form className={classes.root} noValidate autoComplete='off'>
        <Field name='id' placeholder='User ID' readOnly />
        <Field name='name' placeholder='User Name' />
        <Field name='email' placeholder='Email' />
        <Field name='phone' placeholder='Phone' />
        <button type='submit'>Save</button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => onUserDelete(user.id, onDeleteClick())}
        >
          Delete
        </Button>
      </Form>
    </Formik>
  );
}

const mapStateToProps = (state, props) => {
  const user =
    props.match.params.id == 'new'
      ? {
          name: '',
          email: '',
          phone: '',
        }
      : state.users.items.find((user) => user.id == props.match.params.id);
  return {
    user,
  };
};

const mapDispatchToProps = {
  onSave: safeUserForm,
  onUserDelete: deleteUserForm,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserForm)
);
