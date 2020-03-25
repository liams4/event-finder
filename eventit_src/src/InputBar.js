import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import './InputBar.css';

class InputBar extends React.Component{
    
    getPlaceId = (place) => { 
        fetch('/locations.txt')
        .then((response) => {
            return response.text();
        }).then((text) => {
            var places = text.split('_');
            let found = false;

            for (let i = 0; i < places.length - 1; i += 2) {
                let id = places[i];
                let name = places[i + 1].split('-');
                
                for (let j = 0; j < name.length; j++) {
                    if (name[j].includes(place.address_components[0].long_name)) {
                        this.props.updatePlaceId(id);
                        found = true;
                        break;
                    }
                }
            }
            
            if (!found) {
                this.props.updatePlaceId(-1); // The Ticketmaster Discovery API can't find events for parameter place
            }
            
        });
    }

    render = () => {
        return (
            <div>
                <Autocomplete onPlaceSelected={this.getPlaceId} />
            </div>
        );
    }
}

export default InputBar;
