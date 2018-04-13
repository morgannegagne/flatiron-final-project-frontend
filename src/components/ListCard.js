import React from 'react';
import { connect } from 'react-redux'
import { toggleActiveList } from '../actions/lists'

class ListCard extends React.Component {

  handleClick = () => {
    this.props.toggleActiveList(this.props.list)
  }

  render(){
    const { list } = this.props
    return(
      <div onClick={this.handleClick}>
        {list.name}
      </div>
    )
  }
};



export default connect(null, { toggleActiveList })(ListCard);
