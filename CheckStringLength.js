function stringLength(string) {
    let count = string.length;

    if(count < 1) {
        throw new Error("The String Length is short, It must be atleast 1 character long");
    }
    else if(count > 10){
        throw new Error("The String Length is long, It must not be more than 10 characters long");
    }
    else {
        return count;
    }
}

module.exports = stringLength;