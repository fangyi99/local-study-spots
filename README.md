<p align="justify">
  
# Local Study Spots App
	
This application returns a list of study venues sorted based on the user’s search or current location. The filter feature allows users to easily find the desired venue based on their requirements such as the venues’ location and resources.<br><br>
This project aims to assist users in finding a quiet environment to study. This involves building a hybrid application, which integrates a list of consolidated study venues and geolocation. This solution is applicable to students and working adults whenever they need to escape the various distractions or yearn for a change in environment.

## Getting Started
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
	
1. Clone repository

		git clone https://github.com/fangyi99/local-study-spots.git
	
2. Install required libraries
	
		npm install
	
3. Create a new .env file and add the following API key inside
	
		REACT_APP_MAPBOX_TOKEN="{ACCESS_TOKEN}"
	
4. Run application
	
		npm start

## Usage

The following section shows how to build an interactive map in React using Mapbox. <br>
You can [create a free account](https://account.mapbox.com/) and [get your first access token](https://docs.mapbox.com/help/getting-started/access-tokens/) to begin building with Mapbox now. 
	
First, create a new .env file and add the following API key inside.
	
	//Note: All environment variables need to start with "REACT_APP_"
	REACT_APP_MAPBOX_TOKEN="{ACCESS_TOKEN}"
	
Next, modify the App.js file like shown below.
	
	export default function App(){
		const [viewport, setViewport] = useState({
			latitude: 454211,
			longitude: -75.6903,
			width:"100vh",
			height:"100vh",
			zoom:10
		});
		return (
			<div>
				<ReactMapGL
					{...viewport}
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={viewport => {
						setViewport(viewport);
					}}
				/>
			</div>
		)
	}
	
Now run the application. You should be able to see an interactive map.
				
	npm start
				
Click [here]() to view other use cases.

	
## Technology Stack
-	[React](https://reactjs.org/)
-	[JSON Server](https://www.npmjs.com/package/json-server)
-	[Mapbox](https://www.mapbox.com/)
-	[Geolib](https://www.npmjs.com/package/geolib)
				
## Reference
- https://frostfairs.com/places-to-study-in-singapore/
- https://studyramen.com/articles/10-free-studying-places-in-singapore/
- https://sgp.postcodebase.com/

<p>
