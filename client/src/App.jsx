import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '/src/pages/Home';
import Movies from '/src/pages/Movies';
import MovieDetails from '/src/pages/MovieDetails';
import SeatLayout from '/src/pages/SeatLayout';
import MyBookings from '/src/pages/MyBookings';
import Favorite from '/src/pages/Favorite';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/favorite' element={<Favorite/>} />
      </Routes>
    </>
  )
}

export default App;