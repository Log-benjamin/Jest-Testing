const reverseString = require('./ReveString.js');


test('Reverse String', () => {

    //Test Cases

    const check_1 = "";
    const check_2 = "BENJAMIN";
    const Check_3 = "Hello, Microverse!"; 
    
    expect(() => {reverseString(check_1);}).toThrow("The string is empty");
    expect( reverseString(check_2) ).toBe("NIMAJNEB");

    expect(reverseString(Check_3)).toBe("!esrevorciM ,olleH");
  });

