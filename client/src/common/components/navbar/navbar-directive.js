/**
 * Author : Bill Gooch
 *
 *
 */
angular.module("NavigationModule")

.directive('mainNavigation',  function(NavBarService){

        return {

            restrict:'E',
            replace:'true',
            scope: {
                navConfig :'@'
            },

            templateUrl:'common/directives/navbar/navBarView.html',
            link: function($scope, $element, $attrs ) {

                $scope.navDomain = NavBarService.loadNav($scope.navConfig);

            }


        }


    })