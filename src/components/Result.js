import { getDistance } from 'geolib';
import { useState } from 'react';
import { MdLocationOn, MdAccessTimeFilled, MdMore, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const Venues = (data, calculateDistance) => {
    return (
        <>
        {data.map((venue)=>(
            <div key={venue.id} className="result">
                <div className="content">
                    <table>
                        <tr>
                            <td className='thumbnail'><img src={venue.thumbnail} alt={venue.name}/><span className='bottom'>{calculateDistance(venue.name, venue.coordinates)}</span></td>
                            <td>
                                <h3>{venue.name}</h3>
                                <span className='top'>{calculateDistance(venue.name, venue.coordinates)}</span>
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
                    </table>
                    
                </div>
            </div>
        ))}
        </>
    )
}

const Result = ({data, getOrigin}) => {

    //sorting array by distance
    const origin = getOrigin();
    var venuesArr = [...data];
    venuesArr = venuesArr.sort((a,b) => a.distance - b.distance);

    const setDistance = (name, distance) => {
        //find current venue
        let currentVenue = venuesArr.find((v) => v.name === name);
        //ammend distance to current venue
        currentVenue.distance = distance;
    }

    const calculateDistance = (name, destination) => {
        var distance = getDistance(origin, destination);
        setDistance(name, distance);
        if(distance.toString().length > 3){
            return (distance/1000).toFixed(2) + "KM";
        }
        else{
            return (distance) + "M";
        }
    }

        //pagination
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(5);

        const [pageNumberLimit, setPageNumberLimit] = useState(5);
        const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
        const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

        const handlePage = (event) => {
            setCurrentPage(Number(event.target.id));
        };
    
        const pages = [];
        for(let i=1; i<=Math.ceil(data.length/itemsPerPage); i++){
            pages.push(i);
        }
    
        const indexOfLastItem = currentPage*itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = venuesArr.slice(indexOfFirstItem, indexOfLastItem);

        const handlePrevPage = () => {
            setCurrentPage(currentPage - 1);

            if((currentPage - 1) % pageNumberLimit === 0){
                setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
            }
        }

        const handleNextPage = () => {
            setCurrentPage(currentPage + 1);

            if(currentPage + 1 > maxPageNumberLimit){
                setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
            }
        }
    
        const Pages = pages.map(number => {

            if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
                return (
                    <li 
                        key={number}
                        id={number}
                        className={currentPage === number ? "active" : null}
                        onClick={handlePage}>
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
            data.length > 0 ?
            <>
            {Venues(currentItems, calculateDistance)}
            <ul className='pageNumbers'>
                <li>
                    <button 
                        onClick={handlePrevPage}
                        disabled={currentPage === pages[0] ? true:false}>
                        <MdArrowBackIos/>
                    </button>
                </li>
                {Pages}
                <li>
                    <button 
                        onClick={handleNextPage}
                        disabled={currentPage === pages[pages.length - 1] ? true:false}>
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