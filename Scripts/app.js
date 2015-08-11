/// <reference path="../typings/angularjs/angular.d.ts"/>
(function () {

	var app = angular.module("busApp", ['ngRoute']);

	app.controller("MainController", function ($scope) {
		$scope.myNumber = 6;
	});

	app.controller("HomeController", function ($scope) {

	});

	app.controller("TicketController", function ($scope) {

	});

	app.controller("ContactController", function ($scope) {
	})

	app.controller('ContactFormController', function ($scope) {
		$scope.message = "hola from the controller";
		$scope.users = [];

		$scope.submit = function (user) {
			// if (!$scope.contactForm.$valid)
			// 	$scope.message = "Invalid";
			$scope.message = user.name + " " + user.email + " \n" + user.comment;
		};

	})

	app.directive("contactUsForm", function () {
		return {
			restrict: 'E',
			templateUrl: "../directives/contact-us-form.html",
			controller: "ContactFormController"
		};
	})


	app.directive("navBar", [function () {
		return {
			restrict: 'E',
			templateUrl: "../directives/home-nav-bar.html"
		};
	}]);

	app.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'Home.html',
			controller: 'HomeController'
		})

			.when('/BookTicket', {
                templateUrl: 'BookTicket.html',
                controller: 'TicketController'
            })

		// route for the contact page
            .when('/ContactUs', {
                templateUrl: 'ContactUs.html',
                controller: 'ContactController'
            });
		// route for the about page
	});

})();

