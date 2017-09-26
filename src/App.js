import React, { Component } from 'react';
// import { Provider } from 'react-redux

// import store from './redux/store';
import Map from './container/Map/';

import './App.css';

class App extends Component {
    render() {
        return (
            // <Provider store={store()}>
            <Map />
            // </Provider>
        );
    }
}

export default App;
