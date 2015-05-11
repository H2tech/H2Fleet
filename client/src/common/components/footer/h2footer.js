/**
 * Created with IntelliJ IDEA.
 * User: billgch
 * Date: 07/09/2014
 * Time: 19:06
 * Template for the creation of a directive
 */

(function(){

    'use strict'

    function footerDirective(){

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
            templateUrl  : 'common/components/footer/footer.tpl.html'
        }


    }

    //-------------------------
    // Configure module
    angular.module('h2TechApp')
        .directive('h2Footer',footerDirective);


}())