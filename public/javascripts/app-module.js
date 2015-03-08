/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (!AppControllers) {
    var AppControllers = {};
}
var testApp = angular.module("testApp", ['ngRoute','angular-loading-bar']);
testApp.controller(AppControllers);
testApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/list',
                        {
                            controller: "ImdbOnlineController",
                            templateUrl: "views/movie_list.html"
                        })
                .when('/',
                        {
                            controller: "",
                            templateUrl: "views/index.html"
                        })
                .otherwise({redirectTo: '/list'});
    }]);