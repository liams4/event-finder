import React from 'react';

class EventOptions extends React.Componenet{
    constructor(props) {}

    render = () => {
        return(
            <div>
                <button>Food</button>
                <button>Sports</button>
                <button>Water</button>
                <button>Snow</button>
                <button>Drinks</button>
                <button>Music</button>
                <button>Hi</button>
            </div>
        );
    }
}

export default EventOptions;