angular.module('login.toolbar', [])


.directive('loginToolbar', ['AuthenticateService', function(AuthenticateService) {

        return {

            restrict:'E',
            replace:'true',
            scope: true,
            templateUrl:'common/directives/login/toolbar.tpl.html',

            link: function($scope, $element, $attrs ) {

                $scope.isAuthenticated = AuthenticateService.isAuthenticated;
                $scope.login = AuthenticateService.showLogin;
                $scope.logout = AuthenticateService.logout;

                $scope.$watch(function() {
                    return AuthenticateService.currentUser;
                },
                function(currentUser) {
                    $scope.currentUser = currentUser;
                });

            }


        }

}]);

