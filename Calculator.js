class Calculator {
    add = (value_1, value_2) => (value_1 + value_2);
    subtract = (value_1, value_2) => (value_1 - value_2);
    multiplay = (value_1, value_2) => (value_1 * value_2);

    divide(value_1, value_2){
        if(value_2 === 0) {
            throw new Error("Value_2 can not be zero");
        }
        else {
            return (value_1 / value_2);
        }   
    }
}

const My_calculator = new Calculator();

module.exports = My_calculator; 
