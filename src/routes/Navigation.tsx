import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './home/Home';
import { Match } from './match/Match';
import  ZoeLogo from '../images/ZoeLogo.png'
import { ZoeNav } from '../styles/SharedComponents';

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