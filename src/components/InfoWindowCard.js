import React from 'react';
import { connect } from 'react-redux'

const InfoWindowCard = props => {
  const { place } = props

  return(
    <div>
      {place.name}
    </div>
  )

};

export default connect(null)(InfoWindowCard);
