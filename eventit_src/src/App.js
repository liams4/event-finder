import React from 'react';
import InputBar from './InputBar';
import Results from './Results';
import EventOptions from './EventOptions';
import './App.css';
import {apiKey} from './apiKey.js'; 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeId: null,
      shouldDisplayEventTypes : false,
      events: []
    };
  }

  fetchEventData = () => {
    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=arts&theatre&dmaId=' + this.state.placeId + '&apikey=' + apiKey;
  
    fetch(url)
      .then((result) => {
        result.json()
      .then((data) => {
        data._embedded.events.forEach(event => {
          
          let eventData = {name: event.name, 
                           image: event.images ? event.images[0].url : 'NA',
                           date: event.dates ? event.dates.start.localDate : 'NA',
                           startTime: event.dates ? event.dates.start.localTime : 'NA', 
                           minPrice: event.priceRanges ? event.priceRanges[0].min : 'NA',
                           maxPrice: event.priceRanges ? event.priceRanges[0].max : 'NA',
                           url: event.url ? event.url : 'NA'}
          console.log(eventData);
          let updatedEvents = this.state.events.concat([eventData]);
          this.setState({events: updatedEvents});
        });
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
          this.setState({shouldDisplayEventTypes: true});
        }}>Find Events</button>}
        {this.state.shouldDisplayEventTypes && <EventOptions/>}
        {this.state.events !== null && <Results events={this.state.events}/>}
      </div>
    );
  }
}



export default App;
