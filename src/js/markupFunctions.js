
import { refs } from './refs';

export function emptyMarkup () {
    refs.list.innerHTML = '';
}

/* ===================== ПЕРЕПИСАТЬ ПОД ТЕКУЩИЙ ПРОЕКТ  ===============
*/
export function renderMarkup (response) {
    console.log('it is responce.data.hits inside renderMarkup(): ', response.data.hits);

    const responseArray = response.data.hits;
    
    const markup = responseArray.reduce((acc, {webformatURL, largeImageURL, tags, likes, views, comments, downloads } = picture) => 
    acc + ` <div class="photo-card">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                <p class="info-item">
                    <b>Likes</b> ${likes}
                </p>
                <p class="info-item">
                    <b>Views</b> ${views}
                </p>
                <p class="info-item">
                    <b>Comments</b> ${comments}
                </p>
                <p class="info-item">
                    <b>Downloads</b> ${downloads}
                </p>
                </div>
            </div>`, "");
    return markup;
}

//-----------------------------------------------------------
/*
export function renderFullInfoMarkup (countries) {
    const singleMarkup = ({name, capital, flags, population, languages} = countries[0]) => {
        // console.log('name : ', name); console.log('capital : ', capital);
        // console.log('flags : ', flags); 
        // console.log('population : ', population);
        // console.log('languages : ', languages);

        //  ===== розпаковуємо усі мови з об'єкта languages: ======
        // цей вираз відразу додано в розмітку нижче
        // const allLanguages = Object.values(languages).join(', '); 
        // console.log("Languages in this country: ", allLanguages);
        
        const fullCountryInfoMarkup = 
        `<div class="country-card">
            <div class="flag-and-name">
                <img class="flag" src="${flags.svg}" alt="${name.official}" width="80" height="auto" />
                <h2 class="country-name">${name.official}</h2>
            </div>
            
            <ul class="list additional-info">
                <li class="info-item">
                    <h3 class="info-name"> Capital: </h3> 
                    <h3 class="info-value"> 
                    ${capital}</h3>
                </li>
                <li class="info-item"> 
                    <h3 class="info-name"> Population: </h3>
                    <h3 class="info-value"> 
                    ${population}</h3>
                </li>
                <li class="info-item">
                    <h3 class="info-name"> Languages:</h3>
                    <h3 class="info-value">
                    ${Object.values(languages).join(', ')}</h3>
                </li>
            </ul>
        </div>`;
        //console.log('fullCountryInfoMarkup : ', fullCountryInfoMarkup);
        
        return fullCountryInfoMarkup;
    }

    return singleMarkup();
    */
