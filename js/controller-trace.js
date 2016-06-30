/**
 * Created by rbanning on 4/11/2016.
 */
;(function (hallpass, app) {
    'use strict';

    app.controller('TraceCtrl', ['identityService', 'quiz', function (identityService, quiz) {
        var self = this;

        self.user = identityService.currentUser;
        self.quiz = quiz;

        self.answer = null;
        self.check = function () {
            self.errorMessage = null;   //reset

            var answer = parseInt(self.answer);
            if (isNaN(answer)) {
                self.errorMessage = "Not a valid answer - must be a number!";
            } else if (!quiz.validate(answer)) {
                if (quiz.attempts > 1) {
                    self.errorMessage = "Nope... that is not correct either!";
                } else {
                    self.errorMessage = "Oops... try again!";
                }
            }
        }
        self.reset = function () {
            quiz.reset();
            self.answer = null;
            self.errorMessage = null;
        }
        console.log("TraceCtrl", self);
    }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app)));


