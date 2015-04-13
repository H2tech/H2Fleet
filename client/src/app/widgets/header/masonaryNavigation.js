/**
 * Created by gooch on 28/08/14.
 * Directive that manages the positioning of widgets
 */
(function(){

    'use strict'

    function masonaryNavigationDirective(){

        function Controller($scope,layoutManager){

            $scope.widgets = layoutManager.getWidgets();

            $scope.moveRight = function (rowIndex, colIndex) {

                 layoutManager.moveRight(rowIndex, colIndex,$scope.layouts);
            };

            $scope.moveLeft = function (rowIndex, colIndex) {

                layoutManager.moveLeft(rowIndex, colIndex,$scope.layouts);
            };

            $scope.moveUp = function (rowIndex, colIndex) {

                layoutManager.moveUp(rowIndex, colIndex,$scope.layouts);
            };

            $scope.moveDown = function (rowIndex, colIndex) {
                layoutManager.moveDown(rowIndex, colIndex,$scope.layouts);
            };

        }
        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------
        return{

            replace      : 'true',
            restrict     : 'E',
            controller   : Controller,
            templateUrl  : 'app/widgets/header/masonaryNavigation.tpl.html'

        }
    }



    //Configure module
    angular.module("rtShell")
        .directive("masonaryNavigation",masonaryNavigationDirective);
}())

