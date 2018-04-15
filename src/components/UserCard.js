import React from 'react';
import { connect } from 'react-redux'
import { sendFriendRequest } from '../actions/friends'
import defaultUserImage from '../images/default-user-image.png'
import { Button } from 'semantic-ui-react'

const UserCard = props => {
  const { username, id, name } = props

  const handleClick = () => {
    props.sendFriendRequest(id)
  }

  return(
    <div className="user-card">
      <div style={{fontSize: "1.2em"}}>{name || username}</div>
      <img src={props.image_url || defaultUserImage} width={`100%`} style={{padding: 5}} />
      <Button fluid onClick={handleClick}><i class="user plus icon"></i> Add Friend</Button>
    </div>

  )

};

export default connect(null, { sendFriendRequest })(UserCard);
