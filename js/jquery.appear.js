! function(e) {
    var r = [],
        t = !1,
        i = !1,
        n = {
            interval: 250,
            force_process: !1
        },
        a = e(window),
        o = [];

    function f() {
        i = !1;
        for (var t = 0, n = r.length; t < n; t++) {
            var a = e(r[t]).filter(function() {
                return e(this).is(":appeared")
            });
            if (a.trigger("appear", [a]), o[t]) {
                var f = o[t].not(a);
                f.trigger("disappear", [f])
            }
            o[t] = a
        }
    }
    e.expr[":"].appeared = function(r) {
        var t = e(r);
        if (!t.is(":visible")) return !1;
        var i = a.scrollLeft(),
            n = a.scrollTop(),
            o = t.offset(),
            f = o.left,
            p = o.top;
        return p + t.height() >= n && p - (t.data("appear-top-offset") || 0) <= n + a.height() && f + t.width() >= i && f - (t.data("appear-left-offset") || 0) <= i + a.width()
    }, e.fn.extend({
        appear: function(a) {
            var p, s = e.extend({}, n, a || {}),
                u = this.selector || this;
            if (!t) {
                var c = function() {
                    i || (i = !0, setTimeout(f, s.interval))
                };
                e(window).scroll(c).resize(c), t = !0
            }
            return s.force_process && setTimeout(f, s.interval), p = u, r.push(p), o.push(), e(u)
        }
    }), e.extend({
        force_appear: function() {
            return !!t && (f(), !0)
        }
    })
}("undefined" != typeof module ? require("jquery") : jQuery);