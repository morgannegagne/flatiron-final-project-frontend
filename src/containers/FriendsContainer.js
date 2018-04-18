import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import UserCard from '../components/UserCard'
import RequestCard from '../components/RequestCard'
import FriendCard from '../components/FriendCard'
import PendingFriendRequestCard from '../components/PendingFriendRequestCard'
import { fetchUsers } from '../actions/friends'
import NavBar from '../components/NavBar'

class FriendsContainer extends React.Component{

  state = {
    showPending: true
  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  toggleRequestMenu = () => {
    this.setState({showPending: !this.state.showPending})
  }

  render(){
    const users = this.props.unfriended.map( u => <UserCard key={u.id} {...u}/>)
    const requests = this.props.requestedFriends.map( r => <RequestCard key={`request-${r.id}`} friend={r}/>)
    const pendingRequests = this.props.pendingFriends.map(f => < PendingFriendRequestCard key={`pending-${f.id}`} friend={f} />)
    const acceptedFriends = this.props.acceptedFriends.map(f => <FriendCard key={`accepted-${f.id}`} {...f}/>)
    return(
      <div>
        < NavBar />
        <NavLink to="/">Return to Map</NavLink>
      {
        this.state.showPending ?
        <div className="request-box white-background-div">
          {
            this.props.pendingFriends.length ?
            <div>
              <h4>Respond to Your Friend Requests</h4>
              <a onClick={this.toggleRequestMenu}>View Sent Requests ({this.props.requestedFriends.length})</a>
              {pendingRequests}
            </div>
            :
            <div>
              <h4>No pending invitations.</h4>
              <a onClick={this.toggleRequestMenu}>View Sent Requests ({this.props.requestedFriends.length})</a>
            </div>
          }
        </div>
        :
        <div className="request-box white-background-div">
          {
            this.props.requestedFriends.length ?
            <div >
              <h4>Your Sent Requests</h4>
              <a onClick={this.toggleRequestMenu}>Respond to Pending Friend Requests</a>
              {requests}
            </div>
            :
            <div>
              <h4>No pending sent requests.</h4>
              <a onClick={this.toggleRequestMenu}>Respond to Pending Friend Requests</a>
            </div>
          }
        </div>
      }

      {
        this.props.acceptedFriends.length ?
        <div className="request-box white-background-div">
          <h4>Friends</h4>
          <div className="user-card-container">
            {acceptedFriends}
          </div>
        </div>
        :
        <div className="request-box white-background-div">
          You don't have any friends right now. Search below to get started!
        </div>
      }
        <div className="request-box white-background-div">
          <h4>Add Friends</h4>
          <div className="user-card-container">
            {users}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    unfriended: state.friends.unfriended,
    currentUser: state.auth.currentUser,
    pendingFriends: state.friends.pendingFriends,
    requestedFriends: state.friends.requestedFriends,
    acceptedFriends: state.friends.acceptedFriends
  }
}
export default connect(mapStateToProps, { fetchUsers })(withAuth(FriendsContainer))
