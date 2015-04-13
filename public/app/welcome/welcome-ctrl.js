/**
 * Author : Bill Gooch
 *
 * Main application controller -- all subsequent controllers
 * will be children and will inherit from this controller
 */

(function(){

    'use strict'

    function welcomeController(){




        console.log('Welcome controller');


    }

    angular.module('gch-ng-kisstack.welcomeModule',[])
        .controller('gch-ng-kisstack.welcomeCtrl',welcomeController);

}())




