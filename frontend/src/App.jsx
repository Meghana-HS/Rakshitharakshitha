import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import MusicProvider for global music
import MusicProvider from './components/MusicProvider';

// Import all components
import IntroScreen from './components/IntroScreen';
import GeneralIntro from './components/GeneralIntro';
import GeneralDisplay from './components/GeneralDisplay';
import TraditionalIntro from './components/TraditionalIntro';
import TraditionalDisplay from './components/TraditionalDisplay';
import FriendsIntro from './components/FriendsIntro';
import FriendsDisplay from './components/FriendsDisplay';
import SisterIntro from './components/SisterIntro';
import SisterDisplay from './components/SisterDisplay';
import FinalSurprise from './components/FinalSurprise';
import FinalMessage from './components/FinalMessage';
import GalleryPhotos from './components/GalleryPhotos';
import CinematicSlideshow from './components/CinematicSlideshow';
import RSeriesDisplay from './components/RSeriesDisplay';
import ModSeriesDisplay from './components/ModSeriesDisplay';
import BestiiSeriesDisplay from './components/BestiiSeriesDisplay';
import FamSeriesDisplay from './components/FamSeriesDisplay';
import FSeriesDisplay from './components/FSeriesDisplay';
import VedSeriesDisplay from './components/VedSeriesDisplay';
import BirthdayIntro from './components/BirthdayIntro';

function App() {
  return (
    <MusicProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<IntroScreen />} />
            <Route path="/birthday-intro" element={<BirthdayIntro />} />
            <Route path="/general-intro" element={<GeneralIntro />} />
            <Route path="/general-display" element={<GeneralDisplay />} />
            <Route path="/traditional-intro" element={<TraditionalIntro />} />
            <Route path="/traditional-display" element={<TraditionalDisplay />} />
            <Route path="/friends-intro" element={<FriendsIntro />} />
            <Route path="/friends-display" element={<FriendsDisplay />} />
            <Route path="/sister-intro" element={<SisterIntro />} />
            <Route path="/sister-display" element={<SisterDisplay />} />
            <Route path="/final-surprise" element={<FinalSurprise />} />
            <Route path="/final-message" element={<FinalMessage />} />
            <Route path="/gallery-photos" element={<GalleryPhotos />} />
            <Route path="/cinematic-slideshow" element={<CinematicSlideshow />} />
            <Route path="/r-series" element={<RSeriesDisplay />} />
            <Route path="/mod-series" element={<ModSeriesDisplay />} />
            <Route path="/bestii-series" element={<BestiiSeriesDisplay />} />
            <Route path="/fam-series" element={<FamSeriesDisplay />} />
            <Route path="/f-series" element={<FSeriesDisplay />} />
            <Route path="/ved-series" element={<VedSeriesDisplay />} />
          </Routes>
        </div>
      </Router>
    </MusicProvider>
  );
}

export default App;