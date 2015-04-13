/**
 * Created by gooch on 28/08/14.
 * RT widget directive
 */
(function(){

    'use strict'
    function mockWidgetDirective(IMAGE_DIR,WIDGETS_DIR){


        function Controller($scope){

            $scope.imageDirectory = IMAGE_DIR;

        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------

        return{

            replace      : 'true',
            restrict     : 'E',
            controller         : Controller,

            templateUrl  : WIDGETS_DIR+'types/mockWidget.tpl.html'
        }
    }

    angular.module("rtShell")
        .directive("mockWidget",mockWidgetDirective);

}())
