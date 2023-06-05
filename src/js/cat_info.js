import { key_url } from './api_key';
import { refs } from './refs';
export const breedId = refs.select.value;
export function catApi(breedId) {
  return fetch(`${key_url.CAT_URL}?${breedId}&${key_url.API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
