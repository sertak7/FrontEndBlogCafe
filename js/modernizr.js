/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
! function(n, e, s) {
    function o(n) { var e = r.className,
            s = Modernizr._config.classPrefix || ""; if (c && (e = e.baseVal), Modernizr._config.enableJSClass) { var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
            e = e.replace(o, "$1" + s + "js$2") }
        Modernizr._config.enableClasses && (e += " " + s + n.join(" " + s), c ? r.className.baseVal = e : r.className = e) }

    function a(n, e) { return typeof n === e }

    function i() { var n, e, s, o, i, l, r; for (var c in f)
            if (f.hasOwnProperty(c)) { if (n = [], e = f[c], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (s = 0; s < e.options.aliases.length; s++) n.push(e.options.aliases[s].toLowerCase()); for (o = a(e.fn, "function") ? e.fn() : e.fn, i = 0; i < n.length; i++) l = n[i], r = l.split("."), 1 === r.length ? Modernizr[r[0]] = o : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = o), t.push((o ? "" : "no-") + r.join("-")) } } var t = [],
        f = [],
        l = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(n, e) { var s = this;
                setTimeout(function() { e(s[n]) }, 0) }, addTest: function(n, e, s) { f.push({ name: n, fn: e, options: s }) }, addAsyncTest: function(n) { f.push({ name: null, fn: n }) } },
        Modernizr = function() {};
    Modernizr.prototype = l, Modernizr = new Modernizr; var r = e.documentElement,
        c = "svg" === r.nodeName.toLowerCase();
    i(), o(t), delete l.addTest, delete l.addAsyncTest; for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]();
    n.Modernizr = Modernizr }(window, document);