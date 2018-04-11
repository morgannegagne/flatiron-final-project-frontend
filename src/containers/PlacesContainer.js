import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom'
import SpotList from '../components/SpotList'
import SpotCard from '../components/SpotCard'


class PlacesContainer extends React.Component{

  render(){
    const { activeSpot } = this.props
    return(
      <div>
        { activeSpot ?
          < SpotCard key={activeSpot.id} {...activeSpot} />
        :
          < SpotList spots={this.props.spots}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spots: state.places.spots,
    activeSpot: state.map.activeSpot
  }
}

export default withRouter(connect(mapStateToProps)(withAuth(PlacesContainer)))
