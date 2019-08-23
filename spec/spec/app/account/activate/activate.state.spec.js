describe(' activate state test', function () {

  var $state;

  beforeEach(function () {
    module('<%=angularAppName%>');
    inject(function (_$state_, $templateCache) {
      $state = _$state_;
      $templateCache.put('app/account/activate/activate.html', '');
    })
  });

  it('should respond to URL', function () {
    expect($state.href('activate')).toEqual('#/activate');
  });
});
