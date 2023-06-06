export function markupOneCat(data) {
  const markupOneCat = data
    .map(el => {
      return `<img src=${el.url} alt="${el.breeds[0].name}" width="400"/><div class="text-container"><p><span class="text">Breeds:</span> ${el.breeds[0].name}</p><p><span class="text">Description:</span> ${el.breeds[0].description}</p><p><span class="text">Temperament:</span> ${el.breeds[0].temperament}</p>`;
    })
    .join('');
  return markupOneCat;
}
