import { unsplashKey } from './key';

const getImageData = async (city) => {
  const url = `https://api.unsplash.com/search/photos?query=${city}&orientation=landscape&client_id=${unsplashKey}`;
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

const getImg = async (city) => {
  const data = await getImageData(city);

  document.body.style.background = `url(${data.results[0].urls.full})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';

  return city;
};

export default getImg;
