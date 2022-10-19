import {refs} from './refs';

import { emptyMarkup } from "./markupFunctions";  //  рендер пустої розмітки
import Notiflix from "notiflix";


/* ===================== ПЕРЕПИСАТЬ ПОД ТЕКУЩИЙ ПРОЕКТ  ===============

const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name){

    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {

            if (!response.ok || response.status === 404) {
                throw new Error();
            }
            return response.json();
        })
        .catch(error => {
            
            Notiflix.Notify.failure('Oops, there is no country with that name', emptyMarkup());
            console.log(error);
        })
}

*/