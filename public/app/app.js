/**
 * Created with IntelliJ IDEA.
 * User: billgch
 * Date: 08/08/2014
 * Time: 19:27
 * To change this template use File | Settings | File Templates.
 */

angular.module('gch-ng-kisstack',[
                                'appModules',
                                'ngRoute',
                                'ngResource',
                                'ui.bootstrap',
                                'NavigationModule'  ])

    .config(function ($routeProvider,$locationProvider) {

        //==========================
        //      Set up Routes
        //==========================

        $routeProvider.when('/', {

            templateUrl: 'app/welcome/welcome.html',
            controller: 'gch-ng-kisstack.welcomeCtrl'
            })
            .when('/profile', {
                templateUrl: 'app/profile/profile.html',
                controller: 'gch-ng-kisstack.welcomeCtrl'
            })

            .when('/settings', {
                templateUrl: 'app/settings/settings.html',
                controller: 'gch-ng-kisstack.welcomeCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);

    });



