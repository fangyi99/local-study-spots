import { getDistance } from 'geolib';
import { FaWifi } from "react-icons/fa";
import { MdLocationOn, MdAccessTimeFilled, MdMore, MdAir, MdOutlineFastfood, MdOutlineOutlet } from "react-icons/md"

const Result = ({data, getOrigin}) => {

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

    return(
        <>
            {venuesArr.map((venue)=>(
                <div key={venue.name} className="result">
                    <img src={venue.thumbnail} alt={venue.name}/>
        
                    <div className="content">
                        <h3>{venue.name}</h3>
                        <span>{calculateDistance(venue.name, venue.coordinates)}</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td><MdLocationOn className="icons"/></td>
                                    <td>{venue.address}</td>
                                </tr>
                                <tr>
                                    <td><MdAccessTimeFilled className="icons"/></td>
                                    <td>{venue.hours}</td>
                                </tr>
                                <tr>
                                    <td><MdMore className="icons"/></td>
                                    <td>
                                        {venue.resources.find((val)=> val === "Wifi") && <FaWifi className="resources" title="Wifi"/>}
                                        {venue.resources.find((val)=> val === "Power sockets") && <MdOutlineOutlet className="resources" title="Power sockets"/>}
                                        {venue.resources.find((val)=> val === "Aircon") && <MdAir className="resources" title="Aircon"/>}
                                        {venue.resources.find((val)=> val === "Food") && <MdOutlineFastfood className="resources" title="Food"/>}
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

export default Result;