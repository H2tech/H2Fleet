/**
 * Author : Bill Gooch
 *
 * Module to control the global app module namespace
 * this makes the code cleaner by not cluttering
 * app module with lots of references and making the
 * lookup of dependencies clear
 */

angular.module('appModules',[
                        'gch-ng-kisstack.welcomeModule',
                        'gch-ng-kisstack.settingsModule',
                        'gch-ng-kisstack.profileModule'])


