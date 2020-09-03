const getName = ({ name }) => name;

const copyAndPush = (array, item) => {
  const copy = [...array, item];
  return copy;
};

module.exports = {
  getName,
  copyAndPush,
};


