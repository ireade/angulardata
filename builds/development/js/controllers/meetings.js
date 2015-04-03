app.controller('MeetingsController', function($scope, $firebaseArray) {

	var ref = new Firebase('https://ireade-angulardata.firebaseio.com/meetings');
	$scope.meetings = $firebaseArray(ref);
	var meetings = $scope.meetings;


	$scope.addMeeting = function() {

		$scope.meetings.$add({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		}).then(function() {
			$scope.meetingname = '';
		});
	}; // end addMeeting


	$scope.deleteMeeting = function(key) {

		$scope.meetings.$remove(key);
	}; // end deleteMeeting

}); // end MeetingsController