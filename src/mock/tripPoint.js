const generateDestination = () => {
  return `Amsterdam`;
};
const generatePointType = () => {
  return `Taxi`;
};
const generateDuration = () => {
  return `30M`;
}
const generateDescription = () => {
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
};

const generateImage = (length) => {
  let images = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.trunc(Math.random() * 1000);
    images.push(`http://picsum.photos/248/152?r=${randomNumber}`);
  }
  return images;
};
const generatePrice = (number) => {
  return Math.floor(Math.random() * number);
};
const generateDate = () => {
  return `25/12/2019 16:00`;
};
const generateAdditionalOffer = () => {
  return {
    price: generatePrice(100),
    name: `Add luggage`
  };
};
export const generateTripPointData = (length) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      point: generateDestination(),
      destination: generateDestination(),
      description: generateDescription(),
      type: generatePointType(),
      images: generateImage(5),
      price: generatePrice(1000),
      duration: generateDuration(),
      date: generateDate(),
      offers: generateAdditionalOffer()
    });
  }
  return result;
};
