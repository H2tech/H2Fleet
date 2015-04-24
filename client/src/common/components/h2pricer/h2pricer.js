/**
 * Created by gooch on 24/04/15.
 */
/**
 * Created by gooch on 28/08/14.
 * RT widget directive
 */
(function(){

    'use strict'
    function pricerDirective(WIDGETS_DIR){


        function Controller($scope, h2CostModel){


            function calculateCost (){


            }

            // exports
            this.calculateCost = calculateCost;
        }

        //-----------------------
        //CONFIGURE DIRECTIVE
        //-----------------------

        return{

            replace      : 'true',
            restrict     : 'E',
            controller   : Controller,
            controllerAs : 'vm',
            templateUrl  : WIDGETS_DIR+'types/spike/mockWidget.tpl.html'
        }
    }

    angular.module("rtShell")
        .directive("pricer",pricerDirective);

}())

