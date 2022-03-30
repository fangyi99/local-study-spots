import './App.css';
import Search from './components/Search';
import Filter from './components/Filter';
import Result from './components/Result';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:8000/venues")
    .then(res => {
      return res.json();
    }).then((data) => {
      setData(data);
      setFilteredData(data);
    })
  }, []);

  const filterResults = (filters) => {
    let newResults = [];
    newResults = data.filter((result) => 
      filters.types.includes(result.type) && filters.region.includes(result.region) && result.resources.sort().join(',') === filters.resources.sort().join(',')
    );
    setFilteredData(newResults)
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
      { filteredData &&
        <>
          <Filter
            filterResults={filterResults}/>

          <Result 
            data={filteredData}
            getOrigin={getOrigin}
          />
        </>
      }
    </div>
  );
}

export default App;
