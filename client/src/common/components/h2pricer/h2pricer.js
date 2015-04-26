/**
 * Created by gooch on 24/04/15.
 */
/**
 * Created by gooch on 28/08/14.
 * RT widget directive
 */
(function(){

    'use strict'
    function pricerDirective(){


        function Controller(){


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
            templateUrl  : 'common/components/h2pricer/pricer.tpl.html'
        }
    }

    angular.module("h2TechApp")
        .directive("h2Pricer",pricerDirective);

}())

