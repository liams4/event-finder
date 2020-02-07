import React from 'react';
import InputBar from './InputBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeId: null,
      results: null
    };
  }

  fetchEventData = () => {
    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?dmaId=' + this.state.placeId + '&apikey=' + apiKey;
    fetch(url)
      .then((result) => {
        result.json()
      .then((data) => {
        console.log(data);
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Eventit</h1>
          <h2>Welcome to Eventit! Eventit helps you find cool events near to you.</h2>
        </header>
        <InputBar updatePlaceId={(newPlace) => {
          console.log(newPlace);
            this.setState({placeId: newPlace});
        }}/>
        {this.state.place !== null && <button onClick={() => {
          this.fetchEventData();
        }}>Find Events</button>}
        {this.state.results !== null && <p>{this.state.results}</p>}
      </div>
    );
  }
}



export default App;

// basically the goal of the app is to suggest some events to a user based on their city.
// maybe have it so multiple things can be selected

// buttons of the different events to suggest, with an option to type in your own.

// we'll just match the names. being occasionally wrong is ok. special cases for seattle or other cities that might be commonly input
// if the input city is contained in one of the ticketmaster city name strings. should be good.
