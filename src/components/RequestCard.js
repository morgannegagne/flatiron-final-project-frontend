import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { cancelFriendRequest } from '../actions/friends'

const RequestCard = props => {
  const { friend } = props

  const handleClick = () => {
    props.cancelFriendRequest(friend.id)
  }

  return(
    <div>
      You sent a request to {friend.username}
      <Button size="mini" color="red" onClick={handleClick}>Cancel</Button>
    </div>

  )

};

export default connect(null, { cancelFriendRequest })(RequestCard);
