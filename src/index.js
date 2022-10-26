// all modules

import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
const axios = require('axios').default;

import { refs } from './js/refs';
import { emptyMarkup, renderMarkup } from './js/markupFunctions';

// import { getPictures } from './js/searchFunction'

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch (event) { 
      event.preventDefault();

      const URL = 'https://pixabay.com/api/';
      const KEY = '30822963-d0fd13470d1d847e8cb7d7e51';
      const searchName = refs.input.value.trim();

      let markup = '';

      if (searchName === '') { 
        Notiflix.Notify.info('Sorry, search query can not be empty. Please try again.', emptyMarkup());
        return
      }
      //console.log('searchName (before axios.get-request): ', searchName);

      const response = await axios.get(`${URL}?key=${KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true`)
      //-------------
      .then(response => {

        if ( response.data.totalHits > 0 ) {

          console.log('response:  ', response);
          console.log('response.data.totalHits  = ' , response.data.totalHits);

          markup = renderMarkup(response);

          //console.dir(markup);

          refs.list.innerHTML = markup;
          

        }       

        else {
          emptyMarkup();
          throw new Error();
        }
      })

      .catch(error => {     

        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.', emptyMarkup());
        
         console.log(error);
      })
    
}
