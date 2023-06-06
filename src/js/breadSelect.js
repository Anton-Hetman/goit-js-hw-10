export function selectBreed(data) {
  const markup = data
    .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    .join('');
  return markup;
}
