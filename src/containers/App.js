import React from 'react';
import LocationsContainer from './LocationsContainer';
import NavBar from '../components/NavBar'

const App = () => {
  return (
        <div className="App">
          <NavBar />
          <LocationsContainer />
        </div>
    )
}

export default App;
