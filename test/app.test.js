
var path = require('path'),
  expect = require('chai').expect,
  rewire = require('rewire');

describe('test app.js', function () {

  var App;

  beforeEach(function () {
    App = rewire(path.resolve('scripts/app'));
  });

  it('sould be a function that return 0', function () {
    var app = new App();
    expect(app).to.have.property('compute').that.is.a('function');
    expect(app.compute()).that.is.a('number').equal(0);
  });

});

