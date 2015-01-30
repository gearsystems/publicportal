if (!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (hb.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return {}
            }}), this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {
                }
                sb.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }
    function u(a) {
        var b = Z, c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }}
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
            if (b = Xb[e] + c, b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Rb(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $b.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a,props: _.extend({}, b),opts: _.extend(!0, {specialEasing: {}}, c),originalProperties: b,originalOptions: c,startTime: Yb || D(),duration: c.duration,tweens: [],createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts))
                return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {elem: a,anim: j,queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {state: "parsererror",error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return {state: "success",data: b}
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.3", _ = function(a, b) {
        return new _.fn.init(a, b)
    }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bb = /^-ms-/, cb = /-([\da-z])/gi, db = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {jquery: $,constructor: _,selector: "",length: 0,toArray: function() {
            return R.call(this)
        },get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },each: function(a, b) {
            return _.each(this, a, b)
        },map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: T,sort: Q.sort,splice: Q.splice}, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(a) {
            throw new Error(a)
        },noop: function() {
        },isFunction: function(a) {
            return "function" === _.type(a)
        },isArray: Array.isArray,isWindow: function(a) {
            return null != a && a === a.window
        },isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1)
                        break;
            return a
        },trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a
        },grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },guid: 1,proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },now: Date.now,support: Y}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        }finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0, a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            }finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {
        }
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return ab(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, ab = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cb = "[\\x20\\t\\r\\n\\f]", db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", eb = db.replace("w", "w#"), fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]", gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)", hb = new RegExp(cb + "+", "g"), ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"), jb = new RegExp("^" + cb + "*," + cb + "*"), kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"), lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"), mb = new RegExp(gb), nb = new RegExp("^" + eb + "$"), ob = {ID: new RegExp("^#(" + db + ")"),CLASS: new RegExp("^\\.(" + db + ")"),TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),ATTR: new RegExp("^" + fb),PSEUDO: new RegExp("^" + gb),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),bool: new RegExp("^(?:" + bb + ")$", "i"),needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")}, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, xb = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (yb) {
            $ = {apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }}
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", gb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (c = a; c = c.parentNode; )
                    i.unshift(c);
                for (c = b; c = c.parentNode; )
                    j.unshift(c);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }, w = b.selectors = {cacheLength: 50,createPseudo: d,match: ob,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }},filter: {TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); )
                                    ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = ab(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }},pseudos: {not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),contains: d(function(a) {
                    return a = a.replace(vb, wb), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },root: function(a) {
                    return a === H
                },focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },enabled: function(a) {
                    return a.disabled === !1
                },disabled: function(a) {
                    return a.disabled === !0
                },checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(a) {
                    return !w.pseudos.empty(a)
                },header: function(a) {
                    return qb.test(a.nodeName)
                },input: function(a) {
                    return pb.test(a.nodeName)
                },button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },first: j(function() {
                    return [0]
                }),last: j(function(a, b) {
                    return [b - 1]
                }),eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })}}, w.pseudos.nth = w.pseudos.eq;
        for (u in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            w.pseudos[u] = h(u);
        for (u in {submit: !0,reset: !0})
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({value: d,type: e[0].replace(ib, " ")}), h = h.slice(d.length));
                for (g in w.filter)
                    !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d,type: g,matches: e}), h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; )
                    f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b)
                        return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a)
                            return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(bb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext, gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }});
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b)
                return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), gb.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/, mb = {children: !0,contents: !0,next: !0,prev: !0};
    _.extend({dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && _(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }}), _.fn.extend({has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a]))
                        return !0
            })
        },closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }}), _.each({parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },parents: function(a) {
            return _.dir(a, "parentNode")
        },parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },next: function(a) {
            return e(a, "nextSibling")
        },prev: function(a) {
            return e(a, "previousSibling")
        },nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },children: function(a) {
            return _.sibling(a.firstChild)
        },contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }}, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var nb = /\S+/g, ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), d ? g = i.length : b && (e = c, k(b))
                }
                return this
            },remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; )
                        i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                }), this
            },has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            },empty: function() {
                return i = [], g = 0, this
            },disable: function() {
                return i = j = b = void 0, this
            },disabled: function() {
                return !i
            },lock: function() {
                return j = void 0, b || l.disable(), this
            },locked: function() {
                return !j
            },fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
            },fire: function() {
                return l.fireWith(this, arguments), this
            },fired: function() {
                return !!c
            }};
        return l
    }, _.extend({Deferred: function(a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                },always: function() {
                    return e.done(arguments).fail(arguments), this
                },then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },promise: function(a) {
                    return null != a ? _.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
                    f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }});
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({isReady: !1,readyWait: 1,holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }}), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {key: function(a) {
            if (!h.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (_.isEmptyObject(f))
                _.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
                for (; c--; )
                    delete g[d[c]]
            }
        },hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }};
    var rb = new h, sb = new h, tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ub = /([A-Z])/g;
    _.extend({hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },data: function(a, b, c) {
            return sb.access(a, b, c)
        },removeData: function(a, b) {
            sb.remove(a, b)
        },_data: function(a, b, c) {
            return rb.access(a, b, c)
        },_removeData: function(a, b) {
            rb.remove(a, b)
        }}), _.fn.extend({data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c)
                        return c;
                    if (c = sb.get(f, d), void 0 !== c)
                        return c;
                    if (c = i(f, d, void 0), void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = sb.get(this, d);
                        sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }}), _.extend({queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },_queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })})
        }}), _.fn.extend({queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; )
                c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }});
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wb = ["Top", "Right", "Bottom", "Left"], xb = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }, yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/, Bb = /^(?:mouse|pointer|contextmenu)|click/, Cb = /^(?:focusinfocus|focusoutblur)$/, Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {global: {},add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(nb) || [""], j = b.length; j--; )
                    h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({type: n,origType: p,data: d,handler: c,guid: c.guid,selector: e,needsContext: e && _.expr.match.needsContext.test(e),namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""], j = b.length; j--; )
                    if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i)
                            _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
            }
        },trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                        m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i,handlers: d})
                    }
            return h < b.length && g.push({elem: this,handlers: b.slice(h)}), g
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }},fix: function(a) {
            if (a[_.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; )
                c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },special: {load: {noBubble: !0},focus: {trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },_default: function(a) {
                    return _.nodeName(a.target, "a")
                }},beforeunload: {postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }}},simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {isDefaultPrevented: k,isPropagationStopped: k,isImmediatePropagationStopped: k,preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }}, _.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(a, b) {
        _.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }}
    }), Y.focusinBubbles || _.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {setup: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
            },teardown: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
            }}
    }), _.fn.extend({on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = k;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }});
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fb = /<([\w:]+)/, Gb = /<|&#?\w+;/, Hb = /<(?:script|style|link)/i, Ib = /checked\s*(?:[^=]|=\s*.checked.)/i, Jb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mb = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
                    s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
                        q(f[d], g[d]);
                else
                    q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e))
                        _.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--; )
                            f = f.lastChild;
                        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; )
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++]; )
                        Jb.test(e.type || "") && c.push(e);
            return k
        },cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }}), _.fn.extend({text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },detach: function(a) {
            return this.remove(a, !0)
        },domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
                    g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)
                        g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }}), _.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"), Rb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {pixelPosition: function() {
                return b(), c
            },boxSizingReliable: function() {
                return null == d && b(), d
            },reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }}))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/, Tb = new RegExp("^(" + vb + ")(.*)$", "i"), Ub = new RegExp("^([+-])=(" + vb + ")", "i"), Vb = {position: "absolute",visibility: "hidden",display: "block"}, Wb = {letterSpacing: "0",fontWeight: "400"}, Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void (null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }}), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }}
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        _.cssHooks[a + b] = {expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, Pb.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++)
                        f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },show: function() {
            return B(this, !0)
        },hide: function() {
            return B(this)
        },toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }}), _.Tween = C, C.prototype = {constructor: C,init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }}, C.prototype.init.prototype = C.prototype, C.propHooks = {_default: {get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, _.easing = {linear: function(a) {
            return a
        },swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }}, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"), ac = /queueHooks$/, bc = [G], cc = {"*": [function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = _b.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do
                        h = h || ".5", g /= h, _.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]};
    _.Animation = _.extend(I, {tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
        },prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }}), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {complete: c || !c && b || _.isFunction(a) && a,duration: a,easing: c && b || b && !_.isFunction(b) && b};
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        },animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = rb.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({slideDown: E("show"),slideUp: E("hide"),slideToggle: E("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Zb), Zb = null
    }, _.fx.speeds = {slow: 600,fast: 200,_default: 400}, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }}), _.extend({attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
        },removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },attrHooks: {type: {set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}}}), ec = {set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }}, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }}), _.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },propHooks: {tabIndex: {get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }}}}), Y.optSelected || (_.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            })
        },hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }});
    var ic = /\r/g;
    _.fn.extend({val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)) : void 0
        }}), _.extend({valHooks: {option: {get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }},select: {get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                },set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
                        d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }}}}), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }}, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },unbind: function(a, b) {
            return this.off(a, null, b)
        },delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var jc = _.now(), kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lc = /#.*$/, mc = /([?&])_=[^&]*/, nc = /^(.*?):[ \t]*([^\r\n]*)$/gm, oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pc = /^(?:GET|HEAD)$/, qc = /^\/\//, rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sc = {}, tc = {}, uc = "*/".concat("*"), vc = a.location.href, wc = rc.exec(vc.toLowerCase()) || [];
    _.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: vc,type: "GET",isLocal: oc.test(wc[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": uc,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": _.parseJSON,"text xml": _.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },ajaxPrefilter: J(sc),ajaxTransport: J(tc),ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0,getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g)
                            for (g = {}; b = nc.exec(f); )
                                g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this
                },statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this
                }};
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wc[3] || ("http:" === wc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sc, l, b, v), 2 === t)
                return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (k in {success: 1,error: 1,complete: 1})
                v[k](l[k]);
            if (d = K(tc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }}), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({url: a,type: b,dataType: e,data: c,success: d})
        }
    }), _._evalUrl = function(a) {
        return _.ajax({url: a,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, _.fn.extend({wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }}), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xc = /%20/g, yc = /\[\]$/, zc = /\r?\n/g, Ac = /^(?:submit|button|image|reset|file)$/i, Bc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(xc, "+")
    }, _.fn.extend({serialize: function() {
            return _.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {name: b.name,value: a.replace(zc, "\r\n")}
                }) : {name: b.name,value: c.replace(zc, "\r\n")}
            }).get()
        }}), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0: 200,1223: 204}, Fc = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Dc)
            Dc[a]()
    }), Y.cors = !!Fc && "withCredentials" in Fc, Y.ajax = Fc = !!Fc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {send: function(c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },abort: function() {
                b && b()
            }} : void 0
    }), _.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(a) {
                return _.globalEval(a), a
            }}}), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {send: function(d, e) {
                    b = _("<script>").prop({async: !0,charset: a.scriptCharset,src: a.url}).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },abort: function() {
                    c && c()
                }}
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var a = Gc.pop() || _.expando + "_" + jc++;
            return this[a] = !0, a
        }}), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ic = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({url: a,type: e,dataType: "html",data: b}).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    _.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }}, _.fn.extend({offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {top: 0,left: 0}, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {top: e.top + c.pageYOffset - b.clientTop,left: e.left + c.pageXOffset - b.clientLeft}) : e) : void 0
        },position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0,left: 0};
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - _.css(c, "marginTop", !0),left: b.left - d.left - _.css(c, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                    a = a.offsetParent;
                return a || Jc
            })
        }}), _.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height",Width: "width"}, function(a, b) {
        _.each({padding: "inner" + a,content: b,"": "outer" + a}, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kc = a.jQuery, Lc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lc), b && a.jQuery === _ && (a.jQuery = Kc), _
    }, typeof b === zb && (a.jQuery = a.$ = _), _
}), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
        for (var c in b)
            if (void 0 !== a.style[c])
                return {end: b[c]};
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {bindType: a.support.transition.end,delegateType: a.support.transition.end,handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }})
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.2", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 600, c.DEFAULTS = {interval: 5e3,pause: "hover",wrap: !0,keyboard: !0}, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j,direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j,direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0,trigger: '[data-toggle="collapse"]'}, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : a.extend({}, e.data(), {trigger: this});
        c.call(f, h)
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this), e = c(d), f = {relatedTarget: this};
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.2", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)
                    return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), +function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {backdrop: !0,keyboard: !0,show: !0}, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }, c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""})
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "",paddingRight: ""})
    }, c.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1,viewport: {selector: "body",padding: 0}}, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {show: b.delay,hide: b.delay}), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({top: 0,left: 0,display: "block"}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({using: function(a) {
                d.css({top: Math.round(a.top),left: Math.round(a.left)})
            }}, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this, f = this.tip(), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left,height: e.bottom - e.top}));
        var f = d ? {top: 0,left: 0} : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {width: a(window).width(),height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {top: b.top + b.height,left: b.left + b.width / 2 - c / 2} : "top" == a ? {top: b.top - d,left: b.left + b.width / 2 - c / 2} : "left" == a ? {top: b.top + b.height / 2 - d / 2,left: b.left - c} : {top: b.top + b.height / 2 - d / 2,left: b.left + b.width}
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {top: 0,left: 0};
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.2", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {placement: "right",trigger: "click",content: "",template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), +function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.2", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null, this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({type: "hidden.bs.tab",relatedTarget: b[0]}), b.trigger({type: "shown.bs.tab",relatedTarget: e[0]})
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.2", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {offset: 0,target: window}, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())
                    return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), function(a) {
    var b = 0, c = null;
    a.fn.resetBreakpoints = function() {
        a(window).unbind("resize"), c && clearInterval(c), b = 0
    }, a.fn.setBreakpoints = function(d) {
        var e = jQuery.extend({distinct: !0,breakpoints: new Array(320, 480, 768, 1024)}, d);
        c = setInterval(function() {
            var c = a(window).width(), d = !1;
            for (var f in e.breakpoints.sort(function(a, b) {
                return b - a
            })) {
                if (!d && c >= e.breakpoints[f] && b < e.breakpoints[f]) {
                    if (e.distinct) {
                        for (var g in e.breakpoints.sort(function(a, b) {
                            return b - a
                        }))
                            a("body").hasClass("breakpoint-" + e.breakpoints[g]) && (a("body").removeClass("breakpoint-" + e.breakpoints[g]), a(window).trigger("exitBreakpoint" + e.breakpoints[g]));
                        d = !0
                    }
                    a("body").addClass("breakpoint-" + e.breakpoints[f]), a(window).trigger("enterBreakpoint" + e.breakpoints[f])
                }
                c < e.breakpoints[f] && b >= e.breakpoints[f] && (a("body").removeClass("breakpoint-" + e.breakpoints[f]), a(window).trigger("exitBreakpoint" + e.breakpoints[f])), e.distinct && c >= e.breakpoints[f] && c < e.breakpoints[f - 1] && b > c && b > 0 && !a("body").hasClass("breakpoint-" + e.breakpoints[f]) && (a("body").addClass("breakpoint-" + e.breakpoints[f]), a(window).trigger("enterBreakpoint" + e.breakpoints[f]))
            }
            b != c && (b = c)
        }, 250)
    }
}(jQuery), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b() {
        var a = document.getElementsByTagName("script"), b = a[a.length - 1].src.split("?")[0];
        return b.split("/").length > 0 ? b.split("/").slice(0, -1).join("/") + "/" : ""
    }
    function c(a, b, c) {
        for (var d = 0; d < b.length; d++)
            c(a, b[d])
    }
    var d = !1, e = !1, f = 0, g = 2e3, h = 0, i = a, j = ["ms", "moz", "webkit", "o"], k = window.requestAnimationFrame || !1, l = window.cancelAnimationFrame || !1;
    if (!k)
        for (var m in j) {
            var n = j[m];
            k || (k = window[n + "RequestAnimationFrame"]), l || (l = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"])
        }
    var o = window.MutationObserver || window.WebKitMutationObserver || !1, p = {zindex: "auto",cursoropacitymin: 0,cursoropacitymax: 1,cursorcolor: "#424242",cursorwidth: "5px",cursorborder: "1px solid #fff",cursorborderradius: "5px",scrollspeed: 60,mousescrollstep: 24,touchbehavior: !1,hwacceleration: !0,usetransition: !0,boxzoom: !1,dblclickzoom: !0,gesturezoom: !0,grabcursorenabled: !0,autohidemode: !0,background: "",iframeautoresize: !0,cursorminheight: 32,preservenativescrolling: !0,railoffset: !1,bouncescroll: !0,spacebarenabled: !0,railpadding: {top: 0,right: 0,left: 0,bottom: 0},disableoutline: !0,horizrailenabled: !0,railalign: "right",railvalign: "bottom",enabletranslate3d: !0,enablemousewheel: !0,enablekeyboard: !0,smoothscroll: !0,sensitiverail: !0,enablemouselockapi: !0,cursorfixedheight: !1,directionlockdeadzone: 6,hidecursordelay: 400,nativeparentscrolling: !0,enablescrollonselection: !0,overflowx: !0,overflowy: !0,cursordragspeed: .3,rtlmode: "auto",cursordragontouch: !1,oneaxismousemode: "auto",scriptpath: b()}, q = !1, r = function() {
        function a() {
            var a = ["-moz-grab", "-webkit-grab", "grab"];
            (c.ischrome && !c.ischrome22 || c.isie) && (a = []);
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (b.style.cursor = e, b.style.cursor == e)
                    return e
            }
            return "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
        }
        if (q)
            return q;
        var b = document.createElement("DIV"), c = {};
        c.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document, c.isopera = "opera" in window, c.isopera12 = c.isopera && "getUserMedia" in navigator, c.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), c.isie = "all" in document && "attachEvent" in b && !c.isopera, c.isieold = c.isie && !("msInterpolationMode" in b.style), c.isie7 = !(!c.isie || c.isieold || "documentMode" in document && 7 != document.documentMode), c.isie8 = c.isie && "documentMode" in document && 8 == document.documentMode, c.isie9 = c.isie && "performance" in window && document.documentMode >= 9, c.isie10 = c.isie && "performance" in window && document.documentMode >= 10, c.isie9mobile = /iemobile.9/i.test(navigator.userAgent), c.isie9mobile && (c.isie9 = !1), c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent), c.ismozilla = "MozAppearance" in b.style, c.iswebkit = "WebkitAppearance" in b.style, c.ischrome = "chrome" in window, c.ischrome22 = c.ischrome && c.haspointerlock, c.ischrome26 = c.ischrome && "transition" in b.style, c.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, c.hasmstouch = window.navigator.msPointerEnabled || !1, c.ismac = /^mac$/i.test(navigator.platform), c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform), c.isios4 = c.isios && !("seal" in Object), c.isandroid = /android/i.test(navigator.userAgent), c.trstyle = !1, c.hastransform = !1, c.hastranslate3d = !1, c.transitionstyle = !1, c.hastransition = !1, c.transitionend = !1;
        for (var d = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], e = 0; e < d.length; e++)
            if ("undefined" != typeof b.style[d[e]]) {
                c.trstyle = d[e];
                break
            }
        c.hastransform = 0 != c.trstyle, c.hastransform && (b.style[c.trstyle] = "translate3d(1px,2px,3px)", c.hastranslate3d = /translate3d/.test(b.style[c.trstyle])), c.transitionstyle = !1, c.prefixstyle = "", c.transitionend = !1;
        for (var d = ["transition", "webkitTransition", "MozTransition", "OTransition", "OTransition", "msTransition", "KhtmlTransition"], f = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"], g = ["transitionend", "webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "msTransitionEnd", "KhtmlTransitionEnd"], e = 0; e < d.length; e++)
            if (d[e] in b.style) {
                c.transitionstyle = d[e], c.prefixstyle = f[e], c.transitionend = g[e];
                break
            }
        return c.ischrome26 && (c.prefixstyle = f[1]), c.hastransition = c.transitionstyle, c.cursorgrabvalue = a(), c.hasmousecapture = "setCapture" in b, c.hasMutationObserver = o !== !1, b = null, q = c, c
    }, s = function(a, b) {
        function c() {
            var a = s.doc.css(v.trstyle);
            return a && "matrix" == a.substr(0, 6) ? a.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
        }
        function j() {
            var a = s.win;
            if ("zIndex" in a)
                return a.zIndex();
            for (; a.length > 0; ) {
                if (9 == a[0].nodeType)
                    return !1;
                var b = a.css("zIndex");
                if (!isNaN(b) && 0 != b)
                    return parseInt(b);
                a = a.parent()
            }
            return !1
        }
        function m(a, b, c) {
            var d = a.css(b), e = parseFloat(d);
            if (isNaN(e)) {
                e = y[d] || 0;
                var f = 3 == e ? c ? s.win.outerHeight() - s.win.innerHeight() : s.win.outerWidth() - s.win.innerWidth() : 1;
                return s.isie8 && e && (e += 1), f ? e : 0
            }
            return e
        }
        function n(a, b, c, d) {
            s._bind(a, b, function(d) {
                var d = d ? d : window.event, e = {original: d,target: d.target || d.srcElement,type: "wheel",deltaMode: "MozMousePixelScroll" == d.type ? 0 : 1,deltaX: 0,deltaZ: 0,preventDefault: function() {
                        return d.preventDefault ? d.preventDefault() : d.returnValue = !1, !1
                    },stopImmediatePropagation: function() {
                        d.stopImmediatePropagation ? d.stopImmediatePropagation() : d.cancelBubble = !0
                    }};
                return "mousewheel" == b ? (e.deltaY = -1 / 40 * d.wheelDelta, d.wheelDeltaX && (e.deltaX = -1 / 40 * d.wheelDeltaX)) : e.deltaY = d.detail, c.call(a, e)
            }, d)
        }
        function q(a, b, c) {
            var d, e;
            if (0 == a.deltaMode ? (d = -Math.floor(a.deltaX * (s.opt.mousescrollstep / 54)), e = -Math.floor(a.deltaY * (s.opt.mousescrollstep / 54))) : 1 == a.deltaMode && (d = -Math.floor(a.deltaX * s.opt.mousescrollstep), e = -Math.floor(a.deltaY * s.opt.mousescrollstep)), b && s.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0), d && (s.scrollmom && s.scrollmom.stop(), s.lastdeltax += d, s.debounced("mousewheelx", function() {
                var a = s.lastdeltax;
                s.lastdeltax = 0, s.rail.drag || s.doScrollLeftBy(a)
            }, 15)), e) {
                if (s.opt.nativeparentscrolling && c && !s.ispage && !s.zoomactive)
                    if (0 > e) {
                        if (s.getScrollTop() >= s.page.maxh)
                            return !0
                    } else if (s.getScrollTop() <= 0)
                        return !0;
                s.scrollmom && s.scrollmom.stop(), s.lastdeltay += e, s.debounced("mousewheely", function() {
                    var a = s.lastdeltay;
                    s.lastdeltay = 0, s.rail.drag || s.doScrollBy(a)
                }, 15)
            }
            return a.stopImmediatePropagation(), a.preventDefault()
        }
        var s = this;
        if (this.version = "3.5.4", this.name = "nicescroll", this.me = b, this.opt = {doc: i("body"),win: !1}, i.extend(this.opt, p), this.opt.snapbackspeed = 80, a)
            for (var u in s.opt)
                "undefined" != typeof a[u] && (s.opt[u] = a[u]);
        this.doc = s.opt.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(s.opt.win ? s.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = s.opt.win !== !1, this.win = s.opt.win || (this.ispage ? i(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? i(window) : this.win, this.body = i("body"), this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != s.opt.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {x: 0,y: 0}, this.scrollratio = {x: 0,y: 0}, this.cursorheight = 20, this.scrollvaluemax = 0, this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : this.opt.rtlmode === !0, this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1;
        do
            this.id = "ascrail" + g++;
        while (document.getElementById(this.id));
        this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.visibility = !0, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = s.opt.overflowx, this.overflowy = s.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = r();
        var v = i.extend({}, this.detected);
        this.canhwscroll = v.hastransform && s.opt.hwacceleration, this.ishwscroll = this.canhwscroll && s.haswrapper, this.istouchcapable = !1, v.cantouch && v.iswebkit && !v.isios && !v.isandroid && (this.istouchcapable = !0, v.cantouch = !1), v.cantouch && v.ismozilla && !v.isios && !v.isandroid && (this.istouchcapable = !0, v.cantouch = !1), s.opt.enablemouselockapi || (v.hasmousecapture = !1, v.haspointerlock = !1), this.delayed = function(a, b, c, d) {
            var e = s.delaylist[a], f = (new Date).getTime();
            return !d && e && e.tt ? !1 : (e && e.tt && clearTimeout(e.tt), void (e && e.last + c > f && !e.tt ? s.delaylist[a] = {last: f + c,tt: setTimeout(function() {
                    s && (s.delaylist[a].tt = 0, b.call())
                }, c)} : e && e.tt || (s.delaylist[a] = {last: f,tt: 0}, setTimeout(function() {
                b.call()
            }, 0))))
        }, this.debounced = function(a, b, c) {
            {
                var d = s.delaylist[a];
                (new Date).getTime()
            }
            s.delaylist[a] = b, d || setTimeout(function() {
                var b = s.delaylist[a];
                s.delaylist[a] = !1, b.call()
            }, c)
        };
        var w = !1;
        if (this.synched = function(a, b) {
            function c() {
                w || (k(function() {
                    w = !1;
                    for (a in s.synclist) {
                        var b = s.synclist[a];
                        b && b.call(s), s.synclist[a] = !1
                    }
                }), w = !0)
            }
            return s.synclist[a] = b, c(), a
        }, this.unsynched = function(a) {
            s.synclist[a] && (s.synclist[a] = !1)
        }, this.css = function(a, b) {
            for (var c in b)
                s.saved.css.push([a, c, a.css(c)]), a.css(c, b[c])
        }, this.scrollTop = function(a) {
            return "undefined" == typeof a ? s.getScrollTop() : s.setScrollTop(a)
        }, this.scrollLeft = function(a) {
            return "undefined" == typeof a ? s.getScrollLeft() : s.setScrollLeft(a)
        }, BezierClass = function(a, b, c, d, e, f, g) {
            this.st = a, this.ed = b, this.spd = c, this.p1 = d || 0, this.p2 = e || 1, this.p3 = f || 0, this.p4 = g || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
        }, BezierClass.prototype = {B2: function(a) {
                return 3 * a * a * (1 - a)
            },B3: function(a) {
                return 3 * a * (1 - a) * (1 - a)
            },B4: function(a) {
                return (1 - a) * (1 - a) * (1 - a)
            },getNow: function() {
                var a = (new Date).getTime(), b = 1 - (a - this.ts) / this.spd, c = this.B2(b) + this.B3(b) + this.B4(b);
                return 0 > b ? this.ed : this.st + Math.round(this.df * c)
            },update: function(a, b) {
                return this.st = this.getNow(), this.ed = a, this.spd = b, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
            }}, this.ishwscroll) {
            this.doc.translate = {x: 0,y: 0,tx: "0px",ty: "0px"}, v.hastranslate3d && v.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(a) {
                if (!a) {
                    var b = c();
                    if (b)
                        return 16 == b.length ? -b[13] : -b[5];
                    if (s.timerscroll && s.timerscroll.bz)
                        return s.timerscroll.bz.getNow()
                }
                return s.doc.translate.y
            }, this.getScrollLeft = function(a) {
                if (!a) {
                    var b = c();
                    if (b)
                        return 16 == b.length ? -b[12] : -b[4];
                    if (s.timerscroll && s.timerscroll.bh)
                        return s.timerscroll.bh.getNow()
                }
                return s.doc.translate.x
            }, this.notifyScrollEvent = document.createEvent ? function(a) {
                var b = document.createEvent("UIEvents");
                b.initUIEvent("scroll", !1, !0, window, 1), a.dispatchEvent(b)
            } : document.fireEvent ? function(a) {
                var b = document.createEventObject();
                a.fireEvent("onscroll"), b.cancelBubble = !0
            } : function() {
            };
            var x = this.isrtlmode ? 1 : -1;
            v.hastranslate3d && s.opt.enabletranslate3d ? (this.setScrollTop = function(a, b) {
                s.doc.translate.y = a, s.doc.translate.ty = -1 * a + "px", s.doc.css(v.trstyle, "translate3d(" + s.doc.translate.tx + "," + s.doc.translate.ty + ",0px)"), b || s.notifyScrollEvent(s.win[0])
            }, this.setScrollLeft = function(a, b) {
                s.doc.translate.x = a, s.doc.translate.tx = a * x + "px", s.doc.css(v.trstyle, "translate3d(" + s.doc.translate.tx + "," + s.doc.translate.ty + ",0px)"), b || s.notifyScrollEvent(s.win[0])
            }) : (this.setScrollTop = function(a, b) {
                s.doc.translate.y = a, s.doc.translate.ty = -1 * a + "px", s.doc.css(v.trstyle, "translate(" + s.doc.translate.tx + "," + s.doc.translate.ty + ")"), b || s.notifyScrollEvent(s.win[0])
            }, this.setScrollLeft = function(a, b) {
                s.doc.translate.x = a, s.doc.translate.tx = a * x + "px", s.doc.css(v.trstyle, "translate(" + s.doc.translate.tx + "," + s.doc.translate.ty + ")"), b || s.notifyScrollEvent(s.win[0])
            })
        } else
            this.getScrollTop = function() {
                return s.docscroll.scrollTop()
            }, this.setScrollTop = function(a) {
                return s.docscroll.scrollTop(a)
            }, this.getScrollLeft = function() {
                return s.detected.ismozilla && s.isrtlmode ? Math.abs(s.docscroll.scrollLeft()) : s.docscroll.scrollLeft()
            }, this.setScrollLeft = function(a) {
                return s.docscroll.scrollLeft(s.detected.ismozilla && s.isrtlmode ? -a : a)
            };
        this.getTarget = function(a) {
            return a ? a.target ? a.target : a.srcElement ? a.srcElement : !1 : !1
        }, this.hasParent = function(a, b) {
            if (!a)
                return !1;
            for (var c = a.target || a.srcElement || a || !1; c && c.id != b; )
                c = c.parentNode || !1;
            return c !== !1
        };
        var y = {thin: 1,medium: 3,thick: 5};
        this.getOffset = function() {
            if (s.isfixed)
                return {top: parseFloat(s.win.css("top")),left: parseFloat(s.win.css("left"))};
            if (!s.viewport)
                return s.win.offset();
            var a = s.win.offset(), b = s.viewport.offset();
            return {top: a.top - b.top + s.viewport.scrollTop(),left: a.left - b.left + s.viewport.scrollLeft()}
        }, this.updateScrollBar = function(a) {
            if (s.ishwscroll)
                s.rail.css({height: s.win.innerHeight()}), s.railh && s.railh.css({width: s.win.innerWidth()});
            else {
                var b = s.getOffset(), c = {top: b.top,left: b.left};
                c.top += m(s.win, "border-top-width", !0);
                {
                    (s.win.outerWidth() - s.win.innerWidth()) / 2
                }
                c.left += s.rail.align ? s.win.outerWidth() - m(s.win, "border-right-width") - s.rail.width : m(s.win, "border-left-width");
                var d = s.opt.railoffset;
                if (d && (d.top && (c.top += d.top), s.rail.align && d.left && (c.left += d.left)), s.locked || s.rail.css({top: c.top,left: c.left,height: a ? a.h : s.win.innerHeight()}), s.zoom && s.zoom.css({top: c.top + 1,left: 1 == s.rail.align ? c.left - 20 : c.left + s.rail.width + 4}), s.railh && !s.locked) {
                    var c = {top: b.top,left: b.left}, e = s.railh.align ? c.top + m(s.win, "border-top-width", !0) + s.win.innerHeight() - s.railh.height : c.top + m(s.win, "border-top-width", !0), f = c.left + m(s.win, "border-left-width");
                    s.railh.css({top: e,left: f,width: s.railh.width})
                }
            }
        }, this.doRailClick = function(a, b, c) {
            var d, e, f, g;
            s.locked || (s.cancelEvent(a), b ? (d = c ? s.doScrollLeft : s.doScrollTop, f = c ? (a.pageX - s.railh.offset().left - s.cursorwidth / 2) * s.scrollratio.x : (a.pageY - s.rail.offset().top - s.cursorheight / 2) * s.scrollratio.y, d(f)) : (d = c ? s.doScrollLeftBy : s.doScrollBy, f = c ? s.scroll.x : s.scroll.y, g = c ? a.pageX - s.railh.offset().left : a.pageY - s.rail.offset().top, e = c ? s.view.w : s.view.h, d(f >= g ? e : -e)))
        }, s.hasanimationframe = k, s.hascancelanimationframe = l, s.hasanimationframe ? s.hascancelanimationframe || (l = function() {
            s.cancelAnimationFrame = !0
        }) : (k = function(a) {
            return setTimeout(a, 15 - Math.floor(+new Date / 1e3) % 16)
        }, l = clearInterval), this.init = function() {
            function a(b) {
                if (s.selectiondrag) {
                    if (b) {
                        var c = s.win.outerHeight(), d = b.pageY - s.selectiondrag.top;
                        d > 0 && c > d && (d = 0), d >= c && (d -= c), s.selectiondrag.df = d
                    }
                    if (0 != s.selectiondrag.df) {
                        var e = 2 * -Math.floor(s.selectiondrag.df / 6);
                        s.doScrollBy(e), s.debounced("doselectionscroll", function() {
                            a()
                        }, 50)
                    }
                }
            }
            function b() {
                s.iframexd = !1;
                try {
                    {
                        var a = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
                        a.domain
                    }
                } catch (b) {
                    s.iframexd = !0, a = !1
                }
                if (s.iframexd)
                    return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                if (s.forcescreen = !0, s.isiframe && (s.iframe = {doc: i(a),html: s.doc.contents().find("html")[0],body: s.doc.contents().find("body")[0]}, s.getContentSize = function() {
                    return {w: Math.max(s.iframe.html.scrollWidth, s.iframe.body.scrollWidth),h: Math.max(s.iframe.html.scrollHeight, s.iframe.body.scrollHeight)}
                }, s.docscroll = i(s.iframe.body)), !v.isios && s.opt.iframeautoresize && !s.isiframe) {
                    s.win.scrollTop(0), s.doc.height("");
                    var c = Math.max(a.getElementsByTagName("html")[0].scrollHeight, a.body.scrollHeight);
                    s.doc.height(c)
                }
                s.lazyResize(30), v.isie7 && s.css(i(s.iframe.html), {"overflow-y": "hidden"}), s.css(i(s.iframe.body), {"overflow-y": "hidden"}), v.isios && s.haswrapper && s.css(i(a.body), {"-webkit-transform": "translate3d(0,0,0)"}), "contentWindow" in this ? s.bind(this.contentWindow, "scroll", s.onscroll) : s.bind(a, "scroll", s.onscroll), s.opt.enablemousewheel && s.bind(a, "mousewheel", s.onmousewheel), s.opt.enablekeyboard && s.bind(a, v.isopera ? "keypress" : "keydown", s.onkeypress), (v.cantouch || s.opt.touchbehavior) && (s.bind(a, "mousedown", s.ontouchstart), s.bind(a, "mousemove", function(a) {
                    s.ontouchmove(a, !0)
                }), s.opt.grabcursorenabled && v.cursorgrabvalue && s.css(i(a.body), {cursor: v.cursorgrabvalue})), s.bind(a, "mouseup", s.ontouchend), s.zoom && (s.opt.dblclickzoom && s.bind(a, "dblclick", s.doZoom), s.ongesturezoom && s.bind(a, "gestureend", s.ongesturezoom))
            }
            if (s.saved.css = [], v.isie7mobile)
                return !0;
            if (v.isoperamini)
                return !0;
            if (v.hasmstouch && s.css(s.ispage ? i("html") : s.win, {"-ms-touch-action": "none"}), s.zindex = "auto", s.zindex = s.ispage || "auto" != s.opt.zindex ? s.opt.zindex : j() || "auto", s.ispage || "auto" == s.zindex || s.zindex > h && (h = s.zindex), s.isie && 0 == s.zindex && "auto" == s.opt.zindex && (s.zindex = "auto"), !s.ispage || !v.cantouch && !v.isieold && !v.isie9mobile) {
                var c = s.docscroll;
                s.ispage && (c = s.haswrapper ? s.win : s.doc), v.isie9mobile || s.css(c, {"overflow-y": "hidden"}), s.ispage && v.isie7 && ("BODY" == s.doc[0].nodeName ? s.css(i("html"), {"overflow-y": "hidden"}) : "HTML" == s.doc[0].nodeName && s.css(i("body"), {"overflow-y": "hidden"})), !v.isios || s.ispage || s.haswrapper || s.css(i("body"), {"-webkit-overflow-scrolling": "touch"});
                var g = i(document.createElement("div"));
                g.css({position: "relative",top: 0,"float": "right",width: s.opt.cursorwidth,height: "0px","background-color": s.opt.cursorcolor,border: s.opt.cursorborder,"background-clip": "padding-box","-webkit-border-radius": s.opt.cursorborderradius,"-moz-border-radius": s.opt.cursorborderradius,"border-radius": s.opt.cursorborderradius}), g.hborder = parseFloat(g.outerHeight() - g.innerHeight()), s.cursor = g;
                var k = i(document.createElement("div"));
                k.attr("id", s.id), k.addClass("nicescroll-rails");
                var l, m, n = ["left", "right"];
                for (var p in n)
                    m = n[p], l = s.opt.railpadding[m], l ? k.css("padding-" + m, l + "px") : s.opt.railpadding[m] = 0;
                k.append(g), k.width = Math.max(parseFloat(s.opt.cursorwidth), g.outerWidth()) + s.opt.railpadding.left + s.opt.railpadding.right, k.css({width: k.width + "px",zIndex: s.zindex,background: s.opt.background,cursor: "default"}), k.visibility = !0, k.scrollable = !0, k.align = "left" == s.opt.railalign ? 0 : 1, s.rail = k, s.rail.drag = !1;
                var q = !1;
                if (!s.opt.boxzoom || s.ispage || v.isieold || (q = document.createElement("div"), s.bind(q, "click", s.doZoom), s.zoom = i(q), s.zoom.css({cursor: "pointer","z-index": s.zindex,backgroundImage: "url(" + s.opt.scriptpath + "zoomico.png)",height: 18,width: 18,backgroundPosition: "0px 0px"}), s.opt.dblclickzoom && s.bind(s.win, "dblclick", s.doZoom), v.cantouch && s.opt.gesturezoom && (s.ongesturezoom = function(a) {
                    return a.scale > 1.5 && s.doZoomIn(a), a.scale < .8 && s.doZoomOut(a), s.cancelEvent(a)
                }, s.bind(s.win, "gestureend", s.ongesturezoom))), s.railh = !1, s.opt.horizrailenabled) {
                    s.css(c, {"overflow-x": "hidden"});
                    var g = i(document.createElement("div"));
                    g.css({position: "absolute",top: 0,height: s.opt.cursorwidth,width: "0px","background-color": s.opt.cursorcolor,border: s.opt.cursorborder,"background-clip": "padding-box","-webkit-border-radius": s.opt.cursorborderradius,"-moz-border-radius": s.opt.cursorborderradius,"border-radius": s.opt.cursorborderradius}), g.wborder = parseFloat(g.outerWidth() - g.innerWidth()), s.cursorh = g;
                    var r = i(document.createElement("div"));
                    r.attr("id", s.id + "-hr"), r.addClass("nicescroll-rails"), r.height = Math.max(parseFloat(s.opt.cursorwidth), g.outerHeight()), r.css({height: r.height + "px",zIndex: s.zindex,background: s.opt.background}), r.append(g), r.visibility = !0, r.scrollable = !0, r.align = "top" == s.opt.railvalign ? 0 : 1, s.railh = r, s.railh.drag = !1
                }
                if (s.ispage)
                    k.css({position: "fixed",top: "0px",height: "100%"}), k.css(k.align ? {right: "0px"} : {left: "0px"}), s.body.append(k), s.railh && (r.css({position: "fixed",left: "0px",width: "100%"}), r.css(r.align ? {bottom: "0px"} : {top: "0px"}), s.body.append(r));
                else {
                    if (s.ishwscroll) {
                        "static" == s.win.css("position") && s.css(s.win, {position: "relative"});
                        var u = "HTML" == s.win[0].nodeName ? s.body : s.win;
                        s.zoom && (s.zoom.css({position: "absolute",top: 1,right: 0,"margin-right": k.width + 4}), u.append(s.zoom)), k.css({position: "absolute",top: 0}), k.css(k.align ? {right: 0} : {left: 0}), u.append(k), r && (r.css({position: "absolute",left: 0,bottom: 0}), r.css(r.align ? {bottom: 0} : {top: 0}), u.append(r))
                    } else {
                        s.isfixed = "fixed" == s.win.css("position");
                        var w = s.isfixed ? "fixed" : "absolute";
                        s.isfixed || (s.viewport = s.getViewport(s.win[0])), s.viewport && (s.body = s.viewport, 0 == /fixed|relative|absolute/.test(s.viewport.css("position")) && s.css(s.viewport, {position: "relative"})), k.css({position: w}), s.zoom && s.zoom.css({position: w}), s.updateScrollBar(), s.body.append(k), s.zoom && s.body.append(s.zoom), s.railh && (r.css({position: w}), s.body.append(r))
                    }
                    v.isios && s.css(s.win, {"-webkit-tap-highlight-color": "rgba(0,0,0,0)","-webkit-touch-callout": "none"}), v.isie && s.opt.disableoutline && s.win.attr("hideFocus", "true"), v.iswebkit && s.opt.disableoutline && s.win.css({outline: "none"})
                }
                if (s.opt.autohidemode === !1 ? (s.autohidedom = !1, s.rail.css({opacity: s.opt.cursoropacitymax}), s.railh && s.railh.css({opacity: s.opt.cursoropacitymax})) : s.opt.autohidemode === !0 || "leave" === s.opt.autohidemode ? (s.autohidedom = i().add(s.rail), v.isie8 && (s.autohidedom = s.autohidedom.add(s.cursor)), s.railh && (s.autohidedom = s.autohidedom.add(s.railh)), s.railh && v.isie8 && (s.autohidedom = s.autohidedom.add(s.cursorh))) : "scroll" == s.opt.autohidemode ? (s.autohidedom = i().add(s.rail), s.railh && (s.autohidedom = s.autohidedom.add(s.railh))) : "cursor" == s.opt.autohidemode ? (s.autohidedom = i().add(s.cursor), s.railh && (s.autohidedom = s.autohidedom.add(s.cursorh))) : "hidden" == s.opt.autohidemode && (s.autohidedom = !1, s.hide(), s.locked = !1), v.isie9mobile) {
                    s.scrollmom = new t(s), s.onmangotouch = function() {
                        var a = s.getScrollTop(), b = s.getScrollLeft();
                        if (a == s.scrollmom.lastscrolly && b == s.scrollmom.lastscrollx)
                            return !0;
                        var c = a - s.mangotouch.sy, d = b - s.mangotouch.sx, e = Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)));
                        if (0 != e) {
                            var f = 0 > c ? -1 : 1, g = 0 > d ? -1 : 1, h = +new Date;
                            if (s.mangotouch.lazy && clearTimeout(s.mangotouch.lazy), h - s.mangotouch.tm > 80 || s.mangotouch.dry != f || s.mangotouch.drx != g)
                                s.scrollmom.stop(), s.scrollmom.reset(b, a), s.mangotouch.sy = a, s.mangotouch.ly = a, s.mangotouch.sx = b, s.mangotouch.lx = b, s.mangotouch.dry = f, s.mangotouch.drx = g, s.mangotouch.tm = h;
                            else {
                                s.scrollmom.stop(), s.scrollmom.update(s.mangotouch.sx - d, s.mangotouch.sy - c);
                                {
                                    h - s.mangotouch.tm
                                }
                                s.mangotouch.tm = h;
                                var i = Math.max(Math.abs(s.mangotouch.ly - a), Math.abs(s.mangotouch.lx - b));
                                s.mangotouch.ly = a, s.mangotouch.lx = b, i > 2 && (s.mangotouch.lazy = setTimeout(function() {
                                    s.mangotouch.lazy = !1, s.mangotouch.dry = 0, s.mangotouch.drx = 0, s.mangotouch.tm = 0, s.scrollmom.doMomentum(30)
                                }, 100))
                            }
                        }
                    };
                    var x = s.getScrollTop(), y = s.getScrollLeft();
                    s.mangotouch = {sy: x,ly: x,dry: 0,sx: y,lx: y,drx: 0,lazy: !1,tm: 0}, s.bind(s.docscroll, "scroll", s.onmangotouch)
                } else {
                    if (v.cantouch || s.istouchcapable || s.opt.touchbehavior || v.hasmstouch) {
                        s.scrollmom = new t(s), s.ontouchstart = function(a) {
                            if (a.pointerType && 2 != a.pointerType && "touch" != a.pointerType)
                                return !1;
                            if (s.hasmoving = !1, !s.locked) {
                                if (v.hasmstouch)
                                    for (var b = a.target ? a.target : !1; b; ) {
                                        var c = i(b).getNiceScroll();
                                        if (c.length > 0 && c[0].me == s.me)
                                            break;
                                        if (c.length > 0)
                                            return !1;
                                        if ("DIV" == b.nodeName && b.id == s.id)
                                            break;
                                        b = b.parentNode ? b.parentNode : !1
                                    }
                                s.cancelScroll();
                                var b = s.getTarget(a);
                                if (b) {
                                    var d = /INPUT/i.test(b.nodeName) && /range/i.test(b.type);
                                    if (d)
                                        return s.stopPropagation(a)
                                }
                                if (!("clientX" in a) && "changedTouches" in a && (a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY), s.forcescreen) {
                                    var e = a, a = {original: a.original ? a.original : a};
                                    a.clientX = e.screenX, a.clientY = e.screenY
                                }
                                if (s.rail.drag = {x: a.clientX,y: a.clientY,sx: s.scroll.x,sy: s.scroll.y,st: s.getScrollTop(),sl: s.getScrollLeft(),pt: 2,dl: !1}, s.ispage || !s.opt.directionlockdeadzone)
                                    s.rail.drag.dl = "f";
                                else {
                                    var f = {w: i(window).width(),h: i(window).height()}, g = {w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)}, h = Math.max(0, g.h - f.h), j = Math.max(0, g.w - f.w);
                                    s.rail.drag.ck = !s.rail.scrollable && s.railh.scrollable ? h > 0 ? "v" : !1 : s.rail.scrollable && !s.railh.scrollable && j > 0 ? "h" : !1, s.rail.drag.ck || (s.rail.drag.dl = "f")
                                }
                                if (s.opt.touchbehavior && s.isiframe && v.isie) {
                                    var k = s.win.position();
                                    s.rail.drag.x += k.left, s.rail.drag.y += k.top
                                }
                                if (s.hasmoving = !1, s.lastmouseup = !1, s.scrollmom.reset(a.clientX, a.clientY), !v.cantouch && !this.istouchcapable && !v.hasmstouch) {
                                    var l = b ? /INPUT|SELECT|TEXTAREA/i.test(b.nodeName) : !1;
                                    if (!l)
                                        return !s.ispage && v.hasmousecapture && b.setCapture(), s.opt.touchbehavior ? (b.onclick && !b._onclick && (b._onclick = b.onclick, b.onclick = function(a) {
                                            return s.hasmoving ? !1 : void b._onclick.call(this, a)
                                        }), s.cancelEvent(a)) : s.stopPropagation(a);
                                    /SUBMIT|CANCEL|BUTTON/i.test(i(b).attr("type")) && (pc = {tg: b,click: !1}, s.preventclick = pc)
                                }
                            }
                        }, s.ontouchend = function(a) {
                            return a.pointerType && 2 != a.pointerType && "touch" != a.pointerType ? !1 : s.rail.drag && 2 == s.rail.drag.pt && (s.scrollmom.doMomentum(), s.rail.drag = !1, s.hasmoving && (s.lastmouseup = !0, s.hideCursor(), v.hasmousecapture && document.releaseCapture(), !v.cantouch)) ? s.cancelEvent(a) : void 0
                        };
                        var z = s.opt.touchbehavior && s.isiframe && !v.hasmousecapture;
                        s.ontouchmove = function(a, b) {
                            if (a.pointerType && 2 != a.pointerType && "touch" != a.pointerType)
                                return !1;
                            if (s.rail.drag && 2 == s.rail.drag.pt) {
                                if (v.cantouch && "undefined" == typeof a.original)
                                    return !0;
                                s.hasmoving = !0, s.preventclick && !s.preventclick.click && (s.preventclick.click = s.preventclick.tg.onclick || !1, s.preventclick.tg.onclick = s.onpreventclick);
                                var c = i.extend({original: a}, a);
                                if (a = c, "changedTouches" in a && (a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY), s.forcescreen) {
                                    var d = a, a = {original: a.original ? a.original : a};
                                    a.clientX = d.screenX, a.clientY = d.screenY
                                }
                                var e = ofy = 0;
                                if (z && !b) {
                                    var f = s.win.position();
                                    e = -f.left, ofy = -f.top
                                }
                                var g = a.clientY + ofy, h = g - s.rail.drag.y, j = a.clientX + e, k = j - s.rail.drag.x, l = s.rail.drag.st - h;
                                if (s.ishwscroll && s.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > s.page.maxh && (l = s.page.maxh + Math.round((l - s.page.maxh) / 2)) : (0 > l && (l = 0, g = 0), l > s.page.maxh && (l = s.page.maxh, g = 0)), s.railh && s.railh.scrollable) {
                                    var m = s.isrtlmode ? k - s.rail.drag.sl : s.rail.drag.sl - k;
                                    s.ishwscroll && s.opt.bouncescroll ? 0 > m ? m = Math.round(m / 2) : m > s.page.maxw && (m = s.page.maxw + Math.round((m - s.page.maxw) / 2)) : (0 > m && (m = 0, j = 0), m > s.page.maxw && (m = s.page.maxw, j = 0))
                                }
                                var n = !1;
                                if (s.rail.drag.dl)
                                    n = !0, "v" == s.rail.drag.dl ? m = s.rail.drag.sl : "h" == s.rail.drag.dl && (l = s.rail.drag.st);
                                else {
                                    var o = Math.abs(h), p = Math.abs(k), q = s.opt.directionlockdeadzone;
                                    if ("v" == s.rail.drag.ck) {
                                        if (o > q && .3 * o >= p)
                                            return s.rail.drag = !1, !0;
                                        p > q && (s.rail.drag.dl = "f", i("body").scrollTop(i("body").scrollTop()))
                                    } else if ("h" == s.rail.drag.ck) {
                                        if (p > q && .3 * p >= o)
                                            return s.rail.drag = !1, !0;
                                        o > q && (s.rail.drag.dl = "f", i("body").scrollLeft(i("body").scrollLeft()))
                                    }
                                }
                                if (s.synched("touchmove", function() {
                                    s.rail.drag && 2 == s.rail.drag.pt && (s.prepareTransition && s.prepareTransition(0), s.rail.scrollable && s.setScrollTop(l), s.scrollmom.update(j, g), s.railh && s.railh.scrollable ? (s.setScrollLeft(m), s.showCursor(l, m)) : s.showCursor(l), v.isie10 && document.selection.clear())
                                }), v.ischrome && s.istouchcapable && (n = !1), n)
                                    return s.cancelEvent(a)
                            }
                        }
                    }
                    s.onmousedown = function(a, b) {
                        if (!s.rail.drag || 1 == s.rail.drag.pt) {
                            if (s.locked)
                                return s.cancelEvent(a);
                            s.cancelScroll(), s.rail.drag = {x: a.clientX,y: a.clientY,sx: s.scroll.x,sy: s.scroll.y,pt: 1,hr: !!b};
                            var c = s.getTarget(a);
                            return !s.ispage && v.hasmousecapture && c.setCapture(), s.isiframe && !v.hasmousecapture && (s.saved.csspointerevents = s.doc.css("pointer-events"), s.css(s.doc, {"pointer-events": "none"})), s.hasmoving = !1, s.cancelEvent(a)
                        }
                    }, s.onmouseup = function(a) {
                        if (s.rail.drag) {
                            if (v.hasmousecapture && document.releaseCapture(), s.isiframe && !v.hasmousecapture && s.doc.css("pointer-events", s.saved.csspointerevents), 1 != s.rail.drag.pt)
                                return;
                            return s.rail.drag = !1, s.hasmoving && s.triggerScrollEnd(), s.cancelEvent(a)
                        }
                    }, s.onmousemove = function(a) {
                        if (s.rail.drag) {
                            if (1 != s.rail.drag.pt)
                                return;
                            if (v.ischrome && 0 == a.which)
                                return s.onmouseup(a);
                            if (s.cursorfreezed = !0, s.hasmoving = !0, s.rail.drag.hr) {
                                s.scroll.x = s.rail.drag.sx + (a.clientX - s.rail.drag.x), s.scroll.x < 0 && (s.scroll.x = 0);
                                var b = s.scrollvaluemaxw;
                                s.scroll.x > b && (s.scroll.x = b)
                            } else {
                                s.scroll.y = s.rail.drag.sy + (a.clientY - s.rail.drag.y), s.scroll.y < 0 && (s.scroll.y = 0);
                                var c = s.scrollvaluemax;
                                s.scroll.y > c && (s.scroll.y = c)
                            }
                            return s.synched("mousemove", function() {
                                s.rail.drag && 1 == s.rail.drag.pt && (s.showCursor(), s.rail.drag.hr ? s.doScrollLeft(Math.round(s.scroll.x * s.scrollratio.x), s.opt.cursordragspeed) : s.doScrollTop(Math.round(s.scroll.y * s.scrollratio.y), s.opt.cursordragspeed))
                            }), s.cancelEvent(a)
                        }
                    }, v.cantouch || s.opt.touchbehavior ? (s.onpreventclick = function(a) {
                        return s.preventclick ? (s.preventclick.tg.onclick = s.preventclick.click, s.preventclick = !1, s.cancelEvent(a)) : void 0
                    }, s.bind(s.win, "mousedown", s.ontouchstart), s.onclick = v.isios ? !1 : function(a) {
                        return s.lastmouseup ? (s.lastmouseup = !1, s.cancelEvent(a)) : !0
                    }, s.opt.grabcursorenabled && v.cursorgrabvalue && (s.css(s.ispage ? s.doc : s.win, {cursor: v.cursorgrabvalue}), s.css(s.rail, {cursor: v.cursorgrabvalue}))) : (s.hasTextSelected = "getSelection" in document ? function() {
                        return document.getSelection().rangeCount > 0
                    } : "selection" in document ? function() {
                        return "None" != document.selection.type
                    } : function() {
                        return !1
                    }, s.onselectionstart = function() {
                        s.ispage || (s.selectiondrag = s.win.offset())
                    }, s.onselectionend = function() {
                        s.selectiondrag = !1
                    }, s.onselectiondrag = function(b) {
                        s.selectiondrag && s.hasTextSelected() && s.debounced("selectionscroll", function() {
                            a(b)
                        }, 250)
                    }), v.hasmstouch && (s.css(s.rail, {"-ms-touch-action": "none"}), s.css(s.cursor, {"-ms-touch-action": "none"}), s.bind(s.win, "MSPointerDown", s.ontouchstart), s.bind(document, "MSPointerUp", s.ontouchend), s.bind(document, "MSPointerMove", s.ontouchmove), s.bind(s.cursor, "MSGestureHold", function(a) {
                        a.preventDefault()
                    }), s.bind(s.cursor, "contextmenu", function(a) {
                        a.preventDefault()
                    })), this.istouchcapable && (s.bind(s.win, "touchstart", s.ontouchstart), s.bind(document, "touchend", s.ontouchend), s.bind(document, "touchcancel", s.ontouchend), s.bind(document, "touchmove", s.ontouchmove)), s.bind(s.cursor, "mousedown", s.onmousedown), s.bind(s.cursor, "mouseup", s.onmouseup), s.railh && (s.bind(s.cursorh, "mousedown", function(a) {
                        s.onmousedown(a, !0)
                    }), s.bind(s.cursorh, "mouseup", s.onmouseup)), (s.opt.cursordragontouch || !v.cantouch && !s.opt.touchbehavior) && (s.rail.css({cursor: "default"}), s.railh && s.railh.css({cursor: "default"}), s.jqbind(s.rail, "mouseenter", function() {
                        return s.win.is(":visible") ? (s.canshowonmouseevent && s.showCursor(), void (s.rail.active = !0)) : !1
                    }), s.jqbind(s.rail, "mouseleave", function() {
                        s.rail.active = !1, s.rail.drag || s.hideCursor()
                    }), s.opt.sensitiverail && (s.bind(s.rail, "click", function(a) {
                        s.doRailClick(a, !1, !1)
                    }), s.bind(s.rail, "dblclick", function(a) {
                        s.doRailClick(a, !0, !1)
                    }), s.bind(s.cursor, "click", function(a) {
                        s.cancelEvent(a)
                    }), s.bind(s.cursor, "dblclick", function(a) {
                        s.cancelEvent(a)
                    })), s.railh && (s.jqbind(s.railh, "mouseenter", function() {
                        return s.win.is(":visible") ? (s.canshowonmouseevent && s.showCursor(), void (s.rail.active = !0)) : !1
                    }), s.jqbind(s.railh, "mouseleave", function() {
                        s.rail.active = !1, s.rail.drag || s.hideCursor()
                    }), s.opt.sensitiverail && (s.bind(s.railh, "click", function(a) {
                        s.doRailClick(a, !1, !0)
                    }), s.bind(s.railh, "dblclick", function(a) {
                        s.doRailClick(a, !0, !0)
                    }), s.bind(s.cursorh, "click", function(a) {
                        s.cancelEvent(a)
                    }), s.bind(s.cursorh, "dblclick", function(a) {
                        s.cancelEvent(a)
                    })))), v.cantouch || s.opt.touchbehavior ? (s.bind(v.hasmousecapture ? s.win : document, "mouseup", s.ontouchend), s.bind(document, "mousemove", s.ontouchmove), s.onclick && s.bind(document, "click", s.onclick), s.opt.cursordragontouch && (s.bind(s.cursor, "mousedown", s.onmousedown), s.bind(s.cursor, "mousemove", s.onmousemove), s.cursorh && s.bind(s.cursorh, "mousedown", function(a) {
                        s.onmousedown(a, !0)
                    }), s.cursorh && s.bind(s.cursorh, "mousemove", s.onmousemove))) : (s.bind(v.hasmousecapture ? s.win : document, "mouseup", s.onmouseup), s.bind(document, "mousemove", s.onmousemove), s.onclick && s.bind(document, "click", s.onclick), !s.ispage && s.opt.enablescrollonselection && (s.bind(s.win[0], "mousedown", s.onselectionstart), s.bind(document, "mouseup", s.onselectionend), s.bind(s.cursor, "mouseup", s.onselectionend), s.cursorh && s.bind(s.cursorh, "mouseup", s.onselectionend), s.bind(document, "mousemove", s.onselectiondrag)), s.zoom && (s.jqbind(s.zoom, "mouseenter", function() {
                        s.canshowonmouseevent && s.showCursor(), s.rail.active = !0
                    }), s.jqbind(s.zoom, "mouseleave", function() {
                        s.rail.active = !1, s.rail.drag || s.hideCursor()
                    }))), s.opt.enablemousewheel && (s.isiframe || s.bind(v.isie && s.ispage ? document : s.win, "mousewheel", s.onmousewheel), s.bind(s.rail, "mousewheel", s.onmousewheel), s.railh && s.bind(s.railh, "mousewheel", s.onmousewheelhr)), s.ispage || v.cantouch || /HTML|^BODY/.test(s.win[0].nodeName) || (s.win.attr("tabindex") || s.win.attr({tabindex: f++}), s.jqbind(s.win, "focus", function(a) {
                        d = s.getTarget(a).id || !0, s.hasfocus = !0, s.canshowonmouseevent && s.noticeCursor()
                    }), s.jqbind(s.win, "blur", function() {
                        d = !1, s.hasfocus = !1
                    }), s.jqbind(s.win, "mouseenter", function(a) {
                        e = s.getTarget(a).id || !0, s.hasmousefocus = !0, s.canshowonmouseevent && s.noticeCursor()
                    }), s.jqbind(s.win, "mouseleave", function() {
                        e = !1, s.hasmousefocus = !1, s.rail.drag || s.hideCursor()
                    }))
                }
                if (s.onkeypress = function(a) {
                    if (s.locked && 0 == s.page.maxh)
                        return !0;
                    a = a ? a : window.e;
                    var b = s.getTarget(a);
                    if (b && /INPUT|TEXTAREA|SELECT|OPTION/.test(b.nodeName)) {
                        var c = b.getAttribute("type") || b.type || !1;
                        if (!c || !/submit|button|cancel/i.tp)
                            return !0
                    }
                    if (i(b).attr("contenteditable"))
                        return !0;
                    if (s.hasfocus || s.hasmousefocus && !d || s.ispage && !d && !e) {
                        var f = a.keyCode;
                        if (s.locked && 27 != f)
                            return s.cancelEvent(a);
                        var g = a.ctrlKey || !1, h = a.shiftKey || !1, j = !1;
                        switch (f) {
                            case 38:
                            case 63233:
                                s.doScrollBy(72), j = !0;
                                break;
                            case 40:
                            case 63235:
                                s.doScrollBy(-72), j = !0;
                                break;
                            case 37:
                            case 63232:
                                s.railh && (g ? s.doScrollLeft(0) : s.doScrollLeftBy(72), j = !0);
                                break;
                            case 39:
                            case 63234:
                                s.railh && (g ? s.doScrollLeft(s.page.maxw) : s.doScrollLeftBy(-72), j = !0);
                                break;
                            case 33:
                            case 63276:
                                s.doScrollBy(s.view.h), j = !0;
                                break;
                            case 34:
                            case 63277:
                                s.doScrollBy(-s.view.h), j = !0;
                                break;
                            case 36:
                            case 63273:
                                s.railh && g ? s.doScrollPos(0, 0) : s.doScrollTo(0), j = !0;
                                break;
                            case 35:
                            case 63275:
                                s.railh && g ? s.doScrollPos(s.page.maxw, s.page.maxh) : s.doScrollTo(s.page.maxh), j = !0;
                                break;
                            case 32:
                                s.opt.spacebarenabled && (s.doScrollBy(h ? s.view.h : -s.view.h), j = !0);
                                break;
                            case 27:
                                s.zoomactive && (s.doZoom(), j = !0)
                        }
                        if (j)
                            return s.cancelEvent(a)
                    }
                }, s.opt.enablekeyboard && s.bind(document, v.isopera && !v.isopera12 ? "keypress" : "keydown", s.onkeypress), s.bind(document, "keydown", function(a) {
                    var b = a.ctrlKey || !1;
                    b && (s.wheelprevented = !0)
                }), s.bind(document, "keyup", function(a) {
                    var b = a.ctrlKey || !1;
                    b || (s.wheelprevented = !1)
                }), s.bind(window, "resize", s.lazyResize), s.bind(window, "orientationchange", s.lazyResize), s.bind(window, "load", s.lazyResize), v.ischrome && !s.ispage && !s.haswrapper) {
                    var A = s.win.attr("style"), B = parseFloat(s.win.css("width")) + 1;
                    s.win.css("width", B), s.synched("chromefix", function() {
                        s.win.attr("style", A)
                    })
                }
                s.onAttributeChange = function() {
                    s.lazyResize(250)
                }, s.ispage || s.haswrapper || (o !== !1 ? (s.observer = new o(function(a) {
                    a.forEach(s.onAttributeChange)
                }), s.observer.observe(s.win[0], {childList: !0,characterData: !1,attributes: !0,subtree: !1}), s.observerremover = new o(function(a) {
                    a.forEach(function(a) {
                        if (a.removedNodes.length > 0)
                            for (var b in a.removedNodes)
                                if (a.removedNodes[b] == s.win[0])
                                    return s.remove()
                    })
                }), s.observerremover.observe(s.win[0].parentNode, {childList: !0,characterData: !1,attributes: !1,subtree: !1})) : (s.bind(s.win, v.isie && !v.isie9 ? "propertychange" : "DOMAttrModified", s.onAttributeChange), v.isie9 && s.win[0].attachEvent("onpropertychange", s.onAttributeChange), s.bind(s.win, "DOMNodeRemoved", function(a) {
                    a.target == s.win[0] && s.remove()
                }))), !s.ispage && s.opt.boxzoom && s.bind(window, "resize", s.resizeZoom), s.istextarea && s.bind(s.win, "mouseup", s.lazyResize), s.lazyResize(30)
            }
            "IFRAME" == this.doc[0].nodeName && (this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                b.call(s.doc[0], !1)
            }, 500), s.bind(this.doc, "load", b))
        }, this.showCursor = function(a, b) {
            s.cursortimeout && (clearTimeout(s.cursortimeout), s.cursortimeout = 0), s.rail && (s.autohidedom && (s.autohidedom.stop().css({opacity: s.opt.cursoropacitymax}), s.cursoractive = !0), s.rail.drag && 1 == s.rail.drag.pt || ("undefined" != typeof a && a !== !1 && (s.scroll.y = Math.round(1 * a / s.scrollratio.y)), "undefined" != typeof b && (s.scroll.x = Math.round(1 * b / s.scrollratio.x))), s.cursor.css({height: s.cursorheight,top: s.scroll.y}), s.cursorh && (s.cursorh.css(!s.rail.align && s.rail.visibility ? {width: s.cursorwidth,left: s.scroll.x + s.rail.width} : {width: s.cursorwidth,left: s.scroll.x}), s.cursoractive = !0), s.zoom && s.zoom.stop().css({opacity: s.opt.cursoropacitymax}))
        }, this.hideCursor = function(a) {
            s.cursortimeout || s.rail && s.autohidedom && (s.hasmousefocus && "leave" == s.opt.autohidemode || (s.cursortimeout = setTimeout(function() {
                s.rail.active && s.showonmouseevent || (s.autohidedom.stop().animate({opacity: s.opt.cursoropacitymin}), s.zoom && s.zoom.stop().animate({opacity: s.opt.cursoropacitymin}), s.cursoractive = !1), s.cursortimeout = 0
            }, a || s.opt.hidecursordelay)))
        }, this.noticeCursor = function(a, b, c) {
            s.showCursor(b, c), s.rail.active || s.hideCursor(a)
        }, this.getContentSize = s.ispage ? function() {
            return {w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)}
        } : s.haswrapper ? function() {
            return {w: s.doc.outerWidth() + parseInt(s.win.css("paddingLeft")) + parseInt(s.win.css("paddingRight")),h: s.doc.outerHeight() + parseInt(s.win.css("paddingTop")) + parseInt(s.win.css("paddingBottom"))}
        } : function() {
            return {w: s.docscroll[0].scrollWidth,h: s.docscroll[0].scrollHeight}
        }, this.onResize = function(a, b) {
            if (!s || !s.win)
                return !1;
            if (!s.haswrapper && !s.ispage) {
                if ("none" == s.win.css("display"))
                    return s.visibility && s.hideRail().hideRailHr(), !1;
                s.hidden || s.visibility || s.showRail().showRailHr()
            }
            var c = s.page.maxh, d = s.page.maxw, e = {h: s.view.h,w: s.view.w};
            if (s.view = {w: s.ispage ? s.win.width() : parseInt(s.win[0].clientWidth),h: s.ispage ? s.win.height() : parseInt(s.win[0].clientHeight)}, s.page = b ? b : s.getContentSize(), s.page.maxh = Math.max(0, s.page.h - s.view.h), s.page.maxw = Math.max(0, s.page.w - s.view.w), s.page.maxh == c && s.page.maxw == d && s.view.w == e.w) {
                if (s.ispage)
                    return s;
                var f = s.win.offset();
                if (s.lastposition) {
                    var g = s.lastposition;
                    if (g.top == f.top && g.left == f.left)
                        return s
                }
                s.lastposition = f
            }
            if (0 == s.page.maxh ? (s.hideRail(), s.scrollvaluemax = 0, s.scroll.y = 0, s.scrollratio.y = 0, s.cursorheight = 0, s.setScrollTop(0), s.rail.scrollable = !1) : s.rail.scrollable = !0, 0 == s.page.maxw ? (s.hideRailHr(), s.scrollvaluemaxw = 0, s.scroll.x = 0, s.scrollratio.x = 0, s.cursorwidth = 0, s.setScrollLeft(0), s.railh.scrollable = !1) : s.railh.scrollable = !0, s.locked = 0 == s.page.maxh && 0 == s.page.maxw, s.locked)
                return s.ispage || s.updateScrollBar(s.view), !1;
            s.hidden || s.visibility ? s.hidden || s.railh.visibility || s.showRailHr() : s.showRail().showRailHr(), s.istextarea && s.win.css("resize") && "none" != s.win.css("resize") && (s.view.h -= 20), s.cursorheight = Math.min(s.view.h, Math.round(s.view.h * (s.view.h / s.page.h))), s.cursorheight = s.opt.cursorfixedheight ? s.opt.cursorfixedheight : Math.max(s.opt.cursorminheight, s.cursorheight), s.cursorwidth = Math.min(s.view.w, Math.round(s.view.w * (s.view.w / s.page.w))), s.cursorwidth = s.opt.cursorfixedheight ? s.opt.cursorfixedheight : Math.max(s.opt.cursorminheight, s.cursorwidth), s.scrollvaluemax = s.view.h - s.cursorheight - s.cursor.hborder, s.railh && (s.railh.width = s.page.maxh > 0 ? s.view.w - s.rail.width : s.view.w, s.scrollvaluemaxw = s.railh.width - s.cursorwidth - s.cursorh.wborder), s.ispage || s.updateScrollBar(s.view), s.scrollratio = {x: s.page.maxw / s.scrollvaluemaxw,y: s.page.maxh / s.scrollvaluemax};
            var h = s.getScrollTop();
            return h > s.page.maxh ? s.doScrollTop(s.page.maxh) : (s.scroll.y = Math.round(s.getScrollTop() * (1 / s.scrollratio.y)), s.scroll.x = Math.round(s.getScrollLeft() * (1 / s.scrollratio.x)), s.cursoractive && s.noticeCursor()), s.scroll.y && 0 == s.getScrollTop() && s.doScrollTo(Math.floor(s.scroll.y * s.scrollratio.y)), s
        }, this.resize = s.onResize, this.lazyResize = function(a) {
            return a = isNaN(a) ? 30 : a, s.delayed("resize", s.resize, a), s
        }, this._bind = function(a, b, c, d) {
            s.events.push({e: a,n: b,f: c,b: d,q: !1}), a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        }, this.jqbind = function(a, b, c) {
            s.events.push({e: a,n: b,f: c,q: !0}), i(a).bind(b, c)
        }, this.bind = function(a, b, c, d) {
            var e = "jquery" in a ? a[0] : a;
            if ("mousewheel" == b)
                if ("onwheel" in s.win)
                    s._bind(e, "wheel", c, d || !1);
                else {
                    var f = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    n(e, f, c, d || !1), "DOMMouseScroll" == f && n(e, "MozMousePixelScroll", c, d || !1)
                }
            else if (e.addEventListener) {
                if (v.cantouch && /mouseup|mousedown|mousemove/.test(b)) {
                    var g = "mousedown" == b ? "touchstart" : "mouseup" == b ? "touchend" : "touchmove";
                    s._bind(e, g, function(a) {
                        if (a.touches) {
                            if (a.touches.length < 2) {
                                var b = a.touches.length ? a.touches[0] : a;
                                b.original = a, c.call(this, b)
                            }
                        } else if (a.changedTouches) {
                            var b = a.changedTouches[0];
                            b.original = a, c.call(this, b)
                        }
                    }, d || !1)
                }
                s._bind(e, b, c, d || !1), v.cantouch && "mouseup" == b && s._bind(e, "touchcancel", c, d || !1)
            } else
                s._bind(e, b, function(a) {
                    return a = a || window.event || !1, a && a.srcElement && (a.target = a.srcElement), "pageY" in a || (a.pageX = a.clientX + document.documentElement.scrollLeft, a.pageY = a.clientY + document.documentElement.scrollTop), c.call(e, a) === !1 || d === !1 ? s.cancelEvent(a) : !0
                })
        }, this._unbind = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = !1
        }, this.unbindAll = function() {
            for (var a = 0; a < s.events.length; a++) {
                var b = s.events[a];
                b.q ? b.e.unbind(b.n, b.f) : s._unbind(b.e, b.n, b.f, b.b)
            }
        }, this.cancelEvent = function(a) {
            var a = a.original ? a.original : a ? a : window.event || !1;
            return a ? (a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation(), a.preventManipulation && a.preventManipulation(), a.cancelBubble = !0, a.cancel = !0, a.returnValue = !1, !1) : !1
        }, this.stopPropagation = function(a) {
            var a = a.original ? a.original : a ? a : window.event || !1;
            return a ? a.stopPropagation ? a.stopPropagation() : (a.cancelBubble && (a.cancelBubble = !0), !1) : !1
        }, this.showRail = function() {
            return 0 == s.page.maxh || !s.ispage && "none" == s.win.css("display") || (s.visibility = !0, s.rail.visibility = !0, s.rail.css("display", "block")), s
        }, this.showRailHr = function() {
            return s.railh ? (0 == s.page.maxw || !s.ispage && "none" == s.win.css("display") || (s.railh.visibility = !0, s.railh.css("display", "block")), s) : s
        }, this.hideRail = function() {
            return s.visibility = !1, s.rail.visibility = !1, s.rail.css("display", "none"), s
        }, this.hideRailHr = function() {
            return s.railh ? (s.railh.visibility = !1, s.railh.css("display", "none"), s) : s
        }, this.show = function() {
            return s.hidden = !1, s.locked = !1, s.showRail().showRailHr()
        }, this.hide = function() {
            return s.hidden = !0, s.locked = !0, s.hideRail().hideRailHr()
        }, this.toggle = function() {
            return s.hidden ? s.show() : s.hide()
        }, this.remove = function() {
            s.stop(), s.cursortimeout && clearTimeout(s.cursortimeout), s.doZoomOut(), s.unbindAll(), v.isie9 && s.win[0].detachEvent("onpropertychange", s.onAttributeChange), s.observer !== !1 && s.observer.disconnect(), s.observerremover !== !1 && s.observerremover.disconnect(), s.events = null, s.cursor && s.cursor.remove(), s.cursorh && s.cursorh.remove(), s.rail && s.rail.remove(), s.railh && s.railh.remove(), s.zoom && s.zoom.remove();
            for (var a = 0; a < s.saved.css.length; a++) {
                var b = s.saved.css[a];
                b[0].css(b[1], "undefined" == typeof b[2] ? "" : b[2])
            }
            s.saved = !1, s.me.data("__nicescroll", "");
            var c = i.nicescroll;
            c.each(function(a) {
                if (this && this.id === s.id) {
                    delete c[a];
                    for (var b = ++a; b < c.length; b++, a++)
                        c[a] = c[b];
                    c.length--, c.length && delete c[c.length]
                }
            });
            for (var d in s)
                s[d] = null, delete s[d];
            s = null
        }, this.scrollstart = function(a) {
            return this.onscrollstart = a, s
        }, this.scrollend = function(a) {
            return this.onscrollend = a, s
        }, this.scrollcancel = function(a) {
            return this.onscrollcancel = a, s
        }, this.zoomin = function(a) {
            return this.onzoomin = a, s
        }, this.zoomout = function(a) {
            return this.onzoomout = a, s
        }, this.isScrollable = function(a) {
            var b = a.target ? a.target : a;
            if ("OPTION" == b.nodeName)
                return !0;
            for (; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName); ) {
                var c = i(b), d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                if (/scroll|auto/.test(d))
                    return b.clientHeight != b.scrollHeight;
                b = b.parentNode ? b.parentNode : !1
            }
            return !1
        }, this.getViewport = function(a) {
            for (var b = a && a.parentNode ? a.parentNode : !1; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName); ) {
                var c = i(b);
                if (/fixed|absolute/.test(c.css("position")))
                    return c;
                var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                if (/scroll|auto/.test(d) && b.clientHeight != b.scrollHeight)
                    return c;
                if (c.getNiceScroll().length > 0)
                    return c;
                b = b.parentNode ? b.parentNode : !1
            }
            return b ? i(b) : !1
        }, this.triggerScrollEnd = function() {
            if (s.onscrollend) {
                var a = s.getScrollLeft(), b = s.getScrollTop(), c = {type: "scrollend",current: {x: a,y: b},end: {x: a,y: b}};
                s.onscrollend.call(s, c)
            }
        }, this.onmousewheel = function(a) {
            if (!s.wheelprevented) {
                if (s.locked)
                    return s.debounced("checkunlock", s.resize, 250), !0;
                if (s.rail.drag)
                    return s.cancelEvent(a);
                if ("auto" == s.opt.oneaxismousemode && 0 != a.deltaX && (s.opt.oneaxismousemode = !1), s.opt.oneaxismousemode && 0 == a.deltaX && !s.rail.scrollable)
                    return s.railh && s.railh.scrollable ? s.onmousewheelhr(a) : !0;
                var b = +new Date, c = !1;
                if (s.opt.preservenativescrolling && s.checkarea + 600 < b && (s.nativescrollingarea = s.isScrollable(a), c = !0), s.checkarea = b, s.nativescrollingarea)
                    return !0;
                var d = q(a, !1, c);
                return d && (s.checkarea = 0), d
            }
        }, this.onmousewheelhr = function(a) {
            if (!s.wheelprevented) {
                if (s.locked || !s.railh.scrollable)
                    return !0;
                if (s.rail.drag)
                    return s.cancelEvent(a);
                var b = +new Date, c = !1;
                return s.opt.preservenativescrolling && s.checkarea + 600 < b && (s.nativescrollingarea = s.isScrollable(a), c = !0), s.checkarea = b, s.nativescrollingarea ? !0 : s.locked ? s.cancelEvent(a) : q(a, !0, c)
            }
        }, this.stop = function() {
            return s.cancelScroll(), s.scrollmon && s.scrollmon.stop(), s.cursorfreezed = !1, s.scroll.y = Math.round(s.getScrollTop() * (1 / s.scrollratio.y)), s.noticeCursor(), s
        }, this.getTransitionSpeed = function(a) {
            var b = Math.round(10 * s.opt.scrollspeed), c = Math.min(b, Math.round(a / 20 * s.opt.scrollspeed));
            return c > 20 ? c : 0
        }, s.opt.smoothscroll ? s.ishwscroll && v.hastransition && s.opt.usetransition ? (this.prepareTransition = function(a, b) {
            var c = b ? a > 20 ? a : 0 : s.getTransitionSpeed(a), d = c ? v.prefixstyle + "transform " + c + "ms ease-out" : "";
            return s.lasttransitionstyle && s.lasttransitionstyle == d || (s.lasttransitionstyle = d, s.doc.css(v.transitionstyle, d)), c
        }, this.doScrollLeft = function(a, b) {
            var c = s.scrollrunning ? s.newscrolly : s.getScrollTop();
            s.doScrollPos(a, c, b)
        }, this.doScrollTop = function(a, b) {
            var c = s.scrollrunning ? s.newscrollx : s.getScrollLeft();
            s.doScrollPos(c, a, b)
        }, this.doScrollPos = function(a, b, c) {
            var d = s.getScrollTop(), e = s.getScrollLeft();
            return ((s.newscrolly - d) * (b - d) < 0 || (s.newscrollx - e) * (a - e) < 0) && s.cancelScroll(), 0 == s.opt.bouncescroll && (0 > b ? b = 0 : b > s.page.maxh && (b = s.page.maxh), 0 > a ? a = 0 : a > s.page.maxw && (a = s.page.maxw)), s.scrollrunning && a == s.newscrollx && b == s.newscrolly ? !1 : (s.newscrolly = b, s.newscrollx = a, s.newscrollspeed = c || !1, s.timer ? !1 : void (s.timer = setTimeout(function() {
                var c = s.getScrollTop(), d = s.getScrollLeft(), e = {};
                e.x = a - d, e.y = b - c, e.px = d, e.py = c;
                var f = Math.round(Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2))), g = s.newscrollspeed && s.newscrollspeed > 1 ? s.newscrollspeed : s.getTransitionSpeed(f);
                if (s.newscrollspeed && s.newscrollspeed <= 1 && (g *= s.newscrollspeed), s.prepareTransition(g, !0), s.timerscroll && s.timerscroll.tm && clearInterval(s.timerscroll.tm), g > 0) {
                    if (!s.scrollrunning && s.onscrollstart) {
                        var h = {type: "scrollstart",current: {x: d,y: c},request: {x: a,y: b},end: {x: s.newscrollx,y: s.newscrolly},speed: g};
                        s.onscrollstart.call(s, h)
                    }
                    v.transitionend ? s.scrollendtrapped || (s.scrollendtrapped = !0, s.bind(s.doc, v.transitionend, s.onScrollTransitionEnd, !1)) : (s.scrollendtrapped && clearTimeout(s.scrollendtrapped), s.scrollendtrapped = setTimeout(s.onScrollTransitionEnd, g));
                    var i = c, j = d;
                    s.timerscroll = {bz: new BezierClass(i, s.newscrolly, g, 0, 0, .58, 1),bh: new BezierClass(j, s.newscrollx, g, 0, 0, .58, 1)}, s.cursorfreezed || (s.timerscroll.tm = setInterval(function() {
                        s.showCursor(s.getScrollTop(), s.getScrollLeft())
                    }, 60))
                }
                s.synched("doScroll-set", function() {
                    s.timer = 0, s.scrollendtrapped && (s.scrollrunning = !0), s.setScrollTop(s.newscrolly), s.setScrollLeft(s.newscrollx), s.scrollendtrapped || s.onScrollTransitionEnd()
                })
            }, 50)))
        }, this.cancelScroll = function() {
            if (!s.scrollendtrapped)
                return !0;
            var a = s.getScrollTop(), b = s.getScrollLeft();
            return s.scrollrunning = !1, v.transitionend || clearTimeout(v.transitionend), s.scrollendtrapped = !1, s._unbind(s.doc, v.transitionend, s.onScrollTransitionEnd), s.prepareTransition(0), s.setScrollTop(a), s.railh && s.setScrollLeft(b), s.timerscroll && s.timerscroll.tm && clearInterval(s.timerscroll.tm), s.timerscroll = !1, s.cursorfreezed = !1, s.showCursor(a, b), s
        }, this.onScrollTransitionEnd = function() {
            s.scrollendtrapped && s._unbind(s.doc, v.transitionend, s.onScrollTransitionEnd), s.scrollendtrapped = !1, s.prepareTransition(0), s.timerscroll && s.timerscroll.tm && clearInterval(s.timerscroll.tm), s.timerscroll = !1;
            var a = s.getScrollTop(), b = s.getScrollLeft();
            return s.setScrollTop(a), s.railh && s.setScrollLeft(b), s.noticeCursor(!1, a, b), s.cursorfreezed = !1, 0 > a ? a = 0 : a > s.page.maxh && (a = s.page.maxh), 0 > b ? b = 0 : b > s.page.maxw && (b = s.page.maxw), a != s.newscrolly || b != s.newscrollx ? s.doScrollPos(b, a, s.opt.snapbackspeed) : (s.onscrollend && s.scrollrunning && s.triggerScrollEnd(), void (s.scrollrunning = !1))
        }) : (this.doScrollLeft = function(a, b) {
            var c = s.scrollrunning ? s.newscrolly : s.getScrollTop();
            s.doScrollPos(a, c, b)
        }, this.doScrollTop = function(a, b) {
            var c = s.scrollrunning ? s.newscrollx : s.getScrollLeft();
            s.doScrollPos(c, a, b)
        }, this.doScrollPos = function(a, b, c) {
            function d() {
                if (s.cancelAnimationFrame)
                    return !0;
                if (s.scrollrunning = !0, m = 1 - m)
                    return s.timer = k(d) || 1;
                var a = 0, b = sy = s.getScrollTop();
                if (s.dst.ay) {
                    b = s.bzscroll ? s.dst.py + s.bzscroll.getNow() * s.dst.ay : s.newscrolly;
                    var c = b - sy;
                    (0 > c && b < s.newscrolly || c > 0 && b > s.newscrolly) && (b = s.newscrolly), s.setScrollTop(b), b == s.newscrolly && (a = 1)
                } else
                    a = 1;
                var e = sx = s.getScrollLeft();
                if (s.dst.ax) {
                    e = s.bzscroll ? s.dst.px + s.bzscroll.getNow() * s.dst.ax : s.newscrollx;
                    var c = e - sx;
                    (0 > c && e < s.newscrollx || c > 0 && e > s.newscrollx) && (e = s.newscrollx), s.setScrollLeft(e), e == s.newscrollx && (a += 1)
                } else
                    a += 1;
                2 == a ? (s.timer = 0, s.cursorfreezed = !1, s.bzscroll = !1, s.scrollrunning = !1, 0 > b ? b = 0 : b > s.page.maxh && (b = s.page.maxh), 0 > e ? e = 0 : e > s.page.maxw && (e = s.page.maxw), e != s.newscrollx || b != s.newscrolly ? s.doScrollPos(e, b) : s.onscrollend && s.triggerScrollEnd()) : s.timer = k(d) || 1
            }
            var b = "undefined" == typeof b || b === !1 ? s.getScrollTop(!0) : b;
            if (s.timer && s.newscrolly == b && s.newscrollx == a)
                return !0;
            s.timer && l(s.timer), s.timer = 0;
            var e = s.getScrollTop(), f = s.getScrollLeft();
            ((s.newscrolly - e) * (b - e) < 0 || (s.newscrollx - f) * (a - f) < 0) && s.cancelScroll(), s.newscrolly = b, s.newscrollx = a, s.bouncescroll && s.rail.visibility || (s.newscrolly < 0 ? s.newscrolly = 0 : s.newscrolly > s.page.maxh && (s.newscrolly = s.page.maxh)), s.bouncescroll && s.railh.visibility || (s.newscrollx < 0 ? s.newscrollx = 0 : s.newscrollx > s.page.maxw && (s.newscrollx = s.page.maxw)), s.dst = {}, s.dst.x = a - f, s.dst.y = b - e, s.dst.px = f, s.dst.py = e;
            var g = Math.round(Math.sqrt(Math.pow(s.dst.x, 2) + Math.pow(s.dst.y, 2)));
            s.dst.ax = s.dst.x / g, s.dst.ay = s.dst.y / g;
            var h = 0, i = g;
            0 == s.dst.x ? (h = e, i = b, s.dst.ay = 1, s.dst.py = 0) : 0 == s.dst.y && (h = f, i = a, s.dst.ax = 1, s.dst.px = 0);
            var j = s.getTransitionSpeed(g);
            if (c && 1 >= c && (j *= c), s.bzscroll = j > 0 ? s.bzscroll ? s.bzscroll.update(i, j) : new BezierClass(h, i, j, 0, 1, 0, 1) : !1, !s.timer) {
                (e == s.page.maxh && b >= s.page.maxh || f == s.page.maxw && a >= s.page.maxw) && s.checkContentSize();
                var m = 1;
                if (s.cancelAnimationFrame = !1, s.timer = 1, s.onscrollstart && !s.scrollrunning) {
                    var n = {type: "scrollstart",current: {x: f,y: e},request: {x: a,y: b},end: {x: s.newscrollx,y: s.newscrolly},speed: j};
                    s.onscrollstart.call(s, n)
                }
                d(), (e == s.page.maxh && b >= e || f == s.page.maxw && a >= f) && s.checkContentSize(), s.noticeCursor()
            }
        }, this.cancelScroll = function() {
            return s.timer && l(s.timer), s.timer = 0, s.bzscroll = !1, s.scrollrunning = !1, s
        }) : (this.doScrollLeft = function(a, b) {
            var c = s.getScrollTop();
            s.doScrollPos(a, c, b)
        }, this.doScrollTop = function(a, b) {
            var c = s.getScrollLeft();
            s.doScrollPos(c, a, b)
        }, this.doScrollPos = function(a, b) {
            var c = a > s.page.maxw ? s.page.maxw : a;
            0 > c && (c = 0);
            var d = b > s.page.maxh ? s.page.maxh : b;
            0 > d && (d = 0), s.synched("scroll", function() {
                s.setScrollTop(d), s.setScrollLeft(c)
            })
        }, this.cancelScroll = function() {
        }), this.doScrollBy = function(a, b) {
            var c = 0;
            if (b)
                c = Math.floor((s.scroll.y - a) * s.scrollratio.y);
            else {
                var d = s.timer ? s.newscrolly : s.getScrollTop(!0);
                c = d - a
            }
            if (s.bouncescroll) {
                var e = Math.round(s.view.h / 2);
                -e > c ? c = -e : c > s.page.maxh + e && (c = s.page.maxh + e)
            }
            return s.cursorfreezed = !1, py = s.getScrollTop(!0), 0 > c && py <= 0 ? s.noticeCursor() : c > s.page.maxh && py >= s.page.maxh ? (s.checkContentSize(), s.noticeCursor()) : void s.doScrollTop(c)
        }, this.doScrollLeftBy = function(a, b) {
            var c = 0;
            if (b)
                c = Math.floor((s.scroll.x - a) * s.scrollratio.x);
            else {
                var d = s.timer ? s.newscrollx : s.getScrollLeft(!0);
                c = d - a
            }
            if (s.bouncescroll) {
                var e = Math.round(s.view.w / 2);
                -e > c ? c = -e : c > s.page.maxw + e && (c = s.page.maxw + e)
            }
            return s.cursorfreezed = !1, px = s.getScrollLeft(!0), 0 > c && px <= 0 ? s.noticeCursor() : c > s.page.maxw && px >= s.page.maxw ? s.noticeCursor() : void s.doScrollLeft(c)
        }, this.doScrollTo = function(a, b) {
            var c = b ? Math.round(a * s.scrollratio.y) : a;
            0 > c ? c = 0 : c > s.page.maxh && (c = s.page.maxh), s.cursorfreezed = !1, s.doScrollTop(a)
        }, this.checkContentSize = function() {
            var a = s.getContentSize();
            (a.h != s.page.h || a.w != s.page.w) && s.resize(!1, a)
        }, s.onscroll = function() {
            s.rail.drag || s.cursorfreezed || s.synched("scroll", function() {
                s.scroll.y = Math.round(s.getScrollTop() * (1 / s.scrollratio.y)), s.railh && (s.scroll.x = Math.round(s.getScrollLeft() * (1 / s.scrollratio.x))), s.noticeCursor()
            })
        }, s.bind(s.docscroll, "scroll", s.onscroll), this.doZoomIn = function(a) {
            if (!s.zoomactive) {
                s.zoomactive = !0, s.zoomrestore = {style: {}};
                var b = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"], c = s.win[0].style;
                for (var d in b) {
                    var e = b[d];
                    s.zoomrestore.style[e] = "undefined" != typeof c[e] ? c[e] : ""
                }
                s.zoomrestore.style.width = s.win.css("width"), s.zoomrestore.style.height = s.win.css("height"), s.zoomrestore.padding = {w: s.win.outerWidth() - s.win.width(),h: s.win.outerHeight() - s.win.height()}, v.isios4 && (s.zoomrestore.scrollTop = i(window).scrollTop(), i(window).scrollTop(0)), s.win.css({position: v.isios4 ? "absolute" : "fixed",top: 0,left: 0,"z-index": h + 100,margin: "0px"});
                var f = s.win.css("backgroundColor");
                return ("" == f || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(f)) && s.win.css("backgroundColor", "#fff"), s.rail.css({"z-index": h + 101}), s.zoom.css({"z-index": h + 102}), s.zoom.css("backgroundPosition", "0px -18px"), s.resizeZoom(), s.onzoomin && s.onzoomin.call(s), s.cancelEvent(a)
            }
        }, this.doZoomOut = function(a) {
            return s.zoomactive ? (s.zoomactive = !1, s.win.css("margin", ""), s.win.css(s.zoomrestore.style), v.isios4 && i(window).scrollTop(s.zoomrestore.scrollTop), s.rail.css({"z-index": s.zindex}), s.zoom.css({"z-index": s.zindex}), s.zoomrestore = !1, s.zoom.css("backgroundPosition", "0px 0px"), s.onResize(), s.onzoomout && s.onzoomout.call(s), s.cancelEvent(a)) : void 0
        }, this.doZoom = function(a) {
            return s.zoomactive ? s.doZoomOut(a) : s.doZoomIn(a)
        }, this.resizeZoom = function() {
            if (s.zoomactive) {
                var a = s.getScrollTop();
                s.win.css({width: i(window).width() - s.zoomrestore.padding.w + "px",height: i(window).height() - s.zoomrestore.padding.h + "px"}), s.onResize(), s.setScrollTop(Math.min(s.page.maxh, a))
            }
        }, this.init(), i.nicescroll.push(this)
    }, t = function(a) {
        var b = this;
        this.nc = a, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.time = function() {
            return +new Date
        }, this.reset = function(a, c) {
            b.stop();
            var d = b.time();
            b.steptime = 0, b.lasttime = d, b.speedx = 0, b.speedy = 0, b.lastx = a, b.lasty = c, b.lastscrollx = -1, b.lastscrolly = -1
        }, this.update = function(a, c) {
            var d = b.time();
            b.steptime = d - b.lasttime, b.lasttime = d;
            var e = c - b.lasty, f = a - b.lastx, g = b.nc.getScrollTop(), h = b.nc.getScrollLeft(), i = g + e, j = h + f;
            b.snapx = 0 > j || j > b.nc.page.maxw, b.snapy = 0 > i || i > b.nc.page.maxh, b.speedx = f, b.speedy = e, b.lastx = a, b.lasty = c
        }, this.stop = function() {
            b.nc.unsynched("domomentum2d"), b.timer && clearTimeout(b.timer), b.timer = 0, b.lastscrollx = -1, b.lastscrolly = -1
        }, this.doSnapy = function(a, c) {
            var d = !1;
            0 > c ? (c = 0, d = !0) : c > b.nc.page.maxh && (c = b.nc.page.maxh, d = !0), 0 > a ? (a = 0, d = !0) : a > b.nc.page.maxw && (a = b.nc.page.maxw, d = !0), d ? b.nc.doScrollPos(a, c, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
        }, this.doMomentum = function(a) {
            var c = b.time(), d = a ? c + a : b.lasttime, e = b.nc.getScrollLeft(), f = b.nc.getScrollTop(), g = b.nc.page.maxh, h = b.nc.page.maxw;
            b.speedx = h > 0 ? Math.min(60, b.speedx) : 0, b.speedy = g > 0 ? Math.min(60, b.speedy) : 0;
            var i = d && 60 >= c - d;
            (0 > f || f > g || 0 > e || e > h) && (i = !1);
            var j = b.speedy && i ? b.speedy : !1, k = b.speedx && i ? b.speedx : !1;
            if (j || k) {
                var l = Math.max(16, b.steptime);
                if (l > 50) {
                    var m = l / 50;
                    b.speedx *= m, b.speedy *= m, l = 50
                }
                b.demulxy = 0, b.lastscrollx = b.nc.getScrollLeft(), b.chkx = b.lastscrollx, b.lastscrolly = b.nc.getScrollTop(), b.chky = b.lastscrolly;
                var n = b.lastscrollx, o = b.lastscrolly, p = function() {
                    var a = b.time() - c > 600 ? .04 : .02;
                    b.speedx && (n = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)), b.lastscrollx = n, (0 > n || n > h) && (a = .1)), b.speedy && (o = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)), b.lastscrolly = o, (0 > o || o > g) && (a = .1)), b.demulxy = Math.min(1, b.demulxy + a), b.nc.synched("domomentum2d", function() {
                        if (b.speedx) {
                            var a = b.nc.getScrollLeft();
                            a != b.chkx && b.stop(), b.chkx = n, b.nc.setScrollLeft(n)
                        }
                        if (b.speedy) {
                            var c = b.nc.getScrollTop();
                            c != b.chky && b.stop(), b.chky = o, b.nc.setScrollTop(o)
                        }
                        b.timer || (b.nc.hideCursor(), b.doSnapy(n, o))
                    }), b.demulxy < 1 ? b.timer = setTimeout(p, l) : (b.stop(), b.nc.hideCursor(), b.doSnapy(n, o))
                };
                p()
            } else
                b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
        }
    }, u = a.fn.scrollTop;
    a.cssHooks.pageYOffset = {get: function(a) {
            var b = i.data(a, "__nicescroll") || !1;
            return b && b.ishwscroll ? b.getScrollTop() : u.call(a)
        },set: function(a, b) {
            var c = i.data(a, "__nicescroll") || !1;
            return c && c.ishwscroll ? c.setScrollTop(parseInt(b)) : u.call(a, b), this
        }}, a.fn.scrollTop = function(a) {
        if ("undefined" == typeof a) {
            var b = this[0] ? i.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollTop() : u.call(this)
        }
        return this.each(function() {
            var b = i.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollTop(parseInt(a)) : u.call(i(this), a)
        })
    };
    var v = a.fn.scrollLeft;
    i.cssHooks.pageXOffset = {get: function(a) {
            var b = i.data(a, "__nicescroll") || !1;
            return b && b.ishwscroll ? b.getScrollLeft() : v.call(a)
        },set: function(a, b) {
            var c = i.data(a, "__nicescroll") || !1;
            return c && c.ishwscroll ? c.setScrollLeft(parseInt(b)) : v.call(a, b), this
        }}, a.fn.scrollLeft = function(a) {
        if ("undefined" == typeof a) {
            var b = this[0] ? i.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollLeft() : v.call(this)
        }
        return this.each(function() {
            var b = i.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollLeft(parseInt(a)) : v.call(i(this), a)
        })
    };
    var w = function(a) {
        var b = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function(a) {
            for (var c = 0, d = 0; c < b.length; c++)
                a.call(b[c], d++);
            return b
        }, this.push = function(a) {
            b[b.length] = a, b.length++
        }, this.eq = function(a) {
            return b[a]
        }, a)
            for (var c = 0; c < a.length; c++) {
                var d = i.data(a[c], "__nicescroll") || !1;
                d && (this[this.length] = d, this.length++)
            }
        return this
    };
    c(w.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(a, b) {
        a[b] = function() {
            var a = arguments;
            return this.each(function() {
                this[b].apply(this, a)
            })
        }
    }), a.fn.getNiceScroll = function(a) {
        if ("undefined" == typeof a)
            return new w(this);
        var b = this[a] && i.data(this[a], "__nicescroll") || !1;
        return b
    }, a.extend(a.expr[":"], {nicescroll: function(a) {
            return i.data(a, "__nicescroll") ? !0 : !1
        }}), i.fn.niceScroll = function(a, b) {
        "undefined" == typeof b && ("object" != typeof a || "jquery" in a || (b = a, a = !1));
        var c = new w;
        "undefined" == typeof b && (b = {}), a && (b.doc = i(a), b.win = i(this));
        var d = !("doc" in b);
        return d || "win" in b || (b.win = i(this)), this.each(function() {
            var a = i(this).data("__nicescroll") || !1;
            a || (b.doc = d ? i(this) : b.doc, a = new s(b, i(this)), i(this).data("__nicescroll", a)), c.push(a)
        }), 1 == c.length ? c[0] : c
    }, window.NiceScroll = {getjQuery: function() {
            return a
        }}, i.nicescroll || (i.nicescroll = new w, i.nicescroll.options = p)
}), function(a, b) {
    var c = function(a, b, c) {
        var d;
        return function() {
            function e() {
                c || a.apply(f, g), d = null
            }
            var f = this, g = arguments;
            d ? clearTimeout(d) : c && a.apply(f, g), d = setTimeout(e, b || 150)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.bind("resize", c(a)) : this.trigger(b)
    }
}(jQuery, "smartresize"), function(a) {
    a.Gal = function(b, c) {
        this.element = a(c), this._init(b)
    }, a.Gal.settings = {selector: ".item",width: 225,gutter: 20,animate: !1,animationOptions: {speed: 200,duration: 300,effect: "fadeInOnAppear",queue: !0,complete: function() {
            }}}, a.Gal.prototype = {_init: function(b) {
            var c = this;
            this.name = this._setName(5), this.gridArr = [], this.gridArrAppend = [], this.gridArrPrepend = [], this.setArr = !1, this.setGrid = !1, this.setOptions, this.cols = 0, this.itemCount = 0, this.prependCount = 0, this.isPrepending = !1, this.appendCount = 0, this.resetCount = !0, this.ifCallback = !0, this.box = this.element, this.boxWidth = this.box.width(), this.options = a.extend(!0, {}, a.Gal.settings, b), this.gridArr = a.makeArray(this.box.find(this.options.selector)), this.isResizing = !1, this.w = 0, this.boxArr = [], this._setCols(), this._renderGrid("append"), a(this.box).addClass("gridalicious"), a(window).smartresize(function() {
                c.resize()
            })
        },_setName: function(a, b) {
            return b = b ? b : "", a ? this._setName(--a, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + b) : b
        },_setCols: function() {
            this.cols = Math.floor(this.box.width() / this.options.width), this.cols < 1 && (this.cols = 1), diff = (this.box.width() - this.cols * this.options.width - this.options.gutter) / this.cols, w = (this.options.width + diff) / this.box.width() * 100, this.w = w;
            for (var b = 0; b < this.cols; b++) {
                var c = a("<div></div>").addClass("galcolumn").attr("id", "item" + b + this.name).css({width: w + "%",paddingLeft: this.options.gutter,paddingBottom: this.options.gutter,"float": "left","-webkit-box-sizing": "border-box","-moz-box-sizing": "border-box","-o-box-sizing": "border-box","box-sizing": "border-box"});
                this.box.append(c)
            }
            this.box.find(a("#clear" + this.name)).remove();
            var d = a("<div></div>").css({clear: "both",height: "0",width: "0",display: "block"}).attr("id", "clear" + this.name);
            this.box.append(d)
        },_renderGrid: function(b, c, d) {
            {
                var e = [], f = [], g = 0, h = (this.prependCount, this.appendCount), i = this.options.gutter, j = this.cols, k = this.name;
                a(".galcolumn").width()
            }
            c ? (f = c, "append" == b && (h += d, g = this.appendCount), "prepend" == b && (this.isPrepending = !0, g = Math.round(d % j), 0 >= g && (g = j)), "renderAfterPrepend" == b && (h += d, g = d)) : (f = this.gridArr, h = a(this.gridArr).size()), a.each(f, function(c, d) {
                var f = a(d), l = "100%";
                f.hasClass("not-responsive") && (l = "auto"), f.css({marginBottom: i,zoom: "1",filter: "alpha(opacity=0)",opacity: "0"}).find("img, object, embed, iframe").css({width: l,height: "auto",display: "block","margin-left": "auto","margin-right": "auto"}), "prepend" == b ? (g--, a("#item" + g + k).prepend(f), e.push(f), 0 == g && (g = j)) : (a("#item" + g + k).append(f), e.push(f), g++, g >= j && (g = 0), h >= j && (h -= j))
            }), this.appendCount = h, this.itemCount = g, "append" == b || "prepend" == b ? ("prepend" == b && this._updateAfterPrepend(this.gridArr, f), this._renderItem(e), this.isPrepending = !1) : this._renderItem(this.gridArr)
        },_collectItems: function() {
            var b = [];
            return a(this.box).find(this.options.selector).each(function() {
                b.push(a(this))
            }), b
        },_renderItem: function(b) {
            var c = this.options.animationOptions.speed, d = this.options.animationOptions.effect, e = this.options.animationOptions.duration, f = this.options.animationOptions.queue, g = this.options.animate, h = this.options.animationOptions.complete, i = 0, j = 0;
            g !== !0 || this.isResizing ? (a.each(b, function(b, c) {
                a(c).css({opacity: "1",filter: "alpha(opacity=1)"})
            }), this.ifCallback && h.call(b)) : (f === !0 && "fadeInOnAppear" == d ? (this.isPrepending && b.reverse(), a.each(b, function(d, f) {
                setTimeout(function() {
                    a(f).animate({opacity: "1.0"}, e), j++, j == b.length && h.call(void 0, b)
                }, i * c), i++
            })) : f === !1 && "fadeInOnAppear" == d && (this.isPrepending && b.reverse(), a.each(b, function(c, d) {
                a(d).animate({opacity: "1.0"}, e), j++, j == b.length && this.ifCallback && h.call(void 0, b)
            })), f !== !0 || d || a.each(b, function(c, d) {
                a(d).css({opacity: "1",filter: "alpha(opacity=1)"}), j++, j == b.length && this.ifCallback && h.call(void 0, b)
            }))
        },_updateAfterPrepend: function(b, c) {
            var d = this.gridArr;
            a.each(c, function(a, b) {
                d.unshift(b)
            }), this.gridArr = d
        },resize: function() {
            this.box.width() !== this.boxWidth && (this.box.find(a(".galcolumn")).remove(), this._setCols(), this.ifCallback = !1, this.isResizing = !0, this._renderGrid("append"), this.ifCallback = !0, this.isResizing = !1, this.boxWidth = this.box.width())
        },append: function(b) {
            var c = this.gridArr, d = this.gridArrPrepend;
            a.each(b, function(a, b) {
                c.push(b), d.push(b)
            }), this._renderGrid("append", b, a(b).size())
        },prepend: function(b) {
            this.ifCallback = !1, this._renderGrid("prepend", b, a(b).size()), this.ifCallback = !0
        }}, a.fn.gridalicious = function(b, c) {
        return this.each("string" == typeof b ? function() {
            var d = a.data(this, "gridalicious");
            d[b].apply(d, [c])
        } : function() {
            a.data(this, "gridalicious", new a.Gal(b, this))
        }), this
    }
}(jQuery), function(a) {
    function b() {
    }
    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }
        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l)
                                    return l
                            } else
                                f("no such method '" + e + "' for " + b + " instance");
                        else
                            f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement, d = function() {
    };
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {
    };
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d,unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(this), function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }
    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }
    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }
    var f = a.document, g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function() {
    function a() {
    }
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c,once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {listener: b,once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])
                return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)
                if (b = c[e] + a, "string" == typeof d[b])
                    return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function(a) {
    function b(a) {
        var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }
    function c() {
        for (var a = {width: 0,height: 0,innerWidth: 0,innerHeight: 0,outerWidth: 0,outerHeight: 0}, b = 0, c = f.length; c > b; b++) {
            var d = f[b];
            a[d] = 0
        }
        return a
    }
    function d(d) {
        function g() {
            if (!m) {
                m = !0;
                var c = a.getComputedStyle;
                if (j = function() {
                    var a = c ? function(a) {
                        return c(a, null)
                    } : function(a) {
                        return a.currentStyle
                    };
                    return function(b) {
                        var c = a(b);
                        return c || e("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizeiframe"), c
                    }
                }(), k = d("boxSizing")) {
                    var f = document.createElement("div");
                    f.style.width = "200px", f.style.padding = "1px 2px 3px 4px", f.style.borderStyle = "solid", f.style.borderWidth = "1px 2px 3px 4px", f.style[k] = "border-box";
                    var g = document.body || document.documentElement;
                    g.appendChild(f);
                    var h = j(f);
                    l = 200 === b(h.width), g.removeChild(f)
                }
            }
        }
        function h(a) {
            if (g(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var d = j(a);
                if ("none" === d.display)
                    return c();
                var e = {};
                e.width = a.offsetWidth, e.height = a.offsetHeight;
                for (var h = e.isBorderBox = !(!k || !d[k] || "border-box" !== d[k]), m = 0, n = f.length; n > m; m++) {
                    var o = f[m], p = d[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    e[o] = isNaN(q) ? 0 : q
                }
                var r = e.paddingLeft + e.paddingRight, s = e.paddingTop + e.paddingBottom, t = e.marginLeft + e.marginRight, u = e.marginTop + e.marginBottom, v = e.borderLeftWidth + e.borderRightWidth, w = e.borderTopWidth + e.borderBottomWidth, x = h && l, y = b(d.width);
                y !== !1 && (e.width = y + (x ? 0 : r + v));
                var z = b(d.height);
                return z !== !1 && (e.height = z + (x ? 0 : s + w)), e.innerWidth = e.width - (r + v), e.innerHeight = e.height - (s + w), e.outerWidth = e.width + t, e.outerHeight = e.height + u, e
            }
        }
        function i(a, b) {
            if (getComputedStyle || -1 === b.indexOf("%"))
                return b;
            var c = a.style, d = c.left, e = a.runtimeStyle, f = e && e.left;
            return f && (e.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, f && (e.left = f), b
        }
        var j, k, l, m = !1;
        return h
    }
    var e = "undefined" == typeof console ? noop : function(a) {
        console.error(a)
    }, f = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("desandro-get-style-property")) : a.getSize = d(a.getStyleProperty)
}(window), function(a) {
    function b(a, b) {
        return a[g](b)
    }
    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }
    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
            if (d[e] === a)
                return !0;
        return !1
    }
    function e(a, d) {
        return c(a), b(a, d)
    }
    var f, g = function() {
        if (a.matchesSelector)
            return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c], f = e + "MatchesSelector";
            if (a[f])
                return f
        }
    }();
    if (g) {
        var h = document.createElement("div"), i = b(h, "div");
        f = i ? b : e
    } else
        f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a) {
        for (var b in a)
            return !1;
        return b = null, !0
    }
    function d(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    function e(a, e, f) {
        function h(a, b) {
            a && (this.element = a, this.layout = b, this.position = {x: 0,y: 0}, this._create())
        }
        var i = f("transition"), j = f("transform"), k = i && j, l = !!f("perspective"), m = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "otransitionend",transition: "transitionend"}[i], n = ["transform", "transition", "transitionDuration", "transitionProperty"], o = function() {
            for (var a = {}, b = 0, c = n.length; c > b; b++) {
                var d = n[b], e = f(d);
                e && e !== d && (a[d] = e)
            }
            return a
        }();
        b(h.prototype, a.prototype), h.prototype._create = function() {
            this._transn = {ingProperties: {},clean: {},onEnd: {}}, this.css({position: "absolute"})
        }, h.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, h.prototype.getSize = function() {
            this.size = e(this.element)
        }, h.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = o[c] || c;
                b[d] = a[c]
            }
        }, h.prototype.getPosition = function() {
            var a = g(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = parseInt(a[c ? "left" : "right"], 10), f = parseInt(a[d ? "top" : "bottom"], 10);
            e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
            var h = this.layout.size;
            e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
        }, h.prototype.layoutPosition = function() {
            var a = this.layout.size, b = this.layout.options, c = {};
            b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
        };
        var p = l ? function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)"
        } : function(a, b) {
            return "translate(" + a + "px, " + b + "px)"
        };
        h.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning)
                return void this.layoutPosition();
            var h = a - c, i = b - d, j = {}, k = this.layout.options;
            h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({to: j,onTransitionEnd: {transform: this.layoutPosition},isCleaning: !0})
        }, h.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, h.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd)
                a.onTransitionEnd[b].call(this)
        }, h.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd)
                b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to)
                b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var q = j && d(j) + ",opacity";
        h.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({transitionProperty: q,transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(m, this, !1))
        }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, h.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var r = {"-webkit-transform": "transform","-moz-transform": "transform","-o-transform": "transform"};
        h.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn, d = r[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                    var e = b.onEnd[d];
                    e.call(this), delete b.onEnd[d]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, h.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
        }, h.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a)
                b[c] = "";
            this.css(b)
        };
        var s = {transitionProperty: "",transitionDuration: ""};
        return h.prototype.removeTransitionStyles = function() {
            this.css(s)
        }, h.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, h.prototype.remove = function() {
            if (!i || !parseFloat(this.layout.options.transitionDuration))
                return void this.removeElem();
            var a = this;
            this.on("transitionEnd", function() {
                return a.removeElem(), !0
            }), this.hide()
        }, h.prototype.reveal = function() {
            delete this.isHidden, this.css({display: ""});
            var a = this.layout.options;
            this.transition({from: a.hiddenStyle,to: a.visibleStyle,isCleaning: !0})
        }, h.prototype.hide = function() {
            this.isHidden = !0, this.css({display: ""});
            var a = this.layout.options;
            this.transition({from: a.visibleStyle,to: a.hiddenStyle,isCleaning: !0,onTransitionEnd: {opacity: function() {
                        this.isHidden && this.css({display: "none"})
                    }}})
        }, h.prototype.destroy = function() {
            this.css({position: "",left: "",right: "",top: "",bottom: "",transition: "",transform: ""})
        }, h
    }
    var f = a.getComputedStyle, g = f ? function(a) {
        return f(a, null)
    } : function(a) {
        return a.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
}(window), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a) {
        return "[object Array]" === l.call(a)
    }
    function d(a) {
        var b = [];
        if (c(a))
            b = a;
        else if (a && "number" == typeof a.length)
            for (var d = 0, e = a.length; e > d; d++)
                b.push(a[d]);
        else
            b.push(a);
        return b
    }
    function e(a, b) {
        var c = n(b, a);
        -1 !== c && b.splice(c, 1)
    }
    function f(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    }
    function g(c, g, l, n, o, p) {
        function q(a, c) {
            if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a))
                return void (i && i.error("Bad " + this.constructor.namespace + " element: " + a));
            this.element = a, this.options = b({}, this.constructor.defaults), this.option(c);
            var d = ++r;
            this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var r = 0, s = {};
        return q.namespace = "outlayer", q.Item = p, q.defaults = {containerStyle: {position: "relative"},isInitLayout: !0,isOriginLeft: !0,isOriginTop: !0,isResizeBound: !0,isResizingContainer: !0,transitionDuration: "0.4s",hiddenStyle: {opacity: 0,transform: "scale(0.001)"},visibleStyle: {opacity: 1,transform: "scale(1)"}}, b(q.prototype, l.prototype), q.prototype.option = function(a) {
            b(this.options, a)
        }, q.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, q.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, q.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e], h = new c(g, this);
                d.push(h)
            }
            return d
        }, q.prototype._filterFindItemElements = function(a) {
            a = d(a);
            for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                if (m(g))
                    if (b) {
                        o(g, b) && c.push(g);
                        for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++)
                            c.push(h[i])
                    } else
                        c.push(g)
            }
            return c
        }, q.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++)
                a.push(this.items[b].element);
            return a
        }, q.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
            this.getSize()
        }, q.prototype.getSize = function() {
            this.size = n(this.element)
        }, q.prototype._getMeasurement = function(a, b) {
            var c, d = this.options[a];
            d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
        }, q.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, q.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, q.prototype._layoutItems = function(a, b) {
            function c() {
                d.emitEvent("layoutComplete", [d, a])
            }
            var d = this;
            if (!a || !a.length)
                return void c();
            this._itemsOn(a, "layout", c);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f], i = this._getItemLayoutPosition(h);
                i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i)
            }
            this._processLayoutQueue(e)
        }, q.prototype._getItemLayoutPosition = function() {
            return {x: 0,y: 0}
        }, q.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, q.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, q.prototype._postLayout = function() {
            this.resizeContainer()
        }, q.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, q.prototype._itemsOn = function(a, b, c) {
            function d() {
                return e++, e === f && c.call(g), !0
            }
            for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                j.on(b, d)
            }
        }, q.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, q.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, q.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, q.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e(d, this.stamps), this.unignore(d)
                }
        }, q.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
        }, q.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, q.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(), b = this.size;
            this._boundingRect = {left: a.left + b.paddingLeft + b.borderLeftWidth,top: a.top + b.paddingTop + b.borderTopWidth,right: a.right - (b.paddingRight + b.borderRightWidth),bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)}
        }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(), c = this._boundingRect, d = n(a), e = {left: b.left - c.left - d.marginLeft,top: b.top - c.top - d.marginTop,right: c.right - b.right - d.marginRight,bottom: c.bottom - b.bottom - d.marginBottom};
            return e
        }, q.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, q.prototype.bindResize = function() {
            this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
        }, q.prototype.unbindResize = function() {
            this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1
        }, q.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, q.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, q.prototype.needsResizeLayout = function() {
            var a = n(this.element), b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, q.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, q.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, q.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, q.prototype.reveal = function(a) {
            var b = a && a.length;
            if (b)
                for (var c = 0; b > c; c++) {
                    var d = a[c];
                    d.reveal()
                }
        }, q.prototype.hide = function(a) {
            var b = a && a.length;
            if (b)
                for (var c = 0; b > c; c++) {
                    var d = a[c];
                    d.hide()
                }
        }, q.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a)
                    return d
            }
        }, q.prototype.getItems = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c], f = this.getItem(e);
                    f && b.push(f)
                }
                return b
            }
        }, q.prototype.remove = function(a) {
            a = d(a);
            var b = this.getItems(a);
            if (b && b.length) {
                this._itemsOn(b, "remove", function() {
                    this.emitEvent("removeComplete", [this, b])
                });
                for (var c = 0, f = b.length; f > c; c++) {
                    var g = b[c];
                    g.remove(), e(g, this.items)
                }
            }
        }, q.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete s[e], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
        }, q.data = function(a) {
            var b = a && a.outlayerGUID;
            return b && s[b]
        }, q.create = function(a, c) {
            function d() {
                q.apply(this, arguments)
            }
            return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function() {
                p.apply(this, arguments)
            }, d.Item.prototype = new p, g(function() {
                for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                    var l, m = c[g], n = m.getAttribute(e);
                    try {
                        l = n && JSON.parse(n)
                    } catch (o) {
                        i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                        continue
                    }
                    var p = new d(m, l);
                    j && j.data(m, a, p)
                }
            }), j && j.bridget && j.bridget(a, d), d
        }, q.Item = p, q
    }
    var h = a.document, i = a.console, j = a.jQuery, k = function() {
    }, l = Object.prototype.toString, m = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    } : function(a) {
        return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
    }, n = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return c;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : "object" == typeof exports ? module.exports = g(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
}(window), function(a) {
    function b(a) {
        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData, b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({display: ""})
        }, b
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window), function(a) {
    function b(a, b) {
        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element), c = this.isotope.size && b;
            return c && b.innerHeight !== this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b, d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window), function(a) {
    function b(a, b) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--; )
                this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0], c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil", e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {x: this.columnWidth * h,y: g}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
                this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a)
                return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)
                this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {height: this.maxY};
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; )
                a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }
    var c = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            if (e === b)
                return c
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
}(window), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a, c) {
        var d = a.create("masonry"), e = d.prototype._getElementOffset, f = d.prototype.layout, g = d.prototype._getMeasurement;
        b(d.prototype, c.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], c) : "object" == typeof exports ? module.exports = c(require("../layout-mode"), require("masonry-layout")) : c(a.Isotope.LayoutMode, a.Masonry)
}(window), function(a) {
    function b(a) {
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter, c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {x: this.x,y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {height: this.maxY}
        }, b
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window), function(a) {
    function b(a) {
        var b = a.create("vertical", {horizontalAlignment: 0});
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment, c = this.y;
            return this.y += a.size.outerHeight, {x: b,y: c}
        }, b.prototype._getContainerSize = function() {
            return {height: this.y}
        }, b
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a) {
        return "[object Array]" === k.call(a)
    }
    function d(a) {
        var b = [];
        if (c(a))
            b = a;
        else if (a && "number" == typeof a.length)
            for (var d = 0, e = a.length; e > d; d++)
                b.push(a[d]);
        else
            b.push(a);
        return b
    }
    function e(a, b) {
        var c = l(b, a);
        -1 !== c && b.splice(c, 1)
    }
    function f(a, c, f, i, k) {
        function l(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e], h = c.sortData[g], i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var m = a.create("isotope", {layoutMode: "masonry",isJQueryFiltering: !0,sortAscending: !0});
        m.Item = i, m.LayoutMode = k, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), a.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var b in k.modes)
                this._initLayoutMode(b)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, a.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var b = a.prototype._itemize.apply(this, arguments), c = 0, d = b.length; d > c; c++) {
                var e = b[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(b), b
        }, m.prototype._initLayoutMode = function(a) {
            var c = k.modes[a], d = this.options[a] || {};
            this.options[a] = c.options ? b(c.options, d) : d, this.modes[a] = new c(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            this.option(a), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._filter = function(a) {
            function b() {
                l.reveal(e), l.hide(f)
            }
            var c = this.options.filter;
            c = c || "*";
            for (var d = [], e = [], f = [], g = this._getFilterTest(c), h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                if (!j.isIgnored) {
                    var k = g(j);
                    k && d.push(j), k && j.isHidden ? e.push(j) : k || j.isHidden || f.push(j)
                }
            }
            var l = this;
            return this._isInstant ? this._noTransition(b) : b(), d
        }, m.prototype._getFilterTest = function(a) {
            return g && this.options.isJQueryFiltering ? function(b) {
                return g(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return f(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = d(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a)
                    return a;
                var c = h(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/), f = e && e[1], g = b(f, d), i = m.sortDataParsers[c[1]];
                return a = i ? function(a) {
                    return a && i(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }
            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && j(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {parseInt: function(a) {
                return parseInt(a, 10)
            },parseFloat: function(a) {
                return parseFloat(a)
            }}, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory), c = l(b, this.options.sortAscending);
                this.filteredItems.sort(c), a !== this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode, b = this.modes[a];
            if (!b)
                throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            a.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps();
                var d = this._filterRevealAdded(b);
                this.layoutItems(c), this.filteredItems = d.concat(this.filteredItems)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._noTransition(function() {
                return this._filter(a)
            });
            return this.layoutItems(b, !0), this.reveal(b), a
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++)
                    d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b);
                for (this._noTransition(function() {
                    this.hide(f)
                }), c = 0; e > c; c++)
                    b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++)
                    delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = d(a);
            var b = this.getItems(a);
            if (o.call(this, a), b && b.length)
                for (var c = 0, f = b.length; f > c; c++) {
                    var g = b[c];
                    e(g, this.filteredItems)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
                a.push(this.filteredItems[b].element);
            return a
        }, m
    }
    var g = a.jQuery, h = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, i = document.documentElement, j = i.textContent ? function(a) {
        return a.textContent
    } : function(a) {
        return a.innerText
    }, k = Object.prototype.toString, l = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return c;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], f) : "object" == typeof exports ? module.exports = f(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = f(a.Outlayer, a.getSize, a.matchesSelector, a.Isotope.Item, a.Isotope.LayoutMode)
}(window), function(a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }
    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList" in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }, e = function(a, b) {
        a.classList.add(b)
    }, f = function(a, b) {
        a.classList.remove(b)
    }) : (d = function(a, c) {
        return b(c).test(a.className)
    }, e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }, f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    });
    var g = {hasClass: d,addClass: e,removeClass: f,toggleClass: c,has: d,add: e,remove: f,toggle: c};
    "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window), function(a) {
    function b() {
        function a(b) {
            for (var c in a.defaults)
                this[c] = a.defaults[c];
            for (c in b)
                this[c] = b[c]
        }
        return c.Rect = a, a.defaults = {x: 0,y: 0,width: 0,height: 0}, a.prototype.contains = function(a) {
            var b = a.width || 0, c = a.height || 0;
            return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
        }, a.prototype.overlaps = function(a) {
            var b = this.x + this.width, c = this.y + this.height, d = a.x + a.width, e = a.y + a.height;
            return this.x < d && b > a.x && this.y < e && c > a.y
        }, a.prototype.getMaximalFreeRects = function(b) {
            if (!this.overlaps(b))
                return !1;
            var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height;
            return this.y < b.y && (c = new a({x: this.x,y: this.y,width: this.width,height: b.y - this.y}), d.push(c)), e > g && (c = new a({x: g,y: this.y,width: e - g,height: this.height}), d.push(c)), f > h && (c = new a({x: this.x,y: h,width: this.width,height: f - h}), d.push(c)), this.x < b.x && (c = new a({x: this.x,y: this.y,width: b.x - this.x,height: this.height}), d.push(c)), d
        }, a.prototype.canFit = function(a) {
            return this.width >= a.width && this.height >= a.height
        }, a
    }
    var c = a.Packery = function() {
    };
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window), function(a) {
    function b(a) {
        function b(a, b, c) {
            this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
        }
        b.prototype.reset = function() {
            this.spaces = [], this.newSpaces = [];
            var b = new a({x: 0,y: 0,width: this.width,height: this.height});
            this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight
        }, b.prototype.pack = function(a) {
            for (var b = 0, c = this.spaces.length; c > b; b++) {
                var d = this.spaces[b];
                if (d.canFit(a)) {
                    this.placeInSpace(a, d);
                    break
                }
            }
        }, b.prototype.placeInSpace = function(a, b) {
            a.x = b.x, a.y = b.y, this.placed(a)
        }, b.prototype.placed = function(a) {
            for (var c = [], d = 0, e = this.spaces.length; e > d; d++) {
                var f = this.spaces[d], g = f.getMaximalFreeRects(a);
                g ? c.push.apply(c, g) : c.push(f)
            }
            this.spaces = c, b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, b.mergeRects = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                if (d) {
                    var e = a.slice(0);
                    e.splice(b, 1);
                    for (var f = 0, g = 0, h = e.length; h > g; g++) {
                        var i = e[g], j = b > g ? 0 : 1;
                        d.contains(i) && (a.splice(g + j - f, 1), f++)
                    }
                }
            }
            return a
        };
        var c = {downwardLeftToRight: function(a, b) {
                return a.y - b.y || a.x - b.x
            },rightwardTopToBottom: function(a, b) {
                return a.x - b.x || a.y - b.y
            }};
        return b
    }
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], b);
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window), function(a) {
    function b(a, b, c) {
        var d = a("transform"), e = function() {
            b.Item.apply(this, arguments)
        };
        e.prototype = new b.Item;
        var f = e.prototype._create;
        return e.prototype._create = function() {
            f.call(this), this.rect = new c, this.placeRect = new c
        }, e.prototype.dragStart = function() {
            this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
        }, e.prototype.dragMove = function(a, b) {
            this.didDrag = !0;
            var c = this.layout.size;
            a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b)
        }, e.prototype.dragStop = function() {
            this.getPosition();
            var a = this.position.x !== this.placeRect.x, b = this.position.y !== this.placeRect.y;
            this.needsPositioning = a || b, this.didDrag = !1
        }, e.prototype.positionPlaceRect = function(a, b, c) {
            this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
        }, e.prototype.getPlaceRectCoord = function(a, b, c) {
            var d = b ? "Width" : "Height", e = this.size["outer" + d], f = this.layout[b ? "columnWidth" : "rowHeight"], g = this.layout.size["inner" + d];
            b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
            var h;
            if (f) {
                f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
                var i;
                i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
                var j = Math[i](g / f);
                j -= Math.ceil(e / f), h = j
            } else
                h = g - e;
            return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a)
        }, e.prototype.copyPlaceRectPosition = function() {
            this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
        }, e
    }
    "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window), function(a) {
    function b(a, b, c, d, e, f) {
        function g(a, b) {
            return a.position.y - b.position.y || a.position.x - b.position.x
        }
        function h(a, b) {
            return a.position.x - b.position.x || a.position.y - b.position.y
        }
        var i = c.create("packery");
        return i.Item = f, i.prototype._create = function() {
            c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
            var a = this;
            this.handleDraggabilly = {dragStart: function(b) {
                    a.itemDragStart(b.element)
                },dragMove: function(b) {
                    a.itemDragMove(b.element, b.position.x, b.position.y)
                },dragEnd: function(b) {
                    a.itemDragEnd(b.element)
                }}, this.handleUIDraggable = {start: function(b) {
                    a.itemDragStart(b.currentTarget)
                },drag: function(b, c) {
                    a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
                },stop: function(b) {
                    a.itemDragEnd(b.currentTarget)
                }}
        }, i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var a = this.packer;
            this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0
        }, i.prototype._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, i.prototype._getItemLayoutPosition = function(a) {
            return this._packItem(a), a.rect
        }, i.prototype._packItem = function(a) {
            this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect)
        }, i.prototype._setMaxXY = function(a) {
            this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
        }, i.prototype._setRectSize = function(a, c) {
            var d = b(a), e = d.outerWidth, f = d.outerHeight, g = this.columnWidth + this.gutter, h = this.rowHeight + this.gutter;
            e = this.columnWidth ? Math.ceil(e / g) * g : e + this.gutter, f = this.rowHeight ? Math.ceil(f / h) * h : f + this.gutter, c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
        }, i.prototype._getContainerSize = function() {
            return this.options.isHorizontal ? {width: this.maxX - this.gutter} : {height: this.maxY - this.gutter}
        }, i.prototype._manageStamp = function(a) {
            var b, c = this.getItem(a);
            if (c && c.isPlacing)
                b = c.placeRect;
            else {
                var e = this._getElementOffset(a);
                b = new d({x: this.options.isOriginLeft ? e.left : e.right,y: this.options.isOriginTop ? e.top : e.bottom})
            }
            this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
        }, i.prototype.sortItemsByPosition = function() {
            var a = this.options.isHorizontal ? h : g;
            this.items.sort(a)
        }, i.prototype.fit = function(a, b, c) {
            var d = this.getItem(a);
            d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition())
        }, i.prototype._bindFitEvents = function(a) {
            function b() {
                d++, 2 === d && c.emitEvent("fitComplete", [c, a])
            }
            var c = this, d = 0;
            a.on("layout", function() {
                return b(), !0
            }), this.on("layoutComplete", function() {
                return b(), !0
            })
        }, i.prototype.resize = function() {
            var a = b(this.element), c = this.size && a, d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            c && a[d] === this.size[d] || this.layout()
        }, i.prototype.itemDragStart = function(a) {
            this.stamp(a);
            var b = this.getItem(a);
            b && b.dragStart()
        }, i.prototype.itemDragMove = function(a, b, c) {
            function d() {
                f.layout(), delete f.dragTimeout
            }
            var e = this.getItem(a);
            e && e.dragMove(b, c);
            var f = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40)
        }, i.prototype.clearDragTimeout = function() {
            this.dragTimeout && clearTimeout(this.dragTimeout)
        }, i.prototype.itemDragEnd = function(b) {
            var c, d = this.getItem(b);
            if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning)
                return void this.unstamp(b);
            a.add(d.element, "is-positioning-post-drag");
            var e = this._getDragEndLayoutComplete(b, d);
            d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
        }, i.prototype._getDragEndLayoutComplete = function(b, c) {
            var d = c && c.needsPositioning, e = 0, f = d ? 2 : 1, g = this;
            return function() {
                return e++, e !== f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [g, c]), !0)
            }
        }, i.prototype.bindDraggabillyEvents = function(a) {
            a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd)
        }, i.prototype.bindUIDraggableEvents = function(a) {
            a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
        }, i.Rect = d, i.Packer = e, i
    }
    "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a, c, d) {
        var e = a.create("packery"), f = e.prototype._getElementOffset, g = e.prototype._getMeasurement;
        b(e.prototype, c.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g;
        var h = e.prototype._resetLayout;
        e.prototype._resetLayout = function() {
            this.packer = this.packer || new c.Packer, h.apply(this, arguments)
        };
        var i = e.prototype._getItemLayoutPosition;
        e.prototype._getItemLayoutPosition = function(a) {
            return a.rect = a.rect || new c.Rect, i.call(this, a)
        };
        var j = e.prototype._manageStamp;
        return e.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments)
        }, e.prototype.needsResizeLayout = function() {
            var a = d(this.element), b = this.size && a, c = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            return b && a[c] !== this.size[c]
        }, e
    }
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], c) : c(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }
    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {
        }
    }
    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g, h = a.cookie = function(e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                var j = i.expires, k = i.expires = new Date;
                k.setTime(+k + 864e5 * j)
            }
            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break
            }
            e || void 0 === (r = f(r)) || (l[q] = r)
        }
        return l
    };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
    }
}), !function(a, b, c) {
    b[a] = c
}("onDomReady", this, function(a) {
    "use strict";
    function b(a) {
        if (!v) {
            if (!g.body)
                return e(b);
            for (v = !0; a = w.shift(); )
                e(a)
        }
    }
    function c(a) {
        (t || a.type === i || g[m] === l) && (d(), b())
    }
    function d() {
        t ? (g[s](q, c, j), a[s](i, c, j)) : (g[o](r, c), a[o](k, c))
    }
    function e(a, b) {
        setTimeout(a, +b >= 0 ? b : 1)
    }
    function f(a) {
        v ? e(a) : w.push(a)
    }
    null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function y() {
        document.removeEventListener("DOMContentLoaded", y, !1), document.readyState = "complete"
    }, !1), document.readyState = "loading");
    var g = a.document, h = g.documentElement, i = "load", j = !1, k = "on" + i, l = "complete", m = "readyState", n = "attachEvent", o = "detachEvent", p = "addEventListener", q = "DOMContentLoaded", r = "onreadystatechange", s = "removeEventListener", t = p in g, u = j, v = j, w = [];
    if (g[m] === l)
        e(b);
    else if (t)
        g[p](q, c, j), a[p](i, c, j);
    else {
        g[n](r, c), a[n](k, c);
        try {
            u = null == a.frameElement && h
        } catch (x) {
        }
        u && u.doScroll && !function z() {
            if (!v) {
                try {
                    u.doScroll("left")
                } catch (a) {
                    return e(z, 50)
                }
                d(), b()
            }
        }()
    }
    return f.version = "1.4.0", f.isReady = function() {
        return v
    }, f
}(this)), document.querySelectorAll || (document.querySelectorAll = function(a) {
    var b, c = document.createElement("style"), d = [];
    for (document.documentElement.firstChild.appendChild(c), document._qsa = [], c.styleSheet.cssText = a + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), c.parentNode.removeChild(c); document._qsa.length; )
        b = document._qsa.shift(), b.style.removeAttribute("x-qsa"), d.push(b);
    return document._qsa = null, d
}), document.querySelector || (document.querySelector = function(a) {
    var b = document.querySelectorAll(a);
    return b.length ? b[0] : null
}), document.getElementsByClassName || (document.getElementsByClassName = function(a) {
    return a = String(a).replace(/^|\s+/g, "."), document.querySelectorAll(a)
}), Object.keys || (Object.keys = function(a) {
    if (a !== Object(a))
        throw TypeError("Object.keys called on non-object");
    var b, c = [];
    for (b in a)
        Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
    return c
}), function(a) {
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    a.atob = a.atob || function(a) {
        a = String(a);
        var c, d = 0, e = [], f = 0, g = 0;
        if (a = a.replace(/\s/g, ""), a.length % 4 === 0 && (a = a.replace(/=+$/, "")), a.length % 4 === 1)
            throw Error("InvalidCharacterError");
        if (/[^+/0-9A-Za-z]/.test(a))
            throw Error("InvalidCharacterError");
        for (; d < a.length; )
            c = b.indexOf(a.charAt(d)), f = f << 6 | c, g += 6, 24 === g && (e.push(String.fromCharCode(f >> 16 & 255)), e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f)), g = 0, f = 0), d += 1;
        return 12 === g ? (f >>= 4, e.push(String.fromCharCode(255 & f))) : 18 === g && (f >>= 2, e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f))), e.join("")
    }, a.btoa = a.btoa || function(a) {
        a = String(a);
        var c, d, e, f, g, h, i, j = 0, k = [];
        if (/[^\x00-\xFF]/.test(a))
            throw Error("InvalidCharacterError");
        for (; j < a.length; )
            c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, j === a.length + 2 ? (h = 64, i = 64) : j === a.length + 1 && (i = 64), k.push(b.charAt(f), b.charAt(g), b.charAt(h), b.charAt(i));
        return k.join("")
    }
}(this), function() {
    function a(b, c, d) {
        b.document;
        var e, f = b.currentStyle[c].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ""], g = f[1], h = f[2];
        return d = d ? /%|em/.test(h) && b.parentElement ? a(b.parentElement, "fontSize", null) : 16 : d, e = "fontSize" == c ? d : /width/i.test(c) ? b.clientWidth : b.clientHeight, "%" == h ? g / 100 * e : "cm" == h ? .3937 * g * 96 : "em" == h ? g * d : "in" == h ? 96 * g : "mm" == h ? .3937 * g * 96 / 10 : "pc" == h ? 12 * g * 96 / 72 : "pt" == h ? 96 * g / 72 : g
    }
    function b(a, b) {
        var c = "border" == b ? "Width" : "", d = b + "Top" + c, e = b + "Right" + c, f = b + "Bottom" + c, g = b + "Left" + c;
        a[b] = (a[d] == a[e] && a[d] == a[f] && a[d] == a[g] ? [a[d]] : a[d] == a[f] && a[g] == a[e] ? [a[d], a[e]] : a[g] == a[e] ? [a[d], a[e], a[f]] : [a[d], a[e], a[f], a[g]]).join(" ")
    }
    function c(c) {
        var d, e = this, f = c.currentStyle, g = a(c, "fontSize"), h = function(a) {
            return "-" + a.toLowerCase()
        };
        for (d in f)
            if (Array.prototype.push.call(e, "styleFloat" == d ? "float" : d.replace(/[A-Z]/, h)), "width" == d)
                e[d] = c.offsetWidth + "px";
            else if ("height" == d)
                e[d] = c.offsetHeight + "px";
            else if ("styleFloat" == d)
                e["float"] = f[d];
            else if (/margin.|padding.|border.+W/.test(d) && "auto" != e[d])
                e[d] = Math.round(a(c, d, g)) + "px";
            else if (/^outline/.test(d))
                try {
                    e[d] = f[d]
                } catch (i) {
                    e.outlineColor = f.color, e.outlineStyle = e.outlineStyle || "none", e.outlineWidth = e.outlineWidth || "0px", e.outline = [e.outlineColor, e.outlineWidth, e.outlineStyle].join(" ")
                }
            else
                e[d] = f[d];
        b(e, "margin"), b(e, "padding"), b(e, "border"), e.fontSize = Math.round(g) + "px"
    }
    window.getComputedStyle || (c.prototype = {constructor: c,getPropertyPriority: function() {
            throw new Error("NotSupportedError: DOM Exception 9")
        },getPropertyValue: function(a) {
            var b = a.replace(/-([a-z])/g, function(a) {
                return a = a.charAt ? a.split("") : a, a[1].toUpperCase()
            }), c = this[b];
            return c
        },item: function(a) {
            return this[a]
        },removeProperty: function() {
            throw new Error("NoModificationAllowedError: DOM Exception 7")
        },setProperty: function() {
            throw new Error("NoModificationAllowedError: DOM Exception 7")
        },getPropertyCSSValue: function() {
            throw new Error("NotSupportedError: DOM Exception 9")
        }}, window.getComputedStyle = function(a) {
        return new c(a)
    })
}(), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(a) {
    var b = this.__proto__ || this.constructor.prototype;
    return a in this && (!(a in b) || b[a] !== this[a])
}), function(a, b) {
    a.augment = b()
}(this, function() {
    "use strict";
    var a = function() {
    }, b = Array.prototype.slice, c = function(c, d) {
        var e = a.prototype = "function" == typeof c ? c.prototype : c, f = new a, g = d.apply(f, b.call(arguments, 2).concat(e));
        if ("object" == typeof g)
            for (var h in g)
                f[h] = g[h];
        if (!f.hasOwnProperty("constructor"))
            return f;
        var i = f.constructor;
        return i.prototype = f, i
    };
    return c.defclass = function(a) {
        var b = a.constructor;
        return b.prototype = a, b
    }, c.extend = function(a, b) {
        return c(a, function(a) {
            return this.uber = a, b
        })
    }, c
}), function(a, b) {
    function c(a, b, c, f) {
        var g = d(c.substr(c.lastIndexOf(a.domain)), a);
        g && e(null, f, g, b)
    }
    function d(a, b) {
        for (var c = {theme: p(A.settings.themes.gray, null),stylesheets: b.stylesheets,holderURL: []}, d = !1, e = String.fromCharCode(11), f = a.replace(/([^\\])\//g, "$1" + e).split(e), g = /%[0-9a-f]{2}/gi, h = f.length, i = 0; h > i; i++) {
            var j = f[i];
            if (j.match(g))
                try {
                    j = decodeURIComponent(j)
                } catch (k) {
                    j = f[i]
                }
            var l = !1;
            if (A.flags.dimensions.match(j))
                d = !0, c.dimensions = A.flags.dimensions.output(j), l = !0;
            else if (A.flags.fluid.match(j))
                d = !0, c.dimensions = A.flags.fluid.output(j), c.fluid = !0, l = !0;
            else if (A.flags.textmode.match(j))
                c.textmode = A.flags.textmode.output(j), l = !0;
            else if (A.flags.colors.match(j)) {
                var m = A.flags.colors.output(j);
                c.theme = p(c.theme, m), l = !0
            } else if (b.themes[j])
                b.themes.hasOwnProperty(j) && (c.theme = p(b.themes[j], null)), l = !0;
            else if (A.flags.font.match(j))
                c.font = A.flags.font.output(j), l = !0;
            else if (A.flags.auto.match(j))
                c.auto = !0, l = !0;
            else if (A.flags.text.match(j))
                c.text = A.flags.text.output(j), l = !0;
            else if (A.flags.random.match(j)) {
                null == A.vars.cache.themeKeys && (A.vars.cache.themeKeys = Object.keys(b.themes));
                var n = A.vars.cache.themeKeys[0 | Math.random() * A.vars.cache.themeKeys.length];
                c.theme = p(b.themes[n], null), l = !0
            }
            l && c.holderURL.push(j)
        }
        return c.holderURL.unshift(b.domain), c.holderURL = c.holderURL.join("/"), d ? c : !1
    }
    function e(a, b, c, d) {
        var e = c.dimensions, g = c.theme, h = e.width + "x" + e.height;
        if (a = null == a ? c.fluid ? "fluid" : "image" : a, null != c.text && (g.text = c.text, "object" === b.nodeName.toLowerCase())) {
            for (var j = g.text.split("\\n"), l = 0; l < j.length; l++)
                j[l] = v(j[l]);
            g.text = j.join("\\n")
        }
        var n = c.holderURL, o = p(d, null);
        c.font && (g.font = c.font, !o.noFontFallback && "img" === b.nodeName.toLowerCase() && A.setup.supportsCanvas && "svg" === o.renderer && (o = p(o, {renderer: "canvas"}))), c.font && "canvas" == o.renderer && (o.reRender = !0), "background" == a ? null == b.getAttribute("data-background-src") && m(b, {"data-background-src": n}) : m(b, {"data-src": n}), c.theme = g, b.holderData = {flags: c,renderSettings: o}, ("image" == a || "fluid" == a) && m(b, {alt: g.text ? (g.text.length > 16 ? g.text.substring(0, 16) + "…" : g.text) + " [" + h + "]" : h}), "image" == a ? ("html" != o.renderer && c.auto || (b.style.width = e.width + "px", b.style.height = e.height + "px"), "html" == o.renderer ? b.style.backgroundColor = g.background : (f(a, {dimensions: e,theme: g,flags: c}, b, o), c.textmode && "exact" == c.textmode && (A.vars.resizableImages.push(b), i(b)))) : "background" == a && "html" != o.renderer ? f(a, {dimensions: e,theme: g,flags: c}, b, o) : "fluid" == a && ("%" == e.height.slice(-1) ? b.style.height = e.height : null != c.auto && c.auto || (b.style.height = e.height + "px"), "%" == e.width.slice(-1) ? b.style.width = e.width : null != c.auto && c.auto || (b.style.width = e.width + "px"), ("inline" == b.style.display || "" === b.style.display || "none" == b.style.display) && (b.style.display = "block"), k(b), "html" == o.renderer ? b.style.backgroundColor = g.background : (A.vars.resizableImages.push(b), i(b)))
    }
    function f(a, b, c, d) {
        function e() {
            var a = null;
            switch (d.renderer) {
                case "canvas":
                    a = C(i);
                    break;
                case "svg":
                    a = D(i, d);
                    break;
                default:
                    throw "Holder: invalid renderer: " + d.renderer
            }
            return a
        }
        var f = null;
        switch (d.renderer) {
            case "svg":
                if (!A.setup.supportsSVG)
                    return;
                break;
            case "canvas":
                if (!A.setup.supportsCanvas)
                    return;
                break;
            default:
                return
        }
        var h = {width: b.dimensions.width,height: b.dimensions.height,theme: b.theme,flags: b.flags}, i = g(h);
        if ({text: h.text,width: h.width,height: h.height,textHeight: h.font.size,font: h.font.family,fontWeight: h.font.weight,template: h.theme}, f = e(), null == f)
            throw "Holder: couldn't render placeholder";
        "background" == a ? (c.style.backgroundImage = "url(" + f + ")", c.style.backgroundSize = h.width + "px " + h.height + "px") : ("img" === c.nodeName.toLowerCase() ? m(c, {src: f}) : "object" === c.nodeName.toLowerCase() && (m(c, {data: f}), m(c, {type: "image/svg+xml"})), d.reRender && setTimeout(function() {
            var a = e();
            if (null == a)
                throw "Holder: couldn't render placeholder";
            "img" === c.nodeName.toLowerCase() ? m(c, {src: a}) : "object" === c.nodeName.toLowerCase() && (m(c, {data: a}), m(c, {type: "image/svg+xml"}))
        }, 100)), m(c, {"data-holder-rendered": !0})
    }
    function g(a) {
        function b(a, b, c, d) {
            b.width = c, b.height = d, a.width = Math.max(a.width, b.width), a.height += b.height, a.add(b)
        }
        switch (a.font = {family: a.theme.font ? a.theme.font : "Arial, Helvetica, Open Sans, sans-serif",size: h(a.width, a.height, a.theme.size ? a.theme.size : A.defaults.size),units: a.theme.units ? a.theme.units : A.defaults.units,weight: a.theme.fontweight ? a.theme.fontweight : "bold"}, a.text = a.theme.text ? a.theme.text : Math.floor(a.width) + "x" + Math.floor(a.height), a.flags.textmode) {
            case "literal":
                a.text = a.flags.dimensions.width + "x" + a.flags.dimensions.height;
                break;
            case "exact":
                if (!a.flags.exactDimensions)
                    break;
                a.text = Math.floor(a.flags.exactDimensions.width) + "x" + Math.floor(a.flags.exactDimensions.height)
        }
        var c = new E({width: a.width,height: a.height}), d = c.Shape, e = new d.Rect("holderBg", {fill: a.theme.background});
        e.resize(a.width, a.height), c.root.add(e);
        var f = new d.Group("holderTextGroup", {text: a.text,align: "center",font: a.font,fill: a.theme.foreground});
        f.moveTo(null, null, 1), c.root.add(f);
        var g = f.textPositionData = B(c);
        if (!g)
            throw "Holder: staging fallback not supported yet.";
        f.properties.leading = g.boundingBox.height;
        var i = null, j = null;
        if (g.lineCount > 1) {
            var k = 0, l = 0, m = a.width * A.setup.lineWrapRatio, n = 0;
            j = new d.Group("line" + n);
            for (var o = 0; o < g.words.length; o++) {
                var p = g.words[o];
                i = new d.Text(p.text);
                var q = "\\n" == p.text;
                (k + p.width >= m || q === !0) && (b(f, j, k, f.properties.leading), k = 0, l += f.properties.leading, n += 1, j = new d.Group("line" + n), j.y = l), q !== !0 && (i.moveTo(k, 0), k += g.spaceWidth + p.width, j.add(i))
            }
            b(f, j, k, f.properties.leading);
            for (var r in f.children)
                j = f.children[r], j.moveTo((f.width - j.width) / 2, null, null);
            f.moveTo((a.width - f.width) / 2, (a.height - f.height) / 2, null), (a.height - f.height) / 2 < 0 && f.moveTo(null, 0, null)
        } else
            i = new d.Text(a.text), j = new d.Group("line0"), j.add(i), f.add(j), f.moveTo((a.width - g.boundingBox.width) / 2, (a.height - g.boundingBox.height) / 2, null);
        return c
    }
    function h(a, b, c) {
        b = parseInt(b, 10), a = parseInt(a, 10);
        var d = Math.max(b, a), e = Math.min(b, a), f = A.defaults.scale, g = Math.min(.75 * e, .75 * d * f);
        return Math.round(Math.max(c, g))
    }
    function i(a) {
        var b;
        b = null == a || null == a.nodeType ? A.vars.resizableImages : [a];
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                var d = b[c];
                if (d.holderData) {
                    var e = d.holderData.flags, g = j(d, z.invisibleErrorFn(i));
                    if (g) {
                        if (e.fluid && e.auto) {
                            var h = d.holderData.fluidConfig;
                            switch (h.mode) {
                                case "width":
                                    g.height = g.width / h.ratio;
                                    break;
                                case "height":
                                    g.width = g.height * h.ratio
                            }
                        }
                        var k = {dimensions: g,theme: e.theme,flags: e};
                        e.textmode && "exact" == e.textmode && (e.exactDimensions = g, k.dimensions = e.dimensions), f("image", k, d, d.holderData.renderSettings)
                    }
                }
            }
    }
    function j(a, b) {
        var c = {height: a.clientHeight,width: a.clientWidth};
        return c.height || c.width ? (a.removeAttribute("data-holder-invisible"), c) : (m(a, {"data-holder-invisible": !0}), void b.call(this, a))
    }
    function k(a) {
        if (a.holderData) {
            var b = j(a, z.invisibleErrorFn(k));
            if (b) {
                var c = a.holderData.flags, d = {fluidHeight: "%" == c.dimensions.height.slice(-1),fluidWidth: "%" == c.dimensions.width.slice(-1),mode: null,initialDimensions: b};
                d.fluidWidth && !d.fluidHeight ? (d.mode = "width", d.ratio = d.initialDimensions.width / parseFloat(c.dimensions.height)) : !d.fluidWidth && d.fluidHeight && (d.mode = "height", d.ratio = parseFloat(c.dimensions.width) / d.initialDimensions.height), a.holderData.fluidConfig = d
            }
        }
    }
    function l(a, b) {
        return null == b ? y.createElement(a) : y.createElementNS(b, a)
    }
    function m(a, b) {
        for (var c in b)
            a.setAttribute(c, b[c])
    }
    function n(a, b, c) {
        if (null == a) {
            a = l("svg", x);
            var d = l("defs", x);
            a.appendChild(d)
        }
        return a.webkitMatchesSelector && a.setAttribute("xmlns", x), m(a, {width: b,height: c,viewBox: "0 0 " + b + " " + c,preserveAspectRatio: "none"}), a
    }
    function o(a, c) {
        if (b.XMLSerializer) {
            var d = new XMLSerializer, e = "", f = c.stylesheets;
            if (a.querySelector("defs"), c.svgXMLStylesheet) {
                for (var g = (new DOMParser).parseFromString("<xml />", "application/xml"), h = f.length - 1; h >= 0; h--) {
                    var i = g.createProcessingInstruction("xml-stylesheet", 'href="' + f[h] + '" rel="stylesheet"');
                    g.insertBefore(i, g.firstChild)
                }
                var j = g.createProcessingInstruction("xml", 'version="1.0" encoding="UTF-8" standalone="yes"');
                g.insertBefore(j, g.firstChild), g.removeChild(g.documentElement), e = d.serializeToString(g)
            }
            var k = d.serializeToString(a);
            return k = k.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), e + k
        }
    }
    function p(a, b) {
        var c = {};
        for (var d in a)
            a.hasOwnProperty(d) && (c[d] = a[d]);
        if (null != b)
            for (var e in b)
                b.hasOwnProperty(e) && (c[e] = b[e]);
        return c
    }
    function q(a) {
        var b = [];
        for (var c in a)
            a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
        return b.join(";")
    }
    function r(a) {
        A.vars.debounceTimer || a.call(this), A.vars.debounceTimer && clearTimeout(A.vars.debounceTimer), A.vars.debounceTimer = setTimeout(function() {
            A.vars.debounceTimer = null, a.call(this)
        }, A.setup.debounce)
    }
    function s() {
        r(function() {
            i(null)
        })
    }
    function t(a) {
        var c = null;
        return "string" == typeof a ? c = y.querySelectorAll(a) : b.NodeList && a instanceof b.NodeList ? c = a : b.Node && a instanceof b.Node ? c = [a] : b.HTMLCollection && a instanceof b.HTMLCollection ? c = a : null === a && (c = []), c
    }
    function u(a, b) {
        var c = new Image;
        c.onerror = function() {
            b.call(this, !1)
        }, c.onload = function() {
            b.call(this, !0)
        }, c.src = a
    }
    function v(a) {
        for (var b = [], c = 0, d = a.length - 1; d >= 0; d--)
            c = a.charCodeAt(d), b.unshift(c > 128 ? ["&#", c, ";"].join("") : a[d]);
        return b.join("")
    }
    function w(a) {
        return a.replace(/&#(\d+);/g, function(a, b) {
            return String.fromCharCode(b)
        })
    }
    var x = "http://www.w3.org/2000/svg", y = b.document, z = {addTheme: function(a, b) {
            return null != a && null != b && (A.settings.themes[a] = b), delete A.vars.cache.themeKeys, this
        },addImage: function(a, b) {
            var c = y.querySelectorAll(b);
            if (c.length)
                for (var d = 0, e = c.length; e > d; d++) {
                    var f = l("img");
                    m(f, {"data-src": a}), c[d].appendChild(f)
                }
            return this
        },run: function(a) {
            a = a || {};
            var f = {};
            A.vars.preempted = !0;
            var g = p(A.settings, a);
            f.renderer = g.renderer ? g.renderer : A.setup.renderer, -1 === A.setup.renderers.join(",").indexOf(f.renderer) && (f.renderer = A.setup.supportsSVG ? "svg" : A.setup.supportsCanvas ? "canvas" : "html"), g.use_canvas ? f.renderer = "canvas" : g.use_svg && (f.renderer = "svg");
            var h = t(g.images), i = t(g.bgnodes), j = t(g.stylenodes), k = t(g.objects);
            f.stylesheets = [], f.svgXMLStylesheet = !0, f.noFontFallback = g.noFontFallback ? g.noFontFallback : !1;
            for (var m = 0; m < j.length; m++) {
                var n = j[m];
                if (n.attributes.rel && n.attributes.href && "stylesheet" == n.attributes.rel.value) {
                    var o = n.attributes.href.value, q = l("a");
                    q.href = o;
                    var r = q.protocol + "//" + q.host + q.pathname + q.search;
                    f.stylesheets.push(r)
                }
            }
            for (m = 0; m < i.length; m++) {
                var s = b.getComputedStyle(i[m], null).getPropertyValue("background-image"), v = i[m].getAttribute("data-background-src"), w = null;
                w = null == v ? s : v;
                var x = null, y = "?" + g.domain + "/";
                if (0 === w.indexOf(y))
                    x = w.slice(1);
                else if (-1 != w.indexOf(y)) {
                    var z = w.substr(w.indexOf(y)).slice(1), B = z.match(/([^\"]*)"?\)/);
                    null != B && (x = B[1])
                }
                if (null != x) {
                    var C = d(x, g);
                    C && e("background", i[m], C, f)
                }
            }
            for (m = 0; m < k.length; m++) {
                var D = k[m], E = {};
                try {
                    E.data = D.getAttribute("data"), E.dataSrc = D.getAttribute("data-src")
                } catch (F) {
                }
                var G = null != E.data && 0 === E.data.indexOf(g.domain), H = null != E.dataSrc && 0 === E.dataSrc.indexOf(g.domain);
                G ? c(g, f, E.data, D) : H && c(g, f, E.dataSrc, D)
            }
            for (m = 0; m < h.length; m++) {
                var I = h[m], J = {};
                try {
                    J.src = I.getAttribute("src"), J.dataSrc = I.getAttribute("data-src"), J.rendered = I.getAttribute("data-holder-rendered")
                } catch (F) {
                }
                var K = null != J.src, L = null != J.dataSrc && 0 === J.dataSrc.indexOf(g.domain), M = null != J.rendered && "true" == J.rendered;
                K ? 0 === J.src.indexOf(g.domain) ? c(g, f, J.src, I) : L && (M ? c(g, f, J.dataSrc, I) : !function(a, b, d, e, f) {
                    u(a, function(a) {
                        a || c(b, d, e, f)
                    })
                }(J.src, g, f, J.dataSrc, I)) : L && c(g, f, J.dataSrc, I)
            }
            return this
        },invisibleErrorFn: function() {
            return function(a) {
                if (a.hasAttribute("data-holder-invisible"))
                    throw "Holder: invisible placeholder"
            }
        }};
    z.add_theme = z.addTheme, z.add_image = z.addImage, z.invisible_error_fn = z.invisibleErrorFn;
    var A = {settings: {domain: "holder.js",images: "img",objects: "object",bgnodes: "body .holderjs",stylenodes: "head link.holderjs",stylesheets: [],themes: {gray: {background: "#EEEEEE",foreground: "#AAAAAA"},social: {background: "#3a5a97",foreground: "#FFFFFF"},industrial: {background: "#434A52",foreground: "#C2F200"},sky: {background: "#0D8FDB",foreground: "#FFFFFF"},vine: {background: "#39DBAC",foreground: "#1E292C"},lava: {background: "#F8591A",foreground: "#1C2846"}}},defaults: {size: 10,units: "pt",scale: 1 / 16},flags: {dimensions: {regex: /^(\d+)x(\d+)$/,output: function(a) {
                    var b = this.regex.exec(a);
                    return {width: +b[1],height: +b[2]}
                }},fluid: {regex: /^([0-9]+%?)x([0-9]+%?)$/,output: function(a) {
                    var b = this.regex.exec(a);
                    return {width: b[1],height: b[2]}
                }},colors: {regex: /(?:#|\^)([0-9a-f]{3,})\:(?:#|\^)([0-9a-f]{3,})/i,output: function(a) {
                    var b = this.regex.exec(a);
                    return {foreground: "#" + b[2],background: "#" + b[1]}
                }},text: {regex: /text\:(.*)/,output: function(a) {
                    return this.regex.exec(a)[1].replace("\\/", "/")
                }},font: {regex: /font\:(.*)/,output: function(a) {
                    return this.regex.exec(a)[1]
                }},auto: {regex: /^auto$/},textmode: {regex: /textmode\:(.*)/,output: function(a) {
                    return this.regex.exec(a)[1]
                }},random: {regex: /^random$/}}}, B = function() {
        var a = null, b = null, c = null;
        return function(d) {
            var e = d.root;
            if (A.setup.supportsSVG) {
                var f = !1, g = function(a) {
                    return y.createTextNode(a)
                };
                null == a && (f = !0), a = n(a, e.properties.width, e.properties.height), f && (b = l("text", x), c = g(null), m(b, {x: 0}), b.appendChild(c), a.appendChild(b), y.body.appendChild(a), a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%");
                var h = e.children.holderTextGroup, i = h.properties;
                m(b, {y: i.font.size,style: q({"font-weight": i.font.weight,"font-size": i.font.size + i.font.units,"font-family": i.font.family,"dominant-baseline": "middle"})}), c.nodeValue = i.text;
                var j = b.getBBox(), k = Math.ceil(j.width / (e.properties.width * A.setup.lineWrapRatio)), o = i.text.split(" "), p = i.text.match(/\\n/g);
                k += null == p ? 0 : p.length, c.nodeValue = i.text.replace(/[ ]+/g, "");
                var r = b.getComputedTextLength(), s = j.width - r, t = Math.round(s / Math.max(1, o.length - 1)), u = [];
                if (k > 1) {
                    c.nodeValue = "";
                    for (var v = 0; v < o.length; v++)
                        if (0 !== o[v].length) {
                            c.nodeValue = w(o[v]);
                            var z = b.getBBox();
                            u.push({text: o[v],width: z.width})
                        }
                }
                return {spaceWidth: t,lineCount: k,boundingBox: j,words: u}
            }
            return !1
        }
    }(), C = function() {
        var a = l("canvas"), b = null;
        return function(c) {
            null == b && (b = a.getContext("2d"));
            var d = c.root;
            a.width = A.dpr(d.properties.width), a.height = A.dpr(d.properties.height), b.textBaseline = "middle", b.fillStyle = d.children.holderBg.properties.fill, b.fillRect(0, 0, A.dpr(d.children.holderBg.width), A.dpr(d.children.holderBg.height));
            var e = d.children.holderTextGroup;
            e.properties, b.font = e.properties.font.weight + " " + A.dpr(e.properties.font.size) + e.properties.font.units + " " + e.properties.font.family + ", monospace", b.fillStyle = e.properties.fill;
            for (var f in e.children) {
                var g = e.children[f];
                for (var h in g.children) {
                    var i = g.children[h], j = A.dpr(e.x + g.x + i.x), k = A.dpr(e.y + g.y + i.y + e.properties.leading / 2);
                    b.fillText(i.properties.text, j, k)
                }
            }
            return a.toDataURL("image/png")
        }
    }(), D = function() {
        if (b.XMLSerializer) {
            var a = n(null, 0, 0), c = l("rect", x);
            return a.appendChild(c), function(b, d) {
                var e = b.root;
                n(a, e.properties.width, e.properties.height);
                for (var f = a.querySelectorAll("g"), g = 0; g < f.length; g++)
                    f[g].parentNode.removeChild(f[g]);
                m(c, {width: e.children.holderBg.width,height: e.children.holderBg.height,fill: e.children.holderBg.properties.fill});
                var h = e.children.holderTextGroup, i = h.properties, j = l("g", x);
                a.appendChild(j);
                for (var k in h.children) {
                    var p = h.children[k];
                    for (var r in p.children) {
                        var s = p.children[r], t = h.x + p.x + s.x, u = h.y + p.y + s.y + h.properties.leading / 2, v = l("text", x), w = y.createTextNode(null);
                        m(v, {x: t,y: u,style: q({fill: i.fill,"font-weight": i.font.weight,"font-family": i.font.family + ", monospace","font-size": i.font.size + i.font.units,"dominant-baseline": "central"})}), w.nodeValue = s.properties.text, v.appendChild(w), j.appendChild(v)
                    }
                }
                var z = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(o(a, d))));
                return z
            }
        }
    }(), E = function(a) {
        function b(a, b) {
            for (var c in b)
                a[c] = b[c];
            return a
        }
        var c = 1, d = augment.defclass({constructor: function(a) {
                c++, this.parent = null, this.children = {}, this.id = c, this.name = "n" + c, null != a && (this.name = a), this.x = 0, this.y = 0, this.z = 0, this.width = 0, this.height = 0
            },resize: function(a, b) {
                null != a && (this.width = a), null != b && (this.height = b)
            },moveTo: function(a, b, c) {
                this.x = null != a ? a : this.x, this.y = null != b ? b : this.y, this.z = null != c ? c : this.z
            },add: function(a) {
                var b = a.name;
                if (null != this.children[b])
                    throw "SceneGraph: child with that name already exists: " + b;
                this.children[b] = a, a.parent = this
            }}), e = augment(d, function(b) {
            this.constructor = function() {
                b.constructor.call(this, "root"), this.properties = a
            }
        }), f = augment(d, function(a) {
            function c(c, d) {
                if (a.constructor.call(this, c), this.properties = {fill: "#000"}, null != d)
                    b(this.properties, d);
                else if (null != c && "string" != typeof c)
                    throw "SceneGraph: invalid node name"
            }
            this.Group = augment.extend(this, {constructor: c,type: "group"}), this.Rect = augment.extend(this, {constructor: c,type: "rect"}), this.Text = augment.extend(this, {constructor: function(a) {
                    c.call(this), this.properties.text = a
                },type: "text"})
        }), g = new e;
        return this.Shape = f, this.root = g, this
    };
    for (var F in A.flags)
        A.flags.hasOwnProperty(F) && (A.flags[F].match = function(a) {
            return a.match(this.regex)
        });
    A.setup = {renderer: "html",debounce: 100,ratio: 1,supportsCanvas: !1,supportsSVG: !1,lineWrapRatio: .9,renderers: ["html", "canvas", "svg"]}, A.dpr = function(a) {
        return a * A.setup.ratio
    }, A.vars = {preempted: !1,resizableImages: [],debounceTimer: null,cache: {}}, function() {
        var a = 1, c = 1, d = l("canvas"), e = null;
        d.getContext && -1 != d.toDataURL("image/png").indexOf("data:image/png") && (A.setup.renderer = "canvas", e = d.getContext("2d"), A.setup.supportsCanvas = !0), A.setup.supportsCanvas && (a = b.devicePixelRatio || 1, c = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1), A.setup.ratio = a / c, y.createElementNS && y.createElementNS(x, "svg").createSVGRect && (A.setup.renderer = "svg", A.setup.supportsSVG = !0)
    }(), a(z, "Holder", b), b.onDomReady && b.onDomReady(function() {
        A.vars.preempted || z.run(), b.addEventListener ? (b.addEventListener("resize", s, !1), b.addEventListener("orientationchange", s, !1)) : b.attachEvent("onresize", s), "object" == typeof b.Turbolinks && b.document.addEventListener("page:change", function() {
            z.run()
        })
    })
}(function(a, b, c) {
    var d = "function" == typeof define && define.amd;
    d ? define(a) : c[b] = a
}, this), function(a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Handlebars = a.Handlebars || b()
}(this, function() {
    var a = function() {
        "use strict";
        function a(a) {
            this.string = a
        }
        var b;
        return a.prototype.toString = function() {
            return "" + this.string
        }, b = a
    }(), b = function(a) {
        "use strict";
        function b(a) {
            return i[a]
        }
        function c(a) {
            for (var b = 1; b < arguments.length; b++)
                for (var c in arguments[b])
                    Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
            return a
        }
        function d(a) {
            return a instanceof h ? a.toString() : null == a ? "" : a ? (a = "" + a, k.test(a) ? a.replace(j, b) : a) : a + ""
        }
        function e(a) {
            return a || 0 === a ? n(a) && 0 === a.length ? !0 : !1 : !0
        }
        function f(a, b) {
            return (a ? a + "." : "") + b
        }
        var g = {}, h = a, i = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;","`": "&#x60;"}, j = /[&<>"'`]/g, k = /[&<>"'`]/;
        g.extend = c;
        var l = Object.prototype.toString;
        g.toString = l;
        var m = function(a) {
            return "function" == typeof a
        };
        m(/x/) && (m = function(a) {
            return "function" == typeof a && "[object Function]" === l.call(a)
        });
        var m;
        g.isFunction = m;
        var n = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1
        };
        return g.isArray = n, g.escapeExpression = d, g.isEmpty = e, g.appendContextPath = f, g
    }(a), c = function() {
        "use strict";
        function a(a, b) {
            var d;
            b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn);
            for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++)
                this[c[f]] = e[c[f]];
            d && (this.lineNumber = d, this.column = b.firstColumn)
        }
        var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return a.prototype = new Error, b = a
    }(), d = function(a, b) {
        "use strict";
        function c(a, b) {
            this.helpers = a || {}, this.partials = b || {}, d(this)
        }
        function d(a) {
            a.registerHelper("helperMissing", function() {
                if (1 === arguments.length)
                    return void 0;
                throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'")
            }), a.registerHelper("blockHelperMissing", function(b, c) {
                var d = c.inverse, e = c.fn;
                if (b === !0)
                    return e(this);
                if (b === !1 || null == b)
                    return d(this);
                if (k(b))
                    return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
                if (c.data && c.ids) {
                    var g = q(c.data);
                    g.contextPath = f.appendContextPath(c.data.contextPath, c.name), c = {data: g}
                }
                return e(b, c)
            }), a.registerHelper("each", function(a, b) {
                if (!b)
                    throw new g("Must pass iterator to #each");
                var c, d, e = b.fn, h = b.inverse, i = 0, j = "";
                if (b.data && b.ids && (d = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), l(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)
                    if (k(a))
                        for (var m = a.length; m > i; i++)
                            c && (c.index = i, c.first = 0 === i, c.last = i === a.length - 1, d && (c.contextPath = d + i)), j += e(a[i], {data: c});
                    else
                        for (var n in a)
                            a.hasOwnProperty(n) && (c && (c.key = n, c.index = i, c.first = 0 === i, d && (c.contextPath = d + n)), j += e(a[n], {data: c}), i++);
                return 0 === i && (j = h(this)), j
            }), a.registerHelper("if", function(a, b) {
                return l(a) && (a = a.call(this)), !b.hash.includeZero && !a || f.isEmpty(a) ? b.inverse(this) : b.fn(this)
            }), a.registerHelper("unless", function(b, c) {
                return a.helpers["if"].call(this, b, {fn: c.inverse,inverse: c.fn,hash: c.hash})
            }), a.registerHelper("with", function(a, b) {
                l(a) && (a = a.call(this));
                var c = b.fn;
                if (f.isEmpty(a))
                    return b.inverse(this);
                if (b.data && b.ids) {
                    var d = q(b.data);
                    d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0]), b = {data: d}
                }
                return c(a, b)
            }), a.registerHelper("log", function(b, c) {
                var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                a.log(d, b)
            }), a.registerHelper("lookup", function(a, b) {
                return a && a[b]
            })
        }
        var e = {}, f = a, g = b, h = "2.0.0";
        e.VERSION = h;
        var i = 6;
        e.COMPILER_REVISION = i;
        var j = {1: "<= 1.0.rc.2",2: "== 1.0.0-rc.3",3: "== 1.0.0-rc.4",4: "== 1.x.x",5: "== 2.0.0-alpha.x",6: ">= 2.0.0-beta.1"};
        e.REVISION_CHANGES = j;
        var k = f.isArray, l = f.isFunction, m = f.toString, n = "[object Object]";
        e.HandlebarsEnvironment = c, c.prototype = {constructor: c,logger: o,log: p,registerHelper: function(a, b) {
                if (m.call(a) === n) {
                    if (b)
                        throw new g("Arg not supported with multiple helpers");
                    f.extend(this.helpers, a)
                } else
                    this.helpers[a] = b
            },unregisterHelper: function(a) {
                delete this.helpers[a]
            },registerPartial: function(a, b) {
                m.call(a) === n ? f.extend(this.partials, a) : this.partials[a] = b
            },unregisterPartial: function(a) {
                delete this.partials[a]
            }};
        var o = {methodMap: {0: "debug",1: "info",2: "warn",3: "error"},DEBUG: 0,INFO: 1,WARN: 2,ERROR: 3,level: 3,log: function(a, b) {
                if (o.level <= a) {
                    var c = o.methodMap[a];
                    "undefined" != typeof console && console[c] && console[c].call(console, b)
                }
            }};
        e.logger = o;
        var p = o.log;
        e.log = p;
        var q = function(a) {
            var b = f.extend({}, a);
            return b._parent = a, b
        };
        return e.createFrame = q, e
    }(b, c), e = function(a, b, c) {
        "use strict";
        function d(a) {
            var b = a && a[0] || 1, c = m;
            if (b !== c) {
                if (c > b) {
                    var d = n[c], e = n[b];
                    throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                }
                throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
            }
        }
        function e(a, b) {
            if (!b)
                throw new l("No environment passed to template");
            if (!a || !a.main)
                throw new l("Unknown template object: " + typeof a);
            b.VM.checkRevision(a.compiler);
            var c = function(c, d, e, f, g, h, i, j, m) {
                g && (f = k.extend({}, f, g));
                var n = b.VM.invokePartial.call(this, c, e, f, h, i, j, m);
                if (null == n && b.compile) {
                    var o = {helpers: h,partials: i,data: j,depths: m};
                    i[e] = b.compile(c, {data: void 0 !== j,compat: a.compat}, b), n = i[e](f, o)
                }
                if (null != n) {
                    if (d) {
                        for (var p = n.split("\n"), q = 0, r = p.length; r > q && (p[q] || q + 1 !== r); q++)
                            p[q] = d + p[q];
                        n = p.join("\n")
                    }
                    return n
                }
                throw new l("The partial " + e + " could not be compiled when running in runtime-only mode")
            }, d = {lookup: function(a, b) {
                    for (var c = a.length, d = 0; c > d; d++)
                        if (a[d] && null != a[d][b])
                            return a[d][b]
                },lambda: function(a, b) {
                    return "function" == typeof a ? a.call(b) : a
                },escapeExpression: k.escapeExpression,invokePartial: c,fn: function(b) {
                    return a[b]
                },programs: [],program: function(a, b, c) {
                    var d = this.programs[a], e = this.fn(a);
                    return b || c ? d = f(this, a, e, b, c) : d || (d = this.programs[a] = f(this, a, e)), d
                },data: function(a, b) {
                    for (; a && b--; )
                        a = a._parent;
                    return a
                },merge: function(a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = k.extend({}, b, a)), c
                },noop: b.VM.noop,compilerInfo: a.compiler}, e = function(b, c) {
                c = c || {};
                var f = c.data;
                e._setup(c), !c.partial && a.useData && (f = i(b, f));
                var g;
                return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(d, b, d.helpers, d.partials, f, g)
            };
            return e.isTop = !0, e._setup = function(c) {
                c.partial ? (d.helpers = c.helpers, d.partials = c.partials) : (d.helpers = d.merge(c.helpers, b.helpers), a.usePartial && (d.partials = d.merge(c.partials, b.partials)))
            }, e._child = function(b, c, e) {
                if (a.useDepths && !e)
                    throw new l("must pass parent depths");
                return f(d, b, a[b], c, e)
            }, e
        }
        function f(a, b, c, d, e) {
            var f = function(b, f) {
                return f = f || {}, c.call(a, b, a.helpers, a.partials, f.data || d, e && [b].concat(e))
            };
            return f.program = b, f.depth = e ? e.length : 0, f
        }
        function g(a, b, c, d, e, f, g) {
            var h = {partial: !0,helpers: d,partials: e,data: f,depths: g};
            if (void 0 === a)
                throw new l("The partial " + b + " could not be found");
            return a instanceof Function ? a(c, h) : void 0
        }
        function h() {
            return ""
        }
        function i(a, b) {
            return b && "root" in b || (b = b ? o(b) : {}, b.root = a), b
        }
        var j = {}, k = a, l = b, m = c.COMPILER_REVISION, n = c.REVISION_CHANGES, o = c.createFrame;
        return j.checkRevision = d, j.template = e, j.program = f, j.invokePartial = g, j.noop = h, j
    }(b, c, d), f = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c, j = d, k = e, l = function() {
            var a = new g.HandlebarsEnvironment;
            return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.escapeExpression = j.escapeExpression, a.VM = k, a.template = function(b) {
                return k.template(b, a)
            }, a
        }, m = l();
        return m.create = l, m["default"] = m, f = m
    }(d, a, c, b, e), g = function(a) {
        "use strict";
        function b(a) {
            a = a || {}, this.firstLine = a.first_line, this.firstColumn = a.first_column, this.lastColumn = a.last_column, this.lastLine = a.last_line
        }
        var c, d = a, e = {ProgramNode: function(a, c, d) {
                b.call(this, d), this.type = "program", this.statements = a, this.strip = c
            },MustacheNode: function(a, c, d, f, g) {
                if (b.call(this, g), this.type = "mustache", this.strip = f, null != d && d.charAt) {
                    var h = d.charAt(3) || d.charAt(2);
                    this.escaped = "{" !== h && "&" !== h
                } else
                    this.escaped = !!d;
                this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a, c), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
            },SexprNode: function(a, c, d) {
                b.call(this, d), this.type = "sexpr", this.hash = c;
                var e = this.id = a[0], f = this.params = a.slice(1);
                this.isHelper = !(!f.length && !c), this.eligibleHelper = this.isHelper || e.isSimple
            },PartialNode: function(a, c, d, e, f) {
                b.call(this, f), this.type = "partial", this.partialName = a, this.context = c, this.hash = d, this.strip = e, this.strip.inlineStandalone = !0
            },BlockNode: function(a, c, d, e, f) {
                b.call(this, f), this.type = "block", this.mustache = a, this.program = c, this.inverse = d, this.strip = e, d && !c && (this.isInverse = !0)
            },RawBlockNode: function(a, c, f, g) {
                if (b.call(this, g), a.sexpr.id.original !== f)
                    throw new d(a.sexpr.id.original + " doesn't match " + f, this);
                c = new e.ContentNode(c, g), this.type = "block", this.mustache = a, this.program = new e.ProgramNode([c], {}, g)
            },ContentNode: function(a, c) {
                b.call(this, c), this.type = "content", this.original = this.string = a
            },HashNode: function(a, c) {
                b.call(this, c), this.type = "hash", this.pairs = a
            },IdNode: function(a, c) {
                b.call(this, c), this.type = "ID";
                for (var e = "", f = [], g = 0, h = "", i = 0, j = a.length; j > i; i++) {
                    var k = a[i].part;
                    if (e += (a[i].separator || "") + k, ".." === k || "." === k || "this" === k) {
                        if (f.length > 0)
                            throw new d("Invalid path: " + e, this);
                        ".." === k ? (g++, h += "../") : this.isScoped = !0
                    } else
                        f.push(k)
                }
                this.original = e, this.parts = f, this.string = f.join("."), this.depth = g, this.idName = h + this.string, this.isSimple = 1 === a.length && !this.isScoped && 0 === g, this.stringModeValue = this.string
            },PartialNameNode: function(a, c) {
                b.call(this, c), this.type = "PARTIAL_NAME", this.name = a.original
            },DataNode: function(a, c) {
                b.call(this, c), this.type = "DATA", this.id = a, this.stringModeValue = a.stringModeValue, this.idName = "@" + a.stringModeValue
            },StringNode: function(a, c) {
                b.call(this, c), this.type = "STRING", this.original = this.string = this.stringModeValue = a
            },NumberNode: function(a, c) {
                b.call(this, c), this.type = "NUMBER", this.original = this.number = a, this.stringModeValue = Number(a)
            },BooleanNode: function(a, c) {
                b.call(this, c), this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a
            },CommentNode: function(a, c) {
                b.call(this, c), this.type = "comment", this.comment = a, this.strip = {inlineStandalone: !0}
            }};
        return c = e
    }(c), h = function() {
        "use strict";
        var a, b = function() {
            function a() {
                this.yy = {}
            }
            var b = {trace: function() {
                },yy: {},symbols_: {error: 2,root: 3,program: 4,EOF: 5,program_repetition0: 6,statement: 7,mustache: 8,block: 9,rawBlock: 10,partial: 11,CONTENT: 12,COMMENT: 13,openRawBlock: 14,END_RAW_BLOCK: 15,OPEN_RAW_BLOCK: 16,sexpr: 17,CLOSE_RAW_BLOCK: 18,openBlock: 19,block_option0: 20,closeBlock: 21,openInverse: 22,block_option1: 23,OPEN_BLOCK: 24,CLOSE: 25,OPEN_INVERSE: 26,inverseAndProgram: 27,INVERSE: 28,OPEN_ENDBLOCK: 29,path: 30,OPEN: 31,OPEN_UNESCAPED: 32,CLOSE_UNESCAPED: 33,OPEN_PARTIAL: 34,partialName: 35,param: 36,partial_option0: 37,partial_option1: 38,sexpr_repetition0: 39,sexpr_option0: 40,dataName: 41,STRING: 42,NUMBER: 43,BOOLEAN: 44,OPEN_SEXPR: 45,CLOSE_SEXPR: 46,hash: 47,hash_repetition_plus0: 48,hashSegment: 49,ID: 50,EQUALS: 51,DATA: 52,pathSegments: 53,SEP: 54,$accept: 0,$end: 1},terminals_: {2: "error",5: "EOF",12: "CONTENT",13: "COMMENT",15: "END_RAW_BLOCK",16: "OPEN_RAW_BLOCK",18: "CLOSE_RAW_BLOCK",24: "OPEN_BLOCK",25: "CLOSE",26: "OPEN_INVERSE",28: "INVERSE",29: "OPEN_ENDBLOCK",31: "OPEN",32: "OPEN_UNESCAPED",33: "CLOSE_UNESCAPED",34: "OPEN_PARTIAL",42: "STRING",43: "NUMBER",44: "BOOLEAN",45: "OPEN_SEXPR",46: "CLOSE_SEXPR",50: "ID",51: "EQUALS",52: "DATA",54: "SEP"},productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [10, 3], [14, 3], [9, 4], [9, 4], [19, 3], [22, 3], [27, 2], [21, 3], [8, 3], [8, 3], [11, 5], [11, 4], [17, 3], [17, 1], [36, 1], [36, 1], [36, 1], [36, 1], [36, 1], [36, 3], [47, 1], [49, 3], [35, 1], [35, 1], [35, 1], [41, 2], [30, 1], [53, 3], [53, 1], [6, 0], [6, 2], [20, 0], [20, 1], [23, 0], [23, 1], [37, 0], [37, 1], [38, 0], [38, 1], [39, 0], [39, 2], [40, 0], [40, 1], [48, 1], [48, 2]],performAction: function(a, b, c, d, e, f) {
                    var g = f.length - 1;
                    switch (e) {
                        case 1:
                            return d.prepareProgram(f[g - 1].statements, !0), f[g - 1];
                        case 2:
                            this.$ = new d.ProgramNode(d.prepareProgram(f[g]), {}, this._$);
                            break;
                        case 3:
                            this.$ = f[g];
                            break;
                        case 4:
                            this.$ = f[g];
                            break;
                        case 5:
                            this.$ = f[g];
                            break;
                        case 6:
                            this.$ = f[g];
                            break;
                        case 7:
                            this.$ = new d.ContentNode(f[g], this._$);
                            break;
                        case 8:
                            this.$ = new d.CommentNode(f[g], this._$);
                            break;
                        case 9:
                            this.$ = new d.RawBlockNode(f[g - 2], f[g - 1], f[g], this._$);
                            break;
                        case 10:
                            this.$ = new d.MustacheNode(f[g - 1], null, "", "", this._$);
                            break;
                        case 11:
                            this.$ = d.prepareBlock(f[g - 3], f[g - 2], f[g - 1], f[g], !1, this._$);
                            break;
                        case 12:
                            this.$ = d.prepareBlock(f[g - 3], f[g - 2], f[g - 1], f[g], !0, this._$);
                            break;
                        case 13:
                            this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                            break;
                        case 14:
                            this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                            break;
                        case 15:
                            this.$ = {strip: d.stripFlags(f[g - 1], f[g - 1]),program: f[g]};
                            break;
                        case 16:
                            this.$ = {path: f[g - 1],strip: d.stripFlags(f[g - 2], f[g])};
                            break;
                        case 17:
                            this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                            break;
                        case 18:
                            this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                            break;
                        case 19:
                            this.$ = new d.PartialNode(f[g - 3], f[g - 2], f[g - 1], d.stripFlags(f[g - 4], f[g]), this._$);
                            break;
                        case 20:
                            this.$ = new d.PartialNode(f[g - 2], void 0, f[g - 1], d.stripFlags(f[g - 3], f[g]), this._$);
                            break;
                        case 21:
                            this.$ = new d.SexprNode([f[g - 2]].concat(f[g - 1]), f[g], this._$);
                            break;
                        case 22:
                            this.$ = new d.SexprNode([f[g]], null, this._$);
                            break;
                        case 23:
                            this.$ = f[g];
                            break;
                        case 24:
                            this.$ = new d.StringNode(f[g], this._$);
                            break;
                        case 25:
                            this.$ = new d.NumberNode(f[g], this._$);
                            break;
                        case 26:
                            this.$ = new d.BooleanNode(f[g], this._$);
                            break;
                        case 27:
                            this.$ = f[g];
                            break;
                        case 28:
                            f[g - 1].isHelper = !0, this.$ = f[g - 1];
                            break;
                        case 29:
                            this.$ = new d.HashNode(f[g], this._$);
                            break;
                        case 30:
                            this.$ = [f[g - 2], f[g]];
                            break;
                        case 31:
                            this.$ = new d.PartialNameNode(f[g], this._$);
                            break;
                        case 32:
                            this.$ = new d.PartialNameNode(new d.StringNode(f[g], this._$), this._$);
                            break;
                        case 33:
                            this.$ = new d.PartialNameNode(new d.NumberNode(f[g], this._$));
                            break;
                        case 34:
                            this.$ = new d.DataNode(f[g], this._$);
                            break;
                        case 35:
                            this.$ = new d.IdNode(f[g], this._$);
                            break;
                        case 36:
                            f[g - 2].push({part: f[g],separator: f[g - 1]}), this.$ = f[g - 2];
                            break;
                        case 37:
                            this.$ = [{part: f[g]}];
                            break;
                        case 38:
                            this.$ = [];
                            break;
                        case 39:
                            f[g - 1].push(f[g]);
                            break;
                        case 48:
                            this.$ = [];
                            break;
                        case 49:
                            f[g - 1].push(f[g]);
                            break;
                        case 52:
                            this.$ = [f[g]];
                            break;
                        case 53:
                            f[g - 1].push(f[g])
                    }
                },table: [{3: 1,4: 2,5: [2, 38],6: 3,12: [2, 38],13: [2, 38],16: [2, 38],24: [2, 38],26: [2, 38],31: [2, 38],32: [2, 38],34: [2, 38]}, {1: [3]}, {5: [1, 4]}, {5: [2, 2],7: 5,8: 6,9: 7,10: 8,11: 9,12: [1, 10],13: [1, 11],14: 16,16: [1, 20],19: 14,22: 15,24: [1, 18],26: [1, 19],28: [2, 2],29: [2, 2],31: [1, 12],32: [1, 13],34: [1, 17]}, {1: [2, 1]}, {5: [2, 39],12: [2, 39],13: [2, 39],16: [2, 39],24: [2, 39],26: [2, 39],28: [2, 39],29: [2, 39],31: [2, 39],32: [2, 39],34: [2, 39]}, {5: [2, 3],12: [2, 3],13: [2, 3],16: [2, 3],24: [2, 3],26: [2, 3],28: [2, 3],29: [2, 3],31: [2, 3],32: [2, 3],34: [2, 3]}, {5: [2, 4],12: [2, 4],13: [2, 4],16: [2, 4],24: [2, 4],26: [2, 4],28: [2, 4],29: [2, 4],31: [2, 4],32: [2, 4],34: [2, 4]}, {5: [2, 5],12: [2, 5],13: [2, 5],16: [2, 5],24: [2, 5],26: [2, 5],28: [2, 5],29: [2, 5],31: [2, 5],32: [2, 5],34: [2, 5]}, {5: [2, 6],12: [2, 6],13: [2, 6],16: [2, 6],24: [2, 6],26: [2, 6],28: [2, 6],29: [2, 6],31: [2, 6],32: [2, 6],34: [2, 6]}, {5: [2, 7],12: [2, 7],13: [2, 7],16: [2, 7],24: [2, 7],26: [2, 7],28: [2, 7],29: [2, 7],31: [2, 7],32: [2, 7],34: [2, 7]}, {5: [2, 8],12: [2, 8],13: [2, 8],16: [2, 8],24: [2, 8],26: [2, 8],28: [2, 8],29: [2, 8],31: [2, 8],32: [2, 8],34: [2, 8]}, {17: 21,30: 22,41: 23,50: [1, 26],52: [1, 25],53: 24}, {17: 27,30: 22,41: 23,50: [1, 26],52: [1, 25],53: 24}, {4: 28,6: 3,12: [2, 38],13: [2, 38],16: [2, 38],24: [2, 38],26: [2, 38],28: [2, 38],29: [2, 38],31: [2, 38],32: [2, 38],34: [2, 38]}, {4: 29,6: 3,12: [2, 38],13: [2, 38],16: [2, 38],24: [2, 38],26: [2, 38],28: [2, 38],29: [2, 38],31: [2, 38],32: [2, 38],34: [2, 38]}, {12: [1, 30]}, {30: 32,35: 31,42: [1, 33],43: [1, 34],50: [1, 26],53: 24}, {17: 35,30: 22,41: 23,50: [1, 26],52: [1, 25],53: 24}, {17: 36,30: 22,41: 23,50: [1, 26],52: [1, 25],53: 24}, {17: 37,30: 22,41: 23,50: [1, 26],52: [1, 25],53: 24}, {25: [1, 38]}, {18: [2, 48],25: [2, 48],33: [2, 48],39: 39,42: [2, 48],43: [2, 48],44: [2, 48],45: [2, 48],46: [2, 48],50: [2, 48],52: [2, 48]}, {18: [2, 22],25: [2, 22],33: [2, 22],46: [2, 22]}, {18: [2, 35],25: [2, 35],33: [2, 35],42: [2, 35],43: [2, 35],44: [2, 35],45: [2, 35],46: [2, 35],50: [2, 35],52: [2, 35],54: [1, 40]}, {30: 41,50: [1, 26],53: 24}, {18: [2, 37],25: [2, 37],33: [2, 37],42: [2, 37],43: [2, 37],44: [2, 37],45: [2, 37],46: [2, 37],50: [2, 37],52: [2, 37],54: [2, 37]}, {33: [1, 42]}, {20: 43,27: 44,28: [1, 45],29: [2, 40]}, {23: 46,27: 47,28: [1, 45],29: [2, 42]}, {15: [1, 48]}, {25: [2, 46],30: 51,36: 49,38: 50,41: 55,42: [1, 52],43: [1, 53],44: [1, 54],45: [1, 56],47: 57,48: 58,49: 60,50: [1, 59],52: [1, 25],53: 24}, {25: [2, 31],42: [2, 31],43: [2, 31],44: [2, 31],45: [2, 31],50: [2, 31],52: [2, 31]}, {25: [2, 32],42: [2, 32],43: [2, 32],44: [2, 32],45: [2, 32],50: [2, 32],52: [2, 32]}, {25: [2, 33],42: [2, 33],43: [2, 33],44: [2, 33],45: [2, 33],50: [2, 33],52: [2, 33]}, {25: [1, 61]}, {25: [1, 62]}, {18: [1, 63]}, {5: [2, 17],12: [2, 17],13: [2, 17],16: [2, 17],24: [2, 17],26: [2, 17],28: [2, 17],29: [2, 17],31: [2, 17],32: [2, 17],34: [2, 17]}, {18: [2, 50],25: [2, 50],30: 51,33: [2, 50],36: 65,40: 64,41: 55,42: [1, 52],43: [1, 53],44: [1, 54],45: [1, 56],46: [2, 50],47: 66,48: 58,49: 60,50: [1, 59],52: [1, 25],53: 24}, {50: [1, 67]}, {18: [2, 34],25: [2, 34],33: [2, 34],42: [2, 34],43: [2, 34],44: [2, 34],45: [2, 34],46: [2, 34],50: [2, 34],52: [2, 34]}, {5: [2, 18],12: [2, 18],13: [2, 18],16: [2, 18],24: [2, 18],26: [2, 18],28: [2, 18],29: [2, 18],31: [2, 18],32: [2, 18],34: [2, 18]}, {21: 68,29: [1, 69]}, {29: [2, 41]}, {4: 70,6: 3,12: [2, 38],13: [2, 38],16: [2, 38],24: [2, 38],26: [2, 38],29: [2, 38],31: [2, 38],32: [2, 38],34: [2, 38]}, {21: 71,29: [1, 69]}, {29: [2, 43]}, {5: [2, 9],12: [2, 9],13: [2, 9],16: [2, 9],24: [2, 9],26: [2, 9],28: [2, 9],29: [2, 9],31: [2, 9],32: [2, 9],34: [2, 9]}, {25: [2, 44],37: 72,47: 73,48: 58,49: 60,50: [1, 74]}, {25: [1, 75]}, {18: [2, 23],25: [2, 23],33: [2, 23],42: [2, 23],43: [2, 23],44: [2, 23],45: [2, 23],46: [2, 23],50: [2, 23],52: [2, 23]}, {18: [2, 24],25: [2, 24],33: [2, 24],42: [2, 24],43: [2, 24],44: [2, 24],45: [2, 24],46: [2, 24],50: [2, 24],52: [2, 24]}, {18: [2, 25],25: [2, 25],33: [2, 25],42: [2, 25],43: [2, 25],44: [2, 25],45: [2, 25],46: [2, 25],50: [2, 25],52: [2, 25]}, {18: [2, 26],25: [2, 26],33: [2, 26],42: [2, 26],43: [2, 26],44: [2, 26],45: [2, 26],46: [2, 26],50: [2, 26],52: [2, 26]}, {18: [2, 27],25: [2, 27],33: [2, 27],42: [2, 27],43: [2, 27],44: [2, 27],45: [2, 27],46: [2, 27],50: [2, 27],52: [2, 27]}, {17: 76,30: 22,41: 23,50: [1, 26],52: [1, 25],53: 24}, {25: [2, 47]}, {18: [2, 29],25: [2, 29],33: [2, 29],46: [2, 29],49: 77,50: [1, 74]}, {18: [2, 37],25: [2, 37],33: [2, 37],42: [2, 37],43: [2, 37],44: [2, 37],45: [2, 37],46: [2, 37],50: [2, 37],51: [1, 78],52: [2, 37],54: [2, 37]}, {18: [2, 52],25: [2, 52],33: [2, 52],46: [2, 52],50: [2, 52]}, {12: [2, 13],13: [2, 13],16: [2, 13],24: [2, 13],26: [2, 13],28: [2, 13],29: [2, 13],31: [2, 13],32: [2, 13],34: [2, 13]}, {12: [2, 14],13: [2, 14],16: [2, 14],24: [2, 14],26: [2, 14],28: [2, 14],29: [2, 14],31: [2, 14],32: [2, 14],34: [2, 14]}, {12: [2, 10]}, {18: [2, 21],25: [2, 21],33: [2, 21],46: [2, 21]}, {18: [2, 49],25: [2, 49],33: [2, 49],42: [2, 49],43: [2, 49],44: [2, 49],45: [2, 49],46: [2, 49],50: [2, 49],52: [2, 49]}, {18: [2, 51],25: [2, 51],33: [2, 51],46: [2, 51]}, {18: [2, 36],25: [2, 36],33: [2, 36],42: [2, 36],43: [2, 36],44: [2, 36],45: [2, 36],46: [2, 36],50: [2, 36],52: [2, 36],54: [2, 36]}, {5: [2, 11],12: [2, 11],13: [2, 11],16: [2, 11],24: [2, 11],26: [2, 11],28: [2, 11],29: [2, 11],31: [2, 11],32: [2, 11],34: [2, 11]}, {30: 79,50: [1, 26],53: 24}, {29: [2, 15]}, {5: [2, 12],12: [2, 12],13: [2, 12],16: [2, 12],24: [2, 12],26: [2, 12],28: [2, 12],29: [2, 12],31: [2, 12],32: [2, 12],34: [2, 12]}, {25: [1, 80]}, {25: [2, 45]}, {51: [1, 78]}, {5: [2, 20],12: [2, 20],13: [2, 20],16: [2, 20],24: [2, 20],26: [2, 20],28: [2, 20],29: [2, 20],31: [2, 20],32: [2, 20],34: [2, 20]}, {46: [1, 81]}, {18: [2, 53],25: [2, 53],33: [2, 53],46: [2, 53],50: [2, 53]}, {30: 51,36: 82,41: 55,42: [1, 52],43: [1, 53],44: [1, 54],45: [1, 56],50: [1, 26],52: [1, 25],53: 24}, {25: [1, 83]}, {5: [2, 19],12: [2, 19],13: [2, 19],16: [2, 19],24: [2, 19],26: [2, 19],28: [2, 19],29: [2, 19],31: [2, 19],32: [2, 19],34: [2, 19]}, {18: [2, 28],25: [2, 28],33: [2, 28],42: [2, 28],43: [2, 28],44: [2, 28],45: [2, 28],46: [2, 28],50: [2, 28],52: [2, 28]}, {18: [2, 30],25: [2, 30],33: [2, 30],46: [2, 30],50: [2, 30]}, {5: [2, 16],12: [2, 16],13: [2, 16],16: [2, 16],24: [2, 16],26: [2, 16],28: [2, 16],29: [2, 16],31: [2, 16],32: [2, 16],34: [2, 16]}],defaultActions: {4: [2, 1],44: [2, 41],47: [2, 43],57: [2, 47],63: [2, 10],70: [2, 15],73: [2, 45]},parseError: function(a) {
                    throw new Error(a)
                },parse: function(a) {
                    function b() {
                        var a;
                        return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                    }
                    var c = this, d = [0], e = [null], f = [], g = this.table, h = "", i = 0, j = 0, k = 0;
                    this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var l = this.lexer.yylloc;
                    f.push(l);
                    var m = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                        if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                            var x = "";
                            if (!k) {
                                v = [];
                                for (s in g[p])
                                    this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {text: this.lexer.match,token: this.terminals_[n] || n,line: this.lexer.yylineno,loc: l,expected: v})
                            }
                        }
                        if (q[0] instanceof Array && q.length > 1)
                            throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                        switch (q[0]) {
                            case 1:
                                d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                break;
                            case 2:
                                if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {first_line: f[f.length - (t || 1)].first_line,last_line: f[f.length - 1].last_line,first_column: f[f.length - (t || 1)].first_column,last_column: f[f.length - 1].last_column}, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r)
                                    return r;
                                t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                break;
                            case 3:
                                return !0
                        }
                    }
                    return !0
                }}, c = function() {
                var a = {EOF: 1,parseError: function(a, b) {
                        if (!this.yy.parser)
                            throw new Error(a);
                        this.yy.parser.parseError(a, b)
                    },setInput: function(a) {
                        return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {first_line: 1,first_column: 0,last_line: 1,last_column: 0}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                    },input: function() {
                        var a = this._input[0];
                        this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                    },unput: function(a) {
                        var b = a.length, c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {first_line: this.yylloc.first_line,last_line: this.yylineno + 1,first_column: this.yylloc.first_column,last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b}, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                    },more: function() {
                        return this._more = !0, this
                    },less: function(a) {
                        this.unput(this.match.slice(a))
                    },pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                    },upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },showPosition: function() {
                        var a = this.pastInput(), b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^"
                    },next: function() {
                        if (this.done)
                            return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "", this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++)
                            ;
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {first_line: this.yylloc.last_line,last_line: this.yylineno + 1,first_column: this.yylloc.last_column,last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length}, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "",token: null,line: this.yylineno})
                    },lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex()
                    },begin: function(a) {
                        this.conditionStack.push(a)
                    },popState: function() {
                        return this.conditionStack.pop()
                    },_currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },pushState: function(a) {
                        this.begin(a)
                    }};
                return a.options = {}, a.performAction = function(a, b, c, d) {
                    function e(a, c) {
                        return b.yytext = b.yytext.substr(a, b.yyleng - c)
                    }
                    switch (c) {
                        case 0:
                            if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext)
                                return 12;
                            break;
                        case 1:
                            return 12;
                        case 2:
                            return this.popState(), 12;
                        case 3:
                            return b.yytext = b.yytext.substr(5, b.yyleng - 9), this.popState(), 15;
                        case 4:
                            return 12;
                        case 5:
                            return e(0, 4), this.popState(), 13;
                        case 6:
                            return 45;
                        case 7:
                            return 46;
                        case 8:
                            return 16;
                        case 9:
                            return this.popState(), this.begin("raw"), 18;
                        case 10:
                            return 34;
                        case 11:
                            return 24;
                        case 12:
                            return 29;
                        case 13:
                            return this.popState(), 28;
                        case 14:
                            return this.popState(), 28;
                        case 15:
                            return 26;
                        case 16:
                            return 26;
                        case 17:
                            return 32;
                        case 18:
                            return 31;
                        case 19:
                            this.popState(), this.begin("com");
                            break;
                        case 20:
                            return e(3, 5), this.popState(), 13;
                        case 21:
                            return 31;
                        case 22:
                            return 51;
                        case 23:
                            return 50;
                        case 24:
                            return 50;
                        case 25:
                            return 54;
                        case 26:
                            break;
                        case 27:
                            return this.popState(), 33;
                        case 28:
                            return this.popState(), 25;
                        case 29:
                            return b.yytext = e(1, 2).replace(/\\"/g, '"'), 42;
                        case 30:
                            return b.yytext = e(1, 2).replace(/\\'/g, "'"), 42;
                        case 31:
                            return 52;
                        case 32:
                            return 44;
                        case 33:
                            return 44;
                        case 34:
                            return 43;
                        case 35:
                            return 50;
                        case 36:
                            return b.yytext = e(1, 2), 50;
                        case 37:
                            return "INVALID";
                        case 38:
                            return 5
                    }
                }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {mu: {rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],inclusive: !1},emu: {rules: [2],inclusive: !1},com: {rules: [5],inclusive: !1},raw: {rules: [3, 4],inclusive: !1},INITIAL: {rules: [0, 1, 38],inclusive: !0}}, a
            }();
            return b.lexer = c, a.prototype = b, b.Parser = a, new a
        }();
        return a = b
    }(), i = function(a) {
        "use strict";
        function b(a, b) {
            return {left: "~" === a.charAt(2),right: "~" === b.charAt(b.length - 3)}
        }
        function c(a, b, c, d, i, k) {
            if (a.sexpr.id.original !== d.path.original)
                throw new j(a.sexpr.id.original + " doesn't match " + d.path.original, a);
            var l = c && c.program, m = {left: a.strip.left,right: d.strip.right,openStandalone: f(b.statements),closeStandalone: e((l || b).statements)};
            if (a.strip.right && g(b.statements, null, !0), l) {
                var n = c.strip;
                n.left && h(b.statements, null, !0), n.right && g(l.statements, null, !0), d.strip.left && h(l.statements, null, !0), e(b.statements) && f(l.statements) && (h(b.statements), g(l.statements))
            } else
                d.strip.left && h(b.statements, null, !0);
            return i ? new this.BlockNode(a, l, b, m, k) : new this.BlockNode(a, b, l, m, k)
        }
        function d(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var i = a[c], j = i.strip;
                if (j) {
                    var k = e(a, c, b, "partial" === i.type), l = f(a, c, b), m = j.openStandalone && k, n = j.closeStandalone && l, o = j.inlineStandalone && k && l;
                    j.right && g(a, c, !0), j.left && h(a, c, !0), o && (g(a, c), h(a, c) && "partial" === i.type && (i.indent = /([ \t]+$)/.exec(a[c - 1].original) ? RegExp.$1 : "")), m && (g((i.program || i.inverse).statements), h(a, c)), n && (g(a, c), h((i.inverse || i.program).statements))
                }
            }
            return a
        }
        function e(a, b, c) {
            void 0 === b && (b = a.length);
            var d = a[b - 1], e = a[b - 2];
            return d ? "content" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
        }
        function f(a, b, c) {
            void 0 === b && (b = -1);
            var d = a[b + 1], e = a[b + 2];
            return d ? "content" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
        }
        function g(a, b, c) {
            var d = a[null == b ? 0 : b + 1];
            if (d && "content" === d.type && (c || !d.rightStripped)) {
                var e = d.string;
                d.string = d.string.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.string !== e
            }
        }
        function h(a, b, c) {
            var d = a[null == b ? a.length - 1 : b - 1];
            if (d && "content" === d.type && (c || !d.leftStripped)) {
                var e = d.string;
                return d.string = d.string.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.string !== e, d.leftStripped
            }
        }
        var i = {}, j = a;
        return i.stripFlags = b, i.prepareBlock = c, i.prepareProgram = d, i
    }(c), j = function(a, b, c, d) {
        "use strict";
        function e(a) {
            return a.constructor === h.ProgramNode ? a : (g.yy = k, g.parse(a))
        }
        var f = {}, g = a, h = b, i = c, j = d.extend;
        f.parser = g;
        var k = {};
        return j(k, i, h), f.parse = e, f
    }(h, g, i, b), k = function(a, b) {
        "use strict";
        function c() {
        }
        function d(a, b, c) {
            if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode)
                throw new h("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var d = c.parse(a), e = (new c.Compiler).compile(d, b);
            return (new c.JavaScriptCompiler).compile(e, b)
        }
        function e(a, b, c) {
            function d() {
                var d = c.parse(a), e = (new c.Compiler).compile(d, b), f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                return c.template(f)
            }
            if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode)
                throw new h("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var e, f = function(a, b) {
                return e || (e = d()), e.call(this, a, b)
            };
            return f._setup = function(a) {
                return e || (e = d()), e._setup(a)
            }, f._child = function(a, b, c) {
                return e || (e = d()), e._child(a, b, c)
            }, f
        }
        function f(a, b) {
            if (a === b)
                return !0;
            if (i(a) && i(b) && a.length === b.length) {
                for (var c = 0; c < a.length; c++)
                    if (!f(a[c], b[c]))
                        return !1;
                return !0
            }
        }
        var g = {}, h = a, i = b.isArray, j = [].slice;
        return g.Compiler = c, c.prototype = {compiler: c,equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b)
                    return !1;
                for (var c = 0; b > c; c++) {
                    var d = this.opcodes[c], e = a.opcodes[c];
                    if (d.opcode !== e.opcode || !f(d.args, e.args))
                        return !1
                }
                for (b = this.children.length, c = 0; b > c; c++)
                    if (!this.children[c].equals(a.children[c]))
                        return !1;
                return !0
            },guid: 0,compile: function(a, b) {
                this.opcodes = [], this.children = [], this.depths = {list: []}, this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds;
                var c = this.options.knownHelpers;
                if (this.options.knownHelpers = {helperMissing: !0,blockHelperMissing: !0,each: !0,"if": !0,unless: !0,"with": !0,log: !0,lookup: !0}, c)
                    for (var d in c)
                        this.options.knownHelpers[d] = c[d];
                return this.accept(a)
            },accept: function(a) {
                return this[a.type](a)
            },program: function(a) {
                for (var b = a.statements, c = 0, d = b.length; d > c; c++)
                    this.accept(b[c]);
                return this.isSimple = 1 === d, this.depths.list = this.depths.list.sort(function(a, b) {
                    return a - b
                }), this
            },compileProgram: function(a) {
                var b, c = (new this.compiler).compile(a, this.options), d = this.guid++;
                this.usePartial = this.usePartial || c.usePartial, this.children[d] = c;
                for (var e = 0, f = c.depths.list.length; f > e; e++)
                    b = c.depths.list[e], 2 > b || this.addDepth(b - 1);
                return d
            },block: function(a) {
                var b = a.mustache, c = a.program, d = a.inverse;
                c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d));
                var e = b.sexpr, f = this.classifySexpr(e);
                "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue", e.id.original)) : (this.ambiguousSexpr(e, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            },hash: function(a) {
                var b, c, d = a.pairs;
                for (this.opcode("pushHash"), b = 0, c = d.length; c > b; b++)
                    this.pushParam(d[b][1]);
                for (; b--; )
                    this.opcode("assignToHash", d[b][0]);
                this.opcode("popHash")
            },partial: function(a) {
                var b = a.partialName;
                this.usePartial = !0, a.hash ? this.accept(a.hash) : this.opcode("push", "undefined"), a.context ? this.accept(a.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", b.name, a.indent || ""), this.opcode("append")
            },content: function(a) {
                a.string && this.opcode("appendContent", a.string)
            },mustache: function(a) {
                this.sexpr(a.sexpr), this.opcode(a.escaped && !this.options.noEscape ? "appendEscaped" : "append")
            },ambiguousSexpr: function(a, b, c) {
                var d = a.id, e = d.parts[0], f = null != b || null != c;
                this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.ID(d), this.opcode("invokeAmbiguous", e, f)
            },simpleSexpr: function(a) {
                var b = a.id;
                "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
            },helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c), e = a.id, f = e.parts[0];
                if (this.options.knownHelpers[f])
                    this.opcode("invokeKnownHelper", d.length, f);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new h("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                    e.falsy = !0, this.ID(e), this.opcode("invokeHelper", d.length, e.original, e.isSimple)
                }
            },sexpr: function(a) {
                var b = this.classifySexpr(a);
                "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
            },ID: function(a) {
                this.addDepth(a.depth), this.opcode("getContext", a.depth);
                var b = a.parts[0];
                b ? this.opcode("lookupOnContext", a.parts, a.falsy, a.isScoped) : this.opcode("pushContext")
            },DATA: function(a) {
                this.options.data = !0, this.opcode("lookupData", a.id.depth, a.id.parts)
            },STRING: function(a) {
                this.opcode("pushString", a.string)
            },NUMBER: function(a) {
                this.opcode("pushLiteral", a.number)
            },BOOLEAN: function(a) {
                this.opcode("pushLiteral", a.bool)
            },comment: function() {
            },opcode: function(a) {
                this.opcodes.push({opcode: a,args: j.call(arguments, 1)})
            },addDepth: function(a) {
                0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a)))
            },classifySexpr: function(a) {
                var b = a.isHelper, c = a.eligibleHelper, d = this.options;
                if (c && !b) {
                    var e = a.id.parts[0];
                    d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
                }
                return b ? "helper" : c ? "ambiguous" : "simple"
            },pushParams: function(a) {
                for (var b = 0, c = a.length; c > b; b++)
                    this.pushParam(a[b])
            },pushParam: function(a) {
                this.stringParams ? (a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", a.stringModeValue, a.type), "sexpr" === a.type && this.sexpr(a)) : (this.trackIds && this.opcode("pushId", a.type, a.idName || a.stringModeValue), this.accept(a))
            },setupFullMustacheParams: function(a, b, c) {
                var d = a.params;
                return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d
            }}, g.precompile = d, g.compile = e, g
    }(c, b), l = function(a, b) {
        "use strict";
        function c(a) {
            this.value = a
        }
        function d() {
        }
        var e, f = a.COMPILER_REVISION, g = a.REVISION_CHANGES, h = b;
        d.prototype = {nameLookup: function(a, b) {
                return d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']"
            },depthedLookup: function(a) {
                return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + a + '")'
            },compilerInfo: function() {
                var a = f, b = g[a];
                return [a, b]
            },appendToBuffer: function(a) {
                return this.environment.isSimple ? "return " + a + ";" : {appendToBuffer: !0,content: a,toString: function() {
                        return "buffer += " + a + ";"
                    }}
            },initializeBuffer: function() {
                return this.quotedString("")
            },namespace: "Handlebars",compile: function(a, b, c, d) {
                this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {programs: [],environments: []}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {list: []}, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.depths.list.length || this.options.compat;
                var e, f, g, i = a.opcodes;
                for (f = 0, g = i.length; g > f; f++)
                    e = i[f], this[e.opcode].apply(this, e.args);
                if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new h("Compile completed with content left on stack");
                var j = this.createFunctionContext(d);
                if (this.isChild)
                    return j;
                var k = {compiler: this.compilerInfo(),main: j}, l = this.context.programs;
                for (f = 0, g = l.length; g > f; f++)
                    l[f] && (k[f] = l[f]);
                return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.options.compat && (k.compat = !0), d || (k.compiler = JSON.stringify(k.compiler), k = this.objectLiteral(k)), k
            },preamble: function() {
                this.lastContext = 0, this.source = []
            },createFunctionContext: function(a) {
                var b = "", c = this.stackVars.concat(this.registers.list);
                c.length > 0 && (b += ", " + c.join(", "));
                for (var d in this.aliases)
                    this.aliases.hasOwnProperty(d) && (b += ", " + d + "=" + this.aliases[d]);
                var e = ["depth0", "helpers", "partials", "data"];
                this.useDepths && e.push("depths");
                var f = this.mergeSource(b);
                return a ? (e.push(f), Function.apply(this, e)) : "function(" + e.join(",") + ") {\n  " + f + "}"
            },mergeSource: function(a) {
                for (var b, c, d = "", e = !this.forceBuffer, f = 0, g = this.source.length; g > f; f++) {
                    var h = this.source[f];
                    h.appendToBuffer ? b = b ? b + "\n    + " + h.content : h.content : (b && (d ? d += "buffer += " + b + ";\n  " : (c = !0, d = b + ";\n  "), b = void 0), d += h + "\n  ", this.environment.isSimple || (e = !1))
                }
                return e ? (b || !d) && (d += "return " + (b || '""') + ";\n") : (a += ", buffer = " + (c ? "" : this.initializeBuffer()), d += b ? "return buffer + " + b + ";\n" : "return buffer;\n"), a && (d = "var " + a.substring(2) + (c ? "" : ";\n  ") + d), d
            },blockValue: function(a) {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var b = [this.contextName(0)];
                this.setupParams(a, 0, b);
                var c = this.popStack();
                b.splice(1, 0, c), this.push("blockHelperMissing.call(" + b.join(", ") + ")")
            },ambiguousBlockValue: function() {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var a = [this.contextName(0)];
                this.setupParams("", 0, a, !0), this.flushInline();
                var b = this.topStack();
                a.splice(1, 0, b), this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
            },appendContent: function(a) {
                this.pendingContent && (a = this.pendingContent + a), this.pendingContent = a
            },append: function() {
                this.flushInline();
                var a = this.popStack();
                this.pushSource("if (" + a + " != null) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },appendEscaped: function() {
                this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },getContext: function(a) {
                this.lastContext = a
            },pushContext: function() {
                this.pushStackLiteral(this.contextName(this.lastContext))
            },lookupOnContext: function(a, b, c) {
                var d = 0, e = a.length;
                for (c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])); e > d; d++)
                    this.replaceStack(function(c) {
                        var e = this.nameLookup(c, a[d], "context");
                        return b ? " && " + e : " != null ? " + e + " : " + c
                    })
            },lookupData: function(a, b) {
                this.pushStackLiteral(a ? "this.data(data, " + a + ")" : "data");
                for (var c = b.length, d = 0; c > d; d++)
                    this.replaceStack(function(a) {
                        return " && " + this.nameLookup(a, b[d], "data")
                    })
            },resolvePossibleLambda: function() {
                this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
            },pushStringParam: function(a, b) {
                this.pushContext(), this.pushString(b), "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
            },emptyHash: function() {
                this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
            },pushHash: function() {
                this.hash && this.hashes.push(this.hash), this.hash = {values: [],types: [],contexts: [],ids: []}
            },popHash: function() {
                var a = this.hash;
                this.hash = this.hashes.pop(), this.trackIds && this.push("{" + a.ids.join(",") + "}"), this.stringParams && (this.push("{" + a.contexts.join(",") + "}"), this.push("{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
            },pushString: function(a) {
                this.pushStackLiteral(this.quotedString(a))
            },push: function(a) {
                return this.inlineStack.push(a), a
            },pushLiteral: function(a) {
                this.pushStackLiteral(a)
            },pushProgram: function(a) {
                this.pushStackLiteral(null != a ? this.programExpression(a) : null)
            },invokeHelper: function(a, b, c) {
                this.aliases.helperMissing = "helpers.helperMissing";
                var d = this.popStack(), e = this.setupHelper(a, b), f = (c ? e.name + " || " : "") + d + " || helperMissing";
                this.push("((" + f + ").call(" + e.callParams + "))")
            },invokeKnownHelper: function(a, b) {
                var c = this.setupHelper(a, b);
                this.push(c.name + ".call(" + c.callParams + ")")
            },invokeAmbiguous: function(a, b) {
                this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                var c = this.popStack();
                this.emptyHash();
                var d = this.setupHelper(0, a, b), e = this.lastHelper = this.nameLookup("helpers", a, "helper");
                this.push("((helper = (helper = " + e + " || " + c + ") != null ? helper : helperMissing" + (d.paramsInit ? "),(" + d.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + d.callParams + ") : helper))")
            },invokePartial: function(a, b) {
                var c = [this.nameLookup("partials", a, "partial"), "'" + b + "'", "'" + a + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                this.options.data ? c.push("data") : this.options.compat && c.push("undefined"), this.options.compat && c.push("depths"), this.push("this.invokePartial(" + c.join(", ") + ")")
            },assignToHash: function(a) {
                var b, c, d, e = this.popStack();
                this.trackIds && (d = this.popStack()), this.stringParams && (c = this.popStack(), b = this.popStack());
                var f = this.hash;
                b && f.contexts.push("'" + a + "': " + b), c && f.types.push("'" + a + "': " + c), d && f.ids.push("'" + a + "': " + d), f.values.push("'" + a + "': (" + e + ")")
            },pushId: function(a, b) {
                "ID" === a || "DATA" === a ? this.pushString(b) : this.pushStackLiteral("sexpr" === a ? "true" : "null")
            },compiler: d,compileChildren: function(a, b) {
                for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                    c = e[f], d = new this.compiler;
                    var h = this.matchExistingProgram(c);
                    null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context, !this.precompile), this.context.environments[h] = c, this.useDepths = this.useDepths || d.useDepths) : (c.index = h, c.name = "program" + h)
                }
            },matchExistingProgram: function(a) {
                for (var b = 0, c = this.context.environments.length; c > b; b++) {
                    var d = this.context.environments[b];
                    if (d && d.equals(a))
                        return b
                }
            },programExpression: function(a) {
                var b = this.environment.children[a], c = (b.depths.list, this.useDepths), d = [b.index, "data"];
                return c && d.push("depths"), "this.program(" + d.join(", ") + ")"
            },useRegister: function(a) {
                this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
            },pushStackLiteral: function(a) {
                return this.push(new c(a))
            },pushSource: function(a) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), a && this.source.push(a)
            },pushStack: function(a) {
                this.flushInline();
                var b = this.incrStack();
                return this.pushSource(b + " = " + a + ";"), this.compileStack.push(b), b
            },replaceStack: function(a) {
                {
                    var b, d, e, f = "";
                    this.isInline()
                }
                if (!this.isInline())
                    throw new h("replaceStack on non-inline");
                var g = this.popStack(!0);
                if (g instanceof c)
                    f = b = g.value, e = !0;
                else {
                    d = !this.stackSlot;
                    var i = d ? this.incrStack() : this.topStackName();
                    f = "(" + this.push(i) + " = " + g + ")", b = this.topStack()
                }
                var j = a.call(this, b);
                e || this.popStack(), d && this.stackSlot--, this.push("(" + f + j + ")")
            },incrStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
            },topStackName: function() {
                return "stack" + this.stackSlot
            },flushInline: function() {
                var a = this.inlineStack;
                if (a.length) {
                    this.inlineStack = [];
                    for (var b = 0, d = a.length; d > b; b++) {
                        var e = a[b];
                        e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
                    }
                }
            },isInline: function() {
                return this.inlineStack.length
            },popStack: function(a) {
                var b = this.isInline(), d = (b ? this.inlineStack : this.compileStack).pop();
                if (!a && d instanceof c)
                    return d.value;
                if (!b) {
                    if (!this.stackSlot)
                        throw new h("Invalid stack pop");
                    this.stackSlot--
                }
                return d
            },topStack: function() {
                var a = this.isInline() ? this.inlineStack : this.compileStack, b = a[a.length - 1];
                return b instanceof c ? b.value : b
            },contextName: function(a) {
                return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
            },quotedString: function(a) {
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },objectLiteral: function(a) {
                var b = [];
                for (var c in a)
                    a.hasOwnProperty(c) && b.push(this.quotedString(c) + ":" + a[c]);
                return "{" + b.join(",") + "}"
            },setupHelper: function(a, b, c) {
                var d = [], e = this.setupParams(b, a, d, c), f = this.nameLookup("helpers", b, "helper");
                return {params: d,paramsInit: e,name: f,callParams: [this.contextName(0)].concat(d).join(", ")}
            },setupOptions: function(a, b, c) {
                var d, e, f, g = {}, h = [], i = [], j = [];
                g.name = this.quotedString(a), g.hash = this.popStack(), this.trackIds && (g.hashIds = this.popStack()), this.stringParams && (g.hashTypes = this.popStack(), g.hashContexts = this.popStack()), e = this.popStack(), f = this.popStack(), (f || e) && (f || (f = "this.noop"), e || (e = "this.noop"), g.fn = f, g.inverse = e);
                for (var k = b; k--; )
                    d = this.popStack(), c[k] = d, this.trackIds && (j[k] = this.popStack()), this.stringParams && (i[k] = this.popStack(), h[k] = this.popStack());
                return this.trackIds && (g.ids = "[" + j.join(",") + "]"), this.stringParams && (g.types = "[" + i.join(",") + "]", g.contexts = "[" + h.join(",") + "]"), this.options.data && (g.data = "data"), g
            },setupParams: function(a, b, c, d) {
                var e = this.objectLiteral(this.setupOptions(a, b, c));
                return d ? (this.useRegister("options"), c.push("options"), "options=" + e) : (c.push(e), "")
            }};
        for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), j = d.RESERVED_WORDS = {}, k = 0, l = i.length; l > k; k++)
            j[i[k]] = !0;
        return d.isValidJavaScriptVariableName = function(a) {
            return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
        }, e = d
    }(d, c), m = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c.parser, j = c.parse, k = d.Compiler, l = d.compile, m = d.precompile, n = e, o = g.create, p = function() {
            var a = o();
            return a.compile = function(b, c) {
                return l(b, c, a)
            }, a.precompile = function(b, c) {
                return m(b, c, a)
            }, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, a
        };
        return g = p(), g.create = p, g["default"] = g, f = g
    }(f, g, j, k, l);
    return m
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }
    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {version: "1.11.2",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), a.fn.extend({scrollParent: function(b) {
            var c = this.css("position"), d = "absolute" === c, e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/, f = this.parents().filter(function() {
                var b = a(this);
                return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
            }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }}), a.extend(a.expr[":"], {data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },tabbable: function(c) {
            var d = a.attr(c, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], f = c.toLowerCase(), g = {innerWidth: a.fn.innerWidth,innerHeight: a.fn.innerHeight,outerWidth: a.fn.outerWidth,outerHeight: a.fn.outerHeight};
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },zIndex: function(b) {
            if (void 0 !== b)
                return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
                    if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d))
                        return d;
                    e = e.parent()
                }
            return 0
        }}), a.ui.plugin = {add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d)
                f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++)
                    a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }}
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0, c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++)
                try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {
                }
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {version: d.version,_proto: a.extend({}, d),_childConstructors: []}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void (i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments)
                }, e = function(a) {
                    return c.prototype[b].apply(this, a)
                };
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void (i[b] = d)
        }), g.prototype = a.widget.extend(h, {widgetEventPrefix: f ? h.widgetEventPrefix || b : b}, i, {constructor: g,namespace: j,widgetName: b,widgetFullName: e}), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; h > g; g++)
            for (d in f[g])
                e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (b[d] = a.isPlainObject(e) ? a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f, h = c.call(arguments, 1), i = this;
            return f = !g && h.length ? a.widget.extend.apply(null, [f].concat(h)) : f, this.each(g ? function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            } : function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            }), i
        }
    }, a.Widget = function() {
    }, a.Widget._childConstructors = [], a.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {remove: function(a) {
                    a.target === d && this.destroy()
                }}), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },_getCreateOptions: a.noop,_getCreateEventData: a.noop,_create: a.noop,_init: a.noop,destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },_destroy: a.noop,widget: function() {
            return this.element
        },option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length)
                return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++)
                        e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length)
                        return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        },_setOptions: function(a) {
            var b;
            for (b in a)
                this._setOption(b, a[b]);
            return this
        },_setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },enable: function() {
            return this._setOptions({disabled: !1})
        },disable: function() {
            return this._setOptions({disabled: !0})
        },_on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },_off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },_delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },_hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }})
        },_focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }})
        },_trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f)
                    e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }}, a.each({show: "fadeIn",hide: "fadeOut"}, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {effect: e});
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], a) : a(jQuery)
}(function(a) {
    var b = !1;
    return a(document).mouseup(function() {
        b = !1
    }), a.widget("ui.mouse", {version: "1.11.2",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },_mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },_mouseDown: function(c) {
            if (!b) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },_mouseMove: function(b) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button)
                    return this._mouseUp(b);
                if (!b.which)
                    return this._mouseUp(b)
            }
            return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },_mouseUp: function(c) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), b = !1, !1
        },_mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },_mouseDelayMet: function() {
            return this.mouseDelayMet
        },_mouseStart: function() {
        },_mouseDrag: function() {
        },_mouseStop: function() {
        },_mouseCapture: function() {
            return !0
        }})
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    return function() {
        function b(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }
        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }
        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {width: b.width(),height: b.height(),offset: {top: 0,left: 0}} : a.isWindow(c) ? {width: b.width(),height: b.height(),offset: {top: b.scrollTop(),left: b.scrollLeft()}} : c.preventDefault ? {width: 0,height: 0,offset: {top: c.pageY,left: c.pageX}} : {width: b.outerWidth(),height: b.outerHeight(),offset: b.offset()}
        }
        a.ui = a.ui || {};
        var e, f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
        a.position = {scrollbarWidth: function() {
                if (void 0 !== e)
                    return e;
                var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), f = d.children()[0];
                return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
            },getScrollInfo: function(b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {width: f ? a.position.scrollbarWidth() : 0,height: e ? a.position.scrollbarWidth() : 0}
            },getWithinInfo: function(b) {
                var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType;
                return {element: c,isWindow: d,isDocument: e,offset: c.offset() || {left: 0,top: 0},scrollLeft: c.scrollLeft(),scrollTop: c.scrollTop(),width: d || e ? c.width() : c.outerWidth(),height: d || e ? c.height() : c.outerHeight()}
            }}, a.fn.position = function(e) {
            if (!e || !e.of)
                return o.apply(this, arguments);
            e = a.extend({}, e);
            var n, p, q, r, s, t, u = a(e.of), v = a.position.getWithinInfo(e.within), w = a.position.getScrollInfo(v), x = (e.collision || "flip").split(" "), y = {};
            return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() {
                var d, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = c(this, "marginLeft"), t = c(this, "marginTop"), z = l + o + c(this, "marginRight") + w.width, A = m + t + c(this, "marginBottom") + w.height, B = a.extend({}, s), C = b(y.my, k.outerWidth(), k.outerHeight());
                "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {marginLeft: o,marginTop: t}, a.each(["left", "top"], function(b, c) {
                    a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {targetWidth: p,targetHeight: q,elemWidth: l,elemHeight: m,collisionPosition: d,collisionWidth: z,collisionHeight: A,offset: [n[0] + C[0], n[1] + C[1]],my: e.my,at: e.at,within: v,elem: k})
                }), e.using && (j = function(a) {
                    var b = r.left - B.left, c = b + p - l, d = r.top - B.top, f = d + q - m, i = {target: {element: u,left: r.left,top: r.top,width: p,height: q},element: {element: k,left: B.left,top: B.top,width: l,height: m},horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"};
                    l > p && h(b + c) < p && (i.horizontal = "center"), m > q && h(d + f) < q && (i.vertical = "middle"), i.important = g(h(b), h(c)) > g(h(d), h(f)) ? "horizontal" : "vertical", e.using.call(this, a, i)
                }), k.offset(a.extend(B, {using: j}))
            })
        }, a.ui.position = {fit: {left: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                    b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                },top: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                    b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                }},flip: {left: function(a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                    0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
                },top: function(a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || h(c) < l) && (a.top += n + o + p))
                }},flipfit: {left: function() {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                },top: function() {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                }}}, function() {
            var b, c, d, e, g, h = document.getElementsByTagName("body")[0], i = document.createElement("div");
            b = document.createElement(h ? "div" : "body"), d = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"}, h && a.extend(d, {position: "absolute",left: "-1000px",top: "-1000px"});
            for (g in d)
                b.style[g] = d[g];
            b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
        }()
    }(), a.ui.position
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.draggable", a.ui.mouse, {version: "1.11.2",widgetEventPrefix: "drag",options: {addClasses: !0,appendTo: "parent",axis: !1,connectToSortable: !1,containment: !1,cursor: "auto",cursorAt: !1,grid: !1,handle: !1,helper: "original",iframeFix: !1,opacity: !1,refreshPositions: !1,revert: !1,revertDuration: 500,scope: "default",scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,snap: !1,snapMode: "both",snapTolerance: 20,stack: !1,zIndex: !1,drag: null,start: null,stop: null},_create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },_setOption: function(a, b) {
            this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },_destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
        },_mouseCapture: function(b) {
            var c = this.options;
            return this._blurActiveElement(b), this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0) : !1)
        },_blockFrames: function(b) {
            this.iframeBlocks = this.document.find(b).map(function() {
                var b = a(this);
                return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
            })
        },_unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },_blurActiveElement: function(b) {
            var c = this.document[0];
            if (this.handleElement.is(b.target))
                try {
                    c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
                } catch (d) {
                }
        },_mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === a(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },_refreshOffsets: function(a) {
            this.offset = {top: this.positionAbs.top - this.margins.top,left: this.positionAbs.left - this.margins.left,scroll: !1,parent: this._getParentOffset(),relative: this._getRelativeOffset()}, this.offset.click = {left: a.pageX - this.offset.left,top: a.pageY - this.offset.top}
        },_mouseDrag: function(b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1)
                    return this._mouseUp({}), !1;
                this.position = d.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },_mouseStop: function(b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1
        },_mouseUp: function(b) {
            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
        },cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },_getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
        },_setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },_removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },_createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper), e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
        },_setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },_adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {left: +b[0],top: +b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },_isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },_getParentOffset: function() {
            var b = this.offsetParent.offset(), c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {top: 0,left: 0}), {top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {top: 0,left: 0};
            var a = this.element.position(), b = this._isRootNode(this.scrollParent[0]);
            return {top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())}
        },_cacheMargins: function() {
            this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0,top: parseInt(this.element.css("marginTop"), 10) || 0,right: parseInt(this.element.css("marginRight"), 10) || 0,bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var b, c, d, e = this.options, f = this.document[0];
            return this.relativeContainer = null, e.containment ? "window" === e.containment ? void (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void (this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void (d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void (this.containment = null)
        },_convertPositionTo: function(a, b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1, d = this._isRootNode(this.scrollParent[0]);
            return {top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c}
        },_generatePosition: function(a, b) {
            var c, d, e, f, g = this.options, h = this._isRootNode(this.scrollParent[0]), i = a.pageX, j = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {top: this.scrollParent.scrollTop(),left: this.scrollParent.scrollLeft()}), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)}
        },_clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },_normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },_trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
        },plugins: {},_uiHash: function() {
            return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
        }}), a.ui.plugin.add("draggable", "connectToSortable", {start: function(b, c, d) {
            var e = a.extend({}, c, {item: d.element});
            d.sortables = [], a(d.options.connectToSortable).each(function() {
                var c = a(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
            })
        },stop: function(b, c, d) {
            var e = a.extend({}, c, {item: d.element});
            d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                var a = this;
                a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {position: a.placeholder.css("position"),top: a.placeholder.css("top"),left: a.placeholder.css("left")}, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
            })
        },drag: function(b, c, d) {
            a.each(d.sortables, function() {
                var e = !1, f = this;
                f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
                })), e ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                    return c.helper[0]
                }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                    this.refreshPositions()
                }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }}), a.ui.plugin.add("draggable", "cursor", {start: function(b, c, d) {
            var e = a("body"), f = d.options;
            e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
        },stop: function(b, c, d) {
            var e = d.options;
            e._cursor && a("body").css("cursor", e._cursor)
        }}), a.ui.plugin.add("draggable", "opacity", {start: function(b, c, d) {
            var e = a(c.helper), f = d.options;
            e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
        },stop: function(b, c, d) {
            var e = d.options;
            e._opacity && a(c.helper).css("opacity", e._opacity)
        }}), a.ui.plugin.add("draggable", "scroll", {start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
        },drag: function(b, c, d) {
            var e = d.options, f = !1, g = d.scrollParentNotHidden[0], h = d.document[0];
            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
        }}), a.ui.plugin.add("draggable", "snap", {start: function(b, c, d) {
            var e = d.options;
            d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                var b = a(this), c = b.offset();
                this !== d.element[0] && d.snapElements.push({item: this,width: b.outerWidth(),height: b.outerHeight(),top: c.top,left: c.left})
            })
        },drag: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = d.options, p = o.snapTolerance, q = c.offset.left, r = q + d.helperProportions.width, s = c.offset.top, t = s + d.helperProportions.height;
            for (m = d.snapElements.length - 1; m >= 0; m--)
                i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[m].item})), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {top: k - d.helperProportions.height,left: 0}).top), f && (c.position.top = d._convertPositionTo("relative", {top: l,left: 0}).top), g && (c.position.left = d._convertPositionTo("relative", {top: 0,left: i - d.helperProportions.width}).left), h && (c.position.left = d._convertPositionTo("relative", {top: 0,left: j}).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {top: k,left: 0}).top), f && (c.position.top = d._convertPositionTo("relative", {top: l - d.helperProportions.height,left: 0}).top), g && (c.position.left = d._convertPositionTo("relative", {top: 0,left: i}).left), h && (c.position.left = d._convertPositionTo("relative", {top: 0,left: j - d.helperProportions.width}).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[m].item})), d.snapElements[m].snapping = e || f || g || h || n)
        }}), a.ui.plugin.add("draggable", "stack", {start: function(b, c, d) {
            var e, f = d.options, g = a.makeArray(a(f.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
            });
            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                a(this).css("zIndex", e + b)
            }), this.css("zIndex", e + g.length))
        }}), a.ui.plugin.add("draggable", "zIndex", {start: function(b, c, d) {
            var e = a(c.helper), f = d.options;
            e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
        },stop: function(b, c, d) {
            var e = d.options;
            e._zIndex && a(c.helper).css("zIndex", e._zIndex)
        }}), a.ui.draggable
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./mouse", "./draggable"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.droppable", {version: "1.11.2",widgetEventPrefix: "drop",options: {accept: "*",activeClass: !1,addClasses: !0,greedy: !1,hoverClass: !1,scope: "default",tolerance: "intersect",activate: null,deactivate: null,drop: null,out: null,over: null},_create: function() {
            var b, c = this.options, d = c.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
                return a.is(d)
            }, this.proportions = function() {
                return arguments.length ? void (b = arguments[0]) : b ? b : b = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}
            }, this._addToManager(c.scope), c.addClasses && this.element.addClass("ui-droppable")
        },_addToManager: function(b) {
            a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this)
        },_splice: function(a) {
            for (var b = 0; b < a.length; b++)
                a[b] === this && a.splice(b, 1)
        },_destroy: function() {
            var b = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },_setOption: function(b, c) {
            if ("accept" === b)
                this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                };
            else if ("scope" === b) {
                var d = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(d), this._addToManager(c)
            }
            this._super(b, c)
        },_activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
        },_deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
        },_over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },_out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },_drop: function(b, c) {
            var d = c || a.ui.ddmanager.current, e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var c = a(this).droppable("instance");
                return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {offset: c.element.offset()}), c.options.tolerance, b) ? (e = !0, !1) : void 0
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
        },ui: function(a) {
            return {draggable: a.currentItem || a.element,helper: a.helper,position: a.position,offset: a.positionAbs}
        }}), a.ui.intersect = function() {
        function a(a, b, c) {
            return a >= b && b + c > a
        }
        return function(b, c, d, e) {
            if (!c.offset)
                return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left, g = (b.positionAbs || b.position.absolute).top + b.margins.top, h = f + b.helperProportions.width, i = g + b.helperProportions.height, j = c.offset.left, k = c.offset.top, l = j + c.proportions().width, m = k + c.proportions().height;
            switch (d) {
                case "fit":
                    return f >= j && l >= h && g >= k && m >= i;
                case "intersect":
                    return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;
                case "pointer":
                    return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                case "touch":
                    return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
                default:
                    return !1
            }
        }
    }(), a.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; d < f.length; d++)
                if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                    for (e = 0; e < h.length; e++)
                        if (h[e] === f[d].element[0]) {
                            f[d].proportions().height = 0;
                            continue a
                        }
                    f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({width: f[d].element[0].offsetWidth,height: f[d].element[0].offsetHeight}))
                }
        },drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }), d
        },dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        },drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a(this).droppable("instance").options.scope === e
                    }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                }
            })
        },dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }}, a.ui.droppable
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.resizable", a.ui.mouse, {version: "1.11.2",widgetEventPrefix: "resize",options: {alsoResize: !1,animate: !1,animateDuration: "slow",animateEasing: "swing",aspectRatio: !1,autoHide: !1,containment: !1,ghost: !1,grid: !1,handles: "e,s,se",helper: !1,maxHeight: null,maxWidth: null,minHeight: 10,minWidth: 10,zIndex: 90,resize: null,start: null,stop: null},_num: function(a) {
            return parseInt(a, 10) || 0
        },_isNumber: function(a) {
            return !isNaN(parseInt(a, 10))
        },_hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow"))
                return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        },_create: function() {
            var b, c, d, e, f, g = this, h = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {_aspectRatio: !!h.aspectRatio,aspectRatio: h.aspectRatio,originalElement: this.element,_proportionallyResizeElements: [],_helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"),width: this.element.outerWidth(),height: this.element.outerHeight(),top: this.element.css("top"),left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"),marginTop: this.originalElement.css("marginTop"),marginRight: this.originalElement.css("marginRight"),marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0,marginTop: 0,marginRight: 0,marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static",zoom: 1,display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n",e: ".ui-resizable-e",s: ".ui-resizable-s",w: ".ui-resizable-w",se: ".ui-resizable-se",sw: ".ui-resizable-sw",ne: ".ui-resizable-ne",nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++)
                    d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({zIndex: h.zIndex}), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
            this._renderAxis = function(b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles)
                    this.handles[c].constructor === String && (this.handles[c] = this.element.children(this.handles[c]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
            }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
            }).mouseleave(function() {
                h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
            })), this._mouseInit()
        },_destroy: function() {
            this._mouseDestroy();
            var b, c = function(b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({position: b.css("position"),width: b.outerWidth(),height: b.outerHeight(),top: b.css("top"),left: b.css("left")}).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
        },_mouseCapture: function(b) {
            var c, d, e = !1;
            for (c in this.handles)
                d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
            return !this.options.disabled && e
        },_mouseStart: function(b) {
            var c, d, e, f = this.options, g = this.element;
            return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: c,top: d}, this.size = this._helper ? {width: this.helper.width(),height: this.helper.height()} : {width: g.width(),height: g.height()}, this.originalSize = this._helper ? {width: g.outerWidth(),height: g.outerHeight()} : {width: g.width(),height: g.height()}, this.sizeDiff = {width: g.outerWidth() - g.width(),height: g.outerHeight() - g.height()}, this.originalPosition = {left: c,top: d}, this.originalMousePosition = {left: b.pageX,top: b.pageY}, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
        },_mouseDrag: function(b) {
            var c, d, e = this.originalMousePosition, f = this.axis, g = b.pageX - e.left || 0, h = b.pageY - e.top || 0, i = this._change[f];
            return this._updatePrevProperties(), i ? (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1) : !1
        },_mouseStop: function(b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options, k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {width: k.helper.width() - f,height: k.helper.height() - e}, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {top: i,left: h})), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
        },_updatePrevProperties: function() {
            this.prevPosition = {top: this.position.top,left: this.position.left}, this.prevSize = {width: this.size.width,height: this.size.height}
        },_applyChanges: function() {
            var a = {};
            return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
        },_updateVirtualBoundaries: function(a) {
            var b, c, d, e, f, g = this.options;
            f = {minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0}, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), e < f.maxHeight && (f.maxHeight = e)), this._vBoundaries = f
        },_updateCache: function(a) {
            this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
        },_updateRatio: function(a) {
            var b = this.position, c = this.size, d = this.axis;
            return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
        },_respectSize: function(a) {
            var b = this._vBoundaries, c = this.axis, d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width, e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height, f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width, g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height, h = this.originalPosition.left + this.originalSize.width, i = this.position.top + this.size.height, j = /sw|nw|w/.test(c), k = /nw|ne|n/.test(c);
            return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
        },_getPaddingPlusBorderDimensions: function(a) {
            for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++)
                c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
            return {height: c[0] + c[2],width: c[1] + c[3]}
        },_proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var a, b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++)
                    a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({height: c.height() - this.outerDimensions.height || 0,width: c.width() - this.outerDimensions.width || 0})
        },_renderProxy: function() {
            var b = this.element, c = this.options;
            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1,height: this.element.outerHeight() - 1,position: "absolute",left: this.elementOffset.left + "px",top: this.elementOffset.top + "px",zIndex: ++c.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },_change: {e: function(a, b) {
                return {width: this.originalSize.width + b}
            },w: function(a, b) {
                var c = this.originalSize, d = this.originalPosition;
                return {left: d.left + b,width: c.width - b}
            },n: function(a, b, c) {
                var d = this.originalSize, e = this.originalPosition;
                return {top: e.top + c,height: d.height - c}
            },s: function(a, b, c) {
                return {height: this.originalSize.height + c}
            },se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            },ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }},_propagate: function(b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
        },plugins: {},ui: function() {
            return {originalElement: this.originalElement,element: this.element,helper: this.helper,position: this.position,size: this.size,originalSize: this.originalSize,originalPosition: this.originalPosition}
        }}), a.ui.plugin.add("resizable", "animate", {stop: function(b) {
            var c = a(this).resizable("instance"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {width: c.size.width - h,height: c.size.height - g}, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {top: k,left: j} : {}), {duration: d.animateDuration,easing: d.animateEasing,step: function() {
                    var d = {width: parseInt(c.element.css("width"), 10),height: parseInt(c.element.css("height"), 10),top: parseInt(c.element.css("top"), 10),left: parseInt(c.element.css("left"), 10)};
                    e && e.length && a(e[0]).css({width: d.width,height: d.height}), c._updateCache(d), c._propagate("resize", b)
                }})
        }}), a.ui.plugin.add("resizable", "containment", {start: function() {
            var b, c, d, e, f, g, h, i = a(this).resizable("instance"), j = i.options, k = i.element, l = j.containment, m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
            m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {left: 0,top: 0}, i.containerPosition = {left: 0,top: 0}, i.parentData = {element: a(document),left: 0,top: 0,width: a(document).width(),height: a(document).height() || document.body.parentNode.scrollHeight}) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) {
                c[a] = i._num(b.css("padding" + d))
            }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {height: b.innerHeight() - c[3],width: b.innerWidth() - c[1]}, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {element: m,left: d.left,top: d.top,width: g,height: h}))
        },resize: function(b) {
            var c, d, e, f, g = a(this).resizable("instance"), h = g.options, i = g.containerOffset, j = g.position, k = g._aspectRatio || b.shiftKey, l = {top: 0,left: 0}, m = g.containerElement, n = !0;
            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
        },stop: function() {
            var b = a(this).resizable("instance"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({left: h.left - e.left - d.left,width: i,height: j}), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({left: h.left - e.left - d.left,width: i,height: j})
        }}), a.ui.plugin.add("resizable", "alsoResize", {start: function() {
            var b = a(this).resizable("instance"), c = b.options, d = function(b) {
                a(b).each(function() {
                    var b = a(this);
                    b.data("ui-resizable-alsoresize", {width: parseInt(b.width(), 10),height: parseInt(b.height(), 10),left: parseInt(b.css("left"), 10),top: parseInt(b.css("top"), 10)})
                })
            };
            "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function(a) {
                d(a)
            })
        },resize: function(b, c) {
            var d = a(this).resizable("instance"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {height: d.size.height - f.height || 0,width: d.size.width - f.width || 0,top: d.position.top - g.top || 0,left: d.position.left - g.left || 0}, i = function(b, d) {
                a(b).each(function() {
                    var b = a(this), e = a(this).data("ui-resizable-alsoresize"), f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    a.each(g, function(a, b) {
                        var c = (e[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (f[b] = c || null)
                    }), b.css(f)
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function(a, b) {
                i(a, b)
            })
        },stop: function() {
            a(this).removeData("resizable-alsoresize")
        }}), a.ui.plugin.add("resizable", "ghost", {start: function() {
            var b = a(this).resizable("instance"), c = b.options, d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({opacity: .25,display: "block",position: "relative",height: d.height,width: d.width,margin: 0,left: 0,top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
        },resize: function() {
            var b = a(this).resizable("instance");
            b.ghost && b.ghost.css({position: "relative",height: b.size.height,width: b.size.width})
        },stop: function() {
            var b = a(this).resizable("instance");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }}), a.ui.plugin.add("resizable", "grid", {resize: function() {
            var b, c = a(this).resizable("instance"), d = c.options, e = c.size, f = c.originalSize, g = c.originalPosition, h = c.axis, i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid, j = i[0] || 1, k = i[1] || 1, l = Math.round((e.width - f.width) / j) * j, m = Math.round((e.height - f.height) / k) * k, n = f.width + l, o = f.height + m, p = d.maxWidth && d.maxWidth < n, q = d.maxHeight && d.maxHeight < o, r = d.minWidth && d.minWidth > n, s = d.minHeight && d.minHeight > o;
            d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = k - b.height, c.size.width = n, c.position.left = g.left + f.width - n))
        }}), a.ui.resizable
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.selectable", a.ui.mouse, {version: "1.11.2",options: {appendTo: "body",autoRefresh: !0,distance: 0,filter: "*",tolerance: "touch",selected: null,selecting: null,start: null,stop: null,unselected: null,unselecting: null},_create: function() {
            var b, c = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function() {
                    var b = a(this), c = b.offset();
                    a.data(this, "selectable-item", {element: this,$element: b,left: c.left,top: c.top,right: c.left + b.outerWidth(),bottom: c.top + b.outerHeight(),startselected: !1,selected: b.hasClass("ui-selected"),selecting: b.hasClass("ui-selecting"),unselecting: b.hasClass("ui-unselecting")})
                })
            }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
        },_destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },_mouseStart: function(b) {
            var c = this, d = this.options;
            this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({left: b.pageX,top: b.pageY,width: 0,height: 0}), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var d = a.data(this, "selectable-item");
                d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {unselecting: d.element}))
            }), a(b.target).parents().addBack().each(function() {
                var d, e = a.data(this, "selectable-item");
                return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {selecting: e.element}) : c._trigger("unselecting", b, {unselecting: e.element}), !1) : void 0
            }))
        },_mouseDrag: function(b) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this, e = this.options, f = this.opos[0], g = this.opos[1], h = b.pageX, i = b.pageY;
                return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({left: f,top: g,width: h - f,height: i - g}), this.selectees.each(function() {
                    var c = a.data(this, "selectable-item"), j = !1;
                    c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || c.right < f || c.top > i || c.bottom < g) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {selecting: c.element}))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {unselecting: c.element}))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {unselecting: c.element})))))
                }), !1
            }
        },_mouseStop: function(b) {
            var c = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {unselected: d.element})
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {selected: d.element})
            }), this._trigger("stop", b), this.helper.remove(), !1
        }})
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.sortable", a.ui.mouse, {version: "1.11.2",widgetEventPrefix: "sort",ready: !1,options: {appendTo: "parent",axis: !1,connectWith: !1,containment: !1,cursor: "auto",cursorAt: !1,dropOnEmpty: !0,forcePlaceholderSize: !1,forceHelperSize: !1,grid: !1,handle: !1,helper: "original",items: "> *",opacity: !1,placeholder: !1,revert: !1,scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1e3,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_isOverAxis: function(a, b, c) {
            return a >= b && b + c > a
        },_isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        },_create: function() {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },_setOption: function(a, b) {
            this._super(a, b), "handle" === a && this._setHandleClassName()
        },_setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },_destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--)
                this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },_mouseCapture: function(b, c) {
            var d = null, e = !1, f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function() {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
                this === b.target && (e = !0)
            }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1)
        },_mouseStart: function(b, c, d) {
            var e, f, g = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, a.extend(this.offset, {click: {left: b.pageX - this.offset.left,top: b.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                for (e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },_mouseDrag: function(b) {
            var c, d, e, f, g = this.options, h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                    if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d))
                        break;
                    this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                    break
                }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },_mouseStop: function(b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                    var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                    f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b)
                    })
                } else
                    this._clear(b, c);
                return !1
            }
        },cancel: function() {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--)
                    this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {helper: null,dragging: !1,reverting: !1,_noFinalSort: null}), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "="), d.join("&")
        },toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), d
        },_intersectsWith: function(a) {
            var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = "x" === this.options.axis || d + j > h && i > d + j, m = "y" === this.options.axis || b + k > f && g > b + k, n = l && m;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },_intersectsWithPointer: function(a) {
            var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height), c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width), d = b && c, e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
            return d ? this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1) : !1
        },_intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), d = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b)
        },_getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up")
        },_getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left")
        },refresh: function(a) {
            return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
        },_connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },_getItemsAsjQuery: function(b) {
            function c() {
                h.push(this)
            }
            var d, e, f, g, h = [], i = [], j = this._connectWith();
            if (j && b)
                for (d = j.length - 1; d >= 0; d--)
                    for (f = a(j[d]), e = f.length - 1; e >= 0; e--)
                        g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
            for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--)
                i[d][0].each(c);
            return a(h)
        },_removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; c < b.length; c++)
                    if (b[c] === a.item[0])
                        return !1;
                return !0
            })
        },_refreshItems: function(b) {
            this.items = [], this.containers = [this];
            var c, d, e, f, g, h, i, j, k = this.items, l = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item: this.currentItem}) : a(this.options.items, this.element), this]], m = this._connectWith();
            if (m && this.ready)
                for (c = m.length - 1; c >= 0; c--)
                    for (e = a(m[c]), d = e.length - 1; d >= 0; d--)
                        f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {item: this.currentItem}) : a(f.options.items, f.element), f]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--)
                for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++)
                    i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({item: i,instance: g,width: 0,height: 0,left: 0,top: 0})
        },refreshPositions: function(b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--)
                d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (c = this.containers.length - 1; c >= 0; c--)
                    f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },_createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {element: function() {
                    var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === d ? b.currentItem.children().each(function() {
                        a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e)
                    }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
                },update: function(a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                }}), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
        },_contactContainers: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m = null, n = null;
            for (c = this.containers.length - 1; c >= 0; c--)
                if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                    if (this._intersectsWith(this.containers[c].containerCache)) {
                        if (m && a.contains(this.containers[c].element[0], m.element[0]))
                            continue;
                        m = this.containers[c], n = c
                    } else
                        this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
            if (m)
                if (1 === this.containers.length)
                    this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
                else {
                    for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--)
                        a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), Math.abs(b[l] - i) < e && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[n])
                        return void (this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1
                }
        },_createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
        },_adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {left: +b[0],top: +b[1] || 0}), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },_getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {top: 0,left: 0}), {top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return {top: 0,left: 0}
        },_cacheMargins: function() {
            this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },_convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
            return {top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d}
        },_generatePosition: function(b) {
            var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())}
        },_rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                e === this.counter && this.refreshPositions(!d)
            })
        },_clear: function(a, b) {
            function c(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b))
                }
            }
            this.reverting = !1;
            var d, e = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS)
                    ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !b && e.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
                this._trigger("update", a, this._uiHash())
            }), this !== this.currentContainer && (b || (e.push(function(a) {
                this._trigger("remove", a, this._uiHash())
            }), e.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), e.push(function(a) {
                return function(b) {
                    a._trigger("update", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--)
                b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
                for (d = 0; d < e.length; d++)
                    e[d].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },_trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },_uiHash: function(b) {
            var c = b || this;
            return {helper: c.helper,placeholder: c.placeholder || a([]),position: c.position,originalPosition: c.originalPosition,offset: c.positionAbs,item: c.currentItem,sender: b ? b.element : null}
        }})
}), function(a) {
    function b(b) {
        if ("string" == typeof b.data && (b.data = {keys: b.data}), b.data && b.data.keys && "string" == typeof b.data.keys) {
            var c = b.handler, d = b.data.keys.toLowerCase().split(" ");
            b.handler = function(b) {
                if (this === b.target || !(/textarea|select/i.test(b.target.nodeName) || a.hotkeys.options.filterTextInputs && a.inArray(b.target.type, a.hotkeys.textAcceptingInputTypes) > -1)) {
                    var e = "keypress" !== b.type && a.hotkeys.specialKeys[b.which], f = String.fromCharCode(b.which).toLowerCase(), g = "", h = {};
                    a.each(["alt", "ctrl", "shift"], function(a, c) {
                        b[c + "Key"] && e !== c && (g += c + "+")
                    }), b.metaKey && !b.ctrlKey && "meta" !== e && (g += "meta+"), b.metaKey && "meta" !== e && g.indexOf("alt+ctrl+shift+") > -1 && (g = g.replace("alt+ctrl+shift+", "hyper+")), e ? h[g + e] = !0 : (h[g + f] = !0, h[g + a.hotkeys.shiftNums[f]] = !0, "shift+" === g && (h[a.hotkeys.shiftNums[f]] = !0));
                    for (var i = 0, j = d.length; j > i; i++)
                        if (h[d[i]])
                            return c.apply(this, arguments)
                }
            }
        }
    }
    a.hotkeys = {version: "0.8",specialKeys: {8: "backspace",9: "tab",10: "return",13: "return",16: "shift",17: "ctrl",18: "alt",19: "pause",20: "capslock",27: "esc",32: "space",33: "pageup",34: "pagedown",35: "end",36: "home",37: "left",38: "up",39: "right",40: "down",45: "insert",46: "del",59: ";",61: "=",96: "0",97: "1",98: "2",99: "3",100: "4",101: "5",102: "6",103: "7",104: "8",105: "9",106: "*",107: "+",109: "-",110: ".",111: "/",112: "f1",113: "f2",114: "f3",115: "f4",116: "f5",117: "f6",118: "f7",119: "f8",120: "f9",121: "f10",122: "f11",123: "f12",144: "numlock",145: "scroll",173: "-",186: ";",187: "=",188: ",",189: "-",190: ".",191: "/",192: "`",219: "[",220: "\\",221: "]",222: "'"},shiftNums: {"`": "~",1: "!",2: "@",3: "#",4: "$",5: "%",6: "^",7: "&",8: "*",9: "(",0: ")","-": "_","=": "+",";": ": ","'": '"',",": "<",".": ">","/": "?","\\": "|"},textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],options: {filterTextInputs: !0}}, a.each(["keydown", "keyup", "keypress"], function() {
        a.event.special[this] = {add: b}
    })
}(jQuery || this.jQuery || window.jQuery), function(a) {
    var b, c, d = a.event;
    b = d.special.debouncedresize = {setup: function() {
            a(this).on("resize", b.handler)
        },teardown: function() {
            a(this).off("resize", b.handler)
        },handler: function(a, e) {
            var f = this, g = arguments, h = function() {
                a.type = "debouncedresize", d.dispatch.apply(f, g)
            };
            c && clearTimeout(c), e ? h() : c = setTimeout(h, b.threshold)
        },threshold: 150}
}(jQuery);