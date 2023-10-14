import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import MovieList from '../movie_List/MovieList';

let API_KEY = 'api_key=72a29ab9266343561b12855e1ffa22a1';
let baseUrl = 'https://api.themoviedb.org/3';
let url = baseUrl + '/movie/popular?' + API_KEY;

export default function Main() {
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url_set);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType === 'Popular') {
      setUrl(baseUrl + '/movie/popular?' + API_KEY);
    } else if (movieType === 'Theatre') {
      setUrl(baseUrl + '/movie/now_playing?' + API_KEY);
    } else if (movieType === 'Upcoming') {
      setUrl(baseUrl + '/movie/upcoming?' + API_KEY);
    } else if (movieType === 'Top rated') {
      setUrl(baseUrl + '/movie/top_rated?' + API_KEY);
    }
  };

  return (
    <>
      <Header getData={getData} url={url} setUrl={setUrl} baseUrl={baseUrl} />
      <MovieList movieData={movieData} />
    </>
  );
}
