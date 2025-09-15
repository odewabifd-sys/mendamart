import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewForm({ onReviewSubmit, job, customerId }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const reviewData = {
      rating,
      review_text: reviewText,
      job_id: job.id,
      artisan_id: job.artisan_id,
      customer_id: customerId,
    };

    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData)
    });

    if (response.ok) {
      if (onReviewSubmit) {
        onReviewSubmit();
      }
    } else {
      const data = await response.json();
      setError(data.error || "Failed to submit review.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Leave a Review for {job.artisan_name}
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Star Rating */}
        <div className="flex justify-center items-center mb-6">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  onClick={() => setRating(starValue)}
                  className="hidden"
                />
                <FaStar
                  className={`cursor-pointer transition-colors duration-200`}
                  size={40}
                  color={starValue <= (hoverRating || rating) ? "#FFD700" : "#E4E5E9"}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              </label>
            );
          })}
        </div>
        
        {/* Review Text Area */}
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
            Your Review
          </label>
          <textarea
            id="review"
            rows="4"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500 transition-colors"
            placeholder="Tell us about your experience..."
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || rating === 0}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
        
        {error && (
          <p className="text-red-500 mt-4 text-sm font-medium text-center">{error}</p>
        )}
      </form>
    </div>
  );
}