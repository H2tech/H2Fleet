/**
 * Author : Bill Gooch
 *
 * Main application controller -- all subsequent controllers
 * will be children and will inherit from this controller
 */

(function(){

    'use strict'

    function settingsController(){



        console.log('Settings controller');


    }

    angular.module('gch-ng-kisstack.settingsModule',[])
        .controller('gch-ng-kisstack.settingsCtrl',settingsController);

}())




