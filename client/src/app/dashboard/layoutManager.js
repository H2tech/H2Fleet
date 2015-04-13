(function(){

    'use strict';

    function layoutManagerFactory ($timeout){

        //----------------------------------
        //  Private members
        //----------------------------------

        var widgetsToDisplay = [];
        var masonryRunning = false;
        var mas = false;
        var layoutFramework = {};

        //----------------------------------
        //  Public API
        //----------------------------------
        var publicAPI = {};

        //-------------------------------------------------------------------
        //          LAYOUT METHODS
        //-------------------------------------------------------------------

        publicAPI.constructMasonry = function() {

            $timeout(function () {
                mas = new Masonry(document.querySelector('.js-masonry'), {
                    columnWidth: 1,
                    itemSelector: '.item'
                });
            }, 10)

        };

        publicAPI.updateMasonry = function(){

            if (!mas) {
                $timeout(function () {
                    mas = new Masonry(document.querySelector('.js-masonry'), {
                        columnWidth: 1,
                        itemSelector: '.item'
                    });
                }, 10)
            } else {

                if (!masonryRunning) {
                    masonryRunning = true;
                    $timeout(function () {
                        mas.reloadItems();
                        mas.layout();
                        masonryRunning = false;
                    }, 1)
                }
            }

        }

        publicAPI.moveRight = function ( colIndex) {

            var temp = widgetsToDisplay[colIndex];
            widgetsToDisplay[colIndex] = widgetsToDisplay[colIndex + 1];
            widgetsToDisplay[colIndex + 1] = temp;
            publicAPI.updateMasonry();

        };

        publicAPI.moveLeft = function (colIndex) {

            var temp = widgetsToDisplay[colIndex];
            widgetsToDisplay[colIndex] = widgetsToDisplay[colIndex - 1];
            widgetsToDisplay[colIndex - 1] = temp;
            publicAPI.updateMasonry();
        };

        //-------------------------------------------------------------------
        //          WIDGET METHODS
        //-------------------------------------------------------------------

        publicAPI.deleteWidget = function(widgetIndex){

            widgetsToDisplay.splice(widgetIndex, 1);
            publicAPI.updateMasonry();

        }

        publicAPI.addWidgetToDisplay = function(widget){

            widgetsToDisplay.push(widget);
            publicAPI.updateMasonry();
        }

        publicAPI.getWidgets = function(){

            return widgetsToDisplay;

        }

        //----------------------------------
        //  Getters and Setters
        //----------------------------------

        publicAPI.setLayoutFramework = function (framework){
            layoutFramework.frameWork = framework;
        }

        publicAPI.getLayoutFramework = function (){
            return layoutFramework;
        }

        return publicAPI;
    }


    angular.module('rtShell')
        .factory('layoutManager', layoutManagerFactory);


}())
