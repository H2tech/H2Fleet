
/**
 * Created by gooch on 15/09/14.
 */
(function () {

    'use strict'

    function gridstarLayoutDirective( $window) {

        function Controller( $scope ) {

            $scope.gridsterOptions = {
                margins: [20, 20],
                colWidth: 50,
                rowHeight: 50,
                minRows : 20,
                swapping: false,
                pushing: false,
                floating: false,
                draggable: {
                    handle: 'h3'
                }
            };
        }

        function Link($scope, $element, $attrs){

            //-------------------------------------------------------------------
            // SET UP : Gridster properties relating to current window properties

            $scope.$watch(function(){ return $window.innerWidth; }, function(value) {

                    var columnCount = Math.round((value-$scope.gridsterOptions.colWidth) / $scope.gridsterOptions.colWidth);
                    $scope.gridsterOptions.columns = columnCount;
            });
        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------
        return{

            replace: 'true',
            restrict: 'E',
            controller: Controller,
            link : Link,
            templateUrl: "app/dashBoard/gridster.tpl.html"

        }
    }

    //Configure module
    angular.module("rtShell")
        .directive("gridsterLayout", gridstarLayoutDirective);
}())

