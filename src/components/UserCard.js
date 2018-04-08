import React from 'react';
import { connect } from 'react-redux'
import { sendFriendRequest } from '../actions/friends'

const UserCard = props => {
  const { username, id } = props

  const handleClick = () => {
    props.sendFriendRequest(id)
  }

  return(
    <div>
      {username}
      <button onClick={handleClick}>Send friend request!!</button>
    </div>

  )

};

export default connect(null, { sendFriendRequest })(UserCard);
