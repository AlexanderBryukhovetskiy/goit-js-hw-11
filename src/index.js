// all modules
import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';

import {refs} from './js/refs';

// console.log(refs);
// console.log(refs.searchForm);
// console.log(refs.input);
// console.log(refs.submitBtn);
// console.log(refs.list);
// console.log(refs.guarder);

refs.searchForm.addEventListener('submit', onSearch);

function onSearch (e) { 
    e.preventDefault();

    console.log("submit is work!");
}
