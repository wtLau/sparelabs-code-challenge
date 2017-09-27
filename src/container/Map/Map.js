import React, { Component } from 'react';
import MapGL, { Popup, Marker } from 'react-map-gl';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 49.248218,
                longitude: -123.132136,
                zoom: 11,
                width: 800,
                height: 400,
            },
        };
    }
    updateViewport = (viewport) => {
        this.setState({ viewport });
    }
    render() {
        const { viewport } = this.state;
        const TOKEN = "pk.eyJ1IjoiYnJpYW5sYXUiLCJhIjoiY2o4MjB5YWJnNnlzODMzdDYwd2xnbTZ5NyJ9.wqbtVC_Uv45yu9k76Vu_qg"

        return (
            <div>
                <MapGL
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onViewportChange={this.updateViewport}
                    mapboxApiAccessToken={TOKEN}
                >
                    <Marker
                        latitude={37.768}
                        longitude={-122.331}
                        closeOnClick={true}
                        dynamicPosition={false}
                        tipSize={55}>
                        <h1>.</h1>
                    </Marker>
                </MapGL>
            </div>

        )
    }
}


export default Map;