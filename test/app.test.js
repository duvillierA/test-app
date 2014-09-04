
var path = require('path'),
  expect = require('chai').expect,
  rewire = require('rewire');

describe('test app.js', function () {

  var app;

  beforeEach(function () {
    app = rewire(path.resolve('scripts/app'));
  });

  it('sould is function that return 0', function () {
    expect(app()).to.equal(0);
  });

});

