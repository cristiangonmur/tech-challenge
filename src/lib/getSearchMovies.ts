import apiClient from './apiClient';

/* Copilot */
export const getSearchMovies = async (query: string, page: number = 1) => {
    const { data } = await apiClient.get('/search/movie', {
        params: {
            query,
            page,
        },
    });
    return data;
};
