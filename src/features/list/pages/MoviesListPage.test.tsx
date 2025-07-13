import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MoviesListPage from './MoviesListPage';

const mockUp = [
    {
        adult: false,
        backdrop_path: '/sItIskd5xpiE64bBWYwZintkGf3.jpg',
        genre_ids: [28, 53, 80],
        id: 541671,
        original_language: 'en',
        original_title: 'Ballerina',
        overview:
            'Eve Macarro es una asesina entrenada por la Ruska Roma desde su infancia, la misma organización criminal encargada del adiestramiento de John Wick. En esta violenta historia de venganza, Eve intentará por todos los medios averiguar quién está detrás del asesinato de su padre. En su lucha por conocer la verdad, tendrá que atenerse a las normas de la Alta Mesa y, por supuesto, a las del Hotel Continental, donde descubrirá que existen secretos ocultos sobre su pasado.',
        popularity: 702.4255,
        poster_path: '/gQCrYmvCK7JCLXjCGTMRF5Lzr5c.jpg',
        release_date: '2025-06-04',
        title: 'Bailarina',
        video: false,
        vote_average: 7.283,
        vote_count: 598,
    },
    {
        adult: false,
        backdrop_path: '/wSdWEc1G3OUWg8HAzNLqOZ9Gd43.jpg',
        genre_ids: [28, 878, 12],
        id: 986056,
        original_language: 'en',
        original_title: 'Thunderbolts*',
        overview:
            'Un grupo de supervillanos poco convencional es reclutado para hacer misiones para el gobierno: Yelena Belova, Bucky Barnes, Red Guardian, Ghost, Taskmaster y John Walker. Después de verse atrapados en una trampa mortal urdida por Valentina Allegra de Fontaine, estos marginados deben embarcarse en una peligrosa misión que les obligará a enfrentarse a los recovecos más oscuros de su pasado.',
        popularity: 648.5939,
        poster_path: '/eA39qgcH3r2dA9MQMBPwEXS6F86.jpg',
        release_date: '2025-04-30',
        title: 'Thunderbolts*',
        video: false,
        vote_average: 7.463,
        vote_count: 1471,
    },
    {
        adult: false,
        backdrop_path: '/x58Gk2ZGU5AEBp25MQe2nhZhd5z.jpg',
        genre_ids: [28, 14],
        id: 846422,
        original_language: 'en',
        original_title: 'The Old Guard 2',
        overview:
            'Andy y su equipo de guerreros inmortales luchan con un propósito renovado y se enfrentan a un nuevo y poderoso enemigo que amenaza su misión de proteger a la humanidad.',
        popularity: 605.4355,
        poster_path: '/6eGyuK8bHMAB34AIIQOL3wZw8sn.jpg',
        release_date: '2025-07-01',
        title: 'La vieja guardia 2',
        video: false,
        vote_average: 6.28,
        vote_count: 150,
    },
    {
        adult: false,
        backdrop_path: '/962KXsr09uK8wrmUg9TjzmE7c4e.jpg',
        genre_ids: [28, 53, 18],
        id: 1119878,
        original_language: 'en',
        original_title: 'Ice Road: Vengeance',
        overview: '',
        popularity: 430.0776,
        poster_path: '/2vHQBX5L4yoExTa55KmGIg2Q5s3.jpg',
        release_date: '2025-06-27',
        title: 'Ice Road: Vengeance',
        video: false,
        vote_average: 6.7,
        vote_count: 43,
    },
    {
        adult: false,
        backdrop_path: '/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg',
        genre_ids: [27, 9648],
        id: 574475,
        original_language: 'en',
        original_title: 'Final Destination Bloodlines',
        overview:
            'Acosada por una violenta pesadilla recurrente, la estudiante universitaria Stefanie se dirige a casa para localizar a la única persona que podría ser capaz de romper el ciclo y salvar a su familia de la espeluznante muerte que inevitablemente les espera a todos.',
        popularity: 360.6209,
        poster_path: '/frNkbclQpexf3aUzZrnixF3t5Hw.jpg',
        release_date: '2025-05-14',
        title: 'Destino final: Lazos de sangre',
        video: false,
        vote_average: 7.205,
        vote_count: 1472,
    },
    {
        adult: false,
        backdrop_path: '/xABhldZaMb6wfCH5oigV333OYnb.jpg',
        genre_ids: [28, 53, 35],
        id: 749170,
        original_language: 'en',
        original_title: 'Heads of State',
        overview:
            'El primer ministro del Reino Unido y el presidente de EE. UU. tienen una rivalidad pública que pone en riesgo la alianza entre sus países. Pero cuando se convierten en el blanco de un poderoso enemigo, se ven obligados a confiar el uno en el otro. Aliados con Noel, una agente del MI6, intenta frustrar una conspiración que amenaza al mundo libre.',
        popularity: 447.9919,
        poster_path: '/2CSdwqOUMH23cEBodqAJynMFz7c.jpg',
        release_date: '2025-06-24',
        title: 'Jefes de Estado',
        video: false,
        vote_average: 7.121,
        vote_count: 120,
    },
    {
        adult: false,
        backdrop_path: '/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg',
        genre_ids: [10751, 878, 35, 12],
        id: 552524,
        original_language: 'en',
        original_title: 'Lilo & Stitch',
        overview:
            'La conmovedora y divertidísima historia de una solitaria niña hawaiana y el extraterrestre fugitivo que la ayuda a reparar su desestructurada familia.',
        popularity: 281.1271,
        poster_path: '/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg',
        release_date: '2025-05-17',
        title: 'Lilo y Stitch',
        video: false,
        vote_average: 7.126,
        vote_count: 782,
    },
    {
        adult: false,
        backdrop_path: '/peAzdLKtT6VDWIfPQO9LJD1NCG4.jpg',
        genre_ids: [878, 12, 28],
        id: 1234821,
        original_language: 'en',
        original_title: 'Jurassic World Rebirth',
        overview:
            'Cinco años después de los eventos de "Dominion", sigue a Zora (Scarlett Johansson), que dirige un equipo para conseguir material genético de tres enormes dinosaurios. Cuando la operación se cruza con una familia, quedan varados en una isla donde hacen un siniestro descubrimiento.',
        popularity: 350.0499,
        poster_path: '/fhBYsFNlYyfa7uxbzklSOPodFfq.jpg',
        release_date: '2025-07-01',
        title: 'Jurassic World: El renacer',
        video: false,
        vote_average: 6.5,
        vote_count: 177,
    },
    {
        adult: false,
        backdrop_path: '/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg',
        genre_ids: [16, 14, 28, 35, 10402],
        id: 803796,
        original_language: 'en',
        original_title: 'KPop Demon Hunters',
        overview:
            'Cuando no están llenando estadios, las superestrellas del K-pop Rumi, Mira y Zoey usan sus poderes secretos para proteger a sus fans de una amenaza sobrenatural.',
        popularity: 244.6047,
        poster_path: '/swQRKmW7RLhncPYHvM0RHz8b7bT.jpg',
        release_date: '2025-06-20',
        title: 'Las guerreras k-pop',
        video: false,
        vote_average: 8.64,
        vote_count: 410,
    },
    {
        adult: false,
        backdrop_path: '/8PHTO4a11JuZwYko7QPBUWq45wJ.jpg',
        genre_ids: [28, 18],
        id: 911430,
        original_language: 'en',
        original_title: 'F1',
        overview:
            'El mítico piloto Sonny Hayes vuelve de su retiro, persuadido para liderar un equipo de Fórmula 1 en apuros y guiar a su joven promesa, en busca de una nueva oportunidad de éxito.',
        popularity: 225.9971,
        poster_path: '/yKIG63pXN89EfbTA7yKpwxAU1rf.jpg',
        release_date: '2025-06-25',
        title: 'F1 la película',
        video: false,
        vote_average: 7.69,
        vote_count: 469,
    },
    {
        adult: false,
        backdrop_path: '/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg',
        genre_ids: [14, 10751, 28],
        id: 1087192,
        original_language: 'en',
        original_title: 'How to Train Your Dragon',
        overview:
            'En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.',
        popularity: 228.4281,
        poster_path: '/sGFO6VshDEQ9vX4tOSobLJpkNhq.jpg',
        release_date: '2025-06-06',
        title: 'Cómo entrenar a tu dragón',
        video: false,
        vote_average: 7.898,
        vote_count: 544,
    },
    {
        adult: false,
        backdrop_path: '/xRr7mnOJ39bZtCRmVefrm3sBxX4.jpg',
        genre_ids: [80, 53, 28],
        id: 1090007,
        original_language: 'en',
        original_title: 'First Shift',
        overview:
            'Un oficial de policía de Nueva York junto con su compañera novata Angela tienen un día difícil mientras viven el trabajo peligroso y rutinario de ser policías en la ciudad.',
        popularity: 181.5834,
        poster_path: '/ajsGI4JYaciPIe3gPgiJ3Vw5Vre.jpg',
        release_date: '2024-08-30',
        title: 'First Shift',
        video: false,
        vote_average: 5.615,
        vote_count: 26,
    },
    {
        adult: false,
        backdrop_path: '/U0A4zWh6XbJt1jDAPuGqKcu4ga.jpg',
        genre_ids: [27],
        id: 1151031,
        original_language: 'en',
        original_title: 'Bring Her Back',
        overview:
            'Un hermano y una hermana descubren un ritual aterrador en la apartada casa de su nueva madre adoptiva',
        popularity: 221.0102,
        poster_path: '/7Gh8dMAGNMvyr5YA2H1KgJK3wq3.jpg',
        release_date: '2025-05-28',
        title: 'Devuélvemela',
        video: false,
        vote_average: 7.1,
        vote_count: 114,
    },
    {
        adult: false,
        backdrop_path: '/11vyKM09CHxWDjivjl4tldTllzG.jpg',
        genre_ids: [27],
        id: 1278950,
        original_language: 'en',
        original_title: 'The Ritual',
        overview: '',
        popularity: 198.2616,
        poster_path: '/284B2AL0U5M4o85LfRJCdvjTN7N.jpg',
        release_date: '2025-05-27',
        title: 'The Ritual',
        video: false,
        vote_average: 6.027,
        vote_count: 73,
    },
    {
        adult: false,
        backdrop_path: '/xtnfoFs9vOLBF7Ox13mFmFUovey.jpg',
        genre_ids: [28, 12, 18],
        id: 1311844,
        original_language: 'en',
        original_title: 'The Twisters',
        overview:
            'Decenas de tornados mortíferos convergen en el Medio Oeste, fusionándose en un mega tornado dispuesto a arrasar todo a lo largo de cientos de kilómetros.',
        popularity: 163.7409,
        poster_path: '/8OP3h80BzIDgmMNANVaYlQ6H4Oc.jpg',
        release_date: '2024-06-28',
        title: 'The Twisters',
        video: false,
        vote_average: 5.95,
        vote_count: 50,
    },
    {
        adult: false,
        backdrop_path: '/jgrImRKhsRXaa6wlSsQPnFRUQbH.jpg',
        genre_ids: [99],
        id: 1412113,
        original_language: 'ko',
        original_title: '오징어 게임: 시즌2 제작 이야기',
        overview:
            'Desde la escenografía hasta el reparto, elenco y director de la serie más vista del mundo ofrecen entrevistas exclusivas sobre cómo se filmó la segunda temporada.',
        popularity: 148.6696,
        poster_path: '/yQGaui0bQ5Ai3KIFBB45nTeIqad.jpg',
        release_date: '2025-01-02',
        title: "Así se hizo ‘El juego del calamar: Temporada 2'",
        video: false,
        vote_average: 8.5,
        vote_count: 415,
    },
    {
        adult: false,
        backdrop_path: '/xVoj3HrOsnjOyyhqRD9jt5kTPc4.jpg',
        genre_ids: [878, 35, 28],
        id: 605722,
        original_language: 'en',
        original_title: 'Distant',
        overview:
            'Tras un aterrizaje forzoso, un ingeniero especializado en la perforación de asteroides acaba en un planeta alienígena para encontrar al único superviviente que se encuentra en aquel recóndito lugar. Para ello, deberá enfrentarse a extrañas criaturas.',
        popularity: 150.2376,
        poster_path: '/reDAdPDDZs5diNTef6UNuRwHomW.jpg',
        release_date: '2024-07-12',
        title: 'Larga Distancia',
        video: false,
        vote_average: 6.4,
        vote_count: 152,
    },
    {
        adult: false,
        backdrop_path: '/iHHWF01W2vNpjI8UzWh2F7tJEZp.jpg',
        genre_ids: [28, 18],
        id: 1246369,
        original_language: 'ja',
        original_title: '室町無頼',
        overview: '',
        popularity: 170.0277,
        poster_path: '/6U0i0HsSCvhRW4IpGzdead6QRo3.jpg',
        release_date: '2025-01-17',
        title: '室町無頼',
        video: false,
        vote_average: 9.222,
        vote_count: 9,
    },
    {
        adult: false,
        backdrop_path: '/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg',
        genre_ids: [27, 53, 878],
        id: 1100988,
        original_language: 'en',
        original_title: '28 Years Later',
        overview:
            'Años transcurridos tras los sucesos de "28 semanas después", el virus de la ira ha regresado y un grupo de supervivientes debe sobrevivir en un mundo asolado por hordas de infectados. Rodada con un iPhone 15 Pro Max y con la ayuda de numerosos accesorios especializados.',
        popularity: 143.7602,
        poster_path: '/hvIqaDUC48dwfd7taKczB7909Qg.jpg',
        release_date: '2025-06-18',
        title: '28 años después',
        video: false,
        vote_average: 7.227,
        vote_count: 485,
    },
    {
        adult: false,
        backdrop_path: '/zxjFabSJKMAvuu3acNg78nuTuCs.jpg',
        genre_ids: [28, 53, 27],
        id: 1442776,
        original_language: 'zh',
        original_title: 'Kuang Bao Ju Xi',
        overview:
            'El vertido de aguas residuales de una fábrica da origen a un lagarto gigante mutante. Después del accidente, el jefe ordena reunir a un grupo de vecinos para intentar dar caza a la bestia. El mejor cazador de la aldea, Hu Tianming, y la zoóloga Zhao Xiaoye logran localizar el escondite del lagarto gigante basándose en sus hábitos biológicos.',
        popularity: 133.3898,
        poster_path: '/nimnvsGwgJBPnsRrmdlIDi2Yhbn.jpg',
        release_date: '2024-03-27',
        title: 'Guerra de mutantes',
        video: false,
        vote_average: 6.429,
        vote_count: 21,
    },
];

// Mock de getSearchMovies
jest.mock('@/lib/getSearchMovies', () => ({
    getSearchMovies: jest.fn().mockResolvedValue({
        results: [
            { id: 1, title: 'Batman Begins' },
            { id: 2, title: 'Batman Returns' },
        ],
        total_pages: 1,
        page: 1,
        total_results: 2,
    }),
}));

/* Este de copilot */
test('busca "batman" y renderiza resultados', async () => {
    render(<MoviesListPage movies={mockUp} pages={20} page={1} total={400} />);
    const input = screen.getByPlaceholderText(/buscar película/i);
    const boton = screen.getByText(/buscar/i);

    // Escribe "batman" en el input
    fireEvent.change(input, { target: { value: 'batman' } });

    // Haz click en el botón
    fireEvent.click(boton);

    // Espera a que se rendericen los resultados
    await waitFor(() => {
        expect(screen.getByText('Batman Begins')).toBeInTheDocument();
        expect(screen.getByText('Batman Returns')).toBeInTheDocument();
    });

    // Limpia el mock para no afectar otros tests
    (React.useState as jest.Mock).mockRestore?.();
});

/* Cristian */
test('Busqueda', async () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);
    render(<MoviesListPage movies={mockUp} pages={20} page={1} total={400} />);
    const input = screen.getByPlaceholderText(/buscar película/i);
    fireEvent.change(input, { target: { value: 'batman' } });
    const boton = screen.getByText(/Buscar/i);
    boton.click();
    await waitFor(() => {
        expect(setState).toHaveBeenCalled();
    });
});

// test('Paginacion', () => {
//     // Mock de window.history.back
//     window.history.back = jest.fn();
//     Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
//     window.dispatchEvent(new Event('resize'));
//     render(<MovieDetailPage movie={mockUp} />);
//     const boton = screen.getByText(/back to list/i);
//     boton.click();
//     expect(window.history.back).toHaveBeenCalled();
//     // ...tus expectativas...
// });

// test('Navegacion detalle', () => {
//     // Mock de window.history.back
//     window.history.back = jest.fn();
//     Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
//     window.dispatchEvent(new Event('resize'));
//     render(<MovieDetailPage movie={mockUp} />);
//     const boton = screen.getByText(/back to list/i);
//     boton.click();
//     expect(window.history.back).toHaveBeenCalled();
//     // ...tus expectativas...
// });
