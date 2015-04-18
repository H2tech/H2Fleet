/**
 * Created by gooch on 28/01/15.
 */
(function () {

    'use strict'

    function Config($routeProvider) {

        $routeProvider.when('/index', { templateUrl: 'index.html'})
                      .when('/h2FuelCell', {
                                templateUrl: 'app/dashboard/gridsterDemo/h2FuelCell.html',
                                controller: 'DashboardCtrl'
                            })
                        .when('/costSavings', {
                            templateUrl: 'view/h2fuelCell/templateUrl.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/guarantee', {
                            templateUrl: 'view/h2fuelCell/guarantee.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/insurance', {
                            templateUrl: 'view/h2fuelCell/insurance.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/lifeCycle', {
                            templateUrl: 'view/h2fuelCell/lifeCycle.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/technology', {
                            templateUrl: 'view/h2fuelCell/technology.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/warranty', {
                            templateUrl: 'view/h2fuelCell/warranty.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/aboutUs', {
                            templateUrl: 'view/aboutUs.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/blog', {
                            templateUrl: 'view/blog.html',
                            controller: 'DashboardCtrl'
                        })
                        .when('/contact', {
                            templateUrl: 'view/contact.html',
                            controller: 'DashboardCtrl'
                        })


        $routeProvider.otherwise({redirectTo: '/index'});

    }

    //--------------------------
    //   APP MODULE SET UP
    //--------------------------

    angular.module("h2TechApp", [
            "ngRoute",
            "ui.bootstrap",
            "ngResource"
            ])
           .config(Config)
           .run(function (h2Config) {

                    h2Config.setConfigData(CONFIG);
              });

    fetchConfigData().then(bootstrapApplication);

    function fetchConfigData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("config/h2Config.json").then(function(response) {
            angular.module("h2TechApp").constant("CONFIG", response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["h2TechApp"]);
        });
    }

}())



