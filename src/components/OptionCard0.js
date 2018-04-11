import React from 'react';
import { connect } from 'react-redux'
import { saveSpot } from '../actions/places'
import { updateActiveMarker } from '../actions/map'

class OptionCard extends React.Component {

  state = {
    valid: true,
    type: 'save'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveSpot(this.props.place, this.state.type)
  }

  handleChange = (e) => {
    this.setState({type: e.target.value})
  }

  checkIfSaved = () => {
    let savedSpot = null
    this.props.savedSpots.forEach(spot => {
      if (spot.place.google_uid === this.props.place.place_id){
        savedSpot = spot
      }
    })
    return savedSpot
  }

  render(){
    const { place } = this.props
    const saved = this.checkIfSaved()
    return(
      <div>
        <h1>{place.name}</h1>
        <p>{place.formatted_address}</p>
        <p>{place.formatted_phone_number}</p>
        {
          saved ?
          <div>
            Spot saved
            <button onClick={() => this.props.updateActiveMarker(saved)}>See spot</button>
          </div> :

          <form onSubmit={this.handleSubmit}>
            <input type="radio" value="save" onChange={this.handleChange} name="type" defaultChecked/> Save
            <input type="radio" value="favorite" onChange={this.handleChange} name="type"/> Favorite
            <button onClick={this.handleSubmit}>Add to your Spots!</button>
          </form>
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  savedSpots: state.places.spots
})

export default connect(mapStateToProps, { saveSpot, updateActiveMarker })(OptionCard);
