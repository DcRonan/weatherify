const getImageData = async () => {
  const url = `https://api.unsplash.com/search/photos?query=london&orientation=landscape&client_id=OJAyay-kVuDWzP_QDkmOt3FSIhl7sRhk7oOcZQbE70k`;
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

export default async () => {
  const data = await getImageData();

  const img = document.createElement('img')
  img.src = data.results[0].urls.full
  document.body.appendChild(img)
  
  return img
};
