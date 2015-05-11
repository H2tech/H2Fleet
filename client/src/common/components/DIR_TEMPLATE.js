/**
 * Created with IntelliJ IDEA.
 * User: billgch
 * Date: 07/09/2014
 * Time: 19:06
 * Template for the creation of a directive
 */

(function(){

    'use strict'

    function myWidgetDirective(){

        //Controller if you need one
        function Controller(){


        }

        //Link function if you need one
        function Link($scope, element, attrs){


        }


        //-------------------
        // Configure Directive

        return{
            replace:true,
            restrict : 'E',
            link : Link,
            controller : Controller,
            templateUrl: 'myWidget.tpl.html'
        }


    }

    //-------------------------
    // Configure module
    angular.module('someAlreadyDefinedModule')
           .directive('myWidget',myWidgetDirective);


}())