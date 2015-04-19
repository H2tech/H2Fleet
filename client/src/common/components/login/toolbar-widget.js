/**
 * Created with IntelliJ IDEA.
 * User: billgch
 * Date: 07/09/2014
 * Time: 19:06
 * Template for the creation of a directive
 */

(function(){

    'use strict'

    function loginToolbarDirective(){


        function Link($scope, $element, $attrs){

            console.log('$scope.authenticateService = '+$scope.authenticateService);
            $scope.isAuthenticated = $scope.authenticateService.isAuthenticated;
            $scope.login           = $scope.authenticateService.showLogin;
            $scope.logout          = $scope.authenticateService.logout;

        }


        //-------------------
        // Configure Directive

        return{
            replace:true,
            restrict : 'E',
            scope:{
                authenticateService : '=authenticateService'
            },
            link : Link,
            templateUrl: 'common/directives/login/toolbar.tpl.html'
        }


    }

    //-------------------------
    // Configure module
    angular.module('login.toolbar')
        .directive('loginToolbar',loginToolbarDirective);


}())

