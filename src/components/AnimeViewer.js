import react from 'react';
import './AnimeViewer.css';

export default ({items}) => {
    let genres = [];
    if(items){
        console.log(items.data.genres[0].name);
        for(let i in items.data.genres){
            genres.push(items.data.genres[i].name);
        }
    }
    return(
        <div className='animeViewer'>
            <div className='anime--canvas' style={{
                backgroundSize:'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${(items)&&items.data.images.jpg.image_url})`
            }}> 
                <div className='anime--title'>
                    {(items) && items.data.title}
                </div>
                <div className='anime--genres'>
                    Gêneros: {(items) && (genres) && genres.join(', ')}
                </div>
            </div>
        </div>
    )
}