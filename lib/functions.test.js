const { getName } = require('./functions.js');

describe('getName function', () => {
  it('finds the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');  
  });
});
