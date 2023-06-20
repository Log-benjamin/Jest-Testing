function reverseString(string){
    let reverse = [];
    let result= "";
        for(let i=string.length-1; i>=0; i-=1){
            reverse.push(string[i]);
        }
        result = reverse.join("");

        if (result === ""){
            throw new Error("The string is empty");
        }
        else {
            return result;
        }

}

module.exports = reverseString;