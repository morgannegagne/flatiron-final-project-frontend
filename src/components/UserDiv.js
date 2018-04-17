import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import defaultUserImage from '../images/default-user-image.png'
import withAuth from './withAuth'
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

  render(){
    const { user } = this.props
    const favorites = this.props.user.spots.filter(spot => spot.spot_type === 'favorite')
    const saves = this.props.user.spots.filter(spot => spot.spot_type === 'save')
    return(
      <div className="user-div">
        <div className="user-item">
          <h2>{user.username}</h2>
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
      </div>
    )
  }
};

const mapStateToProps = state => ({
  friends: state.friends.acceptedFriends,
  currentUser: state.auth.currentUser,
  apiKey: state.auth.apiKey
})

export default connect(mapStateToProps, { uploadProfilePhoto })(UserDiv);
