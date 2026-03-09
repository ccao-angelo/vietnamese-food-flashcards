import React, { useState } from 'react';
import './App.css';

function Flashcard({ data }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>

            <div className="card-face card-front">
                {data.frontType === 'image' ? (
                    <div className="image-container">
                        <img src={data.front} alt="Food" />
                        <h3 className="overlay-text">{data.name}</h3>
                    </div>
                ) : (
                    <h2>{data.front}</h2>
                )}
                <div className="instruction">Click to flip ↓</div>
            </div>

            <div className={`card-face card-back ${data.category}`}>
                <div className="header-row">
                    <span className="badge">{data.category}</span>
                    <span className="region">{data.back.region}</span>
                </div>

                <h3>{data.frontType === "image" ? data.name : data.front}</h3>
                <p className="description">{data.back.description}</p>

                <div className="info-chunk">
                    <strong>Ingredients:</strong>
                    <p>{data.back.ingredients}</p>
                </div>

                <div className="tip-box">
                    <em>Tip: {data.back.tip}</em>
                </div>
            </div>

        </div>
    );
}

export default Flashcard;