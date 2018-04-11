import React from 'react';
import { connect } from 'react-redux'

const InfoWindowCard = props => {
  const { spot } = props
  return(
    <div>
      {
        spot.user_id === props.currentUser.id ?
        <div>{spot.place.name}</div>
        :
        <div>
          {spot.place.name} <br></br>
          {spot.username}
        </div>
      }
    </div>
  )

};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(InfoWindowCard);
