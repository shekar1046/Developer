class human
{
 

var printGender=()=>{
        console.log(this.gender);
    }
}
class person extends human{
    name ='max';
    gender = 'female';
    var printMyname=()=>{
        console.log(this.name);
    }
}
var x = new person();
x.printMyname();
x.pritGender();