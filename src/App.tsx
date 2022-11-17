import './App.css';
import Loading from './components/Loading';
import {useEffect, useState} from 'react';
import {getTours, Tour} from './utils/api';
import {Error} from './components/Error';
import {Tours} from './components/tours/Tours';


function App() {
    const [isLoading, setisLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [tours, setTours] = useState<Tour[]|null>(null);

    useEffect(() => {
        (async () => {
            const response = await getTours();
            if (typeof response !== 'string') {
                setTours(response);
                setisLoading(false);
            } else {
                setErrorMessage(response);
            }
        })();


    }, []);
    return (
        <div className="App">

            {isLoading ? <Loading/> :
                errorMessage?<Error message={errorMessage}/>:
                    <Tours tours={tours} />
             }

        </div>
    );
}

export default App;
