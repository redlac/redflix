import React, { useState, useEffect } from 'react';
import createFetchRequest, { IMG_BASE_URL } from './api';
import './Row.css';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow, trailerUrl, rowNum, handleClick }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await createFetchRequest(fetchUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMovies(data?.results);
                return data;
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie, rowNum, title)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${IMG_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
            {trailerUrl !== '' &&
                <YouTube videoId={trailerUrl} opts={opts} />
            }
        </div>
    )
}

export default Row;