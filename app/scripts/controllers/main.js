'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('MainCtrl', function ($scope, AuthenticateService, FeedService, $sce) {

    AuthenticateService.getToken();

    $scope.feedList = {};
    var feed = FeedService.getData();
    feed.then(function(result) {
      $scope.feedList = result;
    });




  });
