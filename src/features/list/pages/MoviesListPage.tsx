import MovieCard from '../components/MovieCard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getPopularMovies } from '@/lib/getPopularMovies';
import { getSearchMovies } from '@/lib/getSearchMovies';

const ItemList = styled.li`
    padding: 0.5rem 1rem;
`;
/* Copilot */
const getPagination = (current: number, total: number): number[] => {
    const maxButtons = 5;
    let start = Math.max(1, current - Math.floor(maxButtons / 2));
    let end = start + maxButtons - 1;

    if (end > total) {
        end = total;
        start = Math.max(1, end - maxButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export default function MoviesListPage({
    movies,
    pages,
    page,
    total,
}: {
    movies: any[];
    pages: number;
    page: number;
    total: number;
}) {
    const [state, setState] = useState({ movies, pages, page, total } || {});
    const [current, setCurrent] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getMovies = async () => {
            const data = await getPopularMovies(current);
            setState({
                movies: data.results,
                pages: data.total_pages,
                page: data.page,
                total: data.total_results,
            });
        };
        getMovies();
    }, [current]);

    const handlePageChange = (newPage: number) => {
        console.log('handlePageChange', newPage);
        setCurrent(newPage);
    };

    const searchClick = async () => {
        const data = await getSearchMovies(search);
        setState({
            movies: data.results,
            pages: data.total_pages,
            page: data.page,
            total: data.total_results,
        });
    };

    //51153 1 1023048
    console.log('MoviesListPage', movies, pages, page, total);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '100vw',
                    boxSizing: 'border-box',
                    padding: '1rem',
                    gap: '1rem',
                }}
            >
                <input
                    style={{
                        flex: '0 0 80%',
                        maxWidth: '80%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar película..."
                />
                <button
                    style={{
                        flex: '0 0 20%',
                        margin: 0,
                        alignSelf: 'center',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                    onClick={() => {
                        searchClick();
                    }}
                >
                    Buscar
                </button>
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1rem',
                    padding: '1rem',
                }}
            >
                {state.movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '3rem',
                }}
            >
                <nav aria-label="Paginación">
                    <ul
                        style={{
                            display: 'flex',
                            listStyle: 'none',
                            gap: '0.5rem',
                            padding: '0',
                        }}
                    >
                        <ItemList>
                            <button
                                onClick={() => handlePageChange(current > 1 ? current - 1 : 1)}
                                aria-label="Anterior"
                                style={{ padding: '0.5rem 1rem' }}
                            >
                                &#8592;
                            </button>
                        </ItemList>
                        {getPagination(current, pages).map((i) => (
                            <ItemList key={`pag${i}`}>
                                <button
                                    onClick={() => handlePageChange(i)}
                                    style={{ padding: '0.5rem 1rem' }}
                                >
                                    {i}
                                </button>
                            </ItemList>
                        ))}
                        <ItemList>
                            <button
                                onClick={() =>
                                    handlePageChange(
                                        current < state.pages ? current + 1 : state.pages,
                                    )
                                }
                                aria-label="Siguiente"
                                style={{ padding: '0.5rem 1rem' }}
                            >
                                &#8594;
                            </button>
                        </ItemList>
                    </ul>
                </nav>
            </div>
        </>
    );
}
