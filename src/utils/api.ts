import axios from 'axios';

const API = "https://course-api.com/react-tours-project";

export type Tour=  {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}


export const getTours = async () => {
    try {
        const {data} = await axios.get<Tour[]>(API);
        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.message;
        } else {
            return 'An unexpected error occured';
        }
    }
};