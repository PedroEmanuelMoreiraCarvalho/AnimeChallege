import react from 'react';
import './AnimeViewer.css';

export default ({items}) => {
    let genres = [];
    if(items && items.data.genres){
        for(let i in items.data.genres){
            if(items.data.genres[i].name) genres.push(items.data.genres[i].name);
        }
    }
    return(
        <div className='animeViewer'>
            <div className='anime--canvas' style={{
                backgroundSize:'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${(items)&&items.data.images.jpg.image_url})`
            }}> 
                <div className='anime--canvas--vertical'>
                    <div className='anime--title'>
                        {(items) && items.data.title}
                    </div>
                    <div className='anime--genres'>
                        {genres.length ? `Gêneros: ${(items) && genres.join(', ')}` : ` `}
                    </div>
                </div>
            </div>
            <div className='animeViewer--collapse'>
                <div className='animeViewer--collapse--description'>
                    <h3>
                        {(items) && items.data.title_synonyms[0] ? items.data.title_synonyms[0] : items.data.title}
                        <br/>
                    </h3>
                    <h3>
                        {(items) && `Episódios: ${items.data.episodes}`}
                    </h3>
                    <h3>
                        {(items) && items.data.year ? `Ano: ${items.data.year}` : ' '}
                    </h3>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h3>
                </div>
                <div className='animeViewer--collapse--avaliation'>
                    {(items) && `Score: ${items.data.score}`}
                </div>
            </div>
        </div>
    )
}