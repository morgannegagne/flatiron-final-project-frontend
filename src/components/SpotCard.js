import React from 'react';
import { connect } from 'react-redux'
import { removeSpot } from '../actions/places'

const SpotCard = props => {
  const { place, comments, id } = props

  const handleClick = () => {
    props.removeSpot(id)
  }

  return(
    <li>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
      <p>{place.phone_number}</p>
      <button onClick={handleClick}>DELETE SPOT :(</button>
    </li>
  )

};

export default connect(null, {removeSpot})(SpotCard);
