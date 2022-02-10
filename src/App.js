import './App.css';
import react, { useEffect, useState } from 'react';
import animedb from './animedb';
import AnimeRow from './components/Anime-Row'


export default () => {
  const [animesData, setAnimeData] = useState([]);
  const [animesRand, setAnimeRand] = useState();

  useEffect(()=>{
    const load = async() =>{
      let randAnime = await animedb.getRandomAnime();
      setAnimeRand(randAnime);
      let dbanimes = await animedb.getHomeList();
      setAnimeData(dbanimes);
    }
    load();
  }, []);
  
  return (
    <div className='page'>
      <section className='anime-lists'>
        <AnimeRow title='animes' items={animesRand}/>
      </section>
    </div>
  );
}