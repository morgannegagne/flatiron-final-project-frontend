import React from 'react';
import { connect } from 'react-redux'
import { removeSpot, addComment } from '../actions/places'
import { updateActiveMarker } from '../actions/map'
import defaultImage from '../images/default-img.gif'

class SpotCard extends React.Component {

  state = {
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({text: ''})
    this.props.addComment(this.props.id, this.state.text)
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleClick = () => {
    this.props.updateActiveMarker(this.props.spot)
  }

  getImage = () => {
    return this.props.images.length ? this.props.images[0].url : defaultImage
  }

  render(){
    const comments = this.props.comments.map(c => <div key={c.id}>{c.text}</div>)
    const image = this.getImage()
    return(
      <div onClick={this.handleClick} className="spot-card">
        <img src={image} width="100%"/>
        <div style={{fontSize: "1.2em"}}>{this.props.place.name}</div>
      </div>
    )
  }

};

export default connect(null, {removeSpot, addComment, updateActiveMarker})(SpotCard);
