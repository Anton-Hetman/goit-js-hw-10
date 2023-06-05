import { key_url } from './api_key';
export function fetchBreeds() {
  return fetch(`${key_url.BREEDS_URL}?${key_url.API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
