(function(){
    'use strict';
    var authentication = angular.module('authentication', []);

    /*
    *
    * Authenticate Service - Login details
    * */
    authentication.factory('AuthenticateService', function($http){

        var getToken = function() {

            return $http({
                "async": true,
                "crossDomain": true,
                "url": "https://bigdev.kwickie.com/api/Members/login",
                "method": "POST",
                "headers": {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },

                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },

                "data": {
                    email: 'external.testuser@kwickie.com',
                    password: "KwickieRocks!",
                }
            }).then(function successCallback(response) {
                    // What we return here is the data that will be accessible
                    // to us after the promise resolves
                    localStorage.setItem('ACCESS_TOKEN', response.data.id);
                }, function errorCallback(response) {
                    localStorage.clear();
                }
            );
        };

        return {getToken: getToken};

    });



})();