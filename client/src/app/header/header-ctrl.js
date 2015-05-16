/**
 * Author : Bill Gooch
 *
 *
 */
(function(){

    function Controller($scope,$location){

        $scope.getClass = function(path) {

            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        }


    }

    angular.module("h2TechApp")
        .controller("headerCtrl",Controller );

}());
