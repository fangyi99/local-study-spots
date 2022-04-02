import './App.css';
import Search from './components/Search';
import Filter from './components/Filter';
import Result from './components/Result';
import { useCallback, useState, useContext } from "react";
import IntroScreen from './components/IntroScreen';
import useCoord from './states/useCoord'
import {DataContext} from './DataContext';


function App() {

  const {dataContext} = useContext(DataContext);
  const [introScreen, setIntroScreen] = useState(true);

  // const coord = useCoord();

  const hideIntroScreen = useCallback(() => {
      setIntroScreen(false);
  },[]);

  const filterResults = (filters) => {
    let newResults = [];
    newResults = dataContext.data.filter((result) => 
      filters.types.includes(result.type) && filters.region.includes(result.region) && result.resources.sort().join(',') === filters.resources.sort().join(',')
    );
    dataContext.setFilteredData(newResults)
  }

  return (
    <div className="App">
        <Search 
          hideIntroScreen={hideIntroScreen}
        />
        { dataContext.filteredData &&
            <Filter
              filterResults={filterResults}/>
        }

        {
          introScreen ? 
            <IntroScreen 
              hideIntroScreen={hideIntroScreen}
            /> 
          :
          dataContext.filteredData &&
            <Result />
        }
    </div>
  );
}

export default App;
