import {refs} from './refs';
import { emptyMarkup } from "./markupFunctions";  //  рендер пустої розмітки
import Notiflix from "notiflix";
const axios = require('axios').default;




/* ===================== ПЕРЕПИСАТЬ ПОД ТЕКУЩИЙ ПРОЕКТ  ===============
https://pixabay.com/api/?key=30822963-d0fd13470d1d847e8cb7d7e51&q=yellow+flowers&image_type=photo

image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
orientation - орієнтація фотографії. Постав значення horizontal.
safesearch - фільтр за віком. Постав значення true.
*/



export function getPictures(){
    
    const URL = 'https://pixabay.com/api/';
    const KEY = '30822963-d0fd13470d1d847e8cb7d7e51';
    const  searchName = refs.input.value.trim();

    if (searchName === '') { 
        Notiflix.Notify.info('Sorry, search query can not be empty. Please try again.', emptyMarkup());
        return
    }
    
    const respData = axios.get(`${URL}?key=${KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true`)

    .then( response => {
        if ( response.data.totalHits <= 0 ) {
            emptyMarkup();
            throw new Error();
        // if ( response.data.totalHits > 0 ) {

        //   console.log('response:  ', response);
        //   console.log('response.data.totalHits  = ' , response.data.totalHits);

        // }       

        // else {
        //   emptyMarkup();
        //   throw new Error();
        // }
        }
    })

    .catch(error => {     

    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.', emptyMarkup());
    
        console.log(error);
    })
    
    return respData;
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