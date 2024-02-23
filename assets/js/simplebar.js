! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, function() {
    "use strict";
    var t, e, r, i, n, o, s, a, c, l, u, f, h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function d(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var p = function(t) {
            return t && t.Math == Math && t
        },
        v = p("object" == typeof globalThis && globalThis) || p("object" == typeof window && window) || p("object" == typeof self && self) || p("object" == typeof h && h) || function() {
            return this
        }() || Function("return this")(),
        g = Object.defineProperty,
        $ = function(t, e) {
            try {
                g(v, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                v[t] = e
            }
            return e
        },
        b = "__core-js_shared__",
        y = v[b] || $(b, {}),
        m = d(function(t) {
            (t.exports = function(t, e) {
                return y[t] || (y[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.22.6",
                mode: "global",
                copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }),
        x = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        },
        E = !x(function() {
            var t = (function() {}).bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        }),
        w = Function.prototype,
        S = w.bind,
        O = w.call,
        _ = E && S.bind(O, O),
        k = E ? function(t) {
            return t && _(t)
        } : function(t) {
            return t && function() {
                return O.apply(t, arguments)
            }
        },
        A = v.TypeError,
        L = function(t) {
            if (void 0 == t) throw A("Can't call method on " + t);
            return t
        },
        z = v.Object,
        T = function(t) {
            return z(L(t))
        },
        R = k({}.hasOwnProperty),
        C = Object.hasOwn || function t(e, r) {
            return R(T(e), r)
        },
        W = 0,
        N = Math.random(),
        I = k(1..toString),
        M = function(t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + I(++W + N, 36)
        },
        P = function(t) {
            return "function" == typeof t
        },
        D = function(t, e) {
            var r;
            return arguments.length < 2 ? P(r = v[t]) ? r : void 0 : v[t] && v[t][e]
        },
        B = D("navigator", "userAgent") || "",
        j = v.process,
        F = v.Deno,
        V = j && j.versions || F && F.version,
        X = V && V.v8;
    X && (e = (t = X.split("."))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])), !e && B && (!(t = B.match(/Edge\/(\d+)/)) || t[1] >= 74) && (t = B.match(/Chrome\/(\d+)/)) && (e = +t[1]);
    var H = e,
        q = !!Object.getOwnPropertySymbols && !x(function() {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && H && H < 41
        }),
        Y = q && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        G = m("wks"),
        U = v.Symbol,
        K = U && U.for,
        J = Y ? U : U && U.withoutSetter || M,
        Q = function(t) {
            if (!C(G, t) || !(q || "string" == typeof G[t])) {
                var e = "Symbol." + t;
                q && C(U, t) ? G[t] = U[t] : Y && K ? G[t] = K(e) : G[t] = J(e)
            }
            return G[t]
        },
        Z = Q("toStringTag"),
        tt = {};
    tt[Z] = "z";
    var te = "[object z]" === String(tt),
        tr = !x(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        ti = function(t) {
            return "object" == typeof t ? null !== t : P(t)
        },
        tn = v.document,
        to = ti(tn) && ti(tn.createElement),
        ts = function(t) {
            return to ? tn.createElement(t) : {}
        },
        ta = !tr && !x(function() {
            return 7 != Object.defineProperty(ts("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        tc = tr && x(function() {
            return 42 != Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }),
        tl = v.String,
        tu = v.TypeError,
        tf = function(t) {
            if (ti(t)) return t;
            throw tu(tl(t) + " is not an object")
        },
        th = Function.prototype.call,
        td = E ? th.bind(th) : function() {
            return th.apply(th, arguments)
        },
        tp = k({}.isPrototypeOf),
        tv = v.Object,
        tg = Y ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            var e = D("Symbol");
            return P(e) && tp(e.prototype, tv(t))
        },
        t$ = v.String,
        tb = function(t) {
            try {
                return t$(t)
            } catch (e) {
                return "Object"
            }
        },
        ty = v.TypeError,
        tm = function(t) {
            if (P(t)) return t;
            throw ty(tb(t) + " is not a function")
        },
        tx = function(t, e) {
            var r = t[e];
            return null == r ? void 0 : tm(r)
        },
        tE = v.TypeError,
        tw = function(t, e) {
            var r, i;
            if ("string" === e && P(r = t.toString) && !ti(i = td(r, t)) || P(r = t.valueOf) && !ti(i = td(r, t)) || "string" !== e && P(r = t.toString) && !ti(i = td(r, t))) return i;
            throw tE("Can't convert object to primitive value")
        },
        tS = v.TypeError,
        tO = Q("toPrimitive"),
        t_ = function(t, e) {
            if (!ti(t) || tg(t)) return t;
            var r, i = tx(t, tO);
            if (i) {
                if (void 0 === e && (e = "default"), r = td(i, t, e), !ti(r) || tg(r)) return r;
                throw tS("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"), tw(t, e)
        },
        tk = function(t) {
            var e = t_(t, "string");
            return tg(e) ? e : e + ""
        },
        tA = v.TypeError,
        tL = Object.defineProperty,
        tz = Object.getOwnPropertyDescriptor,
        tT = "enumerable",
        tR = "configurable",
        t8 = "writable",
        tC = {
            f: tr ? tc ? function t(e, r, i) {
                if (tf(e), r = tk(r), tf(i), "function" == typeof e && "prototype" === r && "value" in i && t8 in i && !i[t8]) {
                    var n = tz(e, r);
                    n && n[t8] && (e[r] = i.value, i = {
                        configurable: tR in i ? i[tR] : n[tR],
                        enumerable: tT in i ? i[tT] : n[tT],
                        writable: !1
                    })
                }
                return tL(e, r, i)
            } : tL : function t(e, r, i) {
                if (tf(e), r = tk(r), tf(i), ta) try {
                    return tL(e, r, i)
                } catch (n) {}
                if ("get" in i || "set" in i) throw tA("Accessors not supported");
                return "value" in i && (e[r] = i.value), e
            }
        },
        tW = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        tN = tr ? function(t, e, r) {
            return tC.f(t, e, tW(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        tI = Function.prototype,
        tM = tr && Object.getOwnPropertyDescriptor,
        tP = C(tI, "name"),
        tD = tP && (!tr || tr && tM(tI, "name").configurable),
        tB = {
            EXISTS: tP,
            PROPER: tP && "something" === (function t() {}).name,
            CONFIGURABLE: tD
        },
        tj = k(Function.toString);
    P(y.inspectSource) || (y.inspectSource = function(t) {
        return tj(t)
    });
    var tF = y.inspectSource,
        t0 = v.WeakMap,
        tV = P(t0) && /native code/.test(tF(t0)),
        t9 = m("keys"),
        tX = function(t) {
            return t9[t] || (t9[t] = M(t))
        },
        tH = {},
        tq = "Object already initialized",
        tY = v.TypeError,
        tG = v.WeakMap,
        t5 = function(t) {
            return n(t) ? i(t) : r(t, {})
        },
        t2 = function(t) {
            return function(e) {
                var r;
                if (!ti(e) || (r = i(e)).type !== t) throw tY("Incompatible receiver, " + t + " required");
                return r
            }
        };
    if (tV || y.state) {
        var t6 = y.state || (y.state = new tG),
            t1 = k(t6.get),
            t4 = k(t6.has),
            tU = k(t6.set);
        r = function(t, e) {
            if (t4(t6, t)) throw new tY(tq);
            return e.facade = t, tU(t6, t, e), e
        }, i = function(t) {
            return t1(t6, t) || {}
        }, n = function(t) {
            return t4(t6, t)
        }
    } else {
        var t3 = tX("state");
        tH[t3] = !0, r = function(t, e) {
            if (C(t, t3)) throw new tY(tq);
            return e.facade = t, tN(t, t3, e), e
        }, i = function(t) {
            return C(t, t3) ? t[t3] : {}
        }, n = function(t) {
            return C(t, t3)
        }
    }
    var t7 = {
            set: r,
            get: i,
            has: n,
            enforce: t5,
            getterFor: t2
        },
        tK = d(function(t) {
            var e = tB.CONFIGURABLE,
                r = t7.enforce,
                i = t7.get,
                n = Object.defineProperty,
                o = tr && !x(function() {
                    return 8 !== n(function() {}, "length", {
                        value: 8
                    }).length
                }),
                s = String(String).split("String"),
                a = t.exports = function(t, i, a) {
                    if ("Symbol(" === String(i).slice(0, 7) && (i = "[" + String(i).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), a && a.getter && (i = "get " + i), a && a.setter && (i = "set " + i), (!C(t, "name") || e && t.name !== i) && n(t, "name", {
                            value: i,
                            configurable: !0
                        }), o && a && C(a, "arity") && t.length !== a.arity && n(t, "length", {
                            value: a.arity
                        }), a && C(a, "constructor") && a.constructor) {
                        if (tr) try {
                            n(t, "prototype", {
                                writable: !1
                            })
                        } catch (c) {}
                    } else t.prototype = void 0;
                    var l = r(t);
                    return C(l, "source") || (l.source = s.join("string" == typeof i ? i : "")), t
                };
            Function.prototype.toString = a(function t() {
                return P(this) && i(this).source || tF(this)
            }, "toString")
        }),
        tJ = function(t, e, r, i) {
            i || (i = {});
            var n = i.enumerable,
                o = void 0 !== i.name ? i.name : e;
            return P(r) && tK(r, o, i), i.global ? n ? t[e] = r : $(e, r) : (i.unsafe ? t[e] && (n = !0) : delete t[e], n ? t[e] = r : tN(t, e, r)), t
        },
        tQ = k({}.toString),
        tZ = k("".slice),
        et = function(t) {
            return tZ(tQ(t), 8, -1)
        },
        ee = Q("toStringTag"),
        er = v.Object,
        ei = "Arguments" == et(function() {
            return arguments
        }()),
        en = function(t, e) {
            try {
                return t[e]
            } catch (r) {}
        },
        eo = te ? et : function(t) {
            var e, r, i;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = en(e = er(t), ee)) ? r : ei ? et(e) : "Object" == (i = et(e)) && P(e.callee) ? "Arguments" : i
        };
    te || tJ(Object.prototype, "toString", te ? ({}).toString : function t() {
        return "[object " + eo(this) + "]"
    }, {
        unsafe: !0
    });
    var es = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        ea = ts("span").classList,
        ec = ea && ea.constructor && ea.constructor.prototype,
        el = ec === Object.prototype ? void 0 : ec,
        eu = k(k.bind),
        ef = function(t, e) {
            return tm(t), void 0 === e ? t : E ? eu(t, e) : function() {
                return t.apply(e, arguments)
            }
        },
        eh = v.Object,
        ed = k("".split),
        ep = x(function() {
            return !eh("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == et(t) ? ed(t, "") : eh(t)
        } : eh,
        ev = Math.ceil,
        eg = Math.floor,
        e$ = Math.trunc || function t(e) {
            var r = +e;
            return (r > 0 ? eg : ev)(r)
        },
        eb = function(t) {
            var e = +t;
            return e != e || 0 === e ? 0 : e$(e)
        },
        ey = Math.min,
        em = function(t) {
            return t > 0 ? ey(eb(t), 9007199254740991) : 0
        },
        ex = function(t) {
            return em(t.length)
        },
        eE = Array.isArray || function t(e) {
            return "Array" == et(e)
        },
        ew = function() {},
        eS = [],
        eO = D("Reflect", "construct"),
        e_ = /^\s*(?:class|function)\b/,
        ek = k(e_.exec),
        eA = !e_.exec(ew),
        eL = function t(e) {
            if (!P(e)) return !1;
            try {
                return eO(ew, eS, e), !0
            } catch (r) {
                return !1
            }
        },
        ez = function t(e) {
            if (!P(e)) return !1;
            switch (eo(e)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return eA || !!ek(e_, tF(e))
            } catch (r) {
                return !0
            }
        };
    ez.sham = !0;
    var eT = !eO || x(function() {
            var t;
            return eL(eL.call) || !eL(Object) || !eL(function() {
                t = !0
            }) || t
        }) ? ez : eL,
        eR = Q("species"),
        e8 = v.Array,
        eC = function(t) {
            var e;
            return eE(t) && (eT(e = t.constructor) && (e === e8 || eE(e.prototype)) ? e = void 0 : ti(e) && null === (e = e[eR]) && (e = void 0)), void 0 === e ? e8 : e
        },
        eW = function(t, e) {
            return new(eC(t))(0 === e ? 0 : e)
        },
        eN = k([].push),
        eI = function(t) {
            var e = 1 == t,
                r = 2 == t,
                i = 3 == t,
                n = 4 == t,
                o = 6 == t,
                s = 7 == t,
                a = 5 == t || o;
            return function(c, l, u, f) {
                for (var h, d, p = T(c), v = ep(p), g = ef(l, u), $ = ex(v), b = 0, y = f || eW, m = e ? y(c, $) : r || s ? y(c, 0) : void 0; $ > b; b++)
                    if ((a || b in v) && (d = g(h = v[b], b, p), t)) {
                        if (e) m[b] = d;
                        else if (d) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return h;
                            case 6:
                                return b;
                            case 2:
                                eN(m, h)
                        } else switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                eN(m, h)
                        }
                    }
                return o ? -1 : i || n ? n : m
            }
        },
        eM = {
            forEach: eI(0),
            map: eI(1),
            filter: eI(2),
            some: eI(3),
            every: eI(4),
            find: eI(5),
            findIndex: eI(6),
            filterReject: eI(7)
        },
        eP = function(t, e) {
            var r = [][t];
            return !!r && x(function() {
                r.call(null, e || function() {
                    return 1
                }, 1)
            })
        },
        eD = eM.forEach,
        eB = eP("forEach") ? [].forEach : function t(e) {
            return eD(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
        ej = function(t) {
            if (t && t.forEach !== eB) try {
                tN(t, "forEach", eB)
            } catch (e) {
                t.forEach = eB
            }
        };
    for (var eF in es) es[eF] && ej(v[eF] && v[eF].prototype);
    ej(el);
    var e0, eV = !!("undefined" != typeof window && window.document && window.document.createElement),
        e9 = {}.propertyIsEnumerable,
        eX = Object.getOwnPropertyDescriptor,
        eH = {
            f: eX && !e9.call({
                1: 2
            }, 1) ? function t(e) {
                var r = eX(this, e);
                return !!r && r.enumerable
            } : e9
        },
        eq = function(t) {
            return ep(L(t))
        },
        eY = Object.getOwnPropertyDescriptor,
        eG = {
            f: tr ? eY : function t(e, r) {
                if (e = eq(e), r = tk(r), ta) try {
                    return eY(e, r)
                } catch (i) {}
                if (C(e, r)) return tW(!td(eH.f, e, r), e[r])
            }
        },
        e5 = Math.max,
        e2 = Math.min,
        e6 = function(t, e) {
            var r = eb(t);
            return r < 0 ? e5(r + e, 0) : e2(r, e)
        },
        e1 = function(t) {
            return function(e, r, i) {
                var n, o = eq(e),
                    s = ex(o),
                    a = e6(i, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((n = o[a++]) != n) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        },
        e4 = {
            includes: e1(!0),
            indexOf: e1(!1)
        }.indexOf,
        eU = k([].push),
        e3 = function(t, e) {
            var r, i = eq(t),
                n = 0,
                o = [];
            for (r in i) !C(tH, r) && C(i, r) && eU(o, r);
            for (; e.length > n;) C(i, r = e[n++]) && (~e4(o, r) || eU(o, r));
            return o
        },
        e7 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        eK = e7.concat("length", "prototype"),
        eJ = {
            f: Object.getOwnPropertyNames || function t(e) {
                return e3(e, eK)
            }
        },
        eQ = {
            f: Object.getOwnPropertySymbols
        },
        eZ = k([].concat),
        rt = D("Reflect", "ownKeys") || function t(e) {
            var r = eJ.f(tf(e)),
                i = eQ.f;
            return i ? eZ(r, i(e)) : r
        },
        re = function(t, e, r) {
            for (var i = rt(e), n = tC.f, o = eG.f, s = 0; s < i.length; s++) {
                var a = i[s];
                C(t, a) || r && C(r, a) || n(t, a, o(e, a))
            }
        },
        rr = /#|\.prototype\./,
        ri = function(t, e) {
            var r = ro[rn(t)];
            return r == ra || r != rs && (P(e) ? x(e) : !!e)
        },
        rn = ri.normalize = function(t) {
            return String(t).replace(rr, ".").toLowerCase()
        },
        ro = ri.data = {},
        rs = ri.NATIVE = "N",
        ra = ri.POLYFILL = "P",
        rc = ri,
        rl = eG.f,
        ru = function(t, e) {
            var r, i, n, o, s, a, c = t.target,
                l = t.global,
                u = t.stat;
            if (i = l ? v : u ? v[c] || $(c, {}) : (v[c] || {}).prototype)
                for (n in e) {
                    if (s = e[n], o = t.dontCallGetSet ? (a = rl(i, n)) && a.value : i[n], !(r = rc(l ? n : c + (u ? "." : "#") + n, t.forced)) && void 0 !== o) {
                        if (typeof s == typeof o) continue;
                        re(s, o)
                    }(t.sham || o && o.sham) && tN(s, "sham", !0), tJ(i, n, s, t)
                }
        },
        rf = v.String,
        rh = function(t) {
            if ("Symbol" === eo(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return rf(t)
        },
        rd = "	\n\v\f\r \xa0              　\u2028\u2029\uFEFF",
        rp = k("".replace),
        rv = "[" + rd + "]",
        rg = RegExp("^" + rv + rv + "*"),
        r$ = RegExp(rv + rv + "*$"),
        rb = function(t) {
            return function(e) {
                var r = rh(L(e));
                return 1 & t && (r = rp(r, rg, "")), 2 & t && (r = rp(r, r$, "")), r
            }
        },
        ry = {
            start: rb(1),
            end: rb(2),
            trim: rb(3)
        }.trim,
        rm = v.parseInt,
        rx = v.Symbol,
        rE = rx && rx.iterator,
        rw = /^[+-]?0x/i,
        rS = k(rw.exec),
        rO = 8 !== rm(rd + "08") || 22 !== rm(rd + "0x16") || rE && !x(function() {
            rm(Object(rE))
        }) ? function t(e, r) {
            var i = ry(rh(e));
            return rm(i, r >>> 0 || (rS(rw, i) ? 16 : 10))
        } : rm;
    ru({
        global: !0,
        forced: parseInt != rO
    }, {
        parseInt: rO
    });
    var r_ = Object.keys || function t(e) {
            return e3(e, e7)
        },
        rk = Object.assign,
        rA = Object.defineProperty,
        rL = k([].concat),
        rz = !rk || x(function() {
            if (tr && 1 !== rk({
                    b: 1
                }, rk(rA({}, "a", {
                    enumerable: !0,
                    get: function() {
                        rA(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                r = Symbol(),
                i = "abcdefghijklmnopqrst";
            return t[r] = 7, i.split("").forEach(function(t) {
                e[t] = t
            }), 7 != rk({}, t)[r] || r_(rk({}, e)).join("") != i
        }) ? function t(e, r) {
            for (var i = T(e), n = arguments.length, o = 1, s = eQ.f, a = eH.f; n > o;)
                for (var c, l = ep(arguments[o++]), u = s ? rL(r_(l), s(l)) : r_(l), f = u.length, h = 0; f > h;) c = u[h++], (!tr || td(a, l, c)) && (i[c] = l[c]);
            return i
        } : rk;
    ru({
        target: "Object",
        stat: !0,
        arity: 2,
        forced: Object.assign !== rz
    }, {
        assign: rz
    });
    var rT = Q("species"),
        rR = eM.filter,
        r8 = H >= 51 || !x(function() {
            var t = [];
            return (t.constructor = {})[rT] = function() {
                return {
                    foo: 1
                }
            }, 1 !== t.filter(Boolean).foo
        });
    ru({
        target: "Array",
        proto: !0,
        forced: !r8
    }, {
        filter: function t(e) {
            return rR(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var rC = {
            f: tr && !tc ? Object.defineProperties : function t(e, r) {
                tf(e);
                for (var i, n = eq(r), o = r_(r), s = o.length, a = 0; s > a;) tC.f(e, i = o[a++], n[i]);
                return e
            }
        },
        rW = D("document", "documentElement"),
        rN = "prototype",
        rI = "script",
        rM = tX("IE_PROTO"),
        rP = function() {},
        rD = function(t) {
            return "<" + rI + ">" + t + "</" + rI + ">"
        },
        rB = function(t) {
            t.write(rD("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        rj = function() {
            var t, e = ts("iframe");
            return e.style.display = "none", rW.appendChild(e), e.src = String("java" + rI + ":"), (t = e.contentWindow.document).open(), t.write(rD("document.F=Object")), t.close(), t.F
        },
        rF = function() {
            try {
                o = new ActiveXObject("htmlfile")
            } catch (t) {}
            rF = "undefined" != typeof document ? document.domain && o ? rB(o) : rj() : rB(o);
            for (var e = e7.length; e--;) delete rF[rN][e7[e]];
            return rF()
        };
    tH[rM] = !0;
    var r0 = Object.create || function t(e, r) {
            var i;
            return null !== e ? (rP[rN] = tf(e), i = new rP, rP[rN] = null, i[rM] = e) : i = rF(), void 0 === r ? i : rC.f(i, r)
        },
        rV = tC.f,
        r9 = Q("unscopables"),
        rX = Array.prototype;
    void 0 == rX[r9] && rV(rX, r9, {
        configurable: !0,
        value: r0(null)
    });
    var rH = function(t) {
            rX[r9][t] = !0
        },
        rq = {},
        rY = !x(function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        }),
        rG = tX("IE_PROTO"),
        r5 = v.Object,
        r2 = r5.prototype,
        r6 = rY ? r5.getPrototypeOf : function(t) {
            var e = T(t);
            if (C(e, rG)) return e[rG];
            var r = e.constructor;
            return P(r) && e instanceof r ? r.prototype : e instanceof r5 ? r2 : null
        },
        r1 = Q("iterator"),
        r4 = !1;
    [].keys && ("next" in (c = [].keys()) ? (a = r6(r6(c))) !== Object.prototype && (s = a) : r4 = !0), (void 0 == s || x(function() {
        var t = {};
        return s[r1].call(t) !== t
    })) && (s = {}), P(s[r1]) || tJ(s, r1, function() {
        return this
    });
    var rU = {
            IteratorPrototype: s,
            BUGGY_SAFARI_ITERATORS: r4
        },
        r3 = tC.f,
        r7 = Q("toStringTag"),
        rK = function(t, e, r) {
            t && !r && (t = t.prototype), t && !C(t, r7) && r3(t, r7, {
                configurable: !0,
                value: e
            })
        },
        rJ = rU.IteratorPrototype,
        rQ = function() {
            return this
        },
        rZ = function(t, e, r, i) {
            var n = e + " Iterator";
            return t.prototype = r0(rJ, {
                next: tW(+!i, r)
            }), rK(t, n, !1), rq[n] = rQ, t
        },
        it = v.String,
        ie = v.TypeError,
        ir = function(t) {
            if ("object" == typeof t || P(t)) return t;
            throw ie("Can't set " + it(t) + " as a prototype")
        },
        ii = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                r = {};
            try {
                (t = k(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array
            } catch (i) {}
            return function r(i, n) {
                return tf(i), ir(n), e ? t(i, n) : i.__proto__ = n, i
            }
        }() : void 0),
        io = tB.PROPER,
        is = tB.CONFIGURABLE,
        ia = rU.IteratorPrototype,
        ic = rU.BUGGY_SAFARI_ITERATORS,
        il = Q("iterator"),
        iu = "keys",
        ih = "values",
        id = "entries",
        ip = function() {
            return this
        },
        iv = function(t, e, r, i, n, o, s) {
            rZ(r, e, i);
            var a, c, l, u = function(t) {
                    if (t === n && p) return p;
                    if (!ic && t in h) return h[t];
                    switch (t) {
                        case iu:
                            return function e() {
                                return new r(this, t)
                            };
                        case ih:
                            return function e() {
                                return new r(this, t)
                            };
                        case id:
                            return function e() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                f = !1,
                h = t.prototype,
                d = h[il] || h["@@iterator"] || n && h[n],
                p = !ic && d || u(n),
                v = "Array" == e && h.entries || d;
            if (v && (a = r6(v.call(new t))) !== Object.prototype && a.next && (r6(a) === ia || (ii ? ii(a, ia) : P(a[il]) || tJ(a, il, ip)), rK(a, e + " Iterator", !0)), io && n == ih && d && d.name !== ih && (is ? tN(h, "name", ih) : (f = !0, p = function t() {
                    return td(d, this)
                })), n) {
                if (c = {
                        values: u(ih),
                        keys: o ? p : u(iu),
                        entries: u(id)
                    }, s)
                    for (l in c) !ic && !f && l in h || tJ(h, l, c[l]);
                else ru({
                    target: e,
                    proto: !0,
                    forced: ic || f
                }, c)
            }
            return h[il] !== p && tJ(h, il, p, {
                name: n
            }), rq[e] = p, c
        },
        ig = tC.f,
        i$ = "Array Iterator",
        ib = t7.set,
        iy = t7.getterFor(i$),
        im = iv(Array, "Array", function(t, e) {
            ib(this, {
                type: i$,
                target: eq(t),
                index: 0,
                kind: e
            })
        }, function() {
            var t = iy(this),
                e = t.target,
                r = t.kind,
                i = t.index++;
            return !e || i >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: i,
                done: !1
            } : "values" == r ? {
                value: e[i],
                done: !1
            } : {
                value: [i, e[i]],
                done: !1
            }
        }, "values"),
        ix = rq.Arguments = rq.Array;
    if (rH("keys"), rH("values"), rH("entries"), tr && "values" !== ix.name) try {
        ig(ix, "name", {
            value: "values"
        })
    } catch (iE) {}
    var iw = k("".charAt),
        iS = k("".charCodeAt),
        iO = k("".slice),
        i_ = function(t) {
            return function(e, r) {
                var i, n, o = rh(L(e)),
                    s = eb(r),
                    a = o.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (i = iS(o, s)) < 55296 || i > 56319 || s + 1 === a || (n = iS(o, s + 1)) < 56320 || n > 57343 ? t ? iw(o, s) : i : t ? iO(o, s, s + 2) : (i - 55296 << 10) + (n - 56320) + 65536
            }
        },
        ik = {
            codeAt: i_(!1),
            charAt: i_(!0)
        },
        iA = ik.charAt,
        iL = "String Iterator",
        iz = t7.set,
        iT = t7.getterFor(iL);
    iv(String, "String", function(t) {
        iz(this, {
            type: iL,
            string: rh(t),
            index: 0
        })
    }, function t() {
        var e, r = iT(this),
            i = r.string,
            n = r.index;
        return n >= i.length ? {
            value: void 0,
            done: !0
        } : (e = iA(i, n), r.index += e.length, {
            value: e,
            done: !1
        })
    });
    var iR = function(t, e, r) {
            for (var i in e) tJ(t, i, e[i], r);
            return t
        },
        i8 = function(t, e, r) {
            var i = tk(e);
            i in t ? tC.f(t, i, tW(0, r)) : t[i] = r
        },
        iC = v.Array,
        iW = Math.max,
        iN = function(t, e, r) {
            for (var i = ex(t), n = e6(e, i), o = e6(void 0 === r ? i : r, i), s = iC(iW(o - n, 0)), a = 0; n < o; n++, a++) i8(s, a, t[n]);
            return s.length = a, s
        },
        iI = eJ.f,
        iM = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        iP = function(t) {
            try {
                return iI(t)
            } catch (e) {
                return iN(iM)
            }
        },
        iD = {
            f: function t(e) {
                return iM && "Window" == et(e) ? iP(e) : iI(eq(e))
            }
        },
        iB = x(function() {
            if ("function" == typeof ArrayBuffer) {
                var t = new ArrayBuffer(8);
                Object.isExtensible(t) && Object.defineProperty(t, "a", {
                    value: 8
                })
            }
        }),
        ij = Object.isExtensible,
        iF = x(function() {
            ij(1)
        }) || iB ? function t(e) {
            return !!ti(e) && (!iB || "ArrayBuffer" != et(e)) && (!ij || ij(e))
        } : ij,
        i0 = !x(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }),
        iV = d(function(t) {
            var e = tC.f,
                r = !1,
                i = M("meta"),
                n = 0,
                o = function(t) {
                    e(t, i, {
                        value: {
                            objectID: "O" + n++,
                            weakData: {}
                        }
                    })
                },
                s = function(t, e) {
                    if (!ti(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!C(t, i)) {
                        if (!iF(t)) return "F";
                        if (!e) return "E";
                        o(t)
                    }
                    return t[i].objectID
                },
                a = function(t, e) {
                    if (!C(t, i)) {
                        if (!iF(t)) return !0;
                        if (!e) return !1;
                        o(t)
                    }
                    return t[i].weakData
                },
                c = function(t) {
                    return i0 && r && iF(t) && !C(t, i) && o(t), t
                },
                l = function() {
                    u.enable = function() {}, r = !0;
                    var t = eJ.f,
                        e = k([].splice),
                        n = {};
                    n[i] = 1, t(n).length && (eJ.f = function(r) {
                        for (var n = t(r), o = 0, s = n.length; o < s; o++)
                            if (n[o] === i) {
                                e(n, o, 1);
                                break
                            }
                        return n
                    }, ru({
                        target: "Object",
                        stat: !0,
                        forced: !0
                    }, {
                        getOwnPropertyNames: iD.f
                    }))
                },
                u = t.exports = {
                    enable: l,
                    fastKey: s,
                    getWeakData: a,
                    onFreeze: c
                };
            tH[i] = !0
        });
    iV.enable, iV.fastKey, iV.getWeakData, iV.onFreeze;
    var i9 = Q("iterator"),
        iX = Array.prototype,
        iH = Q("iterator"),
        iq = function(t) {
            if (void 0 != t) return tx(t, iH) || tx(t, "@@iterator") || rq[eo(t)]
        },
        iY = v.TypeError,
        iG = function(t, e) {
            var r = arguments.length < 2 ? iq(t) : e;
            if (tm(r)) return tf(td(r, t));
            throw iY(tb(t) + " is not iterable")
        },
        i5 = function(t, e, r) {
            var i, n;
            tf(t);
            try {
                if (!(i = tx(t, "return"))) {
                    if ("throw" === e) throw r;
                    return r
                }
                i = td(i, t)
            } catch (o) {
                n = !0, i = o
            }
            if ("throw" === e) throw r;
            if (n) throw i;
            return tf(i), r
        },
        i2 = v.TypeError,
        i6 = function(t, e) {
            this.stopped = t, this.result = e
        },
        i1 = i6.prototype,
        i4 = function(t, e, r) {
            var i, n, o, s, a, c, l, u, f = r && r.that,
                h = !!(r && r.AS_ENTRIES),
                d = !!(r && r.IS_ITERATOR),
                p = !!(r && r.INTERRUPTED),
                v = ef(e, f),
                g = function(t) {
                    return n && i5(n, "normal", t), new i6(!0, t)
                },
                $ = function(t) {
                    return h ? (tf(t), p ? v(t[0], t[1], g) : v(t[0], t[1])) : p ? v(t, g) : v(t)
                };
            if (d) n = t;
            else {
                if (!(o = iq(t))) throw i2(tb(t) + " is not iterable");
                if (void 0 !== (i = o) && (rq.Array === i || iX[i9] === i)) {
                    for (s = 0, a = ex(t); a > s; s++)
                        if ((c = $(t[s])) && tp(i1, c)) return c;
                    return new i6(!1)
                }
                n = iG(t, o)
            }
            for (l = n.next; !(u = td(l, n)).done;) {
                try {
                    c = $(u.value)
                } catch (b) {
                    i5(n, "throw", b)
                }
                if ("object" == typeof c && c && tp(i1, c)) return c
            }
            return new i6(!1)
        },
        iU = v.TypeError,
        i3 = function(t, e) {
            if (tp(e, t)) return t;
            throw iU("Incorrect invocation")
        },
        i7 = Q("iterator"),
        iK = !1;
    try {
        var iJ = 0,
            iQ = {
                next: function() {
                    return {
                        done: !!iJ++
                    }
                },
                return: function() {
                    iK = !0
                }
            };
        iQ[i7] = function() {
            return this
        }, Array.from(iQ, function() {
            throw 2
        })
    } catch (iZ) {}
    var nt = function(t, e) {
            if (!e && !iK) return !1;
            var r = !1;
            try {
                var i = {};
                i[i7] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }, t(i)
            } catch (n) {}
            return r
        },
        ne = function(t, e, r) {
            var i, n;
            return ii && P(i = e.constructor) && i !== r && ti(n = i.prototype) && n !== r.prototype && ii(t, n), t
        },
        nr = iV.getWeakData,
        ni = t7.set,
        nn = t7.getterFor,
        no = eM.find,
        ns = eM.findIndex,
        na = k([].splice),
        nc = 0,
        nl = function(t) {
            return t.frozen || (t.frozen = new nu)
        },
        nu = function() {
            this.entries = []
        },
        nf = function(t, e) {
            return no(t.entries, function(t) {
                return t[0] === e
            })
        };
    nu.prototype = {
        get: function(t) {
            var e = nf(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!nf(this, t)
        },
        set: function(t, e) {
            var r = nf(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = ns(this.entries, function(e) {
                return e[0] === t
            });
            return ~e && na(this.entries, e, 1), !!~e
        }
    };
    var nh = {
            getConstructor: function(t, e, r, i) {
                var n = t(function(t, n) {
                        i3(t, o), ni(t, {
                            type: e,
                            id: nc++,
                            frozen: void 0
                        }), void 0 != n && i4(n, t[i], {
                            that: t,
                            AS_ENTRIES: r
                        })
                    }),
                    o = n.prototype,
                    s = nn(e),
                    a = function(t, e, r) {
                        var i = s(t),
                            n = nr(tf(e), !0);
                        return !0 === n ? nl(i).set(e, r) : n[i.id] = r, t
                    };
                return iR(o, {
                    delete: function(t) {
                        var e = s(this);
                        if (!ti(t)) return !1;
                        var r = nr(t);
                        return !0 === r ? nl(e).delete(t) : r && C(r, e.id) && delete r[e.id]
                    },
                    has: function t(e) {
                        var r = s(this);
                        if (!ti(e)) return !1;
                        var i = nr(e);
                        return !0 === i ? nl(r).has(e) : i && C(i, r.id)
                    }
                }), iR(o, r ? {
                    get: function t(e) {
                        var r = s(this);
                        if (ti(e)) {
                            var i = nr(e);
                            return !0 === i ? nl(r).get(e) : i ? i[r.id] : void 0
                        }
                    },
                    set: function t(e, r) {
                        return a(this, e, r)
                    }
                } : {
                    add: function t(e) {
                        return a(this, e, !0)
                    }
                }), n
            }
        },
        nd = t7.enforce,
        np = !v.ActiveXObject && "ActiveXObject" in v,
        nv = function(t) {
            return function e() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        },
        ng = function(t, e, r) {
            var i = -1 !== t.indexOf("Map"),
                n = -1 !== t.indexOf("Weak"),
                o = i ? "set" : "add",
                s = v[t],
                a = s && s.prototype,
                c = s,
                l = {},
                u = function(t) {
                    var e = k(a[t]);
                    tJ(a, t, "add" == t ? function t(r) {
                        return e(this, 0 === r ? 0 : r), this
                    } : "delete" == t ? function(t) {
                        return (!n || !!ti(t)) && e(this, 0 === t ? 0 : t)
                    } : "get" == t ? function t(r) {
                        return n && !ti(r) ? void 0 : e(this, 0 === r ? 0 : r)
                    } : "has" == t ? function t(r) {
                        return (!n || !!ti(r)) && e(this, 0 === r ? 0 : r)
                    } : function t(r, i) {
                        return e(this, 0 === r ? 0 : r, i), this
                    })
                };
            if (rc(t, !P(s) || !(n || a.forEach && !x(function() {
                    new s().entries().next()
                })))) c = r.getConstructor(e, t, i, o), iV.enable();
            else if (rc(t, !0)) {
                var f = new c,
                    h = f[o](n ? {} : -0, 1) != f,
                    d = x(function() {
                        f.has(1)
                    }),
                    p = nt(function(t) {
                        new s(t)
                    }),
                    g = !n && x(function() {
                        for (var t = new s, e = 5; e--;) t[o](e, e);
                        return !t.has(-0)
                    });
                p || ((c = e(function(t, e) {
                    i3(t, a);
                    var r = ne(new s, t, c);
                    return void 0 != e && i4(e, r[o], {
                        that: r,
                        AS_ENTRIES: i
                    }), r
                })).prototype = a, a.constructor = c), (d || g) && (u("delete"), u("has"), i && u("get")), (g || h) && u(o), n && a.clear && delete a.clear
            }
            return l[t] = c, ru({
                global: !0,
                constructor: !0,
                forced: c != s
            }, l), rK(c, t), n || r.setStrong(c, t, i), c
        }("WeakMap", nv, nh);
    if (tV && np) {
        l = nh.getConstructor(nv, "WeakMap", !0), iV.enable();
        var n$ = ng.prototype,
            nb = k(n$.delete),
            ny = k(n$.has),
            nm = k(n$.get),
            nx = k(n$.set);
        iR(n$, {
            delete: function(t) {
                if (ti(t) && !iF(t)) {
                    var e = nd(this);
                    return e.frozen || (e.frozen = new l), nb(this, t) || e.frozen.delete(t)
                }
                return nb(this, t)
            },
            has: function t(e) {
                if (ti(e) && !iF(e)) {
                    var r = nd(this);
                    return r.frozen || (r.frozen = new l), ny(this, e) || r.frozen.has(e)
                }
                return ny(this, e)
            },
            get: function t(e) {
                if (ti(e) && !iF(e)) {
                    var r = nd(this);
                    return r.frozen || (r.frozen = new l), ny(this, e) ? nm(this, e) : r.frozen.get(e)
                }
                return nm(this, e)
            },
            set: function t(e, r) {
                if (ti(e) && !iF(e)) {
                    var i = nd(this);
                    i.frozen || (i.frozen = new l), ny(this, e) ? nx(this, e, r) : i.frozen.set(e, r)
                } else nx(this, e, r);
                return this
            }
        })
    }
    var nE = Q("iterator"),
        nw = Q("toStringTag"),
        nS = im.values,
        nO = function(t, e) {
            if (t) {
                if (t[nE] !== nS) try {
                    tN(t, nE, nS)
                } catch (r) {
                    t[nE] = nS
                }
                if (t[nw] || tN(t, nw, e), es[e]) {
                    for (var i in im)
                        if (t[i] !== im[i]) try {
                            tN(t, i, im[i])
                        } catch (n) {
                            t[i] = im[i]
                        }
                }
            }
        };
    for (var n_ in es) nO(v[n_] && v[n_].prototype, n_);
    nO(el, "DOMTokenList");
    var nk = "Expected a function",
        nA = 0 / 0,
        nL = /^\s+|\s+$/g,
        nz = /^[-+]0x[0-9a-f]+$/i,
        nT = /^0b[01]+$/i,
        nR = /^0o[0-7]+$/i,
        n8 = parseInt,
        nC = "object" == typeof h && h && h.Object === Object && h,
        nW = "object" == typeof self && self && self.Object === Object && self,
        nN = nC || nW || Function("return this")(),
        nI = Object.prototype.toString,
        nM = Math.max,
        nP = Math.min,
        nD = function() {
            return nN.Date.now()
        };

    function nB(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function nj(t) {
        if ("number" == typeof t) return t;
        if ("symbol" == typeof(e = t) || (r = e) && "object" == typeof r && "[object Symbol]" == nI.call(e)) return nA;
        if (nB(t)) {
            var e, r, i = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = nB(i) ? i + "" : i
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(nL, "");
        var n = nT.test(t);
        return n || nR.test(t) ? n8(t.slice(2), n ? 2 : 8) : nz.test(t) ? nA : +t
    }
    var nF = function t(e, r, i) {
            var n = !0,
                o = !0;
            if ("function" != typeof e) throw TypeError(nk);
            return nB(i) && (n = "leading" in i ? !!i.leading : n, o = "trailing" in i ? !!i.trailing : o),
                function t(e, r, i) {
                    var n, o, s, a, c, l, u = 0,
                        f = !1,
                        h = !1,
                        d = !0;
                    if ("function" != typeof e) throw TypeError(nk);

                    function p(t) {
                        var r = n,
                            i = o;
                        return n = o = void 0, u = t, a = e.apply(i, r)
                    }

                    function v(t) {
                        var e = t - l,
                            i = t - u;
                        return void 0 === l || e >= r || e < 0 || h && i >= s
                    }

                    function g() {
                        var t, e, i, n, o = nD();
                        if (v(o)) return $(o);
                        c = setTimeout(g, (e = (t = o) - l, i = t - u, n = r - e, h ? nP(n, s - i) : n))
                    }

                    function $(t) {
                        return (c = void 0, d && n) ? p(t) : (n = o = void 0, a)
                    }

                    function b() {
                        var t, e = nD(),
                            i = v(e);
                        if (n = arguments, o = this, l = e, i) {
                            if (void 0 === c) return u = t = l, c = setTimeout(g, r), f ? p(t) : a;
                            if (h) return c = setTimeout(g, r), p(l)
                        }
                        return void 0 === c && (c = setTimeout(g, r)), a
                    }
                    return r = nj(r) || 0, nB(i) && (f = !!i.leading, s = (h = "maxWait" in i) ? nM(nj(i.maxWait) || 0, r) : s, d = "trailing" in i ? !!i.trailing : d), b.cancel = function t() {
                        void 0 !== c && clearTimeout(c), u = 0, n = l = o = c = void 0
                    }, b.flush = function t() {
                        return void 0 === c ? a : $(nD())
                    }, b
                }(e, r, {
                    leading: n,
                    maxWait: r,
                    trailing: o
                })
        },
        n0 = 0 / 0,
        nV = /^\s+|\s+$/g,
        n9 = /^[-+]0x[0-9a-f]+$/i,
        nX = /^0b[01]+$/i,
        nH = /^0o[0-7]+$/i,
        nq = parseInt,
        nY = "object" == typeof h && h && h.Object === Object && h,
        nG = "object" == typeof self && self && self.Object === Object && self,
        n5 = nY || nG || Function("return this")(),
        n2 = Object.prototype.toString,
        n6 = Math.max,
        n1 = Math.min,
        n4 = function() {
            return n5.Date.now()
        };

    function nU(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function n3(t) {
        if ("number" == typeof t) return t;
        if ("symbol" == typeof(e = t) || (r = e) && "object" == typeof r && "[object Symbol]" == n2.call(e)) return n0;
        if (nU(t)) {
            var e, r, i = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = nU(i) ? i + "" : i
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(nV, "");
        var n = nX.test(t);
        return n || nH.test(t) ? nq(t.slice(2), n ? 2 : 8) : n9.test(t) ? n0 : +t
    }
    var n7, nK = function t(e, r, i) {
            var n, o, s, a, c, l, u = 0,
                f = !1,
                h = !1,
                d = !0;
            if ("function" != typeof e) throw TypeError("Expected a function");

            function p(t) {
                var r = n,
                    i = o;
                return n = o = void 0, u = t, a = e.apply(i, r)
            }

            function v(t) {
                var e = t - l,
                    i = t - u;
                return void 0 === l || e >= r || e < 0 || h && i >= s
            }

            function g() {
                var t, e, i, n, o = n4();
                if (v(o)) return $(o);
                c = setTimeout(g, (e = (t = o) - l, i = t - u, n = r - e, h ? n1(n, s - i) : n))
            }

            function $(t) {
                return (c = void 0, d && n) ? p(t) : (n = o = void 0, a)
            }

            function b() {
                var t, e = n4(),
                    i = v(e);
                if (n = arguments, o = this, l = e, i) {
                    if (void 0 === c) return u = t = l, c = setTimeout(g, r), f ? p(t) : a;
                    if (h) return c = setTimeout(g, r), p(l)
                }
                return void 0 === c && (c = setTimeout(g, r)), a
            }
            return r = n3(r) || 0, nU(i) && (f = !!i.leading, s = (h = "maxWait" in i) ? n6(n3(i.maxWait) || 0, r) : s, d = "trailing" in i ? !!i.trailing : d), b.cancel = function t() {
                void 0 !== c && clearTimeout(c), u = 0, n = l = o = c = void 0
            }, b.flush = function t() {
                return void 0 === c ? a : $(n4())
            }, b
        },
        nJ = "__lodash_hash_undefined__",
        nQ = /^\[object .+?Constructor\]$/,
        nZ = "object" == typeof h && h && h.Object === Object && h,
        ot = "object" == typeof self && self && self.Object === Object && self,
        oe = nZ || ot || Function("return this")(),
        or = Array.prototype,
        oi = Function.prototype,
        on = Object.prototype,
        oo = oe["__core-js_shared__"],
        os = (n7 = /[^.]+$/.exec(oo && oo.keys && oo.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n7 : "",
        oa = oi.toString,
        oc = on.hasOwnProperty,
        ol = on.toString,
        ou = RegExp("^" + oa.call(oc).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        of = or.splice,
        oh = oy(oe, "Map"),
        od = oy(Object, "create");

    function op(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function ov(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function og(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function o$(t, e) {
        for (var r = t.length; r--;)
            if (ox(t[r][0], e)) return r;
        return -1
    }

    function ob(t, e) {
        var r, i, n = t.__data__;
        return (r = e, i = typeof r, "string" == i || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }

    function oy(t, e) {
        var r, i, n = (r = t, i = e, null == r ? void 0 : r[i]);
        return ! function t(e) {
            var r, i, n;
            if (!oE(e) || (r = e, os && os in r)) return !1;
            return ((i = e, n = oE(i) ? ol.call(i) : "", "[object Function]" == n || "[object GeneratorFunction]" == n || function t(e) {
                var r = !1;
                if (null != e && "function" != typeof e.toString) try {
                    r = !!(e + "")
                } catch (i) {}
                return r
            }(e)) ? ou : nQ).test(function t(e) {
                if (null != e) {
                    try {
                        return oa.call(e)
                    } catch (r) {}
                    try {
                        return e + ""
                    } catch (i) {}
                }
                return ""
            }(e))
        }(n) ? void 0 : n
    }

    function om(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw TypeError("Expected a function");
        var r = function() {
            var i = arguments,
                n = e ? e.apply(this, i) : i[0],
                o = r.cache;
            if (o.has(n)) return o.get(n);
            var s = t.apply(this, i);
            return r.cache = o.set(n, s), s
        };
        return r.cache = new(om.Cache || og), r
    }

    function ox(t, e) {
        return t === e || t != t && e != e
    }

    function oE(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    op.prototype.clear = function t() {
        this.__data__ = od ? od(null) : {}
    }, op.prototype.delete = function t(e) {
        return this.has(e) && delete this.__data__[e]
    }, op.prototype.get = function t(e) {
        var r = this.__data__;
        if (od) {
            var i = r[e];
            return i === nJ ? void 0 : i
        }
        return oc.call(r, e) ? r[e] : void 0
    }, op.prototype.has = function t(e) {
        var r = this.__data__;
        return od ? void 0 !== r[e] : oc.call(r, e)
    }, op.prototype.set = function t(e, r) {
        return this.__data__[e] = od && void 0 === r ? nJ : r, this
    }, ov.prototype.clear = function t() {
        this.__data__ = []
    }, ov.prototype.delete = function t(e) {
        var r = this.__data__,
            i = o$(r, e);
        return !(i < 0) && (i == r.length - 1 ? r.pop() : of .call(r, i, 1), !0)
    }, ov.prototype.get = function t(e) {
        var r = this.__data__,
            i = o$(r, e);
        return i < 0 ? void 0 : r[i][1]
    }, ov.prototype.has = function t(e) {
        return o$(this.__data__, e) > -1
    }, ov.prototype.set = function t(e, r) {
        var i = this.__data__,
            n = o$(i, e);
        return n < 0 ? i.push([e, r]) : i[n][1] = r, this
    }, og.prototype.clear = function t() {
        this.__data__ = {
            hash: new op,
            map: new(oh || ov),
            string: new op
        }
    }, og.prototype.delete = function t(e) {
        return ob(this, e).delete(e)
    }, og.prototype.get = function t(e) {
        return ob(this, e).get(e)
    }, og.prototype.has = function t(e) {
        return ob(this, e).has(e)
    }, og.prototype.set = function t(e, r) {
        return ob(this, e).set(e, r), this
    }, om.Cache = og;
    var ow, oS = om,
        oO = [],
        o_ = "ResizeObserver loop completed with undelivered notifications.",
        ok = function() {
            var t;
            "function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
                message: o_
            }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = o_), window.dispatchEvent(t)
        };
    (ow = u || (u = {})).BORDER_BOX = "border-box", ow.CONTENT_BOX = "content-box", ow.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
    var oA = function(t) {
            return Object.freeze(t)
        },
        oL = function t(e, r) {
            this.inlineSize = e, this.blockSize = r, oA(this)
        },
        oz = function() {
            function t(t, e, r, i) {
                return this.x = t, this.y = e, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, oA(this)
            }
            return t.prototype.toJSON = function() {
                var t, e = this.x,
                    r = this.y,
                    i = this.top,
                    n = this.right,
                    o = this.bottom,
                    s = this.left;
                return {
                    x: e,
                    y: r,
                    top: i,
                    right: n,
                    bottom: o,
                    left: s,
                    width: this.width,
                    height: this.height
                }
            }, t.fromRect = function(e) {
                return new t(e.x, e.y, e.width, e.height)
            }, t
        }(),
        oT = function(t) {
            return t instanceof SVGElement && "getBBox" in t
        },
        oR = function(t) {
            if (oT(t)) {
                var e = t.getBBox(),
                    r = e.width,
                    i = e.height;
                return !r && !i
            }
            var n = t,
                o = n.offsetWidth,
                s = n.offsetHeight;
            return !(o || s || t.getClientRects().length)
        },
        o8 = function(t) {
            if (t instanceof Element) return !0;
            var e, r, i = null === (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
            return !!(i && t instanceof i.Element)
        },
        oC = function(t) {
            switch (t.tagName) {
                case "INPUT":
                    if ("image" !== t.type) break;
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "OBJECT":
                case "CANVAS":
                case "IFRAME":
                case "IMG":
                    return !0
            }
            return !1
        },
        oW = "undefined" != typeof window ? window : {},
        oN = new WeakMap,
        oI = /auto|scroll/,
        oM = /^tb|vertical/,
        oP = /msie|trident/i.test(oW.navigator && oW.navigator.userAgent),
        oD = function(t) {
            return parseFloat(t || "0")
        },
        oB = function(t, e, r) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = !1), new oL((r ? e : t) || 0, (r ? t : e) || 0)
        },
        oj = oA({
            devicePixelContentBoxSize: oB(),
            borderBoxSize: oB(),
            contentBoxSize: oB(),
            contentRect: new oz(0, 0, 0, 0)
        }),
        oF = function(t, e) {
            if (void 0 === e && (e = !1), oN.has(t) && !e) return oN.get(t);
            if (oR(t)) return oN.set(t, oj), oj;
            var r = getComputedStyle(t),
                i = oT(t) && t.ownerSVGElement && t.getBBox(),
                n = !oP && "border-box" === r.boxSizing,
                o = oM.test(r.writingMode || ""),
                s = !i && oI.test(r.overflowY || ""),
                a = !i && oI.test(r.overflowX || ""),
                c = i ? 0 : oD(r.paddingTop),
                l = i ? 0 : oD(r.paddingRight),
                u = i ? 0 : oD(r.paddingBottom),
                f = i ? 0 : oD(r.paddingLeft),
                h = i ? 0 : oD(r.borderTopWidth),
                d = i ? 0 : oD(r.borderRightWidth),
                p = i ? 0 : oD(r.borderBottomWidth),
                v = i ? 0 : oD(r.borderLeftWidth),
                g = f + l,
                $ = c + u,
                b = v + d,
                y = h + p,
                m = a ? t.offsetHeight - y - t.clientHeight : 0,
                x = s ? t.offsetWidth - b - t.clientWidth : 0,
                E = i ? i.width : oD(r.width) - (n ? g + b : 0) - x,
                w = i ? i.height : oD(r.height) - (n ? $ + y : 0) - m,
                S = oA({
                    devicePixelContentBoxSize: oB(Math.round(E * devicePixelRatio), Math.round(w * devicePixelRatio), o),
                    borderBoxSize: oB(E + g + x + b, w + $ + m + y, o),
                    contentBoxSize: oB(E, w, o),
                    contentRect: new oz(f, c, E, w)
                });
            return oN.set(t, S), S
        },
        o0 = function(t, e, r) {
            var i = oF(t, r),
                n = i.borderBoxSize,
                o = i.contentBoxSize,
                s = i.devicePixelContentBoxSize;
            switch (e) {
                case u.DEVICE_PIXEL_CONTENT_BOX:
                    return s;
                case u.BORDER_BOX:
                    return n;
                default:
                    return o
            }
        },
        oV = function t(e) {
            var r = oF(e);
            this.target = e, this.contentRect = r.contentRect, this.borderBoxSize = oA([r.borderBoxSize]), this.contentBoxSize = oA([r.contentBoxSize]), this.devicePixelContentBoxSize = oA([r.devicePixelContentBoxSize])
        },
        o9 = function(t) {
            if (oR(t)) return 1 / 0;
            for (var e = 0, r = t.parentNode; r;) e += 1, r = r.parentNode;
            return e
        },
        oX = function() {
            var t = 1 / 0,
                e = [];
            oO.forEach(function r(i) {
                if (0 !== i.activeTargets.length) {
                    var n = [];
                    i.activeTargets.forEach(function e(r) {
                        var i = new oV(r.target),
                            o = o9(r.target);
                        n.push(i), r.lastReportedSize = o0(r.target, r.observedBox), o < t && (t = o)
                    }), e.push(function t() {
                        i.callback.call(i.observer, n, i.observer)
                    }), i.activeTargets.splice(0, i.activeTargets.length)
                }
            });
            for (var r = 0, i = e; r < i.length; r++)(0, i[r])();
            return t
        },
        oH = function(t) {
            oO.forEach(function e(r) {
                r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function e(i) {
                    i.isActive() && (o9(i.target) > t ? r.activeTargets.push(i) : r.skippedTargets.push(i))
                })
            })
        },
        oq = function() {
            var t = 0;
            for (oH(t); oO.some(function(t) {
                    return t.activeTargets.length > 0
                });) t = oX(), oH(t);
            return oO.some(function(t) {
                return t.skippedTargets.length > 0
            }) && ok(), t > 0
        },
        oY = [],
        oG = function(t) {
            if (!f) {
                var e = 0,
                    r = document.createTextNode("");
                new MutationObserver(function() {
                    return oY.splice(0).forEach(function(t) {
                        return t()
                    })
                }).observe(r, {
                    characterData: !0
                }), f = function() {
                    r.textContent = "" + (e ? e-- : e++)
                }
            }
            oY.push(t), f()
        },
        o5 = function(t) {
            oG(function e() {
                requestAnimationFrame(t)
            })
        },
        o2 = 0,
        o6 = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        },
        o1 = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
        o4 = function(t) {
            return void 0 === t && (t = 0), Date.now() + t
        },
        oU = !1,
        o3 = new(function() {
            function t() {
                var t = this;
                this.stopped = !0, this.listener = function() {
                    return t.schedule()
                }
            }
            return t.prototype.run = function(t) {
                var e = this;
                if (void 0 === t && (t = 250), !oU) {
                    oU = !0;
                    var r = o4(t);
                    o5(function() {
                        var i = !1;
                        try {
                            i = oq()
                        } finally {
                            if (oU = !1, t = r - o4(), !o2) return;
                            i ? e.run(1e3) : t > 0 ? e.run(t) : e.start()
                        }
                    })
                }
            }, t.prototype.schedule = function() {
                this.stop(), this.run()
            }, t.prototype.observe = function() {
                var t = this,
                    e = function() {
                        return t.observer && t.observer.observe(document.body, o6)
                    };
                document.body ? e() : oW.addEventListener("DOMContentLoaded", e)
            }, t.prototype.start = function() {
                var t = this;
                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), o1.forEach(function(e) {
                    return oW.addEventListener(e, t.listener, !0)
                }))
            }, t.prototype.stop = function() {
                var t = this;
                this.stopped || (this.observer && this.observer.disconnect(), o1.forEach(function(e) {
                    return oW.removeEventListener(e, t.listener, !0)
                }), this.stopped = !0)
            }, t
        }()),
        o7 = function(t) {
            !o2 && t > 0 && o3.start(), (o2 += t) || o3.stop()
        },
        oK = function() {
            function t(t, e) {
                this.target = t, this.observedBox = e || u.CONTENT_BOX, this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            return t.prototype.isActive = function() {
                var t, e = o0(this.target, this.observedBox, !0);
                return !oT(t = this.target) && !oC(t) && "inline" === getComputedStyle(t).display && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
            }, t
        }(),
        oJ = function t(e, r) {
            this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = r
        },
        oQ = new WeakMap,
        oZ = function(t, e) {
            for (var r = 0; r < t.length; r += 1)
                if (t[r].target === e) return r;
            return -1
        },
        st = function() {
            function t() {}
            return t.connect = function(t, e) {
                var r = new oJ(t, e);
                oQ.set(t, r)
            }, t.observe = function(t, e, r) {
                var i = oQ.get(t),
                    n = 0 === i.observationTargets.length;
                0 > oZ(i.observationTargets, e) && (n && oO.push(i), i.observationTargets.push(new oK(e, r && r.box)), o7(1), o3.schedule())
            }, t.unobserve = function(t, e) {
                var r = oQ.get(t),
                    i = oZ(r.observationTargets, e),
                    n = 1 === r.observationTargets.length;
                i >= 0 && (n && oO.splice(oO.indexOf(r), 1), r.observationTargets.splice(i, 1), o7(-1))
            }, t.disconnect = function(t) {
                var e = this,
                    r = oQ.get(t);
                r.observationTargets.slice().forEach(function(r) {
                    return e.unobserve(t, r.target)
                }), r.activeTargets.splice(0, r.activeTargets.length)
            }, t
        }(),
        se = function() {
            function t(t) {
                if (0 === arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof t) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                st.connect(this, t)
            }
            return t.prototype.observe = function(t, e) {
                if (0 === arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!o8(t)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                st.observe(this, t, e)
            }, t.prototype.unobserve = function(t) {
                if (0 === arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!o8(t)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                st.unobserve(this, t)
            }, t.prototype.disconnect = function() {
                st.disconnect(this)
            }, t.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            }, t
        }(),
        sr = v.TypeError,
        si = function(t) {
            return function(e, r, i, n) {
                tm(r);
                var o = T(e),
                    s = ep(o),
                    a = ex(o),
                    c = t ? a - 1 : 0,
                    l = t ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (c in s) {
                            n = s[c], c += l;
                            break
                        }
                        if (c += l, t ? c < 0 : a <= c) throw sr("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : a > c; c += l) c in s && (n = r(n, s[c], c, o));
                return n
            }
        },
        sn = {
            left: si(!1),
            right: si(!0)
        },
        so = "process" == et(v.process),
        ss = sn.left,
        sa = eP("reduce");
    ru({
        target: "Array",
        proto: !0,
        forced: !sa || !so && H > 79 && H < 83
    }, {
        reduce: function t(e) {
            var r = arguments.length;
            return ss(this, e, r, r > 1 ? arguments[1] : void 0)
        }
    });
    var sc, sl, su = function() {
            var t = tf(this),
                e = "";
            return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        sf = v.RegExp,
        sh = x(function() {
            var t = sf("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        }),
        sd = (sh || x(function() {
            return !sf("a", "y").sticky
        }), sh || x(function() {
            var t = sf("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str")
        })),
        sp = v.RegExp,
        sv = x(function() {
            var t = sp(".", "s");
            return !(t.dotAll && t.exec("\n") && "s" === t.flags)
        }),
        sg = v.RegExp,
        s$ = x(function() {
            var t = sg("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        }),
        sb = t7.get,
        sy = m("native-string-replace", String.prototype.replace),
        sm = RegExp.prototype.exec,
        sx = sm,
        sE = k("".charAt),
        sw = k("".indexOf),
        sS = k("".replace),
        sO = k("".slice),
        s_ = (sl = /b*/g, td(sm, sc = /a/, "a"), td(sm, sl, "a"), 0 !== sc.lastIndex || 0 !== sl.lastIndex),
        sk = sd,
        sA = void 0 !== /()??/.exec("")[1];
    (s_ || sA || sk || sv || s$) && (sx = function t(e) {
        var r, i, n, o, s, a, c, l = this,
            u = sb(l),
            f = rh(e),
            h = u.raw;
        if (h) return h.lastIndex = l.lastIndex, r = td(sx, h, f), l.lastIndex = h.lastIndex, r;
        var d = u.groups,
            p = sk && l.sticky,
            v = td(su, l),
            g = l.source,
            $ = 0,
            b = f;
        if (p && (v = sS(v, "y", ""), -1 === sw(v, "g") && (v += "g"), b = sO(f, l.lastIndex), l.lastIndex > 0 && (!l.multiline || l.multiline && "\n" !== sE(f, l.lastIndex - 1)) && (g = "(?: " + g + ")", b = " " + b, $++), i = RegExp("^(?:" + g + ")", v)), sA && (i = RegExp("^" + g + "$(?!\\s)", v)), s_ && (n = l.lastIndex), o = td(sm, p ? i : l, b), p ? o ? (o.input = sO(o.input, $), o[0] = sO(o[0], $), o.index = l.lastIndex, l.lastIndex += o[0].length) : l.lastIndex = 0 : s_ && o && (l.lastIndex = l.global ? o.index + o[0].length : n), sA && o && o.length > 1 && td(sy, o[0], i, function() {
                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (o[s] = void 0)
            }), o && d)
            for (s = 0, o.groups = a = r0(null); s < d.length; s++) a[(c = d[s])[0]] = o[c[1]];
        return o
    });
    var sL = sx;
    ru({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== sL
    }, {
        exec: sL
    });
    var sz = Q("species"),
        sT = RegExp.prototype,
        sR = function(t, e, r, i) {
            var n = Q(t),
                o = !x(function() {
                    var e = {};
                    return e[n] = function() {
                        return 7
                    }, 7 != "" [t](e)
                }),
                s = o && !x(function() {
                    var e = !1,
                        r = /a/;
                    return "split" === t && ((r = {}).constructor = {}, r.constructor[sz] = function() {
                        return r
                    }, r.flags = "", r[n] = /./ [n]), r.exec = function() {
                        return e = !0, null
                    }, r[n](""), !e
                });
            if (!o || !s || r) {
                var a = k(/./ [n]),
                    c = e(n, "" [t], function(t, e, r, i, n) {
                        var s = k(t),
                            c = e.exec;
                        return c === sL || c === sT.exec ? o && !n ? {
                            done: !0,
                            value: a(e, r, i)
                        } : {
                            done: !0,
                            value: s(r, e, i)
                        } : {
                            done: !1
                        }
                    });
                tJ(String.prototype, t, c[0]), tJ(sT, n, c[1])
            }
            i && tN(sT[n], "sham", !0)
        },
        s8 = ik.charAt,
        sC = function(t, e, r) {
            return e + (r ? s8(t, e).length : 1)
        },
        sW = v.TypeError,
        sN = function(t, e) {
            var r = t.exec;
            if (P(r)) {
                var i = td(r, t, e);
                return null !== i && tf(i), i
            }
            if ("RegExp" === et(t)) return td(sL, t, e);
            throw sW("RegExp#exec called on incompatible receiver")
        };
    sR("match", function(t, e, r) {
        return [function e(r) {
            var i = L(this),
                n = void 0 == r ? void 0 : tx(r, t);
            return n ? td(n, r, i) : RegExp(r)[t](rh(i))
        }, function(t) {
            var i, n = tf(this),
                o = rh(t),
                s = r(e, n, o);
            if (s.done) return s.value;
            if (!n.global) return sN(n, o);
            var a = n.unicode;
            n.lastIndex = 0;
            for (var c = [], l = 0; null !== (i = sN(n, o));) {
                var u = rh(i[0]);
                c[l] = u, "" === u && (n.lastIndex = sC(o, em(n.lastIndex), a)), l++
            }
            return 0 === l ? null : c
        }]
    });
    var sI = tB.EXISTS,
        sM = tC.f,
        sP = Function.prototype,
        sD = k(sP.toString),
        sB = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        sj = k(sB.exec);
    tr && !sI && sM(sP, "name", {
        configurable: !0,
        get: function() {
            try {
                return sj(sB, sD(this))[1]
            } catch (t) {
                return ""
            }
        }
    });
    var sF = Function.prototype,
        s0 = sF.apply,
        sV = sF.call,
        s9 = "object" == typeof Reflect && Reflect.apply || (E ? sV.bind(s0) : function() {
            return sV.apply(s0, arguments)
        }),
        sX = Math.floor,
        sH = k("".charAt),
        sq = k("".replace),
        sY = k("".slice),
        sG = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        s5 = /\$([$&'`]|\d{1,2})/g,
        s2 = function(t, e, r, i, n, o) {
            var s = r + t.length,
                a = i.length,
                c = s5;
            return void 0 !== n && (n = T(n), c = sG), sq(o, c, function(o, c) {
                var l;
                switch (sH(c, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return sY(e, 0, r);
                    case "'":
                        return sY(e, s);
                    case "<":
                        l = n[sY(c, 1, -1)];
                        break;
                    default:
                        var u = +c;
                        if (0 === u) return o;
                        if (u > a) {
                            var f = sX(u / 10);
                            if (0 === f) return o;
                            if (f <= a) return void 0 === i[f - 1] ? sH(c, 1) : i[f - 1] + sH(c, 1);
                            return o
                        }
                        l = i[u - 1]
                }
                return void 0 === l ? "" : l
            })
        },
        s6 = Q("replace"),
        s1 = Math.max,
        s4 = Math.min,
        sU = k([].concat),
        s3 = k([].push),
        s7 = k("".indexOf),
        sK = k("".slice),
        sJ = "$0" === "a".replace(/./, "$0"),
        sQ = !!/./ [s6] && "" === /./ [s6]("a", "$0"),
        sZ = !x(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        });
    sR("replace", function(t, e, r) {
        var i = sQ ? "$" : "$0";
        return [function t(r, i) {
            var n = L(this),
                o = void 0 == r ? void 0 : tx(r, s6);
            return o ? td(o, r, n, i) : td(e, rh(n), r, i)
        }, function(t, n) {
            var o = tf(this),
                s = rh(t);
            if ("string" == typeof n && -1 === s7(n, i) && -1 === s7(n, "$<")) {
                var a = r(e, o, s, n);
                if (a.done) return a.value
            }
            var c = P(n);
            c || (n = rh(n));
            var l = o.global;
            if (l) {
                var u = o.unicode;
                o.lastIndex = 0
            }
            for (var f = [];;) {
                var h = sN(o, s);
                if (null === h || (s3(f, h), !l)) break;
                "" === rh(h[0]) && (o.lastIndex = sC(s, em(o.lastIndex), u))
            }
            for (var d = "", p = 0, v = 0; v < f.length; v++) {
                for (var g, $ = rh((h = f[v])[0]), b = s1(s4(eb(h.index), s.length), 0), y = [], m = 1; m < h.length; m++) s3(y, void 0 === (g = h[m]) ? g : String(g));
                var x = h.groups;
                if (c) {
                    var E = sU([$], y, b, s);
                    void 0 !== x && s3(E, x);
                    var w = rh(s9(n, void 0, E))
                } else w = s2($, s, b, y, x, n);
                b >= p && (d += sK(s, p, b) + w, p = b + $.length)
            }
            return d + sK(s, p)
        }]
    }, !sZ || !sJ || sQ);
    var at = function t(e) {
        return Array.prototype.reduce.call(e, function(t, e) {
            var r = e.name.match(/data-simplebar-(.+)/);
            if (r) {
                var i = r[1].replace(/\W+(.)/g, function(t, e) {
                    return e.toUpperCase()
                });
                switch (e.value) {
                    case "true":
                    case void 0:
                        t[i] = !0;
                        break;
                    case "false":
                        t[i] = !1;
                        break;
                    default:
                        t[i] = e.value
                }
            }
            return t
        }, {})
    };

    function ae(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }

    function ar(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
    var ai = null,
        an = null;

    function ao(t) {
        if (null === ai) {
            var e = ar(t);
            if (void 0 === e) return ai = 0;
            var r = e.body,
                i = e.createElement("div");
            i.classList.add("simplebar-hide-scrollbar"), r.appendChild(i);
            var n = i.getBoundingClientRect().right;
            r.removeChild(i), ai = n
        }
        return ai
    }
    eV && window.addEventListener("resize", function() {
        an !== window.devicePixelRatio && (an = window.devicePixelRatio, ai = null)
    });
    var as = function() {
        function t(e, r) {
            var i = this;
            this.onScroll = function() {
                var t = ae(i.el);
                i.scrollXTicking || (t.requestAnimationFrame(i.scrollX), i.scrollXTicking = !0), i.scrollYTicking || (t.requestAnimationFrame(i.scrollY), i.scrollYTicking = !0)
            }, this.scrollX = function() {
                i.axis.x.isOverflowing && (i.showScrollbar("x"), i.positionScrollbar("x")), i.scrollXTicking = !1
            }, this.scrollY = function() {
                i.axis.y.isOverflowing && (i.showScrollbar("y"), i.positionScrollbar("y")), i.scrollYTicking = !1
            }, this.onMouseEnter = function() {
                i.showScrollbar("x"), i.showScrollbar("y")
            }, this.onMouseMove = function(t) {
                i.mouseX = t.clientX, i.mouseY = t.clientY, (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseMoveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function() {
                i.onMouseMove.cancel(), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseLeaveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseLeaveForAxis("y"), i.mouseX = -1, i.mouseY = -1
            }, this.onWindowResize = function() {
                i.scrollbarWidth = i.getScrollbarWidth(), i.hideNativeScrollbar()
            }, this.hideScrollbars = function() {
                i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect(), i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect(), i.isWithinBounds(i.axis.y.track.rect) || (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible), i.axis.y.isVisible = !1), i.isWithinBounds(i.axis.x.track.rect) || (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible), i.axis.x.isVisible = !1)
            }, this.onPointerEvent = function(t) {
                var e, r;
                i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect(), i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect(), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && (e = i.isWithinBounds(i.axis.x.track.rect)), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && (r = i.isWithinBounds(i.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (i.axis.x.scrollbar.rect = i.axis.x.scrollbar.el.getBoundingClientRect(), i.isWithinBounds(i.axis.x.scrollbar.rect) ? i.onDragStart(t, "x") : i.onTrackClick(t, "x")), r && (i.axis.y.scrollbar.rect = i.axis.y.scrollbar.el.getBoundingClientRect(), i.isWithinBounds(i.axis.y.scrollbar.rect) ? i.onDragStart(t, "y") : i.onTrackClick(t, "y"))))
            }, this.drag = function(e) {
                var r, n = i.axis[i.draggedAxis].track,
                    o = n.rect[i.axis[i.draggedAxis].sizeAttr],
                    s = i.axis[i.draggedAxis].scrollbar,
                    a = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                    c = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
                e.preventDefault(), e.stopPropagation();
                var l = ((r = "y" === i.draggedAxis ? e.pageY : e.pageX) - n.rect[i.axis[i.draggedAxis].offsetAttr] - i.axis[i.draggedAxis].dragOffset) / (o - s.size) * (a - c);
                "x" === i.draggedAxis && (l = i.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l - (o + s.size) : l, l = i.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -l : l), i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = l
            }, this.onEndDrag = function(t) {
                var e = ar(i.el),
                    r = ae(i.el);
                t.preventDefault(), t.stopPropagation(), i.el.classList.remove(i.classNames.dragging), e.removeEventListener("mousemove", i.drag, !0), e.removeEventListener("mouseup", i.onEndDrag, !0), i.removePreventClickId = r.setTimeout(function() {
                    e.removeEventListener("click", i.preventClick, !0), e.removeEventListener("dblclick", i.preventClick, !0), i.removePreventClickId = null
                })
            }, this.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, !t.instances.has(this.el) && (this.recalculate = nF(this.recalculate.bind(this), 64), this.onMouseMove = nF(this.onMouseMove.bind(this), 64), this.hideScrollbars = nK(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = nK(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), t.getRtlHelpers = oS(t.getRtlHelpers), this.init())
        }
        t.getRtlHelpers = function e() {
            var r = document.createElement("div");
            r.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var i = r.firstElementChild;
            document.body.appendChild(i);
            var n = i.firstElementChild;
            i.scrollLeft = 0;
            var o = t.getOffset(i),
                s = t.getOffset(n);
            i.scrollLeft = 999;
            var a = t.getOffset(n);
            return {
                isRtlScrollingInverted: o.left !== s.left && s.left - a.left != 0,
                isRtlScrollbarInverted: o.left !== s.left
            }
        }, t.getOffset = function t(e) {
            var r = e.getBoundingClientRect(),
                i = ar(e),
                n = ae(e);
            return {
                top: r.top + (n.pageYOffset || i.documentElement.scrollTop),
                left: r.left + (n.pageXOffset || i.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function e() {
            t.instances.set(this.el, this), eV && (this.initDOM(), this.setAccessibilityAttributes(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, e.initDOM = function t() {
            var e = this;
            if (Array.prototype.filter.call(this.el.children, function(t) {
                    return t.classList.contains(e.classNames.wrapper)
                }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var r = document.createElement("div"),
                    i = document.createElement("div");
                r.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), r.appendChild(i), this.axis.x.track.el = r.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = r.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.setAccessibilityAttributes = function t() {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"), this.contentWrapperEl.setAttribute("role", "region"), this.contentWrapperEl.setAttribute("aria-label", e)
        }, e.initListeners = function t() {
            var e = this,
                r = ae(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function(t) {
                e.el.addEventListener(t, e.onPointerEvent, !0)
            }), ["touchstart", "touchend", "touchmove"].forEach(function(t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), r.addEventListener("resize", this.onWindowResize);
            var i = !1,
                n = r.ResizeObserver || se;
            this.resizeObserver = new n(function() {
                i && e.recalculate()
            }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), r.requestAnimationFrame(function() {
                i = !0
            }), this.mutationObserver = new r.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }, e.recalculate = function t() {
            var e = ae(this.el);
            this.elStyles = e.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var r = this.heightAutoObserverEl.offsetHeight <= 1,
                i = this.heightAutoObserverEl.offsetWidth <= 1,
                n = this.contentEl.offsetWidth,
                o = this.contentWrapperEl.offsetWidth,
                s = this.elStyles.overflowX,
                a = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var c = this.contentEl.scrollHeight,
                l = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = r ? "auto" : "100%", this.placeholderEl.style.width = i ? n + "px" : "auto", this.placeholderEl.style.height = c + "px";
            var u = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = l > n, this.axis.y.isOverflowing = c > u, this.axis.x.isOverflowing = "hidden" !== s && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== a && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var f = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && l > o - h, this.axis.y.isOverflowing = this.axis.y.isOverflowing && c > u - f, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function t(e) {
            if (void 0 === e && (e = "y"), !this.axis[e].isOverflowing) return 0;
            var r, i = this.contentEl[this.axis[e].scrollSizeAttr],
                n = this.axis[e].track.el[this.axis[e].offsetSizeAttr];
            return r = Math.max(~~(n / i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (r = Math.min(r, this.options.scrollbarMaxSize)), r
        }, e.positionScrollbar = function e(r) {
            if (void 0 === r && (r = "y"), this.axis[r].isOverflowing) {
                var i = this.contentWrapperEl[this.axis[r].scrollSizeAttr],
                    n = this.axis[r].track.el[this.axis[r].offsetSizeAttr],
                    o = parseInt(this.elStyles[this.axis[r].sizeAttr], 10),
                    s = this.axis[r].scrollbar,
                    a = this.contentWrapperEl[this.axis[r].scrollOffsetAttr],
                    c = (a = "x" === r && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -a : a) / (i - o),
                    l = ~~((n - s.size) * c);
                l = "x" === r && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l + (n - s.size) : l, s.el.style.transform = "x" === r ? "translate3d(" + l + "px, 0, 0)" : "translate3d(0, " + l + "px, 0)"
            }
        }, e.toggleTrackVisibility = function t(e) {
            void 0 === e && (e = "y");
            var r = this.axis[e].track.el,
                i = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible ? (r.style.visibility = "visible", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll") : (r.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden"), this.axis[e].isOverflowing ? i.style.display = "block" : i.style.display = "none"
        }, e.hideNativeScrollbar = function t() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }, e.onMouseMoveForAxis = function t(e) {
            void 0 === e && (e = "y"), this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect(), this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e), this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function t(e) {
            void 0 === e && (e = "y"), this.axis[e].track.el.classList.remove(this.classNames.hover), this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function t(e) {
            void 0 === e && (e = "y");
            var r = this.axis[e].scrollbar.el;
            this.axis[e].isVisible || (r.classList.add(this.classNames.visible), this.axis[e].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function t(e, r) {
            void 0 === r && (r = "y");
            var i = ar(this.el),
                n = ae(this.el),
                o = this.axis[r].scrollbar,
                s = "y" === r ? e.pageY : e.pageX;
            this.axis[r].dragOffset = s - o.rect[this.axis[r].offsetAttr], this.draggedAxis = r, this.el.classList.add(this.classNames.dragging), i.addEventListener("mousemove", this.drag, !0), i.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.onTrackClick = function t(e, r) {
            var i = this;
            if (void 0 === r && (r = "y"), this.options.clickOnTrack) {
                var n = ae(this.el);
                this.axis[r].scrollbar.rect = this.axis[r].scrollbar.el.getBoundingClientRect();
                var o = this.axis[r].scrollbar.rect[this.axis[r].offsetAttr],
                    s = parseInt(this.elStyles[this.axis[r].sizeAttr], 10),
                    a = this.contentWrapperEl[this.axis[r].scrollOffsetAttr],
                    c = ("y" === r ? this.mouseY - o : this.mouseX - o) < 0 ? -1 : 1,
                    l = -1 === c ? a - s : a + s;
                ! function t() {
                    var e, o; - 1 === c ? a > l && (a -= i.options.clickOnTrackSpeed, i.contentWrapperEl.scrollTo(((e = {})[i.axis[r].offsetAttr] = a, e)), n.requestAnimationFrame(t)) : a < l && (a += i.options.clickOnTrackSpeed, i.contentWrapperEl.scrollTo(((o = {})[i.axis[r].offsetAttr] = a, o)), n.requestAnimationFrame(t))
                }()
            }
        }, e.getContentElement = function t() {
            return this.contentEl
        }, e.getScrollElement = function t() {
            return this.contentWrapperEl
        }, e.getScrollbarWidth = function t() {
            try {
                if ("none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) return 0;
                return ao(this.el)
            } catch (e) {
                return ao(this.el)
            }
        }, e.removeListeners = function t() {
            var e = this,
                r = ae(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function(t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0)
            }), ["touchstart", "touchend", "touchmove"].forEach(function(t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), r.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function e() {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isWithinBounds = function t(e) {
            return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
        }, e.findChild = function t(e, r) {
            var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function(t) {
                return i.call(t, r)
            })[0]
        }, t
    }();
    return as.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, as.instances = new WeakMap, as.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(t) {
            "init" === t.getAttribute("data-simplebar") || as.instances.has(t) || new as(t, at(t.attributes))
        })
    }, as.removeObserver = function() {
        this.globalObserver.disconnect()
    }, as.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(as.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })), "complete" !== document.readyState && ("loading" === document.readyState || document.documentElement.doScroll) ? (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) : window.setTimeout(this.initDOMLoadedElements)
    }, as.handleMutations = function(t) {
        t.forEach(function(t) {
            Array.prototype.forEach.call(t.addedNodes, function(t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !as.instances.has(t) && document.documentElement.contains(t) && new as(t, at(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function(t) {
                    "init" !== t.getAttribute("data-simplebar") && !as.instances.has(t) && document.documentElement.contains(t) && new as(t, at(t.attributes))
                }))
            }), Array.prototype.forEach.call(t.removedNodes, function(t) {
                1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? as.instances.has(t) && !document.documentElement.contains(t) && as.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function(t) {
                    as.instances.has(t) && !document.documentElement.contains(t) && as.instances.get(t).unMount()
                }))
            })
        })
    }, as.getOptions = at, eV && as.initHtmlApi(), as
});