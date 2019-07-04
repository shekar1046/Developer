
(function(){
var MainController=function($scope, $http, $log){
    var onUserComplete=function(response){
        $scope.user=response.data;
        $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };
    var onRepos=function(response){
        $scope.repos=response.data;

    };
    var onError=function(reason){
        $scope.error="could not fetch the data";

    };
   
    
    $scope.search=function(username){
        $log.info("searching for " +username);
        $http.get("https://api.github.com/users/" +username)
        .then(onUserComplete, onError);

    };
    $scope.username="angular";
    $scope.message="hello angular";
    $scope.repoSortOrder="-stargazers_count";
    $scope.countdown=5;
    startCountdown();

};
app.controller("MainController", MainController);
}());