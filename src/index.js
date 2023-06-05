import { refs } from './js/refs';
import { catApi } from './js/cat_info';
import { fetchBreeds } from './js/cat-api';
import { breedSelection } from './js/breed_selection';

fetchBreeds('cat').then(breedSelection);

const searchCat = catApi(refs.select.value)
  .then(catInformations)
  .then(innerCat);

function catInformations(data) {
  const markupOneCat = data
    .map(data => {
      return `<img src=${data.cfa_url} alt="${data.name}" width="400"/>< class="text-container"><p><span class="text">Breeds:</span> ${data.name}</p><p><span class="text">Description:</span> ${data.description}</p><p><span class="text">Temperament:</span> ${data.temperament}</p>`;
    })
    .join('');
  // refs.catInfo.insertAdjacentHTML('beforeend', markupOneCat);

  return markupOneCat;
}

function innerCat(markupOneCat) {
  refs.catInfo.innerHTML = `${markupOneCat}`;
  // const insert = refs.catInfo.insertAdjacentHTML('beforeend', markupOneCat);
}
refs.select.addEventListener('change', searchCat);
