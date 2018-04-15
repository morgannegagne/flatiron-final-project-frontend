import React from 'react'
import { connect } from 'react-redux'
import { toggleSidePanel } from '../actions/map'
import SidePanelMenu from '../components/SidePanelMenu'

class SidePanelContainer extends React.Component{

  render(){
    return(
      <div className="sidePanelItem">
        <SidePanelMenu />
      </div>
    )
  }
}

export default connect(null)(SidePanelContainer)
