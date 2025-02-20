import axios from 'axios';

const API_URL = 'https://ftc-website-backend-production.up.railway.app/api/';

export const fetchEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}events/`);
        return response.data;
    }catch (error) {
        console.error('Error fetching events:',error);
        return [];
    };

}
export const fetchMembers = async () => {
    try {
        const response = await axios.get(`${API_URL}members/`);
        return response.data;
    }catch (error) {
        console.error('Error fetching members:',error);
        return [];
    };

}
export const fetchWorkshops = async () => {
    try {
        const response = await axios.get(`${API_URL}workshops/`);
        return response.data;
    }catch (error) {
        console.error('Error fetching workshops:',error);
        return [];
    };

}