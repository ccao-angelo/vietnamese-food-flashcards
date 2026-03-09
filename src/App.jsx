import React , {useState, useEffect, useCallback } from 'react';
import Confetti from 'react-confetti';
import Flashcard from './Flashcard.jsx';
import { flashcardsData } from './data';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [seenCards, setSeenCards] = useState(new Set([0]));
  const [isFlipped, setIsFlipped] = useState(false);
  const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight});

  // Track window size for correct confetti placement
  const detectSize = () => {
    setWindowDimension({width: window.innerWidth, height: windowDimension.innerHeight});
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    }
  }, [windowDimension]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleNextCard = useCallback(() => {
    setHistory(prevHistory => [...prevHistory, currentIndex]);

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcardsData.length);
    } while (newIndex === currentIndex);

    setCurrentIndex(newIndex);
    setSeenCards(prev => new Set(prev).add(newIndex));
  }, [currentIndex]);

  const handlePrevCard = useCallback(() => {
    if (history.length === 0) return;

    const previousIndex = history[history.length - 1];

    setHistory(prev => prev.slice(0, -1));

    setCurrentIndex(previousIndex);
  }, [history]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNextCard();
      } else if (e.key === "ArrowLeft") {
        handlePrevCard();
      } else if (e.code === "Space") {
        e.preventDefault();
        handleFlip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return() => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextCard, handlePrevCard]);

  // Calculate Progress
  const totalCards = flashcardsData.length;
  const progressPercentage = (seenCards.size / totalCards) * 100;
  const isAllLearned = seenCards.size === totalCards;

  return (
    <div className="app-container">
      {isAllLearned && <Confetti width={windowDimension.width} height={windowDimension.height} />}

      <header>
        <h1 className="title-text">🇻🇳 Vietnamese Food Flashcards 🍜</h1>
        
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-label">Total Cards</span>
            <span className="stat-value">{flashcardsData.length}</span>
          </div>
          <div className="divider">|</div>
          <div className="stat-box">
            <span className="stat-label">Unique Seen</span>
            <span className="stat-value">{seenCards.size}</span>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        <p className="subtitle">
          <span className="desktop-hint">Press <strong>← Arrow Keys →</strong> to navigate | <strong>Space</strong> to flip</span>
          <span className="mobile-hint">Tap card to flip</span>
        </p>
      </header>

      <main className="card-scene">
        <Flashcard
          key={flashcardsData[currentIndex].id}
          data={flashcardsData[currentIndex]}
        />
      </main>

      <div className="controls">
        <button
          className="secondary-btn"
          onClick={handlePrevCard}
          disabled={history.length === 0}
        >
          ← Previous
        </button>  
        <button className="primary-btn" onClick={handleNextCard}>
          Next Random Card →
        </button>
      </div>
    </div>
  );
}

export default App;