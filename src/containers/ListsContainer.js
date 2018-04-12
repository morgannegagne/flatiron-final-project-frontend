import React from 'react'
import { connect } from 'react-redux'

class ListsContainer extends React.Component{

  render(){

    return(
      <div>
        ADD LIST
        <form onSubmit={this.handleSubmit}>
          
        </form>
      </div>
    );
  }
}

export default connect(null)(ListsContainer);
