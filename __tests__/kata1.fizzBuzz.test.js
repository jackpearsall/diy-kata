const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(18)).toBe('Fizz');
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
    expect(fizzBuzz(55)).toBe('Buzz');
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect(fizzBuzz(19)).toBe(19);
    expect(fizzBuzz(2333)).toBe(2333);   
  });
});
