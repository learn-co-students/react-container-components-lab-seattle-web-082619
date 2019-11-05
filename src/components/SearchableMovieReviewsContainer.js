import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

let query = ''
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        value: "",
        reviews: []
    }

  handleSubmit = (e) => {
    e.preventDefault()
    let query = this.state.value
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?` + `query=${query}` + `&api-key=${NYT_API_KEY}`)
    .then(res => res.json())
    .then(data => this.setState({
       reviews: data.results
    }))
  }

  handleChange = (e) => {
      this.setState({
          value: e.target.value
      })
  }
  
  render() {
      return (
          <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Search Here" />
                <input type="submit" value="Submit" />
            </form>
            {
                this.state.reviews.map( (review, index) => {
                    return <MovieReviews key={index} review={review} />
                })
              }
          </div>
      )
  }

}

export default SearchableMovieReviewsContainer
