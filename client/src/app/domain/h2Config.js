
/**
 * Created by Bill Gooch on 10/09/14.
 */
(function(){

    'use strict'

    function rtConfigFactory(){

        var configData;

        var publicAPI = {};

        publicAPI.setConfigData = function (data){

            configData = data;

        };

        publicAPI.getWidgetDefinitions = function (){

            return angular.copy(configData.widgetDefinitions);

        };


        return publicAPI;


    }

    //--------------------------------
    //      CONFIGURE
    angular.module('h2TechApp')
        .factory('h2Config',rtConfigFactory)

}());
