import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import defaultUserImage from '../images/default-user-image.png'

const FriendCard = props => {
  const { username, id, name } = props

  const handleClick = () => {
    props.sendFriendRequest(id)
  }

  return(
    <NavLink to={`profiles/${username}`}>
      <div className="user-card">
        <div style={{fontSize: "1.2em"}}>{name || username}</div>
        <img src={props.image_url || defaultUserImage} width={`100%`} style={{padding: 5}} />
      </div>
    </NavLink>
  )

};

export default connect(null)(FriendCard);
