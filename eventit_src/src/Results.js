import React from 'react';
import './Results.css'

class EventResults extends React.Component{
    render = () => {
  
        return(        
            <ul>
                <li key='header' id='header'>
                    <div className='name result-header' id='name-result-header'>Name</div>
                    <div className='date result-header'>Date</div>
                    <div className='time result-header'>Time</div>
                    <div className='price result-header'>Price</div>
                    <div className='venue result-header'>Venue</div>
                    <div className='link result-header'>Link</div>
                </li>
                {this.props.events.map(event => {
                    let venueLink = 'https://www.google.com/maps/search/?api=1&query=' + event.venue;
                    
                    return (
                        <li key={event.name + event.date}>
                            <div className='name'>{event.name}</div>
                            <img src={event.image} alt={event.name}/>
                            <div className='date'>{event.date}</div>
                            <div className='time'>{event.startTime}</div>
                            <div className='price'>{'$' + event.minPrice + '-' + event.maxPrice}</div>
                            <a className='venue' href={venueLink} target='_blank'>{event.venue}</a>
                            <a className='link' href={event.url}>Link</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default EventResults;