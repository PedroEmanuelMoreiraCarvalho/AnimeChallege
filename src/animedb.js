const API_ROOT = 'https://api.jikan.moe/v4';

const basicFeth = async (endpoint) => {
    const req = await fetch(`${API_ROOT}${endpoint}`);
    const json = await req.json();
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
}