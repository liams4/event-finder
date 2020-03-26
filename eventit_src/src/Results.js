import React from 'react';
import './Results.css'

class EventResults extends React.Component{
    render = () => {
        return(
            <ul>
                {this.props.events.map(event => {
                    let venueLink = 'https://www.google.com/maps/search/?api=1&query=' + event.venue;
                    console.log(venueLink);
                    return (
                        <li key={event}>
                            <div id='event-name'>{event.name}</div>
                            <img src={event.image} alt={event.name}/>
                            <div id='date'>{event.date}</div>
                            <div id='time'>{event.startTime}</div>
                            <div className='price'>{event.minPrice}</div>
                            <div className='price'>{event.maxPrice}</div>
                            <a id='venue' href={venueLink} target='_blank'>{event.venue}</a>
                            <a id='link' href={event.url}>Link</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default EventResults;