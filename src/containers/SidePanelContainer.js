import React from 'react'
import { connect } from 'react-redux'
import { toggleSidePanel } from '../actions/map'
import SidePanelMenu from '../components/SidePanelMenu'

class SidePanelContainer extends React.Component{

  state ={
    active: true,
  }

  handleClick = () =>{
    this.setState({active: !this.state.active})
  }

  render(){
    return(
      <div className="sidePanelItem">
        <button onClick={this.handleClick}>{this.state.active ? 'X' : 'O'}</button>
        {
          this.state.active ?
          <SidePanelMenu />
          :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  active: state.places.sidePanelActive
})
export default connect(mapStateToProps, { toggleSidePanel })(SidePanelContainer)
