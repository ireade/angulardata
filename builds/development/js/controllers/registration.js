app.controller('RegistrationController', function($scope, $location) {


	$scope.login = function() {

		console.log($scope.user.email);

		$location.path('/meetings');
	}


	$scope.register = function() {

		$location.path('/meetings');
	}

	// $scope.name = 'Ray';

	// $scope.$on('$viewContentLoaded', function() {
	// 	console.log($scope.login)
	// })

	

}); // end RegistrationController