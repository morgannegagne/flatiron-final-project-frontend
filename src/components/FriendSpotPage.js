import React from 'react';
import { connect } from 'react-redux'
import { removeSpot, addCommentToFriendSpot, saveFriendSpot } from '../actions/places'
import defaultImg from '../images/default-img.gif'
import { Icon, List, Form, TextArea, Button } from 'semantic-ui-react'
import BigStar from '../images/big-star.png'
import BigHeart from '../images/big-heart.png'
import CommentCard from './CommentCard'
import PhotoCarousel from './PhotoCarousel'

class FriendSpotPage extends React.Component {

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

  checkIfCurrentUserSaved = () => {
    let response = false
    this.props.currentUser.spots.forEach(spot => {
      if (spot.place.google_uid === this.props.place.google_uid){
        response = true
      }
    })
    return response
  }

  render(){
    console.log('loads friend spot page')
    const comments = this.props.comments.map(c => <CommentCard key={`comment-${c.id}`} {...c}/>)
    return(
      <div className="side-panel-item">
        {
          this.props.images.length ?
          < PhotoCarousel images={this.props.images}/>
        :
          <img src={defaultImg} alt="default-img" width={`100%`}/>
        }
        <div className="spot-page-header">
          <h3>{this.props.place.name} </h3>
          <div className="spot-page-subheader">
            {
              this.props.spot_type === 'favorite' ?
              <div className="spot-page-subheader-item">
                <img src={BigHeart} alt="big-heart" width={20}/>
              </div>
              :
              <div className="spot-page-subheader-item">
                <img alt="big-star"width={20} src={BigStar} />
              </div>
            }
            {
              this.checkIfCurrentUserSaved() ?
              <div className="spot-page-subheader-item">
                <Button color="teal">Saved</Button>
              </div>
              :
              <div className="spot-page-subheader-item">
                <Button onClick={this.handleUserSave}>Save</Button>
              </div>
            }
          </div>
        </div>

        <div style={{paddingLeft: 30, paddingTop: 30}}>
          <List relaxed>
            <List.Item>
              <List.Icon name="point" size="large" verticalAlign="middle" />
              <List.Content>
                {this.props.place.address}
              </List.Content>
            </List.Item>
            {
              this.props.place.phone_number ?
              <List.Item>
                <List.Icon name="phone" size="large" verticalAlign="middle" />
                <List.Content>
                  {this.props.phone_number}
                </List.Content>
              </List.Item>
              : null
            }
            {
              this.props.place.website ?
              <List.Item>
                <List.Icon name="globe" size="large" verticalAlign="middle" />
                <List.Content>
                  <a className="info-grid-text" href={this.props.place.website} target="_blank">{this.props.place.website}</a>
                </List.Content>
              </List.Item>
              : null
            }
          </List>
        </div>

        <div className="spot-page-comments-header">
          <h3 >Comments</h3>
        </div>
        <div className="spot-page-comments">
          { comments.length ?
            <div>
              {comments}
            </div>
            :
            <h5 style={{textAlign: "center"}}>No one has said anything yet...</h5>
          }
          <Form onSubmit={this.handleSubmit}>
            <TextArea  autoHeight value={this.state.text} placeholder={`Say something about ${this.props.place.name}...`} onChange={this.handleChange}/> <br></br>
            <Button onClick={this.handleSubmit} fluid type="submit">Comment</Button>
          </Form>
        </div>
      </div>
    )
  }

};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, {removeSpot, addCommentToFriendSpot, saveFriendSpot})(FriendSpotPage);
