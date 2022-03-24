import { FaWifi } from "react-icons/fa";
import { MdLocationOn, MdAccessTimeFilled, MdMore, MdAir, MdOutlineFastfood, MdOutlineOutlet } from "react-icons/md"

const Result = ({name, address, hours, resources, thumbnail}) => {
    return(
        <div className="result">
            <img src={thumbnail} alt={name}/>

            <div className="content">
                <h3>{name}</h3>
                <table>
                    <tr>
                        <td><MdLocationOn className="icons"/></td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td><MdAccessTimeFilled className="icons"/></td>
                        <td>{hours}</td>
                    </tr>
                    <tr>
                        <td><MdMore className="icons"/></td>
                        <td>
                            {resources.find((val)=> val === "Wifi") && <FaWifi className="resources" title="Wifi"/>}
                            {resources.find((val)=> val === "Power sockets") && <MdOutlineOutlet className="resources" title="Power sockets"/>}
                            {resources.find((val)=> val === "Aircon") && <MdAir className="resources" title="Aircon"/>}
                            {resources.find((val)=> val === "Food") && <MdOutlineFastfood className="resources" title="Food"/>}</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Result;