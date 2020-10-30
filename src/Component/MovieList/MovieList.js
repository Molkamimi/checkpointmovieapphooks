import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieList/MovieList.css";
function MovieList({ list, filterText, rate }) {
  return (
    <div className="liste">
      {list
        .filter(
          (el) =>
            el.title.toLowerCase().includes(filterText.toLowerCase()) &&
            el.rate >= rate
        )
        .map((el, i) => (
          <MovieCard
            key={i}
            title={el.title}
            description={el.description}
            posterUrl={el.posterUrl}
            rate={el.rate}
          />
        ))}
    </div>
  );
}

export default MovieList;