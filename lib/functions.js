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

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter,
};


