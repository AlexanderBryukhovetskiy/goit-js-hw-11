// all modules

import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
const axios = require('axios').default;

import { refs } from './js/refs';
import { emptyMarkup, renderMarkup } from './js/markupFunctions';

// import { getPictures } from './js/searchFunction'

const URL = 'https://pixabay.com/api/';
const KEY = '30822963-d0fd13470d1d847e8cb7d7e51';

let page = 1;

refs.loadMoreBtn.hidden = true;

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch (event) { 
    event.preventDefault();

    const searchName = refs.input.value.trim();
    
    let markup = '';

    if (searchName === '') { 
        Notiflix.Notify.info('Sorry, search query can not be empty. Please try again.', emptyMarkup());
        return
    }
    //console.log('searchName (before axios.get-request): ', searchName);

    try {
        const response = await axios.get(`${URL}?key=${KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)
        
        if ( response.data.totalHits > 0 ) {

            // console.log('response:  ', response);
            // console.log('response.data.totalHits  = ' , response.data.totalHits);

            markup = renderMarkup(response);
            refs.list.innerHTML = markup;
        }       

        else {
            emptyMarkup();
            throw new Error();
        }
    }
    catch (error)  {     

            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.', emptyMarkup());
            
            console.log(error);
    }
    
    refs.loadMoreBtn.hidden = false;
    refs.loadMoreBtn.addEventListener('click', onLoadMore);
}

async function onLoadMore () {
    page += 1;

    const searchName = refs.input.value.trim();

    const response = await axios.get(`${URL}?key=${KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
    
    markup = renderMarkup(response, page);
    refs.list.insertAdjacentHTML('beforeend', markup);
}
