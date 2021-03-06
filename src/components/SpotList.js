import React from 'react';
import { connect } from 'react-redux'
import SpotCard from './SpotCard'

const SpotList = props => {
  const { spots } = props
  const spotCards = spots.map(spot => <SpotCard key={spot.id} {...spot}/>)
  return(
    <div>
      <h1>SPOTS</h1>
      {spotCards}
    </div>
  )

};

const mapStateToProps = state => ({
  spots: state.places.spots
})

export default connect(mapStateToProps)(SpotList);
