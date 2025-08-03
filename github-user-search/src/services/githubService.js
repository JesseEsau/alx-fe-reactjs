import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';
const token = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const url = `/search/users?q=${encodeURIComponent(query)}&per_page=10`;

    const token = import.meta.env.VITE_GITHUB_API_KEY;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    try {
        const response = await axios.get(`https://api.github.com${url}`, { headers });
        return response.data.items;
    } catch (error) {
        throw new Error('Search failed');
    }

};
