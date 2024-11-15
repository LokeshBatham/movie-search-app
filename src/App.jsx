import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Start with an empty search input
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null); // Track API errors

  // Fetch default "popular" movies on load
  useEffect(() => {
    fetchMovies("popular");
  }, []);

  // Fetch movies when the user performs a search
  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      await fetchMovies(searchQuery);
    }
  };

  // Fetch movies based on the query using Axios
  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          s: query,
          apikey: apiKey,
        },
      });
      const data = response.data;
      if (data.Response === "True") {
        setMovies(data.Search || []);
        setError(null); // Clear any previous errors
      } else {
        setMovies([]);
        setError(data.Error || "No movies found."); // Show API error message
      }
    } catch (error) {
      setMovies([]);
      setError("Failed to fetch movies. Please try again later."); // Handle network or other errors
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch movie details for the modal using Axios
  const selectMovie = async (movie) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          i: movie.imdbID,
          apikey: apiKey,
        },
      });
      setSelectedMovie(response.data);
      setShowModal(true);
    } catch (error) {
      setError("Failed to fetch movie details. Please try again later.");
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie Search App</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fetchMovies={handleSearch}
      />
      {error && <p className="text-danger text-center">{error}</p>} {/* Display error */}
      <MovieList movies={movies} selectMovie={selectMovie} />
      <MovieModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        movieDetails={selectedMovie}
      />
    </div>
  );
};

export default App;
