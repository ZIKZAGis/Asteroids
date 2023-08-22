import styles from './App.module.scss'
import Navigation from './components/navigation/Navigation';
import { Route, Routes } from 'react-router';
import Apod from './pages/apod_page/Apod';
import AsteroidsPage from './pages/asteroids_page/AsteroidsPage';

// const URL = 'https://api.nasa.gov'
// const API_KEY = 'iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz'

const App= () => {
  return (
    <div className={styles.app}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<AsteroidsPage/>}/>
        <Route path="/apod" element={<Apod/>}/>
      </Routes>
    </div>
  );
}

export default App;
