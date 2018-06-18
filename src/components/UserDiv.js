import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import defaultUserImage from '../images/default-user-image.png'
import Sheep from '../images/sheep-logo.png'
import withAuth from './withAuth'
import NotificationCard from './NotificationCard'
import ReactFilestack from 'filestack-react'
import { uploadProfilePhoto } from '../actions/auth'

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

class UserDiv extends React.Component {

  handleUpload = (arg) => {
    this.props.uploadProfilePhoto(arg.filesUploaded[0].url, this.props.user.id)
  }

  componentDidMount(){
    if (!this.props.friends){
      this.props.friends = []
    }
  }

  render(){
    const { user } = this.props
    const favorites = this.props.user.spots.filter(spot => spot.spot_type === 'favorite')
    const saves = this.props.user.spots.filter(spot => spot.spot_type === 'save')
    const notifications = this.props.notifications.map(n => <NotificationCard notification={n}/>)
    return(
      <div className="user-div">
        <div className="user-item">
          <h2 style={{marginTop: 20}}>{user.name || user.username}</h2>
          <img src={user.image_url || defaultUserImage} className="user-image" alt="default-user-image"/>
          {
            user.id === this.props.currentUser.id ?
            <div>
              <ReactFilestack
                apikey={this.props.apiKey}
                buttonText="Upload a Profile Photo"
                buttonClass="ui tiny button"
                options={options}
                onSuccess={this.handleUpload}
                />
            </div>
            :
            null
          }
        </div>
        <div className="user-saves">
          <h3>{saves.length}</h3>
          <p>Saves</p>
        </div>
        <div className="user-favorites">
          <h3>{favorites.length}</h3>
          <p>Favorites</p>
        </div>
        <div className="user-friends">
          <h3>{this.props.friends.length}</h3>
          <p>Friends</p>
        </div>

        {
          this.props.currentUser.id === user.id ?
          <div className="notifications">
            <h3 style={{borderBottom: "1px solid lightgrey"}}>Notifications</h3>
            {
              notifications.length > 0 ?
              <div className="notifications-content">
                {notifications}
              </div>
              :
              <span style={{fontSize: "1.2em"}}>You're all caught up!</span>
            }
          </div>
          :
          <img src={Sheep} width={150} style={{margin: "auto"}} />

        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  friends: state.friends.acceptedFriends,
  currentUser: state.auth.currentUser,
  apiKey: state.auth.apiKey,
  notifications: state.notifications.notifications
})

export default connect(mapStateToProps, { uploadProfilePhoto })(withAuth(UserDiv));
