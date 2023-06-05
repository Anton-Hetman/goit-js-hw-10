import { refs } from './refs';
export function breedSelection(data) {
  const markup = data
    .map(data => {
      return `<option value=${data.id}>${data.name}</option>`;
    })
    .join('');
  refs.select.insertAdjacentHTML('beforeend', markup);
}
