/**
 * Created by gooch on 28/01/15.
 */
(function () {

    'use strict'

    function Config($routeProvider) {


        $routeProvider.when('/home', { templateUrl: 'app/view/home.html',controller: 'home-ctrl'})
                        .when('/costSavings', {
                            templateUrl: 'app/view/h2fuelCell/costSavings.html',
                            controller: 'costSavingsCtrl'
                        })
                        .when('/benefits', {
                            templateUrl: 'app/view/h2fuelCell/benefits.html',
                            controller: 'benefitsCtrl'
                        })
                        .when('/faq', {
                            templateUrl: 'app/view/faq.html',
                            controller: 'faqCtrl'
                        })
                        .when('/guarantee', {
                            templateUrl: 'app/view/h2fuelCell/guarantee.html',
                            controller: 'guaranteeCtrl'
                        })
                        .when('/portfolio', {
                            templateUrl: 'app/view/portfolio.html',
                            controller: 'portfolioCtrl'
                        })
                        .when('/insurance', {
                            templateUrl: 'app/view/h2fuelCell/insurance.html',
                            controller: 'insuranceCtrl'
                        })
                        .when('/lifeCycle', {
                            templateUrl: 'app/view/h2fuelCell/lifeCycle.html',
                            controller: 'lifeCycleCtrl'
                        })
                        .when('/technology', {
                            templateUrl: 'app/view/h2fuelCell/technology.html',
                            controller: 'technologyCtrl'
                        })
                        .when('/warranty', {
                            templateUrl: 'app/view/h2fuelCell/warranty.html',
                            controller: 'warrantyCtrl'
                        })
                        .when('/aboutUs', {
                            templateUrl: 'app/view/aboutUs.html',
                            controller: 'aboutUsCtrl'
                        })
                        .when('/h2Promise', {
                            templateUrl: 'app/view/h2Promise.html',
                            controller: 'h2PromiseCtrl'
                        })
                        .when('/contact', {
                            templateUrl: 'app/view/contact.html',
                            controller: 'contactCtrl'
                        })

        $routeProvider.otherwise({redirectTo: '/home'});

    }

    //--------------------------
    //   APP MODULE SET UP
    //--------------------------

    angular.module("h2TechApp", [
            "ngRoute",
            "ui.bootstrap",
            "ngResource",
            "gch-ui-components"
            ])
           .config(Config)
           .run(function (CONFIG,h2Config) {

                   // h2Config.setConfigData(CONFIG);
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



