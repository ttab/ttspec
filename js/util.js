
// util functions
module.exports = {
  merge: function() {
    var k, o, os, t, v, _i, _len;
    t = arguments[0], os = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];
    for (_i = 0, _len = os.length; _i < _len; _i++) {
      o = os[_i];
      for (k in o) {
        v = o[k];
        if (v !== void 0) {
          t[k] = v;
        }
      }
    }
    return t;
  }
};
