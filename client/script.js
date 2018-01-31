'use strict';

var app = angular.module('myGallery', ['ngAnimate', 'ngTouch']);

app.controller('imagesCtrl', function($scope, $http) {
	console.log('1');
	$http.get("http://localhost:3000/").then(function (response) {
		console.log('2');
	 	$scope.images = response.data;
	   // initial image index
    	$scope._Index = 0;
    	// if a current image is the same as requested image
	    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };
	    // show prev image
	    $scope.showPrev = function () {
	        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.images.length - 1;
	    };
	    // show next image
	    $scope.showNext = function () {
	        $scope._Index = ($scope._Index < $scope.images.length - 1) ? ++$scope._Index : 0;
	    };
	    // show a certain image
	    $scope.showPhoto = function (index) {
	        $scope._Index = index;
	    };
	});
})
