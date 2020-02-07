import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import './InputBar.css';

class InputBar extends React.Component{
    
    getPlaceId = (place) => { 
        let placeIds = fetch('/locations.txt')
                        .then((response) => {
                            return response.text();
                        }).then((text) => {
                            var places = text.split('_');
         
                            for (let i = 0; i < places.length - 1; i += 2) {
                                let id = places[i];
                                let name = places[i + 1].split('-');
                                
                                name.forEach(element => {
                                    if (element.includes(place.address_components[0].long_name.split(',')[0])) {
                                        this.props.updatePlaceId(id);
                                    }
                                });
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
