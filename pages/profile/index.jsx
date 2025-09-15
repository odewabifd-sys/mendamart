import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Nav from "../../components/Nav";
import { useSessionContext } from "@supabase/auth-helpers-react";

export default function ArtisanProfile() {
  const router = useRouter();
  const { session } = useSessionContext();
  const [artisan, setArtisan] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // In a real app, you would get the artisan ID from the URL (e.g., /profile/[id])
  // For now, we'll assume the logged-in user is the artisan
  const artisanId = session?.user?.id;

  useEffect(() => {
    if (!artisanId) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      // Fetch artisan data (assuming you have an 'artisans' table)
      const { data: artisanData } = await supabase
        .from("artisans")
        .select("*")
        .eq("id", artisanId)
        .single();
      setArtisan(artisanData);

      // Fetch reviews for the artisan
      const response = await fetch(`/api/artisans/${artisanId}/reviews`);
      const data = await response.json();
      if (response.ok) {
        setReviews(data.reviews);
        setAverageRating(data.averageRating);
        setReviewCount(data.reviewCount);
      }
      setLoading(false);
    }
    fetchData();
  }, [artisanId]);

  if (loading) {
    return <div className="text-center p-8">Loading profile...</div>;
  }

  if (!session) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div>
      <Nav />
      <main className="container mx-auto p-4 max-w-4xl">
        {artisan ? (
          <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {artisan.name || "Artisan Profile"}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{artisan.service_type || ""}</p>
            <div className="flex items-center space-x-2 text-yellow-500 text-xl mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < Math.round(averageRating) ? "#FFD700" : "#E4E5E9"} />
              ))}
              <span className="text-gray-600 text-lg">
                ({averageRating}) - {reviewCount} reviews
              </span>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Customer Reviews
            </h2>
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center space-x-2 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color={i < review.rating ? "#FFD700" : "#E4E5E9"} />
                      ))}
                    </div>
                    <p className="text-gray-800 mt-2">{review.review_text}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      — {review.customers?.name || "Anonymous"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No reviews yet.</p>
            )}
          </div>
        ) : (
          <p className="text-center text-red-500 mt-8">Artisan profile not found.</p>
        )}
      </main>
    </div>
  );
}