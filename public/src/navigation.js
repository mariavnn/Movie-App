trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
})

arrowBtn.addEventListener('click', () =>{
    location.hash = '#Home';
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        moviesPage();
    }else if(location.hash.startsWith('#category=')){
       categoriesPage();
    }else{
        HomePage();
    }
  
}


function HomePage(){
    console.log('HOME!!!');

    //SE MUESTRA EN LA INTERFAZ
    headerTitle.classList.remove('inactive');
    headerIcon.classList.remove('inactive');
    searchFormBtn.classList.remove('inactive');
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');

    //NO SE MUESTRA EN LA INTERFAZ
    arrowBtn.classList.add('inactive');
    searchForm.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    headerSubtitle.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategories();
}

function categoriesPage(){
    console.log('CATEGORIES!!!');

    genericSection.classList.remove('inactive');
    headerSubtitle.classList.remove('inactive');
    arrowBtn.classList.remove('inactive');
    
    searchForm.classList.add('inactive');
    headerIcon.classList.add('inactive');
    searchFormBtn.classList.add('inactive');
    headerTitle.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive'); 

    const [_, categoryData] = location.hash.split('='); //['#category', 'id_name']
    const [categoryId, categoryName] = categoryData.split('-');

    headerSubtitle.innerHTML = categoryName;

    getMoviesByCategories(categoryId);
}

function moviesPage(){
    console.log('MOVIES!!!');

    movieDetailSection.classList.remove('inactive'); 
    arrowBtn.classList.remove('inactive');
    //headerSection.style.background = '';

    searchForm.classList.add('inactive');
    headerIcon.classList.add('inactive');
    searchFormBtn.classList.add('inactive');
    headerTitle.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
}

function searchPage(){
    console.log('SEARCH!!!');


    arrowBtn.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    genericSection.classList.remove('inactive');
    headerSubtitle.classList.remove('inactive');
    //headerSection.style.background = '';

    headerIcon.classList.add('inactive');
    searchFormBtn.classList.add('inactive');
    headerTitle.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive'); 

    headerSubtitle.innerHTML = "Search Movie"
}


function trendsPage(){
    console.log('TRENDS!!!');
    
    arrowBtn.classList.remove('inactive');
    genericSection.classList.remove('inactive');
    headerSubtitle.classList.remove('inactive');
    //headerSection.style.background = '';

    headerIcon.classList.add('inactive');
    searchFormBtn.classList.add('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive'); 


    headerSubtitle.innerHTML = 'Trending';
}





