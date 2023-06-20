const capitalize = require('./CapitalizeStr');

describe('Check Capitalize...', () => {

    test('case_1', () => {
        expect(capitalize("benjamin") ).toBe("Benjamin");
    });

    test('case_1', () => {
        expect(() => {capitalize(12345);}).toThrow("The Value must be an alphabet");
    });

});
