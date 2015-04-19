
/**
 * Created by gooch on 29/08/14.
 *
 */

(function(){


    function rtUtilsFactory(){

        var publicAPI = {};


        publicAPI.getDirectiveHTMLTag = function (directiveString) {

            var directiveHTMLtag = directiveString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

            directiveHTMLtag = "<"+directiveHTMLtag+"></"+directiveHTMLtag+">";

            return directiveHTMLtag;
        }


        return publicAPI;
    }


    angular.module("h2TechApp")
        .factory('h2Utils',rtUtilsFactory);

}());
