import React from 'react';
import { connect } from 'react-redux'
import { removeSpot, addCommentToFriendSpot, saveFriendSpot } from '../actions/places'
import defaultImg from '../images/default-img.gif'
import { Icon } from 'semantic-ui-react'
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
    this.props.addCommentToFriendSpot(this.props.id, this.state.text)
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleUserSave = () => {
    this.props.saveFriendSpot(this.props.place, 'save', this.props.username)
  }

  toggleComments = () => {
    this.setState({showComments: !this.state.showComments})
  }

  render(){
    const comments = this.props.comments.map(c => <div key={c.id}>{c.text}</div>)
    return(
      <div>
        <img src={defaultImg} alt="default" width="400"/>
        <div>
          <h3>
          {
            this.props.spot_type === 'favorite' ?
            <span>
              <img src={BigHeart} alt="big-heart" width={20}/>
            </span>
            :
            <span>
              <img alt="big-star"width={20} src={BigStar} />
            </span>
          }
          {this.props.place.name}
          <span><Icon link name="remove bookmark" onClick={this.handleUserSave}/>Save</span>
        </h3>
        </div>
        <p><Icon name="point"/>{this.props.place.address}</p>
        <p><Icon name="phone"/>{this.props.place.phone_number}</p>
        {
          this.props.place.website ?
          <p><a href={this.props.place.website} target="_blank"><Icon name="globe"/>{this.props.place.website}</a></p>
          : null
        }
        <Icon size="large" link name="comment outline" onClick={this.toggleComments}/> <span>({comments.length})</span>
        {
          this.state.showComments ?
          <div>
            <h4>Comments</h4>
            {comments}
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.text} onChange={this.handleChange} type="text"/>
              <input type="submit"/>
            </form>
          </div>
          :
          null
        }
      </div>
    )
  }

};

export default connect(null, {removeSpot, addCommentToFriendSpot, saveFriendSpot})(SpotPage);
