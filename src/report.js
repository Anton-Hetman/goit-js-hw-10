const div = document.querySelector('.cat-info');
const select = document.querySelector('select.breed-select');
const cssLoaders = document.querySelector('p.loader');
const notiflix = document.querySelector('p.error');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API =
  'live_RewMHWqsKPM7un9j0u0UWgDN64BJIT9mT6w8PeYAc2ce07njo9Jbutxu06LIAaDH';

// пошук на сайті по ключу-кіт
function fetchCat(keyword) {
  const params = new URLSearchParams({
    apikey: API,
    keyword,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

//---------------------

// Знайшли котів
function getCat(response) {
  fetchCat(response).then(data => {
    renderSelect(data);
  });
}
getCat('cat');

// ---------------
// Отримаємо опції в селекті
// рендер
function renderSelect(data) {
  const markup = data
    .map(({ id, name }) => {
      return ` <option value="${id}">${name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}

const selectListen = select.addEventListener('change', setOutput);

function setOutput(dataCat) {
  const { cfa_url, name, description, temperament } = div.textContent;
  console.log(div.textContent);

  console.log(markupInfo);
  div.innerHTML = '';
  div.insertAdjacentHTML('beforeend', markupInfo);
  console.log(markupInfo);
}

//   // const { cfa_url, name, description } = value;
//   // const selectedOptionValue = data.map({ cfa_url, name }) => {
//   //   return ("!!!!1")
// console.log('adawd');

// / const markupInfo = dataCat
//   .map(({ cfa_url, name, description, temperament }) => {
//     return `<img src=${cfa_url} alt="${name}" width="400"/><div class="text-container"><p><span class="text">Breeds:</span> ${name}</p><p><span class="text">Description:</span> ${description}</p><p><span class="text">Temperament:</span> ${temperament}</p></div>`;   })
//   .join('');
