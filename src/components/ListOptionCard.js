import React from 'react';
import { connect } from 'react-redux'
import { saveToList, removeFromList } from '../actions/lists'
import { Button } from 'semantic-ui-react'

const ListOptionCard = props => {
  const { list, spot } = props
  console.log(props)
  return (
    <div className="spot-page-list">
      {
        list.spots.map(spot => spot.id).includes(props.spot.id) ?
        <Button color="teal" onClick={() => props.removeFromList(props.spot, list)}>{list.name}</Button>
        :
        <Button onClick={() => props.saveToList(props.spot, list)}>{list.name}</Button>
      }
    </div>
  )
}

export default connect(null, {saveToList, removeFromList})(ListOptionCard)
