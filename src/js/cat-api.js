import Notiflix from 'notiflix';
import { refs } from './refs';
const MY_KEY =
  'live_RewMHWqsKPM7un9j0u0UWgDN64BJIT9mT6w8PeYAc2ce07njo9Jbutxu06LIAaDH';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';
export function fetchCatByBreed(breedId) {
  Notiflix.Loading.hourglass('Please, wait...');
  return fetch(`${CAT_API}?limit=1&breed_ids=${breedId}&api_key=${MY_KEY}`)
    .then(response => {
      if (!response.ok) {
        refs.error.classList.remove('unvisible');
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(response => {
      Notiflix.Notify.failure(`${response}`);

      throw new Error(response.status);
    });
}
