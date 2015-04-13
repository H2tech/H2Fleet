/**
 * Author : Bill Gooch
 *
 * Main application controller -- all subsequent controllers
 * will be children and will inherit from this controller
 */

(function(){


    function applicationController($scope,
                                   CONST_navConfig,
                                   CONST_appTitle){

        'use strict'

        /***********************************/
        // MANAGE ROOT SCOPE
        // Public Methods are available to all child Scopes
        // Good practice NOT to store things at rootScope level
        // Instead link to Domain Models at the root scope level
        // Domain scopes should store everything passed between controllers and scopes
        /***********************************/

        $scope.appTitle =  CONST_appTitle ;
        $scope.navConfig = CONST_navConfig;

    }

    angular.module('gch-ng-kisstack')
        .controller('gch-ng-kisstack.controller',applicationController);

}())



