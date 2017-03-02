var app = angular.module('demo', ['ui.router', 'ngSanitize']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    /*.state('shows', {
        url:'/tourOfHonor/shows',
        templateUrl: 'templates/shows.html',
        controller: 'ShowsController'
    })
        .state('detail', {
        url: '/tourOfHonor/detail/:id',
        templateUrl: 'templates/shows-detail.html',
        controller: 'ShowsDetailController'
    })*/


    .state('app',{
        url: '/',
        views: {
            'header': {
                templateUrl: 'views/header.html'
            },
            'content': {
                templateUrl: 'views/content.html',
                controller: 'ContentController' 
            },
            'events': {
                templateUrl: 'views/events.html',
                controller: 'EventsController' 
            },
            'footer': {
                templateUrl: 'views/footer.html',
                controller: 'FooterController'
            }
        }
    })
    .state('app.applications',{
        url: 'applications',
        views: {
            'content@': {
                templateUrl : 'views/applications.html',
                controller  : 'ApplicationController'
            }
        }
    })
    .state('app.board',{
        url: 'board',
        views: {
            'content@': {
                templateUrl : 'views/board.html',
                controller  : 'BoardController'
            }
        }
    })
    .state('app.contact',{
        url: 'contact',
        views: {
            'content@': {
                templateUrl : 'views/contact.html',
                controller  : 'ContactController'
            }
        }
    })
    .state('app.donate',{
        url: 'donate',
        views: {
            'content@': {
                templateUrl : 'views/donate.html',
                controller  : 'DonateController'
            }
        }
    })
    .state('app.testimonials',{
        url: 'testimonials',
        views: {
            'content@': {
                templateUrl : 'views/testimonials.html',
                controller  : 'TestimonialController'
            }
        }
    })
    .state('app.sponsors',{
        url: 'sponsors',
        views: {
            'content@': {
                templateUrl : 'views/sponsors.html',
                controller  : 'SponsorController'
            }
        }
    })
    .state('app.visuals',{
        url: 'visuals',
        views: {
            'content@': {
                templateUrl : 'views/visuals.html',
                controller  : 'VisualsController'
            }
        }
    });
}]);



