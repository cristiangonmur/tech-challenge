import apiClient from './apiClient';

/* Copilot */
export const getPopularMovies = async (page: number) => {
    const { data } = await apiClient.get('/movie/popular', {
        params: { page },
    });
    return data;
};
