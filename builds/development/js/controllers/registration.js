app.controller('RegistrationController', function($scope, $location, $firebaseAuth, Authentication, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL+'meetings');

	$scope.auth = $firebaseAuth(ref);

	var auth = $scope.auth;


	$scope.login = function() {

		// Calling Authentication service
		Authentication.login($scope.user).then(function() {

			$location.path('/meetings');

		}).catch(function(error) {
			$scope.message = error.message;
		});
	} // end.login


	$scope.register = function() {

		Authentication.register($scope.user).then(function() {
			
			Authentication.login($scope.user);
			$location.path('/meetings');

		}).catch(function(error) {
			$scope.message = error.message;
		});

	} // end .register	

}); // end RegistrationController