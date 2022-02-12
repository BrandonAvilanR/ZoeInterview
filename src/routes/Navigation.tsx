import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './home/home';
import { Match } from './match/match';
import  ZoeLogo from '../images/ZoeLogo.png'
import { ZoeNav } from '../styles/components';

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <ZoeNav>
          <img src={ZoeLogo} alt="ZoeLogo" />
        </ZoeNav>
        <Routes>
          <Route path="match" element={<Match />} />
          <Route path="home" element={<Home />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}