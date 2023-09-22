import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constatnts/constants";
import axios from "../../axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[1]);
      });
  }, []);
  console.log(movie.title);
  console.log(imageUrl);
  console.log(`${imageUrl}${movie.backdrop_path}`);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl}${movie.backdrop_path}
        )`,
      }}
    >
      <div className="banner">
        <div className="content">
          <h1 className="title">{movie.title}</h1>
          <div className="banner_button">
            <button className="button">Play</button>
            <button className="button">Playlist</button>
          </div>
          <h1 className="description">{movie.overview}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
