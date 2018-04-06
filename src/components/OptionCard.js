import React from 'react';
import { connect } from 'react-redux'
import { savePlace } from '../actions/places'

const OptionCard = props => {
  const { place } = props

  const handleClick = () => {
    props.savePlace(place)
  }

  return(
    <div>
      <h1>{place.name}</h1>
      <p>{place.formatted_address}</p>
      <p>{place.formatted_phone_number}</p>
      <button onClick={handleClick}>Add to your places!</button>
    </div>
  )

};

export default connect(null, { savePlace })(OptionCard);
