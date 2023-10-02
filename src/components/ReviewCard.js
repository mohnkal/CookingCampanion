import React from 'react';
import './ReviewCard.css'
import Monya from "./Monya.png"

const ReviewCard = () => {
  // Sample review data with image URLs
  const reviews = [
    {
      id: 1,
      userName: 'Pratham Mhavale',
      date: '2023-09-23',
      rating: 5,
      comment: 'This app is fantastic! It helped me achieve my fitness goals.',
      imageUrl: Monya,
    },
    {
      id: 2,
      userName: 'Mohnish Kalaimani',
      date: '2023-09-24',
      rating: 4,
      comment: "I'm really impressed with the app's meal planning feature.",
      imageUrl: Monya,
    },
    {
      id: 3,
      userName: 'Rohan More',
      date: '2023-09-25',
      rating: 5,
      comment: 'The recipes are delicious and easy to follow. Highly recommended!',
      imageUrl: Monya,
    },
  ];

  return (
    <div className="user-reviews">
      <h2>User Reviews</h2>
      <div className="review-cards">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h3 className="user-name">{review.userName}</h3>
              <p className="review-date">{review.date}</p>
            </div>
            <div className="user-rating">
              Rating: {review.rating} stars
            </div>
            <div className="review-image">
              <img src={review.imageUrl} alt={`Image of ${review.userName}`} />
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
