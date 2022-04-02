import { useState } from "react";

const useCoord = () => {

    const [coord, setCoord] = useState(() => ({ longitude: 0, latitude: 0 }));

    const setOrigin = (longitude, latitude) => {
        setCoord(prevCoord => ({ longitude: longitude, latitude: latitude }));
    }

    return {
        setOrigin
    }
}


export default useCoord;