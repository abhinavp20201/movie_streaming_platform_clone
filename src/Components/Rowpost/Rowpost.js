import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import { API_KEY, imageUrl } from "../../Constatnts/constants";
import axios from "axios";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=ee3aaeb2233be4bf6aa08955cea11029&with_networks=213`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            src={`${imageUrl}${obj.backdrop_path}`}
            alt="poster"
            className={props.isSmall ? "small_poster" : "poster"}
          />
        ))}
      </div>
    </div>
  );
}

export default Rowpost;
