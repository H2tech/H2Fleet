/**
 * Created by gooch on 28/01/15.
 */
(function () {

    'use strict'

    function Config($routeProvider) {

        $routeProvider.when('/widgets', { templateUrl: 'app/dashboard/dashBoard.html'})
                      .when('/dashboard', {
                                templateUrl: 'app/dashboard/gridsterDemo/view.html',
                                controller: 'DashboardCtrl'
                            });
        $routeProvider.otherwise({redirectTo: '/widgets'});

    }

    //--------------------------
    //   APP MODULE SET UP
    //--------------------------

    angular.module("rtShell", [
            "ngRoute",
            "ui.bootstrap",
            'xeditable',
            'gridster'
            ])
           .config(Config)
           .run(function (editableOptions, editableThemes,CONFIG,rtConfig) {

                rtConfig.setConfigData(CONFIG);
                editableOptions.theme = 'default';
                // overwrite submit button template
                editableThemes['default'].submitTpl = '<a  href="javascript:void(0)" class="btn btn-mini btn-inverse" style="margin: 0 0 2px 2px;" ng-click="$form.$submit()"><span class="icon-ok icon-white"></span></a>';
                editableThemes['default'].cancelTpl = '<a  href="javascript:void(0)" class="btn btn-mini btn-inverse" style="margin: 0 2px 2px 2px;" ng-click="$form.$cancel()"><span class="icon-remove"></span></a>';

    });

    fetchConfigData().then(bootstrapApplication);

    function fetchConfigData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("assets/config/refdata.json").then(function(response) {
            angular.module("rtShell").constant("CONFIG", response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["rtShell"]);
        });
    }

}())



