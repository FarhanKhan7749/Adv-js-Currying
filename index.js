let multiply = function(x,y){
    console.log(x*y);
}
// by bild method to do funtion curring.
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(6);

//by using closure  

let mutiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyTwo = mutiply(2);
multiplyTwo(3);

let multiplyThree = mutiply(3);
multiplyThree(5);