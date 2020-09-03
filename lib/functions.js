const getName = ({ name }) => name;

const copyAndPush = (array, item) => {
  array.push(item);
  return array;
};

module.exports = {
  getName,
  copyAndPush,
};


