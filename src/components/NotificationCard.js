import React from 'react'
import { connect } from 'react-redux'
import { markAsRead } from '../actions/notifications'
import { Icon } from 'semantic-ui-react'

const NotificationCard = (props) => {
  const { notification } = props

  const handleClick = () => {
    props.markAsRead(notification.id)
  }

  return (
    <div>
      <span style={{paddingRight: 20}}>{notification.message}</span>
      <Icon link color="grey" size="large" name="check square" onClick={handleClick}/>
    </div>
  )
}

export default connect(null, { markAsRead })(NotificationCard)
