import react from 'react';
import './SpotlightSlider.css';

export default ({item}) => {
    return(
        <div className='SpotlightSlider'>
            <div className='spotlightSlider--slider'>
                <div className='spotlightSlider--slider--canvas'>
                    <div className='spotlightSlider--slider--anime--background'>
                        <iframe width="800" height="450" src={(item) && item.data.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='spotlightSlider--slider--anime--vertical'></div>
                    <div className='spotlightSlider--slider--anime'>
                        <div className='spotlightSlider--slider--anime--title'>
                            {(item) && item.data.title}
                        </div>
                        <div className='spotlightSlider--slider--anime--rank'>
                            {(item) && `Rank: #${item.data.rank}`}
                        </div>
                        <div className='spotlightSlider--slider--anime--description'>
                            {(item) && item.data.synopsis}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}