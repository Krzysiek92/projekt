project
// =========================================================================
// Ingredients Controller
// =========================================================================

.controller('IngredientsCtrl', function ( $scope, $http ) {
  console.log("Ingredients Controller.");
  	$scope.ingredients = {};

  	$http.get('http://localhost:8080/ingredients')
  		.success(function(data){
  			$scope.ingredients = data;
  			console.log($scope.ingredients);
  		}).error(function(error){
  			$scope.data.error= error;
  		});

});