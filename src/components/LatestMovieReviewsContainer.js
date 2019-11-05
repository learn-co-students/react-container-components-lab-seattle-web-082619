import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
      latestReviews: []
    }
    
    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            this.setState({
                latestReviews: data.results
            })
        })
    }

  
    render() {
        return (
            <div className="latest-movie-reviews">
              {
                this.state.latestReviews.map( (review, index) => {
                    return <MovieReviews key={index} review={review} />
                })
              }
            </div>
        )
    }

}

export default LatestMovieReviewsContainer