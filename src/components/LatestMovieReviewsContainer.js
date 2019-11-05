import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({reviews: data.results})
      })
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

  render () {
    return (
    <div className='latest-movie-reviews'>
      <h1>Latest Movie Reviews:</h1>
      {this.parseReviews()}
    </div>
    )
  }
}