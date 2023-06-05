import './css/index.css';
import { refs } from './js/refs';
import { catApi, breedId } from './js/cat_info';
import { fetchBreeds } from './js/cat-api';
import { breedSelection } from './js/breed_selection';

fetchBreeds(breedId).then(breedSelection);

function catInformations(data) {
  console.log(data);
  const markupOneCat = data
    .map(data => {
      return `<img src=${data.cfa_url} alt="${data.name}" width="400"/>< class="text-container"><p><span class="text">Breeds:</span> ${data.name}</p><p><span class="text">Description:</span> ${data.description}</p><p><span class="text">Temperament:</span> ${data.temperament}</p>`;
    })
    .join('');
  console.log(markupOneCat);
  // refs.catInfoDiv.innerHTML = '';
  refs.catInfoDiv.insertAdjacentHTML('beforeend', markupOneCat);
}

refs.select.addEventListener('change', function () {
  catApi(breedId).then(catInformations);
});
