/**
 * Author : Bill Gooch
 *
 *
 */
angular.module('billGchPortfolio.services.authentication', [])

    //==============================================================
    //  USER SESSION -
    //  Store data relevant to users session
    //==============================================================

    .factory('AuthenticateService',function($log,
                                            $http,
                                            $rootScope,
                                            $modal,
                                            CONST_mockDataPath,
                                            storage,
                                            LOG_OUT_EVT){


        console.log("AuthenticateService");

        //----------------------------------------
        // Private methods
        //----------------------------------------

         function saveUserDetails(email, password){
             storage.set('billgch.app.email',email);
             storage.set('billgch.app.password',password);
             console.log("Saved user details");
         }

        function checkLocalStorage(){

            console.log("storage.get() "+storage.get('billgch.app.email'));
            var value =  storage.get('billgch.app.email');
            console.log("1234 "+value);

           /* if(storage.set('billgch.app.email')!= null){


            };*/
            return {};
        }

        //----------------------------------------
        //   PUBLIC API
        //----------------------------------------

        var publicAPI = {
            //-------------------------
            //   View
            showLogin: function() {
                $modal.open({
                    templateUrl :"common/directives/login/loginModal.tpl.html",
                    controller : "billgchApp.controller.loginController"

                })

            },
            //--------------------------
            //       Methods

            useLocalStorage : function(){

                    return checkLocalStorage();
            },

            login: function(email, password,remberMe) {

                var request = $http.get(CONST_mockDataPath+'users.json')

                return request.then(

                    function(response) {

                        publicAPI.currentUser = response.data[0];
                        publicAPI.userAuthenticated = true;
                        if(remberMe)saveUserDetails(email, password);
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
            serverError:true,
            localStorageDetails: null

        }



        return publicAPI;


    })



