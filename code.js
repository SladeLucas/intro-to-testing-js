// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (typeof input == 'string'){
        return 'Hello, ' + input + '!';
    } else {
        return 'Hello, World!';
    }
}
function isFive(x) {
    return x == 5
}
function isEven(x) {
    return (parseFloat(x) % 2 === 0);
  //  if (typeof x === true){
  //      return false
  //  }else if (x === false){
  //      return false
  //  }
  //      return (x % 2 === 0);
}
function isVowel(x){
    return (x == 'a') || (x == "A") || (x == 'e') || (x == 'E') || (x == 'i') || (x == 'I') || (x == 'o') || (x == 'O') || (x == 'u') || (x == 'U');
}
function add(x, y) {
    return Number(x) + Number(y);
}