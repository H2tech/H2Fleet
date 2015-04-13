/**
 * Created by gooch on 28/08/14.
 * RT widget directive
 */
(function(){

    'use strict'

    function rtWidgetDirective(WIDGETS_DIR,rtUtils,$compile){

        function Link($scope, $elem, $attr){

            if(angular.isDefined($scope.widget.settings.directive)){

                var widgetDirective = rtUtils.getDirectiveHTMLTag($scope.widget.settings.directive);
                var compiledWidget = $compile( widgetDirective)( $scope );
                var customWidgetElement =  $elem.children()[$elem.children().length-1]
                angular.element(customWidgetElement).append( compiledWidget );

            }

        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------
        return{

            replace      : 'true',
            restrict     : 'E',
            link         : Link,
            transclude: true,
            scope        : {
                               widget       : '=widget',
                               widgetIndex  : '=widgetIndex'
                           },

            templateUrl  : WIDGETS_DIR+'widget.tpl.html'
        }
    }

    angular.module("rtShell")
        .directive("rtWidget",rtWidgetDirective);
}())
