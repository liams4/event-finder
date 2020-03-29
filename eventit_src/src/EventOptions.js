import React from 'react';
import './EventOptions.css'

class EventOptions extends React.Component{

    render = () => {
        return(
            <div>
                <h2>What type of events would you like to find?</h2>
                <div id='buttons'>
                    <button onClick={() => {
                        this.props.findEvents('');
                    }}>Any Event</button>
                    <button onClick={() => {
                        this.props.findEvents('sports');
                    }}>Sports</button>
                    <button onClick={() => {
                        this.props.findEvents('music');
                    }}>Music</button>
                    <button onClick={() => {
                        this.props.findEvents('arts&theatre');
                    }}>Arts &amp; Theatre</button>
                    <button onClick={() => {
                        this.props.findEvents('film');
                    }}>Film</button> 
                    <button onClick={() => {
                        this.props.findEvents('miscellaneous');
                    }}>Other</button> 
                </div>
            </div>
        );
    }
}

export default EventOptions;