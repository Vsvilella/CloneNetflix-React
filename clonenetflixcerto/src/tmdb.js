const API_KEY = 'bcda148ba0f408451b1c4a344ec90847';
const API_BASE = 'https://api.themoviedb.org/3';

/*
Originais netflix
recomendados (trending)
em alta (top rated)
ação
comedia
terror
romance
documentário
*/

export default{
    getHomeList: async() => {
        return[
            {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: []
        },

        
    ];
    }
}