import React, { Component } from 'react'
import { connect } from 'react-redux' 
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  addBand = (name) => {
    this.props.dispatch({ type: 'ADD_BAND', payload: name });
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        <br/>
        <ul>
          <Bands bandNames={this.props.bands} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
