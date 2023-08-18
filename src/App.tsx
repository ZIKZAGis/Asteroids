import React, { FC, useEffect, useState } from 'react';
import styles from './App.module.scss'

const URL = 'https://api.nasa.gov'
const API_KEY = 'iDzOJrUi4qXVnk7r204S0pGDrqhp9sERcCZZnEHz'

type Data = {
  url: string
  date: string
  title: string
  explanation: string
}

const App: FC = () => {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch(`${URL}/planetary/apod?api_key=${API_KEY}`).then(res => res.json()).then(data => setData(data))
  }, [])
  
  return (
    <div className={styles.app}>
      <h1>
        Asteroids
      </h1>
      {data && 
        <div>
          <img src={data.url} alt="" />
          <p>{data.date}</p>
          <h2>{data.title}</h2>
          <h3>{data.explanation}</h3>
        </div>
      }
    </div>
  );
}

export default App;
