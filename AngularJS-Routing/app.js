var angpp = angular.module("AngularRoutingApplication", ['ui.router']);
angpp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.hashPrefix('!');//To Add ! After # from URL
   // $locationProvider.html5Mode(true); //To Remove # from URL
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'Views/home.html',
       // controller: 'HomeController'
    }
    $stateProvider.state(homeState);
    var searchState = {
        name: 'search',
        url: '/search',
        templateUrl: 'Views/Search.html',
        controller: 'SearchController'
    }
    $stateProvider.state(searchState);
    var addremoveState = {
        name: 'addremove',
        url: '/addremove',
        templateUrl: 'Views/AddRemove.html',
        controller: 'AddRemoveController'
    }
    $stateProvider.state(addremoveState);
    
})