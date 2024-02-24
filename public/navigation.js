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
    location.hash
}


function HomePage(){
    console.log('HOME!!!');

    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    categoriesPreviewSection.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');

    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategories();
}

function categoriesPage(){
    console.log('CATEGORIES!!!');
}

function moviesPage(){
    console.log('MOVIES!!!');
}

function searchPage(){
    console.log('SEARCH!!!');
}

function trendsPage(){
    console.log('TRENDS!!!');
}





