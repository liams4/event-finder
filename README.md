# Eventit
This web app helps users find various events at a location of their choice. Users are prompted for their location and the type of events that they are interested in. Events of the event type that the user selects are then displayed along with information about the events. Events are found through the [Ticketmaster Discovery API] (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/). 

## Running Eventit
If you'd like to run this app, there are a few steps involved because my API keys cannot be published on GitHub. 
* Register for a [Ticketmaster Discovery API key] (https://developer-acct.ticketmaster.com/user/register) and a [Google Cloud API key] (https://developers.google.com/places/web-service/get-api-key). 
* Enable the "Places API" and "Maps JavaScript API" on your Google Cloud account. 
* Clone this repository.
* Create a JavaScript file called `apiKey.js` containing only `export const key = your_ticketmaster_discovery_api_key` in the `eventit/eventit_src/src/` folder.
* Change the name of `eventit/eventit_src/public/index.html.sample` to `eventit/eventit_src/public/index.html`.
* In line 45 of `eventit/eventit_src/public/index.html`, replace the "YOUR_API_KEY" text with your Google Cloud API key.
* Navigate to `eventit/eventit_src/` in a CLI and run the command `npm i react-google-autocomplete --save` to install an autocomplete search bar for locations. 
* You are now able to run the app! Run the command `npm start` and you will be able to use the app by navigating to https://localhost:3000/ in a browser window.
