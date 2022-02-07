import React from 'react';
import './Anime-Row.css';

export default ({title, items}) => {
    console.log(items.data);
    return(
        <div className='Anime-Row'> 
            <h2>{title}</h2>
            <div className='AnimeList--Canvas'>
                <div className='AnimeList'>
                    {items.data.length>0 && items.data.map((item, key)=>(
                        <div key={key} className='AnimeList--items'>
                            <h3>{item.entry.shift().title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}