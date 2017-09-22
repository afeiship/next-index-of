(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.indexOf = function (inArray, inItem, inFrom) {
    var index = inFrom || 0;
    var length;

    for ( length = inArray.length; index < length; index++) {
      var element = inArray[index];
      if( inItem == element ){
        return index;
      }
    }
    return -1;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.indexOf;
  }

}());
