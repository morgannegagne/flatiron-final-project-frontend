import React from 'react';
import { connect } from 'react-redux'
import { saveSpot } from '../actions/places'

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

  render(){
    const { place } = this.props
    return(
      <div>
        <h1>{place.name}</h1>
        <p>{place.formatted_address}</p>
        <p>{place.formatted_phone_number}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="radio" value="save" onChange={this.handleChange} name="type" defaultChecked/> Save
          <input type="radio" value="favorite" onChange={this.handleChange} name="type"/> Favorite
          <button onClick={this.handleSubmit}>Add to your Spots!</button>
        </form>
      </div>
    )
  }
};

export default connect(null, { saveSpot })(OptionCard);
