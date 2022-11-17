import {Tour} from '../../utils/api';
import {TourComponent} from '../tourComponent/TourComponent';
import './tours.css';
import {useState} from 'react';

type PropsTours = {
    tours: Tour[] | null;

}
export const Tours = ({tours}: PropsTours) => {
    const [filteredTours,setFilteredTours]=useState(tours);

    const removeTour = (id: string) => {

        if (!filteredTours) {
            return null;
        }

        const newTours = [...filteredTours.filter((tour) => tour.id !== id)];
        if(newTours.length===0){
            setFilteredTours(null);
        } else{
            setFilteredTours(newTours);
        }

    };
    return (<div className="container-tours">
        <div className="tours-title">
            <h1>Our Tours</h1>
            <div className="underline"></div>
        </div>
        <div className="tours-list">
            {filteredTours
                ? filteredTours?.map((tour, key) => {
                    return (<TourComponent key={key} tour={tour} removeTour={removeTour}/>);
                })

                : <div className="no-tour-box"><h2> No tours left!</h2><button onClick={()=>setFilteredTours(tours)}>Refresh</button></div>}
        </div>
    </div>);
};