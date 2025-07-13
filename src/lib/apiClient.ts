import axios from 'axios';

const apiKey = process.env.TMDB_API_KEY;

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'es-ES',
    },
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzE1NDk5OGNkYmQxNjdlMDU4OTBjOWEyM2E5ODJiNyIsIm5iZiI6MTc1MTA5Mjg0OC4xMzc5OTk4LCJzdWIiOiI2ODVmOGU3MDE0ZjJjMDRiZWU5YWVlYzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yYKwEEF21M__ft8P2dYXRnMbo5OXZfqJA5JrFqSNYBo`,
    },
});

export default apiClient;
