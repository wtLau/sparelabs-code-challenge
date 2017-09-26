import React, { Component } from 'react';
import MapGL from 'react-map-gl';

class Map extends Component {
  render() {
    const map = (
      <div>
        <MapGL
          width={400}
          height={400}
          latitude={37.7577}
          longitude={-122.4376}
          zoom={8}
          MapboxAccessToken={'pk.eyJ1IjoiYnJpYW5sYXUiLCJhIjoiY2o4MjB5YWJnNnlzODMzdDYwd2xnbTZ5NyJ9.wqbtVC_Uv45yu9k76Vu_qg'}
          mapStyle={'mapbox://styles/mapbox/basic-v9'}
        />
      </div>
    )
    return (
      <div>
        {map}
      </div>

    )
  }
}


export default Map;