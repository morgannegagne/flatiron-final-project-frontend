import React from 'react'
import { connect } from 'react-redux'
import { withScriptjs } from 'react-google-maps'
import { updatePlaces } from '../actions/places'
import { Input } from 'semantic-ui-react'
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

    render(){
      return(
        <div>
          <StandaloneSearchBox
            onPlacesChanged={this.state.onPlacesChanged}
            ref={this.state.onSearchBoxMounted}
          >
            <Input
              type="text"
              placeholder="Search Google Maps for Spots..."
              fluid
              style={{padding: 5}}
            />
          </StandaloneSearchBox>
        </div>
      )
    }

}

export default connect(null, { updatePlaces })(withScriptjs(PlacesSearchBox))
