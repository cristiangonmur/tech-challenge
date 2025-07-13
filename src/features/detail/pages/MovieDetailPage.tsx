import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const StyledP = styled.p`
    color: #535251;
    margin: 0;
`;
const StyledPB = styled.p`
    padding: 4px 8px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    background: transparent;
    color: #cccccc;
    textalign: center;
    margin: 0px 10px 0px 0px;
`;
const StyledS = styled.span`
    color: #535251;
    margin: 0 4px;
`;
const StyledButton = styled.button`
    width: 100%;
    margin-top: 1rem;
    background-color: #535251;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: rgb(131, 129, 128);
    }
`;
const DivDesk = styled.div`
    display: inline-flex;
    padding: 0;
    width: 100%;
    margin-bottom: 1rem;
`;
/* Copilot */
const duration = (minutes: number): string => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    return `${m}m`;
};
/* Copilot */
const year = (date: string): string => date.split('-')[0];

const stars = ['Petter Griffin', 'Homer Simpson', 'Ash Ketchum'];
export default function MovieDetailPage({ movie }: { movie: any }) {
    // Deteccion de resolucion con useEffect para no instalar librerias adicionales --> useMediaQuery

    /* A TOMAR POR CULO TODO Y MEDIA QUERY */
    //     const Container = styled.div`
    //   width: 100%;
    //   @media (max-width: 768px) {
    //     padding: 1rem;
    //   }
    //   @media (min-width: 769px) {
    //     padding: 3rem;
    //   }
    // `;

    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log('MovieDetailPage', movie, width);
    return width !== 0 ? width < 768 ? renderMobile(movie) : renderDesktop(movie) : <></>;
}

const renderDesktop = (movie: any) => (
    <div
        style={{
            position: 'absolute',
            padding: '0',
            backgroundColor: 'black',
            width: '100%',
            height: '100vh',
            justifyItems: 'center',
        }}
    >
        <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            width={window.innerWidth}
            height={window.innerHeight - 100}
            style={{
                objectFit: 'cover',
                zIndex: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                filter: 'brightness(0.5)',
                paddingTop: '3rem',
            }}
            priority
            quality={100}
        />
        <div
            style={{
                position: 'relative',
                zIndex: 1,
                paddingTop: '6rem',
                paddingLeft: window.innerWidth / 2,
            }}
        >
            <h1 style={{ fontSize: '50px', color: 'white', textAlign: 'left' }}>{movie.title}</h1>
            <DivDesk style={{ fontSize: '18px' }}>
                <StyledPB>{year(movie.release_date)}</StyledPB>
                <StyledPB>PEGI 13</StyledPB>
                <StyledPB>{duration(movie.runtime)}</StyledPB>
            </DivDesk>
            <DivDesk>
                <span
                    style={{
                        padding: '0.5rem',
                        backgroundColor: '#f6f02b',
                        borderRadius: '8px',
                        marginRight: '0.5rem',
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }}
                >
                    IMDb
                </span>
                <span
                    style={{
                        padding: '0.5rem',
                        color: 'white',
                        fontSize: '18px',
                    }}
                >
                    {movie.vote_average}
                </span>
            </DivDesk>
            <DivDesk>
                <StyledP style={{ color: 'white', fontSize: '16px' }}>{movie.overview}</StyledP>
            </DivDesk>
        </div>
        <div
            style={{
                color: 'white',
                position: 'relative',
                zIndex: 1,
                width: window.innerWidth,
                backgroundColor: 'black',
            }}
        >
            {/* El tema Grid Copilot */}
            <div
                style={{
                    width: '50%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    marginTop: '2rem',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0.5rem' }}>Director</p>
                    <p style={{ margin: 0 }}>A saber quien</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0.5rem' }}>Stars</p>
                    {stars.map((s: string) => (
                        <p key={s} style={{ margin: 0 }}>
                            {s}
                        </p>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0.5rem' }}>Genres</p>
                    {movie.genres.map((g) => (
                        <p key={g.id} style={{ margin: 0 }}>
                            {g.name}
                        </p>
                    ))}
                </div>
            </div>
            <br></br>
        </div>
    </div>
);
const renderMobile = (movie: any) => (
    <div style={{ padding: '2rem 3rem', backgroundColor: 'black' }}>
        <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={500}
            style={{ maxWidth: '100%', borderRadius: '12px' }}
        />
        <h2 style={{ color: 'white', textAlign: 'left' }}>{movie.title}</h2>
        <div style={{ display: 'flex', fontSize: '16px' }}>
            <div style={{ display: 'inline-flex', padding: 0, width: '70%' }}>
                <StyledP>{duration(movie.runtime)}</StyledP>
                {/* Ducarion */}
                <StyledS>|</StyledS>
                <StyledP>PEGI 13</StyledP>
                {/* PEGI */}
                <StyledS>|</StyledS>
                <StyledP>{year(movie.release_date)}</StyledP>
                {/* Año */}
            </div>
            <div style={{ width: '30%', textAlign: 'right' }}>
                <b>
                    <p style={{ color: 'yellow', margin: 0 }}>{movie.vote_average}</p>
                </b>
                {/* Valoracion */}
            </div>
        </div>
        <h3 style={{ color: 'white', textAlign: 'left' }}>Overview</h3>
        <StyledP>{movie.overview}</StyledP>
        {/* Resumen */}
        <StyledButton id="buttonBack" onClick={() => window.history.back()}>
            Back to List
        </StyledButton>
        {/* Boton volver atras */}
    </div>
);
