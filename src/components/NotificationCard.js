import React from 'react'
import { connect } from 'react-redux'
import { markAsRead } from '../actions/notifications'
import { Button } from 'semantic-ui-react'

const NotificationCard = (props) => {
  const { notification } = props

  const handleClick = () => {
    props.markAsRead(notification.id)
  }

  return (
    <div>
      {notification.message}
      <Button icon="check square" onClick={handleClick}></Button>
    </div>
  )
}

export default connect(null, { markAsRead })(NotificationCard)
