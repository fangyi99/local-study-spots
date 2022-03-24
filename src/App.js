import './App.css';
import Data from "./studySpots.json";
import Search from './components/Search';
import Result from './components/Result';


function App() {

  return (
    <div className="App">
      <Search/>
      {Data.map((venue)=> {
        return(
          <Result
          key={venue.name}
            name={venue.name}
            address={venue.address}
            hours={venue.hours}
            resources={venue.resources}
            thumbnail={venue.thumbnail}/>
        )
      })}
    </div>
  );
}

export default App;
