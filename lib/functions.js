const getName = ({ name }) => name;

const copyAndPush = (array, item) => {
  const copy = [...array, item];
  return copy;
};

const capitalizeAndFilter = (arrayOfStrings) => {
  const newArray = [];
  for(let i = 0; i < arrayOfStrings.length; i++) {
    if(arrayOfStrings[i].charAt(0) !== 'f') {
      const goodString = arrayOfStrings[i].toUpperCase();
      newArray.push(goodString);
    }
  }
  return newArray;
};

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter,
};


