angular.module('ngRouteExample', ['ngRoute'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('BookController', function($scope, $routeParams) {
     $scope.name = "BookController";
     $scope.params = $routeParams;
 })

 .controller('ChapterController', function($scope, $routeParams) {
     $scope.name = "ChapterController";
     $scope.params = $routeParams;
 })
 
  .controller('HomeController', function($scope, $routeParams) {
     $scope.name = "首页";
     $scope.params = $routeParams;
 })
  .controller('AboutController', function($scope, $routeParams) {
     $scope.name = "关于";
     debugger;
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/Book/:bookId', {
    templateUrl: 'views/book.html',
    //template:"<div>{{name}}</div>"
    controller: 'BookController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 10000);
        return delay.promise;
      }
    }
  })
  .when('/Book/:bookId/ch/:chapterId', {
    templateUrl: 'views/chapter.html',
    controller: 'ChapterController'
  })
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
   .when('/about/:id', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  });
 

  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});