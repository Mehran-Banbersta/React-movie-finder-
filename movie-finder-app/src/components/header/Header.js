import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header({
  getData,
  baseUrl,
  setUrl,

}) {
  const [search, setSearch] = useState('');
  const arr = ['Popular', 'Theatre', 'Upcoming', 'Top rated'];

  const handelSearchMovie = (event) => {
    event.preventDefault();

    if (search.trim() !== '') {
      const searchUrl =
        baseUrl +
        '/search/movie?api_key=72a29ab9266343561b12855e1ffa22a1&query=' +
        search;
      setUrl(searchUrl);
      setSearch('');
    }
  };

  return (
    <div className="header">
      <div className="nav_bar">
        <form onSubmit={(e) => handelSearchMovie(e)}>
          <div className="search_input">
            <div className="logo_container">
              <Link className="logo" to="/">
                Movie<span className="red_text">Finder</span>
              </Link>
            </div>
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="input_text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <input className="submit_btn" type="submit" value="Search" />
          </div>
        </form>
        <nav>
          <ul>
            {arr.map((value) => {
              return (
                <li key={value}>
                  <a
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="header_desc">
        <h2 className="header_title">
          Your Gateway to <br></br> All the
          <span className="red_text">Movies</span>
        </h2>

        <h3 className="header_text">Discover, Watch, and Enjoy</h3>
      </div>
    </div>
  );
}
