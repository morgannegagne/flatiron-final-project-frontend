import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../actions/auth';
import { fetchUsers } from '../actions/friends'


const withAuth = WrappedComponent => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    };

    componentDidMount() {
      const token = localStorage.getItem('token')
      if (token) {
        this.props.getUser(token, this.props.history);
        this.props.fetchUsers()
      } else {
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true });
      }
    }

    render() {
      if (this.state.authCompleted) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login" />
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser,
    currentUser: state.auth.currentUser,
    allUsers: state.friends.allUsers
  });

  return connect(mapStateToProps, { getUser, fetchUsers })(AuthedComponent);
};

export default withAuth;
