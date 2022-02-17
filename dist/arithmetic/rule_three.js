"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ruleThree = {
  /**
      @param {string} type Can be direct or inverse
  **/
  simple: function simple(type, a, b, c, d) {
    if (type == 'direct') {
      if (a === undefined) {
        var top = b * c;
        var bottom = d;
        a = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(a)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var i = 2; i < 13; i++) {
            while (top / i > 0 && bottom / i > 0) {
              if (top % i == 0 && bottom % i == 0) {
                top = top / i;
                bottom = bottom / i;
              } else {
                if (bober) {
                  a = "-".concat(top, "/").concat(bottom);
                } else {
                  a = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return a;
      } else if (b === undefined) {
        var top = a * d;
        var bottom = c;
        b = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(b)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i = 2; _i < 13; _i++) {
            while (top / _i > 0 && bottom / _i > 0) {
              if (top % _i == 0 && bottom % _i == 0) {
                top = top / _i;
                bottom = bottom / _i;
              } else {
                if (bober) {
                  b = "-".concat(top, "/").concat(bottom);
                } else {
                  b = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return b;
      } else if (c === undefined) {
        var top = d * a;
        var bottom = b;
        c = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(b)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i2 = 2; _i2 < 13; _i2++) {
            while (top / _i2 > 0 && bottom / _i2 > 0) {
              if (top % _i2 == 0 && bottom % _i2 == 0) {
                top = top / _i2;
                bottom = bottom / _i2;
              } else {
                if (bober) {
                  c = "-".concat(top, "/").concat(bottom);
                } else {
                  c = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return c;
      } else {
        var top = b * c;
        var bottom = a;
        d = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(b)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i3 = 2; _i3 < 13; _i3++) {
            while (top / _i3 > 0 && bottom / _i3 > 0) {
              if (top % _i3 == 0 && bottom % _i3 == 0) {
                top = top / _i3;
                bottom = bottom / _i3;
              } else {
                if (bober) {
                  d = "-".concat(top, "/").concat(bottom);
                } else {
                  d = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return d;
      }
    } else if (type == 'inverse') {
      if (a === undefined) {
        var top = b * d;
        var bottom = c;
        a = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(a)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i4 = 2; _i4 < 13; _i4++) {
            while (top / _i4 > 0 && bottom / _i4 > 0) {
              if (top % _i4 == 0 && bottom % _i4 == 0) {
                top = top / _i4;
                bottom = bottom / _i4;
              } else {
                if (bober) {
                  a = "-".concat(top, "/").concat(bottom);
                } else {
                  a = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }

          return a;
        }
      } else if (b === undefined) {
        var top = a * c;
        var bottom = d;
        b = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(b)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i5 = 2; _i5 < 13; _i5++) {
            while (top / _i5 > 0 && bottom / _i5 > 0) {
              if (top % _i5 == 0 && bottom % _i5 == 0) {
                top = top / _i5;
                bottom = bottom / _i5;
              } else {
                if (bober) {
                  b = "-".concat(top, "/").concat(bottom);
                } else {
                  b = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return b;
      } else if (c === undefined) {
        var top = b * d;
        var bottom = a;
        c = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(c)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i6 = 2; _i6 < 13; _i6++) {
            while (top / _i6 > 0 && bottom / _i6 > 0) {
              if (top % _i6 == 0 && bottom % _i6 == 0) {
                top = top / _i6;
                bottom = bottom / _i6;
              } else {
                if (bober) {
                  c = "-".concat(top, "/").concat(bottom);
                } else {
                  c = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return c;
      } else {
        var top = a * c;
        var bottom = b;
        d = top / bottom;
        var bober = top < 0 ? true : false;

        if (!Number.isInteger(d)) {
          if (bober == true) {
            top = top * -1;
          }

          for (var _i7 = 2; _i7 < 13; _i7++) {
            while (top / _i7 > 0 && bottom / _i7 > 0) {
              if (top % _i7 == 0 && bottom % _i7 == 0) {
                top = top / _i7;
                bottom = bottom / _i7;
              } else {
                if (bober) {
                  d = "-".concat(top, "/").concat(bottom);
                } else {
                  d = "".concat(top, "/").concat(bottom);
                }

                break;
              }
            }
          }
        }

        return d;
      }
    } else {
      return "You must write 'direct' or 'inverse', there are no other ways.";
    }
  }
};
var _default = ruleThree;
exports["default"] = _default;