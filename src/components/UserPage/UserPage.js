import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import FollowUp from '../FollowUp/FollowUp';
import Chart from '../Chart/Chart';
import Grid from '@material-ui/core/Grid';

const styles = {
  paper: {
    width: '80%',
    margin: '10px auto',
    padding: '100px',
    paddingTop: '20px',
},
}
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    {/* <p>Your ID is: {props.user.id}</p> */}
    {/* <LogOutButton className="log-in" /> */}
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        this is the side
                        <br />
        i don't know what to put
                        <br />
        i am stuck with styling
                        </Grid>
      <Grid item xs={12} sm={9}>
        {/* <Paper style={styles.paper}> */}
          <FollowUp />
          <Chart />
        {/* </Paper> */}
      </Grid>
    </Grid>

  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
