/**
 * Author : Bill Gooch
 *
 *
 */

'use strict';
/**
 * Root application controller
 * Manages Navigation and initiates root methods
 */
angular.module('billGchPorfolioApp')
    .controller('billgchApp.controller.loginController',

            function($scope,
                     $modal,
                     $modalInstance,
                     $log,
                     $q,
                     AuthenticateService
                     )
            {

                $scope.user = {};

                $scope.user.name =     AuthenticateService.useLocalStorage().name;
                $scope.user.password = AuthenticateService.useLocalStorage().password;
                $scope.user.remberMe = AuthenticateService.useLocalStorage().remberMe;

                $scope.loginFailed = false;
                //-----------------------------------
                //  EVENT HANDLERS
                //-----------------------------------

                $scope.closeWindow = function(){

                    $modalInstance.dismiss('cancel');
                }

                $scope.login = function(){

                    AuthenticateService.login($scope.user.name ,$scope.user.password,$scope.user.remberMe).then(

                        function(loggedIn) {

                            if(loggedIn){

                                $modalInstance.dismiss('cancel');
                            }
                            else{
                                $scope.loginFailed = true;
                            }
                        },
                        function(x) {

                            console.log("ERROR : "+x);

                        });
                 }


    })
