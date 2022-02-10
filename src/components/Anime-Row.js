import React from 'react';
import './Anime-Row.css';
import AnimeViewer from './AnimeViewer';

export default ({title, items}) => {
    console.log(items);
    return(
        <div className='Anime-Row'> 
            <h2>{title}</h2>
            <div className='AnimeList--Canvas'>
                <div className='AnimeList'>
                    <AnimeViewer items={items}/>
                </div>
            </div>
        </div>
    )
}