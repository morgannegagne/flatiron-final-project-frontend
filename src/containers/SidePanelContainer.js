import React from 'react'
import { connect } from 'react-redux'
import { toggleSidePanel } from '../actions/map'
import SidePanelMenu from '../components/SidePanelMenu'

class SidePanelContainer extends React.Component{

  render(){
    return(
      <div class="ui centered grid" style={{bottonMargin: 20}}>
        <div class="center aligned column">
          <SidePanelMenu />
        </div>
      </div>
    )
  }
}

export default connect(null)(SidePanelContainer)
