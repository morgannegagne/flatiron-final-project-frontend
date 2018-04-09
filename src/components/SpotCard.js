import React from 'react';
import { connect } from 'react-redux'
import { removeSpot, addComment } from '../actions/places'

class SpotCard extends React.Component {

  state = {
    text: ''
  }

  handleClick = () => {
    this.props.removeSpot(this.props.id)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({text: ''})
    this.props.addComment(this.props.id, this.state.text)
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  render(){
    const comments = this.props.comments.map(c => <div key={c.id}>{c.text}</div>)
    return(
      <li>
        <h3>{this.props.place.name}</h3>
        <p>{this.props.place.address}</p>
        <p>{this.props.place.phone_number}</p>
        <h4>Comments</h4>
        {comments}
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleChange} type="text"/>
          <input type="submit"/>
        </form>
        <button onClick={this.handleClick}>DELETE SPOT :(</button>
      </li>
    )
  }

};

export default connect(null, {removeSpot, addComment})(SpotCard);
