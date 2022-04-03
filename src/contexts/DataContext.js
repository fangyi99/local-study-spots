import React, { useState, useEffect, createContext } from "react";
import { getDistance } from 'geolib';

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState();

    useEffect(()=>{
        fetch("https://local-study-spots-app.herokuapp.com/venues")
        .then(res => {
          return res.json();
        }).then((data) => {
          setData(data);
          setFilteredData(data);
        })
      }, []);

    const refilterData = (coord) => {
        var newData = recalculateDistance(coord);
        newData = newData.sort((a,b) => a.distance - b.distance);
        setFilteredData(newData);
    }

    const recalculateDistance = (coord) => {
        var newData = [...data];
        newData.map((d) => {
            var distance = getDistance(coord, d.coordinates);
            d.distance = distance;
        })
        return newData;
    }

    const dataContext = {
        data, filteredData, setFilteredData, refilterData
    };

    return (
        <DataContext.Provider value={{dataContext}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;