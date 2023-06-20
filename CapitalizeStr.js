function capitalize(string) {

if(typeof(string) === 'number'){
    throw new Error("The Value must be an alphabet");
}
else {
    let first_word = string.charAt(0).toUpperCase();
    let remain_word = string.substring(1);
    let result = first_word.concat(remain_word);
    return result;
}
}

module.exports = capitalize;