import React from 'react';
import { connect } from 'react-redux'
import SpotCard from './SpotCard'

const SpotList = props => {
  const { spots } = props
  const spotCards = spots.map(spot => <SpotCard key={spot.id} spot={spot} {...spot}/>)
  return(
    <div>
      <h1>Spots</h1>
      <div className="spot-container">
        {spotCards}
      </div>
    </div>
  )

};

const mapStateToProps = state => ({
  spots: state.places.spots
})

export default connect(mapStateToProps)(SpotList);
