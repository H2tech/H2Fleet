/**
 * Author : Bill Gooch
 *
 *
 */
describe('Navbar component :: ', function(){

    beforeEach(module('billGchPorfolioApp'));

    describe('Navigation resource :: ', function(){

        it('getNavigationResource() API should be defined', angular.mock.inject(function(NavigationResource, $q,$resource){
            var somePath = "somePath";
            expect(NavigationResource.getNavigationResource(somePath)).toBeDefined();
        }));

    })

   describe('Navigation service API :: ', function(){

        var NavBarService,publicApi,$location;

        beforeEach(inject(function (_NavBarService_,_$location_,_$rootScope_,CONST_navConfig,_$httpBackend_ ) {

            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'CONST_navConfig').respond([{}]);
            $rootScope =  _$rootScope_;
            $location = _$location_;
            NavBarService = _NavBarService_;
            publicApi = NavBarService.loadNav(CONST_navConfig);
            publicApi.locationPath = 'none';

        }))

        it('loadNav() API should be defined', angular.mock.inject(function(NavBarService, $q){

             var somePath = "somePath";
             expect(NavBarService.loadNav(somePath)).toBeDefined();

        }));

       it('location path should change after $routeChangeEvent has been handled', function(){

           $location.path("/test");
           $rootScope.$broadcast("$routeChangeStart");
           expect(publicApi.locationPath).toEqual("/test");

        })

        it('navigate() API should be definedh', function(){

            expect(publicApi.navigate).toBeDefined();

        })
        it('navigate() should change location path', function(){

            var newLocation = "/newLocation";
            publicApi.navigate(newLocation);
            expect($location.path()).toEqual(newLocation);
        })

        it('externalLink() open browser window', function(){

            expect(publicApi.navigate).toBeDefined();

        })
    })

})



