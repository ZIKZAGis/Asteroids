import React, {useEffect, useState } from 'react';
import styles from './App.module.scss'
import Navigation from './components/navigation/Navigation';
import { Route, Routes } from 'react-router';
import Apod from './pages/apod_page/Apod';
import AsteroidsPage from './pages/asteroids_page/AsteroidsPage';
import { ApodType } from './types/types';

const URL = 'https://api.nasa.gov'
const API_KEY = 'iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz'

const App= () => {
  const [apod, setApod] = useState<ApodType>({
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: ''
  })

  useEffect(() => {
    fetch(`${URL}/planetary/apod?api_key=${API_KEY}`).then(res => res.json())
      .then(data => {
        setApod(data)
      })
  }, [])
  
  return (
    <div className={styles.app}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<AsteroidsPage/>}/>
        <Route path="/apod" element={<Apod data={apod}/>}/>
      </Routes>
    </div>
  );
}

export default App;
