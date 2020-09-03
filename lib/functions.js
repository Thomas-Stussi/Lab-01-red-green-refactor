const fetch = require('node-fetch');

const getName = ({ name }) => name;

const copyAndPush = (array, item) => {
  const copy = [...array, item];
  return copy;
};

const capitalizeAndFilter = (arrayOfStrings) => {
  const newArray = arrayOfStrings.filter(string => string.charAt(0) !== 'f');
  const capArray = newArray.map(string => string.toUpperCase());
  return capArray;
};

const fetchQuote = async() => {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [{ image, character: name, quote: text }] = await response.json();
  return {
    image,
    name,
    text
  };
};

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter,
  fetchQuote
};


