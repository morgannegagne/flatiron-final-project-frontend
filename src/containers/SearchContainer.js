import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PlacesSearchBox  from '../components/PlacesSearchBox'
import OptionCard from '../components/OptionCard'

class SearchContainer extends React.Component{

  render(){
    const places = this.props.options.map(option => < OptionCard key={option.place_id} place={option} />)
    return(
      <div className="side-panel-item" >
        <div className="side-panel-subheader">
          <h3>Herd about somewhere new?</h3>
        </div>
        < PlacesSearchBox
          style={{paddingTop: 50}}
          googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4Cl1Qf21cnhWLGQxYb3Cx8MGBANcogWg&v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
        />
        <div>
          {places}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    options: state.places.googlePlaces,
    spots: state.places.spots
  }
}

export default withRouter(connect(mapStateToProps)(SearchContainer))
