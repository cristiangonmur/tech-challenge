import { GetServerSideProps } from 'next';
import apiClient from '@/lib/apiClient';
import MoviesListPage from '@/features/list/pages/MoviesListPage';

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await apiClient.get('/movie/popular', {
        params: { page: 1 },
    });
    return {
        props: {
            movies: data.results,
            pages: data.total_pages,
            page: data.page,
            total: data.total_results,
        },
    };
};

export default MoviesListPage;
