import React from 'react';
import { connect } from 'react-redux'
import { toggleActiveList } from '../actions/lists'
import { Card } from 'semantic-ui-react'

class ListCard extends React.Component {

  handleClick = () => {
    this.props.toggleActiveList(this.props.list)
  }

  render(){
    const { list } = this.props
    return(
      <Card fluid color="blue" onClick={this.handleClick}>
        <Card.Header>
          <h4 style={{padding: 5}}>{list.name}</h4>
        </Card.Header>
        <Card.Content>
          {list.spots.length} spots
        </Card.Content>
      </Card>
    )
  }
};



export default connect(null, { toggleActiveList })(ListCard);
