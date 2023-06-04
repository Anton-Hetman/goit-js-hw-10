const div = document.querySelector('.cat-info');
const select = document.querySelector('select.breed-select');
const cssLoaders = document.querySelector('p.loader');
const notiflix = document.querySelector('p.error');

const URL_BREED = 'https://api.thecatapi.com/v1/breeds';
const URL_IMG = 'https://api.thecatapi.com/v1/images/';
const API =
  'live_RewMHWqsKPM7un9j0u0UWgDN64BJIT9mT6w8PeYAc2ce07njo9Jbutxu06LIAaDH';

function fetchCat(keyword) {
  const params = new URLSearchParams({
    apikey: API,
    keyword,
  });
  // console.log(params);
  return fetch(`${URL_BREED}?${params}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
fetchCat('cat');

function fetchBreeds(response) {
  fetchCat(response).then(data => {
    // renderSelect(data);
    const markup = data
      .map(({ cfa_url, name, description, temperament }) => {
        `<img src=${cfa_url} alt="${name}" width="400"/>< class="text-container"><p><span class="text">Breeds:</span> ${name}</p><p><span class="text">Description:</span> ${description}</p><p><span class="text">Temperament:</span> ${temperament}</p>`;
      })
      .join('');
    console.log(markup);
    return markup;
  });
}
fetchBreeds('cat');

function renderSelect(data) {
  const markup = data
    .map(({ id, name }) => {
      return ` <option value="${id}">${name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}
