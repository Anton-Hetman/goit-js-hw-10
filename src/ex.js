renderSelect.js;

// імпорт 1 бібліотеку + стилі. пошук селект. еспорт рендерСелект(дата) конст маркап = дата мап (референс імг ідб, нейм). Повертаємо опшин з фелью та ім'ям. джоїн. селект іннер . налаштування 1 бібліотеки

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

// const selectElement = document.querySelector('#single');

export function renderSelect(data) {
  const markup = data
    .map(({ reference_image_id, name }) => {
      return `<option value="${reference_image_id}">${name}</option>`;
    })
    .join('');

  selectElement.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#single',
    settings: {
      placeholderText: 'Please, choose a breed',
    },
  });
}
// --------------------------
cat - api.js;
// -----------------------

// Імпорти з обох файлів + нотіфлікс. конст 2 юрл + ключ. знайти селект + ерор. фція фетчбрідсапі =Ю вивести нотіфлікс очікування, повернути службову фцію. фетчербредапі - зен..., селектелемент слухач,  фція фетчкетбайбред , нотіфілкс, повертаємо службову

import { renderSelect } from './renderSelect';
import { renderCatDescription } from './renderCatDescription';
import Notiflix from 'notiflix';

const URL = 'https://api.thecatapi.com/v1/breeds';
const URL_BREED = 'https://api.thecatapi.com/v1/images/';
const API_KEY =
  'live_JvZNAD8kUuHK4iFoJ2ccG6lyOiWEHdf6qBABg0zzY8OeAUp3Gat3HA7laXkJ3mfy';

const selectElement = document.querySelector('#single');
const errorText = document.querySelector('.error');

function fetchBreedsApi() {
  Notiflix.Loading.hourglass('Loading...Please, wait...');

  return fetch(`${URL}?${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        errorText.classList.remove('unvisible');
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(response => {
      Notiflix.Notify.failure(`${response}`);

      throw new Error(response.status);
    });
}

fetchBreedsApi()
  .then(renderSelect)
  .finally(() => {
    Notiflix.Loading.remove();
  });

selectElement.addEventListener('change', function () {
  const breedId = selectElement.value;

  fetchCatByBreed(breedId)
    .then(renderCatDescription)
    .finally(() => {
      Notiflix.Loading.remove();
    });
});

function fetchCatByBreed(breedId) {
  Notiflix.Loading.hourglass('Loading...Please, wait...');

  return fetch(`${URL_BREED}${breedId}?${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .catch(response => {
      Notiflix.Notify.failure(`${response}`);
      throw new Error(response.status);
    });
}
// ---------------------------------
renderCatDescription.js;
// -----------------------------------
// Знаходимо дів, експортує ф-цію рендерКетДескріпшин(датакет) { константа маркап деск = в ДАТАКЕТ.БРІДС мапаєм (текст, теперамент, ім'я) => повертаємо вміст згідто ТЗ та джоінимо. Дів приводимо до innerHTML + inserthtml

const divElement = document.querySelector('.cat-info');

export function renderCatDescription(dataCat) {
  const markupCatDesc = dataCat.breeds
    .map(({ description, temperament, name }) => {
      return `<img src=${dataCat.url} alt="${name}" width="400"/><div class="text-container"><p><span class="text">Breeds:</span> ${name}</p><p><span class="text">Description:</span> ${description}</p><p><span class="text">Temperament:</span> ${temperament}</p></div>`;
    })
    .join('');

  divElement.innerHTML = '';
  divElement.insertAdjacentHTML('beforeend', markupCatDesc);
}
