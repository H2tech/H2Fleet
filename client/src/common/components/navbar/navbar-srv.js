/**
 * Author : Bill Gooch
 *
 *
 */

angular.module("NavigationModule")

    .factory('NavigationResource', function($resource){

        function navResource(path){

            return $resource(path, {},
                {
                    query: {
                        method:'GET',
                        params: {navId:'navConfig'
                        },
                        isArray:true
                    }
                });
        }

        return {

            getNavigationResource : navResource

        }

    })

    .factory('NavBarService', function($location,$rootScope,$window,$resource,NavigationResource) {

        /**
         * PRIVATE METHODS
         *
         *////////////////////////////////////////////////////

        var configureNav = function(){
            publicApi.locationPath = $location.path();
        };

        /**
         * EVENT HANDLERS
         *
         */////////////////////////////////////////////////////////////////
        $rootScope.$on("$routeChangeStart",function(event, next, current){
            configureNav();
        });

        /**
         * PUBLIC API
         *
         */////////////////////////////////////////////////////////////////

        var publicApi = {
            navigation:[],
            navigationMap:{},
            locationPath:"",
            // Navigate to
            navigate: function(loc){
                $location.path(loc);
            },
            // External Links
            externalLink: function(loc, self){
                $window.open(loc, ((self) ? '_self' : '_blank'));
            }
        };

        function loadNavigation(path){

            publicApi.navigation = NavigationResource.getNavigationResource(path).query( {},

                function(data){

                    for(var i= 0; i<publicApi.navigation.length; i++)
                    {
                        publicApi.navigationMap[ publicApi.navigation[i].id ] = publicApi.navigation[i];

                    }
                    configureNav();

                    $rootScope.$broadcast("NavigationLoaded");
                },
                function(){
                    //console.log("NavigationResource Error ");
                });

            return  publicApi;

        }

        return {

            loadNav : function(path){

                   console.log('Load nav');

                   return loadNavigation(path) ;
            }

        }
    })



