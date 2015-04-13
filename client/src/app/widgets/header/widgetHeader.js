/**
 * Created by gooch on 28/08/14.
 * Directive template
 */
(function(){

    'use strict'

    function widgetHeaderDirective(){

        function Controller($scope,layoutManager){

            $scope.widget.title = '';

            $scope.toggleEditMode = function (widget) {
                widget.editMode = !widget.editMode;
                layoutManager.updateMasonry();
            };

            $scope.saveWidgetConfig = function (widget) {
                $scope.toggleEditMode(widget);
            };

            $scope.updateLayout = function (widget) {
                layoutManager.updateMasonry();
            };


            $scope.removeWidget = function ( index) {

                layoutManager.deleteWidget(index);
            };

            $scope.saveTitle = function (title) {

                $scope.widget.widgetTitle = title;

            };
        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------
        return{

            replace      : 'true',
            restrict     : 'E',
            controller   : Controller,
            scope        : {
                widget       : '=widget',
                widgetIndex  : '=widgetIndex'
            },
            templateUrl  : 'app/widgets/header/widgetHeader.tpl.html'

        }
    }

    //Configure module
    angular.module("rtShell")
        .directive("widgetHeader",widgetHeaderDirective);
}())
