import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';
const token = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get(`${BASE_URL}${username}`, { headers });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        }
        throw new Error('Failed to fetch user data');
    }
};
