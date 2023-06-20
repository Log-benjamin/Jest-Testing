const My_calculator = require('./Calculator.js');


describe('My Calculator...', () => {

    test('adds', () => {
        expect(My_calculator.add(73, 27) ).toBe(100);
      });

    test('subtracts', () => {
        expect(My_calculator.subtract(54, 31) ).toBe(23);
        expect(My_calculator.subtract(45, 69) ).toBe(-24);
    });
    
    test('multiplays', () => {
        expect(My_calculator.multiplay(16, 22) ).toBe(352);
    });

    test('divides', () => {
        expect(My_calculator.divide(64, 8) ).toBe(8);
        expect(() => {My_calculator.divide(24, 0);}).toThrow("Value_2 can not be zero");
    });
});
