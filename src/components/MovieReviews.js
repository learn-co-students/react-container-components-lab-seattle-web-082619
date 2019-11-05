import React from 'react'

const MoviesReviews = props => {
  const { headline, mpaa_rating, summary_short } = props.movie

  return (
    <div className='review' key={props.id}>
      <h2>{headline}</h2>
      <p> Rated: {mpaa_rating}</p>
      <p>{summary_short}</p>
    </div>
  )
}

export default MoviesReviews
