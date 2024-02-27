
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

    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    arrowBtn.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive'); 

    getTrendingMoviesPreview();
    getCategories();
}

function categoriesPage(){
    console.log('CATEGORIES!!!');

    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    arrowBtn.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive'); 
}

function moviesPage(){
    console.log('MOVIES!!!');

    headerTitle.classList.add('inactive');
    //headerSection.style.background = '';
    headerCategoryTitle.classList.add('inactive');
    arrowBtn.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive'); 
}

function searchPage(){
    console.log('SEARCH!!!');
    
    headerTitle.classList.add('inactive');
    //headerSection.style.background = '';
    headerCategoryTitle.classList.add('inactive');
    arrowBtn.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive'); 
}


function trendsPage(){
    console.log('TRENDS!!!');

    headerTitle.classList.add('inactive');
    //headerSection.style.background = '';
    headerCategoryTitle.classList.add('inactive');
    arrowBtn.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive'); 
}




