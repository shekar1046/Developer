var self=this;
var obj={
foo:”bar”;
func:function(){
console.log(this.foo); //bar
(function(){
})();

}
