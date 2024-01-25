import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ noofstars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        console.log(currentIndex);
        setRating(currentIndex); // Optionally, you can update the rating state here
    }

    function handleMouseMove(currentIndex) {
        console.log(currentIndex);
        setHover(currentIndex); // Optionally, you can update the hover state here
    }

    function handleMouseLeave() {
        console.log('Mouse leave');
        setHover(0); // Optionally, you can reset the hover state here
    }

    function getRatingText() {
        switch (rating) {
            case 1:
                return 'Poor';
            case 2:
                return 'Good';
            case 3:
                return 'Best';
            case 4:
                return 'Excellent';
            case 5:
                return 'Outstanding';
            default:
                return '';
        }
    }

    return (
        <div className="star-rating">
            {[...Array(noofstars)].map((_, index) => {
                const currentIndex = index + 1;
                return (
                    <div
                        key={currentIndex}
                        onMouseMove={() => handleMouseMove(currentIndex)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(currentIndex)}
                        style={{ display: 'inline-block' }}
                    >
                        <FaStar
                            size={40}
                            color={currentIndex <= hover ? 'yellow' : 'gray'}
                        />
                    </div>
                );
            })}
            <h1>{rating > 0 ? `It is ${getRatingText()}` : ''}</h1>
        </div>
       
    );
}
