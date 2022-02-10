import './App.css';
import react, { useEffect, useState } from 'react';
import animedb from './animedb';
import AnimeRow from './components/Anime-Row'


export default () => {
  const [animesData, setAnimeData] = useState([]);
  const [animesRecomendation, setAnimesRecomendation] = useState([]);
  const [animesRand, setAnimeRand] = useState([]);

  useEffect(()=>{
    const load = async() =>{
      let numberOfAnimes = 28;
      let randAnime = [];

      for(let i=0;i<numberOfAnimes;i++){ 
        let animeR = await animedb.getRandomAnime();
        randAnime.push(animeR);
      }
      setAnimeRand(randAnime);

      let recomendations = await animedb.getRecomendedAnimes(7);
      setAnimesRecomendation(recomendations);

      let dbanimes = await animedb.getHomeList();
      setAnimeData(dbanimes);
    }
    load();
  }, []);
  return (
    <div className='page'>
      <section className='anime-lists'>
        <AnimeRow title='Recomendados' items={animesRecomendation}/>
        <AnimeRow title='Animes' items={animesRand}/>
      </section>
    </div>
  );
}