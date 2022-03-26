import { useState } from "react";
import useInput from "./useInput";

const useCoord = () => {

    // const address = useInput();
    const [coord, setCoord] = useState({ longitude: 0, latitude: 0 });

    const setOrigin = (longitude, latitude) => {
        console.log("set");
        setCoord({ longitude: longitude, latitude: latitude });
    }

    const getOrigin = () => {
        console.log("get");
        return coord;
    }

    // const findLocation = async(longitude, latitude) => {
    //     try {
    //         const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&country=SG`;
    //         const response = await fetch(endpoint);
    //         const results = await response.json();
    //         address.setSuggestions(results?.features);
    //     } catch (error) {
    //         console.log("Error fetching data, ", error);
    //     }
    // }

    return {
        setOrigin,
        getOrigin,
        // findLocation
    }
}


export default useCoord;