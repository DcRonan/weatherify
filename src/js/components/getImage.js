// import * as el from './elements'

const getImageData = async (city) => {
  const url = `https://api.unsplash.com/search/photos?query=${city}&orientation=landscape&client_id=OJAyay-kVuDWzP_QDkmOt3FSIhl7sRhk7oOcZQbE70k`;
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

const getImg = async (city) => {
  const data = await getImageData(city);

  document.body.style.background = `url(${data.results[0].urls.regular})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.overflow = 'hidden';

  return city;
};

export default getImg;
