import React from 'react';
import './Anime-Row.css';
import AnimeViewer from './AnimeViewer';

export default ({title, items}) => {
    //console.log(items);
    return(
        <div className='Anime-Row'> 
            <h2>{title}</h2>
            <span className='Anime--Title--Line'>
                <div className='Title--Line'></div>
            </span>
            <div className='AnimeList--Canvas'>
                <div className='AnimeList--List'>
                    {(items) && items.map((item, key)=>(
                        <AnimeViewer key={key} items={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}