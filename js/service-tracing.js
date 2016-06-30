/**
 * Created by rbanning on 6/14/2016.
 */
;(function (hallpass, app) {
    'use strict';

    app.factory('tracingService', ['$q', 'identityService',
        function ($q, identityService) {

            var Quiz = function (name, param, fn) {
                this.name = name;
                this.param = param;
                this.fn = fn;
                if (fn) {
                    this.answer = fn.call(this, param);
                } else {
                    this.answer = null;
                }
                this.completed = false;
                this.attempts = 0;
            };
            Quiz.prototype.validate = function (answer) {
                var self = this;
                self.attempts += 1;
                if (typeof(answer) === 'string') {
                    answer = parseInt(answer);
                }
                if (answer === self.answer) {
                    self.completed = true;
                } else {
                    self.completed = false;
                }
                return self.completed;
            };
            Quiz.prototype.reset = function () {
                this.attempts = 0;
                this.completed = false;
            };

            var api = {
                get identity() {
                    return identityService.currentUser;
                }
            };

            api.quizzes = [
                new Quiz('ruby', 5, window.ruby),
                new Quiz('jenner', 10, window.jenner),
                new Quiz('amelia', null, window.amelia),
                new Quiz('lucy', null, window.lucy),
                new Quiz('katie', null, window.katie),
                new Quiz('viviana', null, window.viviana),
                new Quiz('teagan', 4, window.teagan),
                new Quiz('jackson', null, window.jackson)
            ];
            api.quizzes.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

            api.load = function (name) {
                name = name.toLowerCase();
                var ret = api.quizzes.find(function (el) {
                    return el.name.toLowerCase() === name;
                });

                console.log("quiz", name, ret);

                return $q.when(ret);
            };

            return api;
        }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app)));

