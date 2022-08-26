import About, { add } from './About';

describe(`About Component`, () => {
  it(`should be Available`, () => {
    expect(About).toBeDefined();
  });
  it(`should add two numbers`, () => {
    expect(add(10, 20)).toEqual(30);
  });
  it(`has add which handles wrong inputs`, () => {
    expect(add(10, 'ABC')).toBe('wrong input');
  });
  it(`should add numbers properly and return number as datatype`, () => {
    expect(add(10, 20)).not.toBeNaN();
  });
});
