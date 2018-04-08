import React from 'react';
import { connect } from 'react-redux'
import { cancelFriendRequest } from '../actions/friends'

const RequestCard = props => {
  const { friend } = props

  const handleClick = () => {
    props.cancelFriendRequest(friend.id)
  }

  return(
    <div>
      You sent a request to {friend.username}
      <button onClick={handleClick}>CANCEL REQUEST BYE HONEY</button>
    </div>

  )

};

export default connect(null, { cancelFriendRequest })(RequestCard);
