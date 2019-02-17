const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('return Yes when passed true', () => {
    expect(booleanToWord(true)).toBe('Yes');
  });
  it('return No when passed false', () => {
    expect(booleanToWord(false)).toBe('No');
  });
});
