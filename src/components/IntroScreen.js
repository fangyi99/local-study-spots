import { MdMyLocation } from "react-icons/md";

const IntroScreen = ({hideIntroScreen}) => {

    return (
        <div className="introScreen">
            <h3>Quick Guide</h3>
            <p>
                Use the <MdMyLocation className="introIcon"/> to look up the nearest study spot based on your location. <br></br>
                Please remember to allow access to location on this device.
            </p>
            <p>
                Filter to get more specific results.
            </p>
            <button onClick={()=>hideIntroScreen()}>Get Started</button>
        </div>
    )
}

export default IntroScreen;