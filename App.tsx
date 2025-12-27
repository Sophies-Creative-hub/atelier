import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import About from './pages/About';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  return (
    <BookingProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
        <BookingModal />
      </HashRouter>
    </BookingProvider>
  );
};

export default App;