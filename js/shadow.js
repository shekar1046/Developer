"use strict";
function f1(){
    var x=10;
    if(x==10){
        var x=20;
        let y=20;
        console.log("x="+x + "<br>" + "y=" +y);
    }
}
console.log(f1());