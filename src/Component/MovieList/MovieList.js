import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import '../MovieList/MovieList.css';
function MovieList({movies,textSerach,searchRate}) {
    return (
        <div className="liste">
          {movies.filter ( (el) => el.name.toLowerCase().includes(textSerach.toLowerCase()) &&el.rating >= searchRate
        )
        .map((el) => (
          <MovieCard key={el.id} movie={el} />
        ))}
        </div>
    )
}

export default MovieList;
