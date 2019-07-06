function f1(){
    var name=prompt("Enter YOur name");
    if(name==null){
        console.log("you cancelled");

    }
    else if(name==""){
        console.log("name can't be empty");
    }
    else{
        console.log("hello" +name);
    }
}
console.log(f1());