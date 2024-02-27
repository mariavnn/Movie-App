const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params:{
        'api_key': API_KEY
    },
});

const getTrendingMoviesPreview = async () =>{
    const { data } = await api(`trending/movie/day`);
    const movies = data.results;

    console.log({data, movies});
    const swipeWrapperTrending = document.querySelector('.swiper-wrapper');
    let view = '';
    try{
        movies.forEach(movie => {
            view += `
            <div class="swiper-slide">
                <div class="img-peliculas">
                    <img
                    src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
                    class="img"
                    alt="Nombre de la película"
                    />
                </div>
                <div class="flex flex-col items-center space-y-1">
                    <p class="text-peliculas">${movie.title}</p>
                </div>
            </div>
            `;
        
            swipeWrapperTrending.innerHTML = view;
        });

    }catch(error){
        console.log(error);
    }
}

const getCategories = async () =>{
    const { data } = await api(`genre/movie/list`);
    const movies = data.results;

    const categories = data.genres;
    const swiperCategories = document-querySelector('');
    let view = '';
    try{
        categories.forEach(category =>{
            view += `
                <button class="button">
                    <h3 class="button-text">${category.name}</h3>
                </button>
            `;
            swiperCategories.innerHTML = view;
        });
    }catch(error){
        console.log(error);
    }
}

getTrendingMoviesPreview();
