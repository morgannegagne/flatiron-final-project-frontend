import React from 'react'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'
import { fetchUsers } from '../actions/friends'
import { getUser } from '../actions/auth'
import withAuth from '../components/withAuth'
import NavBar from '../components/NavBar'

class ProfilePageContainer extends React.Component {

  render(){
    return(
      <div>
        {
          this.props.user ?
          <div>
            < NavBar />
            <h1> {this.props.user.username} PROFILE PAGE!</h1>
            <MapContainer user={this.props.user}/>
          </div> :
          'loading...'
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    allUsers: state.friends.allUsers,
    spots: state.friends.friendSpots
  }
}

export default connect(mapStateToProps, { getUser, fetchUsers })(withAuth(ProfilePageContainer))
