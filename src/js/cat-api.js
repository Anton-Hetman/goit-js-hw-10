import { key_url } from './api_key';
export function fetchBreeds(keyword) {
  const params = new URLSearchParams({
    apikey: key_url.API_KEY,
    keyword,
  });
  return fetch(`${key_url.BREEDS_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
