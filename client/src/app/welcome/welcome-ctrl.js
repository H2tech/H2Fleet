/**
 * Author : Bill Gooch
 *
 */

(function(){

    'use strict'

    function welcomeController(){

        console.log('Welcome controller');

    }

    angular.module('gch-ng-kisstack.welcomeModule',[])
        .controller('gch-ng-kisstack.welcomeCtrl',welcomeController);

}())




