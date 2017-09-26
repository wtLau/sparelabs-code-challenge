import React, { Component } from 'react';
import MapGL from 'react-map-gl';

class Map extends Component {
    render() {
        const map = (
            <div>
                <MapGL
                    width={700}
                    height={450}
                    latitude={37.768}
                    longitude={-122.331}
                    zoom={9.017}
                    mapboxApiAccessToken={"pk.eyJ1IjoiYnJpYW5sYXUiLCJhIjoiY2o4MjB5YWJnNnlzODMzdDYwd2xnbTZ5NyJ9.wqbtVC_Uv45yu9k76Vu_qg"}

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