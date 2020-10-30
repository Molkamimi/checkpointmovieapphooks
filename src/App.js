import React, { useState } from "react";
import MovieList from "./Component/MovieList/MovieList"
import { Movie } from "./Constants/data";
import AddCard from "./Component/AddCard/AddCard";
import Filter from "./Component/Filtrer/Filter"
import "./App.css";

function App() {
  const [movies, setMovies] = useState(Movie);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);
  const addmovies = (movie) => {
    setMovies([...movies, movie]);
  };

  const searchmovies = (search) => {
    console.log(search);
    setSearch(search);
  };

  return (
    <div className="App">
      <h1> Movie App </h1>
      <div className="filter-add">
        <AddCard addmovies={addmovies} />
        <Filter searchmovies={searchmovies} setRate={setRate} />
      </div>
      <MovieList rate={rate} list={movies} filterText={search} />
    </div>
  );
}

export default App;