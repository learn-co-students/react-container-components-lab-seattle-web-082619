import React from 'react'



const MovieReviews = (props) => {
  const {byline, display_title, headline, link, publication_date, summary_short} = props.review
    
  return (
      <div className="review-list">
        <div className="review">
            <h2>{headline}</h2>
            <ul>
                <li>{" Published: " + publication_date}</li>
                <li>{summary_short}</li>
                <li><a href={link.url}>{link.url}</a></li>
            </ul>
        </div>
      </div>
  )
}

export default MovieReviews