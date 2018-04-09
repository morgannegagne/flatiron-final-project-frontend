import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'


class MapContainer extends React.Component{

  render(){
    return(
      <div>
        MAP!!
        <Map
          googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ33Uqce6yl_qY19v4fzrj4G4cmQHFkFs&v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    )
  }
}

export default connect(null)(MapContainer)
