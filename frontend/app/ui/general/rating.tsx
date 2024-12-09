import { Star } from "lucide-react";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center space-x-0 cursor-pointer">
      {Array.from({ length: 5 }).map((_, index: number) => {
        // Determine fill color based on rating
        let fillColor = "gray"; // Default color for empty stars
        if (rating >= index + 1) {
          fillColor = "red"; // Fully filled star
        } else if (rating > index && rating < index + 1) {
          fillColor = "url(#halfFill)"; // Half-filled star
        }

        return (
          <svg
            key={index}
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="star-icon"
          >
            {/* Linear gradient for half-filled stars */}
            <defs>
              <linearGradient id="halfFill">
                <stop offset="50%" stopColor="red" />
                <stop offset="50%" stopColor="gray" />
              </linearGradient>
            </defs>
            <Star fill={fillColor} stroke={fillColor} size={14} />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
