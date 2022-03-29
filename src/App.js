import './App.css';
import Data from "./studySpots.json";
import Search from './components/Search';
import Filter from './components/Filter';
import Result from './components/Result';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(Data);
  const [filters, setFilters] = useState({
    types: ["cafe", "cc", "library", "mall", "school", "others"],
    resources: ["aircon", "food", "outlets", "wifi"],
    location: ["southeast", "west"]
  });

  useEffect(()=> {
    filterResults()
  }, [filters]);

  const onFilterChange = (filterType) => {
    var newFilters = [];
    var checkboxes = document.querySelectorAll(`input[name='${filterType}']:checked`);
    Array.from(checkboxes).forEach((checkbox)=>{newFilters.push(checkbox.value)});
    setFilters(prevFilters => {
      return {
        ...prevFilters,
        [filterType]: newFilters
      };
    });
  }

  const filterResults = () => {
    //filters.location.includes(result.location) && 
    //result.resources.sort().join(',') === filters.resources.sort().join(',')
    let newResults = [];
    newResults = Data.filter((result) => 
      filters.types.includes(result.type) && filters.location.includes(result.location) && result.resources.sort().join(',') === filters.resources.sort().join(',')
    );
    setData(newResults);
  }

  const [coord, setCoord] = useState({longitude: 0, latitude: 0});

  const setOrigin = (longitude, latitude) => {
    setCoord({longitude: longitude, latitude: latitude});
  }

  const getOrigin = () => {
    return coord;
  }

  return (
    <div className="App">
      <Search 
        setOrigin={setOrigin}
      />
      <Filter
        filters={filters}
        onFilterChange={onFilterChange}/>
      <Result 
        data={data}
        getOrigin={getOrigin}
      />
    </div>
  );
}

export default App;
