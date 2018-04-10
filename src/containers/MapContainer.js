import React from 'react'
import { connect } from 'react-redux'
import { fetchMapSpots } from '../actions/places'
import Map from '../components/Map'

class MapContainer extends React.Component{

  state = {
    loaded: false
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.spots){
      this.setState({
        loaded: true,
      })
    }
  }

  render(){
    return(
      <div>
        {
          this.state.loaded ?
          <Map
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ33Uqce6yl_qY19v4fzrj4G4cmQHFkFs&v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            spots={this.props.spots}
            />
          :
          'loading'
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.places.spots,
  currentUser: state.auth.currentUser,
})


export default connect(mapStateToProps, { fetchMapSpots } )(MapContainer)
