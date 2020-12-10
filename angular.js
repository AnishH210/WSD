
angular.module("myapp", ['ngRoute'])
         .config(function($routeProvider) {
            $routeProvider.when('/', {
               templateUrl: 'pjone.html'
            }).when('/pjtwo', {
               templateUrl: 'pjtwo.html',
               controller:'onectrl'
            }).when('/pjtwo', {
               templateUrl: 'pjtwo.html',
               controller:'onectrl'
             }).when('/pjthree', {
                  templateUrl: 'pjthree.html'
            });
         })
         .controller('mainController',function($scope){
            $scope.titles="Home Page"

         })
         .controller('onectrl',function($scope,$routeParams) {
            $scope.message="Hello Welcome"
            if($routeParams.first&&$routeParams.last)
         {
            $scope.person={
               first:$routeParams.first,
               last:$routeParams.last,
            };
         }
         })
