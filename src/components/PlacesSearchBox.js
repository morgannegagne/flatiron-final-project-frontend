import React from 'react'
import { connect } from 'react-redux'
import { withScriptjs } from 'react-google-maps'
import { updatePlaces } from '../actions/places'
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

class PlacesSearchBox extends React.Component {

    componentWillMount() {
        const refs = {}

        this.setState({
          places: [],
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            this.props.updatePlaces(places)
          }
        })
      }


    handlePlaceChange = () => {
    }

    render(){
      return(
        <div>
          <StandaloneSearchBox
            onPlacesChanged={this.state.onPlacesChanged}
            ref={this.state.onSearchBoxMounted}
          >
            <input
              type="text"
              placeholder="Search for a new place..."
              style={{width: `300px`}}
            />
          </StandaloneSearchBox>

        </div>
      )

    }

}

export default connect(null, { updatePlaces })(withScriptjs(PlacesSearchBox))
