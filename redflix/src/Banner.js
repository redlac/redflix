import React, { useState, useEffect } from 'react';
import createFetchRequest, { IMG_BASE_URL } from './api';
import requests from './requests';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await createFetchRequest(requests.fetchNetflix0riginals);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMovie(data?.results[Math.floor(Math.random() * data?.results?.length - 1)]);
                return data;
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, []);


    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "${IMG_BASE_URL}/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}

export default Banner;