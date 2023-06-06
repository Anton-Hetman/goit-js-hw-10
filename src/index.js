import './css/styles.css';
import { refs } from './js/refs';
import { fetchBreeds } from './js/fetchBreeds';
import { selectBreed } from './js/breadSelect';
import { fetchCatByBreed } from './js/cat-api';
import { markupOneCat } from './js/markupOneCat';

import Notiflix from 'notiflix';
fetchBreeds('cat')
  .then(selectBreed)
  .then(optionContent)
  .finally(() => {
    Notiflix.Loading.remove();
  });
refs.breedSelect.addEventListener('change', selectCatByBreed);

function selectCatByBreed(evt) {
  const breedId = refs.breedSelect.value;

  const markup = fetchCatByBreed(breedId)
    .then(markupOneCat)
    .then(optionOneCat)
    .finally(() => {
      Notiflix.Loading.remove();
    });
}

function optionOneCat(markup) {
  refs.catInfo.innerHTML = markup;
}
function optionContent(markup) {
  refs.breedSelect.insertAdjacentHTML('beforeend', markup);
}
