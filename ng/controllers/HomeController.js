app.controller("HomeController", function($scope){
    $scope.isRegisterVisible=true;
    $scope.isDetailsVisible=false;
    $scope.Update=function(product){
        $scope.isRegisterVisible=false;
        $scope.isDetailsVisible=true;

        $scope.id=product.id;
        $scope.name=product.name;
        $scope.price=$scope.price;
        $scope.mfd=product.mfd;
        $scope.stock=product.stock;
        $scope.city=product.city;
    }
});