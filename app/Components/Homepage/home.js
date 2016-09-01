var thisRecipe;
angular.module ('feastly.home', [])
.controller('homeViewCtrl', function($scope, $http, $location, Recipe) {

  $scope.data = '';
  $scope.featured = '';
  $scope.query = '';
  $scope.showRecipe = '';
  $scope.showThisOne;

  //on click sends another request to get that specific recipe

  $scope.showRecipe = function(value){
    thisRecipe = value;
  };
  
  $scope.featured = function(){
    return $http({
        method: 'GET',
        url: 'https://api.yummly.com/v1/api/recipes?_app_id=85328aaa&_app_key=9b9c3f69de268c05cd19da7b5bea7a42&q=empanadas'
      }).then(function(res) {
        console.log(res.data);
        $scope.featured = res.data;
        return res.data;
    });
  };
  //invokes featured() on load
  $scope.featured();
});
