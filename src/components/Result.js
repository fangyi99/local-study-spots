import { MdLocationOn, MdAccessTimeFilled, MdMore, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import usePages from '../states/usePages';
import {DataContext} from '../DataContext';
import { useContext } from 'react';

const Venues = (data) => {
    return (
        <>
        {data.map((venue)=>(
            <div key={venue.id} className="result">
                <div className="content">
                    <table>
                        <tbody>
                            <tr>
                                <td className='thumbnail'><img src={venue.thumbnail} alt={venue.name}/><span className='bottom'>{
                                    venue.distance &&
                                    (venue.distance.toString().length > 3 ? `${(venue.distance/1000).toFixed(2)}KM` : `${(venue.distance/1000).toFixed(2)}M`)
                                    }</span></td>
                                <td>
                                    <h3>{venue.name}</h3>
                                    <span className='top'>{
                                        venue.distance &&
                                        (venue.distance.toString().length > 3 ? `${(venue.distance/1000).toFixed(2)}KM` : `${(venue.distance/1000).toFixed(2)}M`)
                                    }</span>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='iconLabel'><MdLocationOn className="icons"/></td>
                                                <td>{venue.address}</td>
                                            </tr>
                                            <tr>
                                                <td className='iconLabel'><MdAccessTimeFilled className="icons"/></td>
                                                <td>{venue.hours}</td>
                                            </tr>
                                            <tr>
                                                <td className='iconLabel'><MdMore className="icons"/></td>
                                                <td>
                                                    <div className='resources'>
                                                        {venue.resources.find((val)=> val === "wifi") && <div className="resource">wifi</div>}
                                                        {venue.resources.find((val)=> val === "chargingport") && <div className="resource">charging ports</div>}
                                                        {venue.resources.find((val)=> val === "aircon") && <div className="resource">aircon</div>}
                                                        {venue.resources.find((val)=> val === "food") && <div className="resource">food</div>}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        ))}
        </>
    )
}

const Result = () => {

    const {dataContext} = useContext(DataContext);
    const page = usePages(dataContext.filteredData);
    
        const PageNumbers = page.pages.map(number => {

            if(number < page.maxPageNumberLimit+1 && number > page.minPageNumberLimit){
                return (
                    <li 
                        key={number}
                        id={number}
                        className={page.currentPage === number ? "active" : null}
                        onClick={page.handlePage}>
                        {number}
                    </li>
                );
            }
            else{
                return null;
            }
        });

    return(
        <>
        {
            dataContext.filteredData.length > 0 ?
            <>
            {Venues(page.currentItems)}
            <ul className='pageNumbers'>
                <li>
                    <button 
                        onClick={page.handlePrevPage}
                        disabled={page.currentPage === page.pages[0] ? true:false}>
                        <MdArrowBackIos/>
                    </button>
                </li>
                {PageNumbers}
                <li>
                    <button 
                        onClick={page.handleNextPage}
                        disabled={page.currentPage === page.pages[page.pages.length - 1] ? true:false}>
                        <MdArrowForwardIos/>
                    </button>
                </li>
            </ul>
        </>
        :
        <div className='not-found'>
            <p><b>——— No result found ———</b></p>
            <img src="notfound.png" alt='No result found'/>
        </div>
        }
    </>
    )
}

export default Result;