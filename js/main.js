/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
angular.module('boilerplateApp.controllers', []);

var app = angular.module('boilerplateApp', [
  'ngRoute',
  'boilerplateApp.controllers'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", resolveRoute('home', 'Page'))
    // Pages
    .when("/about", resolveRoute('about', 'Page'))
    .when("/pricing", resolveRoute('pricing', 'Page'))
    .when("/services", resolveRoute('services', 'Page'))
    .when("/404", resolveRoute('404', 'Page'))
    .otherwise({redirectTo:'/404'});
}]);

function resolveRoute (viewName, controllerName, path, secure) {
                if (!path) path = '';
                var viewDirectory = '/partials/';
                var controllerDirectory = '/js/controllers/'
                var routeDef = {};
                routeDef.templateUrl = viewDirectory + path + viewName + '.html';
                routeDef.controller = controllerName + 'Controller';
                routeDef.secure = (secure) ? secure : false;
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        var dependencies = [controllerDirectory + path + controllerName + 'Controller.js'];
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            };

function resolveDependencies($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply()
                })
                return defer.promise;
            };