import {refs} from './refs';
import { emptyMarkup } from "./markupFunctions";  //  рендер пустої розмітки
import Notiflix from "notiflix";
const axios = require('axios').default;


export function getPictures(params){
    
    const URL = 'https://pixabay.com/api/';
    const KEY = '30822963-d0fd13470d1d847e8cb7d7e51';
    const  searchName = refs.input.value.trim();

    if (searchName === '') { 
        Notiflix.Notify.info('Sorry, search query can not be empty. Please try again.', emptyMarkup());
        return
    }
    
    const response = axios.get(`${URL}?key=${KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true`)

    .then( response => {
        if ( !response.ok || response.data.totalHits <= 0 || response.status === 404) {
            emptyMarkup();
            throw new Error();
        }

        return response;   
    })

    .catch(error => {     

    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.', emptyMarkup());
    
    console.log(error);
    })
    
    return response;
    /*
        .then(response => {

            if (!response.ok || response.status === 404) {
                throw new Error();
            }
            return response.json();
        })
        .catch(error => {
            
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.', emptyMarkup());
            console.log(error);
        })
        */
}