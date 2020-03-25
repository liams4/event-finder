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
                            <div>{event.name}</div>
                            <img src={event.image} alt={event.name}/>
                            <div>{event.date}</div>
                            <div>{event.startTime}</div>
                            <div>{event.minPrice}</div>
                            <div>{event.maxPrice}</div>
                            <a href={venueLink} target='_blank'>{event.venue}</a>
                            <a href="#">event.url</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default EventResults;