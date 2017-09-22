var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-index-of');

describe('next/indexOf', function () {

  it('nx indexof', function () {
    var arr1 =  [1,2,3,4];

    var idx = nx.indexOf(arr1, 2);

    assert.equal(1, idx);
  });

});
