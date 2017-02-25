var githubApp = angular.module('githubApp', ['ngRoute']);

githubApp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		.when('/repos', {
			templateUrl : 'pages/repos.html',
			controller  : 'reposController'
		})
});

githubApp.controller('mainController', function($scope) {
});

githubApp.controller('reposController', function($scope) {
});

githubApp.controller('getUserInfo', ['$scope', '$http', function($scope, $http){
    var onSuccess = function(response){
        $scope.user = response.data;
        $scope.error = null;
    };
    
    var onError = function(response){
        $scope.error = 'Kullanıcı bulunamadı!';
        $scope.user = null;
    };
    
    $scope.getGithubUser = function(){
        $http.get('https://api.github.com/users/' + $scope.userName)
            .then(onSuccess, onError);
    };
}]);

githubApp.controller('githubRepos', ['$scope','$http', function($scope, $http){
    var onSuccess = function(response){
        $scope.repos = response.data;
        $scope.error = null;
    };
    
    var onError = function(response){
        $scope.error = 'Kullanıcı bulunamadı!';
        $scope.repos = null;
    };
    
    $scope.getGithubRepos = function(){
        $http.get('https://api.github.com/users/' + $scope.kullaniciadi + '/repos')
            .then(onSuccess, onError);
    };
}]);