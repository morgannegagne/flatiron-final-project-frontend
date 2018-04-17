import React from 'react';
import defaultImage from '../images/default-user-image.png'

const CommentCard = props => {
  const { text, user_image } = props
  return (
    <div className="comment-card">
      <img className="comment-card-image" width={60} src={user_image || defaultImage} />
      <div className="comment-card-text">{text}</div>
    </div>
  )
}

export default CommentCard
