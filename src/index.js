// all modules

import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';

import {refs} from './js/refs';

const axios = require('axios').default;

refs.searchForm.addEventListener('submit', onSearch);

function onSearch (e) { 
    e.preventDefault();

   // refs.insure();

    console.log("submit is work!");
}
