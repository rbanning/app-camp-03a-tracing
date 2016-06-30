/**
 * Created by rbanning on 4/11/2016.
 */
;(function (hallpass, app) {
    'use strict';

    app.controller('HomeCtrl', ['identityService', 'tracingService', function (identityService, tracingService) {
        var self = this;

        self.user = identityService.currentUser;
        self.isLoggedIn = identityService.isLoggedIn;

        self.quizzes = tracingService.quizzes;

        console.log("HomeCtrl", self);
    }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app)));


