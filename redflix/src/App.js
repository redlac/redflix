import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import movieTrailer from 'movie-trailer';
import createFetchRequest from './api';

function App() {
  const [trailerUrl1, setTrailerUrl1] = useState('');
  const [trailerUrl2, setTrailerUrl2] = useState('');
  const [trailerUrl3, setTrailerUrl3] = useState('');
  const [trailerUrl4, setTrailerUrl4] = useState('');
  const [trailerUrl5, setTrailerUrl5] = useState('');
  const [trailerUrl6, setTrailerUrl6] = useState('');
  const [trailerUrl7, setTrailerUrl7] = useState('');
  const [trailerUrl8, setTrailerUrl8] = useState('');

  const handleClick = (movie, rowNum, category) => {
    setTrailerUrl1('');
    (async () => {
      let response;
      if (movie?.media_type === 'tv' || category === "NETFLIX ORIGINALS") {
        response = await createFetchRequest(`/tv/${movie?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
      } else {
        response = await createFetchRequest(`/movie/${movie?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
      }
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const trailer = data?.results.find(result => result?.type === "Trailer");
      let videoID;
      if (trailer) {
        videoID = trailer?.key;
      } else {
        videoID = "EXCDhHTZqW8";
      }

      switch (rowNum) {
        case 1:
          setTrailerUrl1(videoID);
          setTrailerUrl2('');
          setTrailerUrl3('');
          setTrailerUrl4('');
          setTrailerUrl5('');
          setTrailerUrl6('');
          setTrailerUrl7('');
          setTrailerUrl8('');
          break;
        case 2:
          setTrailerUrl2(videoID);
          setTrailerUrl1('');
          setTrailerUrl3('');
          setTrailerUrl4('');
          setTrailerUrl5('');
          setTrailerUrl6('');
          setTrailerUrl7('');
          setTrailerUrl8('');
          break;
        case 3:
          setTrailerUrl3(videoID);
          setTrailerUrl1('');
          setTrailerUrl2('');
          setTrailerUrl4('');
          setTrailerUrl5('');
          setTrailerUrl6('');
          setTrailerUrl7('');
          setTrailerUrl8('');
          break;
        case 4:
          setTrailerUrl4(videoID);
          setTrailerUrl1('');
          setTrailerUrl2('');
          setTrailerUrl3('');
          setTrailerUrl5('');
          setTrailerUrl6('');
          setTrailerUrl7('');
          setTrailerUrl8('');
          break;
        case 5:
          setTrailerUrl5(videoID);
          setTrailerUrl1('');
          setTrailerUrl2('');
          setTrailerUrl3('');
          setTrailerUrl4('');
          setTrailerUrl6('');
          setTrailerUrl7('');
          setTrailerUrl8('');
          break;
        case 6:
          setTrailerUrl6(videoID);
          setTrailerUrl1('');
          setTrailerUrl2('');
          setTrailerUrl3('');
          setTrailerUrl4('');
          setTrailerUrl5('');
          setTrailerUrl7('');
          setTrailerUrl8('');
          break;
        case 7:
          setTrailerUrl7(videoID);
          setTrailerUrl1('');
          setTrailerUrl2('');
          setTrailerUrl3('');
          setTrailerUrl4('');
          setTrailerUrl5('');
          setTrailerUrl6('');
          setTrailerUrl8('');
          break;
        case 8:
          setTrailerUrl8(videoID);
          setTrailerUrl1('');
          setTrailerUrl2('');
          setTrailerUrl3('');
          setTrailerUrl4('');
          setTrailerUrl5('');
          setTrailerUrl6('');
          setTrailerUrl7('');
          break;
      }
    })();
  }

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflix0riginals}
        isLargeRow
        trailerUrl={trailerUrl1}
        rowNum={1}
        handleClick={handleClick}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}
        trailerUrl={trailerUrl2}
        rowNum={2}
        handleClick={handleClick}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}
        trailerUrl={trailerUrl3}
        rowNum={3}
        handleClick={handleClick}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}
        trailerUrl={trailerUrl4}
        rowNum={4}
        handleClick={handleClick}
      />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
        trailerUrl={trailerUrl5}
        rowNum={5}
        handleClick={handleClick}
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}
        trailerUrl={trailerUrl6}
        rowNum={6}
        handleClick={handleClick}
      />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
        trailerUrl={trailerUrl7}
        rowNum={7}
        handleClick={handleClick}
      />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}
        trailerUrl={trailerUrl8}
        rowNum={8}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
