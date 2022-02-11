const API_ROOT = 'https://api.jikan.moe/v4';

const basicFeth = async (endpoint) => {
    const req = await fetch(`${API_ROOT}${endpoint}`);
    const json = await req.json();
    setTimeout(() => {}, 500);
    return json;
}

export default {
	getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFeth(`/recommendations/anime`)
            },
			{
                slug: 'recent',
                title: 'Novos Episódios',
                items: await basicFeth(`/watch/episodes`)
            },
            {
                slug: 'toprated',
                title: 'Top-Rated',
                items: await basicFeth(`/top/anime`)
            },
        ]
    },
	getAnime: async (animeid) => {
		let item = await basicFeth(`/anime/${animeid}`);
        console.log(item);
		return item;
	},
    getRandomAnime: async () => {
		let item = await basicFeth(`/random/anime`);
        console.log(item);
		return item;
	},
    getRecomendedAnimes: async (number_of_recomendations) => {
        let anime_recomendations = [];
		let recomendations = await basicFeth(`/recommendations/anime`);
        console.log(recomendations);
        if(recomendations) for(let i=0; i<number_of_recomendations;i++){
            if(!recomendations.error){
                console.log(recomendations.data[0].entry[0].mal_id);
                let animeX = await basicFeth(`/anime/${recomendations.data[i].entry[0].mal_id}`);
                anime_recomendations.push(animeX);
            }else{
                continue;
            }
        };
        console.log(anime_recomendations);
		return anime_recomendations;
	}
}