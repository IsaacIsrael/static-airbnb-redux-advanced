import React, { Component } from 'react';
import { connect } from "react-redux";

import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    const { selectedFlat } = this.props;
    const style = {
      height: '100vh'
    };
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };
    if (selectedFlat) {
      marker = <div style={{ width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%' }}
                    lat={selectedFlat.lat} lng={selectedFlat.lng} />;
      center = { lat: selectedFlat.lat, lng: selectedFlat.lng };
    }
    return (
      <div className="col-sm-5" style={style}>
        <GoogleMapReact center={center} defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapReduxStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapReduxStateToProps)(Map);
