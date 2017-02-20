var app = angular.module("app", []);


app.controller('ListCtrl',['$scope','$http', function($scope, $http) {

	$http({ method: "GET", url: "http://504080.com/api/v1/services/categories", headers: {'Authorization': '0ac62f213ba51b1e621958b02b68b67a12df2458'}})
	.success(function(data){
		$scope.lists = data.data;
		console.log(data);
	})
	.error(function(data){
		console.log(status);
	});
}]);