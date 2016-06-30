/**
 * Created by rbanning on 4/10/2016.
 */
;(function (window, hallpass) {
    'use strict';

    window.app = angular.module(hallpass.ng.names.app, [hallpass.ng.names.common, 'ui.router']);


    //SETUP VIEWS (ROUTES)
    window.app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'home.html?_v=' + (new Date()).getTime()
            })
            .state('home.amelia', {
                url: '/amelia',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'amelia';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.jackson', {
                url: '/jackson',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'jackson';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.jenner', {
                url: '/jenner',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'jenner';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.katie', {
                url: '/katie',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'katie';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.lucy', {
                url: '/lucy',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'lucy';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.ruby', {
                url: '/ruby',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'ruby';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.teagan', {
                url: '/teagan',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'teagan';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('home.viviana', {
                url: '/viviana',
                controller: 'TraceCtrl',
                controllerAs: 'tvm',
                templateUrl: 'trace.html?_v=' + (new Date()).getTime(),
                resolve: {
                    quiz: ['tracingService', function (tracingService) {
                        var fn = 'viviana';
                        return tracingService.load(fn);
                    }]
                }
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'login.html?_v=' + (new Date()).getTime()
            })
            .state('logout', {
                url: '/logout',
                controller: 'LogoutCtrl',
                template: "<div>logout</div>"
            });

    });

}(window, window.hallpass));