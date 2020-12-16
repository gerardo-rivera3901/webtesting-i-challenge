const enhancer = require('./enhancer.js');

describe('sanity check', () => {
  it('works', () => {
    expect(2 + 2).toBe(4);
  });
});

const testItem = {name: 'blade', durability: 12, enhancement: 4};

describe('Enhancer Functions', () => {
  it('can repair item', () => {
    const repairedItem = {name: 'blade', durability: 100, enhancement: 4};
    expect(enhancer.repair(testItem)).toEqual(repairedItem);
  });
  it('can successfully enhance', () => {
    const enhancedItem = {name: 'blade', durability: 100, enhancement: 5};
    expect(enhancer.success(testItem)).toEqual(enhancedItem);
  });
  it('can fail enhancements', () => {
    const failedItem = {name: 'blade', durability: 95, enhancement: 5};
    expect(enhancer.fail(testItem)).toEqual(failedItem);
  });
});
