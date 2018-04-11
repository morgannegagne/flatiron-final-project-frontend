import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom'
import PlacesSearchBox  from '../components/PlacesSearchBox'
import OptionCard from '../components/OptionCard'

class SearchContainer extends React.Component{

  render(){
    const places = this.props.options.map(option => < OptionCard key={option.place_id} place={option} />)
    return(
      <div>
        < PlacesSearchBox
          googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ33Uqce6yl_qY19v4fzrj4G4cmQHFkFs&v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
        />
        {places}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    options: state.places.googlePlaces,
  }
}

export default withRouter(connect(mapStateToProps)(withAuth(SearchContainer)))
