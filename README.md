<p align="justify">
  
# StudySpots
	
StudySpots is a hybrid application which aims to assists users in finding a nearby quiet place to study in. <br><br> 
This application consolidates various online lists and integrates them with geolocation to return a list of study venues based on the users’ location and selected filters. Users can choose the search or use their device’s location to set their origin. The filters, which include the type of venue, location, and resources, allow them to limit the results further. <br><br> 
This application is applicable to anyone who wishes to avoid distractions or yearns for a change in the environment. With this application, users can quickly look up the various spots near them, knowing their facilities.


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

The following section shows how to create an autocomplete location search box using the Mapbox Geocoding API. <br>
You can [create a free account](https://account.mapbox.com/) and [get your first access token](https://docs.mapbox.com/help/getting-started/access-tokens/) to begin building with Mapbox now. 
	
First, create a new .env file and add the following API key inside.
	
	//Note: All environment variables need to start with "REACT_APP_"
	REACT_APP_MAPBOX_TOKEN="{ACCESS_TOKEN}"
	
Next, create a Search Component.<br>
<b>Add the following logic to return the results upon each search input.</b>
	
  // search logic
	const [value, setValue] = useState(initialValue);
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = async(event) => {
        setValue(event.target.value);

        try {
            const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&autocomplete=true&country=SG`;
            const response = await fetch(endpoint);
            const results = await response.json();
            setSuggestions(results?.features);
        } catch (error) {
            console.log("Error fetching data, ", error);
        }
    };
	
<b>Then, add the html aspect to update the returned results and selected value.</b>
	
    const Search = () => {
    // search logic
    return(
        <Wrapper className="search">
            <Input
                placeholder="Address"
                isTyping={value !== ""}
                onChange={(event)=>handleChange(event)}
            />

            {suggestions?.length > 0 && (
                <SuggestionWrapper>
                {suggestions.map((suggestion, index) => {
                    return (
                    <Suggestion
                        key={index}
                        onClick={() => {
                            setValue(suggestion.place_name);
                            setSuggestions([]);
                        }}
                    >
                        {suggestion.place_name}
                    </Suggestion>
                    );
                })}
                </SuggestionWrapper>
            )}
        </Wrapper>
    )
    }

    export default Search;
    // styling of components - Wrapper, Input, SuggestionWrapper
          
	
Now run the application.
				
	npm start
				

	
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
