(function () {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$state', '$timeout', 'Auth'];

    function LoginController($rootScope, $state, $timeout, Auth) {
        var vm = this;

        vm.authenticationError = false;
        vm.cancel = cancel;
        vm.credentials = {};
        vm.login = login;
        vm.password = null;
        vm.register = register;
        vm.rememberMe = true;
        vm.requestResetPassword = requestResetPassword;
        vm.username = null;

        $timeout(function () { angular.element('#username').focus(); });

        function cancel() {
            vm.credentials = {
                username: null,
                password: null,
                rememberMe: true
            };
            vm.authenticationError = false;
            console.log("uibmodal here");

        }

        function login(event) {

            event.preventDefault();
            Auth.login({
                username: vm.username,
                password: vm.password,
                rememberMe: vm.rememberMe
            }).then(function () {
                vm.authenticationError = false;

                if ($state.current.name === 'register' || $state.current.name === 'activate' ||
                    $state.current.name === 'finishReset' || $state.current.name === 'requestReset' || $state.current.name === 'login') {
                    $state.go('home');

                }
                console.log("login method");
                $rootScope.$broadcast('authenticationSuccess');

                // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // since login is succesful, go to stored previousState and clear previousState
                if (Auth.getPreviousState()) {
                    var previousState = Auth.getPreviousState();
                    Auth.resetPreviousState();
                    $state.go(previousState.name, previousState.params);
                }
            }).catch(function () {
                vm.authenticationError = true;
            });
        }

        function register() {

            $state.go('register');
        }

        function requestResetPassword() {

            $state.go('requestReset');
        }
    }
})();





/*
 (function() {
 'use strict';

 angular
 .module('discoverApp')
 .controller('LoginController', LoginController);

 LoginController.$inject = ['$rootScope', '$state', '$timeout', 'Auth', '$uibModalInstance'];

 function LoginController ($rootScope, $state, $timeout, Auth, $uibModalInstance) {
 var vm = this;

 vm.authenticationError = false;
 vm.cancel = cancel;
 vm.credentials = {};
 vm.login = login;
 vm.password = null;
 vm.register = register;
 vm.rememberMe = true;
 vm.requestResetPassword = requestResetPassword;
 vm.username = null;

 $timeout(function (){angular.element('#username').focus();});

 function cancel () {
 vm.credentials = {
 username: null,
 password: null,
 rememberMe: true
 };
 vm.authenticationError = false;
 $uibModalInstance.dismiss('cancel');
 }

 function login (event) {
 event.preventDefault();
 Auth.login({
 username: vm.username,
 password: vm.password,
 rememberMe: vm.rememberMe
 }).then(function () {
 vm.authenticationError = false;
 $uibModalInstance.close();
 if ($state.current.name === 'register' || $state.current.name === 'activate' ||
 $state.current.name === 'finishReset' || $state.current.name === 'requestReset') {
 $state.go('home');
 }

 $rootScope.$broadcast('authenticationSuccess');

 // previousState was set in the authExpiredInterceptor before being redirected to login modal.
 // since login is succesful, go to stored previousState and clear previousState
 if (Auth.getPreviousState()) {
 var previousState = Auth.getPreviousState();
 Auth.resetPreviousState();
 $state.go(previousState.name, previousState.params);
 }
 }).catch(function () {
 vm.authenticationError = true;
 });
 }

 function register () {
 $uibModalInstance.dismiss('cancel');
 $state.go('register');
 }

 function requestResetPassword () {
 $uibModalInstance.dismiss('cancel');
 $state.go('requestReset');
 }
 }
 })();
 */
