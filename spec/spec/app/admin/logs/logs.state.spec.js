describe(' register state test', function () {

  var $state;

  beforeEach(function () {
    module('<%=angularAppName%>');
    inject(function (_$state_, $templateCache) {
      $state = _$state_;
      $templateCache.put('app/account/logs/logs.html', '');
    })
  });

  it('should respond to URL', function () {
    expect($state.href('logs')).toEqual('#/logs');
  });
});
