import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import { withRouter } from 'react-router-dom'
import SpotList from '../components/SpotList'
import SpotPage from '../components/SpotPage'


class PlacesContainer extends React.Component{

  render(){
    const { activeSpot } = this.props
    return(
      <div className="side-panel-item">
        { activeSpot ?
          < SpotPage key={activeSpot.id} spot={activeSpot} {...activeSpot} />
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
    activeSpot: state.places.activeSpot
  }
}

export default withRouter(connect(mapStateToProps)(withAuth(PlacesContainer)))
