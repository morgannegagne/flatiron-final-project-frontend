import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { updateSelectedFriends } from '../actions/friends'

class FriendSearchBox extends React.Component {

  handleChange = (e, { value }) => {
    this.props.updateSelectedFriends(value)
  }

  render() {
    const options = this.props.friends.map(friend => ({key: `dropdown-${friend.id}`, text: friend.username, value: friend.id}))
    const currentValues = this.props.selectedFriends.map(friend => friend.id)
    return (
      <Dropdown
        options={options}
        placeholder='All friends or select...'
        search
        selection
        fluid
        multiple
        value={currentValues}
        onChange={this.handleChange}
      />
    )
  }

}

const mapStateToProps = state => ({
  friends: state.friends.acceptedFriends,
  selectedFriends: state.friends.selectedFriends
})

export default connect(mapStateToProps, { updateSelectedFriends })(FriendSearchBox)
