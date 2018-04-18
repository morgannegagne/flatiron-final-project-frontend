import React from 'react';
import { connect } from 'react-redux'
import ReactFilestack from 'filestack-react'
import { removeSpot, addComment, updateSpotType, addImage } from '../actions/places'
import { saveToList, removeFromList } from '../actions/lists'
import { voidActiveSpot } from '../actions/places'
import defaultImg from '../images/default-img.gif'
import { Form, Icon, Button, List, TextArea } from 'semantic-ui-react'
import BigHeartOutline from '../images/heart-outline.png'
import BigStarOutline from '../images/big-star-outline.png'
import BigStar from '../images/big-star.png'
import BigHeart from '../images/big-heart.png'
import PhotoCarousel from './PhotoCarousel'
import CommentCard from './CommentCard'
import ListOptionCard from './ListOptionCard'

const options = {
  accept: 'image/*',
  maxFiles: 1,
  transformations:{
    crop:{
      force:true,
      aspectRatio:1
    }
  },
  fromSources:["local_file_system","url","facebook","instagram","googledrive"]
};

class SpotPage extends React.Component {

  state = {
    text: '',
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

  handleUpload = arg => {
    this.props.addImage(this.props.id, arg.filesUploaded[0])
  }

  render(){
    const comments = this.props.comments.map(c => <CommentCard key={c.id} {...c}/>)
    const { apiKey } = this.props
    const allLists = this.props.lists
    const addListOptions = allLists.map(list => <ListOptionCard key={`list-option-${list.id}`} list={list} spot={this.props.spot} />)
    return(
      <div>
        <a onClick={this.props.voidActiveSpot}>Back to list</a>
        {
          this.props.images.length ?
          < PhotoCarousel images={this.props.images}/>
        :
          <img src={defaultImg} alt="default-img" width={`100%`}/>
        }
        <ReactFilestack
          apikey={apiKey}
          buttonText="Upload a photo"
          buttonClass="ui tiny button fluid"
          options={options}
          onSuccess={this.handleUpload}
          />
        <div className="spot-page-header">
          <h3>{this.props.place.name}</h3>
          {
            this.props.spot_type === 'favorite' ?
            <div className="spot-page-subheader">
              <img className="spot-page-subheader-item page-icon" src={BigHeart} alt="big-heart" />
              <img className="spot-page-subheader-item page-icon" alt="big-star-outline" onClick={this.handleIconClick} src={BigStarOutline} />
              <Button className="spot-page-subheader-item" onClick={this.handleClick}>Remove</Button>
            </div>
            :
            <div className="spot-page-subheader">
              <img src={BigHeartOutline} className="spot-page-subheader-item page-icon" alt="big-heart-outline" onClick={this.handleIconClick} />
              <img className="spot-page-subheader-item page-icon" alt="big-star" src={BigStar} />
              <Button className="spot-page-subheader-item" onClick={this.handleClick}>Remove</Button>
            </div>
          }
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
          <h3>Lists</h3>
        </div>
        <div className="spot-page-lists">
          {addListOptions}
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

const mapStateToProps = state => {
  return {
    apiKey: state.auth.apiKey,
    lists: state.lists.lists
  }
}

export default connect(mapStateToProps, {removeSpot, addComment, updateSpotType, addImage, saveToList, removeFromList, voidActiveSpot })(SpotPage);
