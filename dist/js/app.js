(() => {
  var __webpack_modules__ = {
    711: function (module) {
      !(function (e, t) {
        true ? (module.exports = t()) : 0;
      })(0, function () {
        return (function (e) {
          function t(o) {
            if (n[o]) return n[o].exports;
            var i = (n[o] = {
              exports: {},
              id: o,
              loaded: !1,
            });
            return (
              e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
            );
          }
          var n = {};
          return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0);
        })([
          function (e, t, n) {
            'use strict';
            function o(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            var i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = n(1),
              a = (o(r), n(6)),
              u = o(a),
              c = n(7),
              s = o(c),
              f = n(8),
              d = o(f),
              l = n(9),
              p = o(l),
              m = n(10),
              b = o(m),
              v = n(11),
              y = o(v),
              g = n(14),
              h = o(g),
              w = [],
              k = !1,
              x = {
                offset: 120,
                delay: 0,
                easing: 'ease',
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: 'DOMContentLoaded',
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              j = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if ((e && (k = !0), k))
                  return (
                    (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w
                  );
              },
              O = function () {
                (w = (0, h.default)()), j();
              },
              M = function () {
                w.forEach(function (e, t) {
                  e.node.removeAttribute('data-aos'),
                    e.node.removeAttribute('data-aos-easing'),
                    e.node.removeAttribute('data-aos-duration'),
                    e.node.removeAttribute('data-aos-delay');
                });
              },
              S = function (e) {
                return (
                  !0 === e ||
                  ('mobile' === e && p.default.mobile()) ||
                  ('phone' === e && p.default.phone()) ||
                  ('tablet' === e && p.default.tablet()) ||
                  ('function' == typeof e && !0 === e())
                );
              },
              _ = function (e) {
                (x = i(x, e)), (w = (0, h.default)());
                var t = document.all && !window.atob;
                return S(x.disable) || t
                  ? M()
                  : (x.disableMutationObserver ||
                      d.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (x.disableMutationObserver = !0)),
                    document
                      .querySelector('body')
                      .setAttribute('data-aos-easing', x.easing),
                    document
                      .querySelector('body')
                      .setAttribute('data-aos-duration', x.duration),
                    document
                      .querySelector('body')
                      .setAttribute('data-aos-delay', x.delay),
                    'DOMContentLoaded' === x.startEvent &&
                    ['complete', 'interactive'].indexOf(document.readyState) >
                      -1
                      ? j(!0)
                      : 'load' === x.startEvent
                      ? window.addEventListener(x.startEvent, function () {
                          j(!0);
                        })
                      : document.addEventListener(x.startEvent, function () {
                          j(!0);
                        }),
                    window.addEventListener(
                      'resize',
                      (0, s.default)(j, x.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      'orientationchange',
                      (0, s.default)(j, x.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      'scroll',
                      (0, u.default)(function () {
                        (0, b.default)(w, x.once);
                      }, x.throttleDelay)
                    ),
                    x.disableMutationObserver ||
                      d.default.ready('[data-aos]', O),
                    w);
              };
            e.exports = {
              init: _,
              refresh: j,
              refreshHard: O,
            };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              'use strict';
              function n(e, t, n) {
                function o(t) {
                  var n = b,
                    o = v;
                  return (b = v = void 0), (k = t), (g = e.apply(o, n));
                }
                function r(e) {
                  return (k = e), (h = setTimeout(f, t)), M ? o(e) : g;
                }
                function a(e) {
                  var n = e - w,
                    o = e - k,
                    i = t - n;
                  return S ? j(i, y - o) : i;
                }
                function c(e) {
                  var n = e - w,
                    o = e - k;
                  return void 0 === w || n >= t || n < 0 || (S && o >= y);
                }
                function f() {
                  var e = O();
                  return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                }
                function d(e) {
                  return (h = void 0), _ && b ? o(e) : ((b = v = void 0), g);
                }
                function l() {
                  void 0 !== h && clearTimeout(h),
                    (k = 0),
                    (b = w = v = h = void 0);
                }
                function p() {
                  return void 0 === h ? g : d(O());
                }
                function m() {
                  var e = O(),
                    n = c(e);
                  if (((b = arguments), (v = this), (w = e), n)) {
                    if (void 0 === h) return r(w);
                    if (S) return (h = setTimeout(f, t)), o(w);
                  }
                  return void 0 === h && (h = setTimeout(f, t)), g;
                }
                var b,
                  v,
                  y,
                  g,
                  h,
                  w,
                  k = 0,
                  M = !1,
                  S = !1,
                  _ = !0;
                if ('function' != typeof e) throw new TypeError(s);
                return (
                  (t = u(t) || 0),
                  i(n) &&
                    ((M = !!n.leading),
                    (S = 'maxWait' in n),
                    (y = S ? x(u(n.maxWait) || 0, t) : y),
                    (_ = 'trailing' in n ? !!n.trailing : _)),
                  (m.cancel = l),
                  (m.flush = p),
                  m
                );
              }
              function o(e, t, o) {
                var r = !0,
                  a = !0;
                if ('function' != typeof e) throw new TypeError(s);
                return (
                  i(o) &&
                    ((r = 'leading' in o ? !!o.leading : r),
                    (a = 'trailing' in o ? !!o.trailing : a)),
                  n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a,
                  })
                );
              }
              function i(e) {
                var t = 'undefined' == typeof e ? 'undefined' : c(e);
                return !!e && ('object' == t || 'function' == t);
              }
              function r(e) {
                return (
                  !!e &&
                  'object' == ('undefined' == typeof e ? 'undefined' : c(e))
                );
              }
              function a(e) {
                return (
                  'symbol' == ('undefined' == typeof e ? 'undefined' : c(e)) ||
                  (r(e) && k.call(e) == d)
                );
              }
              function u(e) {
                if ('number' == typeof e) return e;
                if (a(e)) return f;
                if (i(e)) {
                  var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                  e = i(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, '');
                var n = m.test(e);
                return n || b.test(e)
                  ? v(e.slice(2), n ? 2 : 8)
                  : p.test(e)
                  ? f
                  : +e;
              }
              var c =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                s = 'Expected a function',
                f = NaN,
                d = '[object Symbol]',
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y =
                  'object' == ('undefined' == typeof t ? 'undefined' : c(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                g =
                  'object' ==
                    ('undefined' == typeof self ? 'undefined' : c(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                h = y || g || Function('return this')(),
                w = Object.prototype,
                k = w.toString,
                x = Math.max,
                j = Math.min,
                O = function () {
                  return h.Date.now();
                };
              e.exports = o;
            }.call(
              t,
              (function () {
                return this;
              })()
            ));
          },
          function (e, t) {
            (function (t) {
              'use strict';
              function n(e, t, n) {
                function i(t) {
                  var n = b,
                    o = v;
                  return (b = v = void 0), (O = t), (g = e.apply(o, n));
                }
                function r(e) {
                  return (O = e), (h = setTimeout(f, t)), M ? i(e) : g;
                }
                function u(e) {
                  var n = e - w,
                    o = e - O,
                    i = t - n;
                  return S ? x(i, y - o) : i;
                }
                function s(e) {
                  var n = e - w,
                    o = e - O;
                  return void 0 === w || n >= t || n < 0 || (S && o >= y);
                }
                function f() {
                  var e = j();
                  return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                }
                function d(e) {
                  return (h = void 0), _ && b ? i(e) : ((b = v = void 0), g);
                }
                function l() {
                  void 0 !== h && clearTimeout(h),
                    (O = 0),
                    (b = w = v = h = void 0);
                }
                function p() {
                  return void 0 === h ? g : d(j());
                }
                function m() {
                  var e = j(),
                    n = s(e);
                  if (((b = arguments), (v = this), (w = e), n)) {
                    if (void 0 === h) return r(w);
                    if (S) return (h = setTimeout(f, t)), i(w);
                  }
                  return void 0 === h && (h = setTimeout(f, t)), g;
                }
                var b,
                  v,
                  y,
                  g,
                  h,
                  w,
                  O = 0,
                  M = !1,
                  S = !1,
                  _ = !0;
                if ('function' != typeof e) throw new TypeError(c);
                return (
                  (t = a(t) || 0),
                  o(n) &&
                    ((M = !!n.leading),
                    (S = 'maxWait' in n),
                    (y = S ? k(a(n.maxWait) || 0, t) : y),
                    (_ = 'trailing' in n ? !!n.trailing : _)),
                  (m.cancel = l),
                  (m.flush = p),
                  m
                );
              }
              function o(e) {
                var t = 'undefined' == typeof e ? 'undefined' : u(e);
                return !!e && ('object' == t || 'function' == t);
              }
              function i(e) {
                return (
                  !!e &&
                  'object' == ('undefined' == typeof e ? 'undefined' : u(e))
                );
              }
              function r(e) {
                return (
                  'symbol' == ('undefined' == typeof e ? 'undefined' : u(e)) ||
                  (i(e) && w.call(e) == f)
                );
              }
              function a(e) {
                if ('number' == typeof e) return e;
                if (r(e)) return s;
                if (o(e)) {
                  var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                  e = o(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, '');
                var n = p.test(e);
                return n || m.test(e)
                  ? b(e.slice(2), n ? 2 : 8)
                  : l.test(e)
                  ? s
                  : +e;
              }
              var u =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                c = 'Expected a function',
                s = NaN,
                f = '[object Symbol]',
                d = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                b = parseInt,
                v =
                  'object' == ('undefined' == typeof t ? 'undefined' : u(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                y =
                  'object' ==
                    ('undefined' == typeof self ? 'undefined' : u(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                g = v || y || Function('return this')(),
                h = Object.prototype,
                w = h.toString,
                k = Math.max,
                x = Math.min,
                j = function () {
                  return g.Date.now();
                };
              e.exports = n;
            }.call(
              t,
              (function () {
                return this;
              })()
            ));
          },
          function (e, t) {
            'use strict';
            function n(e) {
              var t = void 0,
                o = void 0;
              for (t = 0; t < e.length; t += 1) {
                if (((o = e[t]), o.dataset && o.dataset.aos)) return !0;
                if (o.children && n(o.children)) return !0;
              }
              return !1;
            }
            function o() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function i() {
              return !!o();
            }
            function r(e, t) {
              var n = window.document,
                i = o(),
                r = new i(a);
              (u = t),
                r.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            }
            function a(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    o = Array.prototype.slice.call(e.removedNodes),
                    i = t.concat(o);
                  if (n(i)) return u();
                });
            }
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var u = function () {};
            t.default = {
              isSupported: i,
              ready: r,
            };
          },
          function (e, t) {
            'use strict';
            function n(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            }
            function o() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ''
              );
            }
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      'value' in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                return function (t, n, o) {
                  return n && e(t.prototype, n), o && e(t, o), t;
                };
              })(),
              r =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              a =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              u =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              c =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              s = (function () {
                function e() {
                  n(this, e);
                }
                return (
                  i(e, [
                    {
                      key: 'phone',
                      value: function () {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: 'mobile',
                      value: function () {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: 'tablet',
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new s();
          },
          function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var n = function (e, t, n) {
                var o = e.node.getAttribute('data-aos-once');
                t > e.position
                  ? e.node.classList.add('aos-animate')
                  : 'undefined' != typeof o &&
                    ('false' === o || (!n && 'true' !== o)) &&
                    e.node.classList.remove('aos-animate');
              },
              o = function (e, t) {
                var o = window.pageYOffset,
                  i = window.innerHeight;
                e.forEach(function (e, r) {
                  n(e, i + o, t);
                });
              };
            t.default = o;
          },
          function (e, t, n) {
            'use strict';
            function o(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var i = n(12),
              r = o(i),
              a = function (e, t) {
                return (
                  e.forEach(function (e, n) {
                    e.node.classList.add('aos-init'),
                      (e.position = (0, r.default)(e.node, t.offset));
                  }),
                  e
                );
              };
            t.default = a;
          },
          function (e, t, n) {
            'use strict';
            function o(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var i = n(13),
              r = o(i),
              a = function (e, t) {
                var n = 0,
                  o = 0,
                  i = window.innerHeight,
                  a = {
                    offset: e.getAttribute('data-aos-offset'),
                    anchor: e.getAttribute('data-aos-anchor'),
                    anchorPlacement: e.getAttribute(
                      'data-aos-anchor-placement'
                    ),
                  };
                switch (
                  (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
                  a.anchor &&
                    document.querySelectorAll(a.anchor) &&
                    (e = document.querySelectorAll(a.anchor)[0]),
                  (n = (0, r.default)(e).top),
                  a.anchorPlacement)
                ) {
                  case 'top-bottom':
                    break;

                  case 'center-bottom':
                    n += e.offsetHeight / 2;
                    break;

                  case 'bottom-bottom':
                    n += e.offsetHeight;
                    break;

                  case 'top-center':
                    n += i / 2;
                    break;

                  case 'bottom-center':
                    n += i / 2 + e.offsetHeight;
                    break;

                  case 'center-center':
                    n += i / 2 + e.offsetHeight / 2;
                    break;

                  case 'top-top':
                    n += i;
                    break;

                  case 'bottom-top':
                    n += e.offsetHeight + i;
                    break;

                  case 'center-top':
                    n += e.offsetHeight / 2 + i;
                }
                return (
                  a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
                );
              };
            t.default = a;
          },
          function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var n = function (e) {
              for (
                var t = 0, n = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
                  (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return {
                top: n,
                left: t,
              };
            };
            t.default = n;
          },
          function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
            var n = function (e) {
              return (
                (e = e || document.querySelectorAll('[data-aos]')),
                Array.prototype.map.call(e, function (e) {
                  return {
                    node: e,
                  };
                })
              );
            };
            t.default = n;
          },
        ]);
      });
    },
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    return module.exports;
  }
  (() => {
    'use strict';
    function isWebp() {
      function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
          callback(2 == webP.height);
        };
        webP.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      }
      testWebP(function (support) {
        let className = true === support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
      });
    }
    let isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    function addLoadedClass() {
      window.addEventListener('load', function () {
        setTimeout(function () {
          document
            .querySelector('.preloader-line-inner')
            .classList.remove('_loading');
          document
            .querySelector('.preloader-line-inner')
            .classList.add('_loaded');
          setTimeout(() => {
            document.documentElement.classList.add('loaded');
          }, 300);
        }, 0);
      });
    }
    function getHash() {
      if (location.hash) return location.hash.replace('#', '');
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
      if (document.documentElement.classList.contains('lock'))
        bodyUnlock(delay);
      else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
      let body = document.querySelector('body');
      if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        setTimeout(() => {
          for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = '0px';
          }
          body.style.paddingRight = '0px';
          document.documentElement.classList.remove('lock');
        }, delay);
        bodyLockStatus = false;
        setTimeout(function () {
          bodyLockStatus = true;
        }, delay);
      }
    };
    let bodyLock = (delay = 500) => {
      let body = document.querySelector('body');
      if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        for (let index = 0; index < lock_padding.length; index++) {
          const el = lock_padding[index];
          el.style.paddingRight =
            window.innerWidth -
            document.querySelector('.wrapper').offsetWidth +
            'px';
        }
        body.style.paddingRight =
          window.innerWidth -
          document.querySelector('.wrapper').offsetWidth +
          'px';
        document.documentElement.classList.add('lock');
        bodyLockStatus = false;
        setTimeout(function () {
          bodyLockStatus = true;
        }, delay);
      }
    };
    function menuInit() {
      if (document.querySelector('.icon-menu'))
        document.addEventListener('click', function (e) {
          if (e.target.closest('.icon-menu'))
            if (document.documentElement.classList.contains('overflow'))
              setTimeout(() => {
                document.documentElement.classList.remove('overflow');
              }, 500);
            else
              setTimeout(() => {
                document.documentElement.classList.add('overflow');
              }, 500);
          if (bodyLockStatus && e.target.closest('.icon-menu')) {
            bodyLockToggle();
            document.documentElement.classList.toggle('menu-open');
          }
        });
    }
    function menuClose() {
      bodyUnlock();
      document.documentElement.classList.remove('menu-open');
    }
    function functions_FLS(message) {
      setTimeout(() => {
        if (window.FLS) console.log(message);
      }, 0);
    }
    let gotoblock_gotoBlock = (
      targetBlock,
      noHeader = false,
      speed = 500,
      offsetTop = 0
    ) => {
      const targetBlockElement = document.querySelector(targetBlock);
      if (targetBlockElement) {
        let headerItem = '';
        let headerItemHeight = 0;
        if (noHeader) {
          headerItem = 'header.header';
          headerItemHeight = document.querySelector(headerItem).offsetHeight;
        }
        let options = {
          speedAsDuration: true,
          speed,
          header: headerItem,
          offset: offsetTop,
          easing: 'easeOutQuad',
        };
        document.documentElement.classList.contains('menu-open')
          ? menuClose()
          : null;
        if ('undefined' !== typeof SmoothScroll)
          new SmoothScroll().animateScroll(targetBlockElement, '', options);
        else {
          let targetBlockElementPosition =
            targetBlockElement.getBoundingClientRect().top + scrollY;
          targetBlockElementPosition = headerItemHeight
            ? targetBlockElementPosition - headerItemHeight
            : targetBlockElementPosition;
          targetBlockElementPosition = offsetTop
            ? targetBlockElementPosition - offsetTop
            : targetBlockElementPosition;
          window.scrollTo({
            top: targetBlockElementPosition,
            behavior: 'smooth',
          });
        }
        functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
      } else
        functions_FLS(
          `[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`
        );
    };
    let addWindowScrollEvent = false;
    function pageNavigation() {
      document.addEventListener('click', pageNavigationAction);
      document.addEventListener('watcherCallback', pageNavigationAction);
      function pageNavigationAction(e) {
        if ('click' === e.type) {
          const targetElement = e.target;
          if (targetElement.closest('[data-goto]')) {
            const gotoLink = targetElement.closest('[data-goto]');
            const gotoLinkSelector = gotoLink.dataset.goto
              ? gotoLink.dataset.goto
              : '';
            const noHeader = gotoLink.hasAttribute('data-goto-header')
              ? true
              : false;
            const gotoSpeed = gotoLink.dataset.gotoSpeed
              ? gotoLink.dataset.gotoSpeed
              : 500;
            const offsetTop = gotoLink.dataset.gotoTop
              ? parseInt(gotoLink.dataset.gotoTop)
              : 0;
            gotoblock_gotoBlock(
              gotoLinkSelector,
              noHeader,
              gotoSpeed,
              offsetTop
            );
            e.preventDefault();
          }
        } else if ('watcherCallback' === e.type && e.detail) {
          const entry = e.detail.entry;
          const targetElement = entry.target;
          if ('navigator' === targetElement.dataset.watch) {
            document.querySelector(`[data-goto]._navigator-active`);
            let navigatorCurrentItem;
            if (
              targetElement.id &&
              document.querySelector(`[data-goto="#${targetElement.id}"]`)
            )
              navigatorCurrentItem = document.querySelector(
                `[data-goto="#${targetElement.id}"]`
              );
            else if (targetElement.classList.length)
              for (
                let index = 0;
                index < targetElement.classList.length;
                index++
              ) {
                const element = targetElement.classList[index];
                if (document.querySelector(`[data-goto=".${element}"]`)) {
                  navigatorCurrentItem = document.querySelector(
                    `[data-goto=".${element}"]`
                  );
                  break;
                }
              }
            if (entry.isIntersecting)
              navigatorCurrentItem
                ? navigatorCurrentItem.classList.add('_navigator-active')
                : null;
            else
              navigatorCurrentItem
                ? navigatorCurrentItem.classList.remove('_navigator-active')
                : null;
          }
        }
      }
      if (getHash()) {
        let goToHash;
        if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`;
        else if (document.querySelector(`.${getHash()}`))
          goToHash = `.${getHash()}`;
        goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
      }
    }
    setTimeout(() => {
      if (addWindowScrollEvent) {
        let windowScroll = new Event('windowScroll');
        window.addEventListener('scroll', function (e) {
          document.dispatchEvent(windowScroll);
        });
      }
    }, 0);
    function DynamicAdapt(type) {
      this.type = type;
    }
    DynamicAdapt.prototype.init = function () {
      const _this = this;
      this.оbjects = [];
      this.daClassname = '_dynamic_adapt_';
      this.nodes = document.querySelectorAll('[data-da]');
      for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(',');
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
        оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
      }
      this.arraySort(this.оbjects);
      this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (item) {
          return (
            '(' +
            this.type +
            '-width: ' +
            item.breakpoint +
            'px),' +
            item.breakpoint
          );
        },
        this
      );
      this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (item, index, self) {
          return Array.prototype.indexOf.call(self, item) === index;
        }
      );
      for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];
        const оbjectsFilter = Array.prototype.filter.call(
          this.оbjects,
          function (item) {
            return item.breakpoint === mediaBreakpoint;
          }
        );
        matchMedia.addListener(function () {
          _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
      }
    };
    DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
      if (matchMedia.matches)
        for (let i = 0; i < оbjects.length; i++) {
          const оbject = оbjects[i];
          оbject.index = this.indexInParent(оbject.parent, оbject.element);
          this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
      else
        for (let i = оbjects.length - 1; i >= 0; i--) {
          const оbject = оbjects[i];
          if (оbject.element.classList.contains(this.daClassname))
            this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
    };
    DynamicAdapt.prototype.moveTo = function (place, element, destination) {
      element.classList.add(this.daClassname);
      if ('last' === place || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
      }
      if ('first' === place) {
        destination.insertAdjacentElement('afterbegin', element);
        return;
      }
      destination.children[place].insertAdjacentElement('beforebegin', element);
    };
    DynamicAdapt.prototype.moveBack = function (parent, element, index) {
      element.classList.remove(this.daClassname);
      if (void 0 !== parent.children[index])
        parent.children[index].insertAdjacentElement('beforebegin', element);
      else parent.insertAdjacentElement('beforeend', element);
    };
    DynamicAdapt.prototype.indexInParent = function (parent, element) {
      const array = Array.prototype.slice.call(parent.children);
      return Array.prototype.indexOf.call(array, element);
    };
    DynamicAdapt.prototype.arraySort = function (arr) {
      if ('min' === this.type)
        Array.prototype.sort.call(arr, function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) return 0;
            if ('first' === a.place || 'last' === b.place) return -1;
            if ('last' === a.place || 'first' === b.place) return 1;
            return a.place - b.place;
          }
          return a.breakpoint - b.breakpoint;
        });
      else {
        Array.prototype.sort.call(arr, function (a, b) {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) return 0;
            if ('first' === a.place || 'last' === b.place) return 1;
            if ('last' === a.place || 'first' === b.place) return -1;
            return b.place - a.place;
          }
          return b.breakpoint - a.breakpoint;
        });
        return;
      }
    };
    const da = new DynamicAdapt('max');
    da.init();
    var aos = __webpack_require__(711);
    aos.init({
      once: true,
      anchorPlacement: 'bottom-bottom',
    });
    function _assertThisInitialized(self) {
      if (void 0 === self)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    /*!
     * GSAP 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var _suppressOverwrites,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _coreReady,
      _lastRenderedFrame,
      _quickTween,
      _tickerActive,
      _config = {
        autoSleep: 120,
        force3D: 'auto',
        nullTargetWarn: 1,
        units: {
          lineHeight: '',
        },
      },
      _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0,
      },
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = 2 * Math.PI,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
        return 'string' === typeof value;
      },
      _isFunction = function _isFunction(value) {
        return 'function' === typeof value;
      },
      _isNumber = function _isNumber(value) {
        return 'number' === typeof value;
      },
      _isUndefined = function _isUndefined(value) {
        return 'undefined' === typeof value;
      },
      _isObject = function _isObject(value) {
        return 'object' === typeof value;
      },
      _isNotFalse = function _isNotFalse(value) {
        return false !== value;
      },
      _windowExists = function _windowExists() {
        return 'undefined' !== typeof window;
      },
      _isFuncOrString = function _isFuncOrString(value) {
        return _isFunction(value) || _isString(value);
      },
      _isTypedArray =
        ('function' === typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[^,'"\[\]\s]+/gi,
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      _globals = {},
      _installScope = {},
      _install = function _install(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
      },
      _missingPlugin = function _missingPlugin(property, value) {
        return console.warn(
          'Invalid property',
          property,
          'set to',
          value,
          'Missing plugin? gsap.registerPlugin()'
        );
      },
      _warn = function _warn(message, suppress) {
        return !suppress && console.warn(message);
      },
      _addGlobal = function _addGlobal(name, obj) {
        return (
          (name &&
            (_globals[name] = obj) &&
            _installScope &&
            (_installScope[name] = obj)) ||
          _globals
        );
      },
      _emptyFunc = function _emptyFunc() {
        return 0;
      },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = '',
      _harness = function _harness(targets) {
        var harnessPlugin,
          i,
          target = targets[0];
        _isObject(target) || _isFunction(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
          while (i-- && !_harnessPlugins[i].targetTest(target));
          harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while (i--)
          (targets[i] &&
            (targets[i]._gsap ||
              (targets[i]._gsap = new GSCache(targets[i], harnessPlugin)))) ||
            targets.splice(i, 1);
        return targets;
      },
      _getCache = function _getCache(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      },
      _getProperty = function _getProperty(target, property, v) {
        return (v = target[property]) && _isFunction(v)
          ? target[property]()
          : (_isUndefined(v) &&
              target.getAttribute &&
              target.getAttribute(property)) ||
              v;
      },
      _forEachName = function _forEachName(names, func) {
        return (names = names.split(',')).forEach(func) || names;
      },
      _round = function _round(value) {
        return Math.round(1e5 * value) / 1e5 || 0;
      },
      _roundPrecise = function _roundPrecise(value) {
        return Math.round(1e7 * value) / 1e7 || 0;
      },
      _parseRelative = function _parseRelative(start, value) {
        var operator = value.charAt(0),
          end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return '+' === operator
          ? start + end
          : '-' === operator
          ? start - end
          : '*' === operator
          ? start * end
          : start / end;
      },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
        var l = toFind.length,
          i = 0;
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; );
        return i < l;
      },
      _lazyRender = function _lazyRender() {
        var i,
          tween,
          l = _lazyTweens.length,
          a = _lazyTweens.slice(0);
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween &&
            tween._lazy &&
            (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      },
      _lazySafeRender = function _lazySafeRender(
        animation,
        time,
        suppressEvents,
        force
      ) {
        _lazyTweens.length && _lazyRender();
        animation.render(time, suppressEvents, force);
        _lazyTweens.length && _lazyRender();
      },
      _numericIfPossible = function _numericIfPossible(value) {
        var n = parseFloat(value);
        return (n || 0 === n) &&
          (value + '').match(_delimitedValueExp).length < 2
          ? n
          : _isString(value)
          ? value.trim()
          : value;
      },
      _passThrough = function _passThrough(p) {
        return p;
      },
      _setDefaults = function _setDefaults(obj, defaults) {
        for (var p in defaults) p in obj || (obj[p] = defaults[p]);
        return obj;
      },
      _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
        return function (obj, defaults) {
          for (var p in defaults)
            p in obj ||
              ('duration' === p && excludeDuration) ||
              'ease' === p ||
              (obj[p] = defaults[p]);
        };
      },
      _merge = function _merge(base, toMerge) {
        for (var p in toMerge) base[p] = toMerge[p];
        return base;
      },
      _mergeDeep = function _mergeDeep(base, toMerge) {
        for (var p in toMerge)
          '__proto__' !== p &&
            'constructor' !== p &&
            'prototype' !== p &&
            (base[p] = _isObject(toMerge[p])
              ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p])
              : toMerge[p]);
        return base;
      },
      _copyExcluding = function _copyExcluding(obj, excluding) {
        var p,
          copy = {};
        for (p in obj) p in excluding || (copy[p] = obj[p]);
        return copy;
      },
      _inheritDefaults = function _inheritDefaults(vars) {
        var parent = vars.parent || _globalTimeline,
          func = vars.keyframes
            ? _setKeyframeDefaults(_isArray(vars.keyframes))
            : _setDefaults;
        if (_isNotFalse(vars.inherit))
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        return vars;
      },
      _arraysMatch = function _arraysMatch(a1, a2) {
        var i = a1.length,
          match = i === a2.length;
        while (match && i-- && a1[i] === a2[i]);
        return i < 0;
      },
      _addLinkedListItem = function _addLinkedListItem(
        parent,
        child,
        firstProp,
        lastProp,
        sortBy
      ) {
        if (void 0 === firstProp) firstProp = '_first';
        if (void 0 === lastProp) lastProp = '_last';
        var t,
          prev = parent[lastProp];
        if (sortBy) {
          t = child[sortBy];
          while (prev && prev[sortBy] > t) prev = prev._prev;
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
        if (child._next) child._next._prev = child;
        else parent[lastProp] = child;
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      },
      _removeLinkedListItem = function _removeLinkedListItem(
        parent,
        child,
        firstProp,
        lastProp
      ) {
        if (void 0 === firstProp) firstProp = '_first';
        if (void 0 === lastProp) lastProp = '_last';
        var prev = child._prev,
          next = child._next;
        if (prev) prev._next = next;
        else if (parent[firstProp] === child) parent[firstProp] = next;
        if (next) next._prev = prev;
        else if (parent[lastProp] === child) parent[lastProp] = prev;
        child._next = child._prev = child.parent = null;
      },
      _removeFromParent = function _removeFromParent(
        child,
        onlyIfParentHasAutoRemove
      ) {
        child.parent &&
          (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) &&
          child.parent.remove(child);
        child._act = 0;
      },
      _uncache = function _uncache(animation, child) {
        if (
          animation &&
          (!child || child._end > animation._dur || child._start < 0)
        ) {
          var a = animation;
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
        return animation;
      },
      _recacheAncestors = function _recacheAncestors(animation) {
        var parent = animation.parent;
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
        return animation;
      },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
        return (
          !animation ||
          (animation._ts && _hasNoPausedAncestors(animation.parent))
        );
      },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
        return animation._repeat
          ? _animationCycle(
              animation._tTime,
              (animation = animation.duration() + animation._rDelay)
            ) * animation
          : 0;
      },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
        var whole = Math.floor((tTime /= cycleDuration));
        return tTime && whole === tTime ? whole - 1 : whole;
      },
      _parentToChildTotalTime = function _parentToChildTotalTime(
        parentTime,
        child
      ) {
        return (
          (parentTime - child._start) * child._ts +
          (child._ts >= 0
            ? 0
            : child._dirty
            ? child.totalDuration()
            : child._tDur)
        );
      },
      _setEnd = function _setEnd(animation) {
        return (animation._end = _roundPrecise(
          animation._start +
            (animation._tDur /
              Math.abs(animation._ts || animation._rts || _tinyNum) || 0)
        ));
      },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(
            parent._time -
              (animation._ts > 0
                ? totalTime / animation._ts
                : ((animation._dirty
                    ? animation.totalDuration()
                    : animation._tDur) -
                    totalTime) /
                  -animation._ts)
          );
          _setEnd(animation);
          parent._dirty || _uncache(parent, animation);
        }
        return animation;
      },
      _postAddChecks = function _postAddChecks(timeline, child) {
        var t;
        if (child._time || (child._initted && !child._dur)) {
          t = _parentToChildTotalTime(timeline.rawTime(), child);
          if (
            !child._dur ||
            _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum
          )
            child.render(t, true);
        }
        if (
          _uncache(timeline, child)._dp &&
          timeline._initted &&
          timeline._time >= timeline._dur &&
          timeline._ts
        ) {
          if (timeline._dur < timeline.duration()) {
            t = timeline;
            while (t._dp) {
              t.rawTime() >= 0 && t.totalTime(t._tTime);
              t = t._dp;
            }
          }
          timeline._zTime = -_tinyNum;
        }
      },
      _addToTimeline = function _addToTimeline(
        timeline,
        child,
        position,
        skipChecks
      ) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise(
          (_isNumber(position)
            ? position
            : position || timeline !== _globalTimeline
            ? _parsePosition(timeline, position, child)
            : timeline._time) + child._delay
        );
        child._end = _roundPrecise(
          child._start +
            (child.totalDuration() / Math.abs(child.timeScale()) || 0)
        );
        _addLinkedListItem(
          timeline,
          child,
          '_first',
          '_last',
          timeline._sort ? '_start' : 0
        );
        _isFromOrFromStart(child) || (timeline._recent = child);
        skipChecks || _postAddChecks(timeline, child);
        return timeline;
      },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
        return (
          (_globals.ScrollTrigger ||
            _missingPlugin('scrollTrigger', trigger)) &&
          _globals.ScrollTrigger.create(trigger, animation)
        );
      },
      _attemptInitTween = function _attemptInitTween(
        tween,
        totalTime,
        force,
        suppressEvents
      ) {
        _initTween(tween, totalTime);
        if (!tween._initted) return 1;
        if (
          !force &&
          tween._pt &&
          ((tween._dur && false !== tween.vars.lazy) ||
            (!tween._dur && tween.vars.lazy)) &&
          _lastRenderedFrame !== _ticker.frame
        ) {
          _lazyTweens.push(tween);
          tween._lazy = [totalTime, suppressEvents];
          return 1;
        }
      },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(
        _ref
      ) {
        var parent = _ref.parent;
        return (
          parent &&
          parent._ts &&
          parent._initted &&
          !parent._lock &&
          (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent))
        );
      },
      _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
        var data = _ref2.data;
        return 'isFromStart' === data || 'isStart' === data;
      },
      _renderZeroDurationTween = function _renderZeroDurationTween(
        tween,
        totalTime,
        suppressEvents,
        force
      ) {
        var pt,
          iteration,
          prevIteration,
          prevRatio = tween.ratio,
          ratio =
            totalTime < 0 ||
            (!totalTime &&
              ((!tween._start &&
                _parentPlayheadIsBeforeStart(tween) &&
                !(!tween._initted && _isFromOrFromStart(tween))) ||
                ((tween._ts < 0 || tween._dp._ts < 0) &&
                  !_isFromOrFromStart(tween))))
              ? 0
              : 1,
          repeatDelay = tween._rDelay,
          tTime = 0;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && 1 & iteration && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (
          ratio !== prevRatio ||
          force ||
          tween._zTime === _tinyNum ||
          (!totalTime && tween._zTime)
        ) {
          if (
            !tween._initted &&
            _attemptInitTween(tween, totalTime, force, suppressEvents)
          )
            return;
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          tween._startAt &&
            totalTime < 0 &&
            tween._startAt.render(totalTime, true, true);
          tween._onUpdate && !suppressEvents && _callback(tween, 'onUpdate');
          tTime &&
            tween._repeat &&
            !suppressEvents &&
            tween.parent &&
            _callback(tween, 'onRepeat');
          if (
            (totalTime >= tween._tDur || totalTime < 0) &&
            tween.ratio === ratio
          ) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents) {
              _callback(
                tween,
                ratio ? 'onComplete' : 'onReverseComplete',
                true
              );
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) tween._zTime = totalTime;
      },
      _findNextPauseTween = function _findNextPauseTween(
        animation,
        prevTime,
        time
      ) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if ('isPause' === child.data && child._start > prevTime)
              return child;
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if ('isPause' === child.data && child._start < prevTime)
              return child;
            child = child._prev;
          }
        }
      },
      _setDuration = function _setDuration(
        animation,
        duration,
        skipUncache,
        leavePlayhead
      ) {
        var repeat = animation._repeat,
          dur = _roundPrecise(duration) || 0,
          totalProgress = animation._tTime / animation._tDur;
        totalProgress &&
          !leavePlayhead &&
          (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat
          ? dur
          : repeat < 0
          ? 1e10
          : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 && !leavePlayhead
          ? _alignPlayhead(
              animation,
              (animation._tTime = animation._tDur * totalProgress)
            )
          : animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
        return animation instanceof Timeline
          ? _uncache(animation)
          : _setDuration(animation, animation._dur);
      },
      _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc,
      },
      _parsePosition = function _parsePosition(
        animation,
        position,
        percentAnimation
      ) {
        var i,
          offset,
          isPercent,
          labels = animation.labels,
          recent = animation._recent || _zeroPosition,
          clippedDuration =
            animation.duration() >= _bigNum
              ? recent.endTime(false)
              : animation._dur;
        if (_isString(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = '%' === position.substr(-1);
          i = position.indexOf('=');
          if ('<' === offset || '>' === offset) {
            i >= 0 && (position = position.replace(/=/, ''));
            return (
              ('<' === offset
                ? recent._start
                : recent.endTime(recent._repeat >= 0)) +
              (parseFloat(position.substr(1)) || 0) *
                (isPercent
                  ? (i < 0 ? recent : percentAnimation).totalDuration() / 100
                  : 1)
            );
          }
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
          if (isPercent && percentAnimation)
            offset =
              (offset / 100) *
              (_isArray(percentAnimation)
                ? percentAnimation[0]
                : percentAnimation
              ).totalDuration();
          return i > 1
            ? _parsePosition(
                animation,
                position.substr(0, i - 1),
                percentAnimation
              ) + offset
            : clippedDuration + offset;
        }
        return null == position ? clippedDuration : +position;
      },
      _createTweenType = function _createTweenType(type, params, timeline) {
        var irVars,
          parent,
          isLegacy = _isNumber(params[1]),
          varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
          vars = params[varsIndex];
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline;
        if (type) {
          irVars = vars;
          parent = timeline;
          while (parent && !('immediateRender' in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2
            ? (vars.runBackwards = 1)
            : (vars.startAt = params[varsIndex - 1]);
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      },
      _conditionalReturn = function _conditionalReturn(value, func) {
        return value || 0 === value ? func(value) : func;
      },
      _clamp = function _clamp(min, max, value) {
        return value < min ? min : value > max ? max : value;
      },
      getUnit = function getUnit(value, v) {
        return !_isString(value) || !(v = _unitExp.exec(value)) ? '' : v[1];
      },
      clamp = function clamp(min, max, value) {
        return _conditionalReturn(value, function (v) {
          return _clamp(min, max, v);
        });
      },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
        return (
          value &&
          _isObject(value) &&
          'length' in value &&
          ((!nonEmpty && !value.length) ||
            (value.length - 1 in value && _isObject(value[0]))) &&
          !value.nodeType &&
          value !== _win
        );
      },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
        if (void 0 === accumulator) accumulator = [];
        return (
          ar.forEach(function (value) {
            var _accumulator;
            return (_isString(value) && !leaveStrings) || _isArrayLike(value, 1)
              ? (_accumulator = accumulator).push.apply(
                  _accumulator,
                  toArray(value)
                )
              : accumulator.push(value);
          }) || accumulator
        );
      },
      toArray = function toArray(value, scope, leaveStrings) {
        return _isString(value) && !leaveStrings && (_coreInitted || !_wake())
          ? _slice.call((scope || _doc).querySelectorAll(value), 0)
          : _isArray(value)
          ? _flatten(value, leaveStrings)
          : _isArrayLike(value)
          ? _slice.call(value, 0)
          : value
          ? [value]
          : [];
      },
      selector = function selector(value) {
        value = toArray(value)[0] || _warn('Invalid scope') || {};
        return function (v) {
          var el = value.current || value.nativeElement || value;
          return toArray(
            v,
            el.querySelectorAll
              ? el
              : el === value
              ? _warn('Invalid scope') || _doc.createElement('div')
              : value
          );
        };
      },
      shuffle = function shuffle(a) {
        return a.sort(function () {
          return 0.5 - Math.random();
        });
      },
      distribute = function distribute(v) {
        if (_isFunction(v)) return v;
        var vars = _isObject(v)
            ? v
            : {
                each: v,
              },
          ease = _parseEase(vars.ease),
          from = vars.from || 0,
          base = parseFloat(vars.base) || 0,
          cache = {},
          isDecimal = from > 0 && from < 1,
          ratios = isNaN(from) || isDecimal,
          axis = vars.axis,
          ratioX = from,
          ratioY = from;
        if (_isString(from))
          ratioX = ratioY =
            {
              center: 0.5,
              edges: 0.5,
              end: 1,
            }[from] || 0;
        else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function (i, target, a) {
          var originX,
            originY,
            x,
            y,
            d,
            j,
            max,
            min,
            wrapAt,
            l = (a || vars).length,
            distances = cache[l];
          if (!distances) {
            wrapAt = 'auto' === vars.grid ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
              max = -_bigNum;
              while (
                max < (max = a[wrapAt++].getBoundingClientRect().left) &&
                wrapAt < l
              );
              wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios
              ? Math.min(wrapAt, l) * ratioX - 0.5
              : from % wrapAt;
            originY =
              wrapAt === _bigNum
                ? 0
                : ratios
                ? (l * ratioY) / wrapAt - 0.5
                : (from / wrapAt) | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
              x = (j % wrapAt) - originX;
              y = originY - ((j / wrapAt) | 0);
              distances[j] = d = !axis
                ? _sqrt(x * x + y * y)
                : Math.abs('y' === axis ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
            'random' === from && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l =
              (parseFloat(vars.amount) ||
                parseFloat(vars.each) *
                  (wrapAt > l
                    ? l - 1
                    : !axis
                    ? Math.max(wrapAt, l / wrapAt)
                    : 'y' === axis
                    ? l / wrapAt
                    : wrapAt) ||
                0) * ('edges' === from ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
          l = (distances[i] - distances.min) / distances.max || 0;
          return (
            _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) +
            distances.u
          );
        };
      },
      _roundModifier = function _roundModifier(v) {
        var p = Math.pow(10, ((v + '').split('.')[1] || '').length);
        return function (raw) {
          var n = Math.round(parseFloat(raw) / v) * v * p;
          return (n - (n % 1)) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
      },
      snap = function snap(snapTo, value) {
        var radius,
          is2D,
          isArray = _isArray(snapTo);
        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if ((is2D = !_isNumber(snapTo[0]))) radius *= radius;
          } else snapTo = _roundModifier(snapTo.increment);
        }
        return _conditionalReturn(
          value,
          !isArray
            ? _roundModifier(snapTo)
            : _isFunction(snapTo)
            ? function (raw) {
                is2D = snapTo(raw);
                return Math.abs(is2D - raw) <= radius ? is2D : raw;
              }
            : function (raw) {
                var dx,
                  dy,
                  x = parseFloat(is2D ? raw.x : raw),
                  y = parseFloat(is2D ? raw.y : 0),
                  min = _bigNum,
                  closest = 0,
                  i = snapTo.length;
                while (i--) {
                  if (is2D) {
                    dx = snapTo[i].x - x;
                    dy = snapTo[i].y - y;
                    dx = dx * dx + dy * dy;
                  } else dx = Math.abs(snapTo[i] - x);
                  if (dx < min) {
                    min = dx;
                    closest = i;
                  }
                }
                closest = !radius || min <= radius ? snapTo[closest] : raw;
                return is2D || closest === raw || _isNumber(raw)
                  ? closest
                  : closest + getUnit(raw);
              }
        );
      },
      random = function random(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(
          _isArray(min)
            ? !max
            : true === roundingIncrement
            ? !!(roundingIncrement = 0)
            : !returnFunction,
          function () {
            return _isArray(min)
              ? min[~~(Math.random() * min.length)]
              : (roundingIncrement = roundingIncrement || 1e-5) &&
                  (returnFunction =
                    roundingIncrement < 1
                      ? Math.pow(10, (roundingIncrement + '').length - 2)
                      : 1) &&
                  Math.floor(
                    Math.round(
                      (min -
                        roundingIncrement / 2 +
                        Math.random() *
                          (max - min + 0.99 * roundingIncrement)) /
                        roundingIncrement
                    ) *
                      roundingIncrement *
                      returnFunction
                  ) / returnFunction;
          }
        );
      },
      pipe = function pipe() {
        for (
          var _len = arguments.length, functions = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          functions[_key] = arguments[_key];
        return function (value) {
          return functions.reduce(function (v, f) {
            return f(v);
          }, value);
        };
      },
      unitize = function unitize(func, unit) {
        return function (value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      },
      normalize = function normalize(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      },
      _wrapArray = function _wrapArray(a, wrapper, value) {
        return _conditionalReturn(value, function (index) {
          return a[~~wrapper(index)];
        });
      },
      wrap = function wrap(min, max, value) {
        var range = max - min;
        return _isArray(min)
          ? _wrapArray(min, wrap(0, min.length), max)
          : _conditionalReturn(value, function (value) {
              return ((range + ((value - min) % range)) % range) + min;
            });
      },
      wrapYoyo = function wrapYoyo(min, max, value) {
        var range = max - min,
          total = 2 * range;
        return _isArray(min)
          ? _wrapArray(min, wrapYoyo(0, min.length - 1), max)
          : _conditionalReturn(value, function (value) {
              value = (total + ((value - min) % total)) % total || 0;
              return min + (value > range ? total - value : value);
            });
      },
      _replaceRandom = function _replaceRandom(value) {
        var i,
          nums,
          end,
          isArray,
          prev = 0,
          s = '';
        while (~(i = value.indexOf('random(', prev))) {
          end = value.indexOf(')', i);
          isArray = '[' === value.charAt(i + 7);
          nums = value
            .substr(i + 7, end - i - 7)
            .match(isArray ? _delimitedValueExp : _strictNumExp);
          s +=
            value.substr(prev, i - prev) +
            random(
              isArray ? nums : +nums[0],
              isArray ? 0 : +nums[1],
              +nums[2] || 1e-5
            );
          prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
      },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin,
          outRange = outMax - outMin;
        return _conditionalReturn(value, function (value) {
          return outMin + (((value - inMin) / inRange) * outRange || 0);
        });
      },
      interpolate = function interpolate(start, end, progress, mutate) {
        var func = isNaN(start + end)
          ? 0
          : function (p) {
              return (1 - p) * start + p * end;
            };
        if (!func) {
          var p,
            i,
            interpolators,
            l,
            il,
            isString = _isString(start),
            master = {};
          true === progress && (mutate = 1) && (progress = null);
          if (isString) {
            start = {
              p: start,
            };
            end = {
              p: end,
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i = 1; i < l; i++)
              interpolators.push(interpolate(start[i - 1], start[i]));
            l--;
            func = function func(p) {
              p *= l;
              var i = Math.min(il, ~~p);
              return interpolators[i](p - i);
            };
            progress = end;
          } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
          if (!interpolators) {
            for (p in end) _addPropTween.call(master, start, p, 'get', end[p]);
            func = function func(p) {
              return (
                _renderPropTweens(p, master) || (isString ? start.p : start)
              );
            };
          }
        }
        return _conditionalReturn(progress, func);
      },
      _getLabelInDirection = function _getLabelInDirection(
        timeline,
        fromTime,
        backward
      ) {
        var p,
          distance,
          label,
          labels = timeline.labels,
          min = _bigNum;
        for (p in labels) {
          distance = labels[p] - fromTime;
          if (
            distance < 0 === !!backward &&
            distance &&
            min > (distance = Math.abs(distance))
          ) {
            label = p;
            min = distance;
          }
        }
        return label;
      },
      _callback = function _callback(animation, type, executeLazyFirst) {
        var params,
          scope,
          v = animation.vars,
          callback = v[type];
        if (!callback) return;
        params = v[type + 'Params'];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        return params ? callback.apply(scope, params) : callback.call(scope);
      },
      _interrupt = function _interrupt(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(false);
        animation.progress() < 1 && _callback(animation, 'onInterrupt');
        return animation;
      },
      _createPlugin = function _createPlugin(config) {
        config = (!config.name && config['default']) || config;
        var name = config.name,
          isFunc = _isFunction(config),
          Plugin =
            name && !isFunc && config.init
              ? function () {
                  this._props = [];
                }
              : config,
          instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0,
          },
          statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0,
          };
        _wake();
        if (config !== Plugin) {
          if (_plugins[name]) return;
          _setDefaults(
            Plugin,
            _setDefaults(_copyExcluding(config, instanceDefaults), statics)
          );
          _merge(
            Plugin.prototype,
            _merge(instanceDefaults, _copyExcluding(config, statics))
          );
          _plugins[(Plugin.prop = name)] = Plugin;
          if (config.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
          }
          name =
            ('css' === name
              ? 'CSS'
              : name.charAt(0).toUpperCase() + name.substr(1)) + 'Plugin';
        }
        _addGlobal(name, Plugin);
        config.register && config.register(gsap, Plugin, PropTween);
      },
      _255 = 255,
      _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0],
      },
      _hue = function _hue(h, m1, m2) {
        h += h < 0 ? 1 : h > 1 ? -1 : 0;
        return (
          ((6 * h < 1
            ? m1 + (m2 - m1) * h * 6
            : h < 0.5
            ? m2
            : 3 * h < 2
            ? m1 + (m2 - m1) * (2 / 3 - h) * 6
            : m1) *
            _255 +
            0.5) |
          0
        );
      },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
        var r,
          g,
          b,
          h,
          s,
          l,
          max,
          min,
          d,
          wasHSL,
          a = !v
            ? _colorLookup.black
            : _isNumber(v)
            ? [v >> 16, (v >> 8) & _255, v & _255]
            : 0;
        if (!a) {
          if (',' === v.substr(-1)) v = v.substr(0, v.length - 1);
          if (_colorLookup[v]) a = _colorLookup[v];
          else if ('#' === v.charAt(0)) {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v =
                '#' +
                r +
                r +
                g +
                g +
                b +
                b +
                (5 === v.length ? v.charAt(4) + v.charAt(4) : '');
            }
            if (9 === v.length) {
              a = parseInt(v.substr(1, 6), 16);
              return [
                a >> 16,
                (a >> 8) & _255,
                a & _255,
                parseInt(v.substr(7), 16) / 255,
              ];
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, (v >> 8) & _255, v & _255];
          } else if ('hsl' === v.substr(0, 3)) {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
              h = (+a[0] % 360) / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              r = 2 * l - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf('=')) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else a = v.match(_strictNumExp) || _colorLookup.transparent;
          a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
          if (max === min) h = s = 0;
          else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h =
              max === r
                ? (g - b) / d + (g < b ? 6 : 0)
                : max === g
                ? (b - r) / d + 2
                : (r - g) / d + 4;
            h *= 60;
          }
          a[0] = ~~(h + 0.5);
          a[1] = ~~(100 * s + 0.5);
          a[2] = ~~(100 * l + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      },
      _colorOrderData = function _colorOrderData(v) {
        var values = [],
          c = [],
          i = -1;
        v.split(_colorExp).forEach(function (v) {
          var a = v.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push((i += a.length + 1));
        });
        values.c = c;
        return values;
      },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
        var c,
          shell,
          d,
          l,
          result = '',
          colors = (s + result).match(_colorExp),
          type = toHSL ? 'hsla(' : 'rgba(',
          i = 0;
        if (!colors) return s;
        colors = colors.map(function (color) {
          return (
            (color = splitColor(color, toHSL, 1)) &&
            type +
              (toHSL
                ? color[0] + ',' + color[1] + '%,' + color[2] + '%,' + color[3]
                : color.join(',')) +
              ')'
          );
        });
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, '1').split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i < l; i++)
              result +=
                shell[i] +
                (~c.indexOf(i)
                  ? colors.shift() || type + '0,0,0,0)'
                  : (d.length
                      ? d
                      : colors.length
                      ? colors
                      : orderMatchData
                    ).shift());
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i < l; i++) result += shell[i] + colors[i];
        }
        return result + shell[l];
      },
      _colorExp = (function () {
        var p,
          s =
            '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
        for (p in _colorLookup) s += '|' + p + '\\b';
        return new RegExp(s + ')', 'gi');
      })(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
        var toHSL,
          combined = a.join(' ');
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      },
      _ticker = (function () {
        var _id,
          _req,
          _raf,
          _self,
          _delta,
          _i,
          _getTime = Date.now,
          _lagThreshold = 500,
          _adjustedLag = 33,
          _startTime = _getTime(),
          _lastUpdate = _startTime,
          _gap = 1e3 / 240,
          _nextTime = _gap,
          _listeners = [],
          _tick = function _tick(v) {
            var overlap,
              dispatch,
              time,
              frame,
              elapsed = _getTime() - _lastUpdate,
              manual = true === v;
            elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
              frame = ++_self.frame;
              _delta = time - 1e3 * _self.time;
              _self.time = time /= 1e3;
              _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
              dispatch = 1;
            }
            manual || (_id = _req(_tick));
            if (dispatch)
              for (_i = 0; _i < _listeners.length; _i++)
                _listeners[_i](time, _delta, frame, v);
          };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted && _windowExists()) {
                _win = _coreInitted = window;
                _doc = _win.document || {};
                _globals.gsap = gsap;
                (_win.gsapVersions || (_win.gsapVersions = [])).push(
                  gsap.version
                );
                _install(
                  _installScope ||
                    _win.GreenSockGlobals ||
                    (!_win.gsap && _win) ||
                    {}
                );
                _raf = _win.requestAnimationFrame;
              }
              _id && _self.sleep();
              _req =
                _raf ||
                function (f) {
                  return setTimeout(f, (_nextTime - 1e3 * _self.time + 1) | 0);
                };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum;
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = 1e3 * _self.time + _gap;
          },
          add: function add(callback, once, prioritize) {
            var func = once
              ? function (t, d, f, v) {
                  callback(t, d, f, v);
                  _self.remove(func);
                }
              : callback;
            _self.remove(callback);
            _listeners[prioritize ? 'unshift' : 'push'](func);
            _wake();
            return func;
          },
          remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) &&
              _listeners.splice(i, 1) &&
              _i >= i &&
              _i--;
          },
          _listeners,
        };
        return _self;
      })(),
      _wake = function _wake() {
        return !_tickerActive && _ticker.wake();
      },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
        var index,
          val,
          parsedVal,
          obj = {},
          split = value.substr(1, value.length - 3).split(':'),
          key = split[0],
          i = 1,
          l = split.length;
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(',') : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal)
            ? parsedVal.replace(_quotesExp, '').trim()
            : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      },
      _valueInParentheses = function _valueInParentheses(value) {
        var open = value.indexOf('(') + 1,
          close = value.indexOf(')'),
          nested = value.indexOf('(', open);
        return value.substring(
          open,
          ~nested && nested < close ? value.indexOf(')', close + 1) : close
        );
      },
      _configEaseFromString = function _configEaseFromString(name) {
        var split = (name + '').split('('),
          ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config
          ? ease.config.apply(
              null,
              ~name.indexOf('{')
                ? [_parseObjectInString(split[1])]
                : _valueInParentheses(name).split(',').map(_numericIfPossible)
            )
          : _easeMap._CE && _customEaseExp.test(name)
          ? _easeMap._CE('', name)
          : ease;
      },
      _invertEase = function _invertEase(ease) {
        return function (p) {
          return 1 - ease(1 - p);
        };
      },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
        var ease,
          child = timeline._first;
        while (child) {
          if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo);
          else if (
            child.vars.yoyoEase &&
            (!child._yoyo || !child._repeat) &&
            child._yoyo !== isYoyo
          )
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          child = child._next;
        }
      },
      _parseEase = function _parseEase(ease, defaultEase) {
        return !ease
          ? defaultEase
          : (_isFunction(ease)
              ? ease
              : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
        if (void 0 === easeOut)
          easeOut = function easeOut(p) {
            return 1 - easeIn(1 - p);
          };
        if (void 0 === easeInOut)
          easeInOut = function easeInOut(p) {
            return p < 0.5 ? easeIn(2 * p) / 2 : 1 - easeIn(2 * (1 - p)) / 2;
          };
        var lowercaseName,
          ease = {
            easeIn,
            easeOut,
            easeInOut,
          };
        _forEachName(names, function (name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[(lowercaseName = name.toLowerCase())] = easeOut;
          for (var p in ease)
            _easeMap[
              lowercaseName +
                ('easeIn' === p ? '.in' : 'easeOut' === p ? '.out' : '.inOut')
            ] = _easeMap[name + '.' + p] = ease[p];
        });
        return ease;
      },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
        return function (p) {
          return p < 0.5
            ? (1 - easeOut(1 - 2 * p)) / 2
            : 0.5 + easeOut(2 * (p - 0.5)) / 2;
        };
      },
      _configElastic = function _configElastic(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1,
          p2 =
            (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1),
          p3 = (p2 / _2PI) * (Math.asin(1 / p1) || 0),
          easeOut = function easeOut(p) {
            return 1 === p
              ? 1
              : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
          },
          ease =
            'out' === type
              ? easeOut
              : 'in' === type
              ? function (p) {
                  return 1 - easeOut(1 - p);
                }
              : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function (amplitude, period) {
          return _configElastic(type, amplitude, period);
        };
        return ease;
      },
      _configBack = function _configBack(type, overshoot) {
        if (void 0 === overshoot) overshoot = 1.70158;
        var easeOut = function easeOut(p) {
            return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
          },
          ease =
            'out' === type
              ? easeOut
              : 'in' === type
              ? function (p) {
                  return 1 - easeOut(1 - p);
                }
              : _easeInOutFromOut(easeOut);
        ease.config = function (overshoot) {
          return _configBack(type, overshoot);
        };
        return ease;
      };
    _forEachName('Linear,Quad,Cubic,Quart,Quint,Strong', function (name, i) {
      var power = i < 5 ? i + 1 : i;
      _insertEase(
        name + ',Power' + (power - 1),
        i
          ? function (p) {
              return Math.pow(p, power);
            }
          : function (p) {
              return p;
            },
        function (p) {
          return 1 - Math.pow(1 - p, power);
        },
        function (p) {
          return p < 0.5
            ? Math.pow(2 * p, power) / 2
            : 1 - Math.pow(2 * (1 - p), power) / 2;
        }
      );
    });
    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    _insertEase(
      'Elastic',
      _configElastic('in'),
      _configElastic('out'),
      _configElastic()
    );
    (function (n, c) {
      var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
          return p < n1
            ? n * p * p
            : p < n2
            ? n * Math.pow(p - 1.5 / c, 2) + 0.75
            : p < n3
            ? n * (p -= 2.25 / c) * p + 0.9375
            : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
      _insertEase(
        'Bounce',
        function (p) {
          return 1 - easeOut(1 - p);
        },
        easeOut
      );
    })(7.5625, 2.75);
    _insertEase('Expo', function (p) {
      return p ? Math.pow(2, 10 * (p - 1)) : 0;
    });
    _insertEase('Circ', function (p) {
      return -(_sqrt(1 - p * p) - 1);
    });
    _insertEase('Sine', function (p) {
      return 1 === p ? 1 : -_cos(p * _HALF_PI) + 1;
    });
    _insertEase('Back', _configBack('in'), _configBack('out'), _configBack());
    _easeMap.SteppedEase =
      _easeMap.steps =
      _globals.SteppedEase =
        {
          config: function config(steps, immediateStart) {
            if (void 0 === steps) steps = 1;
            var p1 = 1 / steps,
              p2 = steps + (immediateStart ? 0 : 1),
              p3 = immediateStart ? 1 : 0,
              max = 1 - _tinyNum;
            return function (p) {
              return (((p2 * _clamp(0, max, p)) | 0) + p3) * p1;
            };
          },
        };
    _defaults.ease = _easeMap['quad.out'];
    _forEachName(
      'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
      function (name) {
        return (_callbackNames += name + ',' + name + 'Params,');
      }
    );
    var GSCache = function GSCache(target, harness) {
      this.id = _gsID++;
      target._gsap = this;
      this.target = target;
      this.harness = harness;
      this.get = harness ? harness.get : _getProperty;
      this.set = harness ? harness.getSetter : _getSetter;
    };
    var Animation = (function () {
      function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if ((this._repeat = vars.repeat === 1 / 0 ? -2 : vars.repeat || 0)) {
          this._rDelay = vars.repeatDelay || 0;
          this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        _tickerActive || _ticker.wake();
      }
      var _proto = Animation.prototype;
      _proto.delay = function delay(value) {
        if (value || 0 === value) {
          this.parent &&
            this.parent.smoothChildTiming &&
            this.startTime(this._start + value - this._delay);
          this._delay = value;
          return this;
        }
        return this._delay;
      };
      _proto.duration = function duration(value) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0
                ? value + (value + this._rDelay) * this._repeat
                : value
            )
          : this.totalDuration() && this._dur;
      };
      _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(
          this,
          this._repeat < 0
            ? value
            : (value - this._repeat * this._rDelay) / (this._repeat + 1)
        );
      };
      _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
          _alignPlayhead(this, _totalTime);
          !parent._dp || parent.parent || _postAddChecks(parent, this);
          while (parent && parent.parent) {
            if (
              parent.parent._time !==
              parent._start +
                (parent._ts >= 0
                  ? parent._tTime / parent._ts
                  : (parent.totalDuration() - parent._tTime) / -parent._ts)
            )
              parent.totalTime(parent._tTime, true);
            parent = parent.parent;
          }
          if (
            !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && _totalTime < this._tDur) ||
              (this._ts < 0 && _totalTime > 0) ||
              (!this._tDur && !_totalTime))
          )
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (
          this._tTime !== _totalTime ||
          (!this._dur && !suppressEvents) ||
          (this._initted && Math.abs(this._zTime) === _tinyNum) ||
          (!_totalTime && !this._initted && (this.add || this._ptLookup))
        ) {
          this._ts || (this._pTime = _totalTime);
          _lazySafeRender(this, _totalTime, suppressEvents);
        }
        return this;
      };
      _proto.time = function time(value, suppressEvents) {
        return arguments.length
          ? this.totalTime(
              Math.min(
                this.totalDuration(),
                value + _elapsedCycleDuration(this)
              ) %
                (this._dur + this._rDelay) || (value ? this._dur : 0),
              suppressEvents
            )
          : this._time;
      };
      _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * value, suppressEvents)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      };
      _proto.progress = function progress(value, suppressEvents) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(1 & this.iteration()) ? 1 - value : value) +
                _elapsedCycleDuration(this),
              suppressEvents
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      };
      _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(
              this._time + (value - 1) * cycleDuration,
              suppressEvents
            )
          : this._repeat
          ? _animationCycle(this._tTime, cycleDuration) + 1
          : 1;
      };
      _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
        if (this._rts === value) return this;
        var tTime =
          this.parent && this._ts
            ? _parentToChildTotalTime(this.parent._time, this)
            : this._tTime;
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
        this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
        _setEnd(this);
        return _recacheAncestors(this);
      };
      _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
          this._ps = value;
          if (value) {
            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
            this._ts = this._act = 0;
          } else {
            _wake();
            this._ts = this._rts;
            this.totalTime(
              this.parent && !this.parent.smoothChildTiming
                ? this.rawTime()
                : this._tTime || this._pTime,
              1 === this.progress() &&
                Math.abs(this._zTime) !== _tinyNum &&
                (this._tTime -= _tinyNum)
            );
          }
        }
        return this;
      };
      _proto.startTime = function startTime(value) {
        if (arguments.length) {
          this._start = value;
          var parent = this.parent || this._dp;
          parent &&
            (parent._sort || !this.parent) &&
            _addToTimeline(parent, this, value - this._delay);
          return this;
        }
        return this._start;
      };
      _proto.endTime = function endTime(includeRepeats) {
        return (
          this._start +
          (_isNotFalse(includeRepeats)
            ? this.totalDuration()
            : this.duration()) /
            Math.abs(this._ts || 1)
        );
      };
      _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp;
        return !parent
          ? this._tTime
          : wrapRepeats &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
          ? this._tTime % (this._dur + this._rDelay)
          : !this._ts
          ? this._tTime
          : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
      };
      _proto.globalTime = function globalTime(rawTime) {
        var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();
        while (animation) {
          time = animation._start + time / (animation._ts || 1);
          animation = animation._dp;
        }
        return time;
      };
      _proto.repeat = function repeat(value) {
        if (arguments.length) {
          this._repeat = value === 1 / 0 ? -2 : value;
          return _onUpdateTotalDuration(this);
        }
        return -2 === this._repeat ? 1 / 0 : this._repeat;
      };
      _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
          var time = this._time;
          this._rDelay = value;
          _onUpdateTotalDuration(this);
          return time ? this.time(time) : this;
        }
        return this._rDelay;
      };
      _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
          this._yoyo = value;
          return this;
        }
        return this._yoyo;
      };
      _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(
          _parsePosition(this, position),
          _isNotFalse(suppressEvents)
        );
      };
      _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(
          includeDelay ? -this._delay : 0,
          _isNotFalse(suppressEvents)
        );
      };
      _proto.play = function play(from, suppressEvents) {
        null != from && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
      };
      _proto.reverse = function reverse(from, suppressEvents) {
        null != from && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
      };
      _proto.pause = function pause(atTime, suppressEvents) {
        null != atTime && this.seek(atTime, suppressEvents);
        return this.paused(true);
      };
      _proto.resume = function resume() {
        return this.paused(false);
      };
      _proto.reversed = function reversed(value) {
        if (arguments.length) {
          !!value !== this.reversed() &&
            this.timeScale(-this._rts || (value ? -_tinyNum : 0));
          return this;
        }
        return this._rts < 0;
      };
      _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
      };
      _proto.isActive = function isActive() {
        var rawTime,
          parent = this.parent || this._dp,
          start = this._start;
        return !!(
          !parent ||
          (this._ts &&
            this._initted &&
            parent.isActive() &&
            (rawTime = parent.rawTime(true)) >= start &&
            rawTime < this.endTime(true) - _tinyNum)
        );
      };
      _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
          if (!callback) delete vars[type];
          else {
            vars[type] = callback;
            params && (vars[type + 'Params'] = params);
            'onUpdate' === type && (this._onUpdate = callback);
          }
          return this;
        }
        return vars[type];
      };
      _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function (resolve) {
          var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
              var _then = self.then;
              self.then = null;
              _isFunction(f) &&
                (f = f(self)) &&
                (f.then || f === self) &&
                (self.then = _then);
              resolve(f);
              self.then = _then;
            };
          if (
            (self._initted && 1 === self.totalProgress() && self._ts >= 0) ||
            (!self._tTime && self._ts < 0)
          )
            _resolve();
          else self._prom = _resolve;
        });
      };
      _proto.kill = function kill() {
        _interrupt(this);
      };
      return Animation;
    })();
    _setDefaults(Animation.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: false,
      parent: null,
      _initted: false,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -_tinyNum,
      _prom: 0,
      _ps: false,
      _rts: 1,
    });
    var Timeline = (function (_Animation) {
      _inheritsLoose(Timeline, _Animation);
      function Timeline(vars, position) {
        var _this;
        if (void 0 === vars) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline &&
          _addToTimeline(
            vars.parent || _globalTimeline,
            _assertThisInitialized(_this),
            position
          );
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger &&
          _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
      }
      var _proto2 = Timeline.prototype;
      _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
      };
      _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
      };
      _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
      };
      _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
      };
      _proto2.call = function call(callback, params, position) {
        return _addToTimeline(
          this,
          Tween.delayedCall(0, callback, params),
          position
        );
      };
      _proto2.staggerTo = function staggerTo(
        targets,
        duration,
        vars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      ) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
      };
      _proto2.staggerFrom = function staggerFrom(
        targets,
        duration,
        vars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      ) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(
          vars.immediateRender
        );
        return this.staggerTo(
          targets,
          duration,
          vars,
          stagger,
          position,
          onCompleteAll,
          onCompleteAllParams
        );
      };
      _proto2.staggerFromTo = function staggerFromTo(
        targets,
        duration,
        fromVars,
        toVars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      ) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(
          toVars.immediateRender
        );
        return this.staggerTo(
          targets,
          duration,
          toVars,
          stagger,
          position,
          onCompleteAll,
          onCompleteAllParams
        );
      };
      _proto2.render = function render(totalTime, suppressEvents, force) {
        var time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo,
          prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
          crossingStart =
            this._zTime < 0 !== totalTime < 0 && (this._initted || !dur);
        this !== _globalTimeline &&
          tTime > tDur &&
          totalTime >= 0 &&
          (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
          if (prevTime !== this._time && dur) {
            tTime += this._time - prevTime;
            totalTime += this._time - prevTime;
          }
          time = tTime;
          prevStart = this._start;
          timeScale = this._ts;
          prevPaused = !timeScale;
          if (crossingStart) {
            dur || (prevTime = this._zTime);
            (totalTime || !suppressEvents) && (this._zTime = totalTime);
          }
          if (this._repeat) {
            yoyo = this._yoyo;
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && totalTime < 0)
              return this.totalTime(
                100 * cycleDuration + totalTime,
                suppressEvents,
                force
              );
            time = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);
              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }
              time > dur && (time = dur);
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            !prevTime &&
              this._tTime &&
              prevIteration !== iteration &&
              (prevIteration = iteration);
            if (yoyo && 1 & iteration) {
              time = dur - time;
              isYoyo = 1;
            }
            if (iteration !== prevIteration && !this._lock) {
              var rewinding = yoyo && 1 & prevIteration,
                doesWrap = rewinding === (yoyo && 1 & iteration);
              iteration < prevIteration && (rewinding = !rewinding);
              prevTime = rewinding ? 0 : dur;
              this._lock = 1;
              this.render(
                prevTime ||
                  (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)),
                suppressEvents,
                !dur
              )._lock = 0;
              this._tTime = tTime;
              !suppressEvents && this.parent && _callback(this, 'onRepeat');
              this.vars.repeatRefresh &&
                !isYoyo &&
                (this.invalidate()._lock = 1);
              if (
                (prevTime && prevTime !== this._time) ||
                prevPaused !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act)
              )
                return this;
              dur = this._dur;
              tDur = this._tDur;
              if (doesWrap) {
                this._lock = 2;
                prevTime = rewinding ? dur : -1e-4;
                this.render(prevTime, true);
                this.vars.repeatRefresh && !isYoyo && this.invalidate();
              }
              this._lock = 0;
              if (!this._ts && !prevPaused) return this;
              _propagateYoyoEase(this, isYoyo);
            }
          }
          if (this._hasPause && !this._forcing && this._lock < 2) {
            pauseTween = _findNextPauseTween(
              this,
              _roundPrecise(prevTime),
              _roundPrecise(time)
            );
            if (pauseTween) tTime -= time - (time = pauseTween._start);
          }
          this._tTime = tTime;
          this._time = time;
          this._act = !timeScale;
          if (!this._initted) {
            this._onUpdate = this.vars.onUpdate;
            this._initted = 1;
            this._zTime = totalTime;
            prevTime = 0;
          }
          if (!prevTime && time && !suppressEvents) {
            _callback(this, 'onStart');
            if (this._tTime !== tTime) return this;
          }
          if (time >= prevTime && totalTime >= 0) {
            child = this._first;
            while (child) {
              next = child._next;
              if (
                (child._act || time >= child._start) &&
                child._ts &&
                pauseTween !== child
              ) {
                if (child.parent !== this)
                  return this.render(totalTime, suppressEvents, force);
                child.render(
                  child._ts > 0
                    ? (time - child._start) * child._ts
                    : (child._dirty ? child.totalDuration() : child._tDur) +
                        (time - child._start) * child._ts,
                  suppressEvents,
                  force
                );
                if (time !== this._time || (!this._ts && !prevPaused)) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = -_tinyNum);
                  break;
                }
              }
              child = next;
            }
          } else {
            child = this._last;
            var adjustedTime = totalTime < 0 ? totalTime : time;
            while (child) {
              next = child._prev;
              if (
                (child._act || adjustedTime <= child._end) &&
                child._ts &&
                pauseTween !== child
              ) {
                if (child.parent !== this)
                  return this.render(totalTime, suppressEvents, force);
                child.render(
                  child._ts > 0
                    ? (adjustedTime - child._start) * child._ts
                    : (child._dirty ? child.totalDuration() : child._tDur) +
                        (adjustedTime - child._start) * child._ts,
                  suppressEvents,
                  force
                );
                if (time !== this._time || (!this._ts && !prevPaused)) {
                  pauseTween = 0;
                  next &&
                    (tTime += this._zTime =
                      adjustedTime ? -_tinyNum : _tinyNum);
                  break;
                }
              }
              child = next;
            }
          }
          if (pauseTween && !suppressEvents) {
            this.pause();
            pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime =
              time >= prevTime ? 1 : -1;
            if (this._ts) {
              this._start = prevStart;
              _setEnd(this);
              return this.render(totalTime, suppressEvents, force);
            }
          }
          this._onUpdate &&
            !suppressEvents &&
            _callback(this, 'onUpdate', true);
          if (
            (tTime === tDur && this._tTime >= this.totalDuration()) ||
            (!tTime && prevTime)
          )
            if (
              prevStart === this._start ||
              Math.abs(timeScale) !== Math.abs(this._ts)
            )
              if (!this._lock) {
                (totalTime || !dur) &&
                  ((tTime === tDur && this._ts > 0) ||
                    (!tTime && this._ts < 0)) &&
                  _removeFromParent(this, 1);
                if (
                  !suppressEvents &&
                  !(totalTime < 0 && !prevTime) &&
                  (tTime || prevTime || !tDur)
                ) {
                  _callback(
                    this,
                    tTime === tDur && totalTime >= 0
                      ? 'onComplete'
                      : 'onReverseComplete',
                    true
                  );
                  this._prom &&
                    !(tTime < tDur && this.timeScale() > 0) &&
                    this._prom();
                }
              }
        }
        return this;
      };
      _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) ||
          (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
          if (_isArray(child)) {
            child.forEach(function (obj) {
              return _this2.add(obj, position);
            });
            return this;
          }
          if (_isString(child)) return this.addLabel(child, position);
          if (_isFunction(child)) child = Tween.delayedCall(0, child);
          else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this;
      };
      _proto2.getChildren = function getChildren(
        nested,
        tweens,
        timelines,
        ignoreBeforeTime
      ) {
        if (void 0 === nested) nested = true;
        if (void 0 === tweens) tweens = true;
        if (void 0 === timelines) timelines = true;
        if (void 0 === ignoreBeforeTime) ignoreBeforeTime = -_bigNum;
        var a = [],
          child = this._first;
        while (child) {
          if (child._start >= ignoreBeforeTime)
            if (child instanceof Tween) tweens && a.push(child);
            else {
              timelines && a.push(child);
              nested &&
                a.push.apply(a, child.getChildren(true, tweens, timelines));
            }
          child = child._next;
        }
        return a;
      };
      _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1),
          i = animations.length;
        while (i--) if (animations[i].vars.id === id) return animations[i];
      };
      _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
      };
      _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts)
          this._start = _roundPrecise(
            _ticker.time -
              (this._ts > 0
                ? _totalTime2 / this._ts
                : (this.totalDuration() - _totalTime2) / -this._ts)
          );
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
      };
      _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
      };
      _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
      };
      _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = 'isPause';
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
      };
      _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while (child) {
          if (child._start === position && 'isPause' === child.data)
            _removeFromParent(child);
          child = child._next;
        }
      };
      _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;
        while (i--)
          _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
      };
      _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var children,
          a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive);
        while (child) {
          if (child instanceof Tween) {
            if (
              _arrayContainsAny(child._targets, parsedTargets) &&
              (isGlobalTime
                ? (!_overwritingTween || (child._initted && child._ts)) &&
                  child.globalTime(0) <= onlyActive &&
                  child.globalTime(child.totalDuration()) > onlyActive
                : !onlyActive || child.isActive())
            )
              a.push(child);
          } else if (
            (children = child.getTweensOf(parsedTargets, onlyActive)).length
          )
            a.push.apply(a, children);
          child = child._next;
        }
        return a;
      };
      _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var initted,
          tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          tween = Tween.to(
            tl,
            _setDefaults(
              {
                ease: vars.ease || 'none',
                lazy: false,
                immediateRender: false,
                time: endTime,
                overwrite: 'auto',
                duration:
                  vars.duration ||
                  Math.abs(
                    (endTime -
                      (startAt && 'time' in startAt
                        ? startAt.time
                        : tl._time)) /
                      tl.timeScale()
                  ) ||
                  _tinyNum,
                onStart: function onStart() {
                  tl.pause();
                  if (!initted) {
                    var duration =
                      vars.duration ||
                      Math.abs(
                        (endTime -
                          (startAt && 'time' in startAt
                            ? startAt.time
                            : tl._time)) /
                          tl.timeScale()
                      );
                    tween._dur !== duration &&
                      _setDuration(tween, duration, 0, 1).render(
                        tween._time,
                        true,
                        true
                      );
                    initted = 1;
                  }
                  _onStart && _onStart.apply(tween, onStartParams || []);
                },
              },
              vars
            )
          );
        return immediateRender ? tween.render(0) : tween;
      };
      _proto2.tweenFromTo = function tweenFromTo(
        fromPosition,
        toPosition,
        vars
      ) {
        return this.tweenTo(
          toPosition,
          _setDefaults(
            {
              startAt: {
                time: _parsePosition(this, fromPosition),
              },
            },
            vars
          )
        );
      };
      _proto2.recent = function recent() {
        return this._recent;
      };
      _proto2.nextLabel = function nextLabel(afterTime) {
        if (void 0 === afterTime) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
      };
      _proto2.previousLabel = function previousLabel(beforeTime) {
        if (void 0 === beforeTime) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
      };
      _proto2.currentLabel = function currentLabel(value) {
        return arguments.length
          ? this.seek(value, true)
          : this.previousLabel(this._time + _tinyNum);
      };
      _proto2.shiftChildren = function shiftChildren(
        amount,
        adjustLabels,
        ignoreBeforeTime
      ) {
        if (void 0 === ignoreBeforeTime) ignoreBeforeTime = 0;
        var p,
          child = this._first,
          labels = this.labels;
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            child._start += amount;
            child._end += amount;
          }
          child = child._next;
        }
        if (adjustLabels)
          for (p in labels)
            if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        return _uncache(this);
      };
      _proto2.invalidate = function invalidate() {
        var child = this._first;
        this._lock = 0;
        while (child) {
          child.invalidate();
          child = child._next;
        }
        return _Animation.prototype.invalidate.call(this);
      };
      _proto2.clear = function clear(includeLabels) {
        if (void 0 === includeLabels) includeLabels = true;
        var next,
          child = this._first;
        while (child) {
          next = child._next;
          this.remove(child);
          child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
      };
      _proto2.totalDuration = function totalDuration(value) {
        var prev,
          start,
          parent,
          max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum;
        if (arguments.length)
          return self.timeScale(
            (self._repeat < 0 ? self.duration() : self.totalDuration()) /
              (self.reversed() ? -value : value)
          );
        if (self._dirty) {
          parent = self.parent;
          while (child) {
            prev = child._prev;
            child._dirty && child.totalDuration();
            start = child._start;
            if (start > prevStart && self._sort && child._ts && !self._lock) {
              self._lock = 1;
              _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
            } else prevStart = start;
            if (start < 0 && child._ts) {
              max -= start;
              if (
                (!parent && !self._dp) ||
                (parent && parent.smoothChildTiming)
              ) {
                self._start += start / self._ts;
                self._time -= start;
                self._tTime -= start;
              }
              self.shiftChildren(-start, false, -Infinity);
              prevStart = 0;
            }
            child._end > max && child._ts && (max = child._end);
            child = prev;
          }
          _setDuration(
            self,
            self === _globalTimeline && self._time > max ? self._time : max,
            1,
            1
          );
          self._dirty = 0;
        }
        return self._tDur;
      };
      Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
          _lazySafeRender(
            _globalTimeline,
            _parentToChildTotalTime(time, _globalTimeline)
          );
          _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame += _config.autoSleep || 120;
          var child = _globalTimeline._first;
          if (!child || !child._ts)
            if (_config.autoSleep && _ticker._listeners.length < 2) {
              while (child && !child._ts) child = child._next;
              child || _ticker.sleep();
            }
        }
      };
      return Timeline;
    })(Animation);
    _setDefaults(Timeline.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0,
    });
    var _overwritingTween,
      _forceAllPropTweens,
      _addComplexStringPropTween = function _addComplexStringPropTween(
        target,
        prop,
        start,
        end,
        setter,
        stringFilter,
        funcParam
      ) {
        var result,
          startNums,
          color,
          endNum,
          chunk,
          startNum,
          hasRandom,
          a,
          pt = new PropTween(
            this._pt,
            target,
            prop,
            0,
            1,
            _renderComplexString,
            null,
            setter
          ),
          index = 0,
          matchIndex = 0;
        pt.b = start;
        pt.e = end;
        start += '';
        end += '';
        if ((hasRandom = ~end.indexOf('random('))) end = _replaceRandom(end);
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while ((result = _complexStringNumExp.exec(end))) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
          if (color) color = (color + 1) % 5;
          else if ('rgba(' === chunk.substr(-5)) color = 1;
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || 1 === matchIndex ? chunk : ',',
              s: startNum,
              c:
                '=' === endNum.charAt(1)
                  ? _parseRelative(startNum, endNum) - startNum
                  : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0,
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : '';
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) pt.e = 0;
        this._pt = pt;
        return pt;
      },
      _addPropTween = function _addPropTween(
        target,
        prop,
        start,
        end,
        index,
        targets,
        modifier,
        stringFilter,
        funcParam
      ) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var pt,
          currentValue = target[prop],
          parsedStart =
            'get' !== start
              ? start
              : !_isFunction(currentValue)
              ? currentValue
              : funcParam
              ? target[
                  prop.indexOf('set') ||
                  !_isFunction(target['get' + prop.substr(3)])
                    ? prop
                    : 'get' + prop.substr(3)
                ](funcParam)
              : target[prop](),
          setter = !_isFunction(currentValue)
            ? _setterPlain
            : funcParam
            ? _setterFuncWithParam
            : _setterFunc;
        if (_isString(end)) {
          if (~end.indexOf('random(')) end = _replaceRandom(end);
          if ('=' === end.charAt(1)) {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || 0 === pt) end = pt;
          }
        }
        if (parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && '' !== end) {
            pt = new PropTween(
              this._pt,
              target,
              prop,
              +parsedStart || 0,
              end - (parsedStart || 0),
              'boolean' === typeof currentValue ? _renderBoolean : _renderPlain,
              0,
              setter
            );
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return (this._pt = pt);
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(
            this,
            target,
            prop,
            parsedStart,
            end,
            setter,
            stringFilter || _config.stringFilter,
            funcParam
          );
        }
      },
      _processVars = function _processVars(
        vars,
        index,
        target,
        targets,
        tween
      ) {
        _isFunction(vars) &&
          (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (
          !_isObject(vars) ||
          (vars.style && vars.nodeType) ||
          _isArray(vars) ||
          _isTypedArray(vars)
        )
          return _isString(vars)
            ? _parseFuncOrString(vars, tween, index, target, targets)
            : vars;
        var p,
          copy = {};
        for (p in vars)
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        return copy;
      },
      _checkPlugin = function _checkPlugin(
        property,
        vars,
        tween,
        index,
        target,
        targets
      ) {
        var plugin, pt, ptLookup, i;
        if (
          _plugins[property] &&
          false !==
            (plugin = new _plugins[property]()).init(
              target,
              plugin.rawVars
                ? vars[property]
                : _processVars(vars[property], index, target, targets, tween),
              tween,
              index,
              targets
            )
        ) {
          tween._pt = pt = new PropTween(
            tween._pt,
            target,
            property,
            0,
            1,
            plugin.render,
            plugin,
            0,
            plugin.priority
          );
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
            while (i--) ptLookup[plugin._props[i]] = pt;
          }
        }
        return plugin;
      },
      _initTween = function _initTween(tween, time) {
        var cleanVars,
          i,
          p,
          pt,
          target,
          hasPriority,
          gsData,
          harness,
          plugin,
          ptLookup,
          index,
          harnessVars,
          overwritten,
          vars = tween.vars,
          ease = vars.ease,
          startAt = vars.startAt,
          immediateRender = vars.immediateRender,
          lazy = vars.lazy,
          onUpdate = vars.onUpdate,
          onUpdateParams = vars.onUpdateParams,
          callbackScope = vars.callbackScope,
          runBackwards = vars.runBackwards,
          yoyoEase = vars.yoyoEase,
          keyframes = vars.keyframes,
          autoRevert = vars.autoRevert,
          dur = tween._dur,
          prevStartAt = tween._startAt,
          targets = tween._targets,
          parent = tween.parent,
          fullTargets =
            parent && 'nested' === parent.data
              ? parent.parent._targets
              : targets,
          autoOverwrite = 'auto' === tween._overwrite && !_suppressOverwrites,
          tl = tween.timeline;
        tl && (!keyframes || !ease) && (ease = 'none');
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase
          ? _invertEase(
              _parseEase(true === yoyoEase ? ease : yoyoEase, _defaults.ease)
            )
          : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || (keyframes && !vars.stagger)) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            _removeFromParent(prevStartAt.render(-1, true));
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(
              (tween._startAt = Tween.set(
                targets,
                _setDefaults(
                  {
                    data: 'isStart',
                    overwrite: false,
                    parent,
                    immediateRender: true,
                    lazy: _isNotFalse(lazy),
                    startAt: null,
                    delay: 0,
                    onUpdate,
                    onUpdateParams,
                    callbackScope,
                    stagger: 0,
                  },
                  startAt
                )
              ))
            );
            time < 0 &&
              !immediateRender &&
              !autoRevert &&
              tween._startAt.render(-1, true);
            if (immediateRender) {
              time > 0 && !autoRevert && (tween._startAt = 0);
              if (dur && time <= 0) {
                time && (tween._zTime = time);
                return;
              }
            } else if (false === autoRevert) tween._startAt = 0;
          } else if (runBackwards && dur)
            if (prevStartAt) !autoRevert && (tween._startAt = 0);
            else {
              time && (immediateRender = false);
              p = _setDefaults(
                {
                  overwrite: false,
                  data: 'isFromStart',
                  lazy: immediateRender && _isNotFalse(lazy),
                  immediateRender,
                  stagger: 0,
                  parent,
                },
                cleanVars
              );
              harnessVars && (p[harness.prop] = harnessVars);
              _removeFromParent((tween._startAt = Tween.set(targets, p)));
              time < 0 && tween._startAt.render(-1, true);
              tween._zTime = time;
              if (!immediateRender) _initTween(tween._startAt, _tinyNum);
              else if (!time) return;
            }
          tween._pt = tween._ptCache = 0;
          lazy = (dur && _isNotFalse(lazy)) || (lazy && !dur);
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (
              harness &&
              false !==
                (plugin = new harness()).init(
                  target,
                  harnessVars || cleanVars,
                  tween,
                  index,
                  fullTargets
                )
            ) {
              tween._pt = pt = new PropTween(
                tween._pt,
                target,
                plugin.name,
                0,
                1,
                plugin.render,
                plugin,
                0,
                plugin.priority
              );
              plugin._props.forEach(function (name) {
                ptLookup[name] = pt;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars)
              for (p in cleanVars)
                if (
                  _plugins[p] &&
                  (plugin = _checkPlugin(
                    p,
                    cleanVars,
                    tween,
                    index,
                    target,
                    fullTargets
                  ))
                )
                  plugin.priority && (hasPriority = 1);
                else
                  ptLookup[p] = pt = _addPropTween.call(
                    tween,
                    target,
                    p,
                    'get',
                    cleanVars[p],
                    index,
                    fullTargets,
                    0,
                    vars.stringFilter
                  );
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(
                target,
                ptLookup,
                tween.globalTime(time)
              );
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum, true, true);
      },
      _updatePropTweens = function _updatePropTweens(
        tween,
        property,
        value,
        start,
        startIsRelative,
        ratio,
        time
      ) {
        var pt,
          lookup,
          i,
          ptCache = ((tween._pt && tween._ptCache) || (tween._ptCache = {}))[
            property
          ];
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i = tween._targets.length;
          while (i--) {
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
              pt = pt.d._pt;
              while (pt && pt.p !== property) pt = pt._next;
            }
            if (!pt) {
              _forceAllPropTweens = 1;
              tween.vars[property] = '+=0';
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return 1;
            }
            ptCache.push(pt);
          }
        }
        i = ptCache.length;
        while (i--) {
          pt = ptCache[i];
          pt.s =
            (start || 0 === start) && !startIsRelative
              ? start
              : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          pt.e && (pt.e = _round(value) + getUnit(pt.e));
          pt.b && (pt.b = pt.s + getUnit(pt.b));
        }
      },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
        var copy,
          p,
          i,
          aliases,
          harness = targets[0] ? _getCache(targets[0]).harness : 0,
          propertyAliases = harness && harness.aliases;
        if (!propertyAliases) return vars;
        copy = _merge({}, vars);
        for (p in propertyAliases)
          if (p in copy) {
            aliases = propertyAliases[p].split(',');
            i = aliases.length;
            while (i--) copy[aliases[i]] = copy[p];
          }
        return copy;
      },
      _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
        var p,
          a,
          ease = obj.ease || easeEach || 'power1.inOut';
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function (value, i) {
            return a.push({
              t: (i / (obj.length - 1)) * 100,
              v: value,
              e: ease,
            });
          });
        } else
          for (p in obj) {
            a = allProps[p] || (allProps[p] = []);
            'ease' === p ||
              a.push({
                t: parseFloat(prop),
                v: obj[p],
                e: ease,
              });
          }
      },
      _parseFuncOrString = function _parseFuncOrString(
        value,
        tween,
        i,
        target,
        targets
      ) {
        return _isFunction(value)
          ? value.call(tween, i, target, targets)
          : _isString(value) && ~value.indexOf('random(')
          ? _replaceRandom(value)
          : value;
      },
      _staggerTweenProps =
        _callbackNames +
        'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
      _staggerPropsToSkip = {};
    _forEachName(
      _staggerTweenProps + ',id,stagger,delay,duration,paused,scrollTrigger',
      function (name) {
        return (_staggerPropsToSkip[name] = 1);
      }
    );
    var Tween = (function (_Animation2) {
      _inheritsLoose(Tween, _Animation2);
      function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if ('number' === typeof vars) {
          position.duration = vars;
          vars = position;
          position = null;
        }
        _this3 =
          _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) ||
          this;
        var tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge,
          _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = vars.parent || _globalTimeline,
          parsedTargets = (
            _isArray(targets) || _isTypedArray(targets)
              ? _isNumber(targets[0])
              : 'length' in vars
          )
            ? [targets]
            : toArray(targets);
        _this3._targets = parsedTargets.length
          ? _harness(parsedTargets)
          : _warn(
              'GSAP target ' + targets + ' not found. https://greensock.com',
              !_config.nullTargetWarn
            ) || [];
        _this3._ptLookup = [];
        _this3._overwrite = overwrite;
        if (
          keyframes ||
          stagger ||
          _isFuncOrString(duration) ||
          _isFuncOrString(delay)
        ) {
          vars = _this3.vars;
          tl = _this3.timeline = new Timeline({
            data: 'nested',
            defaults: defaults || {},
          });
          tl.kill();
          tl.parent = tl._dp = _assertThisInitialized(_this3);
          tl._start = 0;
          if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            l = parsedTargets.length;
            staggerFunc = stagger && distribute(stagger);
            if (_isObject(stagger))
              for (p in stagger)
                if (~_staggerTweenProps.indexOf(p)) {
                  staggerVarsToMerge || (staggerVarsToMerge = {});
                  staggerVarsToMerge[p] = stagger[p];
                }
            for (i = 0; i < l; i++) {
              copy = _copyExcluding(vars, _staggerPropsToSkip);
              copy.stagger = 0;
              yoyoEase && (copy.yoyoEase = yoyoEase);
              staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
              curTarget = parsedTargets[i];
              copy.duration = +_parseFuncOrString(
                duration,
                _assertThisInitialized(_this3),
                i,
                curTarget,
                parsedTargets
              );
              copy.delay =
                (+_parseFuncOrString(
                  delay,
                  _assertThisInitialized(_this3),
                  i,
                  curTarget,
                  parsedTargets
                ) || 0) - _this3._delay;
              if (!stagger && 1 === l && copy.delay) {
                _this3._delay = delay = copy.delay;
                _this3._start += delay;
                copy.delay = 0;
              }
              tl.to(
                curTarget,
                copy,
                staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0
              );
              tl._ease = _easeMap.none;
            }
            tl.duration() ? (duration = delay = 0) : (_this3.timeline = 0);
          } else if (keyframes) {
            _inheritDefaults(
              _setDefaults(tl.vars.defaults, {
                ease: 'none',
              })
            );
            tl._ease = _parseEase(keyframes.ease || vars.ease || 'none');
            var a,
              kf,
              v,
              time = 0;
            if (_isArray(keyframes))
              keyframes.forEach(function (frame) {
                return tl.to(parsedTargets, frame, '>');
              });
            else {
              copy = {};
              for (p in keyframes)
                'ease' === p ||
                  'easeEach' === p ||
                  _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
              for (p in copy) {
                a = copy[p].sort(function (a, b) {
                  return a.t - b.t;
                });
                time = 0;
                for (i = 0; i < a.length; i++) {
                  kf = a[i];
                  v = {
                    ease: kf.e,
                    duration: ((kf.t - (i ? a[i - 1].t : 0)) / 100) * duration,
                  };
                  v[p] = kf.v;
                  tl.to(parsedTargets, v, time);
                  time += v.duration;
                }
              }
              tl.duration() < duration &&
                tl.to(
                  {},
                  {
                    duration: duration - tl.duration(),
                  }
                );
            }
          }
          duration || _this3.duration((duration = tl.duration()));
        } else _this3.timeline = 0;
        if (true === overwrite && !_suppressOverwrites) {
          _overwritingTween = _assertThisInitialized(_this3);
          _globalTimeline.killTweensOf(parsedTargets);
          _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (
          immediateRender ||
          (!duration &&
            !keyframes &&
            _this3._start === _roundPrecise(parent._time) &&
            _isNotFalse(immediateRender) &&
            _hasNoPausedAncestors(_assertThisInitialized(_this3)) &&
            'nested' !== parent.data)
        ) {
          _this3._tTime = -_tinyNum;
          _this3.render(Math.max(0, -delay));
        }
        scrollTrigger &&
          _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
      }
      var _proto3 = Tween.prototype;
      _proto3.render = function render(totalTime, suppressEvents, force) {
        var time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase,
          prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime =
            totalTime > tDur - _tinyNum && totalTime >= 0
              ? tDur
              : totalTime < _tinyNum
              ? 0
              : totalTime;
        if (!dur)
          _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (
          tTime !== this._tTime ||
          !totalTime ||
          force ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== totalTime < 0)
        ) {
          time = tTime;
          timeline = this.timeline;
          if (this._repeat) {
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && totalTime < 0)
              return this.totalTime(
                100 * cycleDuration + totalTime,
                suppressEvents,
                force
              );
            time = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);
              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }
              time > dur && (time = dur);
            }
            isYoyo = this._yoyo && 1 & iteration;
            if (isYoyo) {
              yoyoEase = this._yEase;
              time = dur - time;
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            if (time === prevTime && !force && this._initted) {
              this._tTime = tTime;
              return this;
            }
            if (iteration !== prevIteration) {
              timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
              if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                this._lock = force = 1;
                this.render(
                  _roundPrecise(cycleDuration * iteration),
                  true
                ).invalidate()._lock = 0;
              }
            }
          }
          if (!this._initted) {
            if (
              _attemptInitTween(
                this,
                totalTime < 0 ? totalTime : time,
                force,
                suppressEvents
              )
            ) {
              this._tTime = 0;
              return this;
            }
            if (prevTime !== this._time) return this;
            if (dur !== this._dur)
              return this.render(totalTime, suppressEvents, force);
          }
          this._tTime = tTime;
          this._time = time;
          if (!this._act && this._ts) {
            this._act = 1;
            this._lazy = 0;
          }
          this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
          if (this._from) this.ratio = ratio = 1 - ratio;
          if (time && !prevTime && !suppressEvents) {
            _callback(this, 'onStart');
            if (this._tTime !== tTime) return this;
          }
          pt = this._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          (timeline &&
            timeline.render(
              totalTime < 0
                ? totalTime
                : !time && isYoyo
                ? -_tinyNum
                : timeline._dur * timeline._ease(time / this._dur),
              suppressEvents,
              force
            )) ||
            (this._startAt && (this._zTime = totalTime));
          if (this._onUpdate && !suppressEvents) {
            totalTime < 0 &&
              this._startAt &&
              this._startAt.render(totalTime, true, force);
            _callback(this, 'onUpdate');
          }
          this._repeat &&
            iteration !== prevIteration &&
            this.vars.onRepeat &&
            !suppressEvents &&
            this.parent &&
            _callback(this, 'onRepeat');
          if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
            totalTime < 0 &&
              this._startAt &&
              !this._onUpdate &&
              this._startAt.render(totalTime, true, true);
            (totalTime || !dur) &&
              ((tTime === this._tDur && this._ts > 0) ||
                (!tTime && this._ts < 0)) &&
              _removeFromParent(this, 1);
            if (
              !suppressEvents &&
              !(totalTime < 0 && !prevTime) &&
              (tTime || prevTime)
            ) {
              _callback(
                this,
                tTime === tDur ? 'onComplete' : 'onReverseComplete',
                true
              );
              this._prom &&
                !(tTime < tDur && this.timeScale() > 0) &&
                this._prom();
            }
          }
        }
        return this;
      };
      _proto3.targets = function targets() {
        return this._targets;
      };
      _proto3.invalidate = function invalidate() {
        this._pt =
          this._op =
          this._startAt =
          this._onUpdate =
          this._lazy =
          this.ratio =
            0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate();
        return _Animation2.prototype.invalidate.call(this);
      };
      _proto3.resetTo = function resetTo(
        property,
        value,
        start,
        startIsRelative
      ) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var ratio,
          time = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur);
        if (
          _updatePropTweens(
            this,
            property,
            value,
            start,
            startIsRelative,
            ratio,
            time
          )
        )
          return this.resetTo(property, value, start, startIsRelative);
        _alignPlayhead(this, 0);
        this.parent ||
          _addLinkedListItem(
            this._dp,
            this,
            '_first',
            '_last',
            this._dp._sort ? '_start' : 0
          );
        return this.render(0);
      };
      _proto3.kill = function kill(targets, vars) {
        if (void 0 === vars) vars = 'all';
        if (!targets && (!vars || 'all' === vars)) {
          this._lazy = this._pt = 0;
          return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
          var tDur = this.timeline.totalDuration();
          this.timeline.killTweensOf(
            targets,
            vars,
            _overwritingTween && true !== _overwritingTween.vars.overwrite
          )._first || _interrupt(this);
          this.parent &&
            tDur !== this.timeline.totalDuration() &&
            _setDuration(this, (this._dur * this.timeline._tDur) / tDur, 0, 1);
          return this;
        }
        var overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i,
          parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt;
        if (
          (!vars || 'all' === vars) &&
          _arraysMatch(parsedTargets, killingTargets)
        ) {
          'all' === vars && (this._pt = 0);
          return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if ('all' !== vars) {
          if (_isString(vars)) {
            p = {};
            _forEachName(vars, function (name) {
              return (p[name] = 1);
            });
            vars = p;
          }
          vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while (i--)
          if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if ('all' === vars) {
              overwrittenProps[i] = vars;
              props = curLookup;
              curOverwriteProps = {};
            } else {
              curOverwriteProps = overwrittenProps[i] =
                overwrittenProps[i] || {};
              props = vars;
            }
            for (p in props) {
              pt = curLookup && curLookup[p];
              if (pt) {
                if (!('kill' in pt.d) || true === pt.d.kill(p))
                  _removeLinkedListItem(this, pt, '_pt');
                delete curLookup[p];
              }
              if ('all' !== curOverwriteProps) curOverwriteProps[p] = 1;
            }
          }
        this._initted && !this._pt && firstPT && _interrupt(this);
        return this;
      };
      Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
      };
      Tween.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
      };
      Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
          immediateRender: false,
          lazy: false,
          overwrite: false,
          delay,
          onComplete: callback,
          onReverseComplete: callback,
          onCompleteParams: params,
          onReverseCompleteParams: params,
          callbackScope: scope,
        });
      };
      Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
      };
      Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
      };
      Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
      };
      return Tween;
    })(Animation);
    _setDefaults(Tween.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    });
    _forEachName('staggerTo,staggerFrom,staggerFromTo', function (name) {
      Tween[name] = function () {
        var tl = new Timeline(),
          params = _slice.call(arguments, 0);
        params.splice('staggerFromTo' === name ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
      };
    });
    var _setterPlain = function _setterPlain(target, property, value) {
        return (target[property] = value);
      },
      _setterFunc = function _setterFunc(target, property, value) {
        return target[property](value);
      },
      _setterFuncWithParam = function _setterFuncWithParam(
        target,
        property,
        value,
        data
      ) {
        return target[property](data.fp, value);
      },
      _setterAttribute = function _setterAttribute(target, property, value) {
        return target.setAttribute(property, value);
      },
      _getSetter = function _getSetter(target, property) {
        return _isFunction(target[property])
          ? _setterFunc
          : _isUndefined(target[property]) && target.setAttribute
          ? _setterAttribute
          : _setterPlain;
      },
      _renderPlain = function _renderPlain(ratio, data) {
        return data.set(
          data.t,
          data.p,
          Math.round(1e6 * (data.s + data.c * ratio)) / 1e6,
          data
        );
      },
      _renderBoolean = function _renderBoolean(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      },
      _renderComplexString = function _renderComplexString(ratio, data) {
        var pt = data._pt,
          s = '';
        if (!ratio && data.b) s = data.b;
        else if (1 === ratio && data.e) s = data.e;
        else {
          while (pt) {
            s =
              pt.p +
              (pt.m
                ? pt.m(pt.s + pt.c * ratio)
                : Math.round(1e4 * (pt.s + pt.c * ratio)) / 1e4) +
              s;
            pt = pt._next;
          }
          s += data.c;
        }
        data.set(data.t, data.p, s, data);
      },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      },
      _addPluginModifier = function _addPluginModifier(
        modifier,
        tween,
        target,
        property
      ) {
        var next,
          pt = this._pt;
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      },
      _killPropTweensOf = function _killPropTweensOf(property) {
        var hasNonDependentRemaining,
          next,
          pt = this._pt;
        while (pt) {
          next = pt._next;
          if ((pt.p === property && !pt.op) || pt.op === property)
            _removeLinkedListItem(this, pt, '_pt');
          else if (!pt.dep) hasNonDependentRemaining = 1;
          pt = next;
        }
        return !hasNonDependentRemaining;
      },
      _setterWithModifier = function _setterWithModifier(
        target,
        property,
        value,
        data
      ) {
        data.mSet(
          target,
          property,
          data.m.call(data.tween, value, data.mt),
          data
        );
      },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
        var next,
          pt2,
          first,
          last,
          pt = parent._pt;
        while (pt) {
          next = pt._next;
          pt2 = first;
          while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
          if ((pt._prev = pt2 ? pt2._prev : last)) pt._prev._next = pt;
          else first = pt;
          if ((pt._next = pt2)) pt2._prev = pt;
          else last = pt;
          pt = next;
        }
        parent._pt = first;
      };
    var PropTween = (function () {
      function PropTween(
        next,
        target,
        prop,
        start,
        change,
        renderer,
        data,
        setter,
        priority
      ) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
      }
      var _proto4 = PropTween.prototype;
      _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set;
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target;
        this.tween = tween;
      };
      return PropTween;
    })();
    _forEachName(
      _callbackNames +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
      function (name) {
        return (_reservedProps[name] = 1);
      }
    );
    _globals.TweenMax = _globals.TweenLite = Tween;
    _globals.TimelineLite = _globals.TimelineMax = Timeline;
    _globalTimeline = new Timeline({
      sortChildren: false,
      defaults: _defaults,
      autoRemoveChildren: true,
      id: 'root',
      smoothChildTiming: true,
    });
    _config.stringFilter = _colorStringFilter;
    var _gsap = {
      registerPlugin: function registerPlugin() {
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        )
          args[_key2] = arguments[_key2];
        args.forEach(function (config) {
          return _createPlugin(config);
        });
      },
      timeline: function timeline(vars) {
        return new Timeline(vars);
      },
      getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
      },
      getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]);
        var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;
        'native' === unit && (unit = '');
        return !target
          ? target
          : !property
          ? function (property, unit, uncache) {
              return format(
                ((_plugins[property] && _plugins[property].get) || getter)(
                  target,
                  property,
                  unit,
                  uncache
                )
              );
            }
          : format(
              ((_plugins[property] && _plugins[property].get) || getter)(
                target,
                property,
                unit,
                uncache
              )
            );
      },
      quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
          var setters = target.map(function (t) {
              return gsap.quickSetter(t, property, unit);
            }),
            l = setters.length;
          return function (value) {
            var i = l;
            while (i--) setters[i](value);
          };
        }
        target = target[0] || {};
        var Plugin = _plugins[property],
          cache = _getCache(target),
          p =
            (cache.harness && (cache.harness.aliases || {})[property]) ||
            property,
          setter = Plugin
            ? function (value) {
                var p = new Plugin();
                _quickTween._pt = 0;
                p.init(target, unit ? value + unit : value, _quickTween, 0, [
                  target,
                ]);
                p.render(1, p);
                _quickTween._pt && _renderPropTweens(1, _quickTween);
              }
            : cache.set(target, p);
        return Plugin
          ? setter
          : function (value) {
              return setter(target, p, unit ? value + unit : value, cache, 1);
            };
      },
      quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = gsap.to(
            target,
            _merge(
              ((_merge2 = {}),
              (_merge2[property] = '+=0.1'),
              (_merge2.paused = true),
              _merge2),
              vars || {}
            )
          ),
          func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
        func.tween = tween;
        return func;
      },
      isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
      },
      defaults: function defaults(value) {
        value &&
          value.ease &&
          (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
      },
      config: function config(value) {
        return _mergeDeep(_config, value || {});
      },
      registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name,
          effect = _ref3.effect,
          plugins = _ref3.plugins,
          defaults = _ref3.defaults,
          extendTimeline = _ref3.extendTimeline;
        (plugins || '').split(',').forEach(function (pluginName) {
          return (
            pluginName &&
            !_plugins[pluginName] &&
            !_globals[pluginName] &&
            _warn(name + ' effect requires ' + pluginName + ' plugin.')
          );
        });
        _effects[name] = function (targets, vars, tl) {
          return effect(
            toArray(targets),
            _setDefaults(vars || {}, defaults),
            tl
          );
        };
        if (extendTimeline)
          Timeline.prototype[name] = function (targets, vars, position) {
            return this.add(
              _effects[name](
                targets,
                _isObject(vars) ? vars : (position = vars) && {},
                this
              ),
              position
            );
          };
      },
      registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
      },
      parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
      },
      getById: function getById(id) {
        return _globalTimeline.getById(id);
      },
      exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (void 0 === vars) vars = {};
        var child,
          next,
          tl = new Timeline(vars);
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0;
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while (child) {
          next = child._next;
          if (
            includeDelayedCalls ||
            !(
              !child._dur &&
              child instanceof Tween &&
              child.vars.onComplete === child._targets[0]
            )
          )
            _addToTimeline(tl, child, child._start - child._delay);
          child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
      },
      utils: {
        wrap,
        wrapYoyo,
        distribute,
        random,
        snap,
        normalize,
        getUnit,
        clamp,
        splitColor,
        toArray,
        selector,
        mapRange,
        pipe,
        unitize,
        interpolate,
        shuffle,
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween,
        globals: _addGlobal,
        Tween,
        Timeline,
        Animation,
        getCache: _getCache,
        _removeLinkedListItem,
        suppressOverwrites: function suppressOverwrites(value) {
          return (_suppressOverwrites = value);
        },
      },
    };
    _forEachName(
      'to,from,fromTo,delayedCall,set,killTweensOf',
      function (name) {
        return (_gsap[name] = Tween[name]);
      }
    );
    _ticker.add(Timeline.updateRoot);
    _quickTween = _gsap.to(
      {},
      {
        duration: 0,
      }
    );
    var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
        var pt = plugin._pt;
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)
          pt = pt._next;
        return pt;
      },
      _addModifiers = function _addModifiers(tween, modifiers) {
        var p,
          i,
          pt,
          targets = tween._targets;
        for (p in modifiers) {
          i = targets.length;
          while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) pt = _getPluginPropTween(pt, p);
              pt &&
                pt.modifier &&
                pt.modifier(modifiers[p], tween, targets[i], p);
            }
          }
        }
      },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
        return {
          name,
          rawVars: 1,
          init: function init(target, vars, tween) {
            tween._onInit = function (tween) {
              var temp, p;
              if (_isString(vars)) {
                temp = {};
                _forEachName(vars, function (name) {
                  return (temp[name] = 1);
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p in vars) temp[p] = modifier(vars[p]);
                vars = temp;
              }
              _addModifiers(tween, vars);
            };
          },
        };
      };
    var gsap =
      _gsap.registerPlugin(
        {
          name: 'attr',
          init: function init(target, vars, tween, index, targets) {
            var p, pt;
            for (p in vars) {
              pt = this.add(
                target,
                'setAttribute',
                (target.getAttribute(p) || 0) + '',
                vars[p],
                index,
                targets,
                0,
                0,
                p
              );
              pt && (pt.op = p);
              this._props.push(p);
            }
          },
        },
        {
          name: 'endArray',
          init: function init(target, value) {
            var i = value.length;
            while (i--) this.add(target, i, target[i] || 0, value[i]);
          },
        },
        _buildModifierPlugin('roundProps', _roundModifier),
        _buildModifierPlugin('modifiers'),
        _buildModifierPlugin('snap', snap)
      ) || _gsap;
    Tween.version = Timeline.version = gsap.version = '3.10.4';
    _coreReady = 1;
    _windowExists() && _wake();
    _easeMap.Power0,
      _easeMap.Power1,
      _easeMap.Power2,
      _easeMap.Power3,
      _easeMap.Power4,
      _easeMap.Linear,
      _easeMap.Quad,
      _easeMap.Cubic,
      _easeMap.Quart,
      _easeMap.Quint,
      _easeMap.Strong,
      _easeMap.Elastic,
      _easeMap.Back,
      _easeMap.SteppedEase,
      _easeMap.Bounce,
      _easeMap.Sine,
      _easeMap.Expo,
      _easeMap.Circ;
    /*!
     * CSSPlugin 3.10.4
     * https://greensock.com
     *
     * Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var CSSPlugin_win,
      CSSPlugin_doc,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _recentSetterPlugin,
      _supports3D,
      CSSPlugin_windowExists = function _windowExists() {
        return 'undefined' !== typeof window;
      },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      CSSPlugin_bigNum = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
        autoAlpha: 'opacity,visibility',
        scale: 'scaleX,scaleY',
        alpha: 'opacity',
      },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
        return data.set(
          data.t,
          data.p,
          Math.round(1e4 * (data.s + data.c * ratio)) / 1e4 + data.u,
          data
        );
      },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
        return data.set(
          data.t,
          data.p,
          1 === ratio
            ? data.e
            : Math.round(1e4 * (data.s + data.c * ratio)) / 1e4 + data.u,
          data
        );
      },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(
        ratio,
        data
      ) {
        return data.set(
          data.t,
          data.p,
          ratio
            ? Math.round(1e4 * (data.s + data.c * ratio)) / 1e4 + data.u
            : data.b,
          data
        );
      },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(
          data.t,
          data.p,
          ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u,
          data
        );
      },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      },
      _renderNonTweeningValueOnlyAtEnd =
        function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
          return data.set(data.t, data.p, 1 !== ratio ? data.b : data.e, data);
        },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
        return (target.style[property] = value);
      },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
        return target.style.setProperty(property, value);
      },
      _setterTransform = function _setterTransform(target, property, value) {
        return (target._gsap[property] = value);
      },
      _setterScale = function _setterScale(target, property, value) {
        return (target._gsap.scaleX = target._gsap.scaleY = value);
      },
      _setterScaleWithRender = function _setterScaleWithRender(
        target,
        property,
        value,
        data,
        ratio
      ) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      },
      _setterTransformWithRender = function _setterTransformWithRender(
        target,
        property,
        value,
        data,
        ratio
      ) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      },
      _transformProp = 'transform',
      _transformOriginProp = _transformProp + 'Origin',
      _createElement = function _createElement(type, ns) {
        var e = CSSPlugin_doc.createElementNS
          ? CSSPlugin_doc.createElementNS(
              (ns || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
              type
            )
          : CSSPlugin_doc.createElement(type);
        return e.style ? e : CSSPlugin_doc.createElement(type);
      },
      _getComputedProperty = function _getComputedProperty(
        target,
        property,
        skipPrefixFallback
      ) {
        var cs = getComputedStyle(target);
        return (
          cs[property] ||
          cs.getPropertyValue(
            property.replace(_capsExp, '-$1').toLowerCase()
          ) ||
          cs.getPropertyValue(property) ||
          (!skipPrefixFallback &&
            _getComputedProperty(
              target,
              _checkPropPrefix(property) || property,
              1
            )) ||
          ''
        );
      },
      _prefixes = 'O,Moz,ms,Ms,Webkit'.split(','),
      _checkPropPrefix = function _checkPropPrefix(
        property,
        element,
        preferPrefix
      ) {
        var e = element || _tempDiv,
          s = e.style,
          i = 5;
        if (property in s && !preferPrefix) return property;
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i-- && !(_prefixes[i] + property in s));
        return i < 0
          ? null
          : (3 === i ? 'ms' : i >= 0 ? _prefixes[i] : '') + property;
      },
      _initCore = function _initCore() {
        if (CSSPlugin_windowExists() && window.document) {
          CSSPlugin_win = window;
          CSSPlugin_doc = CSSPlugin_win.document;
          _docElement = CSSPlugin_doc.documentElement;
          _tempDiv = _createElement('div') || {
            style: {},
          };
          _createElement('div');
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + 'Origin';
          _tempDiv.style.cssText =
            'border-width:0;line-height:0;position:absolute;padding:0';
          _supports3D = !!_checkPropPrefix('perspective');
          _pluginInitted = 1;
        }
      },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
        var bbox,
          svg = _createElement(
            'svg',
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute('xmlns')) ||
              'http://www.w3.org/2000/svg'
          ),
          oldParent = this.parentNode,
          oldSibling = this.nextSibling,
          oldCSS = this.style.cssText;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = 'block';
        if (swapIfPossible)
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack;
          } catch (e) {}
        else if (this._gsapBBox) bbox = this._gsapBBox();
        if (oldParent)
          if (oldSibling) oldParent.insertBefore(this, oldSibling);
          else oldParent.appendChild(this);
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
      },
      _getAttributeFallbacks = function _getAttributeFallbacks(
        target,
        attributesArray
      ) {
        var i = attributesArray.length;
        while (i--)
          if (target.hasAttribute(attributesArray[i]))
            return target.getAttribute(attributesArray[i]);
      },
      _getBBox = function _getBBox(target) {
        var bounds;
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getBBoxHack.call(target, true);
        }
        (bounds && (bounds.width || bounds.height)) ||
          target.getBBox === _getBBoxHack ||
          (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y
          ? {
              x: +_getAttributeFallbacks(target, ['x', 'cx', 'x1']) || 0,
              y: +_getAttributeFallbacks(target, ['y', 'cy', 'y1']) || 0,
              width: 0,
              height: 0,
            }
          : bounds;
      },
      _isSVG = function _isSVG(e) {
        return !!(
          e.getCTM &&
          (!e.parentNode || e.ownerSVGElement) &&
          _getBBox(e)
        );
      },
      _removeProperty = function _removeProperty(target, property) {
        if (property) {
          var style = target.style;
          if (property in _transformProps && property !== _transformOriginProp)
            property = _transformProp;
          if (style.removeProperty) {
            if (
              'ms' === property.substr(0, 2) ||
              'webkit' === property.substr(0, 6)
            )
              property = '-' + property;
            style.removeProperty(
              property.replace(_capsExp, '-$1').toLowerCase()
            );
          } else style.removeAttribute(property);
        }
      },
      _addNonTweeningPT = function _addNonTweeningPT(
        plugin,
        target,
        property,
        beginning,
        end,
        onlySetAtEnd
      ) {
        var pt = new PropTween(
          plugin._pt,
          target,
          property,
          0,
          1,
          onlySetAtEnd
            ? _renderNonTweeningValueOnlyAtEnd
            : _renderNonTweeningValue
        );
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
      },
      _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1,
      },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
        var px,
          parent,
          cache,
          isSVG,
          curValue = parseFloat(value) || 0,
          curUnit = (value + '').trim().substr((curValue + '').length) || 'px',
          style = _tempDiv.style,
          horizontal = _horizontalExp.test(property),
          isRootSVG = 'svg' === target.tagName.toLowerCase(),
          measureProperty =
            (isRootSVG ? 'client' : 'offset') +
            (horizontal ? 'Width' : 'Height'),
          amount = 100,
          toPixels = 'px' === unit,
          toPercent = '%' === unit;
        if (
          unit === curUnit ||
          !curValue ||
          _nonConvertibleUnits[unit] ||
          _nonConvertibleUnits[curUnit]
        )
          return curValue;
        'px' !== curUnit &&
          !toPixels &&
          (curValue = _convertToUnit(target, property, value, 'px'));
        isSVG = target.getCTM && _isSVG(target);
        if (
          (toPercent || '%' === curUnit) &&
          (_transformProps[property] || ~property.indexOf('adius'))
        ) {
          px = isSVG
            ? target.getBBox()[horizontal ? 'width' : 'height']
            : target[measureProperty];
          return _round(
            toPercent ? (curValue / px) * amount : (curValue / 100) * px
          );
        }
        style[horizontal ? 'width' : 'height'] =
          amount + (toPixels ? curUnit : unit);
        parent =
          ~property.indexOf('adius') ||
          ('em' === unit && target.appendChild && !isRootSVG)
            ? target
            : target.parentNode;
        if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
        if (!parent || parent === CSSPlugin_doc || !parent.appendChild)
          parent = CSSPlugin_doc.body;
        cache = parent._gsap;
        if (
          cache &&
          toPercent &&
          cache.width &&
          horizontal &&
          cache.time === _ticker.time
        )
          return _round((curValue / cache.width) * amount);
        else {
          (toPercent || '%' === curUnit) &&
            (style.position = _getComputedProperty(target, 'position'));
          parent === target && (style.position = 'static');
          parent.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = 'absolute';
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
        return _round(
          toPixels
            ? (px * curValue) / amount
            : px && curValue
            ? (amount / px) * curValue
            : 0
        );
      },
      _get = function _get(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
        if (property in _propertyAliases && 'transform' !== property) {
          property = _propertyAliases[property];
          if (~property.indexOf(',')) property = property.split(',')[0];
        }
        if (_transformProps[property] && 'transform' !== property) {
          value = _parseTransform(target, uncache);
          value =
            'transformOrigin' !== property
              ? value[property]
              : value.svg
              ? value.origin
              : _firstTwoOnly(
                  _getComputedProperty(target, _transformOriginProp)
                ) +
                ' ' +
                value.zOrigin +
                'px';
        } else {
          value = target.style[property];
          if (
            !value ||
            'auto' === value ||
            uncache ||
            ~(value + '').indexOf('calc(')
          )
            value =
              (_specialProps[property] &&
                _specialProps[property](target, property, unit)) ||
              _getComputedProperty(target, property) ||
              _getProperty(target, property) ||
              ('opacity' === property ? 1 : 0);
        }
        return unit && !~(value + '').trim().indexOf(' ')
          ? _convertToUnit(target, property, value, unit) + unit
          : value;
      },
      _tweenComplexCSSString = function _tweenComplexCSSString(
        target,
        prop,
        start,
        end
      ) {
        if (!start || 'none' === start) {
          var p = _checkPropPrefix(prop, target, 1),
            s = p && _getComputedProperty(target, p, 1);
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if ('borderColor' === prop)
            start = _getComputedProperty(target, 'borderTopColor');
        }
        var a,
          result,
          startValues,
          startNum,
          color,
          startValue,
          endValue,
          endNum,
          chunk,
          endUnit,
          startUnit,
          endValues,
          pt = new PropTween(
            this._pt,
            target.style,
            prop,
            0,
            1,
            _renderComplexString
          ),
          index = 0,
          matchIndex = 0;
        pt.b = start;
        pt.e = end;
        start += '';
        end += '';
        if ('auto' === end) {
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          target.style[prop] = start;
        }
        a = [start, end];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while ((result = _numWithUnitExp.exec(end))) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (
              'rgba(' === chunk.substr(-5) ||
              'hsla(' === chunk.substr(-5)
            )
              color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || '')) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + '').length);
              '=' === endValue.charAt(1) &&
                (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + '').length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
              if (startUnit !== endUnit)
                startNum =
                  _convertToUnit(target, prop, startValue, endUnit) || 0;
              pt._pt = {
                _next: pt._pt,
                p: chunk || 1 === matchIndex ? chunk : ',',
                s: startNum,
                c: endNum - startNum,
                m: (color && color < 4) || 'zIndex' === prop ? Math.round : 0,
              };
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : '';
        } else
          pt.r =
            'display' === prop && 'none' === end
              ? _renderNonTweeningValueOnlyAtEnd
              : _renderNonTweeningValue;
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      },
      _keywordToPercent = {
        top: '0%',
        bottom: '100%',
        left: '0%',
        right: '100%',
        center: '50%',
      },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(
        value
      ) {
        var split = value.split(' '),
          x = split[0],
          y = split[1] || '50%';
        if ('top' === x || 'bottom' === x || 'left' === y || 'right' === y) {
          value = x;
          x = y;
          y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(' ');
      },
      _renderClearProps = function _renderClearProps(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var prop,
            clearTransforms,
            i,
            target = data.t,
            style = target.style,
            props = data.u,
            cache = target._gsap;
          if ('all' === props || true === props) {
            style.cssText = '';
            clearTransforms = 1;
          } else {
            props = props.split(',');
            i = props.length;
            while (--i > -1) {
              prop = props[i];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop =
                  'transformOrigin' === prop
                    ? _transformOriginProp
                    : _transformProp;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
              cache.svg && target.removeAttribute('transform');
              _parseTransform(target, 1);
              cache.uncache = 1;
            }
          }
        }
      },
      _specialProps = {
        clearProps: function clearProps(
          plugin,
          target,
          property,
          endValue,
          tween
        ) {
          if ('isFromStart' !== tween.data) {
            var pt = (plugin._pt = new PropTween(
              plugin._pt,
              target,
              property,
              0,
              0,
              _renderClearProps
            ));
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        },
      },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
        return (
          'matrix(1, 0, 0, 1, 0, 0)' === value || 'none' === value || !value
        );
      },
      _getComputedTransformMatrixAsArray =
        function _getComputedTransformMatrixAsArray(target) {
          var matrixString = _getComputedProperty(target, _transformProp);
          return _isNullTransform(matrixString)
            ? _identity2DMatrix
            : matrixString.substr(7).match(_numExp).map(_round);
        },
      _getMatrix = function _getMatrix(target, force2D) {
        var parent,
          nextSibling,
          temp,
          addedToDOM,
          cache = target._gsap || _getCache(target),
          style = target.style,
          matrix = _getComputedTransformMatrixAsArray(target);
        if (cache.svg && target.getAttribute('transform')) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return '1,0,0,1,0,0' === matrix.join(',')
            ? _identity2DMatrix
            : matrix;
        } else if (
          matrix === _identity2DMatrix &&
          !target.offsetParent &&
          target !== _docElement &&
          !cache.svg
        ) {
          temp = style.display;
          style.display = 'block';
          parent = target.parentNode;
          if (!parent || !target.offsetParent) {
            addedToDOM = 1;
            nextSibling = target.nextSibling;
            _docElement.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? (style.display = temp) : _removeProperty(target, 'display');
          if (addedToDOM)
            nextSibling
              ? parent.insertBefore(target, nextSibling)
              : parent
              ? parent.appendChild(target)
              : _docElement.removeChild(target);
        }
        return force2D && matrix.length > 6
          ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]]
          : matrix;
      },
      _applySVGOrigin = function _applySVGOrigin(
        target,
        origin,
        originIsAbsolute,
        smooth,
        matrixArray,
        pluginToAddPropTweensTo
      ) {
        var bounds,
          determinant,
          x,
          y,
          cache = target._gsap,
          matrix = matrixArray || _getMatrix(target, true),
          xOriginOld = cache.xOrigin || 0,
          yOriginOld = cache.yOrigin || 0,
          xOffsetOld = cache.xOffset || 0,
          yOffsetOld = cache.yOffset || 0,
          a = matrix[0],
          b = matrix[1],
          c = matrix[2],
          d = matrix[3],
          tx = matrix[4],
          ty = matrix[5],
          originSplit = origin.split(' '),
          xOrigin = parseFloat(originSplit[0]) || 0,
          yOrigin = parseFloat(originSplit[1]) || 0;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin =
            bounds.x +
            (~originSplit[0].indexOf('%')
              ? (xOrigin / 100) * bounds.width
              : xOrigin);
          yOrigin =
            bounds.y +
            (~(originSplit[1] || originSplit[0]).indexOf('%')
              ? (yOrigin / 100) * bounds.height
              : yOrigin);
        } else if (
          matrix !== _identity2DMatrix &&
          (determinant = a * d - b * c)
        ) {
          x =
            xOrigin * (d / determinant) +
            yOrigin * (-c / determinant) +
            (c * ty - d * tx) / determinant;
          y =
            xOrigin * (-b / determinant) +
            yOrigin * (a / determinant) -
            (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
        if (smooth || (false !== smooth && cache.smooth)) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else cache.xOffset = cache.yOffset = 0;
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = '0px 0px';
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            'xOrigin',
            xOriginOld,
            xOrigin
          );
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            'yOrigin',
            yOriginOld,
            yOrigin
          );
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            'xOffset',
            xOffsetOld,
            cache.xOffset
          );
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            'yOffset',
            yOffsetOld,
            cache.yOffset
          );
        }
        target.setAttribute('data-svg-origin', xOrigin + ' ' + yOrigin);
      },
      _parseTransform = function _parseTransform(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ('x' in cache && !uncache && !cache.uncache) return cache;
        var x,
          y,
          z,
          scaleX,
          scaleY,
          rotation,
          rotationX,
          rotationY,
          skewX,
          skewY,
          perspective,
          xOrigin,
          yOrigin,
          matrix,
          angle,
          cos,
          sin,
          a,
          b,
          c,
          d,
          a12,
          a22,
          t1,
          t2,
          t3,
          a13,
          a23,
          a33,
          a42,
          a43,
          a32,
          style = target.style,
          invertedScaleX = cache.scaleX < 0,
          px = 'px',
          deg = 'deg',
          origin = _getComputedProperty(target, _transformOriginProp) || '0';
        x =
          y =
          z =
          rotation =
          rotationX =
          rotationY =
          skewX =
          skewY =
          perspective =
            0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          t1 =
            (!cache.uncache || '0px 0px' === origin) &&
            !uncache &&
            target.getAttribute('data-svg-origin');
          _applySVGOrigin(
            target,
            t1 || origin,
            !!t1 || cache.originIsAbsolute,
            false !== cache.smooth,
            matrix
          );
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
          if (6 === matrix.length) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute('transform');
            cache.forceCSS =
              target.setAttribute('transform', '') ||
              !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute('transform', t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270)
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        uncache = uncache || cache.uncache;
        cache.x =
          x -
          ((cache.xPercent =
            x &&
            ((!uncache && cache.xPercent) ||
              (Math.round(target.offsetWidth / 2) === Math.round(-x)
                ? -50
                : 0)))
            ? (target.offsetWidth * cache.xPercent) / 100
            : 0) +
          px;
        cache.y =
          y -
          ((cache.yPercent =
            y &&
            ((!uncache && cache.yPercent) ||
              (Math.round(target.offsetHeight / 2) === Math.round(-y)
                ? -50
                : 0)))
            ? (target.offsetHeight * cache.yPercent) / 100
            : 0) +
          px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if ((cache.zOrigin = parseFloat(origin.split(' ')[2]) || 0))
          style[_transformOriginProp] = _firstTwoOnly(origin);
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg
          ? _renderSVGTransforms
          : _supports3D
          ? _renderCSSTransforms
          : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      },
      _firstTwoOnly = function _firstTwoOnly(value) {
        return (value = value.split(' '))[0] + ' ' + value[1];
      },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
        var unit = getUnit(start);
        return (
          _round(
            parseFloat(start) +
              parseFloat(_convertToUnit(target, 'x', value + 'px', unit))
          ) + unit
        );
      },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
        cache.z = '0px';
        cache.rotationY = cache.rotationX = '0deg';
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      },
      _zeroDeg = '0deg',
      _zeroPx = '0px',
      _endParenthesis = ') ',
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
        var _ref = cache || this,
          xPercent = _ref.xPercent,
          yPercent = _ref.yPercent,
          x = _ref.x,
          y = _ref.y,
          z = _ref.z,
          rotation = _ref.rotation,
          rotationY = _ref.rotationY,
          rotationX = _ref.rotationX,
          skewX = _ref.skewX,
          skewY = _ref.skewY,
          scaleX = _ref.scaleX,
          scaleY = _ref.scaleY,
          transformPerspective = _ref.transformPerspective,
          force3D = _ref.force3D,
          target = _ref.target,
          zOrigin = _ref.zOrigin,
          transforms = '',
          use3D =
            ('auto' === force3D && ratio && 1 !== ratio) || true === force3D;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var cos,
            angle = parseFloat(rotationY) * _DEG2RAD,
            a13 = Math.sin(angle),
            a33 = Math.cos(angle);
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx)
          transforms += 'perspective(' + transformPerspective + _endParenthesis;
        if (xPercent || yPercent)
          transforms += 'translate(' + xPercent + '%, ' + yPercent + '%) ';
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx)
          transforms +=
            z !== _zeroPx || use3D
              ? 'translate3d(' + x + ', ' + y + ', ' + z + ') '
              : 'translate(' + x + ', ' + y + _endParenthesis;
        if (rotation !== _zeroDeg)
          transforms += 'rotate(' + rotation + _endParenthesis;
        if (rotationY !== _zeroDeg)
          transforms += 'rotateY(' + rotationY + _endParenthesis;
        if (rotationX !== _zeroDeg)
          transforms += 'rotateX(' + rotationX + _endParenthesis;
        if (skewX !== _zeroDeg || skewY !== _zeroDeg)
          transforms += 'skew(' + skewX + ', ' + skewY + _endParenthesis;
        if (1 !== scaleX || 1 !== scaleY)
          transforms += 'scale(' + scaleX + ', ' + scaleY + _endParenthesis;
        target.style[_transformProp] = transforms || 'translate(0, 0)';
      },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
        var a11,
          a21,
          a12,
          a22,
          temp,
          _ref2 = cache || this,
          xPercent = _ref2.xPercent,
          yPercent = _ref2.yPercent,
          x = _ref2.x,
          y = _ref2.y,
          rotation = _ref2.rotation,
          skewX = _ref2.skewX,
          skewY = _ref2.skewY,
          scaleX = _ref2.scaleX,
          scaleY = _ref2.scaleY,
          target = _ref2.target,
          xOrigin = _ref2.xOrigin,
          yOrigin = _ref2.yOrigin,
          xOffset = _ref2.xOffset,
          yOffset = _ref2.yOffset,
          forceCSS = _ref2.forceCSS,
          tx = parseFloat(x),
          ty = parseFloat(y);
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round(a11);
          a21 = _round(a21);
          a12 = _round(a12);
          a22 = _round(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (
          (tx && !~(x + '').indexOf('px')) ||
          (ty && !~(y + '').indexOf('px'))
        ) {
          tx = _convertToUnit(target, 'x', x, 'px');
          ty = _convertToUnit(target, 'y', y, 'px');
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round(tx + (xPercent / 100) * temp.width);
          ty = _round(ty + (yPercent / 100) * temp.height);
        }
        temp =
          'matrix(' +
          a11 +
          ',' +
          a21 +
          ',' +
          a12 +
          ',' +
          a22 +
          ',' +
          tx +
          ',' +
          ty +
          ')';
        target.setAttribute('transform', temp);
        forceCSS && (target.style[_transformProp] = temp);
      },
      _addRotationalPropTween = function _addRotationalPropTween(
        plugin,
        target,
        property,
        startNum,
        endValue
      ) {
        var direction,
          pt,
          cap = 360,
          isString = _isString(endValue),
          endNum =
            parseFloat(endValue) *
            (isString && ~endValue.indexOf('rad') ? _RAD2DEG : 1),
          change = endNum - startNum,
          finalValue = startNum + change + 'deg';
        if (isString) {
          direction = endValue.split('_')[1];
          if ('short' === direction) {
            change %= cap;
            if (change !== change % (cap / 2))
              change += change < 0 ? cap : -cap;
          }
          if ('cw' === direction && change < 0)
            change =
              ((change + cap * CSSPlugin_bigNum) % cap) -
              ~~(change / cap) * cap;
          else if ('ccw' === direction && change > 0)
            change =
              ((change - cap * CSSPlugin_bigNum) % cap) -
              ~~(change / cap) * cap;
        }
        plugin._pt = pt = new PropTween(
          plugin._pt,
          target,
          property,
          startNum,
          change,
          _renderPropWithEnd
        );
        pt.e = finalValue;
        pt.u = 'deg';
        plugin._props.push(property);
        return pt;
      },
      _assign = function _assign(target, source) {
        for (var p in source) target[p] = source[p];
        return target;
      },
      _addRawTransformPTs = function _addRawTransformPTs(
        plugin,
        transforms,
        target
      ) {
        var endCache,
          p,
          startValue,
          endValue,
          startNum,
          endNum,
          startUnit,
          endUnit,
          startCache = _assign({}, target._gsap),
          exclude = 'perspective,force3D,transformOrigin,svgOrigin',
          style = target.style;
        if (startCache.svg) {
          startValue = target.getAttribute('transform');
          target.setAttribute('transform', '');
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp);
          target.setAttribute('transform', startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp];
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp] = startValue;
        }
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum =
              startUnit !== endUnit
                ? _convertToUnit(target, p, startValue, endUnit)
                : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(
              plugin._pt,
              endCache,
              p,
              startNum,
              endNum - startNum,
              _renderCSSProp
            );
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
          }
        }
        _assign(endCache, startCache);
      };
    _forEachName('padding,margin,Width,Radius', function (name, index) {
      var t = 'Top',
        r = 'Right',
        b = 'Bottom',
        l = 'Left',
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(
          function (side) {
            return index < 2 ? name + side : 'border' + side + name;
          }
        );
      _specialProps[index > 1 ? 'border' + name : name] = function (
        plugin,
        target,
        property,
        endValue,
        tween
      ) {
        var a, vars;
        if (arguments.length < 4) {
          a = props.map(function (prop) {
            return _get(plugin, prop, property);
          });
          vars = a.join(' ');
          return 5 === vars.split(a[0]).length ? a[0] : vars;
        }
        a = (endValue + '').split(' ');
        vars = {};
        props.forEach(function (prop, i) {
          return (vars[prop] = a[i] = a[i] || a[((i - 1) / 2) | 0]);
        });
        plugin.init(target, vars, tween);
      };
    });
    var CSSPlugin = {
      name: 'css',
      register: _initCore,
      targetTest: function targetTest(target) {
        return target.style && target.nodeType;
      },
      init: function init(target, vars, tween, index, targets) {
        var startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority,
          props = this._props,
          style = target.style,
          startAt = tween.vars.startAt;
        _pluginInitted || _initCore();
        for (p in vars) {
          if ('autoRound' === p) continue;
          endValue = vars[p];
          if (
            _plugins[p] &&
            _checkPlugin(p, vars, tween, index, target, targets)
          )
            continue;
          type = typeof endValue;
          specialProp = _specialProps[p];
          if ('function' === type) {
            endValue = endValue.call(tween, index, target, targets);
            type = typeof endValue;
          }
          if ('string' === type && ~endValue.indexOf('random('))
            endValue = _replaceRandom(endValue);
          if (specialProp)
            specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
          else if ('--' === p.substr(0, 2)) {
            startValue = (
              getComputedStyle(target).getPropertyValue(p) + ''
            ).trim();
            endValue += '';
            _colorExp.lastIndex = 0;
            if (!_colorExp.test(startValue)) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
            }
            endUnit
              ? startUnit !== endUnit &&
                (startValue =
                  _convertToUnit(target, p, startValue, endUnit) + endUnit)
              : startUnit && (endValue += startUnit);
            this.add(
              style,
              'setProperty',
              startValue,
              endValue,
              index,
              targets,
              0,
              0,
              p
            );
            props.push(p);
          } else if ('undefined' !== type) {
            if (startAt && p in startAt) {
              startValue =
                'function' === typeof startAt[p]
                  ? startAt[p].call(tween, index, target, targets)
                  : startAt[p];
              _isString(startValue) &&
                ~startValue.indexOf('random(') &&
                (startValue = _replaceRandom(startValue));
              getUnit(startValue + '') ||
                (startValue +=
                  _config.units[p] || getUnit(_get(target, p)) || '');
              '=' === (startValue + '').charAt(1) &&
                (startValue = _get(target, p));
            } else startValue = _get(target, p);
            startNum = parseFloat(startValue);
            relative =
              'string' === type &&
              '=' === endValue.charAt(1) &&
              endValue.substr(0, 2);
            relative && (endValue = endValue.substr(2));
            endNum = parseFloat(endValue);
            if (p in _propertyAliases) {
              if ('autoAlpha' === p) {
                if (
                  1 === startNum &&
                  'hidden' === _get(target, 'visibility') &&
                  endNum
                )
                  startNum = 0;
                _addNonTweeningPT(
                  this,
                  style,
                  'visibility',
                  startNum ? 'inherit' : 'hidden',
                  endNum ? 'inherit' : 'hidden',
                  !endNum
                );
              }
              if ('scale' !== p && 'transform' !== p) {
                p = _propertyAliases[p];
                ~p.indexOf(',') && (p = p.split(',')[0]);
              }
            }
            isTransformRelated = p in _transformProps;
            if (isTransformRelated) {
              if (!transformPropTween) {
                cache = target._gsap;
                (cache.renderTransform && !vars.parseTransform) ||
                  _parseTransform(target, vars.parseTransform);
                smooth = false !== vars.smoothOrigin && cache.smooth;
                transformPropTween = this._pt = new PropTween(
                  this._pt,
                  style,
                  _transformProp,
                  0,
                  1,
                  cache.renderTransform,
                  cache,
                  0,
                  -1
                );
                transformPropTween.dep = 1;
              }
              if ('scale' === p) {
                this._pt = new PropTween(
                  this._pt,
                  cache,
                  'scaleY',
                  cache.scaleY,
                  (relative
                    ? _parseRelative(cache.scaleY, relative + endNum)
                    : endNum) - cache.scaleY || 0
                );
                props.push('scaleY', p);
                p += 'X';
              } else if ('transformOrigin' === p) {
                endValue = _convertKeywordsToPercentages(endValue);
                if (cache.svg)
                  _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                else {
                  endUnit = parseFloat(endValue.split(' ')[2]) || 0;
                  endUnit !== cache.zOrigin &&
                    _addNonTweeningPT(
                      this,
                      cache,
                      'zOrigin',
                      cache.zOrigin,
                      endUnit
                    );
                  _addNonTweeningPT(
                    this,
                    style,
                    p,
                    _firstTwoOnly(startValue),
                    _firstTwoOnly(endValue)
                  );
                }
                continue;
              } else if ('svgOrigin' === p) {
                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                continue;
              } else if (p in _rotationalProperties) {
                _addRotationalPropTween(
                  this,
                  cache,
                  p,
                  startNum,
                  relative
                    ? _parseRelative(startNum, relative + endValue)
                    : endValue
                );
                continue;
              } else if ('smoothOrigin' === p) {
                _addNonTweeningPT(
                  this,
                  cache,
                  'smooth',
                  cache.smooth,
                  endValue
                );
                continue;
              } else if ('force3D' === p) {
                cache[p] = endValue;
                continue;
              } else if ('transform' === p) {
                _addRawTransformPTs(this, endValue, target);
                continue;
              }
            } else if (!(p in style)) p = _checkPropPrefix(p) || p;
            if (
              isTransformRelated ||
              ((endNum || 0 === endNum) &&
                (startNum || 0 === startNum) &&
                !_complexExp.test(endValue) &&
                p in style)
            ) {
              startUnit = (startValue + '').substr((startNum + '').length);
              endNum || (endNum = 0);
              endUnit =
                getUnit(endValue) ||
                (p in _config.units ? _config.units[p] : startUnit);
              startUnit !== endUnit &&
                (startNum = _convertToUnit(target, p, startValue, endUnit));
              this._pt = new PropTween(
                this._pt,
                isTransformRelated ? cache : style,
                p,
                startNum,
                (relative
                  ? _parseRelative(startNum, relative + endNum)
                  : endNum) - startNum,
                !isTransformRelated &&
                ('px' === endUnit || 'zIndex' === p) &&
                false !== vars.autoRound
                  ? _renderRoundedCSSProp
                  : _renderCSSProp
              );
              this._pt.u = endUnit || 0;
              if (startUnit !== endUnit && '%' !== endUnit) {
                this._pt.b = startValue;
                this._pt.r = _renderCSSPropWithBeginning;
              }
            } else if (!(p in style))
              if (p in target)
                this.add(
                  target,
                  p,
                  startValue || target[p],
                  relative ? relative + endValue : endValue,
                  index,
                  targets
                );
              else {
                _missingPlugin(p, endValue);
                continue;
              }
            else
              _tweenComplexCSSString.call(
                this,
                target,
                p,
                startValue,
                relative ? relative + endValue : endValue
              );
            props.push(p);
          }
        }
        hasPriority && _sortPropTweensByPriority(this);
      },
      get: _get,
      aliases: _propertyAliases,
      getSetter: function getSetter(target, property, plugin) {
        var p = _propertyAliases[property];
        p && p.indexOf(',') < 0 && (property = p);
        return property in _transformProps &&
          property !== _transformOriginProp &&
          (target._gsap.x || _get(target, 'x'))
          ? plugin && _recentSetterPlugin === plugin
            ? 'scale' === property
              ? _setterScale
              : _setterTransform
            : (_recentSetterPlugin = plugin || {}) &&
              ('scale' === property
                ? _setterScaleWithRender
                : _setterTransformWithRender)
          : target.style && !_isUndefined(target.style[property])
          ? _setterCSSStyle
          : ~property.indexOf('-')
          ? _setterCSSProp
          : _getSetter(target, property);
      },
      core: {
        _removeProperty,
        _getMatrix,
      },
    };
    gsap.utils.checkPrefix = _checkPropPrefix;
    (function (positionAndScale, rotation, others, aliases) {
      var all = _forEachName(
        positionAndScale + ',' + rotation + ',' + others,
        function (name) {
          _transformProps[name] = 1;
        }
      );
      _forEachName(rotation, function (name) {
        _config.units[name] = 'deg';
        _rotationalProperties[name] = 1;
      });
      _propertyAliases[all[13]] = positionAndScale + ',' + rotation;
      _forEachName(aliases, function (name) {
        var split = name.split(':');
        _propertyAliases[split[1]] = all[split[0]];
      });
    })(
      'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
      'rotation,rotationX,rotationY,skewX,skewY',
      'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
      '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
    );
    _forEachName(
      'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
      function (name) {
        _config.units[name] = 'px';
      }
    );
    gsap.registerPlugin(CSSPlugin);
    var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
    gsapWithCSS.core.Tween;
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    /*!
     * Observer 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var Observer_gsap,
      Observer_coreInitted,
      Observer_win,
      Observer_doc,
      _docEl,
      _body,
      _isTouch,
      _pointerType,
      ScrollTrigger,
      _root,
      _normalizer,
      _eventTypes,
      _getGSAP = function _getGSAP() {
        return (
          Observer_gsap ||
          ('undefined' !== typeof window &&
            (Observer_gsap = window.gsap) &&
            Observer_gsap.registerPlugin &&
            Observer_gsap)
        );
      },
      _startup = 1,
      _observers = [],
      _scrollers = [],
      _proxies = [],
      _getTime = Date.now,
      _bridge = function _bridge(name, value) {
        return value;
      },
      _integrate = function _integrate() {
        var core = ScrollTrigger.core,
          data = core.bridge || {},
          scrollers = core._scrollers,
          proxies = core._proxies;
        scrollers.push.apply(scrollers, _scrollers);
        proxies.push.apply(proxies, _proxies);
        _scrollers = scrollers;
        _proxies = proxies;
        _bridge = function _bridge(name, value) {
          return data[name](value);
        };
      },
      _getProxyProp = function _getProxyProp(element, property) {
        return (
          ~_proxies.indexOf(element) &&
          _proxies[_proxies.indexOf(element) + 1][property]
        );
      },
      _isViewport = function _isViewport(el) {
        return !!~_root.indexOf(el);
      },
      _addListener = function _addListener(
        element,
        type,
        func,
        nonPassive,
        capture
      ) {
        return element.addEventListener(type, func, {
          passive: !nonPassive,
          capture: !!capture,
        });
      },
      _removeListener = function _removeListener(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
      },
      _scrollLeft = 'scrollLeft',
      _scrollTop = 'scrollTop',
      _onScroll = function _onScroll() {
        return (_normalizer && _normalizer.isPressed) || _scrollers.cache++;
      },
      _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
        var cachingFunc = function cachingFunc(value) {
          if (value || 0 === value) {
            _startup && (Observer_win.history.scrollRestoration = 'manual');
            var isNormalizing = _normalizer && _normalizer.isPressed;
            value = cachingFunc.v =
              Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
            f(value);
            cachingFunc.cacheID = _scrollers.cache;
            isNormalizing && _bridge('ss', value);
          } else if (
            doNotCache ||
            _scrollers.cache !== cachingFunc.cacheID ||
            _bridge('ref')
          ) {
            cachingFunc.cacheID = _scrollers.cache;
            cachingFunc.v = f();
          }
          return cachingFunc.v + cachingFunc.offset;
        };
        cachingFunc.offset = 0;
        return f && cachingFunc;
      },
      _horizontal = {
        s: _scrollLeft,
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: _scrollCacheFunc(function (value) {
          return arguments.length
            ? Observer_win.scrollTo(value, _vertical.sc())
            : Observer_win.pageXOffset ||
                Observer_doc[_scrollLeft] ||
                _docEl[_scrollLeft] ||
                _body[_scrollLeft] ||
                0;
        }),
      },
      _vertical = {
        s: _scrollTop,
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: _horizontal,
        sc: _scrollCacheFunc(function (value) {
          return arguments.length
            ? Observer_win.scrollTo(_horizontal.sc(), value)
            : Observer_win.pageYOffset ||
                Observer_doc[_scrollTop] ||
                _docEl[_scrollTop] ||
                _body[_scrollTop] ||
                0;
        }),
      },
      _getTarget = function _getTarget(t) {
        return (
          Observer_gsap.utils.toArray(t)[0] ||
          ('string' === typeof t &&
          false !== Observer_gsap.config().nullTargetWarn
            ? console.warn('Element not found:', t)
            : null)
        );
      },
      _getScrollFunc = function _getScrollFunc(element, _ref) {
        var s = _ref.s,
          sc = _ref.sc;
        var i = _scrollers.indexOf(element),
          offset = sc === _vertical.sc ? 1 : 2;
        !~i && (i = _scrollers.push(element) - 1);
        return (
          _scrollers[i + offset] ||
          (_scrollers[i + offset] =
            _scrollCacheFunc(_getProxyProp(element, s), true) ||
            (_isViewport(element)
              ? sc
              : _scrollCacheFunc(function (value) {
                  return arguments.length ? (element[s] = value) : element[s];
                })))
        );
      },
      _getVelocityProp = function _getVelocityProp(
        value,
        minTimeRefresh,
        useDelta
      ) {
        var v1 = value,
          v2 = value,
          t1 = _getTime(),
          t2 = t1,
          min = minTimeRefresh || 50,
          dropToZeroTime = Math.max(500, 3 * min),
          update = function update(value, force) {
            var t = _getTime();
            if (force || t - t1 > min) {
              v2 = v1;
              v1 = value;
              t2 = t1;
              t1 = t;
            } else if (useDelta) v1 += value;
            else v1 = v2 + ((value - v2) / (t - t2)) * (t1 - t2);
          },
          reset = function reset() {
            v2 = v1 = useDelta ? 0 : v1;
            t2 = t1 = 0;
          },
          getVelocity = function getVelocity(latestValue) {
            var tOld = t2,
              vOld = v2,
              t = _getTime();
            (latestValue || 0 === latestValue) &&
              latestValue !== v1 &&
              update(latestValue);
            return t1 === t2 || t - t2 > dropToZeroTime
              ? 0
              : ((v1 + (useDelta ? vOld : -vOld)) /
                  ((useDelta ? t : t1) - tOld)) *
                  1e3;
          };
        return {
          update,
          reset,
          getVelocity,
        };
      },
      _getEvent = function _getEvent(e, preventDefault) {
        preventDefault && !e._gsapAllow && e.preventDefault();
        return e.changedTouches ? e.changedTouches[0] : e;
      },
      _getAbsoluteMax = function _getAbsoluteMax(a) {
        var max = Math.max.apply(Math, a),
          min = Math.min.apply(Math, a);
        return Math.abs(max) >= Math.abs(min) ? max : min;
      },
      _setScrollTrigger = function _setScrollTrigger() {
        ScrollTrigger = Observer_gsap.core.globals().ScrollTrigger;
        ScrollTrigger && ScrollTrigger.core && _integrate();
      },
      Observer_initCore = function _initCore(core) {
        Observer_gsap = core || _getGSAP();
        if (Observer_gsap && 'undefined' !== typeof document && document.body) {
          Observer_win = window;
          Observer_doc = document;
          _docEl = Observer_doc.documentElement;
          _body = Observer_doc.body;
          _root = [Observer_win, Observer_doc, _docEl, _body];
          Observer_gsap.utils.clamp;
          _pointerType = 'onpointerenter' in _body ? 'pointer' : 'mouse';
          _isTouch = Observer.isTouch =
            Observer_win.matchMedia &&
            Observer_win.matchMedia('(hover: none), (pointer: coarse)').matches
              ? 1
              : 'ontouchstart' in Observer_win ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0;
          _eventTypes = Observer.eventTypes = (
            'ontouchstart' in _docEl
              ? 'touchstart,touchmove,touchcancel,touchend'
              : !('onpointerdown' in _docEl)
              ? 'mousedown,mousemove,mouseup,mouseup'
              : 'pointerdown,pointermove,pointercancel,pointerup'
          ).split(',');
          setTimeout(function () {
            return (_startup = 0);
          }, 500);
          _setScrollTrigger();
          Observer_coreInitted = 1;
        }
        return Observer_coreInitted;
      };
    _horizontal.op = _vertical;
    _scrollers.cache = 0;
    var Observer = (function () {
      function Observer(vars) {
        this.init(vars);
      }
      var _proto = Observer.prototype;
      _proto.init = function init(vars) {
        Observer_coreInitted ||
          Observer_initCore(Observer_gsap) ||
          console.warn('Please gsap.registerPlugin(Observer)');
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance,
          dragMinimum = vars.dragMinimum,
          type = vars.type,
          target = vars.target,
          lineHeight = vars.lineHeight,
          debounce = vars.debounce,
          preventDefault = vars.preventDefault,
          onStop = vars.onStop,
          onStopDelay = vars.onStopDelay,
          ignore = vars.ignore,
          wheelSpeed = vars.wheelSpeed,
          event = vars.event,
          onDragStart = vars.onDragStart,
          onDragEnd = vars.onDragEnd,
          onDrag = vars.onDrag,
          onPress = vars.onPress,
          onRelease = vars.onRelease,
          onRight = vars.onRight,
          onLeft = vars.onLeft,
          onUp = vars.onUp,
          onDown = vars.onDown,
          onChangeX = vars.onChangeX,
          onChangeY = vars.onChangeY,
          onChange = vars.onChange,
          onToggleX = vars.onToggleX,
          onToggleY = vars.onToggleY,
          onHover = vars.onHover,
          onHoverEnd = vars.onHoverEnd,
          onMove = vars.onMove,
          ignoreCheck = vars.ignoreCheck,
          isNormalizer = vars.isNormalizer,
          onGestureStart = vars.onGestureStart,
          onGestureEnd = vars.onGestureEnd,
          onWheel = vars.onWheel,
          onEnable = vars.onEnable,
          onDisable = vars.onDisable,
          onClick = vars.onClick,
          scrollSpeed = vars.scrollSpeed,
          capture = vars.capture,
          allowClicks = vars.allowClicks,
          lockAxis = vars.lockAxis,
          onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl;
        this.vars = vars;
        ignore && (ignore = Observer_gsap.utils.toArray(ignore));
        tolerance = tolerance || 0;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || 'wheel,touch,pointer';
        debounce = false !== debounce;
        lineHeight ||
          (lineHeight =
            parseFloat(Observer_win.getComputedStyle(_body).lineHeight) || 22);
        var id,
          onStopDelayedCall,
          dragged,
          moved,
          wheeled,
          locked,
          axis,
          self = this,
          prevDeltaX = 0,
          prevDeltaY = 0,
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollX = scrollFuncX(),
          scrollY = scrollFuncY(),
          limitToTouch =
            ~type.indexOf('touch') &&
            !~type.indexOf('pointer') &&
            'pointerdown' === _eventTypes[0],
          isViewport = _isViewport(target),
          ownerDoc = target.ownerDocument || Observer_doc,
          deltaX = [0, 0, 0],
          deltaY = [0, 0, 0],
          onClickTime = 0,
          clickCapture = function clickCapture() {
            return (onClickTime = _getTime());
          },
          _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
            return (
              ((self.event = e) && ignore && ~ignore.indexOf(e.target)) ||
              (isPointerOrTouch && limitToTouch && 'touch' !== e.pointerType) ||
              (ignoreCheck && ignoreCheck(e, isPointerOrTouch))
            );
          },
          onStopFunc = function onStopFunc() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
          },
          update = function update() {
            var dx = (self.deltaX = _getAbsoluteMax(deltaX)),
              dy = (self.deltaY = _getAbsoluteMax(deltaY)),
              changedX = Math.abs(dx) >= tolerance,
              changedY = Math.abs(dy) >= tolerance;
            onChange &&
              (changedX || changedY) &&
              onChange(self, dx, dy, deltaX, deltaY);
            if (changedX) {
              onRight && self.deltaX > 0 && onRight(self);
              onLeft && self.deltaX < 0 && onLeft(self);
              onChangeX && onChangeX(self);
              onToggleX &&
                self.deltaX < 0 !== prevDeltaX < 0 &&
                onToggleX(self);
              prevDeltaX = self.deltaX;
              deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
              onDown && self.deltaY > 0 && onDown(self);
              onUp && self.deltaY < 0 && onUp(self);
              onChangeY && onChangeY(self);
              onToggleY &&
                self.deltaY < 0 !== prevDeltaY < 0 &&
                onToggleY(self);
              prevDeltaY = self.deltaY;
              deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
              onMove && onMove(self);
              onLockAxis && locked && onLockAxis(self);
              if (dragged) {
                onDrag(self);
                dragged = false;
              }
              moved = locked = false;
            }
            if (wheeled) {
              onWheel(self);
              wheeled = false;
            }
            id = 0;
          },
          onDelta = function onDelta(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
          },
          onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
            if ('y' !== axis) {
              deltaX[2] += x;
              self._vx.update(x, true);
            }
            if ('x' !== axis) {
              deltaY[2] += y;
              self._vy.update(y, true);
            }
            if (lockAxis && !axis) {
              self.axis = axis = Math.abs(x) > Math.abs(y) ? 'x' : 'y';
              locked = true;
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
          },
          _onDrag = function _onDrag(e) {
            if (_ignoreCheck(e, 1)) return;
            e = _getEvent(e, preventDefault);
            var x = e.clientX,
              y = e.clientY,
              dx = x - self.x,
              dy = y - self.y,
              isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (
              isDragging ||
              Math.abs(self.startX - x) >= dragMinimum ||
              Math.abs(self.startY - y) >= dragMinimum
            ) {
              onDrag && (dragged = true);
              isDragging || (self.isDragging = true);
              onTouchOrPointerDelta(dx, dy);
              isDragging || (onDragStart && onDragStart(self));
            }
          },
          _onPress = (self.onPress = function (e) {
            if (_ignoreCheck(e, 1)) return;
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e = _getEvent(e);
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e.clientX;
            self.startY = self.y = e.clientY;
            self._vx.reset();
            self._vy.reset();
            _addListener(
              isNormalizer ? target : ownerDoc,
              _eventTypes[1],
              _onDrag,
              preventDefault,
              true
            );
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
          }),
          _onRelease = function _onRelease(e) {
            if (_ignoreCheck(e, 1)) return;
            _removeListener(
              isNormalizer ? target : ownerDoc,
              _eventTypes[1],
              _onDrag,
              true
            );
            var wasDragging =
                self.isDragging &&
                (Math.abs(self.x - self.startX) > 3 ||
                  Math.abs(self.y - self.startY) > 3),
              eventData = _getEvent(e);
            if (!wasDragging) {
              self._vx.reset();
              self._vy.reset();
              if (preventDefault && allowClicks)
                Observer_gsap.delayedCall(0.08, function () {
                  if (_getTime() - onClickTime > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (ownerDoc.createEvent) {
                      var syntheticEvent = ownerDoc.createEvent('MouseEvents');
                      syntheticEvent.initMouseEvent(
                        'click',
                        true,
                        true,
                        Observer_win,
                        1,
                        eventData.screenX,
                        eventData.screenY,
                        eventData.clientX,
                        eventData.clientY,
                        false,
                        false,
                        false,
                        false,
                        0,
                        null
                      );
                      e.target.dispatchEvent(syntheticEvent);
                    }
                });
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, wasDragging);
          },
          _onGestureStart = function _onGestureStart(e) {
            return (
              e.touches &&
              e.touches.length > 1 &&
              (self.isGesturing = true) &&
              onGestureStart(e, self.isDragging)
            );
          },
          _onGestureEnd = function _onGestureEnd() {
            return (self.isGesturing = false) || onGestureEnd(self);
          },
          onScroll = function onScroll(e) {
            if (_ignoreCheck(e)) return;
            var x = scrollFuncX(),
              y = scrollFuncY();
            onDelta(
              (x - scrollX) * scrollSpeed,
              (y - scrollY) * scrollSpeed,
              1
            );
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
          },
          _onWheel = function _onWheel(e) {
            if (_ignoreCheck(e)) return;
            e = _getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier =
              (1 === e.deltaMode
                ? lineHeight
                : 2 === e.deltaMode
                ? Observer_win.innerHeight
                : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
          },
          _onMove = function _onMove(e) {
            if (_ignoreCheck(e)) return;
            var x = e.clientX,
              y = e.clientY,
              dx = x - self.x,
              dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
          },
          _onHover = function _onHover(e) {
            self.event = e;
            onHover(self);
          },
          _onHoverEnd = function _onHoverEnd(e) {
            self.event = e;
            onHoverEnd(self);
          },
          _onClick = function _onClick(e) {
            return (
              _ignoreCheck(e) || (_getEvent(e, preventDefault) && onClick(self))
            );
          };
        onStopDelayedCall = self._dc = Observer_gsap.delayedCall(
          onStopDelay || 0.25,
          onStopFunc
        ).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = _getVelocityProp(0, 50, true);
        self._vy = _getVelocityProp(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        self.enable = function (e) {
          if (!self.isEnabled) {
            _addListener(isViewport ? ownerDoc : target, 'scroll', _onScroll);
            type.indexOf('scroll') >= 0 &&
              _addListener(
                isViewport ? ownerDoc : target,
                'scroll',
                onScroll,
                preventDefault,
                capture
              );
            type.indexOf('wheel') >= 0 &&
              _addListener(target, 'wheel', _onWheel, preventDefault, capture);
            if (
              (type.indexOf('touch') >= 0 && _isTouch) ||
              type.indexOf('pointer') >= 0
            ) {
              _addListener(
                target,
                _eventTypes[0],
                _onPress,
                preventDefault,
                capture
              );
              _addListener(ownerDoc, _eventTypes[2], _onRelease);
              _addListener(ownerDoc, _eventTypes[3], _onRelease);
              allowClicks &&
                _addListener(target, 'click', clickCapture, false, true);
              onClick && _addListener(target, 'click', _onClick);
              onGestureStart &&
                _addListener(ownerDoc, 'gesturestart', _onGestureStart);
              onGestureEnd &&
                _addListener(ownerDoc, 'gestureend', _onGestureEnd);
              onHover && _addListener(target, _pointerType + 'enter', _onHover);
              onHoverEnd &&
                _addListener(target, _pointerType + 'leave', _onHoverEnd);
              onMove && _addListener(target, _pointerType + 'move', _onMove);
            }
            self.isEnabled = true;
            e && e.type && _onPress(e);
            onEnable && onEnable(self);
          }
          return self;
        };
        self.disable = function () {
          if (self.isEnabled) {
            _observers.filter(function (o) {
              return o !== self && _isViewport(o.target);
            }).length ||
              _removeListener(
                isViewport ? ownerDoc : target,
                'scroll',
                _onScroll
              );
            if (self.isPressed) {
              self._vx.reset();
              self._vy.reset();
              _removeListener(
                isNormalizer ? target : ownerDoc,
                _eventTypes[1],
                _onDrag,
                true
              );
            }
            _removeListener(
              isViewport ? ownerDoc : target,
              'scroll',
              onScroll,
              capture
            );
            _removeListener(target, 'wheel', _onWheel, capture);
            _removeListener(target, _eventTypes[0], _onPress, capture);
            _removeListener(ownerDoc, _eventTypes[2], _onRelease);
            _removeListener(ownerDoc, _eventTypes[3], _onRelease);
            _removeListener(target, 'click', clickCapture, true);
            _removeListener(target, 'click', _onClick);
            _removeListener(ownerDoc, 'gesturestart', _onGestureStart);
            _removeListener(ownerDoc, 'gestureend', _onGestureEnd);
            _removeListener(target, _pointerType + 'enter', _onHover);
            _removeListener(target, _pointerType + 'leave', _onHoverEnd);
            _removeListener(target, _pointerType + 'move', _onMove);
            self.isEnabled = self.isPressed = self.isDragging = false;
            onDisable && onDisable(self);
          }
        };
        self.kill = function () {
          self.disable();
          var i = _observers.indexOf(self);
          i >= 0 && _observers.splice(i, 1);
          _normalizer === self && (_normalizer = 0);
        };
        _observers.push(self);
        isNormalizer && _isViewport(target) && (_normalizer = self);
        self.enable(event);
      };
      _createClass(Observer, [
        {
          key: 'velocityX',
          get: function get() {
            return this._vx.getVelocity();
          },
        },
        {
          key: 'velocityY',
          get: function get() {
            return this._vy.getVelocity();
          },
        },
      ]);
      return Observer;
    })();
    Observer.version = '3.10.4';
    Observer.create = function (vars) {
      return new Observer(vars);
    };
    Observer.register = Observer_initCore;
    Observer.getAll = function () {
      return _observers.slice();
    };
    Observer.getById = function (id) {
      return _observers.filter(function (o) {
        return o.vars.id === id;
      })[0];
    };
    _getGSAP() && Observer_gsap.registerPlugin(Observer);
    /*!
     * ScrollTrigger 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ScrollTrigger_gsap,
      ScrollTrigger_coreInitted,
      ScrollTrigger_win,
      ScrollTrigger_doc,
      ScrollTrigger_docEl,
      ScrollTrigger_body,
      ScrollTrigger_root,
      _resizeDelay,
      _toArray,
      ScrollTrigger_clamp,
      _time2,
      _syncInterval,
      _refreshing,
      _pointerIsDown,
      ScrollTrigger_transformProp,
      _i,
      _prevWidth,
      _prevHeight,
      _autoRefresh,
      _sort,
      ScrollTrigger_suppressOverwrites,
      _ignoreResize,
      ScrollTrigger_normalizer,
      _ignoreMobileResize,
      _baseScreenHeight,
      _baseScreenWidth,
      _fixIOSBug,
      _limitCallbacks,
      _rafID,
      _creatingMedia,
      _lastMediaTick,
      _refreshingAll,
      _primary,
      ScrollTrigger_startup = 1,
      ScrollTrigger_getTime = Date.now,
      _time1 = ScrollTrigger_getTime(),
      _lastScrollTime = 0,
      _enabled = 0,
      _pointerDownHandler = function _pointerDownHandler() {
        return (_pointerIsDown = 1);
      },
      _pointerUpHandler = function _pointerUpHandler() {
        return (_pointerIsDown = 0);
      },
      ScrollTrigger_passThrough = function _passThrough(v) {
        return v;
      },
      ScrollTrigger_round = function _round(value) {
        return Math.round(1e5 * value) / 1e5 || 0;
      },
      ScrollTrigger_windowExists = function _windowExists() {
        return 'undefined' !== typeof window;
      },
      ScrollTrigger_getGSAP = function _getGSAP() {
        return (
          ScrollTrigger_gsap ||
          (ScrollTrigger_windowExists() &&
            (ScrollTrigger_gsap = window.gsap) &&
            ScrollTrigger_gsap.registerPlugin &&
            ScrollTrigger_gsap)
        );
      },
      ScrollTrigger_isViewport = function _isViewport(e) {
        return !!~ScrollTrigger_root.indexOf(e);
      },
      _getBoundsFunc = function _getBoundsFunc(element) {
        return (
          _getProxyProp(element, 'getBoundingClientRect') ||
          (ScrollTrigger_isViewport(element)
            ? function () {
                _winOffsets.width = ScrollTrigger_win.innerWidth;
                _winOffsets.height = ScrollTrigger_win.innerHeight;
                return _winOffsets;
              }
            : function () {
                return _getBounds(element);
              })
        );
      },
      _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
        var d = _ref.d,
          d2 = _ref.d2,
          a = _ref.a;
        return (a = _getProxyProp(scroller, 'getBoundingClientRect'))
          ? function () {
              return a()[d];
            }
          : function () {
              return (
                (isViewport
                  ? ScrollTrigger_win['inner' + d2]
                  : scroller['client' + d2]) || 0
              );
            };
      },
      _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
        return !isViewport || ~_proxies.indexOf(element)
          ? _getBoundsFunc(element)
          : function () {
              return _winOffsets;
            };
      },
      _maxScroll = function _maxScroll(element, _ref2) {
        var s = _ref2.s,
          d2 = _ref2.d2,
          d = _ref2.d,
          a = _ref2.a;
        return (s = 'scroll' + d2) && (a = _getProxyProp(element, s))
          ? a() - _getBoundsFunc(element)()[d]
          : ScrollTrigger_isViewport(element)
          ? (ScrollTrigger_docEl[s] || ScrollTrigger_body[s]) -
            (ScrollTrigger_win['inner' + d2] ||
              ScrollTrigger_docEl['client' + d2] ||
              ScrollTrigger_body['client' + d2])
          : element[s] - element['offset' + d2];
      },
      _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
        for (var i = 0; i < _autoRefresh.length; i += 3)
          (!events || ~events.indexOf(_autoRefresh[i + 1])) &&
            func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
      },
      ScrollTrigger_isString = function _isString(value) {
        return 'string' === typeof value;
      },
      ScrollTrigger_isFunction = function _isFunction(value) {
        return 'function' === typeof value;
      },
      ScrollTrigger_isNumber = function _isNumber(value) {
        return 'number' === typeof value;
      },
      ScrollTrigger_isObject = function _isObject(value) {
        return 'object' === typeof value;
      },
      _callIfFunc = function _callIfFunc(value) {
        return ScrollTrigger_isFunction(value) && value();
      },
      _combineFunc = function _combineFunc(f1, f2) {
        return function () {
          var result1 = _callIfFunc(f1),
            result2 = _callIfFunc(f2);
          return function () {
            _callIfFunc(result1);
            _callIfFunc(result2);
          };
        };
      },
      _endAnimation = function _endAnimation(animation, reversed, pause) {
        return (
          animation &&
          animation.progress(reversed ? 0 : 1) &&
          pause &&
          animation.pause()
        );
      },
      ScrollTrigger_callback = function _callback(self, func) {
        if (self.enabled) {
          var result = func(self);
          result && result.totalTime && (self.callbackAnimation = result);
        }
      },
      _abs = Math.abs,
      _left = 'left',
      _top = 'top',
      _right = 'right',
      _bottom = 'bottom',
      _width = 'width',
      _height = 'height',
      _Right = 'Right',
      _Left = 'Left',
      _Top = 'Top',
      _Bottom = 'Bottom',
      _padding = 'padding',
      _margin = 'margin',
      _Width = 'Width',
      _Height = 'Height',
      _px = 'px',
      _getComputedStyle = function _getComputedStyle(element) {
        return ScrollTrigger_win.getComputedStyle(element);
      },
      _makePositionable = function _makePositionable(element) {
        var position = _getComputedStyle(element).position;
        element.style.position =
          'absolute' === position || 'fixed' === position
            ? position
            : 'relative';
      },
      ScrollTrigger_setDefaults = function _setDefaults(obj, defaults) {
        for (var p in defaults) p in obj || (obj[p] = defaults[p]);
        return obj;
      },
      _getBounds = function _getBounds(element, withoutTransforms) {
        var tween =
            withoutTransforms &&
            'matrix(1, 0, 0, 1, 0, 0)' !==
              _getComputedStyle(element)[ScrollTrigger_transformProp] &&
            ScrollTrigger_gsap.to(element, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          bounds = element.getBoundingClientRect();
        tween && tween.progress(0).kill();
        return bounds;
      },
      _getSize = function _getSize(element, _ref3) {
        var d2 = _ref3.d2;
        return element['offset' + d2] || element['client' + d2] || 0;
      },
      _getLabelRatioArray = function _getLabelRatioArray(timeline) {
        var p,
          a = [],
          labels = timeline.labels,
          duration = timeline.duration();
        for (p in labels) a.push(labels[p] / duration);
        return a;
      },
      _getClosestLabel = function _getClosestLabel(animation) {
        return function (value) {
          return ScrollTrigger_gsap.utils.snap(
            _getLabelRatioArray(animation),
            value
          );
        };
      },
      _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
        var snap = ScrollTrigger_gsap.utils.snap(snapIncrementOrArray),
          a =
            Array.isArray(snapIncrementOrArray) &&
            snapIncrementOrArray.slice(0).sort(function (a, b) {
              return a - b;
            });
        return a
          ? function (value, direction, threshold) {
              if (void 0 === threshold) threshold = 0.001;
              var i;
              if (!direction) return snap(value);
              if (direction > 0) {
                value -= threshold;
                for (i = 0; i < a.length; i++) if (a[i] >= value) return a[i];
                return a[i - 1];
              } else {
                i = a.length;
                value += threshold;
                while (i--) if (a[i] <= value) return a[i];
              }
              return a[0];
            }
          : function (value, direction, threshold) {
              if (void 0 === threshold) threshold = 0.001;
              var snapped = snap(value);
              return !direction ||
                Math.abs(snapped - value) < threshold ||
                snapped - value < 0 === direction < 0
                ? snapped
                : snap(
                    direction < 0
                      ? value - snapIncrementOrArray
                      : value + snapIncrementOrArray
                  );
            };
      },
      _getLabelAtDirection = function _getLabelAtDirection(timeline) {
        return function (value, st) {
          return _snapDirectional(_getLabelRatioArray(timeline))(
            value,
            st.direction
          );
        };
      },
      _multiListener = function _multiListener(func, element, types, callback) {
        return types.split(',').forEach(function (type) {
          return func(element, type, callback);
        });
      },
      ScrollTrigger_addListener = function _addListener(
        element,
        type,
        func,
        nonPassive,
        capture
      ) {
        return element.addEventListener(type, func, {
          passive: !nonPassive,
          capture: !!capture,
        });
      },
      ScrollTrigger_removeListener = function _removeListener(
        element,
        type,
        func,
        capture
      ) {
        return element.removeEventListener(type, func, !!capture);
      },
      _wheelListener = function _wheelListener(func, el, scrollFunc) {
        return (
          scrollFunc && scrollFunc.wheelHandler && func(el, 'wheel', scrollFunc)
        );
      },
      _markerDefaults = {
        startColor: 'green',
        endColor: 'red',
        indent: 0,
        fontSize: '16px',
        fontWeight: 'normal',
      },
      ScrollTrigger_defaults = {
        toggleActions: 'play',
        anticipatePin: 0,
      },
      _keywords = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1,
      },
      _offsetToPx = function _offsetToPx(value, size) {
        if (ScrollTrigger_isString(value)) {
          var eqIndex = value.indexOf('='),
            relative = ~eqIndex
              ? +(value.charAt(eqIndex - 1) + 1) *
                parseFloat(value.substr(eqIndex + 1))
              : 0;
          if (~eqIndex) {
            value.indexOf('%') > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
          }
          value =
            relative +
            (value in _keywords
              ? _keywords[value] * size
              : ~value.indexOf('%')
              ? (parseFloat(value) * size) / 100
              : parseFloat(value) || 0);
        }
        return value;
      },
      _createMarker = function _createMarker(
        type,
        name,
        container,
        direction,
        _ref4,
        offset,
        matchWidthEl,
        containerAnimation
      ) {
        var startColor = _ref4.startColor,
          endColor = _ref4.endColor,
          fontSize = _ref4.fontSize,
          indent = _ref4.indent,
          fontWeight = _ref4.fontWeight;
        var e = ScrollTrigger_doc.createElement('div'),
          useFixedPosition =
            ScrollTrigger_isViewport(container) ||
            'fixed' === _getProxyProp(container, 'pinType'),
          isScroller = -1 !== type.indexOf('scroller'),
          parent = useFixedPosition ? ScrollTrigger_body : container,
          isStart = -1 !== type.indexOf('start'),
          color = isStart ? startColor : endColor,
          css =
            'border-color:' +
            color +
            ';font-size:' +
            fontSize +
            ';color:' +
            color +
            ';font-weight:' +
            fontWeight +
            ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
        css +=
          'position:' +
          ((isScroller || containerAnimation) && useFixedPosition
            ? 'fixed;'
            : 'absolute;');
        (isScroller || containerAnimation || !useFixedPosition) &&
          (css +=
            (direction === _vertical ? _right : _bottom) +
            ':' +
            (offset + parseFloat(indent)) +
            'px;');
        matchWidthEl &&
          (css +=
            'box-sizing:border-box;text-align:left;width:' +
            matchWidthEl.offsetWidth +
            'px;');
        e._isStart = isStart;
        e.setAttribute(
          'class',
          'gsap-marker-' + type + (name ? ' marker-' + name : '')
        );
        e.style.cssText = css;
        e.innerText = name || 0 === name ? type + '-' + name : type;
        parent.children[0]
          ? parent.insertBefore(e, parent.children[0])
          : parent.appendChild(e);
        e._offset = e['offset' + direction.op.d2];
        _positionMarker(e, 0, direction, isStart);
        return e;
      },
      _positionMarker = function _positionMarker(
        marker,
        start,
        direction,
        flipped
      ) {
        var vars = {
            display: 'block',
          },
          side = direction[flipped ? 'os2' : 'p2'],
          oppositeSide = direction[flipped ? 'p2' : 'os2'];
        marker._isFlipped = flipped;
        vars[direction.a + 'Percent'] = flipped ? -100 : 0;
        vars[direction.a] = flipped ? '1px' : 0;
        vars['border' + side + _Width] = 1;
        vars['border' + oppositeSide + _Width] = 0;
        vars[direction.p] = start + 'px';
        ScrollTrigger_gsap.set(marker, vars);
      },
      _triggers = [],
      _ids = {},
      _sync = function _sync() {
        return ScrollTrigger_getTime() - _lastScrollTime > 34 && _updateAll();
      },
      ScrollTrigger_onScroll = function _onScroll() {
        if (
          !ScrollTrigger_normalizer ||
          !ScrollTrigger_normalizer.isPressed ||
          ScrollTrigger_normalizer.startX > ScrollTrigger_body.clientWidth
        ) {
          _scrollers.cache++;
          _rafID || (_rafID = requestAnimationFrame(_updateAll));
          _lastScrollTime || _dispatch('scrollStart');
          _lastScrollTime = ScrollTrigger_getTime();
        }
      },
      _setBaseDimensions = function _setBaseDimensions() {
        _baseScreenWidth = ScrollTrigger_win.innerWidth;
        _baseScreenHeight = ScrollTrigger_win.innerHeight;
      },
      _onResize = function _onResize() {
        _scrollers.cache++;
        !_refreshing &&
          !_ignoreResize &&
          !ScrollTrigger_doc.fullscreenElement &&
          !ScrollTrigger_doc.webkitFullscreenElement &&
          (!_ignoreMobileResize ||
            _baseScreenWidth !== ScrollTrigger_win.innerWidth ||
            Math.abs(ScrollTrigger_win.innerHeight - _baseScreenHeight) >
              0.25 * ScrollTrigger_win.innerHeight) &&
          _resizeDelay.restart(true);
      },
      _listeners = {},
      _emptyArray = [],
      _media = [],
      _onMediaChange = function _onMediaChange(e) {
        var index,
          tick = ScrollTrigger_gsap.ticker.frame,
          matches = [],
          i = 0;
        if (_lastMediaTick !== tick || ScrollTrigger_startup) {
          _revertAll();
          for (; i < _media.length; i += 4) {
            index = ScrollTrigger_win.matchMedia(_media[i]).matches;
            if (index !== _media[i + 3]) {
              _media[i + 3] = index;
              index
                ? matches.push(i)
                : _revertAll(1, _media[i]) ||
                  (ScrollTrigger_isFunction(_media[i + 2]) && _media[i + 2]());
            }
          }
          _revertRecorded();
          for (i = 0; i < matches.length; i++) {
            index = matches[i];
            _creatingMedia = _media[index];
            _media[index + 2] = _media[index + 1](e);
          }
          _creatingMedia = 0;
          ScrollTrigger_coreInitted && _refreshAll(0, 1);
          _lastMediaTick = tick;
          _dispatch('matchMedia');
        }
      },
      _softRefresh = function _softRefresh() {
        return (
          ScrollTrigger_removeListener(
            ScrollTrigger_ScrollTrigger,
            'scrollEnd',
            _softRefresh
          ) || _refreshAll(true)
        );
      },
      _dispatch = function _dispatch(type) {
        return (
          (_listeners[type] &&
            _listeners[type].map(function (f) {
              return f();
            })) ||
          _emptyArray
        );
      },
      _savedStyles = [],
      _revertRecorded = function _revertRecorded(media) {
        for (var i = 0; i < _savedStyles.length; i += 5)
          if (!media || _savedStyles[i + 4] === media) {
            _savedStyles[i].style.cssText = _savedStyles[i + 1];
            _savedStyles[i].getBBox &&
              _savedStyles[i].setAttribute(
                'transform',
                _savedStyles[i + 2] || ''
              );
            _savedStyles[i + 3].uncache = 1;
          }
      },
      _revertAll = function _revertAll(kill, media) {
        var trigger;
        for (_i = 0; _i < _triggers.length; _i++) {
          trigger = _triggers[_i];
          if (!media || trigger.media === media)
            if (kill) trigger.kill(1);
            else trigger.revert();
        }
        media && _revertRecorded(media);
        media || _dispatch('revert');
      },
      _clearScrollMemory = function _clearScrollMemory() {
        return (
          _scrollers.cache++ &&
          _scrollers.forEach(function (obj) {
            return 'function' === typeof obj && (obj.rec = 0);
          })
        );
      },
      _refreshID = 0,
      _refreshAll = function _refreshAll(force, skipRevert) {
        if (_lastScrollTime && !force) {
          ScrollTrigger_addListener(
            ScrollTrigger_ScrollTrigger,
            'scrollEnd',
            _softRefresh
          );
          return;
        }
        _refreshingAll = true;
        var refreshInits = _dispatch('refreshInit');
        _sort && ScrollTrigger_ScrollTrigger.sort();
        skipRevert || _revertAll();
        _triggers.slice(0).forEach(function (t) {
          return t.refresh();
        });
        _triggers.forEach(function (t) {
          return (
            'max' === t.vars.end &&
            t.setPositions(t.start, _maxScroll(t.scroller, t._dir))
          );
        });
        refreshInits.forEach(function (result) {
          return result && result.render && result.render(-1);
        });
        _clearScrollMemory();
        _resizeDelay.pause();
        _refreshID++;
        _refreshingAll = false;
        _dispatch('refresh');
      },
      _lastScroll = 0,
      _direction = 1,
      _updateAll = function _updateAll() {
        if (!_refreshingAll) {
          ScrollTrigger_ScrollTrigger.isUpdating = true;
          _primary && _primary.update(0);
          var l = _triggers.length,
            time = ScrollTrigger_getTime(),
            recordVelocity = time - _time1 >= 50,
            scroll = l && _triggers[0].scroll();
          _direction = _lastScroll > scroll ? -1 : 1;
          _lastScroll = scroll;
          if (recordVelocity) {
            if (
              _lastScrollTime &&
              !_pointerIsDown &&
              time - _lastScrollTime > 200
            ) {
              _lastScrollTime = 0;
              _dispatch('scrollEnd');
            }
            _time2 = _time1;
            _time1 = time;
          }
          if (_direction < 0) {
            _i = l;
            while (_i-- > 0)
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            _direction = 1;
          } else
            for (_i = 0; _i < l; _i++)
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          ScrollTrigger_ScrollTrigger.isUpdating = false;
        }
        _rafID = 0;
      },
      _propNamesToCopy = [
        _left,
        _top,
        _bottom,
        _right,
        _margin + _Bottom,
        _margin + _Right,
        _margin + _Top,
        _margin + _Left,
        'display',
        'flexShrink',
        'float',
        'zIndex',
        'gridColumnStart',
        'gridColumnEnd',
        'gridRowStart',
        'gridRowEnd',
        'gridArea',
        'justifySelf',
        'alignSelf',
        'placeSelf',
        'order',
      ],
      _stateProps = _propNamesToCopy.concat([
        _width,
        _height,
        'boxSizing',
        'max' + _Width,
        'max' + _Height,
        'position',
        _margin,
        _padding,
        _padding + _Top,
        _padding + _Right,
        _padding + _Bottom,
        _padding + _Left,
      ]),
      _swapPinOut = function _swapPinOut(pin, spacer, state) {
        _setState(state);
        var cache = pin._gsap;
        if (cache.spacerIsNative) _setState(cache.spacerState);
        else if (pin.parentNode === spacer) {
          var parent = spacer.parentNode;
          if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
          }
        }
      },
      _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
        if (pin.parentNode !== spacer) {
          var p,
            i = _propNamesToCopy.length,
            spacerStyle = spacer.style,
            pinStyle = pin.style;
          while (i--) {
            p = _propNamesToCopy[i];
            spacerStyle[p] = cs[p];
          }
          spacerStyle.position =
            'absolute' === cs.position ? 'absolute' : 'relative';
          'inline' === cs.display && (spacerStyle.display = 'inline-block');
          pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = 'auto';
          spacerStyle.overflow = 'visible';
          spacerStyle.boxSizing = 'border-box';
          spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
          spacerStyle[_height] = _getSize(pin, _vertical) + _px;
          spacerStyle[_padding] =
            pinStyle[_margin] =
            pinStyle[_top] =
            pinStyle[_left] =
              '0';
          _setState(spacerState);
          pinStyle[_width] = pinStyle['max' + _Width] = cs[_width];
          pinStyle[_height] = pinStyle['max' + _Height] = cs[_height];
          pinStyle[_padding] = cs[_padding];
          pin.parentNode.insertBefore(spacer, pin);
          spacer.appendChild(pin);
        }
      },
      ScrollTrigger_capsExp = /([A-Z])/g,
      _setState = function _setState(state) {
        if (state) {
          var p,
            value,
            style = state.t.style,
            l = state.length,
            i = 0;
          (
            state.t._gsap || ScrollTrigger_gsap.core.getCache(state.t)
          ).uncache = 1;
          for (; i < l; i += 2) {
            value = state[i + 1];
            p = state[i];
            if (value) style[p] = value;
            else if (style[p])
              style.removeProperty(
                p.replace(ScrollTrigger_capsExp, '-$1').toLowerCase()
              );
          }
        }
      },
      _getState = function _getState(element) {
        var l = _stateProps.length,
          style = element.style,
          state = [],
          i = 0;
        for (; i < l; i++) state.push(_stateProps[i], style[_stateProps[i]]);
        state.t = element;
        return state;
      },
      _copyState = function _copyState(state, override, omitOffsets) {
        var p,
          result = [],
          l = state.length,
          i = omitOffsets ? 8 : 0;
        for (; i < l; i += 2) {
          p = state[i];
          result.push(p, p in override ? override[p] : state[i + 1]);
        }
        result.t = state.t;
        return result;
      },
      _winOffsets = {
        left: 0,
        top: 0,
      },
      ScrollTrigger_parsePosition = function _parsePosition(
        value,
        trigger,
        scrollerSize,
        direction,
        scroll,
        marker,
        markerScroller,
        self,
        scrollerBounds,
        borderWidth,
        useFixedPosition,
        scrollerMax,
        containerAnimation
      ) {
        ScrollTrigger_isFunction(value) && (value = value(self));
        if (ScrollTrigger_isString(value) && 'max' === value.substr(0, 3))
          value =
            scrollerMax +
            ('=' === value.charAt(4)
              ? _offsetToPx('0' + value.substr(3), scrollerSize)
              : 0);
        var p1,
          p2,
          element,
          time = containerAnimation ? containerAnimation.time() : 0;
        containerAnimation && containerAnimation.seek(0);
        if (!ScrollTrigger_isNumber(value)) {
          ScrollTrigger_isFunction(trigger) && (trigger = trigger(self));
          var bounds,
            localOffset,
            globalOffset,
            display,
            offsets = value.split(' ');
          element = _getTarget(trigger) || ScrollTrigger_body;
          bounds = _getBounds(element) || {};
          if (
            (!bounds || (!bounds.left && !bounds.top)) &&
            'none' === _getComputedStyle(element).display
          ) {
            display = element.style.display;
            element.style.display = 'block';
            bounds = _getBounds(element);
            display
              ? (element.style.display = display)
              : element.style.removeProperty('display');
          }
          localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
          globalOffset = _offsetToPx(offsets[1] || '0', scrollerSize);
          value =
            bounds[direction.p] -
            scrollerBounds[direction.p] -
            borderWidth +
            localOffset +
            scroll -
            globalOffset;
          markerScroller &&
            _positionMarker(
              markerScroller,
              globalOffset,
              direction,
              scrollerSize - globalOffset < 20 ||
                (markerScroller._isStart && globalOffset > 20)
            );
          scrollerSize -= scrollerSize - globalOffset;
        } else if (markerScroller)
          _positionMarker(markerScroller, scrollerSize, direction, true);
        if (marker) {
          var position = value + scrollerSize,
            isStart = marker._isStart;
          p1 = 'scroll' + direction.d2;
          _positionMarker(
            marker,
            position,
            direction,
            (isStart && position > 20) ||
              (!isStart &&
                (useFixedPosition
                  ? Math.max(ScrollTrigger_body[p1], ScrollTrigger_docEl[p1])
                  : marker.parentNode[p1]) <=
                  position + 1)
          );
          if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition &&
              (marker.style[direction.op.p] =
                scrollerBounds[direction.op.p] -
                direction.op.m -
                marker._offset +
                _px);
          }
        }
        if (containerAnimation && element) {
          p1 = _getBounds(element);
          containerAnimation.seek(scrollerMax);
          p2 = _getBounds(element);
          containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
          value = (value / containerAnimation._caScrollDist) * scrollerMax;
        }
        containerAnimation && containerAnimation.seek(time);
        return containerAnimation ? value : Math.round(value);
      },
      _prefixExp = /(webkit|moz|length|cssText|inset)/i,
      _reparent = function _reparent(element, parent, top, left) {
        if (element.parentNode !== parent) {
          var p,
            cs,
            style = element.style;
          if (parent === ScrollTrigger_body) {
            element._stOrig = style.cssText;
            cs = _getComputedStyle(element);
            for (p in cs)
              if (
                !+p &&
                !_prefixExp.test(p) &&
                cs[p] &&
                'string' === typeof style[p] &&
                '0' !== p
              )
                style[p] = cs[p];
            style.top = top;
            style.left = left;
          } else style.cssText = element._stOrig;
          ScrollTrigger_gsap.core.getCache(element).uncache = 1;
          parent.appendChild(element);
        }
      },
      _getTweenCreator = function _getTweenCreator(scroller, direction) {
        var lastScroll1,
          lastScroll2,
          getScroll = _getScrollFunc(scroller, direction),
          prop = '_scroll' + direction.p2,
          getTween = function getTween(
            scrollTo,
            vars,
            initialValue,
            change1,
            change2
          ) {
            var tween = getTween.tween,
              onComplete = vars.onComplete,
              modifiers = {};
            initialValue = initialValue || getScroll();
            change2 = (change1 && change2) || 0;
            change1 = change1 || scrollTo - initialValue;
            tween && tween.kill();
            lastScroll1 = Math.round(initialValue);
            vars[prop] = scrollTo;
            vars.modifiers = modifiers;
            modifiers[prop] = function (value) {
              value = ScrollTrigger_round(getScroll());
              if (
                value !== lastScroll1 &&
                value !== lastScroll2 &&
                Math.abs(value - lastScroll1) > 2 &&
                Math.abs(value - lastScroll2) > 2
              ) {
                tween.kill();
                getTween.tween = 0;
              } else
                value =
                  initialValue +
                  change1 * tween.ratio +
                  change2 * tween.ratio * tween.ratio;
              lastScroll2 = lastScroll1;
              return (lastScroll1 = ScrollTrigger_round(value));
            };
            vars.onComplete = function () {
              getTween.tween = 0;
              onComplete && onComplete.call(tween);
            };
            tween = getTween.tween = ScrollTrigger_gsap.to(scroller, vars);
            return tween;
          };
        scroller[prop] = getScroll;
        getScroll.wheelHandler = function () {
          return (
            getTween.tween && getTween.tween.kill() && (getTween.tween = 0)
          );
        };
        ScrollTrigger_addListener(scroller, 'wheel', getScroll.wheelHandler);
        return getTween;
      };
    var ScrollTrigger_ScrollTrigger = (function () {
      function ScrollTrigger(vars, animation) {
        ScrollTrigger_coreInitted ||
          ScrollTrigger.register(ScrollTrigger_gsap) ||
          console.warn('Please gsap.registerPlugin(ScrollTrigger)');
        this.init(vars, animation);
      }
      var _proto = ScrollTrigger.prototype;
      _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true);
        if (!_enabled) {
          this.update = this.refresh = this.kill = ScrollTrigger_passThrough;
          return;
        }
        vars = ScrollTrigger_setDefaults(
          ScrollTrigger_isString(vars) ||
            ScrollTrigger_isNumber(vars) ||
            vars.nodeType
            ? {
                trigger: vars,
              }
            : vars,
          ScrollTrigger_defaults
        );
        var tweenTo,
          pinCache,
          snapFunc,
          scroll1,
          scroll2,
          start,
          end,
          markerStart,
          markerEnd,
          markerStartTrigger,
          markerEndTrigger,
          markerVars,
          change,
          pinOriginalState,
          pinActiveState,
          pinState,
          spacer,
          offset,
          pinGetter,
          pinSetter,
          pinStart,
          pinChange,
          spacingStart,
          spacerState,
          markerStartSetter,
          markerEndSetter,
          cs,
          snap1,
          snap2,
          scrubTween,
          scrubSmooth,
          snapDurClamp,
          snapDelayedCall,
          prevProgress,
          prevScroll,
          prevAnimProgress,
          caMarkerSetter,
          customRevertReturn,
          _vars = vars,
          onUpdate = _vars.onUpdate,
          toggleClass = _vars.toggleClass,
          id = _vars.id,
          onToggle = _vars.onToggle,
          onRefresh = _vars.onRefresh,
          scrub = _vars.scrub,
          trigger = _vars.trigger,
          pin = _vars.pin,
          pinSpacing = _vars.pinSpacing,
          invalidateOnRefresh = _vars.invalidateOnRefresh,
          anticipatePin = _vars.anticipatePin,
          onScrubComplete = _vars.onScrubComplete,
          onSnapComplete = _vars.onSnapComplete,
          once = _vars.once,
          snap = _vars.snap,
          pinReparent = _vars.pinReparent,
          pinSpacer = _vars.pinSpacer,
          containerAnimation = _vars.containerAnimation,
          fastScrollEnd = _vars.fastScrollEnd,
          preventOverlaps = _vars.preventOverlaps,
          direction =
            vars.horizontal ||
            (vars.containerAnimation && false !== vars.horizontal)
              ? _horizontal
              : _vertical,
          isToggle = !scrub && 0 !== scrub,
          scroller = _getTarget(vars.scroller || ScrollTrigger_win),
          scrollerCache = ScrollTrigger_gsap.core.getCache(scroller),
          isViewport = ScrollTrigger_isViewport(scroller),
          useFixedPosition =
            'fixed' ===
            ('pinType' in vars
              ? vars.pinType
              : _getProxyProp(scroller, 'pinType') || (isViewport && 'fixed')),
          callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack,
          ],
          toggleActions = isToggle && vars.toggleActions.split(' '),
          markers =
            'markers' in vars ? vars.markers : ScrollTrigger_defaults.markers,
          borderWidth = isViewport
            ? 0
            : parseFloat(
                _getComputedStyle(scroller)['border' + direction.p2 + _Width]
              ) || 0,
          self = this,
          onRefreshInit =
            vars.onRefreshInit &&
            function () {
              return vars.onRefreshInit(self);
            },
          getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
          getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
          lastSnap = 0,
          lastRefresh = 0,
          scrollFunc = _getScrollFunc(scroller, direction);
        self.media = _creatingMedia;
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation
          ? containerAnimation.time.bind(containerAnimation)
          : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ('refreshPriority' in vars) {
          _sort = 1;
          -9999 === vars.refreshPriority && (_primary = self);
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
          top: _getTweenCreator(scroller, _vertical),
          left: _getTweenCreator(scroller, _horizontal),
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function (value) {
          scrubSmooth = ScrollTrigger_isNumber(value) && value;
          if (!scrubSmooth) {
            scrubTween && scrubTween.progress(1).kill();
            scrubTween = 0;
          } else
            scrubTween
              ? scrubTween.duration(value)
              : (scrubTween = ScrollTrigger_gsap.to(animation, {
                  ease: 'expo',
                  totalProgress: '+=0.001',
                  duration: scrubSmooth,
                  paused: true,
                  onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self);
                  },
                }));
        };
        if (animation) {
          animation.vars.lazy = false;
          animation._initted ||
            (false !== animation.vars.immediateRender &&
              false !== vars.immediateRender &&
              animation.render(0, true, true));
          self.animation = animation.pause();
          animation.scrollTrigger = self;
          self.scrubDuration(scrub);
          snap1 = 0;
          id || (id = animation.vars.id);
        }
        _triggers.push(self);
        if (snap) {
          if (!ScrollTrigger_isObject(snap) || snap.push)
            snap = {
              snapTo: snap,
            };
          'scrollBehavior' in ScrollTrigger_body.style &&
            ScrollTrigger_gsap.set(
              isViewport ? [ScrollTrigger_body, ScrollTrigger_docEl] : scroller,
              {
                scrollBehavior: 'auto',
              }
            );
          snapFunc = ScrollTrigger_isFunction(snap.snapTo)
            ? snap.snapTo
            : 'labels' === snap.snapTo
            ? _getClosestLabel(animation)
            : 'labelsDirectional' === snap.snapTo
            ? _getLabelAtDirection(animation)
            : false !== snap.directional
            ? function (value, st) {
                return _snapDirectional(snap.snapTo)(
                  value,
                  ScrollTrigger_getTime() - lastRefresh < 500 ? 0 : st.direction
                );
              }
            : ScrollTrigger_gsap.utils.snap(snap.snapTo);
          snapDurClamp = snap.duration || {
            min: 0.1,
            max: 2,
          };
          snapDurClamp = ScrollTrigger_isObject(snapDurClamp)
            ? ScrollTrigger_clamp(snapDurClamp.min, snapDurClamp.max)
            : ScrollTrigger_clamp(snapDurClamp, snapDurClamp);
          snapDelayedCall = ScrollTrigger_gsap.delayedCall(
            snap.delay || scrubSmooth / 2 || 0.1,
            function () {
              var scroll = scrollFunc(),
                refreshedRecently = ScrollTrigger_getTime() - lastRefresh < 500,
                tween = tweenTo.tween;
              if (
                (refreshedRecently || Math.abs(self.getVelocity()) < 10) &&
                !tween &&
                !_pointerIsDown &&
                lastSnap !== scroll
              ) {
                var progress = (scroll - start) / change,
                  totalProgress =
                    animation && !isToggle
                      ? animation.totalProgress()
                      : progress,
                  velocity = refreshedRecently
                    ? 0
                    : ((totalProgress - snap2) /
                        (ScrollTrigger_getTime() - _time2)) *
                        1e3 || 0,
                  change1 = ScrollTrigger_gsap.utils.clamp(
                    -progress,
                    1 - progress,
                    (_abs(velocity / 2) * velocity) / 0.185
                  ),
                  naturalEnd =
                    progress + (false === snap.inertia ? 0 : change1),
                  endValue = ScrollTrigger_clamp(
                    0,
                    1,
                    snapFunc(naturalEnd, self)
                  ),
                  endScroll = Math.round(start + endValue * change),
                  _snap = snap,
                  onStart = _snap.onStart,
                  _onInterrupt = _snap.onInterrupt,
                  _onComplete = _snap.onComplete;
                if (scroll <= end && scroll >= start && endScroll !== scroll) {
                  if (
                    tween &&
                    !tween._initted &&
                    tween.data <= _abs(endScroll - scroll)
                  )
                    return;
                  if (false === snap.inertia) change1 = endValue - progress;
                  tweenTo(
                    endScroll,
                    {
                      duration: snapDurClamp(
                        _abs(
                          (0.185 *
                            Math.max(
                              _abs(naturalEnd - totalProgress),
                              _abs(endValue - totalProgress)
                            )) /
                            velocity /
                            0.05 || 0
                        )
                      ),
                      ease: snap.ease || 'power3',
                      data: _abs(endScroll - scroll),
                      onInterrupt: function onInterrupt() {
                        return (
                          snapDelayedCall.restart(true) &&
                          _onInterrupt &&
                          _onInterrupt(self)
                        );
                      },
                      onComplete: function onComplete() {
                        self.update();
                        lastSnap = scrollFunc();
                        snap1 = snap2 =
                          animation && !isToggle
                            ? animation.totalProgress()
                            : self.progress;
                        onSnapComplete && onSnapComplete(self);
                        _onComplete && _onComplete(self);
                      },
                    },
                    scroll,
                    change1 * change,
                    endScroll - scroll - change1 * change
                  );
                  onStart && onStart(self, tweenTo.tween);
                }
              } else if (self.isActive && lastSnap !== scroll)
                snapDelayedCall.restart(true);
            }
          ).pause();
        }
        id && (_ids[id] = self);
        trigger = self.trigger = _getTarget(trigger || pin);
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = true === pin ? trigger : _getTarget(pin);
        ScrollTrigger_isString(toggleClass) &&
          (toggleClass = {
            targets: trigger,
            className: toggleClass,
          });
        if (pin) {
          false === pinSpacing ||
            pinSpacing === _margin ||
            (pinSpacing =
              !pinSpacing &&
              'flex' === _getComputedStyle(pin.parentNode).display
                ? false
                : _padding);
          self.pin = pin;
          false !== vars.force3D &&
            ScrollTrigger_gsap.set(pin, {
              force3D: true,
            });
          pinCache = ScrollTrigger_gsap.core.getCache(pin);
          if (!pinCache.spacer) {
            if (pinSpacer) {
              pinSpacer = _getTarget(pinSpacer);
              pinSpacer &&
                !pinSpacer.nodeType &&
                (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
              pinCache.spacerIsNative = !!pinSpacer;
              pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
            }
            pinCache.spacer = spacer =
              pinSpacer || ScrollTrigger_doc.createElement('div');
            spacer.classList.add('pin-spacer');
            id && spacer.classList.add('pin-spacer-' + id);
            pinCache.pinState = pinOriginalState = _getState(pin);
          } else pinOriginalState = pinCache.pinState;
          self.spacer = spacer = pinCache.spacer;
          cs = _getComputedStyle(pin);
          spacingStart = cs[pinSpacing + direction.os2];
          pinGetter = ScrollTrigger_gsap.getProperty(pin);
          pinSetter = ScrollTrigger_gsap.quickSetter(pin, direction.a, _px);
          _swapPinIn(pin, spacer, cs);
          pinState = _getState(pin);
        }
        if (markers) {
          markerVars = ScrollTrigger_isObject(markers)
            ? ScrollTrigger_setDefaults(markers, _markerDefaults)
            : _markerDefaults;
          markerStartTrigger = _createMarker(
            'scroller-start',
            id,
            scroller,
            direction,
            markerVars,
            0
          );
          markerEndTrigger = _createMarker(
            'scroller-end',
            id,
            scroller,
            direction,
            markerVars,
            0,
            markerStartTrigger
          );
          offset = markerStartTrigger['offset' + direction.op.d2];
          var content = _getTarget(
            _getProxyProp(scroller, 'content') || scroller
          );
          markerStart = this.markerStart = _createMarker(
            'start',
            id,
            content,
            direction,
            markerVars,
            offset,
            0,
            containerAnimation
          );
          markerEnd = this.markerEnd = _createMarker(
            'end',
            id,
            content,
            direction,
            markerVars,
            offset,
            0,
            containerAnimation
          );
          containerAnimation &&
            (caMarkerSetter = ScrollTrigger_gsap.quickSetter(
              [markerStart, markerEnd],
              direction.a,
              _px
            ));
          if (
            !useFixedPosition &&
            !(
              _proxies.length &&
              true === _getProxyProp(scroller, 'fixedMarkers')
            )
          ) {
            _makePositionable(isViewport ? ScrollTrigger_body : scroller);
            ScrollTrigger_gsap.set([markerStartTrigger, markerEndTrigger], {
              force3D: true,
            });
            markerStartSetter = ScrollTrigger_gsap.quickSetter(
              markerStartTrigger,
              direction.a,
              _px
            );
            markerEndSetter = ScrollTrigger_gsap.quickSetter(
              markerEndTrigger,
              direction.a,
              _px
            );
          }
        }
        if (containerAnimation) {
          var oldOnUpdate = containerAnimation.vars.onUpdate,
            oldParams = containerAnimation.vars.onUpdateParams;
          containerAnimation.eventCallback('onUpdate', function () {
            self.update(0, 0, 1);
            oldOnUpdate && oldOnUpdate.apply(oldParams || []);
          });
        }
        self.previous = function () {
          return _triggers[_triggers.indexOf(self) - 1];
        };
        self.next = function () {
          return _triggers[_triggers.indexOf(self) + 1];
        };
        self.revert = function (revert) {
          var r = false !== revert || !self.enabled,
            prevRefreshing = _refreshing;
          if (r !== self.isReverted) {
            if (r) {
              self.scroll.rec ||
                !_refreshing ||
                !_refreshingAll ||
                (self.scroll.rec = scrollFunc());
              prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
              prevProgress = self.progress;
              prevAnimProgress = animation && animation.progress();
            }
            markerStart &&
              [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger,
              ].forEach(function (m) {
                return (m.style.display = r ? 'none' : 'block');
              });
            r && (_refreshing = 1);
            self.update(r);
            _refreshing = prevRefreshing;
            pin &&
              (r
                ? _swapPinOut(pin, spacer, pinOriginalState)
                : (!pinReparent || !self.isActive) &&
                  _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
            self.isReverted = r;
          }
        };
        self.refresh = function (soft, force) {
          if ((_refreshing || !self.enabled) && !force) return;
          if (pin && soft && _lastScrollTime) {
            ScrollTrigger_addListener(ScrollTrigger, 'scrollEnd', _softRefresh);
            return;
          }
          !_refreshingAll && onRefreshInit && onRefreshInit(self);
          _refreshing = 1;
          lastRefresh = ScrollTrigger_getTime();
          if (tweenTo.tween) {
            tweenTo.tween.kill();
            tweenTo.tween = 0;
          }
          scrubTween && scrubTween.pause();
          invalidateOnRefresh &&
            animation &&
            animation.time(-0.01, true).invalidate();
          self.isReverted || self.revert();
          var cs,
            bounds,
            scroll,
            isVertical,
            override,
            curTrigger,
            curPin,
            oppositeScroll,
            initted,
            revertedPins,
            size = getScrollerSize(),
            scrollerBounds = getScrollerOffsets(),
            max = containerAnimation
              ? containerAnimation.duration()
              : _maxScroll(scroller, direction),
            offset = 0,
            otherPinOffset = 0,
            parsedEnd = vars.end,
            parsedEndTrigger = vars.endTrigger || trigger,
            parsedStart =
              vars.start ||
              (0 === vars.start || !trigger ? 0 : pin ? '0 0' : '0 100%'),
            pinnedContainer = (self.pinnedContainer =
              vars.pinnedContainer && _getTarget(vars.pinnedContainer)),
            triggerIndex =
              (trigger && Math.max(0, _triggers.indexOf(self))) || 0,
            i = triggerIndex;
          while (i--) {
            curTrigger = _triggers[i];
            curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
            curPin = curTrigger.pin;
            if (
              curPin &&
              (curPin === trigger || curPin === pin) &&
              !curTrigger.isReverted
            ) {
              revertedPins || (revertedPins = []);
              revertedPins.unshift(curTrigger);
              curTrigger.revert();
            }
            if (curTrigger !== _triggers[i]) {
              triggerIndex--;
              i--;
            }
          }
          ScrollTrigger_isFunction(parsedStart) &&
            (parsedStart = parsedStart(self));
          start =
            ScrollTrigger_parsePosition(
              parsedStart,
              trigger,
              size,
              direction,
              scrollFunc(),
              markerStart,
              markerStartTrigger,
              self,
              scrollerBounds,
              borderWidth,
              useFixedPosition,
              max,
              containerAnimation
            ) || (pin ? -0.001 : 0);
          ScrollTrigger_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
          if (ScrollTrigger_isString(parsedEnd) && !parsedEnd.indexOf('+='))
            if (~parsedEnd.indexOf(' '))
              parsedEnd =
                (ScrollTrigger_isString(parsedStart)
                  ? parsedStart.split(' ')[0]
                  : '') + parsedEnd;
            else {
              offset = _offsetToPx(parsedEnd.substr(2), size);
              parsedEnd = ScrollTrigger_isString(parsedStart)
                ? parsedStart
                : start + offset;
              parsedEndTrigger = trigger;
            }
          end =
            Math.max(
              start,
              ScrollTrigger_parsePosition(
                parsedEnd || (parsedEndTrigger ? '100% 0' : max),
                parsedEndTrigger,
                size,
                direction,
                scrollFunc() + offset,
                markerEnd,
                markerEndTrigger,
                self,
                scrollerBounds,
                borderWidth,
                useFixedPosition,
                max,
                containerAnimation
              )
            ) || -0.001;
          change = end - start || ((start -= 0.01) && 0.001);
          offset = 0;
          i = triggerIndex;
          while (i--) {
            curTrigger = _triggers[i];
            curPin = curTrigger.pin;
            if (
              curPin &&
              curTrigger.start - curTrigger._pinPush < start &&
              !containerAnimation &&
              curTrigger.end > 0
            ) {
              cs = curTrigger.end - curTrigger.start;
              if (
                (curPin === trigger || curPin === pinnedContainer) &&
                !ScrollTrigger_isNumber(parsedStart)
              )
                offset += cs * (1 - curTrigger.progress);
              curPin === pin && (otherPinOffset += cs);
            }
          }
          start += offset;
          end += offset;
          self._pinPush = otherPinOffset;
          if (markerStart && offset) {
            cs = {};
            cs[direction.a] = '+=' + offset;
            pinnedContainer && (cs[direction.p] = '-=' + scrollFunc());
            ScrollTrigger_gsap.set([markerStart, markerEnd], cs);
          }
          if (pin) {
            cs = _getComputedStyle(pin);
            isVertical = direction === _vertical;
            scroll = scrollFunc();
            pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
            !max &&
              end > 1 &&
              ((isViewport ? ScrollTrigger_body : scroller).style[
                'overflow-' + direction.a
              ] = 'scroll');
            _swapPinIn(pin, spacer, cs);
            pinState = _getState(pin);
            bounds = _getBounds(pin, true);
            oppositeScroll =
              useFixedPosition &&
              _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
            if (pinSpacing) {
              spacerState = [
                pinSpacing + direction.os2,
                change + otherPinOffset + _px,
              ];
              spacerState.t = spacer;
              i =
                pinSpacing === _padding
                  ? _getSize(pin, direction) + change + otherPinOffset
                  : 0;
              i && spacerState.push(direction.d, i + _px);
              _setState(spacerState);
              useFixedPosition && scrollFunc(prevScroll);
            }
            if (useFixedPosition) {
              override = {
                top:
                  bounds.top +
                  (isVertical ? scroll - start : oppositeScroll) +
                  _px,
                left:
                  bounds.left +
                  (isVertical ? oppositeScroll : scroll - start) +
                  _px,
                boxSizing: 'border-box',
                position: 'fixed',
              };
              override[_width] = override['max' + _Width] =
                Math.ceil(bounds.width) + _px;
              override[_height] = override['max' + _Height] =
                Math.ceil(bounds.height) + _px;
              override[_margin] =
                override[_margin + _Top] =
                override[_margin + _Right] =
                override[_margin + _Bottom] =
                override[_margin + _Left] =
                  '0';
              override[_padding] = cs[_padding];
              override[_padding + _Top] = cs[_padding + _Top];
              override[_padding + _Right] = cs[_padding + _Right];
              override[_padding + _Bottom] = cs[_padding + _Bottom];
              override[_padding + _Left] = cs[_padding + _Left];
              pinActiveState = _copyState(
                pinOriginalState,
                override,
                pinReparent
              );
            }
            if (animation) {
              initted = animation._initted;
              ScrollTrigger_suppressOverwrites(1);
              animation.render(animation.duration(), true, true);
              pinChange =
                pinGetter(direction.a) - pinStart + change + otherPinOffset;
              change !== pinChange &&
                useFixedPosition &&
                pinActiveState.splice(pinActiveState.length - 2, 2);
              animation.render(0, true, true);
              initted || animation.invalidate();
              ScrollTrigger_suppressOverwrites(0);
            } else pinChange = change;
          } else if (trigger && scrollFunc() && !containerAnimation) {
            bounds = trigger.parentNode;
            while (bounds && bounds !== ScrollTrigger_body) {
              if (bounds._pinOffset) {
                start -= bounds._pinOffset;
                end -= bounds._pinOffset;
              }
              bounds = bounds.parentNode;
            }
          }
          revertedPins &&
            revertedPins.forEach(function (t) {
              return t.revert(false);
            });
          self.start = start;
          self.end = end;
          scroll1 = scroll2 = scrollFunc();
          if (!containerAnimation) {
            scroll1 < prevScroll && scrollFunc(prevScroll);
            self.scroll.rec = 0;
          }
          self.revert(false);
          if (snapDelayedCall) {
            lastSnap = -1;
            self.isActive && scrollFunc(start + change * prevProgress);
            snapDelayedCall.restart(true);
          }
          _refreshing = 0;
          animation &&
            isToggle &&
            (animation._initted || prevAnimProgress) &&
            animation.progress() !== prevAnimProgress &&
            animation
              .progress(prevAnimProgress, true)
              .render(animation.time(), true, true);
          if (prevProgress !== self.progress || containerAnimation) {
            animation &&
              !isToggle &&
              animation.totalProgress(prevProgress, true);
            self.progress = prevProgress;
            self.update(0, 0, 1);
          }
          pin &&
            pinSpacing &&
            (spacer._pinOffset = Math.round(self.progress * pinChange));
          onRefresh && onRefresh(self);
        };
        self.getVelocity = function () {
          return (
            ((scrollFunc() - scroll2) / (ScrollTrigger_getTime() - _time2)) *
              1e3 || 0
          );
        };
        self.endAnimation = function () {
          _endAnimation(self.callbackAnimation);
          if (animation)
            scrubTween
              ? scrubTween.progress(1)
              : !animation.paused()
              ? _endAnimation(animation, animation.reversed())
              : isToggle || _endAnimation(animation, self.direction < 0, 1);
        };
        self.labelToScroll = function (label) {
          return (
            (animation &&
              animation.labels &&
              (start || self.refresh() || start) +
                (animation.labels[label] / animation.duration()) * change) ||
            0
          );
        };
        self.getTrailing = function (name) {
          var i = _triggers.indexOf(self),
            a =
              self.direction > 0
                ? _triggers.slice(0, i).reverse()
                : _triggers.slice(i + 1);
          return (
            ScrollTrigger_isString(name)
              ? a.filter(function (t) {
                  return t.vars.preventOverlaps === name;
                })
              : a
          ).filter(function (t) {
            return self.direction > 0 ? t.end <= start : t.start >= end;
          });
        };
        self.update = function (reset, recordVelocity, forceFake) {
          if (containerAnimation && !forceFake && !reset) return;
          var isActive,
            wasActive,
            toggleState,
            action,
            stateChanged,
            toggled,
            isAtMax,
            isTakingAction,
            scroll = self.scroll(),
            p = reset ? 0 : (scroll - start) / change,
            clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
            prevProgress = self.progress;
          if (recordVelocity) {
            scroll2 = scroll1;
            scroll1 = containerAnimation ? scrollFunc() : scroll;
            if (snap) {
              snap2 = snap1;
              snap1 =
                animation && !isToggle ? animation.totalProgress() : clipped;
            }
          }
          anticipatePin &&
            !clipped &&
            pin &&
            !_refreshing &&
            !ScrollTrigger_startup &&
            _lastScrollTime &&
            start <
              scroll +
                ((scroll - scroll2) / (ScrollTrigger_getTime() - _time2)) *
                  anticipatePin &&
            (clipped = 1e-4);
          if (clipped !== prevProgress && self.enabled) {
            isActive = self.isActive = !!clipped && clipped < 1;
            wasActive = !!prevProgress && prevProgress < 1;
            toggled = isActive !== wasActive;
            stateChanged = toggled || !!clipped !== !!prevProgress;
            self.direction = clipped > prevProgress ? 1 : -1;
            self.progress = clipped;
            if (stateChanged && !_refreshing) {
              toggleState =
                clipped && !prevProgress
                  ? 0
                  : 1 === clipped
                  ? 1
                  : 1 === prevProgress
                  ? 2
                  : 3;
              if (isToggle) {
                action =
                  (!toggled &&
                    'none' !== toggleActions[toggleState + 1] &&
                    toggleActions[toggleState + 1]) ||
                  toggleActions[toggleState];
                isTakingAction =
                  animation &&
                  ('complete' === action ||
                    'reset' === action ||
                    action in animation);
              }
            }
            preventOverlaps &&
              (toggled || isTakingAction) &&
              (isTakingAction || scrub || !animation) &&
              (ScrollTrigger_isFunction(preventOverlaps)
                ? preventOverlaps(self)
                : self.getTrailing(preventOverlaps).forEach(function (t) {
                    return t.endAnimation();
                  }));
            if (!isToggle)
              if (scrubTween && !_refreshing && !ScrollTrigger_startup) {
                (containerAnimation || (_primary && _primary !== self)) &&
                  scrubTween.render(scrubTween._dp._time - scrubTween._start);
                if (scrubTween.resetTo)
                  scrubTween.resetTo(
                    'totalProgress',
                    clipped,
                    animation._tTime / animation._tDur
                  );
                else {
                  scrubTween.vars.totalProgress = clipped;
                  scrubTween.invalidate().restart();
                }
              } else if (animation)
                animation.totalProgress(clipped, !!_refreshing);
            if (pin) {
              reset &&
                pinSpacing &&
                (spacer.style[pinSpacing + direction.os2] = spacingStart);
              if (!useFixedPosition)
                pinSetter(ScrollTrigger_round(pinStart + pinChange * clipped));
              else if (stateChanged) {
                isAtMax =
                  !reset &&
                  clipped > prevProgress &&
                  end + 1 > scroll &&
                  scroll + 1 >= _maxScroll(scroller, direction);
                if (pinReparent)
                  if (!reset && (isActive || isAtMax)) {
                    var bounds = _getBounds(pin, true),
                      _offset = scroll - start;
                    _reparent(
                      pin,
                      ScrollTrigger_body,
                      bounds.top +
                        (direction === _vertical ? _offset : 0) +
                        _px,
                      bounds.left +
                        (direction === _vertical ? 0 : _offset) +
                        _px
                    );
                  } else _reparent(pin, spacer);
                _setState(isActive || isAtMax ? pinActiveState : pinState);
                (pinChange !== change && clipped < 1 && isActive) ||
                  pinSetter(
                    pinStart + (1 === clipped && !isAtMax ? pinChange : 0)
                  );
              }
            }
            snap &&
              !tweenTo.tween &&
              !_refreshing &&
              !ScrollTrigger_startup &&
              snapDelayedCall.restart(true);
            toggleClass &&
              (toggled ||
                (once && clipped && (clipped < 1 || !_limitCallbacks))) &&
              _toArray(toggleClass.targets).forEach(function (el) {
                return el.classList[isActive || once ? 'add' : 'remove'](
                  toggleClass.className
                );
              });
            onUpdate && !isToggle && !reset && onUpdate(self);
            if (stateChanged && !_refreshing) {
              if (isToggle) {
                if (isTakingAction)
                  if ('complete' === action) animation.pause().totalProgress(1);
                  else if ('reset' === action) animation.restart(true).pause();
                  else if ('restart' === action) animation.restart(true);
                  else animation[action]();
                onUpdate && onUpdate(self);
              }
              if (toggled || !_limitCallbacks) {
                onToggle && toggled && ScrollTrigger_callback(self, onToggle);
                callbacks[toggleState] &&
                  ScrollTrigger_callback(self, callbacks[toggleState]);
                once &&
                  (1 === clipped
                    ? self.kill(false, 1)
                    : (callbacks[toggleState] = 0));
                if (!toggled) {
                  toggleState = 1 === clipped ? 1 : 3;
                  callbacks[toggleState] &&
                    ScrollTrigger_callback(self, callbacks[toggleState]);
                }
              }
              if (
                fastScrollEnd &&
                !isActive &&
                Math.abs(self.getVelocity()) >
                  (ScrollTrigger_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)
              ) {
                _endAnimation(self.callbackAnimation);
                scrubTween
                  ? scrubTween.progress(1)
                  : _endAnimation(animation, !clipped, 1);
              }
            } else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
          }
          if (markerEndSetter) {
            var n = containerAnimation
              ? (scroll / containerAnimation.duration()) *
                (containerAnimation._caScrollDist || 0)
              : scroll;
            markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
            markerEndSetter(n);
          }
          caMarkerSetter &&
            caMarkerSetter(
              (-scroll / containerAnimation.duration()) *
                (containerAnimation._caScrollDist || 0)
            );
        };
        self.enable = function (reset, refresh) {
          if (!self.enabled) {
            self.enabled = true;
            ScrollTrigger_addListener(scroller, 'resize', _onResize);
            ScrollTrigger_addListener(
              isViewport ? ScrollTrigger_doc : scroller,
              'scroll',
              ScrollTrigger_onScroll
            );
            onRefreshInit &&
              ScrollTrigger_addListener(
                ScrollTrigger,
                'refreshInit',
                onRefreshInit
              );
            if (false !== reset) {
              self.progress = prevProgress = 0;
              scroll1 = scroll2 = lastSnap = scrollFunc();
            }
            false !== refresh && self.refresh();
          }
        };
        self.getTween = function (snap) {
          return snap && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function (newStart, newEnd) {
          if (pin) {
            pinStart += newStart - start;
            pinChange += newEnd - newStart - change;
          }
          self.start = start = newStart;
          self.end = end = newEnd;
          change = newEnd - newStart;
          self.update();
        };
        self.disable = function (reset, allowAnimation) {
          if (self.enabled) {
            false !== reset && self.revert();
            self.enabled = self.isActive = false;
            allowAnimation || (scrubTween && scrubTween.pause());
            prevScroll = 0;
            pinCache && (pinCache.uncache = 1);
            onRefreshInit &&
              ScrollTrigger_removeListener(
                ScrollTrigger,
                'refreshInit',
                onRefreshInit
              );
            if (snapDelayedCall) {
              snapDelayedCall.pause();
              tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
            }
            if (!isViewport) {
              var i = _triggers.length;
              while (i--)
                if (_triggers[i].scroller === scroller && _triggers[i] !== self)
                  return;
              ScrollTrigger_removeListener(scroller, 'resize', _onResize);
              ScrollTrigger_removeListener(
                scroller,
                'scroll',
                ScrollTrigger_onScroll
              );
            }
          }
        };
        self.kill = function (revert, allowAnimation) {
          self.disable(revert, allowAnimation);
          scrubTween && !allowAnimation && scrubTween.kill();
          id && delete _ids[id];
          var i = _triggers.indexOf(self);
          i >= 0 && _triggers.splice(i, 1);
          i === _i && _direction > 0 && _i--;
          i = 0;
          _triggers.forEach(function (t) {
            return t.scroller === self.scroller && (i = 1);
          });
          i || (self.scroll.rec = 0);
          if (animation) {
            animation.scrollTrigger = null;
            revert && animation.render(-1);
            allowAnimation || animation.kill();
          }
          markerStart &&
            [
              markerStart,
              markerEnd,
              markerStartTrigger,
              markerEndTrigger,
            ].forEach(function (m) {
              return m.parentNode && m.parentNode.removeChild(m);
            });
          _primary === self && (_primary = 0);
          if (pin) {
            pinCache && (pinCache.uncache = 1);
            i = 0;
            _triggers.forEach(function (t) {
              return t.pin === pin && i++;
            });
            i || (pinCache.spacer = 0);
          }
          vars.onKill && vars.onKill(self);
        };
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        !animation || !animation.add || change
          ? self.refresh()
          : ScrollTrigger_gsap.delayedCall(0.01, function () {
              return start || end || self.refresh();
            }) &&
            (change = 0.01) &&
            (start = end = 0);
      };
      ScrollTrigger.register = function register(core) {
        if (!ScrollTrigger_coreInitted) {
          ScrollTrigger_gsap = core || ScrollTrigger_getGSAP();
          ScrollTrigger_windowExists() &&
            window.document &&
            ScrollTrigger.enable();
          ScrollTrigger_coreInitted = _enabled;
        }
        return ScrollTrigger_coreInitted;
      };
      ScrollTrigger.defaults = function defaults(config) {
        if (config) for (var p in config) ScrollTrigger_defaults[p] = config[p];
        return ScrollTrigger_defaults;
      };
      ScrollTrigger.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function (trigger) {
          return trigger[kill ? 'kill' : 'disable'](reset);
        });
        ScrollTrigger_removeListener(
          ScrollTrigger_win,
          'wheel',
          ScrollTrigger_onScroll
        );
        ScrollTrigger_removeListener(
          ScrollTrigger_doc,
          'scroll',
          ScrollTrigger_onScroll
        );
        clearInterval(_syncInterval);
        ScrollTrigger_removeListener(
          ScrollTrigger_doc,
          'touchcancel',
          ScrollTrigger_passThrough
        );
        ScrollTrigger_removeListener(
          ScrollTrigger_body,
          'touchstart',
          ScrollTrigger_passThrough
        );
        _multiListener(
          ScrollTrigger_removeListener,
          ScrollTrigger_doc,
          'pointerdown,touchstart,mousedown',
          _pointerDownHandler
        );
        _multiListener(
          ScrollTrigger_removeListener,
          ScrollTrigger_doc,
          'pointerup,touchend,mouseup',
          _pointerUpHandler
        );
        _resizeDelay.kill();
        _iterateAutoRefresh(ScrollTrigger_removeListener);
        for (var i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(
            ScrollTrigger_removeListener,
            _scrollers[i],
            _scrollers[i + 1]
          );
          _wheelListener(
            ScrollTrigger_removeListener,
            _scrollers[i],
            _scrollers[i + 2]
          );
        }
      };
      ScrollTrigger.enable = function enable() {
        ScrollTrigger_win = window;
        ScrollTrigger_doc = document;
        ScrollTrigger_docEl = ScrollTrigger_doc.documentElement;
        ScrollTrigger_body = ScrollTrigger_doc.body;
        if (ScrollTrigger_gsap) {
          _toArray = ScrollTrigger_gsap.utils.toArray;
          ScrollTrigger_clamp = ScrollTrigger_gsap.utils.clamp;
          ScrollTrigger_suppressOverwrites =
            ScrollTrigger_gsap.core.suppressOverwrites ||
            ScrollTrigger_passThrough;
          ScrollTrigger_gsap.core.globals('ScrollTrigger', ScrollTrigger);
          if (ScrollTrigger_body) {
            _enabled = 1;
            Observer.register(ScrollTrigger_gsap);
            ScrollTrigger.isTouch = Observer.isTouch;
            _fixIOSBug =
              Observer.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
            ScrollTrigger_addListener(
              ScrollTrigger_win,
              'wheel',
              ScrollTrigger_onScroll
            );
            ScrollTrigger_root = [
              ScrollTrigger_win,
              ScrollTrigger_doc,
              ScrollTrigger_docEl,
              ScrollTrigger_body,
            ];
            ScrollTrigger.matchMedia({
              '(orientation: portrait)': function orientationPortrait() {
                _setBaseDimensions();
                return _setBaseDimensions;
              },
            });
            ScrollTrigger_addListener(
              ScrollTrigger_doc,
              'scroll',
              ScrollTrigger_onScroll
            );
            var bounds,
              i,
              bodyStyle = ScrollTrigger_body.style,
              border = bodyStyle.borderTopStyle;
            bodyStyle.borderTopStyle = 'solid';
            bounds = _getBounds(ScrollTrigger_body);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border
              ? (bodyStyle.borderTopStyle = border)
              : bodyStyle.removeProperty('border-top-style');
            _syncInterval = setInterval(_sync, 250);
            ScrollTrigger_gsap.delayedCall(0.5, function () {
              return (ScrollTrigger_startup = 0);
            });
            ScrollTrigger_addListener(
              ScrollTrigger_doc,
              'touchcancel',
              ScrollTrigger_passThrough
            );
            ScrollTrigger_addListener(
              ScrollTrigger_body,
              'touchstart',
              ScrollTrigger_passThrough
            );
            _multiListener(
              ScrollTrigger_addListener,
              ScrollTrigger_doc,
              'pointerdown,touchstart,mousedown',
              _pointerDownHandler
            );
            _multiListener(
              ScrollTrigger_addListener,
              ScrollTrigger_doc,
              'pointerup,touchend,mouseup',
              _pointerUpHandler
            );
            ScrollTrigger_transformProp =
              ScrollTrigger_gsap.utils.checkPrefix('transform');
            _stateProps.push(ScrollTrigger_transformProp);
            ScrollTrigger_coreInitted = ScrollTrigger_getTime();
            _resizeDelay = ScrollTrigger_gsap.delayedCall(
              0.2,
              _refreshAll
            ).pause();
            _autoRefresh = [
              ScrollTrigger_doc,
              'visibilitychange',
              function () {
                var w = ScrollTrigger_win.innerWidth,
                  h = ScrollTrigger_win.innerHeight;
                if (ScrollTrigger_doc.hidden) {
                  _prevWidth = w;
                  _prevHeight = h;
                } else if (_prevWidth !== w || _prevHeight !== h) _onResize();
              },
              ScrollTrigger_doc,
              'DOMContentLoaded',
              _refreshAll,
              ScrollTrigger_win,
              'load',
              _refreshAll,
              ScrollTrigger_win,
              'resize',
              _onResize,
            ];
            _iterateAutoRefresh(ScrollTrigger_addListener);
            _triggers.forEach(function (trigger) {
              return trigger.enable(0, 1);
            });
            for (i = 0; i < _scrollers.length; i += 3) {
              _wheelListener(
                ScrollTrigger_removeListener,
                _scrollers[i],
                _scrollers[i + 1]
              );
              _wheelListener(
                ScrollTrigger_removeListener,
                _scrollers[i],
                _scrollers[i + 2]
              );
            }
          }
        }
      };
      ScrollTrigger.config = function config(vars) {
        'limitCallbacks' in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        (ms && clearInterval(_syncInterval)) ||
          ((_syncInterval = ms) && setInterval(_sync, ms));
        'ignoreMobileResize' in vars &&
          (_ignoreMobileResize =
            1 === ScrollTrigger.isTouch && vars.ignoreMobileResize);
        if ('autoRefreshEvents' in vars) {
          _iterateAutoRefresh(ScrollTrigger_removeListener) ||
            _iterateAutoRefresh(
              ScrollTrigger_addListener,
              vars.autoRefreshEvents || 'none'
            );
          _ignoreResize =
            -1 === (vars.autoRefreshEvents + '').indexOf('resize');
        }
      };
      ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = _getTarget(target),
          i = _scrollers.indexOf(t),
          isViewport = ScrollTrigger_isViewport(t);
        if (~i) _scrollers.splice(i, isViewport ? 6 : 2);
        if (vars)
          isViewport
            ? _proxies.unshift(
                ScrollTrigger_win,
                vars,
                ScrollTrigger_body,
                vars,
                ScrollTrigger_docEl,
                vars
              )
            : _proxies.unshift(t, vars);
      };
      ScrollTrigger.matchMedia = function matchMedia(vars) {
        var mq, p, i, func, result;
        for (p in vars) {
          i = _media.indexOf(p);
          func = vars[p];
          _creatingMedia = p;
          if ('all' === p) func();
          else {
            mq = ScrollTrigger_win.matchMedia(p);
            if (mq) {
              mq.matches && (result = func());
              if (~i) {
                _media[i + 1] = _combineFunc(_media[i + 1], func);
                _media[i + 2] = _combineFunc(_media[i + 2], result);
              } else {
                i = _media.length;
                _media.push(p, func, result);
                mq.addListener
                  ? mq.addListener(_onMediaChange)
                  : mq.addEventListener('change', _onMediaChange);
              }
              _media[i + 3] = mq.matches;
            }
          }
          _creatingMedia = 0;
        }
        return _media;
      };
      ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        query || (_media.length = 0);
        query = _media.indexOf(query);
        query >= 0 && _media.splice(query, 4);
      };
      ScrollTrigger.isInViewport = function isInViewport(
        element,
        ratio,
        horizontal
      ) {
        var bounds = (
            ScrollTrigger_isString(element) ? _getTarget(element) : element
          ).getBoundingClientRect(),
          offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal
          ? bounds.right - offset > 0 &&
              bounds.left + offset < ScrollTrigger_win.innerWidth
          : bounds.bottom - offset > 0 &&
              bounds.top + offset < ScrollTrigger_win.innerHeight;
      };
      ScrollTrigger.positionInViewport = function positionInViewport(
        element,
        referencePoint,
        horizontal
      ) {
        ScrollTrigger_isString(element) && (element = _getTarget(element));
        var bounds = element.getBoundingClientRect(),
          size = bounds[horizontal ? _width : _height],
          offset =
            null == referencePoint
              ? size / 2
              : referencePoint in _keywords
              ? _keywords[referencePoint] * size
              : ~referencePoint.indexOf('%')
              ? (parseFloat(referencePoint) * size) / 100
              : parseFloat(referencePoint) || 0;
        return horizontal
          ? (bounds.left + offset) / ScrollTrigger_win.innerWidth
          : (bounds.top + offset) / ScrollTrigger_win.innerHeight;
      };
      return ScrollTrigger;
    })();
    ScrollTrigger_ScrollTrigger.version = '3.10.4';
    ScrollTrigger_ScrollTrigger.saveStyles = function (targets) {
      return targets
        ? _toArray(targets).forEach(function (target) {
            if (target && target.style) {
              var i = _savedStyles.indexOf(target);
              i >= 0 && _savedStyles.splice(i, 5);
              _savedStyles.push(
                target,
                target.style.cssText,
                target.getBBox && target.getAttribute('transform'),
                ScrollTrigger_gsap.core.getCache(target),
                _creatingMedia
              );
            }
          })
        : _savedStyles;
    };
    ScrollTrigger_ScrollTrigger.revert = function (soft, media) {
      return _revertAll(!soft, media);
    };
    ScrollTrigger_ScrollTrigger.create = function (vars, animation) {
      return new ScrollTrigger_ScrollTrigger(vars, animation);
    };
    ScrollTrigger_ScrollTrigger.refresh = function (safe) {
      return safe
        ? _onResize()
        : (ScrollTrigger_coreInitted ||
            ScrollTrigger_ScrollTrigger.register()) &&
            _refreshAll(true);
    };
    ScrollTrigger_ScrollTrigger.update = _updateAll;
    ScrollTrigger_ScrollTrigger.clearScrollMemory = _clearScrollMemory;
    ScrollTrigger_ScrollTrigger.maxScroll = function (element, horizontal) {
      return _maxScroll(element, horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger_ScrollTrigger.getScrollFunc = function (element, horizontal) {
      return _getScrollFunc(
        _getTarget(element),
        horizontal ? _horizontal : _vertical
      );
    };
    ScrollTrigger_ScrollTrigger.getById = function (id) {
      return _ids[id];
    };
    ScrollTrigger_ScrollTrigger.getAll = function () {
      return _triggers.filter(function (t) {
        return 'ScrollSmoother' !== t.vars.id;
      });
    };
    ScrollTrigger_ScrollTrigger.isScrolling = function () {
      return !!_lastScrollTime;
    };
    ScrollTrigger_ScrollTrigger.snapDirectional = _snapDirectional;
    ScrollTrigger_ScrollTrigger.addEventListener = function (type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    };
    ScrollTrigger_ScrollTrigger.removeEventListener = function (
      type,
      callback
    ) {
      var a = _listeners[type],
        i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    };
    ScrollTrigger_ScrollTrigger.batch = function (targets, vars) {
      var p,
        result = [],
        varsCopy = {},
        interval = vars.interval || 0.016,
        batchMax = vars.batchMax || 1e9,
        proxyCallback = function proxyCallback(type, callback) {
          var elements = [],
            triggers = [],
            delay = ScrollTrigger_gsap.delayedCall(interval, function () {
              callback(elements, triggers);
              elements = [];
              triggers = [];
            }).pause();
          return function (self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
          };
        };
      for (p in vars)
        varsCopy[p] =
          'on' === p.substr(0, 2) &&
          ScrollTrigger_isFunction(vars[p]) &&
          'onRefreshInit' !== p
            ? proxyCallback(p, vars[p])
            : vars[p];
      if (ScrollTrigger_isFunction(batchMax)) {
        batchMax = batchMax();
        ScrollTrigger_addListener(
          ScrollTrigger_ScrollTrigger,
          'refresh',
          function () {
            return (batchMax = vars.batchMax());
          }
        );
      }
      _toArray(targets).forEach(function (target) {
        var config = {};
        for (p in varsCopy) config[p] = varsCopy[p];
        config.trigger = target;
        result.push(ScrollTrigger_ScrollTrigger.create(config));
      });
      return result;
    };
    var _inputIsFocused,
      _clampScrollAndGetDurationMultiplier =
        function _clampScrollAndGetDurationMultiplier(
          scrollFunc,
          current,
          end,
          max
        ) {
          current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
          return end > max
            ? (max - current) / (end - current)
            : end < 0
            ? current / (current - end)
            : 1;
        },
      _allowNativePanning = function _allowNativePanning(target, direction) {
        if (true === direction) target.style.removeProperty('touch-action');
        else
          target.style.touchAction =
            true === direction
              ? 'auto'
              : direction
              ? 'pan-' + direction + (Observer.isTouch ? ' pinch-zoom' : '')
              : 'none';
        target === ScrollTrigger_docEl &&
          _allowNativePanning(ScrollTrigger_body, direction);
      },
      _overflow = {
        auto: 1,
        scroll: 1,
      },
      _nestedScroll = function _nestedScroll(_ref5) {
        var event = _ref5.event,
          target = _ref5.target,
          axis = _ref5.axis;
        var cs,
          node = (event.changedTouches ? event.changedTouches[0] : event)
            .target,
          cache = node._gsap || ScrollTrigger_gsap.core.getCache(node),
          time = ScrollTrigger_getTime();
        if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
          while (node && node.scrollHeight <= node.clientHeight)
            node = node.parentNode;
          cache._isScroll =
            node &&
            !ScrollTrigger_isViewport(node) &&
            node !== target &&
            (_overflow[(cs = _getComputedStyle(node)).overflowY] ||
              _overflow[cs.overflowX]);
          cache._isScrollT = time;
        }
        (cache._isScroll || 'x' === axis) && (event._gsapAllow = true);
      },
      _inputObserver = function _inputObserver(target, type, inputs, nested) {
        return Observer.create({
          target,
          capture: true,
          debounce: false,
          lockAxis: true,
          type,
          onWheel: (nested = nested && _nestedScroll),
          onPress: nested,
          onDrag: nested,
          onScroll: nested,
          onEnable: function onEnable() {
            return (
              inputs &&
              ScrollTrigger_addListener(
                ScrollTrigger_doc,
                Observer.eventTypes[0],
                _captureInputs,
                false,
                true
              )
            );
          },
          onDisable: function onDisable() {
            return ScrollTrigger_removeListener(
              ScrollTrigger_doc,
              Observer.eventTypes[0],
              _captureInputs,
              true
            );
          },
        });
      },
      _inputExp = /(input|label|select|textarea)/i,
      _captureInputs = function _captureInputs(e) {
        var isInput = _inputExp.test(e.target.tagName);
        if (isInput || _inputIsFocused) {
          e._gsapAllow = true;
          _inputIsFocused = isInput;
        }
      },
      _getScrollNormalizer = function _getScrollNormalizer(vars) {
        ScrollTrigger_isObject(vars) || (vars = {});
        vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
        vars.type || (vars.type = 'wheel,touch');
        vars.debounce = !!vars.debounce;
        vars.id = vars.id || 'normalizer';
        var self,
          maxY,
          skipTouchMove,
          lastRefreshID,
          tween,
          startScrollX,
          startScrollY,
          onStopDelayedCall,
          _vars2 = vars,
          normalizeScrollX = _vars2.normalizeScrollX,
          momentum = _vars2.momentum,
          allowNestedScroll = _vars2.allowNestedScroll,
          target = _getTarget(vars.target) || ScrollTrigger_docEl,
          smoother = ScrollTrigger_gsap.core.globals().ScrollSmoother,
          content =
            _fixIOSBug &&
            ((vars.content && _getTarget(vars.content)) ||
              (smoother && smoother.get() && smoother.get().content())),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scale = 1,
          initialScale =
            (Observer.isTouch && ScrollTrigger_win.visualViewport
              ? ScrollTrigger_win.visualViewport.scale *
                ScrollTrigger_win.visualViewport.width
              : ScrollTrigger_win.outerWidth) / ScrollTrigger_win.innerWidth,
          wheelRefresh = 0,
          resolveMomentumDuration = ScrollTrigger_isFunction(momentum)
            ? function () {
                return momentum(self);
              }
            : function () {
                return momentum || 2.8;
              },
          inputObserver = _inputObserver(
            target,
            vars.type,
            true,
            allowNestedScroll
          ),
          resumeTouchMove = function resumeTouchMove() {
            return (skipTouchMove = false);
          },
          scrollClampX = ScrollTrigger_passThrough,
          scrollClampY = ScrollTrigger_passThrough,
          updateClamps = function updateClamps() {
            maxY = _maxScroll(target, _vertical);
            scrollClampY = ScrollTrigger_clamp(_fixIOSBug ? 1 : 0, maxY);
            normalizeScrollX &&
              (scrollClampX = ScrollTrigger_clamp(
                0,
                _maxScroll(target, _horizontal)
              ));
            lastRefreshID = _refreshID;
          },
          ignoreDrag = function ignoreDrag() {
            if (skipTouchMove) {
              requestAnimationFrame(resumeTouchMove);
              var offset = ScrollTrigger_round(self.deltaY / 2),
                scroll = scrollClampY(scrollFuncY.v - offset);
              if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                content.style.transform =
                  'translateY(' + -scrollFuncY.offset + 'px)';
                content._gsap && (content._gsap.y = -scrollFuncY.offset + 'px');
                scrollFuncY.cacheID = _scrollers.cache;
                _updateAll();
              }
              return true;
            }
            if (content) {
              content.style.transform = 'translateY(0px)';
              scrollFuncY.offset = scrollFuncY.cacheID = 0;
              content._gsap && (content._gsap.y = '0px');
            }
            skipTouchMove = true;
          },
          onResize = function onResize() {
            updateClamps();
            if (tween.isActive() && tween.vars.scrollY > maxY)
              scrollFuncY() > maxY
                ? tween.progress(1) && scrollFuncY(maxY)
                : tween.resetTo('scrollY', maxY);
          };
        vars.ignoreCheck = function (e) {
          return (
            (_fixIOSBug && 'touchmove' === e.type && ignoreDrag(e)) ||
            (scale > 1.05 && 'touchstart' !== e.type) ||
            self.isGesturing ||
            (e.touches && e.touches.length > 1)
          );
        };
        vars.onPress = function () {
          var prevScale = scale;
          scale = ScrollTrigger_round(
            ((ScrollTrigger_win.visualViewport &&
              ScrollTrigger_win.visualViewport.scale) ||
              1) / initialScale
          );
          tween.pause();
          prevScale !== scale &&
            _allowNativePanning(
              target,
              scale > 1.01 ? true : normalizeScrollX ? false : 'x'
            );
          skipTouchMove = false;
          startScrollX = scrollFuncX();
          startScrollY = scrollFuncY();
          updateClamps();
          lastRefreshID = _refreshID;
        };
        vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
          if (content) {
            content.style.transform = 'translateY(0px)';
            scrollFuncY.offset = scrollFuncY.cacheID = 0;
            content._gsap && (content._gsap.y = '0px');
          }
          if (!wasDragging) onStopDelayedCall.restart(true);
          else {
            _scrollers.cache++;
            var currentScroll,
              endScroll,
              dur = resolveMomentumDuration();
            if (normalizeScrollX) {
              currentScroll = scrollFuncX();
              endScroll =
                currentScroll + (0.05 * dur * -self.velocityX) / 0.227;
              dur *= _clampScrollAndGetDurationMultiplier(
                scrollFuncX,
                currentScroll,
                endScroll,
                _maxScroll(target, _horizontal)
              );
              tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + (0.05 * dur * -self.velocityY) / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(
              scrollFuncY,
              currentScroll,
              endScroll,
              _maxScroll(target, _vertical)
            );
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (
              (_fixIOSBug && tween.vars.scrollY >= maxY) ||
              currentScroll >= maxY - 1
            )
              ScrollTrigger_gsap.to(
                {},
                {
                  onUpdate: onResize,
                  duration: dur,
                }
              );
          }
        };
        vars.onWheel = function () {
          tween._ts && tween.pause();
          if (ScrollTrigger_getTime() - wheelRefresh > 1e3) {
            lastRefreshID = 0;
            wheelRefresh = ScrollTrigger_getTime();
          }
        };
        vars.onChange = function (self, dx, dy, xArray, yArray) {
          _refreshID !== lastRefreshID && updateClamps();
          dx &&
            normalizeScrollX &&
            scrollFuncX(
              scrollClampX(
                xArray[2] === dx
                  ? startScrollX + (self.startX - self.x)
                  : scrollFuncX() + dx - xArray[1]
              )
            );
          dy &&
            scrollFuncY(
              scrollClampY(
                yArray[2] === dy
                  ? startScrollY + (self.startY - self.y)
                  : scrollFuncY() + dy - yArray[1]
              )
            );
          _updateAll();
        };
        vars.onEnable = function () {
          _allowNativePanning(target, normalizeScrollX ? false : 'x');
          ScrollTrigger_addListener(ScrollTrigger_win, 'resize', onResize);
          inputObserver.enable();
        };
        vars.onDisable = function () {
          _allowNativePanning(target, true);
          ScrollTrigger_removeListener(ScrollTrigger_win, 'resize', onResize);
          inputObserver.kill();
        };
        self = new Observer(vars);
        self.iOS = _fixIOSBug;
        _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
        onStopDelayedCall = self._dc;
        tween = ScrollTrigger_gsap.to(self, {
          ease: 'power4',
          paused: true,
          scrollX: normalizeScrollX ? '+=0.1' : '+=0',
          scrollY: '+=0.1',
          onComplete: onStopDelayedCall.vars.onComplete,
        });
        return self;
      };
    ScrollTrigger_ScrollTrigger.sort = function (func) {
      return _triggers.sort(
        func ||
          function (a, b) {
            return (
              -1e6 * (a.vars.refreshPriority || 0) +
              a.start -
              (b.start + -1e6 * (b.vars.refreshPriority || 0))
            );
          }
      );
    };
    ScrollTrigger_ScrollTrigger.observe = function (vars) {
      return new Observer(vars);
    };
    ScrollTrigger_ScrollTrigger.normalizeScroll = function (vars) {
      if ('undefined' === typeof vars) return ScrollTrigger_normalizer;
      if (true === vars && ScrollTrigger_normalizer)
        return ScrollTrigger_normalizer.enable();
      if (false === vars)
        return ScrollTrigger_normalizer && ScrollTrigger_normalizer.kill();
      var normalizer =
        vars instanceof Observer ? vars : _getScrollNormalizer(vars);
      ScrollTrigger_normalizer &&
        ScrollTrigger_normalizer.target === normalizer.target &&
        ScrollTrigger_normalizer.kill();
      ScrollTrigger_isViewport(normalizer.target) &&
        (ScrollTrigger_normalizer = normalizer);
      return normalizer;
    };
    ScrollTrigger_ScrollTrigger.core = {
      _getVelocityProp,
      _inputObserver,
      _scrollers,
      _proxies,
      bridge: {
        ss: function ss() {
          _lastScrollTime || _dispatch('scrollStart');
          _lastScrollTime = ScrollTrigger_getTime();
        },
        ref: function ref() {
          return _refreshing;
        },
      },
    };
    ScrollTrigger_getGSAP() &&
      ScrollTrigger_gsap.registerPlugin(ScrollTrigger_ScrollTrigger);
    gsapWithCSS.registerPlugin(ScrollTrigger_ScrollTrigger);
    function gsap_random(min, max) {
      return Math.random() * (max - min) + min;
    }
    const word = () => {
      let word = document.querySelector('.main__title');
      let out = '';
      Array.from(word.textContent).forEach((elem, i) => {
        if (' ' === elem) out += ' ';
        else out += `<span class="letter-${i}">${elem}</span>`;
      });
      word.innerHTML = out;
      let wordLine = gsapWithCSS.timeline({
        repeat: -1,
        yoyo: true,
        yoyoEase: 'slow',
        defaults: {
          duration: 0.3,
          ease: 'slow(0.7, 0.7, false)',
        },
      });
      for (let i = 0; i < 15; i++)
        wordLine.fromTo(
          `.letter-${i}`,
          {
            opacity: 1,
            y: 0,
            color: '#fff',
          },
          {
            y: 'random(-15, 15, 2)',
            rotate: 'random(-5, 5, 1)',
            color: '#fef7da',
          }
        );
      wordLine.from(`letter-0`, {
        opacity: 0.5,
        duration: 0.3,
      });
    };
    let phoneY;
    if (window.innerWidth > 1630 && window.innerWidth <= 2560) phoneY = '-78%';
    else if (window.innerWidth > 1280 && window.innerWidth <= 1630)
      phoneY = '-77.5%';
    else if (window.innerWidth > 992 && window.innerWidth <= 1280)
      phoneY = '-79.5%';
    else if (window.innerWidth > 768 && window.innerWidth <= 992)
      phoneY = '-79%';
    else if (window.innerWidth > 480 && window.innerWidth <= 768)
      phoneY = '-77%';
    else if (window.innerWidth > 290 && window.innerWidth <= 480)
      phoneY = '-77.3%';
    const sport = function () {
      let tl = gsapWithCSS.timeline();
      tl.to('._sportsman-4', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
      }).to(
        '._sportsman-5',
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
        },
        0
      );
      setTimeout(() => {
        document.querySelector('._sportsman-4').src = 'img/main/04-1.png';
        document.querySelector('._sportsman-5').src = 'img/main/05-1.png';
      }, 800);
    };
    window.addEventListener('load', () => {
      let tl = gsapWithCSS.timeline({
        delay: 0.3,
      });
      tl.to('.main__background-color', {
        backgroundColor: 'transparent',
        duration: 6,
        ease: 'circ.in',
      })
        .from(
          '.main__city-image_1',
          {
            y: '+100%',
            opacity: 0,
            duration: 3,
            ease: 'power1.inOut',
          },
          0
        )
        .from(
          '.main__city-image_2',
          {
            y: '+100%',
            opacity: 0,
            duration: 3,
            ease: 'power1.inOut',
          },
          0.5
        )
        .from(
          '.main__city-image_3',
          {
            y: '+100%',
            opacity: 0,
            duration: 3,
            ease: 'power1.inOut',
          },
          1
        )
        .from(
          '.main__city-image_4',
          {
            y: '+100%',
            opacity: 0,
            duration: 2.4,
            ease: 'power1.inOut',
          },
          '-=6'
        )
        .from(
          '.main__bottom-image',
          {
            y: '-100%',
            opacity: 0,
            duration: 4,
            ease: 'power1.inOut',
          },
          0
        )
        .from(
          '.main__grass-image',
          {
            x: '-100%',
            opacity: 0,
            duration: 2.2,
            ease: 'power3.out',
          },
          3
        )
        .from(
          '._sportsman-5',
          {
            x: '-100vw',
            duration: 3.8,
            onComplete: sport,
          },
          4
        )
        .from(
          '._sportsman-4',
          {
            x: '-100vw',
            duration: 3.8,
            onComplete: sport,
          },
          4
        )
        .from(
          '.main__sun-image',
          {
            y: '+150%',
            duration: 5.4,
            scale: 0,
            rotate: -1080,
            transformOrigin: 'center',
          },
          4
        )
        .to(
          '.main__top-image-2',
          {
            opacity: 0,
            duration: 4.4,
            ease: 'power4.inOut',
          },
          4
        )
        .to('.main__top-image-2', {
          opacity: 1,
          duration: 2.4,
          ease: 'power4.inOut',
        })
        .to(
          '._sportsman-5',
          {
            opacity: 1,
            scale: 1,
            rotate: 5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          8.8
        )
        .to(
          '._sportsman-4',
          {
            opacity: 1,
            scale: 1,
            rotate: -5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          9
        )
        .from(
          '._sportsman-7',
          {
            opacity: 0,
            scale: 0.8,
            rotate: 5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          9.2
        )
        .from(
          '._sportsman-6',
          {
            opacity: 0,
            scale: 0.8,
            rotate: -5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          9.4
        )
        .from(
          '._sportsman-3',
          {
            opacity: 0,
            scale: 0.8,
            rotate: 5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          9.6
        )
        .from(
          '._sportsman-2',
          {
            opacity: 0,
            scale: 0.8,
            rotate: -5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          10
        )
        .from(
          '._sportsman-1',
          {
            opacity: 0,
            scale: 0.8,
            rotate: 5,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          9.8
        )
        .from(
          '.main__title-box',
          {
            x: '-50%',
            opacity: 0,
            duration: 0.9,
            ease: 'circ.out',
            onComplete: word,
          },
          '-=5'
        )
        .from(
          '.header',
          {
            y: -200,
            opacity: 0,
            duration: 1.1,
          },
          '-=0.6'
        )
        .from('._button-1', {
          y: 150,
          opacity: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
        })
        .from(
          '._button-2',
          {
            y: 150,
            opacity: 0,
            duration: 0.4,
            ease: 'back.out(1.7)',
          },
          '-=0.2'
        )
        .from(
          '._button-3',
          {
            y: 150,
            opacity: 0,
            duration: 0.4,
            ease: 'back.out(1.7)',
          },
          '-=0.2'
        );
      gsapWithCSS.to('.app__image-line', {
        scrollTrigger: {
          trigger: '.app__images',
          toggleActions: 'restart pause restart pause',
          start: 'top bottom',
        },
        y: phoneY,
        duration: 10,
        ease: 'power1.out',
        yoyoEase: 'power1.out',
        yoyo: true,
        repeat: -1,
      });
      let globus = gsapWithCSS.timeline();
      globus
        .from('.app__shape-outside', {
          opacity: 0,
          scale: 0,
          x: gsap_random(-50, 50),
          y: gsap_random(-50, 50),
          z: gsap_random(-50, 50),
          duration: 0.5,
        })
        .from(
          '.app__shape-background-lines',
          {
            opacity: 0,
            scale: 0,
            x: gsap_random(-50, 50),
            y: gsap_random(-50, 50),
            z: gsap_random(-50, 50),
            duration: 0.5,
          },
          '-=0.2'
        )
        .from(
          '.app__shape-background',
          {
            opacity: 0,
            scale: 0,
            x: gsap_random(-50, 50),
            y: gsap_random(-50, 50),
            z: gsap_random(-50, 50),
            duration: 0.5,
          },
          '-=0.2'
        )
        .from(
          '.app__shape-outside-lines',
          {
            opacity: 0,
            scale: 0,
            duration: 0.5,
          },
          '-=0.2'
        )
        .from(
          '.app__shape-lines',
          {
            opacity: 0,
            scale: 0,
            duration: 0.3,
          },
          '-=0.1'
        )
        .from(
          '.app__shape-people',
          {
            opacity: 0,
            scale: 0,
            duration: 0.6,
          },
          '-=0.1'
        )
        .to('.app__shape-background-lines', {
          opacity: 0.6,
          scale: 0.9,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: 'power4.out',
        })
        .to('.app__lines-top-bottom', {
          x: 0,
          opacity: 0.2,
          duration: 0.8,
        })
        .to('.app__lines-center', {
          x: 0,
          opacity: 0.2,
          duration: 0.8,
        })
        .to('.app__lines-bold-top-bottom', {
          x: 0,
          opacity: 0.2,
          duration: 0.8,
        })
        .to('.app__lines-top-bottom', {
          opacity: 1,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'slow(0.7, 0.7, false)',
        })
        .to('.app__lines-center', {
          opacity: 1,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'slow(0.7, 0.7, false)',
        })
        .to(
          '.app__lines-bold-top-bottom',
          {
            opacity: 1,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'slow(0.7, 0.7, false)',
          },
          '-=0.5'
        );
      ScrollTrigger_ScrollTrigger.create({
        animation: globus,
        trigger: '.app',
        toggleActions: 'play pause resume none',
      });
      let phone = gsapWithCSS.timeline({
        repeat: -1,
        yoyo: true,
        defaults: {
          ease: 'power1.out',
          duration: 2,
        },
      });
      phone
        .to('._phone-2', {
          opacity: 1,
        })
        .to('._phone-3', {
          opacity: 1,
        });
      ScrollTrigger_ScrollTrigger.create({
        animation: phone,
        trigger: '.app__images',
        toggleActions: 'restart pause restart pause',
        start: 'top bottom',
      });
      gsapWithCSS.to('.app__shape-lines', {
        scrollTrigger: {
          trigger: '.app',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
        },
        rotate: 360,
        duration: 25,
        yoyo: true,
        ease: 'power2.out',
      });
      gsapWithCSS.to(
        '.app__shape-background',
        {
          scrollTrigger: {
            trigger: '.app',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.2,
          },
          rotate: 360,
          duration: 25,
          yoyo: true,
          ease: 'power2.out',
        },
        '-=25'
      );
      let footer = gsapWithCSS.timeline();
      footer
        .from('.footer__top', {
          y: '+100%',
          opacity: 0,
          duration: 1.2,
        })
        .from(
          '.footer__bottom',
          {
            y: '+100%',
            opacity: 0,
            duration: 1,
          },
          '-=1'
        )
        .from(
          '.footer__shadow',
          {
            opacity: 0,
            scale: 0,
            duration: 1.2,
          },
          '-=0.8'
        )
        .from(
          '.footer__inner',
          {
            scale: 0,
            duration: 0.8,
            ease: 'sine.out',
          },
          '-=0.4s'
        );
      ScrollTrigger_ScrollTrigger.create({
        animation: footer,
        trigger: '.footer',
        start: 'top bottom',
        toggleActions: 'play pause play none',
      });
      let activities = gsapWithCSS.timeline();
      activities
        .from('.activities__image_1', {
          rotate: -20,
          scale: 0.8,
          x: '-200%',
          duration: 0.8,
        })
        .from('.activities__basket', {
          rotate: 360,
          x: +500,
          y: -150,
          opacity: 0,
          duration: 0.8,
          ease: 'power1.out',
        })
        .from(
          '.activities__image_2',
          {
            opacity: 0,
            scale: 0.3,
            duration: 0.8,
          },
          '-=0.8'
        )
        .from(
          '.activities__image_3',
          {
            rotate: 20,
            scale: 0.8,
            x: '+150%',
            duration: 0.8,
          },
          '-=0.8'
        )
        .from('.activities__image-tennis', {
          rotate: 360,
          x: -300,
          y: 200,
          opacity: 0,
          duration: 0.8,
          ease: 'power1.out',
        })
        .from(
          '.activities__image_4',
          {
            x: '-400%',
            duration: 1.6,
            ease: 'power1.inOut',
          },
          '-=0.8'
        )
        .from('.activities__image_5', {
          opacity: 0,
          scale: 0.3,
          duration: 0.8,
        })
        .from('.activities__image-ball', {
          rotate: 360,
          x: +300,
          opacity: 0,
          duration: 0.8,
          ease: 'power1.out',
        })
        .from(
          '.activities__image_6',
          {
            y: 50,
            duration: 0.8,
            ease: 'power1.inOut',
          },
          '-=0.8'
        );
      ScrollTrigger_ScrollTrigger.create({
        animation: activities,
        trigger: '.activities__body',
        start: 'top 80%',
      });
    });
    if (!isMobile.any())
      window.addEventListener('scroll', () => {
        document.querySelector('.main__title').style.transform = `translateY(${
          0.2 * window.scrollY
        }px)`;
        document.querySelector('.header').style.transform = `translateY(${
          0.6 * window.scrollY
        }px)`;
      });
    window['FLS'] = true;
    isWebp();
    addLoadedClass();
    menuInit();
    pageNavigation();
  })();
})();
