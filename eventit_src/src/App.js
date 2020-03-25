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
      placeId: -1,
      events: [],
      noEventsMessage: null
    };
  }

  fetchEventData = (eventType) => {
    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=' + eventType + '&dmaId=' + this.state.placeId +
      '&apikey=' + apiKey;
  
    fetch(url)
      .then((result) => {
        result.json()
      .then((data) => {
        console.log(data);
        if (data._embedded === undefined) {
          this.createNoEventsMessage(eventType);
        } else {
          data._embedded.events.forEach(event => {
            
            let eventData = {name: event.name, 
                            image: event.images ? event.images[0].url : 'NA',
                            date: event.dates ? event.dates.start.localDate : 'NA',
                            startTime: event.dates ? event.dates.start.localTime : 'NA',
                            minPrice: event.priceRanges ? event.priceRanges[0].min : 'NA',
                            maxPrice: event.priceRanges ? event.priceRanges[0].max : 'NA',
                            venue: event._embedded.venues ? event._embedded.venues[0].name : 'NA', // if this doesn't work try the longitude
                            url: event.url ? event.url : 'NA'}
            let updatedEvents = this.state.events.concat([eventData]);
            this.setState({events: updatedEvents});
          });
        }
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  createNoEventsMessage = (eventType) => {
    if (eventType === 'arts&theatre') {
      eventType = 'arts & theatre';
    } else if (eventType === 'miscellaneous') {
      eventType = '"other"';
    } 

    let message = 'We currently can\'t find any upcoming ' + eventType + ' events for this location. Maybe try a ';
    message += eventType === '' ? 'nearby location?' : 'different event type?';
    this.setState({noEventsMessage: message});
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
          this.setState({events: []});
          if (newPlace === -1) {
            this.setState({noEventsMessage: 'We unfortunately don\'t have information about events at this location.' + 
                                            'Please try your nearest large city instead.'});
          } else {
            this.setState({noEventsMessage: null});
          }
        }}/>
        {this.state.placeId !== -1 && <EventOptions findEvents={(eventType) => {
            console.log(eventType);
            this.setState({events: []});
            this.setState({noEventsMessage: null});
            this.fetchEventData(eventType);
        }}/>}
        {this.state.events !== [] && <Results events={this.state.events}/>}
        {this.state.noEventsMessage !== null && this.state.noEventsMessage}
      </div>
    );
  }
}



export default App;
