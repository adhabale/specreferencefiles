describe("Unit: Testing Services", function () {
    describe("LoginService Service:", function () {
        var LoginService;
        beforeEach(inject(function ($injector) {
            angular.module('<%=angularAppName%>');
            LoginService = $injector.get('LoginService');
        }));


        it('should contain a LoginService', function () {
            expect(LoginService).not.toBe(null);
        });

        it('should contain open function been called', function () {
            spyOn(LoginService, 'open').and.callThrough();
            LoginService.open();
            expect(LoginService.open).toHaveBeenCalled();
        });
    });
});




