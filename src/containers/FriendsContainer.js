import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import UserCard from '../components/UserCard'
import RequestCard from '../components/RequestCard'
import PendingFriendRequestCard from '../components/PendingFriendRequestCard'
import { fetchUsers } from '../actions/friends'

class FriendsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    const users = this.props.unfriended.map( u => <UserCard key={u.id} {...u}/>)
    const requests = this.props.requestedFriends.map( r => <RequestCard friend={r}/>)
    const pendingRequests = this.props.pendingFriends.map(f => < PendingFriendRequestCard key={`pending-${f.id}`} friend={f} />)
    const acceptedFriends = this.props.acceptedFriends.map(f => <div>{f.username}</div>)
    return(
      <div>
        <h1>SENT REQUESTS</h1>
        {requests}
        <h1>PENDING REQUESTS</h1>
        {pendingRequests}
        <h1>YOUR FRIENDS</h1>
        {acceptedFriends}
        <h1>ADD FRIENDS</h1>
        {users}
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
