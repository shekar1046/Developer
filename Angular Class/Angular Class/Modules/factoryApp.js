var app=angular.module('FactoryApp',[]);
app.factory('MathFactory',function () {
      var factory={};

      factory.TotalAmount=function (qty, price) {
          return qty*price;
      }

      factory.MaxPrice=function (n1, n2) {
          return Math.max(n1,n2);
      }
      return factory;
})
app.factory('StringFactory',function () {
    var factory={};
    factory.ChangeCase=function (str) {
        return str.toUpperCase();
    }
    return factory;
})