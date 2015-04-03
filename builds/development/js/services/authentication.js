app.factory('Authentication', function($firebase, $firebaseAuth, $firebaseArray, $firebaseObject, $routeParams, $rootScope, $location, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL+'meetings');
	var auth = $firebaseAuth(ref);




	auth.$onAuth(function(authUser) {

		if (authUser) {

			var ref = new Firebase(FIREBASE_URL+'users/'+authUser);
			var user = $firebaseObject(ref);

			$rootScope.currentUser = user;

		} else {
			$rootScope.currentUser = '';
		}
	})



	// Temp object
	var myObject = {
		login: function(user) {

			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});

		}, // end login function
		register: function(user) {

			return auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function(regUser) {

				var ref = new Firebase(FIREBASE_URL+'users');
				var firebaseUsers = $firebaseArray(ref);

				var userInfo = {
					date: Firebase.ServerValue.TIMESTAMP,
					regUser : regUser,
					firstname : user.firstname,
					lastname : user.lastname,
					email : user.email,
					key : userInfo.key
				};

				firebaseUsers.$add(userInfo);

			});
		}
	}; // end myObject

	return myObject;

});