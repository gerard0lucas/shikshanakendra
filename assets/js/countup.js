! function(t) {
    "use strict";
    t.fn.rCounter = function(n) {
        var r = t.extend({
            duration: 40,
            easing: "swing"
        }, n);
        return this.each(function() {
            var n = t(this),
                e = function() {
                    var t = [];
                    n.length;
                    for (var e = n.text(), i = /[,\-]/.test(e), o = /[,\-]/.test(e), e = e.replace(/,/g, ""), u = r.duration, a = o ? (e.split(".")[1] || []).length : 0, f = u; f >= 1; f--) {
                        var s = parseInt(e / u * f);
                        if (o && (s = parseFloat(e / u * f).toFixed(a)), i)
                            for (;
                                /(\d+)(\d{3})/.test(s.toString());) s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(s)
                    }
                    var c = function() {
                        n.text(t.shift()), setTimeout(c, r.duration)
                    };
                    setTimeout(c, r.duration)
                };
            n.waypoint(e, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }, t(".count-num").rCounter()
}(jQuery);