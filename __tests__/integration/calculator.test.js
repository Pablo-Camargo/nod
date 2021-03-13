import Calculator from '../../src/app/services/Calculator';

describe('calculator', () => {
  it('should sum two numbers when...', () => {
    expect.assertions(1);
    const calculator = new Calculator();
    const result = calculator.sum(2, 2);

    expect(result).toBe(4);
  });

  describe('bulk sum', () => {
    it('should sum a list of a values when...', () => {
      expect.assertions(1);
      const values = [1, 5, 1, 1, 2];

      expect(10).toBe(values);
    });
  });
});
