(function(){
    'use strict';
    var feed = angular.module('feed', []);

    /*
     *
     * Authenticate Service - Login details
     * */
    feed.factory('FeedService', function($http){

        var getData = function() {

            return $http({
                    "async": true,
                    "crossDomain": true,
                    "url": " https://bigdev.kwickie.com/api/Members/me/kwickie/feed?includeQuestions=false&excludeAssociatedKwickies=false&offset=0&limit=25&access_token=" + localStorage.getItem('ACCESS_TOKEN'),
                    "method": "GET",
                    "headers": {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            .then(function(json) {
                return (json.data);
            })
        };

        return {getData: getData};



    });



})();