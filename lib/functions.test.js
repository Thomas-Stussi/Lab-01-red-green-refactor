const { 
  getName,
  copyAndPush,
  capitalizeAndFilter,
} = require('./functions.js');

describe('getName function', () => {
  it('finds the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');  
  });
});

describe('copyAndPush function', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);
    
    expect(newNumbers).toEqual([1, 2, 3, 4]);
  });
});

describe('copyAndPush function', () => {
  it('should not mutate the original array', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);
    
    expect(newNumbers).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

describe('capitalizeAndFilter function', () => {
  it('capitalizes all strings and filters out any string that starts with the letter f', () => {
    const arrayOfStrings = ['capitalize', 'these', 'strings', 'forza'];
    const result = capitalizeAndFilter(arrayOfStrings);

    expect(result).toEqual(['CAPITALIZE', 'THESE', 'STRINGS']);  
  });
});
