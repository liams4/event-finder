import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eventertons</h1>
        <p>Welcome to Eventertons, possibly the best app in the whole world.</p>
      </header>
    </div>
    <div>

    </div>
  );
}

export default App;

// basically the goal of the app is to suggest some events to a user based on their city.

// we could have a bar saying please enter your city - unfortunately not all locations are supported. we could have a csv file of all of the cities for which we read from.
// could have an autocomplete thing like from 373, or just a general fill thing where we
// only display like 5 cities at a time. 

// buttons of the different events to suggest, with an option to type in your own.

// ask for the user's location and then get directions to the event, or maybe allow the 
// user to enter a location and get directions for there.
// we could start with just a get directions link that opens to google maps, or there
// may be an easy way for the user to just enter their location into google maps
