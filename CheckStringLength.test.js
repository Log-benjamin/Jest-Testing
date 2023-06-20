const stringLength = require('./CheckStringLength.js');

// test for this function if it returns a number
test('String Length', () => {

    //Test Cases
    const shortString = "";
    const validString = "Fuzzy"; 
    const longString = "Hello Microverse";

    expect(typeof(stringLength("ABC"))).toBe("number"); //Checks if the output is a number.

    expect(stringLength(validString)).toBe(5); //Checkes if the result of the input string is 5.

    expect(() => {stringLength(shortString);}).toThrow("The String Length is short, It must be atleast 1 character long"); //Checkes if the output is less that 1 char long

    expect(() => {stringLength(longString);}).toThrow("The String Length is long, It must not be more than 10 characters long"); //Checkes if the output is more that 10 char long

  });
