import React from 'react';

class EventOptions extends React.Component{

    render = () => {
        return(
            <div>
                <h2>What type of events would you like to find?</h2>
                <div>
                    <button>Any Event</button>
                    <button>Sports</button>
                    <button>Music</button>
                    <button>Arts &amp; Theatre</button>
                    <button>Other</button> 
                </div>
            </div>
        );
    }
}

export default EventOptions;