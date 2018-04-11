import React from 'react';
import { connect } from 'react-redux'
import { removeSpot, addComment, updateSpotType } from '../actions/places'
import defaultImg from '../images/default-img.gif'
import { Icon } from 'semantic-ui-react'
import BigHeartOutline from '../images/heart-outline.png'
import BigStarOutline from '../images/big-star.png'
import BigStar from '../images/big-star-filled.png'
import BigHeart from '../images/big-heart.png'

class SpotPage extends React.Component {

  state = {
    text: '',
    showComments: false
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

  handleIconClick = () => {
    if (this.props.spot_type === 'favorite'){
      this.props.updateSpotType(this.props.id, 'save')
    } else {
      this.props.updateSpotType(this.props.id, 'favorite')
    }
  }

  toggleComments = () => {
    this.setState({showComments: !this.state.showComments})
  }

  render(){
    const comments = this.props.comments.map(c => <div key={c.id}>{c.text}</div>)
    return(
      <div>
        <img src={defaultImg} alt="default" width="400"/>
        <h3>{this.props.place.name}</h3>
        <div>
          {
            this.props.spot_type === 'favorite' ?
            <div>
              <img src={BigHeart} alt="big-heart" width={20}/>
              <img width={20} alt="big-star-outline" onClick={this.handleIconClick} src={BigStarOutline} />
              <span onClick={this.toggleComments}>Comments</span>
            </div>
            :
            <div>
              <img src={BigHeartOutline} alt="big-heart-outline" onClick={this.handleIconClick} width={20} alt="big-heart"/>
              <img alt="big-star"width={20} src={BigStar} />
              <span onClick={this.toggleComments}>Comments</span>
            </div>
          }

        </div>
        <p><Icon name="point"/>{this.props.place.address}</p>
        <p><Icon name="phone"/>{this.props.place.phone_number}</p>
        {
          this.props.place.website ?
          <p><a href={this.props.place.website} target="_blank"><Icon name="globe"/>{this.props.place.website}</a></p>
          : null
        }
        {
          this.state.showComments ?
          <div>
            <h4>Comments</h4>
            {comments}
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.text} onChange={this.handleChange} type="text"/>
              <input type="submit"/>
            </form>
            <button onClick={this.handleClick}>DELETE SPOT :(</button>
          </div>
          :
          null
        }
      </div>
    )
  }

};

export default connect(null, {removeSpot, addComment, updateSpotType})(SpotPage);
