/*
 * Author : Bill Gooch
 *
 * Authentication service - managed authentication
 * and user session state.
 */
(function(){

    function authenticationServiceFactory(
                                          $http,
                                          $rootScope,
                                          $modal,
                                          LOG_OUT_EVT){

        var publicAPI = {

            showLogin: function() {

                $modal.open({
                    templateUrl :"app/domain/security/loginModal.tpl.html",
                    controller : "loginModalCtrl"

                })

            },

            login: function(email, password) {

                var request = $http.get(CONST_mockDataPath+'users.json')

                return request.then(

                    function(response) {

                        publicAPI.currentUser = response.data[0];
                        publicAPI.userAuthenticated = true;

                        return publicAPI.userAuthenticated;
                    },
                    function(error,status) {
                        console.log("error = "+error);
                        return
                    }

                )
            },
            logout : function(){

                publicAPI.currentUser = null;
                publicAPI.userAuthenticated = false;
                $rootScope.$broadcast(LOG_OUT_EVT);

            },
            // Is the current user authenticated?
            isAuthenticated: function(){
                return publicAPI.userAuthenticated;
            },
            currentUser: null,
            userAuthenticated:false,

        }

        return publicAPI;

    }


    angular.module('gch-ng-kisstack')
           .factory('AuthenticationService',authenticationServiceFactory);






}())