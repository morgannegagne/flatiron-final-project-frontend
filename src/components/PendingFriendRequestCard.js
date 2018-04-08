import React from 'react';
import { connect } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest } from '../actions/friends'

const RequestCard = props => {
  const { friend } = props

  const handleClick = (e) => {
    if (e.target.value === 'accept'){
      props.acceptFriendRequest(friend)
    } else {
      props.declineFriendRequest(friend)
    }
  }

  return(
    <div>
      {friend.username} friended you
      <button value="accept" onClick={handleClick}>Accept</button>
      <button value="decline" onClick={handleClick}>Decline</button>
    </div>

  )

};

export default connect(null, { acceptFriendRequest, declineFriendRequest })(RequestCard);
