const reverter = require('../modules/reverter')

test('Reverter palavras', () => {
    expect(reverter('lucas')).toBe('sacul');
  });