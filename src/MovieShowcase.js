import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard'
import movieData from './data'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, index) => <MovieCard
      id={index}
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
      />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}