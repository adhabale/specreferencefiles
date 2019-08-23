describe(' login state test', function() {

    var  $state;

    beforeEach(function() {
        module('<%=angularAppName%>');

        inject(function( _$state_, $templateCache) {
            $state = _$state_;


            // We need add the template entry into the templateCache if we ever
            // specify a templateUrl
            $templateCache.put('app/components/login/loginState.html', '');
        })
    });

    it('should respond to URL', function() {
        expect($state.href('login')).toEqual('#/login');
    });
});
