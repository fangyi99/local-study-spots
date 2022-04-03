import './App.css';
import Search from './components/Search';
import Filter from './components/Filter';
import Result from './components/Result';
import { useCallback, useState, useContext } from "react";
import IntroScreen from './components/IntroScreen';
import { DataContext } from './contexts/DataContext';
import PageContextProvider from './contexts/PageContext';


function App() {

  const {dataContext} = useContext(DataContext);
  const [introScreen, setIntroScreen] = useState(true);

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
      { dataContext.filteredData &&
        <PageContextProvider>
          <Search 
            hideIntroScreen={hideIntroScreen}
          />
          <Filter
            filterResults={filterResults}
          />

          {
            introScreen ? 
              <IntroScreen 
                hideIntroScreen={hideIntroScreen}
              /> 
            :
              <Result />
          }
          </PageContextProvider>
        }
    </div>
  );
}

export default App;
