import './App.css';
import react, { useEffect, useState } from 'react';
import animedb from './animedb';
import AnimeRow from './components/Anime-Row'


export default () => {
  const [animesData, setAnimeData] = useState([]);

  useEffect(()=>{
    const load = async() =>{
      let dbanimes = await animedb.getHomeList();
      setAnimeData(dbanimes);
    }
    load();
  }, []);
  
  return (
    <div className='page'>
      <section className='anime-lists'>
        {animesData.map((item, key)=>(
          <AnimeRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}