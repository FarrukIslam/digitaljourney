! function(e) {
    var a = e(".bxslider").bxSlider({
        mode: "vertical",
        easing: "easeInExpo",
        useCSS: !0,
        auto: !0,
        pause: 5e3,
        speed: 850,
        controls: !1,
        randomStart: !0,
        pager: !0,
        touchEnabled: !1,
        fullScreenMinusHeader: !0,
        backgroundImageMode: !0,
        onSliderLoad: function(a, n) {
            var i = e(n),
                d = i.find("a");
            d.addClass("active")
        },
        onSlideBefore: function(e, a, n) {
            setTimeout(function() {
                var a = e.find("a");
                a.addClass("active")
            }, 500)
        },
        onSlideAfter: function(e, n, i) {
            var d = a.getSlideElement(n),
                o = d.find("a");
            o.removeClass("active")
        }
    });
    e(".hero__img .bxslider li"), e(".main-nav").height()
}(jQuery);
! function(t) {
    t(document).ready(function() {
        var i = t(".entry-content>img, .entry-content p>img, .entry-content a>img, .entry-content figure>img, .special-entry figure>img"),
            n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        n ? i.css("opacity", 1) : t(window).scroll(function() {
            var n = t(window).scrollTop() + t(window).height();
            i.each(function(i) {
                var e = t(this).offset().top + t(this).outerHeight() / 2;
                n > e && t(this).animate({
                    opacity: "1"
                }, 500)
            })
        })
    })
}(jQuery);
! function(e) {
    "use strict";
    e.fn.imagesLoaded = function() {
        var t = function(t, i, r) {
            var n, o = !1,
                s = e(t).parent(),
                a = e("<img />"),
                c = e(t).attr("srcset"),
                u = e(t).attr("sizes") || "100vw",
                d = e(t).attr("src"),
                m = function() {
                    a.off("load error", m), clearTimeout(n), i()
                };
            r && (n = setTimeout(m, r)), a.on("load error", m), s.is("picture") && (s = s.clone(), s.find("img").remove().end(), s.append(a), o = !0), c ? (a.attr("sizes", u), a.attr("srcset", c), o || a.appendTo(document.createElement("div")), o = !0) : d && a.attr("src", d), o && !window.HTMLPictureElement && (window.respimage ? window.respimage({
                elements: [a[0]]
            }) : window.picturefill ? window.picturefill({
                elements: [a[0]]
            }) : d && a.attr("src", d))
        };
        return function(i) {
            var r = 0,
                n = e("img", this).add(this.filter("img")),
                o = function() {
                    r++, r >= n.length && i()
                };
            return n.each(function() {
                t(this, o)
            }), this
        }
    }()
}(jQuery);
var Handsome = Handsome || {};
document.addEventListener("DOMContentLoaded", function() {
        FastClick.attach(document.body), Handsome.MobileMenu.init()
    }, !1),
    function(e) {
        e(".learnmore-arrow-homepage").click(function(o) {
            e("html, body").animate({
                scrollTop: e(".hero__headline--homepage").offset().top
            }, 800, "easeOutQuart"), o.preventDefault()
        })
    }(jQuery);
var Handsome = Handsome || {};
Handsome.MobileMenu = function() {
    function e() {
        l.classList.contains("nav-open") ? o() : n()
    }

    function n() {
        l.classList.add("nav-open"), t()
    }

    function o() {
        l.classList.remove("nav-open"), r(), c.scrollTop = 0
    }

    function t() {
        c.addEventListener("touchmove", i, !1), c.addEventListener("mousewheel", i, !1), c.addEventListener("DOMMouseScroll", i, !1)
    }

    function r() {
        c.removeEventListener("touchmove", i, !1), c.removeEventListener("mousewheel", i, !1), c.removeEventListener("DOMMouseScroll", i, !1)
    }

    function i(e) {
        var n = this,
            o = this.querySelector(".mobile-nav__inner"),
            t = n.scrollTop,
            r = 120;
        return o.offsetHeight + r < window.innerHeight ? (e.stopPropagation(), e.preventDefault(), e.returnValue = !1, !1) : void(0 == t ? n.scrollTop = 1 : t + n.offsetHeight == n.scrollHeight && (n.scrollTop = t - 1))
    }

    function s() {
        var n = document.querySelector(".mobile-nav-toggle");
        n.addEventListener("click", function(n) {
            n.preventDefault(), e()
        })
    }
    var l = document.querySelector("body"),
        c = document.querySelector(".mobile-nav");
    return {
        init: s,
        destroy: r
    }
}();