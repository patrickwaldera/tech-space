import { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md"
import { StarsContainer } from "./styles"

const StarRating = ({ratingStars}) => {
    
    const [rating, setRating] = useState(ratingStars || 0);

    useEffect(() => {
       setRating(ratingStars);
    }, [ratingStars])
    

    let stars = [];
    for (let i = 0; i < 5; i++) {
        let className;
        if (i < rating) {
            className = 'star-filled';
        } else {
            className = 'star-empty';
        }
        stars.push(
        <MdStarRate
            key={i}
            className={`star-icon ${className}`}
        />
        );

    }
    return (
        <StarsContainer>
            {stars}
        </StarsContainer>
    )
}

export { StarRating }
