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


        function Controller($scope){

            var priceCalculator = {};
                priceCalculator.fuelPriceLtr =  1.19;
                priceCalculator.h2FuelCellSaving =  20;
                priceCalculator.milesPerYear =  20000;
                priceCalculator.mpg =  10;

                calculateCost();

            function calculateCost(){

                priceCalculator.fuelCostPerGallon = (priceCalculator.fuelPriceLtr * 4.5);
                priceCalculator.fuelCostPerYear   = (priceCalculator.milesPerYear / priceCalculator.mpg) * priceCalculator.fuelCostPerGallon;
                priceCalculator.H2fuellCellSavingYear  = priceCalculator.fuelCostPerYear * (priceCalculator.h2FuelCellSaving *0.01);
                priceCalculator.H2fuellCellSavingMonth = priceCalculator.H2fuellCellSavingYear / 12;
            }

            $scope.$watch('vm.priceCalculator',function(newVal, oldValue){

                    if(newVal !== oldValue){

                        calculateCost();

                    }

                }

            ,true);

            // exports
            this.priceCalculator = priceCalculator;
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

