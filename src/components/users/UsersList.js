import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UserItem from './UserItem';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function UsersList({ users }) {
  const classes = useStyles();

  const { url } = useRouteMatch();
  return (
    <>
      <button type='submit'>
        <Link to={url + '/new'}>Add New</Link>
      </button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align='right'>NAME</TableCell>
              <TableCell align='right'>EMAIL</TableCell>
              <TableCell align='right'>PHONE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserItem user={user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = ({ users: { items } }) => ({
  users: items,
});

export default connect(mapStateToProps)(UsersList);
