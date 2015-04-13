/**
 * Created by gooch on 15/09/14.
 */
(function () {

    'use strict'

    function toolBarDirective(layoutManager ) {

        function Controller( $scope , rtConfig) {


            $scope.WidgetTypes = rtConfig.getWidgetDefinitions();
            $scope.layoutFramework = layoutManager.getLayoutFramework();
            layoutManager.setLayoutFramework('gridster');

            //-------------------------------------------
            //    Load widget

            $scope.loadWidget = function (widget) {

                var widgetInstance =  {};
                angular.copy(widget, widgetInstance);

                layoutManager.addWidgetToDisplay(widgetInstance);
            };

            //-------------------------------------------
            //    Load widget

            $scope.setLayoutFramework = function (frameWork) {
                layoutManager.setLayoutFramework(frameWork);
            };

        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------
        return{

            replace: 'true',
            restrict: 'E',
            controller: Controller,
            templateUrl: "app/toolbar/toolbar.tpl.html"

        }


    }

    //Configure module
    angular.module("rtShell")
        .directive("toolBar", toolBarDirective);
}())

