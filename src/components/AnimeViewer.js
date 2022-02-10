import react from 'react';
import './AnimeViewer.css';

export default ({items}) => {
    let genres = [];
    if(items){
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
        </div>
    )
}