import React, { useState, useRef, useEffect } from "react";

interface Track {
  title: string;
  src: string;
}

// ==========================================
// PASTE YOUR MP3 PATHS & SONG TITLES HERE!
// Put your .mp3 files in: public/music/
// ==========================================
const PLAYLIST: Track[] = [
  {
    title: "Food, Glorious Food",
    src: "/music/song1.mp3",
  },
  {
    title: "Warm Winter Jazz",
    src: "/music/song2.mp3",
  },
];

export const CafeMusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.log("Waiting for valid MP3 file or user interaction:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrev = () => {
    const audio = audioRef.current;
    // Restart current song if more than 3 seconds in; otherwise go to previous song
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handleEnded = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  return (
    <>
      <style>{`
        @import url('https://googleapis.com');

        @keyframes spinCoffeeDisc {
          100% { transform: rotate(360deg); }
        }

        .cafe-player-bar {
          position: sticky;
          top: 0;
          z-index: 9999;
          background: linear-gradient(135deg, #f7ede2 0%, #ebd9c8 100%);
          border-bottom: 3px solid #c89f7c;
          box-shadow: 0 4px 12px rgba(74, 44, 24, 0.12);
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-family: 'Quicksand', sans-serif;
          color: #4a2c18;
        }

        .cafe-track-info {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 200px;
        }

        .coffee-disc {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: radial-gradient(circle, #f5ebe0 22%, #6f4e37 25%, #4a2c18 100%);
          border: 2px solid #8b5a2b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          box-shadow: 0 2px 6px rgba(74, 44, 24, 0.25);
          user-select: none;
        }

        .coffee-disc.spinning {
          animation: spinCoffeeDisc 4s linear infinite;
        }

        .track-text {
          display: flex;
          flex-direction: column;
        }

        .track-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #8b5a2b;
          font-weight: 700;
        }

        .track-title {
          font-size: 15px;
          font-weight: 700;
          color: #3e2212;
        }

        .cafe-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cute-btn {
          background-color: #fffaf5;
          border: 2px solid #b08057;
          color: #5c3a21;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 3px 0 #b08057;
          transition: all 0.15s ease;
          padding: 0;
        }

        .cute-btn:hover {
          background-color: #f3e3d3;
          transform: translateY(-2px);
          box-shadow: 0 5px 0 #b08057;
        }

        .cute-btn:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #b08057;
        }

        .cute-btn.play-btn {
          width: 48px;
          height: 48px;
          background-color: #6f4e37;
          border-color: #4a2c18;
          color: #fffaf5;
          box-shadow: 0 4px 0 #4a2c18;
        }

        .cute-btn.play-btn:hover {
          background-color: #835d42;
          box-shadow: 0 6px 0 #4a2c18;
        }

        .cute-btn.play-btn:active {
          box-shadow: 0 1px 0 #4a2c18;
        }

        @media (max-width: 600px) {
          .cafe-player-bar {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      <div className="cafe-player-bar">
        {/* Song Info */}
        <div className="cafe-track-info">
          <div className={`coffee-disc ${isPlaying ? "spinning" : ""}`}>☕</div>
          <div className="track-text">
            <span className="track-label">Bakery Radio</span>
            <span className="track-title">{currentTrack.title}</span>
          </div>
        </div>

        {/* Cute Rewind, Play/Pause, Skip Buttons */}
        <div className="cafe-controls">
          <button
            type="button"
            className="cute-btn"
            onClick={handlePrev}
            title="Previous Song"
            aria-label="Previous Song"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <button
            type="button"
            className="cute-btn play-btn"
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="cute-btn"
            onClick={handleNext}
            title="Next Song"
            aria-label="Next Song"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleEnded}
          preload="metadata"
        />
      </div>
    </>
  );
};

export default CafeMusicPlayer;
