import React from 'react';
import './Results.css'

class EventResults extends React.Component{
    render = () => {
        return(
            <ul>
                {this.props.events.map(event => {
                    return (
                        <li key={event}>
                            <div>{event.name}</div>
                            <img src={event.image} alt={event.name}/>
                            <div>{event.date}</div>
                            <div>{event.startTime}</div>
                            <div>{event.minPrice}</div>
                            <div>{event.maxPrice}</div>
                            <a href='#'>event.url</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default EventResults;