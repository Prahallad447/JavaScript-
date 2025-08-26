// Callback Function

var talk = function (fx){
    fx();
}

var sayHi = function(){
    // console.log("hii");   // hii
}
talk(sayHi);  // passing function as an argument




var calc = function(fx,a,b){
    return fx(a,b);
}

var sum = function(x,y){
    return x + y;
}
console.log(calc(sum,5,3));