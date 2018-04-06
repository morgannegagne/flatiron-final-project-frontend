import React from 'react';

const OptionCard = props => {
  const { place } = props

  return(
    <div>
      <h1>{place.name}</h1>
      <p>{place.formatted_address}</p>
      <p>{place.formatted_phone_number}</p>
      <button>Add to your places!</button>
    </div>
  )

};

export default OptionCard;
