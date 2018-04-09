import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {

  render(){
    return(
      <div>
        <NavLink to='/'>Home</NavLink> <br></br>
        <NavLink to="/friends">Friends</NavLink>
      </div>
    )
  }
}


export default connect(null)(NavBar);
