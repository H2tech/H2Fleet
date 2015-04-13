/**
 * Created by gooch on 15/09/14.
 */
(function () {

    'use strict'

    function dashBoardDirective( ) {

        function Controller( $scope, layoutManager) {

            $scope.layoutFramework  = layoutManager.getLayoutFramework();
            $scope.widgetsToDisplay = layoutManager.getWidgets();

        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------
        return{

            replace: 'true',
            restrict: 'E',
            controller: Controller,
            templateUrl: "app/dashBoard/dashBoard.tpl.html"

        }
    }

    //Configure module
    angular.module("rtShell")
        .directive("dashBoard", dashBoardDirective);
}())


