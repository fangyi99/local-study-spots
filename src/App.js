import './App.css';
import Data from "./studySpots.json";
import Search from './components/Search';
import Result from './components/Result';
import { useState } from "react";

function App() {

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
      <Result 
        data={Data}
        getOrigin={getOrigin}
      />
    </div>
  );
}

export default App;
