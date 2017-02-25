// routeApp adında bir modül oluşturuldu
var routeApp = angular.module('routeApp', ['ngRoute']);

// yönlendirme ayarları
routeApp.config(function($routeProvider) {
	$routeProvider

		// anasayfa için yönlendirme
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// hakkında sayfası için yönlendirme
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// iletişim sayfası için yönlendirme
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

routeApp.controller('mainController', function($scope) {
	// view'da görüntülenecek mesaj
	$scope.message = 'Anasayfa Mesajı';
});

routeApp.controller('aboutController', function($scope) {
	$scope.message = 'Hakkında Mesajı';
});

routeApp.controller('contactController', function($scope) {
	$scope.message = 'İletişim Mesajı';
});