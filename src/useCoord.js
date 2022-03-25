import { useState } from "react";

const useCoord = () => {
    const [coord, setCoord] = useState({ longitude: 0, latitude: 0 });

    const setOrigin = (longitude, latitude) => {
        console.log("set");
        setCoord({ longitude: longitude, latitude: latitude });
    }

    const getOrigin = () => {
        console.log("get");
        console.log(coord);
        return coord;
    }

    return {
        setOrigin,
        getOrigin
    }
}


export default useCoord;