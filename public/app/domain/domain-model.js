/**
 * Author : Bill Gooch
 *
 * Application domain model contains all information and state
 * that is shared between controllers
 *
 * 1. User preferences
 * 2. Events
 * 3. Statics
 */

(function(){

    function domainModelFactory(){

         console.log('Domain model factory ..........');


    }




    //------------------------
    // Configure domain module
    //------------------------
    angular.module('gch-ng-kisstack')
        .factory('DomainModel',domainModelFactory)

        //---------------------------------------
        // Application constants
        .constant('CONST_navConfig','/config/navConfig.json')
        .constant('CONST_appTitle','Kisstack');
}())
