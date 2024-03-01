const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params:{
        'api_key': API_KEY
    },
});

// UTILS
/*
function createMovies(movies, container){
    container.innerHTML = '';

    movies.forEach(movie =>{
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path,
        );

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    })
}
*/

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
                <div class="movie-container">
                    <img
                    src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
                    class="movie-img"
                    alt="Nombre de la película"
                    />
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
    categoriesPreviewList.innerHTML = '';
    try{
        categories.forEach(category =>{
            const categoryBtn = document.createElement('button');
            const btnText = document.createElement('h3');
            btnText.textContent = category.name;
            btnText.classList.add('button-text');
            categoryBtn.classList.add('button');
            categoryBtn.addEventListener('click', () =>{
                location.hash = `#category=${category.id}-${category.name}`
            })
            
            categoryBtn.appendChild(btnText);
            categoriesPreviewList.appendChild(categoryBtn);
        });

    }catch(error){
        console.log(error);
    }
}

const getMoviesByCategories = async (id) =>{
    const {data} = await api('discover/movie',{
        params: {
            with_genres: id,
        },
    });

    const movies = data.results;
    try{
        createMovies(movies, genericSection);
    }catch (error){
        console.log(error);
    }
}

getTrendingMoviesPreview();

