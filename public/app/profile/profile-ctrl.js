/**
 * Author : Bill Gooch
 *
 * Main application controller -- all subsequent controllers
 * will be children and will inherit from this controller
 */

(function(){

    'use strict'

    function profileController(){


        console.log('Profile controller');


    }

    angular.module('gch-ng-kisstack.profileModule',[])
        .controller('gch-ng-kisstack.profileController',profileController);

}())




