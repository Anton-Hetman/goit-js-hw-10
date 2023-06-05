import { key_url } from './api_key';
import { refs } from './refs';
export function catApi(keyword) {
  const params = new URLSearchParams({
    apikey: key_url.API_KEY,
    keyword,
  });
  return fetch(`${key_url.CAT_URL}?limit=10&breed_ids=beng&api_key=${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
