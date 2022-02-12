import './App.css';
import react, { useEffect, useState } from 'react';
import animedb from './animedb';
import AnimeRow from './components/Anime-Row'
import SpotlightSlider from './components/SpotlightSlider';


export default () => {
  const [animesData, setAnimeData] = useState([]);
  const [animesRecomendation, setAnimesRecomendation] = useState([]);
  const [animesRand, setAnimeRand] = useState([]);
  const [animeSpotlight, setAnimeSpotlight] = useState();

  useEffect(()=>{
    const load = async() =>{
      let numberOfAnimes = 28;
      let randAnime = [];
      
      let anime_spot = await animedb.getRandomAnime();
      setAnimeSpotlight(anime_spot);
      
      let recomendations = await animedb.getRecomendedAnimes(7);
      setAnimesRecomendation(recomendations);

      for(let i=0;i<numberOfAnimes;i++){ 
        let animeR = await animedb.getRandomAnime();
        randAnime.push(animeR);
        console.log(animeR);
      }
      setAnimeRand(randAnime);

      let dbanimes = await animedb.getHomeList();
      setAnimeData(dbanimes);
    }
    load();
  }, []);
  return (
    <div className='page'>
      <main>
        <SpotlightSlider item={animeSpotlight}/>
        <section className='anime-lists'>
          <AnimeRow title='Recomendados' items={animesRecomendation}/>
          <AnimeRow title='Animes' items={animesRand}/>
        </section>
      </main>
    </div>
  );
}