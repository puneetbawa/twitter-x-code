(function(e) {
    typeof define == "function" ? define(e) : typeof YUI == "function" ? YUI.add("es5", e) : e()
})(function() {
    function e() {}

    function M(e) {
        return e = +e, e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
    }

    function _(e) {
        var t = typeof e;
        return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string"
    }

    function D(e) {
        var t, n, r;
        if (_(e)) return e;
        n = e.valueOf;
        if (typeof n == "function") {
            t = n.call(e);
            if (_(t)) return t
        }
        r = e.toString;
        if (typeof r == "function") {
            t = r.call(e);
            if (_(t)) return t
        }
        throw new TypeError
    }
    parseInt("08") !== 8 && (parseInt = function(e) {
        var t = /^0[xX]/;
        return function(r, i) {
            return r = String(r).trim(), +i || (i = t.test(r) ? 16 : 10), e(r, i)
        }
    }(parseInt)), Function.prototype.bind || (Function.prototype.bind = function(n) {
        var r = this;
        if (typeof r != "function") throw new TypeError("Function.prototype.bind called on incompatible " + r);
        var s = i.call(arguments, 1),
            o = function() {
                if (this instanceof l) {
                    var e = r.apply(this, s.concat(i.call(arguments)));
                    return Object(e) === e ? e : this
                }
                return r.apply(n, s.concat(i.call(arguments)))
            },
            u = Math.max(0, r.length - s.length),
            a = [];
        for (var f = 0; f < u; f++) a.push("$" + f);
        var l = Function("binder", "return function(" + a.join(",") + "){return binder.apply(this,arguments)}")(o);
        return r.prototype && (e.prototype = r.prototype, l.prototype = new e, e.prototype = null), l
    });
    var t = Function.prototype.call,
        n = Array.prototype,
        r = Object.prototype,
        i = n.slice,
        s = t.bind(r.toString),
        o = t.bind(r.hasOwnProperty),
        u, a, f, l, c;
    if (c = o(r, "__defineGetter__")) u = t.bind(r.__defineGetter__), a = t.bind(r.__defineSetter__), f = t.bind(r.__lookupGetter__), l = t.bind(r.__lookupSetter__);
    if ([1, 2].splice(0).length != 2) {
        var h = Array.prototype.splice,
            p = Array.prototype.push,
            d = Array.prototype.unshift;
        ! function() {
            function e(e) {
                var t = [];
                while (e--) t.unshift(e);
                return t
            }
            var t = [],
                n;
            t.splice.bind(t, 0, 0).apply(null, e(20)), t.splice.bind(t, 0, 0).apply(null, e(26)), n = t.length, t.splice(5, 0, "XXX");
            if (n + 1 == t.length) return !0
        }() ? Array.prototype.splice = function(e, t) {
            var n, r = i.call(arguments, 2),
                s = r.length;
            if (!arguments.length) return [];
            e === void 0 && (e = 0), t === void 0 && (t = this.length - e);
            if (s > 0) {
                if (t <= 0) {
                    if (e == this.length) return p.apply(this, r), [];
                    if (e == 0) return d.apply(this, r), []
                }
                return n = i.call(this, e, e + t), r.push.apply(r, i.call(this, e + t, this.length)), r.unshift.apply(r, i.call(this, 0, e)), r.unshift(0, this.length), h.apply(this, r), n
            }
            return h.call(this, e, t)
        }: Array.prototype.splice = function(e, t) {
            return arguments.length ? h.apply(this, [e === void 0 ? 0 : e, t === void 0 ? this.length - e : t].concat(i.call(arguments, 2))) : []
        }
    }
    if ([].unshift(0) != 1) {
        var d = Array.prototype.unshift;
        Array.prototype.unshift = function() {
            return d.apply(this, arguments), this.length
        }
    }
    Array.isArray || (Array.isArray = function(t) {
        return s(t) == "[object Array]"
    });
    var v = Object("a"),
        m = v[0] != "a" || !(0 in v),
        g = !0;
    Array.prototype.forEach && Array.prototype.forEach.call("foo", function(e, t, n) {
        typeof n != "object" && (g = !1)
    });
    if (!Array.prototype.forEach || !g) Array.prototype.forEach = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = arguments[1],
            o = -1,
            u = r.length >>> 0;
        if (s(t) != "[object Function]") throw new TypeError;
        while (++o < u) o in r && t.call(i, r[o], o, n)
    };
    Array.prototype.map || (Array.prototype.map = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = Array(i),
            u = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var a = 0; a < i; a++) a in r && (o[a] = t.call(u, r[a], a, n));
        return o
    }), Array.prototype.filter || (Array.prototype.filter = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = [],
            u, a = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var f = 0; f < i; f++) f in r && (u = r[f], t.call(a, u, f, n) && o.push(u));
        return o
    }), Array.prototype.every || (Array.prototype.every = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var u = 0; u < i; u++)
            if (u in r && !t.call(o, r[u], u, n)) return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var u = 0; u < i; u++)
            if (u in r && t.call(o, r[u], u, n)) return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0;
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        if (!i && arguments.length == 1) throw new TypeError("reduce of empty array with no initial value");
        var o = 0,
            u;
        if (arguments.length >= 2) u = arguments[1];
        else
            do {
                if (o in r) {
                    u = r[o++];
                    break
                }
                if (++o >= i) throw new TypeError("reduce of empty array with no initial value")
            } while (!0);
        for (; o < i; o++) o in r && (u = t.call(void 0, u, r[o], o, n));
        return u
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(t) {
        var n = P(this),
            r = m && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0;
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        if (!i && arguments.length == 1) throw new TypeError("reduceRight of empty array with no initial value");
        var o, u = i - 1;
        if (arguments.length >= 2) o = arguments[1];
        else
            do {
                if (u in r) {
                    o = r[u--];
                    break
                }
                if (--u < 0) throw new TypeError("reduceRight of empty array with no initial value")
            } while (!0);
        if (u < 0) return o;
        do u in this && (o = t.call(void 0, o, r[u], u, n)); while (u--);
        return o
    });
    if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2) != -1) Array.prototype.indexOf = function(t) {
        var n = m && s(this) == "[object String]" ? this.split("") : P(this),
            r = n.length >>> 0;
        if (!r) return -1;
        var i = 0;
        arguments.length > 1 && (i = M(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i);
        for (; i < r; i++)
            if (i in n && n[i] === t) return i;
        return -1
    };
    if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) Array.prototype.lastIndexOf = function(t) {
        var n = m && s(this) == "[object String]" ? this.split("") : P(this),
            r = n.length >>> 0;
        if (!r) return -1;
        var i = r - 1;
        arguments.length > 1 && (i = Math.min(i, M(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);
        for (; i >= 0; i--)
            if (i in n && t === n[i]) return i;
        return -1
    };
    if (!Object.keys) {
        var y = !0,
            b = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            w = b.length;
        for (var E in {
                toString: null
            }) y = !1;
        Object.keys = function H(e) {
            if (typeof e != "object" && typeof e != "function" || e === null) throw new TypeError("Object.keys called on a non-object");
            var H = [];
            for (var t in e) o(e, t) && H.push(t);
            if (y)
                for (var n = 0, r = w; n < r; n++) {
                    var i = b[n];
                    o(e, i) && H.push(i)
                }
            return H
        }
    }
    var S = -621987552e5,
        x = "-000001";
    if (!Date.prototype.toISOString || (new Date(S)).toISOString().indexOf(x) === -1) Date.prototype.toISOString = function() {
        var t, n, r, i, s;
        if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        i = this.getUTCFullYear(), s = this.getUTCMonth(), i += Math.floor(s / 12), s = (s % 12 + 12) % 12, t = [s + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], i = (i < 0 ? "-" : i > 9999 ? "+" : "") + ("00000" + Math.abs(i)).slice(0 <= i && i <= 9999 ? -4 : -6), n = t.length;
        while (n--) r = t[n], r < 10 && (t[n] = "0" + r);
        return i + "-" + t.slice(0, 2).join("-") + "T" + t.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
    };
    var T = !1;
    try {
        T = Date.prototype.toJSON && (new Date(NaN)).toJSON() === null && (new Date(S)).toJSON().indexOf(x) !== -1 && Date.prototype.toJSON.call({
            toISOString: function() {
                return !0
            }
        })
    } catch (N) {}
    T || (Date.prototype.toJSON = function(t) {
        var n = Object(this),
            r = D(n),
            i;
        if (typeof r == "number" && !isFinite(r)) return null;
        i = n.toISOString;
        if (typeof i != "function") throw new TypeError("toISOString property is not callable");
        return i.call(n)
    });
    if (!Date.parse || "Date.parse is buggy") Date = function(e) {
        function t(n, r, i, s, o, u, a) {
            var f = arguments.length;
            if (this instanceof e) {
                var l = f == 1 && String(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, r, i, s, o, u, a) : f >= 6 ? new e(n, r, i, s, o, u) : f >= 5 ? new e(n, r, i, s, o) : f >= 4 ? new e(n, r, i, s) : f >= 3 ? new e(n, r, i) : f >= 2 ? new e(n, r) : f >= 1 ? new e(n) : new e;
                return l.constructor = t, l
            }
            return e.apply(this, arguments)
        }

        function i(e, t) {
            var n = t > 1 ? 1 : 0;
            return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
        }

        function s(t) {
            return Number(new e(1970, 0, 1, 0, 0, 0, t))
        }
        var n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
            r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
        for (var o in e) t[o] = e[o];
        return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function(r) {
            var o = n.exec(r);
            if (o) {
                var u = Number(o[1]),
                    a = Number(o[2] || 1) - 1,
                    f = Number(o[3] || 1) - 1,
                    l = Number(o[4] || 0),
                    c = Number(o[5] || 0),
                    h = Number(o[6] || 0),
                    p = Math.floor(Number(o[7] || 0) * 1e3),
                    d = Boolean(o[4] && !o[8]),
                    v = o[9] === "-" ? 1 : -1,
                    m = Number(o[10] || 0),
                    g = Number(o[11] || 0),
                    y;
                if (l < (c > 0 || h > 0 || p > 0 ? 24 : 25) && c < 60 && h < 60 && p < 1e3 && a > -1 && a < 12 && m < 24 && g < 60 && f > -1 && f < i(u, a + 1) - i(u, a)) {
                    y = ((i(u, a) + f) * 24 + l + m * v) * 60, y = ((y + c + g * v) * 60 + h) * 1e3 + p, d && (y = s(y));
                    if (-864e13 <= y && y <= 864e13) return y
                }
                return NaN
            }
            return e.parse.apply(this, arguments)
        }, t
    }(Date);
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), (!Number.prototype.toFixed || 8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) === "0" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128") && function() {
        function i(r, i) {
            var s = -1;
            while (++s < t) i += r * n[s], n[s] = i % e, i = Math.floor(i / e)
        }

        function s(r) {
            var i = t,
                s = 0;
            while (--i >= 0) s += n[i], n[i] = Math.floor(s / r), s = s % r * e
        }

        function o() {
            var e = t,
                r = "";
            while (--e >= 0)
                if (r !== "" || e === 0 || n[e] !== 0) {
                    var i = String(n[e]);
                    r === "" ? r = i : r += "0000000".slice(0, 7 - i.length) + i
                } return r
        }

        function u(e, t, n) {
            return t === 0 ? n : t % 2 === 1 ? u(e, t - 1, n * e) : u(e * e, t / 2, n)
        }

        function a(e) {
            var t = 0;
            while (e >= 4096) t += 12, e /= 4096;
            while (e >= 2) t += 1, e /= 2;
            return t
        }
        var e, t, n, r;
        e = 1e7, t = 6, n = [0, 0, 0, 0, 0, 0], Number.prototype.toFixed = function(e) {
            var t, n, r, f, l, c, h, p;
            t = Number(e), t = t !== t ? 0 : Math.floor(t);
            if (t < 0 || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
            n = Number(this);
            if (n !== n) return "NaN";
            if (n <= -1e21 || n >= 1e21) return String(n);
            r = "", n < 0 && (r = "-", n = -n), f = "0";
            if (n > 1e-21) {
                l = a(n * u(2, 69, 1)) - 69, c = l < 0 ? n * u(2, -l, 1) : n / u(2, l, 1), c *= 4503599627370496, l = 52 - l;
                if (l > 0) {
                    i(0, c), h = t;
                    while (h >= 7) i(1e7, 0), h -= 7;
                    i(u(10, h, 1), 0), h = l - 1;
                    while (h >= 23) s(1 << 23), h -= 23;
                    s(1 << h), i(1, 1), s(2), f = o()
                } else i(0, c), i(1 << -l, 0), f = o() + "0.00000000000000000000".slice(2, 2 + t)
            }
            return t > 0 ? (p = f.length, p <= t ? f = r + "0.0000000000000000000".slice(0, t - p + 2) + f : f = r + f.slice(0, p - t) + "." + f.slice(p - t)) : f = r + f, f
        }
    }();
    var C = String.prototype.split;
    "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
        var e = /()??/.exec("")[1] === void 0;
        String.prototype.split = function(t, n) {
            var r = this;
            if (t === void 0 && n === 0) return [];
            if (Object.prototype.toString.call(t) !== "[object RegExp]") return C.apply(this, arguments);
            var i = [],
                s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
                o = 0,
                t = new RegExp(t.source, s + "g"),
                u, a, f, l;
            r += "", e || (u = new RegExp("^" + t.source + "$(?!\\s)", s)), n = n === void 0 ? -1 >>> 0 : n >>> 0;
            while (a = t.exec(r)) {
                f = a.index + a[0].length;
                if (f > o) {
                    i.push(r.slice(o, a.index)), !e && a.length > 1 && a[0].replace(u, function() {
                        for (var e = 1; e < arguments.length - 2; e++) arguments[e] === void 0 && (a[e] = void 0)
                    }), a.length > 1 && a.index < r.length && Array.prototype.push.apply(i, a.slice(1)), l = a[0].length, o = f;
                    if (i.length >= n) break
                }
                t.lastIndex === a.index && t.lastIndex++
            }
            return o === r.length ? (l || !t.test("")) && i.push("") : i.push(r.slice(o)), i.length > n ? i.slice(0, n) : i
        }
    }() : "0".split(void 0, 0).length && (String.prototype.split = function(e, t) {
        return e === void 0 && t === 0 ? [] : C.apply(this, arguments)
    });
    if ("".substr && "0b".substr(-1) !== "b") {
        var k = String.prototype.substr;
        String.prototype.substr = function(e, t) {
            return k.call(this, e < 0 ? (e = this.length + e) < 0 ? 0 : e : e, t)
        }
    }
    var L = "	\n\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029ï»¿";
    if (!String.prototype.trim || L.trim()) {
        L = "[" + L + "]";
        var A = new RegExp("^" + L + L + "*"),
            O = new RegExp(L + L + "*$");
        String.prototype.trim = function() {
            if (this === void 0 || this === null) throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(A, "").replace(O, "")
        }
    }
    var P = function(e) {
        if (e == null) throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }
}); /*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function y(e) {
        var t = e.length,
            n = p.type(e);
        return "function" === n || p.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function x(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (S.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }

    function O(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function D(e) {
        var t = _[e] = {};
        return p.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
    }

    function B() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), p.ready())
    }

    function R(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(q, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                } catch (i) {}
                p.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function U(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function z(e, t, r, i) {
        if (p.acceptData(e)) {
            var s, o, u = p.expando,
                a = e.nodeType,
                f = a ? p.cache : e,
                l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || void 0 !== r || "string" != typeof t) return l || (l = a ? e[u] = n.pop() || p.guid++ : u), f[l] || (f[l] = a ? {} : {
                toJSON: p.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t)), o = f[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[p.camelCase(t)] = r), "string" == typeof t ? (s = o[t], null == s && (s = o[p.camelCase(t)])) : s = o, s
        }
    }

    function W(e, t, n) {
        if (p.acceptData(e)) {
            var r, i, s = e.nodeType,
                o = s ? p.cache : e,
                u = s ? e[p.expando] : p.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !U(r) : !p.isEmptyObject(r)) return
                }(n || (delete o[u].data, U(o[u]))) && (s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }

    function tt() {
        return !0
    }

    function nt() {
        return !1
    }

    function rt() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function it(e) {
        var t = st.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Et(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }

    function St(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }

    function xt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Tt(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function Nt(e) {
        var t = mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ct(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }

    function kt(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n, r, i, s = p._data(e),
                o = p._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) p.event.add(t, n, u[n][r])
            }
            o.data && (o.data = p.extend({}, o.data))
        }
    }

    function Lt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                i = p._data(t);
                for (r in i.events) p.removeEvent(t, r, i.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (Tt(t).text = e.text, Nt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && K.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function Mt(t, n) {
        var r = p(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
        return r.detach(), i
    }

    function _t(e) {
        var t = N,
            n = Ot[e];
        return n || (n = Mt(e, t), "none" !== n && n || (At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach()), Ot[e] = n), n
    }

    function Ft(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $t(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Vt.length;
        while (i--)
            if (t = Vt[i] + n, t in e) return t;
        return r
    }

    function Jt(e, t) {
        for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++) r = e[o], r.style && (s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function Kt(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Qt(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += p.css(e, n + V[s], !0, i)), r ? ("content" === n && (o -= p.css(e, "padding" + V[s], !0, i)), "margin" !== n && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e, "padding" + V[s], !0, i), "padding" !== n && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
        return o
    }

    function Gt(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ht(e),
            o = c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Bt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Pt.test(i)) return i;
            r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }

    function un() {
        return setTimeout(function() {
            Zt = void 0
        }), Zt = p.now()
    }

    function an(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = V[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function fn(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function ln(e, t, n) {
        var r, i, s, o, u, a, f, l, h = this,
            d = {},
            v = e.style,
            m = e.nodeType && $(e),
            g = p._data(e, "fxshow");
        n.queue || (u = p._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = _t(e.nodeName), "none" === f && (f = l), "inline" === f && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== l ? v.zoom = 1 : v.display = "inline-block")), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
            v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tn.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    m = !0
                }
                d[r] = g && g[r] || p.style(e, r)
            } if (!p.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(function() {
                p(e).hide()
            }), h.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in d) p.style(e, t, d[t])
            });
            for (r in d) o = fn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function cn(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function hn(e, t, n) {
        var r, i, s = 0,
            o = sn.length,
            u = p.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                for (var t = Zt || un(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || un(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (cn(l, f.opts.specialEasing); o > s; s++)
            if (r = sn[s].call(f, e, l, f.opts)) return r;
        return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function In(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(M) || [];
            if (p.isFunction(n))
                while (r = s[i++]) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, p.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f), o(f), !1)
            }), a
        }
        var i = {},
            s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Rn(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e
    }

    function Un(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while ("*" === a[0]) a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                } if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }

    function zn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    } if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Kn(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t, function(t, i) {
            n || Xn.test(e) ? r(e, i) : Kn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== p.type(t)) r(e, t);
        else
            for (i in t) Kn(e + "[" + i + "]", t[i], n, r)
    }

    function Zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function er() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function sr(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {},
        a = u.toString,
        f = u.hasOwnProperty,
        l = "".trim,
        c = {},
        h = "1.11.0",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || p.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
            if (null != (i = arguments[u]))
                for (r in i) e = o[r], n = i[r], o !== n && (f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : void 0 !== n && (o[r] = n));
        return o
    }, p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (c.ownLast)
                for (t in e) return f.call(e, t);
            for (t in e);
            return void 0 === t || f.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = y(e);
            if (n) {
                if (o) {
                    for (; s > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (o) {
                for (; s > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: l && !l.call("ï»¿Â ") ? function(e) {
            return null == e ? "" : l.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o) return o.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (n > r) e[i++] = t[r++];
            if (n !== n)
                while (void 0 !== t[r]) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, s = 0,
                o = e.length,
                u = y(e),
                a = [];
            if (u)
                for (; o > s; s++) r = t(e[s], s, n), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            return "string" == typeof t && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : void 0
        },
        now: function() {
            return +(new Date)
        },
        support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function rt(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            if ((t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(u), !o || !o.parentNode) return r;
                            if (o.id === u) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r
                    } else {
                        if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(u)), r
                    } if (n.qsa && (!d || !d.test(e))) {
                    if (m = v = y, w = t, E = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length;
                        while (f--) h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t, E = h.join(",")
                    }
                    if (E) try {
                        return _.apply(r, w.querySelectorAll(E)), r
                    } catch (S) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }

        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function st(e) {
            return e[y] = !0, e
        }

        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ut(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function at(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }

        function pt() {}

        function dt(e, t) {
            var n, i, s, o, u, a, f, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                (!n || (i = U.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in r.filter) !(i = $[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }

        function vt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function mt(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (1 === t.nodeType || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [w, s];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || i) {
                            if (a = t[y] || (t[y] = {}), (u = a[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function yt(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : yt(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = yt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function wt(e) {
            for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], f = o ? 1 : 0, l = mt(function(e) {
                    return e === t
                }, a, !0), c = mt(function(e) {
                    return P.call(t, e) > -1
                }, a, !0), h = [function(e, n, r) {
                    return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }]; s > f; f++)
                if (n = r.relative[e[f].type]) h = [mt(gt(h), n)];
                else {
                    if (n = r.filter[e[f].type].apply(null, e[f].matches), n[y]) {
                        for (i = ++f; s > i; i++)
                            if (r.relative[e[i].type]) break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: " " === e[f - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, i > f && wt(e.slice(f, i)), s > i && wt(e = e.slice(i)), s > i && vt(e))
                    }
                    h.push(n)
                } return gt(h)
        }

        function Et(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, a, f, l) {
                    var h, p, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = u,
                        E = s || i && r.find.TAG("*", l),
                        S = w += null == b ? 1 : Math.random() || .1,
                        x = E.length;
                    for (l && (u = o !== c && o); m !== x && null != (h = E[m]); m++) {
                        if (i && h) {
                            p = 0;
                            while (d = e[p++])
                                if (d(h, o, a)) {
                                    f.push(h);
                                    break
                                } l && (w = S)
                        }
                        n && ((h = !d && h) && v--, s && g.push(h))
                    }
                    if (v += m, n && m !== v) {
                        p = 0;
                        while (d = t[p++]) d(g, y, o, a);
                        if (s) {
                            if (v > 0)
                                while (m--) g[m] || y[m] || (y[m] = O.call(f));
                            y = yt(y)
                        }
                        _.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                    }
                    return l && (w = S, u = b), g
                };
            return n ? st(s) : s
        }

        function St(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) rt(e, t[r], n);
            return n
        }

        function xt(e, t, i, s) {
            var u, a, f, l, c, h = dt(e);
            if (!s && 1 === h.length) {
                if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (f = a[0]).type && n.getById && 9 === t.nodeType && p && r.relative[a[1].type]) {
                    if (t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0], !t) return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    if (f = a[u], r.relative[l = f.type]) break;
                    if ((c = r.find[l]) && (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t))) {
                        if (a.splice(u, 1), e = s.length && vt(a), !e) return _.apply(i, s), i;
                        break
                    }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = it(),
            x = it(),
            T = it(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            },
            C = "undefined",
            k = 1 << 31,
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = A.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = j.replace("w", "w#"),
            I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
            q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes), A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {}, s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, l = rt.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : b,
                o = i.defaultView;
            return i !== c && 9 === i.nodeType && i.documentElement ? (c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })), n.attributes = ot(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = ot(function(e) {
                return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== C ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== C && p ? t.getElementsByClassName(e) : void 0
            }, v = [], d = [], (n.qsa = Q.test(i.querySelectorAll)) && (ot(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    l = [t];
                if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o) return at(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) l.unshift(n);
                while (u[r] === l[r]) r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }, i) : c
        }, rt.matches = function(e, t) {
            return rt(e, null, null, t)
        }, rt.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']"), !(!n.matchesSelector || !p || v && v.test(t) || d && d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        }, rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
            return void 0 !== s ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, rt.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            if (f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N), f) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return a = null, e
        }, i = rt.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && rt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && b) {
                                l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (b && ((c[y] || (c[y] = {}))[e] = [w, h]), c === t)) break;
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = P.call(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [],
                        n = [],
                        r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ct(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ft(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)), n = t.length;
                while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !!f, l(), n.sortDetached = ot(function(e) {
            return 1 & e.compareDocumentPosition(c.createElement("div"))
        }), ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ot(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ut("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ot(function(e) {
            return null == e.getAttribute("disabled")
        }) || ut(H, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), rt
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = p.expr.match.needsContext,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^.[^:#\[\.,]*$/;
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (p.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, N = e.document,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = p.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), E.test(n[1]) && p.isPlainObject(t))
                        for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = N.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return T.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = N, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        };
    k.prototype = p.fn, T = p(N);
    var L = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n))) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (p.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, s = [], o = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    } return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), this.length > 1 && (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M = /\S+/g,
        _ = {};
    p.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || D(e) : p.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            f = function(c) {
                for (n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0; u && i > s; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    } t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        ! function s(t) {
                            p.each(t, function(t, n) {
                                var r = p.type(n);
                                "function" === r ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
                            })
                        }(arguments), t ? i = u.length : n && (o = r, f(n))
                    }
                    return this
                },
                remove: function() {
                    return u && p.each(arguments, function(e, n) {
                        var r;
                        while ((r = p.inArray(n, u, r)) > -1) u.splice(r, 1), t && (i >= r && i--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, u) > -1 : !!u && !!u.length
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = a = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = void 0, n || l.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    return !u || r && !a || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var o = p.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, p.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = 1 !== i || e && p.isFunction(e.promise) ? i : 0,
                o = 1 === s ? e : p.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                },
                a, f, l;
            if (i > 1)
                for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s;
            return s || o.resolveWith(l, n), o.promise()
        }
    });
    var P;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--p.readyWait : !p.isReady) {
                if (!N.body) return setTimeout(p.ready);
                p.isReady = !0, e !== !0 && --p.readyWait > 0 || (P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready"))
            }
        }
    }), p.ready.promise = function(t) {
        if (!P)
            if (P = p.Deferred(), "complete" === N.readyState) setTimeout(p.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", B, !1), e.addEventListener("load", B, !1);
        else {
            N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
            var n = !1;
            try {
                n = null == e.frameElement && N.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    H(), p.ready()
                }
            }()
        }
        return P.promise(t)
    };
    var j = "undefined",
        F;
    for (F in p(c)) break;
    c.ownLast = "0" !== F, c.inlineBlockNeedsLayout = !1, p(function() {
            var e, t, n = N.getElementsByTagName("body")[0];
            n && (e = N.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (c.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }),
        function() {
            var e = N.createElement("div");
            if (null == c.deleteExpando) {
                c.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    c.deleteExpando = !1
                }
            }
            e = null
        }(), p.acceptData = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (i = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                    n = o.length;
                    while (n--) r = o[n].name, 0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
                    p._data(s, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? R(s, e, p.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = p._queueHooks(e, t),
                o = function() {
                    p.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"), p._removeData(e, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = p.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = ["Top", "Right", "Bottom", "Left"],
        $ = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        },
        J = p.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = null == n;
            if ("object" === p.type(n)) {
                i = !0;
                for (u in n) p.access(e, t, u, n[u], !0, s, o)
            } else if (void 0 !== r && (i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                    return f.call(p(e), n)
                })), t))
                for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        K = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = N.createDocumentFragment(),
            t = N.createElement("div"),
            n = N.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                c.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                c.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        Y = /^(?:mouse|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
            if (g) {
                n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                    return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(l.elem, arguments)
                }, l.elem = e), t = (t || "").match(M) || [""], u = t.length;
                while (u--) s = et.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort(), d && (f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                }, a), (h = o[d]) || (h = o[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, r, v, l) !== !1 || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
            if (g && (l = g.events)) {
                t = (t || "").match(M) || [""], f = t.length;
                while (f--)
                    if (u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort(), d) {
                        c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], !i && m !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, v, g.handle) !== !1 || p.removeEvent(e, d, g.handle), delete l[d])
                    } else
                        for (d in l) p.event.remove(e, d + t[f], n, r, !0);
                p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, h, d = [r || N],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = c = r = r || N, 3 !== r.nodeType && 8 !== r.nodeType && !Z.test(v + p.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !p.isWindow(r)) {
                    for (a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode); u; u = u.parentNode) d.push(u), c = u;
                    c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
                }
                h = 0;
                while ((u = d[h++]) && !t.isPropagationStopped()) t.type = h > 1 ? a : l.bindType || v, s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && p.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
                if (t.type = v, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o && r[v] && !p.isWindow(r)) {
                    c = r[o], c && (r[o] = null), p.event.triggered = v;
                    try {
                        r[v]()
                    } catch (g) {}
                    p.event.triggered = void 0, c && (r[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, s, o, u = [],
                a = r.call(arguments),
                f = (p._data(this, "events") || {})[e.type] || [],
                l = p.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = p.event.handlers.call(this, e, f), t = 0;
                while ((s = u[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a != this; a = a.parentNode || this)
                    if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; u > s; s++) r = t[s], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    } return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new p.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== rt() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === rt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = tt, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = tt, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !p.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.remove(this, "._submit")
        }
    }), c.changeBubbles || (p.event.special.change = {
        setup: function() {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t);
                i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = nt;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return p().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = nt), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ot = / jQuery\d+="(?:null|\d+)"/g,
        ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
        at = /^\s+/,
        ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lt = /<([\w:]+)/,
        ct = /<tbody/i,
        ht = /<|&#?\w+;/,
        pt = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vt = /^$|\/(?:java|ecma)script/i,
        mt = /^true\/(.*)/,
        gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        bt = it(N),
        wt = bt.appendChild(N.createElement("div"));
    yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, p.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML, wt.removeChild(s = wt.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (r = Et(s), u = Et(e), o = 0; null != (i = u[o]); ++o) r[o] && Lt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || Et(e), r = r || Et(s), o = 0; null != (i = u[o]); o++) kt(i, r[o]);
                else kt(e, s);
            return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, s, o, u, a, f, l, h = e.length, d = it(t), v = [], m = 0; h > m; m++)
                if (s = e[m], s || 0 === s)
                    if ("object" === p.type(s)) p.merge(v, s.nodeType ? [s] : s);
                    else if (ht.test(s)) {
                u = u || d.appendChild(t.createElement("div")), a = (lt.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0])), !c.tbody) {
                    s = "table" !== a || ct.test(s) ? "<table>" !== l[1] || ct.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                p.merge(v, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = d.lastChild
            } else v.push(t.createTextNode(s));
            u && d.removeChild(u), c.appendChecked || p.grep(Et(v, "input"), St), m = 0;
            while (s = v[m++])
                if ((!r || -1 === p.inArray(s, r)) && (o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u), n)) {
                    i = 0;
                    while (s = u[i++]) vt.test(s.type || "") && n.push(s)
                } return u = null, d
        },
        cleanData: function(e, t) {
            for (var r, i, s, o, u = 0, a = p.expando, f = p.cache, l = c.deleteExpando, h = p.event.special; null != (r = e[u]); u++)
                if ((t || p.acceptData(r)) && (s = r[a], o = s && f[s])) {
                    if (o.events)
                        for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                    f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null, n.push(s))
                }
        }
    }), p.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? p.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || p.cleanData(Et(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && p.cleanData(Et(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                if (!("string" != typeof e || pt.test(e) || !c.htmlSerialize && ut.test(e) || !c.leadingWhitespace && at.test(e) || yt[(lt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ft, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (p.cleanData(Et(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(Et(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0,
                l = this.length,
                h = this,
                d = l - 1,
                v = e[0],
                m = p.isFunction(v);
            if (m || l > 1 && "string" == typeof v && !c.checkClone && dt.test(v)) return this.each(function(n) {
                var r = h.eq(n);
                m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = p.map(Et(a, "script"), Tt), s = o.length; l > f; f++) r = a, f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))), t.call(this[f], r, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, p.map(o, Nt), f = 0; s > f; f++) r = o[f], vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, "")));
                a = n = null
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = p(e), u = o.length - 1; u >= r; r++) n = r === u ? this : this.clone(!0), p(o[r])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var At, Ot = {};
    ! function() {
        var e, t, n = N.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(e.style.opacity), c.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, c.shrinkWrapBlocks = function() {
            var e, n, i, s;
            if (null == t) {
                if (e = N.getElementsByTagName("body")[0], !e) return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = N.createElement("div"), i = N.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== j && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
            }
            return t
        }
    }();
    var Dt = /^margin/,
        Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ht, Bt, jt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ht = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 === o ? o : o + ""
    }) : N.documentElement.currentStyle && (Ht = function(e) {
        return e.currentStyle
    }, Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Ht(e), o = n ? n[t] : void 0, null == o && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
    }), ! function() {
        function l() {
            var t, n, u = N.getElementsByTagName("body")[0];
            u && (t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", p.swap(u, null != u.style.zoom ? {
                zoom: 1
            } : {}, function() {
                r = 4 === n.offsetWidth
            }), i = !0, s = !1, o = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(n, null) || {}).top, i = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), u.removeChild(t), n = u = null)
        }
        var t, n, r, i, s, o, u = N.createElement("div"),
            a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = u.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(t.style.opacity), c.cssFloat = !!t.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === u.style.backgroundClip, t = u = null, p.extend(c, {
            reliableHiddenOffsets: function() {
                if (null != n) return n;
                var e, t, r, i = N.createElement("div"),
                    s = N.getElementsByTagName("body")[0];
                if (s) return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText = a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", n = r && 0 === t[0].offsetHeight, s.removeChild(e), i = s = null, n
            },
            boxSizing: function() {
                return null == r && l(), r
            },
            boxSizingReliable: function() {
                return null == i && l(), i
            },
            pixelPosition: function() {
                return null == s && l(), s
            },
            reliableMarginRight: function() {
                var t, n, r, i;
                if (null == o && e.getComputedStyle) {
                    if (t = N.getElementsByTagName("body")[0], !t) return;
                    n = N.createElement("div"), r = N.createElement("div"), n.style.cssText = a, t.appendChild(n).appendChild(r), i = r.appendChild(N.createElement("div")), i.style.cssText = r.style.cssText = f, i.style.marginRight = i.style.width = "0", r.style.width = "1px", o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                }
                return o
            }
        })
    }(), p.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var It = /alpha\([^)]*\)/i,
        qt = /opacity\s*=\s*([^)]*)/,
        Rt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + X + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + X + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Vt = ["Webkit", "O", "Moz", "ms"];
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, u = p.camelCase(t),
                    a = e.style;
                if (t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
                if (s = typeof n, "string" === s && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || p.cssNumber[u] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                    a[t] = "", a[t] = n
                } catch (f) {}
            }
        },
        css: function(e, t, n, r) {
            var i, s, o, u = p.camelCase(t);
            return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = Bt(e, t, r)), "normal" === s && t in Xt && (s = Xt[t]), "" === n || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Ht(e);
                return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(s.replace(It, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = It.test(s) ? s.replace(It, i) : s + " " + i)
        }
    }), p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        }, Bt, [e, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Dt.test(e) || (p.cssHooks[e + t].set = Kt)
    }), p.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (p.isArray(t)) {
                    for (r = Ht(e), i = t.length; i > o; o++) s[t[o]] = p.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = Yt.prototype.init, p.fx.step = {};
    var Zt, en, tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        sn = [ln],
        on = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nn.exec(t),
                    s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                    o = (p.cssNumber[e] || "px" !== s && +r) && nn.exec(p.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, p.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    p.Animation = p.extend(hn, {
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? sn.unshift(e) : sn.push(e)
            }
        }), p.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
            }, r
        }, p.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter($).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = p.isEmptyObject(e),
                    s = p.speed(t, n, r),
                    o = function() {
                        var t = hn(this, p.extend({}, e), s);
                        (i || p._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        s = p.timers,
                        o = p._data(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                    (t || !n) && p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = p._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = p.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
            }
        }), p.each({
            slideDown: an("show"),
            slideUp: an("hide"),
            slideToggle: an("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            p.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), p.timers = [], p.fx.tick = function() {
            var e, t = p.timers,
                n = 0;
            for (Zt = p.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || p.fx.stop(), Zt = void 0
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            en || (en = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            clearInterval(en), en = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(e, t) {
            return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i = N.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = N.createElement("select"), r = n.appendChild(N.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", c.getSetAttribute = "t" !== i.className, c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = "/a" === e.getAttribute("href"), c.checkOn = !!t.value, c.optSelected = r.selected, c.enctype = !!N.createElement("form").enctype, n.disabled = !0, c.optDisabled = !r.disabled, t = N.createElement("input"), t.setAttribute("value", ""), c.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), c.radioValue = "t" === t.value, e = t = n = r = i = null
        }();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (arguments.length) return r = p.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            });
            if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pn, "") : null == n ? "" : n)
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), s) return t;
                            o.push(t)
                        } return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = p.makeArray(t),
                        o = i.length;
                    while (o--)
                        if (r = i[o], p.inArray(p.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        }, c.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dn, vn, mn = p.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        yn = c.getSetAttribute,
        bn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === j ? p.prop(e, t, n) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = p.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(M);
            if (s && 1 === e.nodeType)
                while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(yn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), vn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mn[t] || p.find.attr;
        mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
            var i, s;
            return r || (s = mn[t], mn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, mn[t] = s), i
        } : function(e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), bn && yn || (p.attrHooks.value = {
        set: function(e, t, n) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : dn && dn.set(e, t, n)
        }
    }), yn || (dn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, mn.id = mn.name = mn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: dn.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            dn.set(e, "" === t ? !1 : t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Sn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ")) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = p.trim(r), n.className !== o && (n.className = o)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        o = e ? p.trim(r) : "", n.className !== o && (n.className = o)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n) {
                    var t, r = 0,
                        i = p(this),
                        s = e.match(M) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else(n === j || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xn = p.now(),
        Tn = /\?/,
        Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var Cn, kn, Ln = /#.*$/,
        An = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Dn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hn = {},
        Bn = {},
        jn = "*/".concat("*");
    try {
        kn = location.href
    } catch (Fn) {
        kn = N.createElement("a"), kn.href = "", kn = kn.href
    }
    Cn = Pn.exec(kn.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kn,
            type: "GET",
            isLocal: Mn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                2 !== b && (b = 2, o && clearTimeout(o), a = void 0, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && 300 > e || 304 === e, n && (w = Un(l, E, n)), w = zn(l, w, E, f), f ? (l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (p.etag[i] = S)), 204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = void 0, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
                c = l.context || l,
                h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
                d = p.Deferred(),
                v = p.Callbacks("once memory"),
                m = l.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!f) {
                                f = {};
                                while (t = On.exec(s)) f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (l.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return a && a.abort(t), x(0, t), this
                    }
                };
            if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""], null == l.crossDomain && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = p.param(l.data, l.traditional)), qn(Hn, l, t, E), 2 === b) return E;
            u = l.global, u && 0 === p.active++ && p.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !_n.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)), l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && 2 !== b) {
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) E[r](l[r]);
                if (a = qn(Bn, l, t, E)) {
                    E.readyState = 1, u && h.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1, a.send(g, x)
                    } catch (S) {
                        if (!(2 > b)) throw S;
                        x(-1, S)
                    }
                } else x(-1, "No Transport");
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ? function(t) {
                p(this).wrapInner(e.call(this, t))
            } : function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Wn = /%20/g,
        Xn = /\[\]$/,
        Vn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    p.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Kn(n, e[n], t, i);
        return r.join("&").replace(Wn, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
    } : Zn;
    var Qn = 0,
        Gn = {},
        Yn = p.ajaxSettings.xhr();
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in Gn) Gn[e](void 0, !0)
    }), c.cors = !!Yn && "withCredentials" in Yn, Yn = c.ajax = !!Yn, Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Qn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, i) {
                        var u, a, f;
                        if (t && (i || 4 === s.readyState))
                            if (delete Gn[o], t = void 0, s.onreadystatechange = p.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                f = {}, u = s.status, "string" == typeof s.responseText && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
                            } f && r(u, a, f, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || p.expando + "_" + xn++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || p.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && p.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || N;
        var r = E.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var rr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    p.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = p.css(e, "position"),
                c = p(e),
                h = {};
            "static" === l && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f = ("absolute" === l || "fixed" === l) && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, u)), null != t.top && (h.top = t.top - u.top + o), null != t.left && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            if (s) return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()), n = sr(s), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(r, "marginTop", !0),
                    left: t.left - n.left - p.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ir;
                while (e && !p.nodeName(e, "html") && "static" === p.css(e, "position")) e = e.offsetParent;
                return e || ir
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this, function(e, r, i) {
                var s = sr(e);
                return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
            return n ? (n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            p.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return J(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, o) : p.style(t, n, r, o)
                }, t, s ? r : void 0, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var or = e.jQuery,
        ur = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
});
$(".TopNav-languageSelector").change(function(e) {
    window.location = $(e.target).val()
});
$(".js-userDropdown").each(function(e, t) {
    var n = $(".js-logoutLink button"),
        r = $(".js-logoutForm");
    n.on("click", function(e) {
        e.preventDefault(), r.submit()
    })
}), $(".MobileHoverEffect").bind("click", function(e) {
    var t = $(e.target);
    $(".Dropdown-menu").has(t).length || (e.preventDefault(), $(this).toggleClass("hover_effect"))
}); // Attach a location.reload() to all "retry" links.
