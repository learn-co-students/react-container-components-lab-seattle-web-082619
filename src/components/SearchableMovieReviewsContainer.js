import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }

  fetchMovies = () => {
    fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.results
      })
    )
  }

  parseReviews = () => {
    return this.state.reviews.map((movie, idx) => {
      return (
        <div className="review-list" key={idx}>
          <MovieReviews movie={movie} />
        </div>
      )
    })
  }

  componentDidMount() {
    this.fetchMovies()
  }

  handleReviewSearch = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: this.state.searchTerm
    }, () => this.fetchMovies())
  }

  handleTyping = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>Search for Movie Reviews:</h1>
        <form onSubmit={this.handleReviewSearch}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleTyping} />
          <button type="submit">Search</button>
        </form>
        {this.parseReviews()}
      </div>
    )
  }
}
