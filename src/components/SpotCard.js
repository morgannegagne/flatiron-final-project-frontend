import React from 'react';
import { connect } from 'react-redux'

const SpotCard = props => {
  const { place, comments } = props

  return(
    <li>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
      <p>{place.phone_number}</p>
    </li>
  )

};

export default connect(null)(SpotCard);
