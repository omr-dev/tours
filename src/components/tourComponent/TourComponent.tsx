import {Tour} from '../../utils/api';
import './tourComponent.css';
import {useState} from 'react';

type PropsTourComponent = { tour: Tour ,removeTour:(id:string)=>void}
export const TourComponent = ({tour,removeTour}: PropsTourComponent) => {
    const [isFullInfoText, setIsFullInfoText] = useState(false);
    const getInfoText = () => {
        if (isFullInfoText) {
            return <p>{tour.info +" "}<button onClick={() => {
                setIsFullInfoText(false);
            }}> Show Less</button></p>;
        }else{
            return <p>{tour.info.substring(0,200)+" "}... <button onClick={() => {
                setIsFullInfoText(true);
            }}>Read More</button></p>
        }
    };

    return <div className="tour-container">
        <div className="tour-image"><img src={tour.image} alt={tour.name}/></div>
        <div className="tour-body">
            <div className="tour-title">
                <div><h4>{tour.name}</h4></div>
                <div className="tour-price"><h4>${tour.price}</h4></div>
            </div>
            <div className="tour-info">{getInfoText()}</div>
            <div className="tour-remove-row">
                <button onClick={()=>removeTour(tour.id)}>Not Interested</button>
            </div>
        </div>

    </div>;
};