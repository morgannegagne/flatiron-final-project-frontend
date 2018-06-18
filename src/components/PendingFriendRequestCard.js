import React from 'react';
import { connect } from 'react-redux'
import { acceptFriendRequest, declineFriendRequest } from '../actions/friends'
import { Button } from 'semantic-ui-react'

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
      <span style={{paddingRight: 20}}>{friend.username} friended you</span>
      <Button size="mini" positive value="accept" onClick={handleClick}>Accept</Button>
      <Button size="mini" negative value="decline" onClick={handleClick}>Decline</Button>
    </div>

  )

};

export default connect(null, { acceptFriendRequest, declineFriendRequest })(RequestCard);
