import { render, screen } from '@testing-library/react';
import MovieDetailPage from './MovieDetailPage';

const mockUp = {
    adult: false,
    backdrop_path: '/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg',
    belongs_to_collection: {
        id: 8864,
        name: 'Destino final - Colección',
        poster_path: '/yrQjtYmEsnc1hlDlXQZ29EMSFbp.jpg',
        backdrop_path: '/y3aWOInifbGKXM34KjtcMITrZRZ.jpg',
    },
    budget: 50000000,
    genres: [
        {
            id: 27,
            name: 'Terror',
        },
        {
            id: 9648,
            name: 'Misterio',
        },
    ],
    homepage: '',
    id: 574475,
    imdb_id: 'tt9619824',
    origin_country: ['US'],
    original_language: 'en',
    original_title: 'Final Destination Bloodlines',
    overview:
        'Acosada por una violenta pesadilla recurrente, la estudiante universitaria Stefanie se dirige a casa para localizar a la única persona que podría ser capaz de romper el ciclo y salvar a su familia de la espeluznante muerte que inevitablemente les espera a todos.',
    popularity: 629.4584,
    poster_path: '/frNkbclQpexf3aUzZrnixF3t5Hw.jpg',
    production_companies: [
        {
            id: 12,
            logo_path: '/2ycs64eqV5rqKYHyQK0GVoKGvfX.png',
            name: 'New Line Cinema',
            origin_country: 'US',
        },
        {
            id: 48788,
            logo_path: null,
            name: 'Practical Pictures',
            origin_country: 'US',
        },
        {
            id: 252366,
            logo_path: null,
            name: 'Freshman Year',
            origin_country: '',
        },
        {
            id: 252367,
            logo_path: null,
            name: 'Fireside Films',
            origin_country: 'US',
        },
        {
            id: 216687,
            logo_path: '/kKVYqekveOvLK1IgqdJojLjQvtu.png',
            name: 'Domain Entertainment',
            origin_country: 'US',
        },
    ],
    production_countries: [
        {
            iso_3166_1: 'US',
            name: 'United States of America',
        },
    ],
    release_date: '2025-05-14',
    revenue: 281253961,
    runtime: 110,
    spoken_languages: [
        {
            english_name: 'English',
            iso_639_1: 'en',
            name: 'English',
        },
    ],
    status: 'Released',
    tagline: '',
    title: 'Destino final: Lazos de sangre',
    video: false,
    vote_average: 7.183,
    vote_count: 1355,
};

/* Primer Test --> Generado de ejemplo con copilot, ya sabes por que, te añadio la chavala un test que te miraba el titulo  */
test('Comprueba el cambio de resolucion', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
    window.dispatchEvent(new Event('resize'));
    render(<MovieDetailPage movie={mockUp} />);
    // expect(screen.getByText('Destino final: Lazos de sangre')).toBeInTheDocument();
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    window.dispatchEvent(new Event('resize'));
});

test('comportamiento en mobile y click boton back', () => {
    // Mock de window.history.back
    window.history.back = jest.fn();
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    window.dispatchEvent(new Event('resize'));
    render(<MovieDetailPage movie={mockUp} />);
    const boton = screen.getByText(/back to list/i);
    boton.click();
    expect(window.history.back).toHaveBeenCalled();
    // ...tus expectativas...
});
