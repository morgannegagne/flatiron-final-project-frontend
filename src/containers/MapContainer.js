import React from 'react'
import { connect } from 'react-redux'
import { fetchMapSpots } from '../actions/places'
import { Loader } from 'semantic-ui-react'
import Map from '../components/Map'

class MapContainer extends React.Component{

  state = {
    loaded: false
  }

  componentDidMount(){
    this.setState({loaded: true})
  }

  componentWillReceiveProps(nextProps){
    console.log('receiving props')
    if (nextProps.spots){
      this.setState({
        loaded: true,
      })
    }
  }

  render(){
    console.log('spots', this.props.spots, 'loaded', this.state.loaded)
    const spots = this.props.activeMenu === 'lists' && this.props.activeList ? this.props.activeList.spots : this.props.spots
    return(
      <div className="mapItem">
        {
          this.state.loaded ?
          <Map
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4Cl1Qf21cnhWLGQxYb3Cx8MGBANcogWg&v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<Loader active style={{ height: `100%` }} />}
            containerElement={<div style={{ height: 800 }} />}
            mapElement={<div style={{ height: `100%` }} />}
            spots={spots}
            />
          :
          'loading STUCK'
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.places.spots,
  currentUser: state.auth.currentUser,
  activeMenu: state.places.activeMenu,
  activeList: state.lists.activeList
})


export default connect(mapStateToProps, { fetchMapSpots } )(MapContainer)
