/**
 * Author : Bill Gooch
 *
 *
 */
(function(){

    'use strict'

    function loginModalController($scope,
                                  $modalInstance,AuthenticationService
                                  ){

            $scope.user = {};
            $scope.loginFailed = false;


            //-----------------------------------
            //  EVENT HANDLERS
            //-----------------------------------

            $scope.closeWindow = function(){
                $modalInstance.dismiss('cancel');
            }

            $scope.login = function(){

                AuthenticateService.login($scope.user.name ,$scope.user.password).then(

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


    }

    //------------------------
    // Configure module
    //------------------------
    angular.module('gch-ng-kisstack')
           .controller('loginModalCtrl',loginModalController);


}())

