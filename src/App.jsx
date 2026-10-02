import { useState, useEffect } from 'react';
import { CONFIG } from './config';
import CursorTrail from './components/CursorTrail';
import BackgroundEffects from './components/BackgroundEffects';
import PasswordScreen from './components/PasswordScreen';
import OpeningScreen from './components/OpeningScreen';
import Section1Birthday from './components/Section1Birthday';
import Section2Timeline from './components/Section2Timeline';
import Section3Letter from './components/Section3Letter';
import Section4Gallery from './components/Section4Gallery';
import Section5Gifts from './components/Section5Gifts';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [started, setStarted] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    // If no password in config, auto authenticate
    if (!CONFIG.password) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleUnlock = () => setIsAuthenticated(true);
  const handleStart = () => setStarted(true);
  const handleFinishGifts = () => setShowFinal(true);

  return (
    <>
      <CursorTrail />
      <BackgroundEffects />
      {isAuthenticated && <MusicPlayer />}
      
      {!isAuthenticated ? (
        <PasswordScreen onUnlock={handleUnlock} />
      ) : !started ? (
        <OpeningScreen onStart={handleStart} />
      ) : showFinal ? (
        <FinalSurprise />
      ) : (
        <div className="main-content fade-in">
          <Section1Birthday />
          <Section2Timeline />
          <Section3Letter />
          <Section4Gallery />
          <Section5Gifts onComplete={handleFinishGifts} />
        </div>
      )}
    </>
  );
}

export default App;
