var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    n = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    _ = n.prototype = i.to({}, .1, {}),
                    u = [];
                n.version = "1.18.0", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, _.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
                    }
                    return this
                }, _.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === a) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && d === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && c !== a && (this._rawPrevTime = 0))
                }, n.to = function(t, e, i) {
                    return new n(t, e, i)
                }, n.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
                }, n.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
                }, n.staggerTo = n.allTo = function(t, e, a, o, _, c, f) {
                    o = o || 0;
                    var p, m, d, g, v = a.delay || 0,
                        y = [],
                        T = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(f || a.callbackScope || this, c || u)
                        },
                        x = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, d = 0; p >= d; d++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (x && r(m, t, d), w) {
                            w = m.startAt = {};
                            for (g in a.startAt) w[g] = a.startAt[g];
                            r(m.startAt, t, d)
                        }
                        m.delay = v, d === p && _ && (m.onComplete = T), y[d] = new n(t[d], e, m), v += o
                    }
                    return y
                }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
                }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
                }, n.delayedCall = function(t, e, i, s, r) {
                    return new n(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, n.set = function(t, e) {
                    return new n(t, 0, e)
                }, n.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var c = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(c(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    f = n.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                n.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, l = f(0 != r),
                        h = l.length,
                        _ = i && s && r;
                    for (o = 0; h > o; o++) a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, a, _, u, c, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (_ in f)
                                for (a = f[_].target.parentNode; a;) a === t && (r = r.concat(f[_].tweens)), a = a.parentNode;
                            for (c = r.length, u = 0; c > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = f(r), l = i && s && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return n.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, n.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, n.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, _.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, _.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, _.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    l = n.isArray,
                    h = n.lazyTweens,
                    _ = n.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    c = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.18.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = d._hasPause = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && u.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, l, h, _) {
                    var u, p, d = new s({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: _,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), p = 0; t.length > p; p++) u = c(r), u.startAt && (u.startAt = c(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), g && f(u, t, p), d.to(t[p], e, u, p * n);
                    return this.add(d, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var h, _, u, c, f, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(c = r[u]) && (c = new s({
                                tweens: c
                            })), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, s, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, l, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        p = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= c) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (s = this._first; s && t >= s._startTime && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);) {
                                if (s._active || f >= s._startTime && !s._paused && !s._gc) {
                                    if (u === s) {
                                        for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = a
                            }
                        this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = e._internals,
                    a = n.lazyTweens,
                    o = n.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = s.prototype = new t;
                return h.constructor = s, h.kill()._gc = !1, s.version = "1.18.0", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
                    }, n
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        x = this._cycle;
                    if (t >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (_ = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : y >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (_ = !0)
                        } else if (0 === p && 0 > y && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = p + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (s = this._first; s && t >= s._startTime && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !c;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
                        c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & x),
                            b = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = x * p, x > this._cycle ? w = !w : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = w ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), b && (m = w ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = k, this._rawPrevTime = S
                    }
                    if (!(this._time !== m && this._first || i || _ || c)) return void(d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);) {
                            if (s._active || m >= s._startTime && !s._paused && !s._gc) {
                                if (c === s) {
                                    for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (s = 0; l > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (l + h) / 2,
                            c = (h + _) / 2,
                            f = (c - u) / 8;
                        return r.b = l + (t - l) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, r, n, a, o) {
                        var h, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (h = 0; w > h; h++) f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[h], T = i[h], x = .25 * (T + y) * r / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== h ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = l(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = l(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, l, h, _, u, c, f = [];
                        if (n)
                            for (t = [n].concat(t), l = t.length; --l > -1;) "string" == typeof(c = t[l][s]) && "=" === c.charAt(1) && (t[l][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (l = 0; o > l; l++) h = t[l][s], _ = t[l + 1][s], f[l] = new a(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
                        return f[l] = new a(t[l][s], 0, 0, t[l + 1][s]), f
                    },
                    u = function(t, n, a, l, u, c) {
                        var f, p, m, d, g, v, y, T, x = {},
                            w = [],
                            b = c || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = w.length; --f > -1;)
                                if (r[p])
                                    for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = w.length, d = a ? 4 : 1; --f > -1;) p = w[f], m = x[p], h(m, n, a, l, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return x
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, l, h, _, u, c, f, p, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (h = v.length; --h > -1;) {
                            for (c = v[h], m[c] = l = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[f++] = (s + l[f - 2]) / 2), l[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = l[_], r = l[_ + 1], n = l[_ + 2], o = 2 === d ? 0 : l[_ + 3], l[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            l.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i, m = t.length; --m > -1;)
                            for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, _ = 1; i >= _; _++) h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            _ = e - 1,
                            u = [],
                            c = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]), n = s % e, c[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, l = e.values || [],
                                h = {},
                                _ = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, l, h, _, u, c = this._segCount,
                                f = this._func,
                                p = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                                    for (h = c - 1; h > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (l = Math.round(l)), f[n] ? p[n](l) : p[n] = l;
                            if (this._autoRotate) {
                                var d, g, v, y, T, x, w, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, l = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](l) : p[n] = l)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var h, _, u, c = e.values,
                                    f = c.length - 1,
                                    p = [],
                                    d = {};
                                if (0 > f) return o;
                                for (h = 0; f >= h; h++) u = i(t, c[h], a, o, l, f !== h), p[h] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (h = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.18.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var _, u, c, f, p, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    F = 180 / Math.PI,
                    I = {},
                    E = document,
                    N = function(t) {
                        return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
                    },
                    L = N("div"),
                    X = N("img"),
                    B = a._internals = {
                        _specialProps: l
                    },
                    j = navigator.userAgent,
                    Y = function() {
                        var t = j.indexOf("Android"),
                            e = N("a");
                        return c = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || Number(j.substr(t + 8, 1)) > 3), p = c && 6 > Number(j.substr(j.indexOf("Version/") + 8, 1)), f = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    U = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return Y || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = B.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, l, h, _ = A.test(i),
                            u = t,
                            c = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                                c[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return f ? -o : o
                    },
                    H = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || ke === r) && (n[r.replace(S, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Pe === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
                        return Y || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Re && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (l[a] = s[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, l, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    le = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    he = a.parseColor = function(t, e) {
                        var i, s, r, n, a, o, l, h, _, u, c;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t]) i = oe[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = c = t.match(d), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = le(a + 1 / 3, s, r), i[1] = le(a, s, r), i[2] = le(a - 1 / 3, s, r);
                                else i = t.match(d) || oe.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = oe.black;
                        return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i
                    },
                    _e = function(t, e) {
                        var i, s, r, n = t.match(ue) || [],
                            a = 0,
                            o = n.length ? "" : t;
                        for (i = 0; n.length > i; i++) s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = he(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return o
                    },
                    ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in oe) ue += "|" + h + "\\b";
                ue = RegExp(ue + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ue.lastIndex = 0, ue.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _e(t[0], e), t[1] = _e(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var ce = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(ue) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, c, f, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(ue) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--)
                                for (; _ > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                            return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) n[c] = r(n[c]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, _ > c--)
                                for (; _ > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    fe = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    pe = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    me = (B._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, l, h, _, u = s,
                            c = {},
                            f = {},
                            p = i._transform,
                            m = I;
                        for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (h = new pe(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], c[o] = s[l], n || (h = new pe(s, l, o, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: h,
                            pt: _
                        }
                    }, B.CSSPropTween = function(t, e, s, r, a, o, l, h, _, u, c) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof me || n.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this)
                    }),
                    de = function(t, e, i, s, r, n) {
                        var a = new me(t, e, i, s - i, r, -1, n);
                        return a.b = i, a.e = a.xs0 = s, a
                    },
                    ge = a.parseComplex = function(t, e, i, s, r, n, a, o, l, h) {
                        i = i || n || "", a = new me(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, c, f, p, m, v, y, T, x, w, b, P, k, S = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            O = S.length,
                            A = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = l, a.setRatio = h, ue.lastIndex = 0, u = 0; O > u; u++)
                            if (p = S[u], m = R[u], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ue.test(p)) P = "," === m.charAt(m.length - 1) ? ")," : ")", k = -1 !== m.indexOf("hsl") && Y, p = he(p, k), m = he(m, k), x = p.length + m.length > 6, x && !Y && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (Y || (x = !1), k ? a.appendXtra(x ? "hsla(" : "hsl(", p[0], re(m[0], p[0]), ",", !1, !0).appendXtra("", p[1], re(m[1], p[1]), "%,", !1).appendXtra("", p[2], re(m[2], p[2]), x ? "%," : "%" + P, !1) : a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : P, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, P, !1))), ue.lastIndex = 0;
                        else if (v = p.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, c = 0; v.length > c; c++) b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + p : p;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, u = 1; a.l > u; u++) P += a["xs" + u] + a.data["xn" + u];
                            a.e = P + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ve = 9;
                for (h = me.prototype, h.l = h.pr = 0; --ve > 0;) h["xn" + ve] = 0, h["xs" + ve] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new me(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ye = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ce(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Te = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ye(n[s], e)
                    },
                    xe = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Te(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = ye.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, c = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return ge(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    Te(t, {
                        parser: function(t, s, r, n, a, o) {
                            var l = new me(t, r, 0, 0, a, 2, r, !1, i);
                            return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = c || f;
                var we, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Pe = W("transform"),
                    ke = V + "transform",
                    Se = W("transformOrigin"),
                    Re = null !== W("perspective"),
                    Oe = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Re ? a.defaultForce3D || "auto" : !1
                    },
                    Ae = window.SVGElement,
                    Ce = function(t, e, i) {
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    De = E.documentElement,
                    Me = function() {
                        var t, e, i, s = m || /Android/i.test(j) && !window.chrome;
                        return E.createElementNS && !s && (t = Ce("svg", De), e = Ce("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[Pe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Re), De.removeChild(t)), s
                    }(),
                    ze = function(t, e, i, s, r) {
                        var n, o, l, h, _, u, c, f, p, m, d, g, v, y, T = t._gsTransform,
                            x = Ee(t, !0);
                        T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = h * (p / g) + _ * (-f / g) + (f * d - p * m) / g, l = h * (-c / g) + _ * (u / g) - (u * d - c * m) / g, h = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = l), T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = _ - y, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                    },
                    Fe = function(t) {
                        return !!(Ae && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Ie = [1, 0, 0, 1, 0, 0],
                    Ee = function(t, e) {
                        var i, s, r, n, a, o = t._gsTransform || new Oe,
                            l = 1e5;
                        if (Pe ? s = Q(t, ke, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && Fe(t)) && (i && -1 !== (t.style[Pe] + "").indexOf("matrix") && (s = t.style[Pe], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;
                        for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = r.length; --ve > -1;) n = Number(r[ve]), r[ve] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ne = B.getTransform = function(t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var o, l, h, _, u, c, f = s ? t._gsTransform || new Oe : new Oe,
                            p = 0 > f.scaleX,
                            m = 2e-5,
                            d = 1e5,
                            g = Re ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !Fe(t)), f.svg && (ze(t, Q(t, Se, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), we = a.useSVGTransformAttr || Me), o = Ee(t), o !== Ie) {
                            if (16 === o.length) {
                                var y, T, x, w, b, P = o[0],
                                    k = o[1],
                                    S = o[2],
                                    R = o[3],
                                    O = o[4],
                                    A = o[5],
                                    C = o[6],
                                    D = o[7],
                                    M = o[8],
                                    z = o[9],
                                    I = o[10],
                                    E = o[12],
                                    N = o[13],
                                    L = o[14],
                                    X = o[11],
                                    B = Math.atan2(C, I);
                                f.zOrigin && (L = -f.zOrigin, E = M * L - o[12], N = z * L - o[13], L = I * L + f.zOrigin - o[14]), f.rotationX = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + I * b, M = O * -b + M * w, z = A * -b + z * w, I = C * -b + I * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, I), f.rotationY = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - I * b, z = k * b + z * w, I = S * b + I * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + I * I) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = E, f.y = N, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                            } else if (!(Re && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var j = o.length >= 6,
                                    Y = j ? o[0] : 1,
                                    U = o[1] || 0,
                                    q = o[2] || 0,
                                    V = j ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(Y * Y + U * U), _ = Math.sqrt(V * V + q * q), u = Y || U ? Math.atan2(U, Y) * F : f.rotation || 0, c = q || V ? Math.atan2(q, V) * F + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = _, f.rotation = u, f.skewX = c, Re && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V))
                            }
                            f.zOrigin = g;
                            for (l in f) m > f[l] && f[l] > -m && (f[l] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (we && t.style[Pe] ? e.delayedCall(.001, function() {
                            je(t.style, Pe)
                        }) : !we && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Le = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = l, l = -h, h = -i, e = c.filter, u.filter = "";
                            var f, p, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                                w = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * l), b += p - (f * h + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + w) + ", Dy=" + (p - (f * h + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, k, S, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * d)) / 2 + b), ve = 0; 4 > ve; ve++) k = ee[ve], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ve ? -s.ieOffsetX : -s.ieOffsetY : 2 > ve ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ve || 2 === ve ? 1 : R))) + "px"
                            }
                        }
                    },
                    Xe = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, l, h, _, u, c, p, m, d, g, v, y, T, x, w, b, P, k = this.data,
                            S = this.t.style,
                            R = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            C = k.scaleX,
                            D = k.scaleY,
                            M = k.scaleZ,
                            F = k.x,
                            I = k.y,
                            E = k.z,
                            N = k.svg,
                            L = k.perspective,
                            X = k.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || E || L || A || O) || we && N || !Re) return void(R || k.skewX || N ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, we && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), F += .01 * k.xPercent * m.width, I += .01 * k.yPercent * m.height), m = 1e-6, m > F && F > -m && (F = 0), m > I && I > -m && (I = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + F + "," + I + ")", N && we ? this.t.setAttribute("transform", "matrix(" + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + I + ")");
                        if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d;
                        else {
                            if (!(A || O || 1 !== M || L || N)) return void(S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + I + "px," + E + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                            e = n = 1, i = r = 0
                        }
                        h = 1, s = a = o = l = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", R = A * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, h = d, c *= d, e *= d, r *= d), R = O * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, l = h * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, h *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, h *= M, c *= M), 1 !== D && (i *= D, n *= D, l *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || N) && (p && (F += s * -p, I += a * -p, E += h * -p + p), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > F && F > -m && (F = w), m > I && I > -m && (I = w), m > E && E > -m && (E = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > l && l > -m ? w : l) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > h && h > -m ? w : h) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += F + x + I + x + E + x + (L ? 1 + -E / L : 1) + ")", S[Pe] = T
                    };
                h = Oe.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, l) {
                        if (s._lastParsedTransform === l) return n;
                        s._lastParsedTransform = l;
                        var h, _, u, c, f, p, m, d, g, v, y = t._gsTransform,
                            T = t.style,
                            x = 1e-6,
                            w = be.length,
                            b = l,
                            P = {},
                            k = "transformOrigin";
                        if (l.display ? (c = Q(t, "display"), T.display = "block", h = Ne(t, r, !0, l.parseTransform), T.display = c) : h = Ne(t, r, !0, l.parseTransform), s._transform = h, "string" == typeof b.transform && Pe) c = L.style, c[Pe] = b.transform, c.display = "block", c.position = "absolute", E.body.appendChild(L), _ = Ne(L, null, !1), E.body.removeChild(L), _.perspective || (_.perspective = h.perspective), null != b.xPercent && (_.xPercent = ne(b.xPercent, h.xPercent)), null != b.yPercent && (_.yPercent = ne(b.yPercent, h.yPercent));
                        else if ("object" == typeof b) {
                            if (_ = {
                                    scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
                                    scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
                                    scaleZ: ne(b.scaleZ, h.scaleZ),
                                    x: ne(b.x, h.x),
                                    y: ne(b.y, h.y),
                                    z: ne(b.z, h.z),
                                    xPercent: ne(b.xPercent, h.xPercent),
                                    yPercent: ne(b.yPercent, h.yPercent),
                                    perspective: ne(b.transformPerspective, h.perspective)
                                }, d = b.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (c in d) b[c] = d[c];
                                else b.rotation = d;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (_.x = 0, _.xPercent = ne(b.x, h.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (_.y = 0, _.yPercent = ne(b.y, h.yPercent)), _.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P), Re && (_.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P), _.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)), _.skewX = null == b.skewX ? h.skewX : ae(b.skewX, h.skewX), _.skewY = null == b.skewY ? h.skewY : ae(b.skewY, h.skewY), (u = _.skewY - h.skewY) && (_.skewX += u, _.rotation += u)
                        }
                        for (Re && null != b.force3D && (h.force3D = b.force3D, m = !0), h.skewType = b.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || _.z || _.rotationX || _.rotationY || _.perspective, p || null == b.scale || (_.scaleZ = 1); --w > -1;) i = be[w], f = _[i] - h[i], (f > x || -x > f || null != b[i] || null != I[i]) && (m = !0, n = new me(h, i, h[i], f, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return f = b.transformOrigin, h.svg && (f || b.svgOrigin) && (g = h.xOffset, v = h.yOffset, ze(t, se(f), _, b.svgOrigin, b.smoothOrigin), n = de(h, "xOrigin", (y ? h : _).xOrigin, _.xOrigin, n, k), n = de(h, "yOrigin", (y ? h : _).yOrigin, _.yOrigin, n, k), (g !== h.xOffset || v !== h.yOffset) && (n = de(h, "xOffset", y ? g : h.xOffset, h.xOffset, n, k), n = de(h, "yOffset", y ? v : h.yOffset, h.yOffset, n, k)), f = we ? null : "0px 0px"), (f || Re && p && h.zOrigin) && (Pe ? (m = !0, i = Se, f = (f || Q(t, i, r, !1, "50% 50%")) + "", n = new me(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Re ? (c = h.zOrigin, f = f.split(" "), h.zOrigin = (f.length > 2 && (0 === c || "0px" !== f[2]) ? parseFloat(f[2]) : c) || 0, n.xs0 = n.e = f[0] + " " + (f[1] || "50%") + " 0px", n = new me(h, "zOrigin", 0, 0, n, -1, n.n), n.b = c, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = f) : se(f + "", h)), m && (s._transformType = h.svg && we || !p && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), Te("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Te("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, l, h, _, u, c, f, p, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = W(b[l])), u = _ = Q(t, b[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = h = o[l], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, h = parseFloat(_) + p + g)), a = ge(P, b[l], u + " " + _, c + " " + h, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ce("0px 0px 0px 0px", !1, !0)
                }), Te("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h, _, u, c, f = "background-position",
                            p = r || Z(t, null),
                            d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, ""), c && "none" !== c)) {
                            for (o = d.split(" "), l = g.split(" "), X.setAttribute("src", c), h = 2; --h > -1;) d = o[h], _ = -1 !== d.indexOf("%"), _ !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), Te("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), Te("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Te("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Te("transformStyle", {
                    prefix: !0
                }), Te("backfaceVisibility", {
                    prefix: !0
                }), Te("userSelect", {
                    prefix: !0
                }), Te("margin", {
                    parser: fe("marginTop,marginRight,marginBottom,marginLeft")
                }), Te("padding", {
                    parser: fe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Te("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), Te("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Te("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), Te("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
                    }
                }), Te("borderWidth", {
                    parser: fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Te("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new me(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Be = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
                };
                Te("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), Y ? n = new me(l, "opacity", o, e - o, n) : (n = new me(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Be), h && (n = new me(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var je = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ye = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : je(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Te("className", {
                    parser: function(t, e, s, n, a, o, l) {
                        var h, _, u, c, f, p = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new me(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                            for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, _, K(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, h.difs, a, o)
                    }
                });
                var Ue = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), je(a, i);
                        r && (je(a, Pe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (Te("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new me(t, s, 0, 0, n, 2), n.setRatio = Ue, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ve = h.length; ve--;) xe(h[ve]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, f, m, d, g, v, y, T, x, b = t.style;
                    if (u && "" === b.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, h = K(t, r), b.cssText = d + ";" + e, h = J(t, h, K(t)).difs, !Y && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = d), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Pe ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new me(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = Pe ? Xe : Le, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, o, h, u, c, f, p, m, d, g, v = t.style;
                    for (a in e) f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = he(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ge(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (h = H(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + h : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && h && (h = $(t, a, h, p), "%" === m ? (h /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === m || "rem" === m ? h /= $(t, a, 1, m) : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + h + m)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new me(v, a, u || h || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new me(v, a, h, u - h, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = ge(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && we || !t && 3 !== this._transformType ? 2 : 3
                };
                var qe = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new me(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = qe, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Ve = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ve(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ve(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, l = e.to(t, i, s),
                        h = [l],
                        _ = [],
                        u = [],
                        c = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Ve(t, _, c), l.render(i, !0, !0), Ve(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
                        if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            h.push(e.fromTo(c[r], i, o, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[n[a]] = 1;
                    for (a = n.length; --a > -1;)
                        for (t = n[a], i = r._firstPT; i;) s = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
                    return !1
                }, i._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e) {
                        var i;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = n._class,
                    h = function(e, i) {
                        var s = l("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    p = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                        x: i,
                        y: s
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = u; --f > -1;) a = h[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, l = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                m = function(s, r, n, a) {
                    this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(h) {
                        for (var _, u, c, f, d, g = r.length, v = g; --g > -1;)(_ = p[r[g]] || new m(r[g], [])).gsClass ? (o[g] = _.gsClass, v--) : h && _.sc.push(this);
                        if (0 === v && n)
                            for (u = ("com.greensock." + s).split("."), c = u.pop(), f = l(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, d = "undefined" != typeof module && module.exports, !d && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : s === e && d && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = h._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = T.map = {},
                w = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = l[_], r = s ? g("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, l, h = this._listeners[t],
                    _ = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
                h.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                R = S();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, l, h = this,
                    u = S(),
                    f = e !== !1 && P,
                    p = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = S() - R;
                        o > p && (u += o - m), R += o, h.time = (R - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && h.dispatchEvent(d)
                    };
                b.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(t, e) {
                    p = t || 1 / _, m = Math.min(e, p, 0)
                }, h.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), g(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
                }, h.fps(t), setTimeout(function() {
                    f && 5 > h.frame && h.useRAF(!1)
                }, 1500)
            }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
            var O = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                    o || a.wake();
                    var i = this.vars.useFrames ? G : W;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new h.Ticker, n = O.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var A = function() {
                o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (F.length && Q(), this.render(t, e, !1), F.length && Q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = C.prototype = new O, n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (O.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? V[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new O, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.18.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var F = [],
                I = {},
                E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                L = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = [t, e],
                        c = 0,
                        f = "",
                        p = 0;
                    for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(E) || [], n = e.match(E) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; l > o; o++) _ = n[o], h = e.substr(c, e.indexOf(_, c) - c), f += h || !o ? h : ",", c += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || o >= r.length ? f += _ : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), c += _.length;
                    return f += e.substr(c), f && u.push(f), u.setRatio = N, u
                },
                X = function(t, e, i, s, r, n, a, o) {
                    var l, h, _ = "get" === i ? t[e] : i,
                        u = typeof t[e],
                        c = "string" == typeof s && "=" === s.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: _,
                            f: "function" === u,
                            pg: 0,
                            n: r || e,
                            r: n,
                            pr: 0,
                            c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = _ = a ? t[h](a) : t[h]()), "string" == typeof _ && (a || isNaN(_)) ? (f.fp = a, l = L(_, s, o || D.defaultStringFilter, f), f = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : c || (f.c = parseFloat(s) - parseFloat(_) || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                B = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: F,
                    blobDif: L
                },
                j = D._plugins = {},
                Y = B.tweenLookup = {},
                U = 0,
                q = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                G = O._rootFramesTimeline = new C,
                W = O._rootTimeline = new C,
                Z = 30,
                Q = B.lazyRender = function() {
                    var t, e = F.length;
                    for (I = {}; --e > -1;) t = F[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    F.length = 0
                };
            W._startTime = a.time, G._startTime = a.frame, W._active = G._active = !0, setTimeout(Q, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (F.length && Q(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), G.render((a.frame - G._startTime) * G._timeScale, !1, !1), F.length && Q(), a.frame >= Z) {
                    Z = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in Y) {
                        for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i]
                    }
                    if (i = W._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var $ = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = Y[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return Y[n].tweens
                },
                H = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                K = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = r.length, n = 0; l > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, u = e._startTime + _,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !H(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                J = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!n.immediateRender,
                    h = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in n) q[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, n.easeParams) : x[h] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, l, h, _;
                if (null == e) return !1;
                I[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars)
                    if (_ = this.vars[n], q[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (j[n] && (l = new j[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: n,
                            pg: 1,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[n] = X.call(this, e, n, "get", _, n, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, F.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !H(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var te = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = te.prototype
            }, !0);
            if (n = te.prototype, te.version = "1.18.0", te.API = 2, n._firstPT = null, n._addTween = X, n.setRatio = N, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, te.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === te.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            te.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new te(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, te.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in p) p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

function FastClick(layer, options) {
    "use strict";

    function bind(method, context) {
        return function() {
            return method.apply(context, arguments)
        }
    }
    var oldOnClick;
    if (options = options || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = options.touchBoundary || 10, this.layer = layer, this.tapDelay = options.tapDelay || 200, !FastClick.notNeeded(layer)) {
        for (var methods = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], context = this, i = 0, l = methods.length; l > i; i++) context[methods[i]] = bind(context[methods[i]], context);
        deviceIsAndroid && (layer.addEventListener("mouseover", this.onMouse, !0), layer.addEventListener("mousedown", this.onMouse, !0), layer.addEventListener("mouseup", this.onMouse, !0)), layer.addEventListener("click", this.onClick, !0), layer.addEventListener("touchstart", this.onTouchStart, !1), layer.addEventListener("touchmove", this.onTouchMove, !1), layer.addEventListener("touchend", this.onTouchEnd, !1), layer.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (layer.removeEventListener = function(type, callback, capture) {
            var rmv = Node.prototype.removeEventListener;
            "click" === type ? rmv.call(layer, type, callback.hijacked || callback, capture) : rmv.call(layer, type, callback, capture)
        }, layer.addEventListener = function(type, callback, capture) {
            var adv = Node.prototype.addEventListener;
            "click" === type ? adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                event.propagationStopped || callback(event)
            }), capture) : adv.call(layer, type, callback, capture)
        }), "function" == typeof layer.onclick && (oldOnClick = layer.onclick, layer.addEventListener("click", function(event) {
            oldOnClick(event)
        }, !1), layer.onclick = null)
    }
}
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(target) {
    "use strict";
    switch (target.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (target.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === target.type || target.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(target.className)
}, FastClick.prototype.needsFocus = function(target) {
    "use strict";
    switch (target.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (target.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !target.disabled && !target.readOnly;
        default:
            return /\bneedsfocus\b/.test(target.className)
    }
}, FastClick.prototype.sendClick = function(targetElement, event) {
    "use strict";
    var clickEvent, mouseUpEvent, mouseDownEvent, touch;
    document.activeElement && document.activeElement !== targetElement && document.activeElement.blur(), touch = event.changedTouches[0], mouseDownEvent = document.createEvent("MouseEvents"), mouseDownEvent.initMouseEvent("mousedown", !0, !0, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, !1, !1, !1, !1, 0, null), mouseDownEvent.forwardedTouchEvent = !0, targetElement.dispatchEvent(mouseDownEvent), mouseUpEvent = document.createEvent("MouseEvents"), mouseUpEvent.initMouseEvent("mouseup", !0, !0, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, !1, !1, !1, !1, 0, null), mouseUpEvent.forwardedTouchEvent = !0, targetElement.dispatchEvent(mouseUpEvent), clickEvent = document.createEvent("MouseEvents"), clickEvent.initMouseEvent(this.determineEventType(targetElement), !0, !0, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, !1, !1, !1, !1, 0, null), clickEvent.forwardedTouchEvent = !0, targetElement.dispatchEvent(clickEvent)
}, FastClick.prototype.determineEventType = function(targetElement) {
    "use strict";
    return deviceIsAndroid && "select" === targetElement.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(targetElement) {
    "use strict";
    var length;
    deviceIsIOS && targetElement.setSelectionRange && 0 !== targetElement.type.indexOf("date") && "time" !== targetElement.type ? (length = targetElement.value.length, targetElement.setSelectionRange(length, length)) : targetElement.focus()
}, FastClick.prototype.updateScrollParent = function(targetElement) {
    "use strict";
    var scrollParent, parentElement;
    if (scrollParent = targetElement.fastClickScrollParent, !scrollParent || !scrollParent.contains(targetElement)) {
        parentElement = targetElement;
        do {
            if (parentElement.scrollHeight > parentElement.offsetHeight) {
                scrollParent = parentElement, targetElement.fastClickScrollParent = parentElement;
                break
            }
            parentElement = parentElement.parentElement
        } while (parentElement)
    }
    scrollParent && (scrollParent.fastClickLastScrollTop = scrollParent.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
    "use strict";
    return eventTarget.nodeType === Node.TEXT_NODE ? eventTarget.parentNode : eventTarget
}, FastClick.prototype.onTouchStart = function(event) {
    "use strict";
    var targetElement, touch, selection;
    if (event.targetTouches.length > 1) return !0;
    if (targetElement = this.getTargetElementFromEventTarget(event.target), touch = event.targetTouches[0], deviceIsIOS) {
        if (selection = window.getSelection(), selection.rangeCount && !selection.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (touch.identifier && touch.identifier === this.lastTouchIdentifier) return event.preventDefault(), !1;
            this.lastTouchIdentifier = touch.identifier, this.updateScrollParent(targetElement)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = event.timeStamp, this.targetElement = targetElement, this.touchStartX = touch.pageX, this.touchStartY = touch.pageY, event.timeStamp - this.lastClickTime < this.tapDelay && event.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(event) {
    "use strict";
    var touch = event.changedTouches[0],
        boundary = this.touchBoundary;
    return Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary ? !0 : !1
}, FastClick.prototype.onTouchMove = function(event) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(labelElement) {
    "use strict";
    return void 0 !== labelElement.control ? labelElement.control : labelElement.htmlFor ? document.getElementById(labelElement.htmlFor) : labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(event) {
    "use strict";
    var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
    if (!this.trackingClick) return !0;
    if (event.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = event.timeStamp, trackingClickStart = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (touch = event.changedTouches[0], targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement, targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent), targetTagName = targetElement.tagName.toLowerCase(), "label" === targetTagName) {
        if (forElement = this.findControl(targetElement)) {
            if (this.focus(targetElement), deviceIsAndroid) return !1;
            targetElement = forElement
        }
    } else if (this.needsFocus(targetElement)) return event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && "input" === targetTagName ? (this.targetElement = null, !1) : (this.focus(targetElement), this.sendClick(targetElement, event), deviceIsIOS && "select" === targetTagName || (this.targetElement = null, event.preventDefault()), !1);
    return deviceIsIOS && !deviceIsIOS4 && (scrollParent = targetElement.fastClickScrollParent, scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) ? !0 : (this.needsClick(targetElement) || (event.preventDefault(), this.sendClick(targetElement, event)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(event) {
    "use strict";
    return this.targetElement ? event.forwardedTouchEvent ? !0 : event.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (event.stopImmediatePropagation ? event.stopImmediatePropagation() : event.propagationStopped = !0, event.stopPropagation(), event.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(event) {
    "use strict";
    var permitted;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === event.target.type && 0 === event.detail ? !0 : (permitted = this.onMouse(event), permitted || (this.targetElement = null), permitted)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var layer = this.layer;
    deviceIsAndroid && (layer.removeEventListener("mouseover", this.onMouse, !0), layer.removeEventListener("mousedown", this.onMouse, !0), layer.removeEventListener("mouseup", this.onMouse, !0)), layer.removeEventListener("click", this.onClick, !0), layer.removeEventListener("touchstart", this.onTouchStart, !1), layer.removeEventListener("touchmove", this.onTouchMove, !1), layer.removeEventListener("touchend", this.onTouchEnd, !1), layer.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(layer) {
    "use strict";
    var metaViewport, chromeVersion, blackberryVersion;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid) return !0;
        if (metaViewport = document.querySelector("meta[name=viewport]")) {
            if (-1 !== metaViewport.content.indexOf("user-scalable=no")) return !0;
            if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
    }
    if (deviceIsBlackBerry10 && (blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3 && (metaViewport = document.querySelector("meta[name=viewport]")))) {
        if (-1 !== metaViewport.content.indexOf("user-scalable=no")) return !0;
        if (document.documentElement.scrollWidth <= window.outerWidth) return !0
    }
    return "none" === layer.style.msTouchAction ? !0 : !1
}, FastClick.attach = function(layer, options) {
    "use strict";
    return new FastClick(layer, options)
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
! function($) {
    var plugin = {},
        defaults = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "bx-wrapper",
            fullScreenMinusHeader: !1,
            backgroundImageMode: !1,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {},
            onSliderResize: function() {}
        };
    $.fn.bxSlider = function(options) {
        if (0 == this.length) return this;
        if (this.length > 1) return this.each(function() {
            $(this).bxSlider(options)
        }), this;
        var slider = {},
            el = this;
        plugin.el = this;
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            init = function() {
                slider.settings = $.extend({}, defaults, options), slider.settings.slideWidth = parseInt(slider.settings.slideWidth), slider.children = el.children(slider.settings.slideSelector), slider.children.length < slider.settings.minSlides && (slider.settings.minSlides = slider.children.length), slider.children.length < slider.settings.maxSlides && (slider.settings.maxSlides = slider.children.length), slider.settings.randomStart && (slider.settings.startSlide = Math.floor(Math.random() * slider.children.length)), slider.active = {
                    index: slider.settings.startSlide
                }, slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1, slider.carousel && (slider.settings.preloadImages = "all"), slider.minThreshold = slider.settings.minSlides * slider.settings.slideWidth + (slider.settings.minSlides - 1) * slider.settings.slideMargin, slider.maxThreshold = slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin, slider.working = !1, slider.controls = {}, slider.interval = null, slider.animProp = "vertical" == slider.settings.mode ? "top" : "left", slider.usingCSS = slider.settings.useCSS && "fade" != slider.settings.mode && function() {
                    var div = document.createElement("div"),
                        props = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in props)
                        if (void 0 !== div.style[props[i]]) return slider.cssPrefix = props[i].replace("Perspective", "").toLowerCase(), slider.animProp = "-" + slider.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == slider.settings.mode && (slider.settings.maxSlides = slider.settings.minSlides), el.data("origStyle", el.attr("style")), el.children(slider.settings.slideSelector).each(function() {
                    $(this).data("origStyle", $(this).attr("style"))
                }), setup()
            },
            setup = function() {
                el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), slider.viewport = el.parent(), slider.loader = $('<div class="bx-loading" />'), slider.viewport.prepend(slider.loader), el.css({
                    width: "horizontal" == slider.settings.mode ? 100 * slider.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), slider.usingCSS && slider.settings.easing ? "easeInExpo" == slider.settings.easing ? el.css("-" + slider.cssPrefix + "-transition-timing-function", "cubic-bezier(1.000, 0.000, 0.730, 1.000)") : el.css("-" + slider.cssPrefix + "-transition-timing-function", slider.settings.easing) : slider.settings.easing || (slider.settings.easing = "swing");
                getNumberSlidesShowing();
                slider.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), slider.viewport.parent().css({
                    maxWidth: getViewportMaxWidth()
                }), slider.settings.pager || slider.viewport.parent().css({
                    margin: "0 auto 0px"
                }), slider.children.css({
                    "float": "horizontal" == slider.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), slider.children.css("width", getSlideWidth()), "horizontal" == slider.settings.mode && slider.settings.slideMargin > 0 && slider.children.css("marginRight", slider.settings.slideMargin), "vertical" == slider.settings.mode && slider.settings.slideMargin > 0 && slider.children.css("marginBottom", slider.settings.slideMargin), "fade" == slider.settings.mode && (slider.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), slider.children.eq(slider.settings.startSlide).css({
                    zIndex: slider.settings.slideZIndex,
                    display: "block"
                })), slider.controls.el = $('<div class="bx-controls" />'), slider.settings.captions && appendCaptions(), slider.active.last = slider.settings.startSlide == getPagerQty() - 1, slider.settings.video && el.fitVids();
                var preloadSelector = slider.children.eq(slider.settings.startSlide);
                if ("all" == slider.settings.preloadImages && (preloadSelector = slider.children), slider.settings.ticker ? slider.settings.pager = !1 : (slider.settings.pager && appendPager(), slider.settings.controls && appendControls(), slider.settings.auto && slider.settings.autoControls && appendControlsAuto(), (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) && slider.viewport.after(slider.controls.el)), slider.settings.fullScreenMinusHeader) {
                    var windowHeight = $(window).height(),
                        windowWidth = $(window).width(),
                        headerHeight = $(".main-nav").height(),
                        sliderHeight = windowHeight - headerHeight;
                    windowWidth > 1e3 ? slider.children.css("height", sliderHeight) : slider.children.css("height", .575607903 * windowWidth)
                }
                loadElements(preloadSelector, start)
            },
            loadElements = function(selector, callback) {
                if (slider.settings.backgroundImageMode) {
                    var total = slider.children.length,
                        count = 0;
                    slider.children.each(function() {
                        var backgroundImageSrc = $(this).css("background-image").slice(4, -1).replace(/"/g, "");
                        $("<img/>").attr("src", backgroundImageSrc).load(function() {
                            $(this).remove(), ++count == total && setTimeout(function() {
                                callback()
                            }, 500)
                        })
                    })
                } else {
                    var total = selector.find("img, iframe").length;
                    if (0 == total) return void callback();
                    var count = 0;
                    selector.find("img, iframe").each(function() {
                        $(this).one("load", function() {
                            ++count == total && callback()
                        }).each(function() {
                            this.complete && $(this).load()
                        })
                    })
                }
            },
            start = function() {
                if (slider.settings.infiniteLoop && "fade" != slider.settings.mode && !slider.settings.ticker) {
                    var slice = "vertical" == slider.settings.mode ? slider.settings.minSlides : slider.settings.maxSlides,
                        sliceAppend = slider.children.slice(0, slice).clone().addClass("bx-clone"),
                        slicePrepend = slider.children.slice(-slice).clone().addClass("bx-clone");
                    el.append(sliceAppend).prepend(slicePrepend)
                }
                slider.loader.addClass("disappear"), setTimeout(function() {
                    slider.loader.remove()
                }, 1250), setSlidePosition(), "vertical" == slider.settings.mode && (slider.settings.adaptiveHeight = !0), slider.viewport.height(getViewportHeight()), el.redrawSlider(), slider.settings.onSliderLoad(slider.active.index, slider.children.eq(slider.active.index)), slider.initialized = !0, slider.settings.responsive && $(window).bind("resize", resizeWindow), slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage) && initAuto(), slider.settings.ticker && initTicker(), slider.settings.pager && updatePagerActive(slider.settings.startSlide), slider.settings.controls && updateDirectionControls(), slider.settings.touchEnabled && !slider.settings.ticker && initTouch()
            },
            getViewportHeight = function() {
                var height = 0,
                    children = $();
                if ("vertical" == slider.settings.mode || slider.settings.adaptiveHeight)
                    if (slider.carousel) {
                        var currentIndex = 1 == slider.settings.moveSlides ? slider.active.index : slider.active.index * getMoveBy();
                        for (children = slider.children.eq(currentIndex), i = 1; i <= slider.settings.maxSlides - 1; i++) children = currentIndex + i >= slider.children.length ? children.add(slider.children.eq(i - 1)) : children.add(slider.children.eq(currentIndex + i))
                    } else children = slider.children.eq(slider.active.index);
                else children = slider.children;
                return "vertical" == slider.settings.mode ? (children.each(function(index) {
                    height += $(this).outerHeight()
                }), slider.settings.slideMargin > 0 && (height += slider.settings.slideMargin * (slider.settings.minSlides - 1))) : height = Math.max.apply(Math, children.map(function() {
                    return $(this).outerHeight(!1)
                }).get()), "border-box" == slider.viewport.css("box-sizing") ? height += parseFloat(slider.viewport.css("padding-top")) + parseFloat(slider.viewport.css("padding-bottom")) + parseFloat(slider.viewport.css("border-top-width")) + parseFloat(slider.viewport.css("border-bottom-width")) : "padding-box" == slider.viewport.css("box-sizing") && (height += parseFloat(slider.viewport.css("padding-top")) + parseFloat(slider.viewport.css("padding-bottom"))), height
            },
            getViewportMaxWidth = function() {
                var width = "100%";
                return slider.settings.slideWidth > 0 && (width = "horizontal" == slider.settings.mode ? slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin : slider.settings.slideWidth), width
            },
            getSlideWidth = function() {
                var newElWidth = slider.settings.slideWidth,
                    wrapWidth = slider.viewport.width();
                return 0 == slider.settings.slideWidth || slider.settings.slideWidth > wrapWidth && !slider.carousel || "vertical" == slider.settings.mode ? newElWidth = wrapWidth : slider.settings.maxSlides > 1 && "horizontal" == slider.settings.mode && (wrapWidth > slider.maxThreshold || wrapWidth < slider.minThreshold && (newElWidth = (wrapWidth - slider.settings.slideMargin * (slider.settings.minSlides - 1)) / slider.settings.minSlides)), newElWidth
            },
            getNumberSlidesShowing = function() {
                var slidesShowing = 1;
                if ("horizontal" == slider.settings.mode && slider.settings.slideWidth > 0)
                    if (slider.viewport.width() < slider.minThreshold) slidesShowing = slider.settings.minSlides;
                    else if (slider.viewport.width() > slider.maxThreshold) slidesShowing = slider.settings.maxSlides;
                else {
                    var childWidth = slider.children.first().width() + slider.settings.slideMargin;
                    slidesShowing = Math.floor((slider.viewport.width() + slider.settings.slideMargin) / childWidth)
                } else "vertical" == slider.settings.mode && (slidesShowing = slider.settings.minSlides);
                return slidesShowing
            },
            getPagerQty = function() {
                var pagerQty = 0;
                if (slider.settings.moveSlides > 0)
                    if (slider.settings.infiniteLoop) pagerQty = Math.ceil(slider.children.length / getMoveBy());
                    else
                        for (var breakPoint = 0, counter = 0; breakPoint < slider.children.length;) ++pagerQty, breakPoint = counter + getNumberSlidesShowing(), counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                else pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
                return pagerQty
            },
            getMoveBy = function() {
                return slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing()
            },
            setSlidePosition = function() {
                if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
                    if ("horizontal" == slider.settings.mode) {
                        var lastChild = slider.children.last(),
                            position = lastChild.position();
                        setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), "reset", 0)
                    } else if ("vertical" == slider.settings.mode) {
                        var lastShowingIndex = slider.children.length - slider.settings.minSlides,
                            position = slider.children.eq(lastShowingIndex).position();
                        setPositionProperty(-position.top, "reset", 0)
                    }
                } else {
                    var position = slider.children.eq(slider.active.index * getMoveBy()).position();
                    slider.active.index == getPagerQty() - 1 && (slider.active.last = !0), void 0 != position && ("horizontal" == slider.settings.mode ? setPositionProperty(-position.left, "reset", 0) : "vertical" == slider.settings.mode && setPositionProperty(-position.top, "reset", 0))
                }
            },
            setPositionProperty = function(value, type, duration, params) {
                if (slider.usingCSS) {
                    var propValue = "vertical" == slider.settings.mode ? "translate3d(0, " + value + "px, 0)" : "translate3d(" + value + "px, 0, 0)";
                    el.css("-" + slider.cssPrefix + "-transition-duration", duration / 1e3 + "s"), "slide" == type ? (el.css(slider.animProp, propValue), el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), updateAfterSlideTransition()
                    })) : "reset" == type ? el.css(slider.animProp, propValue) : "ticker" == type && (el.css("-" + slider.cssPrefix + "-transition-timing-function", "linear"), el.css(slider.animProp, propValue), el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), setPositionProperty(params.resetValue, "reset", 0), tickerLoop()
                    }))
                } else {
                    var animateObj = {};
                    animateObj[slider.animProp] = value, "slide" == type ? el.animate(animateObj, duration, slider.settings.easing, function() {
                        updateAfterSlideTransition()
                    }) : "reset" == type ? el.css(slider.animProp, value) : "ticker" == type && el.animate(animateObj, speed, "linear", function() {
                        setPositionProperty(params.resetValue, "reset", 0), tickerLoop()
                    })
                }
            },
            populatePager = function() {
                for (var pagerHtml = "", pagerQty = getPagerQty(), i = 0; pagerQty > i; i++) {
                    var linkContent = "";
                    slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? (linkContent = slider.settings.buildPager(i), slider.pagerEl.addClass("bx-custom-pager")) : (linkContent = i + 1, slider.pagerEl.addClass("bx-default-pager")), pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + "</a></div>"
                }
                slider.pagerEl.html(pagerHtml)
            },
            appendPager = function() {
                slider.settings.pagerCustom ? slider.pagerEl = $(slider.settings.pagerCustom) : (slider.pagerEl = $('<div class="bx-pager" />'), slider.settings.pagerSelector ? $(slider.settings.pagerSelector).html(slider.pagerEl) : slider.controls.el.addClass("bx-has-pager").append(slider.pagerEl), populatePager()), slider.pagerEl.on("click", "a", clickPagerBind)
            },
            appendControls = function() {
                slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + "</a>"), slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + "</a>"), slider.controls.next.bind("click", clickNextBind), slider.controls.prev.bind("click", clickPrevBind), slider.settings.nextSelector && $(slider.settings.nextSelector).append(slider.controls.next), slider.settings.prevSelector && $(slider.settings.prevSelector).append(slider.controls.prev), slider.settings.nextSelector || slider.settings.prevSelector || (slider.controls.directionEl = $('<div class="bx-controls-direction" />'), slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next), slider.controls.el.addClass("bx-has-controls-direction").append(slider.controls.directionEl))
            },
            appendControlsAuto = function() {
                slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + "</a></div>"), slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + "</a></div>"), slider.controls.autoEl = $('<div class="bx-controls-auto" />'), slider.controls.autoEl.on("click", ".bx-start", clickStartBind), slider.controls.autoEl.on("click", ".bx-stop", clickStopBind), slider.settings.autoControlsCombine ? slider.controls.autoEl.append(slider.controls.start) : slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop), slider.settings.autoControlsSelector ? $(slider.settings.autoControlsSelector).html(slider.controls.autoEl) : slider.controls.el.addClass("bx-has-controls-auto").append(slider.controls.autoEl), updateAutoControls(slider.settings.autoStart ? "stop" : "start")
            },
            appendCaptions = function() {
                slider.children.each(function(index) {
                    var title = $(this).find("img:first").attr("title");
                    void 0 != title && ("" + title).length && $(this).append('<div class="bx-caption"><span>' + title + "</span></div>")
                })
            },
            clickNextBind = function(e) {
                slider.settings.auto && el.stopAuto(), el.goToNextSlide(), e.preventDefault()
            },
            clickPrevBind = function(e) {
                slider.settings.auto && el.stopAuto(), el.goToPrevSlide(), e.preventDefault()
            },
            clickStartBind = function(e) {
                el.startAuto(), e.preventDefault()
            },
            clickStopBind = function(e) {
                el.stopAuto(), e.preventDefault()
            },
            clickPagerBind = function(e) {
                slider.settings.auto && el.stopAuto();
                var pagerLink = $(e.currentTarget);
                if (void 0 !== pagerLink.attr("data-slide-index")) {
                    var pagerIndex = parseInt(pagerLink.attr("data-slide-index"));
                    pagerIndex != slider.active.index && el.goToSlide(pagerIndex), e.preventDefault()
                }
            },
            updatePagerActive = function(slideIndex) {
                var len = slider.children.length;
                return "short" == slider.settings.pagerType ? (slider.settings.maxSlides > 1 && (len = Math.ceil(slider.children.length / slider.settings.maxSlides)), void slider.pagerEl.html(slideIndex + 1 + slider.settings.pagerShortSeparator + len)) : (slider.pagerEl.find("a").removeClass("active"), void slider.pagerEl.each(function(i, el) {
                    $(el).find("a").eq(slideIndex).addClass("active")
                }))
            },
            updateAfterSlideTransition = function() {
                if (slider.settings.infiniteLoop) {
                    var position = "";
                    0 == slider.active.index ? position = slider.children.eq(0).position() : slider.active.index == getPagerQty() - 1 && slider.carousel ? position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position() : slider.active.index == slider.children.length - 1 && (position = slider.children.eq(slider.children.length - 1).position()), position && ("horizontal" == slider.settings.mode ? setPositionProperty(-position.left, "reset", 0) : "vertical" == slider.settings.mode && setPositionProperty(-position.top, "reset", 0))
                }
                slider.working = !1, slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)
            },
            updateAutoControls = function(state) {
                slider.settings.autoControlsCombine ? slider.controls.autoEl.html(slider.controls[state]) : (slider.controls.autoEl.find("a").removeClass("active"), slider.controls.autoEl.find("a:not(.bx-" + state + ")").addClass("active"))
            },
            updateDirectionControls = function() {
                1 == getPagerQty() ? (slider.controls.prev.addClass("disabled"), slider.controls.next.addClass("disabled")) : !slider.settings.infiniteLoop && slider.settings.hideControlOnEnd && (0 == slider.active.index ? (slider.controls.prev.addClass("disabled"), slider.controls.next.removeClass("disabled")) : slider.active.index == getPagerQty() - 1 ? (slider.controls.next.addClass("disabled"), slider.controls.prev.removeClass("disabled")) : (slider.controls.prev.removeClass("disabled"), slider.controls.next.removeClass("disabled")))
            },
            initAuto = function() {
                if (slider.settings.autoDelay > 0) {
                    setTimeout(el.startAuto, slider.settings.autoDelay)
                } else el.startAuto();
                slider.settings.autoHover && el.hover(function() {
                    slider.interval && (el.stopAuto(!0), slider.autoPaused = !0)
                }, function() {
                    slider.autoPaused && (el.startAuto(!0), slider.autoPaused = null)
                })
            },
            initTicker = function() {
                var startPosition = 0;
                if ("next" == slider.settings.autoDirection) el.append(slider.children.clone().addClass("bx-clone"));
                else {
                    el.prepend(slider.children.clone().addClass("bx-clone"));
                    var position = slider.children.first().position();
                    startPosition = "horizontal" == slider.settings.mode ? -position.left : -position.top
                }
                setPositionProperty(startPosition, "reset", 0), slider.settings.pager = !1, slider.settings.controls = !1, slider.settings.autoControls = !1, slider.settings.tickerHover && !slider.usingCSS && slider.viewport.hover(function() {
                    el.stop()
                }, function() {
                    var totalDimens = 0;
                    slider.children.each(function(index) {
                        totalDimens += "horizontal" == slider.settings.mode ? $(this).outerWidth(!0) : $(this).outerHeight(!0)
                    });
                    var ratio = slider.settings.speed / totalDimens,
                        property = "horizontal" == slider.settings.mode ? "left" : "top",
                        newSpeed = ratio * (totalDimens - Math.abs(parseInt(el.css(property))));
                    tickerLoop(newSpeed)
                }), tickerLoop()
            },
            tickerLoop = function(resumeSpeed) {
                speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
                var position = {
                        left: 0,
                        top: 0
                    },
                    reset = {
                        left: 0,
                        top: 0
                    };
                "next" == slider.settings.autoDirection ? position = el.find(".bx-clone").first().position() : reset = slider.children.first().position();
                var animateProperty = "horizontal" == slider.settings.mode ? -position.left : -position.top,
                    resetValue = "horizontal" == slider.settings.mode ? -reset.left : -reset.top,
                    params = {
                        resetValue: resetValue
                    };
                setPositionProperty(animateProperty, "ticker", speed, params)
            },
            initTouch = function() {
                slider.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, slider.viewport.bind("touchstart", onTouchStart)
            },
            onTouchStart = function(e) {
                if (slider.working) e.preventDefault();
                else {
                    slider.touch.originalPos = el.position();
                    var orig = e.originalEvent;
                    slider.touch.start.x = orig.changedTouches[0].pageX, slider.touch.start.y = orig.changedTouches[0].pageY, slider.viewport.bind("touchmove", onTouchMove), slider.viewport.bind("touchend", onTouchEnd)
                }
            },
            onTouchMove = function(e) {
                var orig = e.originalEvent,
                    xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x),
                    yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
                if (3 * xMovement > yMovement && slider.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * yMovement > xMovement && slider.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != slider.settings.mode && slider.settings.oneToOneTouch) {
                    var value = 0;
                    if ("horizontal" == slider.settings.mode) {
                        var change = orig.changedTouches[0].pageX - slider.touch.start.x;
                        value = slider.touch.originalPos.left + change
                    } else {
                        var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                        value = slider.touch.originalPos.top + change
                    }
                    setPositionProperty(value, "reset", 0)
                }
            },
            onTouchEnd = function(e) {
                slider.viewport.unbind("touchmove", onTouchMove);
                var orig = e.originalEvent,
                    value = 0;
                if (slider.touch.end.x = orig.changedTouches[0].pageX, slider.touch.end.y = orig.changedTouches[0].pageY, "fade" == slider.settings.mode) {
                    var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                    distance >= slider.settings.swipeThreshold && (slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide(), el.stopAuto())
                } else {
                    var distance = 0;
                    "horizontal" == slider.settings.mode ? (distance = slider.touch.end.x - slider.touch.start.x, value = slider.touch.originalPos.left) : (distance = slider.touch.end.y - slider.touch.start.y, value = slider.touch.originalPos.top), !slider.settings.infiniteLoop && (0 == slider.active.index && distance > 0 || slider.active.last && 0 > distance) ? setPositionProperty(value, "reset", 200) : Math.abs(distance) >= slider.settings.swipeThreshold ? (0 > distance ? el.goToNextSlide() : el.goToPrevSlide(), el.stopAuto()) : setPositionProperty(value, "reset", 200)
                }
                slider.viewport.unbind("touchend", onTouchEnd)
            },
            resizeWindow = function(e) {
                if (slider.initialized) {
                    var windowWidthNew = $(window).width(),
                        windowHeightNew = $(window).height();
                    (windowWidth != windowWidthNew || windowHeight != windowHeightNew) && (windowWidth = windowWidthNew, windowHeight = windowHeightNew, el.redrawSlider(), slider.settings.onSliderResize.call(el, slider.active.index))
                }
            };
        return el.goToSlide = function(slideIndex, direction) {
            if (!slider.working && slider.active.index != slideIndex)
                if (slider.working = !0, slider.oldIndex = slider.active.index, 0 > slideIndex ? slider.active.index = getPagerQty() - 1 : slideIndex >= getPagerQty() ? slider.active.index = 0 : slider.active.index = slideIndex, slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index), "next" == direction ? slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index) : "prev" == direction && slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index), slider.active.last = slider.active.index >= getPagerQty() - 1, slider.settings.pager && updatePagerActive(slider.active.index), slider.settings.controls && updateDirectionControls(), "fade" == slider.settings.mode) slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight() && slider.viewport.animate({
                    height: getViewportHeight()
                }, slider.settings.adaptiveHeightSpeed), slider.children.filter(":visible").fadeOut(slider.settings.speed).css({
                    zIndex: 0
                }), slider.children.eq(slider.active.index).css("zIndex", slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
                    $(this).css("zIndex", slider.settings.slideZIndex), updateAfterSlideTransition()
                });
                else {
                    slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight() && slider.viewport.animate({
                        height: getViewportHeight()
                    }, slider.settings.adaptiveHeightSpeed);
                    var moveBy = 0,
                        position = {
                            left: 0,
                            top: 0
                        };
                    if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last)
                        if ("horizontal" == slider.settings.mode) {
                            var lastChild = slider.children.eq(slider.children.length - 1);
                            position = lastChild.position(), moveBy = slider.viewport.width() - lastChild.outerWidth()
                        } else {
                            var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                            position = slider.children.eq(lastShowingIndex).position()
                        } else if (slider.carousel && slider.active.last && "prev" == direction) {
                        var eq = 1 == slider.settings.moveSlides ? slider.settings.maxSlides - getMoveBy() : (getPagerQty() - 1) * getMoveBy() - (slider.children.length - slider.settings.maxSlides),
                            lastChild = el.children(".bx-clone").eq(eq);
                        position = lastChild.position()
                    } else if ("next" == direction && 0 == slider.active.index) position = el.find("> .bx-clone").eq(slider.settings.maxSlides).position(), slider.active.last = !1;
                    else if (slideIndex >= 0) {
                        var requestEl = slideIndex * getMoveBy();
                        position = slider.children.eq(requestEl).position()
                    }
                    if ("undefined" != typeof position) {
                        var value = "horizontal" == slider.settings.mode ? -(position.left - moveBy) : -position.top;
                        setPositionProperty(value, "slide", slider.settings.speed)
                    }
                }
        }, el.goToNextSlide = function() {
            if (slider.settings.infiniteLoop || !slider.active.last) {
                var pagerIndex = parseInt(slider.active.index) + 1;
                el.goToSlide(pagerIndex, "next")
            }
        }, el.goToPrevSlide = function() {
            if (slider.settings.infiniteLoop || 0 != slider.active.index) {
                var pagerIndex = parseInt(slider.active.index) - 1;
                el.goToSlide(pagerIndex, "prev")
            }
        }, el.startAuto = function(preventControlUpdate) {
            slider.interval || (slider.interval = setInterval(function() {
                "next" == slider.settings.autoDirection ? el.goToNextSlide() : el.goToPrevSlide()
            }, slider.settings.pause), slider.settings.autoControls && 1 != preventControlUpdate && updateAutoControls("stop"))
        }, el.stopAuto = function(preventControlUpdate) {
            slider.interval && (clearInterval(slider.interval), slider.interval = null, slider.settings.autoControls && 1 != preventControlUpdate && updateAutoControls("start"))
        }, el.getCurrentSlide = function() {
            return slider.active.index
        }, el.getCurrentSlideElement = function() {
            return slider.children.eq(slider.active.index)
        }, el.getSlideElement = function(index) {
            return slider.children.eq(index)
        }, el.getSlideCount = function() {
            return slider.children.length
        }, el.redrawSlider = function() {
            slider.children.add(el.find(".bx-clone")).width(getSlideWidth()), slider.viewport.css("height", getViewportHeight()), slider.settings.ticker || setSlidePosition(), slider.active.last && (slider.active.index = getPagerQty() - 1), slider.active.index >= getPagerQty() && (slider.active.last = !0), slider.settings.pager && !slider.settings.pagerCustom && (populatePager(), updatePagerActive(slider.active.index))
        }, el.destroySlider = function() {
            slider.initialized && (slider.initialized = !1, $(".bx-clone", this).remove(), slider.children.each(function() {
                void 0 != $(this).data("origStyle") ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr("style")
            }), void 0 != $(this).data("origStyle") ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr("style"), $(this).unwrap().unwrap(), slider.controls.el && slider.controls.el.remove(), slider.controls.next && slider.controls.next.remove(), slider.controls.prev && slider.controls.prev.remove(), slider.pagerEl && slider.settings.controls && slider.pagerEl.remove(), $(".bx-caption", this).remove(), slider.controls.autoEl && slider.controls.autoEl.remove(), clearInterval(slider.interval), slider.settings.responsive && $(window).unbind("resize", resizeWindow))
        }, el.reloadSlider = function(settings) {
            void 0 != settings && (options = settings), el.destroySlider(), init()
        }, init(), this
    }
}(jQuery);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return 0 == t ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        return 0 == t ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b : c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158,
            p = 0,
            a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        if (p || (p = .3 * d), a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158,
            p = 0,
            a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        if (p || (p = .3 * d), a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158,
            p = 0,
            a = c;
        if (0 == t) return b;
        if (2 == (t /= d / 2)) return b + c;
        if (p || (p = d * (.3 * 1.5)), a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), (t /= d / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        return (t /= d) < 1 / 2.75 ? c * (7.5625 * t * t) + b : 2 / 2.75 > t ? c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b : 2.5 / 2.75 > t ? c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b : c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
    },
    easeInOutBounce: function(x, t, b, c, d) {
        return d / 2 > t ? .5 * jQuery.easing.easeInBounce(x, 2 * t, 0, c, d) + b : .5 * jQuery.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + .5 * c + b
    }
});
! function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
}(function(jQuery) {
    var S2 = function() {
            if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var S2 = jQuery.fn.select2.amd;
            var S2;
            return function() {
                if (!S2 || !S2.requirejs) {
                    S2 ? require = S2 : S2 = {};
                    var requirejs, require, define;
                    ! function(undef) {
                        function hasProp(obj, prop) {
                            return hasOwn.call(obj, prop)
                        }

                        function normalize(name, baseName) {
                            var nameParts, nameSegment, mapValue, foundMap, lastIndex, foundI, foundStarMap, starI, i, j, part, baseParts = baseName && baseName.split("/"),
                                map = config.map,
                                starMap = map && map["*"] || {};
                            if (name && "." === name.charAt(0))
                                if (baseName) {
                                    for (baseParts = baseParts.slice(0, baseParts.length - 1), name = name.split("/"), lastIndex = name.length - 1, config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex]) && (name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")), name = baseParts.concat(name), i = 0; i < name.length; i += 1)
                                        if (part = name[i], "." === part) name.splice(i, 1), i -= 1;
                                        else if (".." === part) {
                                        if (1 === i && (".." === name[2] || ".." === name[0])) break;
                                        i > 0 && (name.splice(i - 1, 2), i -= 2)
                                    }
                                    name = name.join("/")
                                } else 0 === name.indexOf("./") && (name = name.substring(2));
                            if ((baseParts || starMap) && map) {
                                for (nameParts = name.split("/"), i = nameParts.length; i > 0; i -= 1) {
                                    if (nameSegment = nameParts.slice(0, i).join("/"), baseParts)
                                        for (j = baseParts.length; j > 0; j -= 1)
                                            if (mapValue = map[baseParts.slice(0, j).join("/")], mapValue && (mapValue = mapValue[nameSegment])) {
                                                foundMap = mapValue, foundI = i;
                                                break
                                            }
                                    if (foundMap) break;
                                    !foundStarMap && starMap && starMap[nameSegment] && (foundStarMap = starMap[nameSegment], starI = i)
                                }!foundMap && foundStarMap && (foundMap = foundStarMap, foundI = starI), foundMap && (nameParts.splice(0, foundI, foundMap), name = nameParts.join("/"))
                            }
                            return name
                        }

                        function makeRequire(relName, forceSync) {
                            return function() {
                                return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]))
                            }
                        }

                        function makeNormalize(relName) {
                            return function(name) {
                                return normalize(name, relName)
                            }
                        }

                        function makeLoad(depName) {
                            return function(value) {
                                defined[depName] = value
                            }
                        }

                        function callDep(name) {
                            if (hasProp(waiting, name)) {
                                var args = waiting[name];
                                delete waiting[name], defining[name] = !0, main.apply(undef, args)
                            }
                            if (!hasProp(defined, name) && !hasProp(defining, name)) throw new Error("No " + name);
                            return defined[name]
                        }

                        function splitPrefix(name) {
                            var prefix, index = name ? name.indexOf("!") : -1;
                            return index > -1 && (prefix = name.substring(0, index), name = name.substring(index + 1, name.length)), [prefix, name]
                        }

                        function makeConfig(name) {
                            return function() {
                                return config && config.config && config.config[name] || {}
                            }
                        }
                        var main, req, makeMap, handlers, defined = {},
                            waiting = {},
                            config = {},
                            defining = {},
                            hasOwn = Object.prototype.hasOwnProperty,
                            aps = [].slice,
                            jsSuffixRegExp = /\.js$/;
                        makeMap = function(name, relName) {
                            var plugin, parts = splitPrefix(name),
                                prefix = parts[0];
                            return name = parts[1], prefix && (prefix = normalize(prefix, relName), plugin = callDep(prefix)), prefix ? name = plugin && plugin.normalize ? plugin.normalize(name, makeNormalize(relName)) : normalize(name, relName) : (name = normalize(name, relName), parts = splitPrefix(name), prefix = parts[0], name = parts[1], prefix && (plugin = callDep(prefix))), {
                                f: prefix ? prefix + "!" + name : name,
                                n: name,
                                pr: prefix,
                                p: plugin
                            }
                        }, handlers = {
                            require: function(name) {
                                return makeRequire(name)
                            },
                            exports: function(name) {
                                var e = defined[name];
                                return "undefined" != typeof e ? e : defined[name] = {}
                            },
                            module: function(name) {
                                return {
                                    id: name,
                                    uri: "",
                                    exports: defined[name],
                                    config: makeConfig(name)
                                }
                            }
                        }, main = function(name, deps, callback, relName) {
                            var cjsModule, depName, ret, map, i, usingExports, args = [],
                                callbackType = typeof callback;
                            if (relName = relName || name, "undefined" === callbackType || "function" === callbackType) {
                                for (deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps, i = 0; i < deps.length; i += 1)
                                    if (map = makeMap(deps[i], relName), depName = map.f, "require" === depName) args[i] = handlers.require(name);
                                    else if ("exports" === depName) args[i] = handlers.exports(name), usingExports = !0;
                                else if ("module" === depName) cjsModule = args[i] = handlers.module(name);
                                else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) args[i] = callDep(depName);
                                else {
                                    if (!map.p) throw new Error(name + " missing " + depName);
                                    map.p.load(map.n, makeRequire(relName, !0), makeLoad(depName), {}), args[i] = defined[depName]
                                }
                                ret = callback ? callback.apply(defined[name], args) : void 0, name && (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name] ? defined[name] = cjsModule.exports : ret === undef && usingExports || (defined[name] = ret))
                            } else name && (defined[name] = callback)
                        }, requirejs = require = req = function(deps, callback, relName, forceSync, alt) {
                            if ("string" == typeof deps) return handlers[deps] ? handlers[deps](callback) : callDep(makeMap(deps, callback).f);
                            if (!deps.splice) {
                                if (config = deps, config.deps && req(config.deps, config.callback), !callback) return;
                                callback.splice ? (deps = callback, callback = relName, relName = null) : deps = undef
                            }
                            return callback = callback || function() {}, "function" == typeof relName && (relName = forceSync, forceSync = alt), forceSync ? main(undef, deps, callback, relName) : setTimeout(function() {
                                main(undef, deps, callback, relName)
                            }, 4), req
                        }, req.config = function(cfg) {
                            return req(cfg)
                        }, requirejs._defined = defined, define = function(name, deps, callback) {
                            deps.splice || (callback = deps, deps = []), hasProp(defined, name) || hasProp(waiting, name) || (waiting[name] = [name, deps, callback])
                        }, define.amd = {
                            jQuery: !0
                        }
                    }(), S2.requirejs = requirejs, S2.require = require, S2.define = define
                }
            }(), S2.define("almond", function() {}), S2.define("jquery", [], function() {
                var _$ = jQuery || $;
                return null == _$ && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), _$
            }), S2.define("select2/utils", ["jquery"], function($) {
                function getMethods(theClass) {
                    var proto = theClass.prototype,
                        methods = [];
                    for (var methodName in proto) {
                        var m = proto[methodName];
                        "function" == typeof m && "constructor" !== methodName && methods.push(methodName)
                    }
                    return methods
                }
                var Utils = {};
                Utils.Extend = function(ChildClass, SuperClass) {
                    function BaseConstructor() {
                        this.constructor = ChildClass
                    }
                    var __hasProp = {}.hasOwnProperty;
                    for (var key in SuperClass) __hasProp.call(SuperClass, key) && (ChildClass[key] = SuperClass[key]);
                    return BaseConstructor.prototype = SuperClass.prototype, ChildClass.prototype = new BaseConstructor, ChildClass.__super__ = SuperClass.prototype, ChildClass
                }, Utils.Decorate = function(SuperClass, DecoratorClass) {
                    function DecoratedClass() {
                        var unshift = Array.prototype.unshift,
                            argCount = DecoratorClass.prototype.constructor.length,
                            calledConstructor = SuperClass.prototype.constructor;
                        argCount > 0 && (unshift.call(arguments, SuperClass.prototype.constructor), calledConstructor = DecoratorClass.prototype.constructor), calledConstructor.apply(this, arguments)
                    }

                    function ctr() {
                        this.constructor = DecoratedClass
                    }
                    var decoratedMethods = getMethods(DecoratorClass),
                        superMethods = getMethods(SuperClass);
                    DecoratorClass.displayName = SuperClass.displayName, DecoratedClass.prototype = new ctr;
                    for (var m = 0; m < superMethods.length; m++) {
                        var superMethod = superMethods[m];
                        DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod]
                    }
                    for (var calledMethod = (function(methodName) {
                            var originalMethod = function() {};
                            methodName in DecoratedClass.prototype && (originalMethod = DecoratedClass.prototype[methodName]);
                            var decoratedMethod = DecoratorClass.prototype[methodName];
                            return function() {
                                var unshift = Array.prototype.unshift;
                                return unshift.call(arguments, originalMethod), decoratedMethod.apply(this, arguments)
                            }
                        }), d = 0; d < decoratedMethods.length; d++) {
                        var decoratedMethod = decoratedMethods[d];
                        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod)
                    }
                    return DecoratedClass
                };
                var Observable = function() {
                    this.listeners = {}
                };
                return Observable.prototype.on = function(event, callback) {
                    this.listeners = this.listeners || {}, event in this.listeners ? this.listeners[event].push(callback) : this.listeners[event] = [callback]
                }, Observable.prototype.trigger = function(event) {
                    var slice = Array.prototype.slice;
                    this.listeners = this.listeners || {}, event in this.listeners && this.invoke(this.listeners[event], slice.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, Observable.prototype.invoke = function(listeners, params) {
                    for (var i = 0, len = listeners.length; len > i; i++) listeners[i].apply(this, params)
                }, Utils.Observable = Observable, Utils.generateChars = function(length) {
                    for (var chars = "", i = 0; length > i; i++) {
                        var randomChar = Math.floor(36 * Math.random());
                        chars += randomChar.toString(36)
                    }
                    return chars
                }, Utils.bind = function(func, context) {
                    return function() {
                        func.apply(context, arguments)
                    }
                }, Utils._convertData = function(data) {
                    for (var originalKey in data) {
                        var keys = originalKey.split("-"),
                            dataLevel = data;
                        if (1 !== keys.length) {
                            for (var k = 0; k < keys.length; k++) {
                                var key = keys[k];
                                key = key.substring(0, 1).toLowerCase() + key.substring(1), key in dataLevel || (dataLevel[key] = {}), k == keys.length - 1 && (dataLevel[key] = data[originalKey]), dataLevel = dataLevel[key]
                            }
                            delete data[originalKey]
                        }
                    }
                    return data
                }, Utils.hasScroll = function(index, el) {
                    var $el = $(el),
                        overflowX = el.style.overflowX,
                        overflowY = el.style.overflowY;
                    return overflowX !== overflowY || "hidden" !== overflowY && "visible" !== overflowY ? "scroll" === overflowX || "scroll" === overflowY ? !0 : $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth : !1
                }, Utils.escapeMarkup = function(markup) {
                    var replaceMap = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof markup ? markup : String(markup).replace(/[&<>"'\/\\]/g, function(match) {
                        return replaceMap[match]
                    })
                }, Utils.appendMany = function($element, $nodes) {
                    if ("1.7" === $.fn.jquery.substr(0, 3)) {
                        var $jqNodes = $();
                        $.map($nodes, function(node) {
                            $jqNodes = $jqNodes.add(node)
                        }), $nodes = $jqNodes
                    }
                    $element.append($nodes)
                }, Utils
            }), S2.define("select2/results", ["jquery", "./utils"], function($, Utils) {
                function Results($element, options, dataAdapter) {
                    this.$element = $element, this.data = dataAdapter, this.options = options, Results.__super__.constructor.call(this)
                }
                return Utils.Extend(Results, Utils.Observable), Results.prototype.render = function() {
                    var $results = $('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && $results.attr("aria-multiselectable", "true"), this.$results = $results, $results
                }, Results.prototype.clear = function() {
                    this.$results.empty()
                }, Results.prototype.displayMessage = function(params) {
                    var escapeMarkup = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var $message = $('<li role="treeitem" class="select2-results__option"></li>'),
                        message = this.options.get("translations").get(params.message);
                    $message.append(escapeMarkup(message(params.args))), this.$results.append($message)
                }, Results.prototype.append = function(data) {
                    this.hideLoading();
                    var $options = [];
                    if (null == data.results || 0 === data.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                    data.results = this.sort(data.results);
                    for (var d = 0; d < data.results.length; d++) {
                        var item = data.results[d],
                            $option = this.option(item);
                        $options.push($option)
                    }
                    this.$results.append($options)
                }, Results.prototype.position = function($results, $dropdown) {
                    var $resultsContainer = $dropdown.find(".select2-results");
                    $resultsContainer.append($results)
                }, Results.prototype.sort = function(data) {
                    var sorter = this.options.get("sorter");
                    return sorter(data)
                }, Results.prototype.setClasses = function() {
                    var self = this;
                    this.data.current(function(selected) {
                        var selectedIds = $.map(selected, function(s) {
                                return s.id.toString()
                            }),
                            $options = self.$results.find(".select2-results__option[aria-selected]");
                        $options.each(function() {
                            var $option = $(this),
                                item = $.data(this, "data"),
                                id = "" + item.id;
                            null != item.element && item.element.selected || null == item.element && $.inArray(id, selectedIds) > -1 ? $option.attr("aria-selected", "true") : $option.attr("aria-selected", "false")
                        });
                        var $selected = $options.filter("[aria-selected=true]");
                        $selected.length > 0 ? $selected.first().trigger("mouseenter") : $options.first().trigger("mouseenter")
                    })
                }, Results.prototype.showLoading = function(params) {
                    this.hideLoading();
                    var loadingMore = this.options.get("translations").get("searching"),
                        loading = {
                            disabled: !0,
                            loading: !0,
                            text: loadingMore(params)
                        },
                        $loading = this.option(loading);
                    $loading.className += " loading-results", this.$results.prepend($loading)
                }, Results.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, Results.prototype.option = function(data) {
                    var option = document.createElement("li");
                    option.className = "select2-results__option";
                    var attrs = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    data.disabled && (delete attrs["aria-selected"], attrs["aria-disabled"] = "true"), null == data.id && delete attrs["aria-selected"], null != data._resultId && (option.id = data._resultId), data.title && (option.title = data.title), data.children && (attrs.role = "group", attrs["aria-label"] = data.text, delete attrs["aria-selected"]);
                    for (var attr in attrs) {
                        var val = attrs[attr];
                        option.setAttribute(attr, val)
                    }
                    if (data.children) {
                        var $option = $(option),
                            label = document.createElement("strong");
                        label.className = "select2-results__group";
                        $(label);
                        this.template(data, label);
                        for (var $children = [], c = 0; c < data.children.length; c++) {
                            var child = data.children[c],
                                $child = this.option(child);
                            $children.push($child)
                        }
                        var $childrenContainer = $("<ul></ul>", {
                            "class": "select2-results__options select2-results__options--nested"
                        });
                        $childrenContainer.append($children), $option.append(label), $option.append($childrenContainer)
                    } else this.template(data, option);
                    return $.data(option, "data", data), option
                }, Results.prototype.bind = function(container, $container) {
                    var self = this,
                        id = container.id + "-results";
                    this.$results.attr("id", id), container.on("results:all", function(params) {
                        self.clear(), self.append(params.data), container.isOpen() && self.setClasses()
                    }), container.on("results:append", function(params) {
                        self.append(params.data), container.isOpen() && self.setClasses()
                    }), container.on("query", function(params) {
                        self.showLoading(params)
                    }), container.on("select", function() {
                        container.isOpen() && self.setClasses()
                    }), container.on("unselect", function() {
                        container.isOpen() && self.setClasses()
                    }), container.on("open", function() {
                        self.$results.attr("aria-expanded", "true"), self.$results.attr("aria-hidden", "false"), self.setClasses(), self.ensureHighlightVisible()
                    }), container.on("close", function() {
                        self.$results.attr("aria-expanded", "false"), self.$results.attr("aria-hidden", "true"), self.$results.removeAttr("aria-activedescendant")
                    }), container.on("results:toggle", function() {
                        var $highlighted = self.getHighlightedResults();
                        0 !== $highlighted.length && $highlighted.trigger("mouseup")
                    }), container.on("results:select", function() {
                        var $highlighted = self.getHighlightedResults();
                        if (0 !== $highlighted.length) {
                            var data = $highlighted.data("data");
                            "true" == $highlighted.attr("aria-selected") ? self.trigger("close", {}) : self.trigger("select", {
                                data: data
                            })
                        }
                    }), container.on("results:previous", function() {
                        var $highlighted = self.getHighlightedResults(),
                            $options = self.$results.find("[aria-selected]"),
                            currentIndex = $options.index($highlighted);
                        if (0 !== currentIndex) {
                            var nextIndex = currentIndex - 1;
                            0 === $highlighted.length && (nextIndex = 0);
                            var $next = $options.eq(nextIndex);
                            $next.trigger("mouseenter");
                            var currentOffset = self.$results.offset().top,
                                nextTop = $next.offset().top,
                                nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
                            0 === nextIndex ? self.$results.scrollTop(0) : 0 > nextTop - currentOffset && self.$results.scrollTop(nextOffset)
                        }
                    }), container.on("results:next", function() {
                        var $highlighted = self.getHighlightedResults(),
                            $options = self.$results.find("[aria-selected]"),
                            currentIndex = $options.index($highlighted),
                            nextIndex = currentIndex + 1;
                        if (!(nextIndex >= $options.length)) {
                            var $next = $options.eq(nextIndex);
                            $next.trigger("mouseenter");
                            var currentOffset = self.$results.offset().top + self.$results.outerHeight(!1),
                                nextBottom = $next.offset().top + $next.outerHeight(!1),
                                nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
                            0 === nextIndex ? self.$results.scrollTop(0) : nextBottom > currentOffset && self.$results.scrollTop(nextOffset)
                        }
                    }), container.on("results:focus", function(params) {
                        params.element.addClass("select2-results__option--highlighted")
                    }), container.on("results:message", function(params) {
                        self.displayMessage(params)
                    }), $.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var top = self.$results.scrollTop(),
                            bottom = self.$results.get(0).scrollHeight - self.$results.scrollTop() + e.deltaY,
                            isAtTop = e.deltaY > 0 && top - e.deltaY <= 0,
                            isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
                        isAtTop ? (self.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : isAtBottom && (self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height()), e.preventDefault(), e.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(evt) {
                        var $this = $(this),
                            data = $this.data("data");
                        return "true" === $this.attr("aria-selected") ? void(self.options.get("multiple") ? self.trigger("unselect", {
                            originalEvent: evt,
                            data: data
                        }) : self.trigger("close", {})) : void self.trigger("select", {
                            originalEvent: evt,
                            data: data
                        })
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(evt) {
                        var data = $(this).data("data");
                        self.getHighlightedResults().removeClass("select2-results__option--highlighted"), self.trigger("results:focus", {
                            data: data,
                            element: $(this)
                        })
                    })
                }, Results.prototype.getHighlightedResults = function() {
                    var $highlighted = this.$results.find(".select2-results__option--highlighted");
                    return $highlighted
                }, Results.prototype.destroy = function() {
                    this.$results.remove()
                }, Results.prototype.ensureHighlightVisible = function() {
                    var $highlighted = this.getHighlightedResults();
                    if (0 !== $highlighted.length) {
                        var $options = this.$results.find("[aria-selected]"),
                            currentIndex = $options.index($highlighted),
                            currentOffset = this.$results.offset().top,
                            nextTop = $highlighted.offset().top,
                            nextOffset = this.$results.scrollTop() + (nextTop - currentOffset),
                            offsetDelta = nextTop - currentOffset;
                        nextOffset -= 2 * $highlighted.outerHeight(!1), 2 >= currentIndex ? this.$results.scrollTop(0) : (offsetDelta > this.$results.outerHeight() || 0 > offsetDelta) && this.$results.scrollTop(nextOffset)
                    }
                }, Results.prototype.template = function(result, container) {
                    var template = this.options.get("templateResult"),
                        escapeMarkup = this.options.get("escapeMarkup"),
                        content = template(result);
                    null == content ? container.style.display = "none" : "string" == typeof content ? container.innerHTML = escapeMarkup(content) : $(container).append(content)
                }, Results
            }), S2.define("select2/keys", [], function() {
                var KEYS = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };
                return KEYS
            }), S2.define("select2/selection/base", ["jquery", "../utils", "../keys"], function($, Utils, KEYS) {
                function BaseSelection($element, options) {
                    this.$element = $element, this.options = options, BaseSelection.__super__.constructor.call(this)
                }
                return Utils.Extend(BaseSelection, Utils.Observable), BaseSelection.prototype.render = function() {
                    var $selection = $('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), $selection.attr("title", this.$element.attr("title")), $selection.attr("tabindex", this._tabindex), this.$selection = $selection, $selection
                }, BaseSelection.prototype.bind = function(container, $container) {
                    var self = this,
                        resultsId = (container.id + "-container", container.id + "-results");
                    this.container = container, this.$selection.on("focus", function(evt) {
                        self.trigger("focus", evt)
                    }), this.$selection.on("blur", function(evt) {
                        self._handleBlur(evt)
                    }), this.$selection.on("keydown", function(evt) {
                        self.trigger("keypress", evt), evt.which === KEYS.SPACE && evt.preventDefault()
                    }), container.on("results:focus", function(params) {
                        self.$selection.attr("aria-activedescendant", params.data._resultId)
                    }), container.on("selection:update", function(params) {
                        self.update(params.data)
                    }), container.on("open", function() {
                        self.$selection.attr("aria-expanded", "true"), self.$selection.attr("aria-owns", resultsId), self._attachCloseHandler(container)
                    }), container.on("close", function() {
                        self.$selection.attr("aria-expanded", "false"), self.$selection.removeAttr("aria-activedescendant"), self.$selection.removeAttr("aria-owns"), self.$selection.focus(), self._detachCloseHandler(container)
                    }), container.on("enable", function() {
                        self.$selection.attr("tabindex", self._tabindex)
                    }), container.on("disable", function() {
                        self.$selection.attr("tabindex", "-1")
                    })
                }, BaseSelection.prototype._handleBlur = function(evt) {
                    var self = this;
                    window.setTimeout(function() {
                        document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement) || self.trigger("blur", evt)
                    }, 1)
                }, BaseSelection.prototype._attachCloseHandler = function(container) {
                    $(document.body).on("mousedown.select2." + container.id, function(e) {
                        var $target = $(e.target),
                            $select = $target.closest(".select2"),
                            $all = $(".select2.select2-container--open");
                        $all.each(function() {
                            var $this = $(this);
                            if (this != $select[0]) {
                                var $element = $this.data("element");
                                $element.select2("close")
                            }
                        })
                    })
                }, BaseSelection.prototype._detachCloseHandler = function(container) {
                    $(document.body).off("mousedown.select2." + container.id)
                }, BaseSelection.prototype.position = function($selection, $container) {
                    var $selectionContainer = $container.find(".selection");
                    $selectionContainer.append($selection)
                }, BaseSelection.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, BaseSelection.prototype.update = function(data) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, BaseSelection
            }), S2.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function($, BaseSelection, Utils, KEYS) {
                function SingleSelection() {
                    SingleSelection.__super__.constructor.apply(this, arguments)
                }
                return Utils.Extend(SingleSelection, BaseSelection), SingleSelection.prototype.render = function() {
                    var $selection = SingleSelection.__super__.render.call(this);
                    return $selection.addClass("select2-selection--single"), $selection.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), $selection
                }, SingleSelection.prototype.bind = function(container, $container) {
                    var self = this;
                    SingleSelection.__super__.bind.apply(this, arguments);
                    var id = container.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", id), this.$selection.attr("aria-labelledby", id), this.$selection.on("mousedown", function(evt) {
                        1 === evt.which && self.trigger("toggle", {
                            originalEvent: evt
                        })
                    }), this.$selection.on("focus", function(evt) {}), this.$selection.on("blur", function(evt) {}), container.on("selection:update", function(params) {
                        self.update(params.data)
                    })
                }, SingleSelection.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, SingleSelection.prototype.display = function(data, container) {
                    var template = this.options.get("templateSelection"),
                        escapeMarkup = this.options.get("escapeMarkup");
                    return escapeMarkup(template(data, container))
                }, SingleSelection.prototype.selectionContainer = function() {
                    return $("<span></span>")
                }, SingleSelection.prototype.update = function(data) {
                    if (0 === data.length) return void this.clear();
                    var selection = data[0],
                        $rendered = this.$selection.find(".select2-selection__rendered"),
                        formatted = this.display(selection, $rendered);
                    $rendered.empty().append(formatted), $rendered.prop("title", selection.title || selection.text)
                }, SingleSelection
            }), S2.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function($, BaseSelection, Utils) {
                function MultipleSelection($element, options) {
                    MultipleSelection.__super__.constructor.apply(this, arguments)
                }
                return Utils.Extend(MultipleSelection, BaseSelection), MultipleSelection.prototype.render = function() {
                    var $selection = MultipleSelection.__super__.render.call(this);
                    return $selection.addClass("select2-selection--multiple"), $selection.html('<ul class="select2-selection__rendered"></ul>'), $selection
                }, MultipleSelection.prototype.bind = function(container, $container) {
                    var self = this;
                    MultipleSelection.__super__.bind.apply(this, arguments), this.$selection.on("click", function(evt) {
                        self.trigger("toggle", {
                            originalEvent: evt
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(evt) {
                        if (!self.options.get("disabled")) {
                            var $remove = $(this),
                                $selection = $remove.parent(),
                                data = $selection.data("data");
                            self.trigger("unselect", {
                                originalEvent: evt,
                                data: data
                            })
                        }
                    })
                }, MultipleSelection.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, MultipleSelection.prototype.display = function(data, container) {
                    var template = this.options.get("templateSelection"),
                        escapeMarkup = this.options.get("escapeMarkup");
                    return escapeMarkup(template(data, container))
                }, MultipleSelection.prototype.selectionContainer = function() {
                    var $container = $('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                    return $container
                }, MultipleSelection.prototype.update = function(data) {
                    if (this.clear(), 0 !== data.length) {
                        for (var $selections = [], d = 0; d < data.length; d++) {
                            var selection = data[d],
                                $selection = this.selectionContainer(),
                                formatted = this.display(selection, $selection);
                            $selection.append(formatted), $selection.prop("title", selection.title || selection.text), $selection.data("data", selection), $selections.push($selection)
                        }
                        var $rendered = this.$selection.find(".select2-selection__rendered");
                        Utils.appendMany($rendered, $selections)
                    }
                }, MultipleSelection
            }), S2.define("select2/selection/placeholder", ["../utils"], function(Utils) {
                function Placeholder(decorated, $element, options) {
                    this.placeholder = this.normalizePlaceholder(options.get("placeholder")), decorated.call(this, $element, options)
                }
                return Placeholder.prototype.normalizePlaceholder = function(_, placeholder) {
                    return "string" == typeof placeholder && (placeholder = {
                        id: "",
                        text: placeholder
                    }), placeholder
                }, Placeholder.prototype.createPlaceholder = function(decorated, placeholder) {
                    var $placeholder = this.selectionContainer();
                    return $placeholder.html(this.display(placeholder)), $placeholder.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), $placeholder
                }, Placeholder.prototype.update = function(decorated, data) {
                    var singlePlaceholder = 1 == data.length && data[0].id != this.placeholder.id,
                        multipleSelections = data.length > 1;
                    if (multipleSelections || singlePlaceholder) return decorated.call(this, data);
                    this.clear();
                    var $placeholder = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append($placeholder)
                }, Placeholder
            }), S2.define("select2/selection/allowClear", ["jquery", "../keys"], function($, KEYS) {
                function AllowClear() {}
                return AllowClear.prototype.bind = function(decorated, container, $container) {
                    var self = this;
                    decorated.call(this, container, $container), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(evt) {
                        self._handleClear(evt)
                    }), container.on("keypress", function(evt) {
                        self._handleKeyboardClear(evt, container)
                    })
                }, AllowClear.prototype._handleClear = function(_, evt) {
                    if (!this.options.get("disabled")) {
                        var $clear = this.$selection.find(".select2-selection__clear");
                        if (0 !== $clear.length) {
                            evt.stopPropagation();
                            for (var data = $clear.data("data"), d = 0; d < data.length; d++) {
                                var unselectData = {
                                    data: data[d]
                                };
                                if (this.trigger("unselect", unselectData), unselectData.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, AllowClear.prototype._handleKeyboardClear = function(_, evt, container) {
                    container.isOpen() || (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) && this._handleClear(evt)
                }, AllowClear.prototype.update = function(decorated, data) {
                    if (decorated.call(this, data), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === data.length)) {
                        var $remove = $('<span class="select2-selection__clear">&times;</span>');
                        $remove.data("data", data), this.$selection.find(".select2-selection__rendered").prepend($remove)
                    }
                }, AllowClear
            }), S2.define("select2/selection/search", ["jquery", "../utils", "../keys"], function($, Utils, KEYS) {
                function Search(decorated, $element, options) {
                    decorated.call(this, $element, options)
                }
                return Search.prototype.render = function(decorated) {
                    var $search = $('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                    this.$searchContainer = $search, this.$search = $search.find("input");
                    var $rendered = decorated.call(this);
                    return this._transferTabIndex(), $rendered
                }, Search.prototype.bind = function(decorated, container, $container) {
                    var self = this;
                    decorated.call(this, container, $container), container.on("open", function() {
                        self.$search.trigger("focus")
                    }), container.on("close", function() {
                        self.$search.val(""), self.$search.trigger("focus")
                    }), container.on("enable", function() {
                        self.$search.prop("disabled", !1), self._transferTabIndex()
                    }), container.on("disable", function() {
                        self.$search.prop("disabled", !0)
                    }), container.on("focus", function(evt) {
                        self.$search.trigger("focus")
                    }), this.$selection.on("focusin", ".select2-search--inline", function(evt) {
                        self.trigger("focus", evt)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(evt) {
                        self._handleBlur(evt)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(evt) {
                        evt.stopPropagation(), self.trigger("keypress", evt), self._keyUpPrevented = evt.isDefaultPrevented();
                        var key = evt.which;
                        if (key === KEYS.BACKSPACE && "" === self.$search.val()) {
                            var $previousChoice = self.$searchContainer.prev(".select2-selection__choice");
                            if ($previousChoice.length > 0) {
                                var item = $previousChoice.data("data");
                                self.searchRemoveChoice(item), evt.preventDefault()
                            }
                        }
                    }), this.$selection.on("input.searchcheck", ".select2-search--inline", function(evt) {
                        var msie = document.documentMode;
                        return msie && 11 >= msie ? void self.$selection.off("input.search input.searchcheck") : void self.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(evt) {
                        var key = evt.which;
                        key != KEYS.SHIFT && key != KEYS.CTRL && key != KEYS.ALT && key != KEYS.TAB && self.handleSearch(evt)
                    })
                }, Search.prototype._transferTabIndex = function(decorated) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, Search.prototype.createPlaceholder = function(decorated, placeholder) {
                    this.$search.attr("placeholder", placeholder.text)
                }, Search.prototype.update = function(decorated, data) {
                    var searchHadFocus = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), decorated.call(this, data), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), searchHadFocus && this.$search.focus()
                }, Search.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var input = this.$search.val();
                        this.trigger("query", {
                            term: input
                        })
                    }
                    this._keyUpPrevented = !1
                }, Search.prototype.searchRemoveChoice = function(decorated, item) {
                    this.trigger("unselect", {
                        data: item
                    }), this.trigger("open", {}), this.$search.val(item.text + " ")
                }, Search.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var width = "";
                    if ("" !== this.$search.attr("placeholder")) width = this.$selection.find(".select2-selection__rendered").innerWidth();
                    else {
                        var minimumWidth = this.$search.val().length + 1;
                        width = .75 * minimumWidth + "em"
                    }
                    this.$search.css("width", width)
                }, Search
            }), S2.define("select2/selection/eventRelay", ["jquery"], function($) {
                function EventRelay() {}
                return EventRelay.prototype.bind = function(decorated, container, $container) {
                    var self = this,
                        relayEvents = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        preventableEvents = ["opening", "closing", "selecting", "unselecting"];
                    decorated.call(this, container, $container), container.on("*", function(name, params) {
                        if (-1 !== $.inArray(name, relayEvents)) {
                            params = params || {};
                            var evt = $.Event("select2:" + name, {
                                params: params
                            });
                            self.$element.trigger(evt), -1 !== $.inArray(name, preventableEvents) && (params.prevented = evt.isDefaultPrevented())
                        }
                    })
                }, EventRelay
            }), S2.define("select2/translation", ["jquery", "require"], function($, require) {
                function Translation(dict) {
                    this.dict = dict || {}
                }
                return Translation.prototype.all = function() {
                    return this.dict;
                }, Translation.prototype.get = function(key) {
                    return this.dict[key]
                }, Translation.prototype.extend = function(translation) {
                    this.dict = $.extend({}, translation.all(), this.dict)
                }, Translation._cache = {}, Translation.loadPath = function(path) {
                    if (!(path in Translation._cache)) {
                        var translations = require(path);
                        Translation._cache[path] = translations
                    }
                    return new Translation(Translation._cache[path])
                }, Translation
            }), S2.define("select2/diacritics", [], function() {
                var diacritics = {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                };
                return diacritics
            }), S2.define("select2/data/base", ["../utils"], function(Utils) {
                function BaseAdapter($element, options) {
                    BaseAdapter.__super__.constructor.call(this)
                }
                return Utils.Extend(BaseAdapter, Utils.Observable), BaseAdapter.prototype.current = function(callback) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, BaseAdapter.prototype.query = function(params, callback) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, BaseAdapter.prototype.bind = function(container, $container) {}, BaseAdapter.prototype.destroy = function() {}, BaseAdapter.prototype.generateResultId = function(container, data) {
                    var id = container.id + "-result-";
                    return id += Utils.generateChars(4), id += null != data.id ? "-" + data.id.toString() : "-" + Utils.generateChars(4)
                }, BaseAdapter
            }), S2.define("select2/data/select", ["./base", "../utils", "jquery"], function(BaseAdapter, Utils, $) {
                function SelectAdapter($element, options) {
                    this.$element = $element, this.options = options, SelectAdapter.__super__.constructor.call(this)
                }
                return Utils.Extend(SelectAdapter, BaseAdapter), SelectAdapter.prototype.current = function(callback) {
                    var data = [],
                        self = this;
                    this.$element.find(":selected").each(function() {
                        var $option = $(this),
                            option = self.item($option);
                        data.push(option)
                    }), callback(data)
                }, SelectAdapter.prototype.select = function(data) {
                    var self = this;
                    if (data.selected = !0, $(data.element).is("option")) return data.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(currentData) {
                        var val = [];
                        data = [data], data.push.apply(data, currentData);
                        for (var d = 0; d < data.length; d++) {
                            var id = data[d].id; - 1 === $.inArray(id, val) && val.push(id)
                        }
                        self.$element.val(val), self.$element.trigger("change")
                    });
                    else {
                        var val = data.id;
                        this.$element.val(val), this.$element.trigger("change")
                    }
                }, SelectAdapter.prototype.unselect = function(data) {
                    var self = this;
                    if (this.$element.prop("multiple")) return data.selected = !1, $(data.element).is("option") ? (data.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(currentData) {
                        for (var val = [], d = 0; d < currentData.length; d++) {
                            var id = currentData[d].id;
                            id !== data.id && -1 === $.inArray(id, val) && val.push(id)
                        }
                        self.$element.val(val), self.$element.trigger("change")
                    })
                }, SelectAdapter.prototype.bind = function(container, $container) {
                    var self = this;
                    this.container = container, container.on("select", function(params) {
                        self.select(params.data)
                    }), container.on("unselect", function(params) {
                        self.unselect(params.data)
                    })
                }, SelectAdapter.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        $.removeData(this, "data")
                    })
                }, SelectAdapter.prototype.query = function(params, callback) {
                    var data = [],
                        self = this,
                        $options = this.$element.children();
                    $options.each(function() {
                        var $option = $(this);
                        if ($option.is("option") || $option.is("optgroup")) {
                            var option = self.item($option),
                                matches = self.matches(params, option);
                            null !== matches && data.push(matches)
                        }
                    }), callback({
                        results: data
                    })
                }, SelectAdapter.prototype.addOptions = function($options) {
                    Utils.appendMany(this.$element, $options)
                }, SelectAdapter.prototype.option = function(data) {
                    var option;
                    data.children ? (option = document.createElement("optgroup"), option.label = data.text) : (option = document.createElement("option"), void 0 !== option.textContent ? option.textContent = data.text : option.innerText = data.text), data.id && (option.value = data.id), data.disabled && (option.disabled = !0), data.selected && (option.selected = !0), data.title && (option.title = data.title);
                    var $option = $(option),
                        normalizedData = this._normalizeItem(data);
                    return normalizedData.element = option, $.data(option, "data", normalizedData), $option
                }, SelectAdapter.prototype.item = function($option) {
                    var data = {};
                    if (data = $.data($option[0], "data"), null != data) return data;
                    if ($option.is("option")) data = {
                        id: $option.val(),
                        text: $option.text(),
                        disabled: $option.prop("disabled"),
                        selected: $option.prop("selected"),
                        title: $option.prop("title")
                    };
                    else if ($option.is("optgroup")) {
                        data = {
                            text: $option.prop("label"),
                            children: [],
                            title: $option.prop("title")
                        };
                        for (var $children = $option.children("option"), children = [], c = 0; c < $children.length; c++) {
                            var $child = $($children[c]),
                                child = this.item($child);
                            children.push(child)
                        }
                        data.children = children
                    }
                    return data = this._normalizeItem(data), data.element = $option[0], $.data($option[0], "data", data), data
                }, SelectAdapter.prototype._normalizeItem = function(item) {
                    $.isPlainObject(item) || (item = {
                        id: item,
                        text: item
                    }), item = $.extend({}, {
                        text: ""
                    }, item);
                    var defaults = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != item.id && (item.id = item.id.toString()), null != item.text && (item.text = item.text.toString()), null == item._resultId && item.id && null != this.container && (item._resultId = this.generateResultId(this.container, item)), $.extend({}, defaults, item)
                }, SelectAdapter.prototype.matches = function(params, data) {
                    var matcher = this.options.get("matcher");
                    return matcher(params, data)
                }, SelectAdapter
            }), S2.define("select2/data/array", ["./select", "../utils", "jquery"], function(SelectAdapter, Utils, $) {
                function ArrayAdapter($element, options) {
                    var data = options.get("data") || [];
                    ArrayAdapter.__super__.constructor.call(this, $element, options), this.addOptions(this.convertToOptions(data))
                }
                return Utils.Extend(ArrayAdapter, SelectAdapter), ArrayAdapter.prototype.select = function(data) {
                    var $option = this.$element.find("option").filter(function(i, elm) {
                        return elm.value == data.id.toString()
                    });
                    0 === $option.length && ($option = this.option(data), this.addOptions($option)), ArrayAdapter.__super__.select.call(this, data)
                }, ArrayAdapter.prototype.convertToOptions = function(data) {
                    function onlyItem(item) {
                        return function() {
                            return $(this).val() == item.id
                        }
                    }
                    for (var self = this, $existing = this.$element.find("option"), existingIds = $existing.map(function() {
                            return self.item($(this)).id
                        }).get(), $options = [], d = 0; d < data.length; d++) {
                        var item = this._normalizeItem(data[d]);
                        if ($.inArray(item.id, existingIds) >= 0) {
                            var $existingOption = $existing.filter(onlyItem(item)),
                                existingData = this.item($existingOption),
                                newData = $.extend(!0, {}, existingData, item),
                                $newOption = this.option(newData);
                            $existingOption.replaceWith($newOption)
                        } else {
                            var $option = this.option(item);
                            if (item.children) {
                                var $children = this.convertToOptions(item.children);
                                Utils.appendMany($option, $children)
                            }
                            $options.push($option)
                        }
                    }
                    return $options
                }, ArrayAdapter
            }), S2.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(ArrayAdapter, Utils, $) {
                function AjaxAdapter($element, options) {
                    this.ajaxOptions = this._applyDefaults(options.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), AjaxAdapter.__super__.constructor.call(this, $element, options)
                }
                return Utils.Extend(AjaxAdapter, ArrayAdapter), AjaxAdapter.prototype._applyDefaults = function(options) {
                    var defaults = {
                        data: function(params) {
                            return {
                                q: params.term
                            }
                        },
                        transport: function(params, success, failure) {
                            var $request = $.ajax(params);
                            return $request.then(success), $request.fail(failure), $request
                        }
                    };
                    return $.extend({}, defaults, options, !0)
                }, AjaxAdapter.prototype.processResults = function(results) {
                    return results
                }, AjaxAdapter.prototype.query = function(params, callback) {
                    function request() {
                        var $request = options.transport(options, function(data) {
                            var results = self.processResults(data, params);
                            self.options.get("debug") && window.console && console.error && (results && results.results && $.isArray(results.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), callback(results)
                        }, function() {});
                        self._request = $request
                    }
                    var self = this;
                    null != this._request && ($.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var options = $.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof options.url && (options.url = options.url(params)), "function" == typeof options.data && (options.data = options.data(params)), this.ajaxOptions.delay && "" !== params.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay)) : request()
                }, AjaxAdapter
            }), S2.define("select2/data/tags", ["jquery"], function($) {
                function Tags(decorated, $element, options) {
                    var tags = options.get("tags"),
                        createTag = options.get("createTag");
                    if (void 0 !== createTag && (this.createTag = createTag), decorated.call(this, $element, options), $.isArray(tags))
                        for (var t = 0; t < tags.length; t++) {
                            var tag = tags[t],
                                item = this._normalizeItem(tag),
                                $option = this.option(item);
                            this.$element.append($option)
                        }
                }
                return Tags.prototype.query = function(decorated, params, callback) {
                    function wrapper(obj, child) {
                        for (var data = obj.results, i = 0; i < data.length; i++) {
                            var option = data[i],
                                checkChildren = null != option.children && !wrapper({
                                    results: option.children
                                }, !0),
                                checkText = option.text === params.term;
                            if (checkText || checkChildren) return child ? !1 : (obj.data = data, void callback(obj))
                        }
                        if (child) return !0;
                        var tag = self.createTag(params);
                        if (null != tag) {
                            var $option = self.option(tag);
                            $option.attr("data-select2-tag", !0), self.addOptions([$option]), self.insertTag(data, tag)
                        }
                        obj.results = data, callback(obj)
                    }
                    var self = this;
                    return this._removeOldTags(), null == params.term || null != params.page ? void decorated.call(this, params, callback) : void decorated.call(this, params, wrapper)
                }, Tags.prototype.createTag = function(decorated, params) {
                    var term = $.trim(params.term);
                    return "" === term ? null : {
                        id: term,
                        text: term
                    }
                }, Tags.prototype.insertTag = function(_, data, tag) {
                    data.unshift(tag)
                }, Tags.prototype._removeOldTags = function(_) {
                    var $options = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                    $options.each(function() {
                        this.selected || $(this).remove()
                    })
                }, Tags
            }), S2.define("select2/data/tokenizer", ["jquery"], function($) {
                function Tokenizer(decorated, $element, options) {
                    var tokenizer = options.get("tokenizer");
                    void 0 !== tokenizer && (this.tokenizer = tokenizer), decorated.call(this, $element, options)
                }
                return Tokenizer.prototype.bind = function(decorated, container, $container) {
                    decorated.call(this, container, $container), this.$search = container.dropdown.$search || container.selection.$search || $container.find(".select2-search__field")
                }, Tokenizer.prototype.query = function(decorated, params, callback) {
                    function select(data) {
                        self.trigger("select", {
                            data: data
                        })
                    }
                    var self = this;
                    params.term = params.term || "";
                    var tokenData = this.tokenizer(params, this.options, select);
                    tokenData.term !== params.term && (this.$search.length && (this.$search.val(tokenData.term), this.$search.focus()), params.term = tokenData.term), decorated.call(this, params, callback)
                }, Tokenizer.prototype.tokenizer = function(_, params, options, callback) {
                    for (var separators = options.get("tokenSeparators") || [], term = params.term, i = 0, createTag = this.createTag || function(params) {
                            return {
                                id: params.term,
                                text: params.term
                            }
                        }; i < term.length;) {
                        var termChar = term[i];
                        if (-1 !== $.inArray(termChar, separators)) {
                            var part = term.substr(0, i),
                                partParams = $.extend({}, params, {
                                    term: part
                                }),
                                data = createTag(partParams);
                            null != data ? (callback(data), term = term.substr(i + 1) || "", i = 0) : i++
                        } else i++
                    }
                    return {
                        term: term
                    }
                }, Tokenizer
            }), S2.define("select2/data/minimumInputLength", [], function() {
                function MinimumInputLength(decorated, $e, options) {
                    this.minimumInputLength = options.get("minimumInputLength"), decorated.call(this, $e, options)
                }
                return MinimumInputLength.prototype.query = function(decorated, params, callback) {
                    return params.term = params.term || "", params.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: params.term,
                            params: params
                        }
                    }) : void decorated.call(this, params, callback)
                }, MinimumInputLength
            }), S2.define("select2/data/maximumInputLength", [], function() {
                function MaximumInputLength(decorated, $e, options) {
                    this.maximumInputLength = options.get("maximumInputLength"), decorated.call(this, $e, options)
                }
                return MaximumInputLength.prototype.query = function(decorated, params, callback) {
                    return params.term = params.term || "", this.maximumInputLength > 0 && params.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: params.term,
                            params: params
                        }
                    }) : void decorated.call(this, params, callback)
                }, MaximumInputLength
            }), S2.define("select2/data/maximumSelectionLength", [], function() {
                function MaximumSelectionLength(decorated, $e, options) {
                    this.maximumSelectionLength = options.get("maximumSelectionLength"), decorated.call(this, $e, options)
                }
                return MaximumSelectionLength.prototype.query = function(decorated, params, callback) {
                    var self = this;
                    this.current(function(currentData) {
                        var count = null != currentData ? currentData.length : 0;
                        return self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength ? void self.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: self.maximumSelectionLength
                            }
                        }) : void decorated.call(self, params, callback)
                    })
                }, MaximumSelectionLength
            }), S2.define("select2/dropdown", ["jquery", "./utils"], function($, Utils) {
                function Dropdown($element, options) {
                    this.$element = $element, this.options = options, Dropdown.__super__.constructor.call(this)
                }
                return Utils.Extend(Dropdown, Utils.Observable), Dropdown.prototype.render = function() {
                    var $dropdown = $('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return $dropdown.attr("dir", this.options.get("dir")), this.$dropdown = $dropdown, $dropdown
                }, Dropdown.prototype.position = function($dropdown, $container) {}, Dropdown.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, Dropdown
            }), S2.define("select2/dropdown/search", ["jquery", "../utils"], function($, Utils) {
                function Search() {}
                return Search.prototype.render = function(decorated) {
                    var $rendered = decorated.call(this),
                        $search = $('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = $search, this.$search = $search.find("input"), $rendered.prepend($search), $rendered
                }, Search.prototype.bind = function(decorated, container, $container) {
                    var self = this;
                    decorated.call(this, container, $container), this.$search.on("keydown", function(evt) {
                        self.trigger("keypress", evt), self._keyUpPrevented = evt.isDefaultPrevented()
                    }), this.$search.on("input", function(evt) {
                        $(this).off("keyup")
                    }), this.$search.on("keyup input", function(evt) {
                        self.handleSearch(evt)
                    }), container.on("open", function() {
                        self.$search.attr("tabindex", 0), self.$search.focus(), window.setTimeout(function() {
                            self.$search.focus()
                        }, 0)
                    }), container.on("close", function() {
                        self.$search.attr("tabindex", -1), self.$search.val("")
                    }), container.on("results:all", function(params) {
                        if (null == params.query.term || "" === params.query.term) {
                            var showSearch = self.showSearch(params);
                            showSearch ? self.$searchContainer.removeClass("select2-search--hide") : self.$searchContainer.addClass("select2-search--hide")
                        }
                    })
                }, Search.prototype.handleSearch = function(evt) {
                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();
                        this.trigger("query", {
                            term: input
                        })
                    }
                    this._keyUpPrevented = !1
                }, Search.prototype.showSearch = function(_, params) {
                    return !0
                }, Search
            }), S2.define("select2/dropdown/hidePlaceholder", [], function() {
                function HidePlaceholder(decorated, $element, options, dataAdapter) {
                    this.placeholder = this.normalizePlaceholder(options.get("placeholder")), decorated.call(this, $element, options, dataAdapter)
                }
                return HidePlaceholder.prototype.append = function(decorated, data) {
                    data.results = this.removePlaceholder(data.results), decorated.call(this, data)
                }, HidePlaceholder.prototype.normalizePlaceholder = function(_, placeholder) {
                    return "string" == typeof placeholder && (placeholder = {
                        id: "",
                        text: placeholder
                    }), placeholder
                }, HidePlaceholder.prototype.removePlaceholder = function(_, data) {
                    for (var modifiedData = data.slice(0), d = data.length - 1; d >= 0; d--) {
                        var item = data[d];
                        this.placeholder.id === item.id && modifiedData.splice(d, 1)
                    }
                    return modifiedData
                }, HidePlaceholder
            }), S2.define("select2/dropdown/infiniteScroll", ["jquery"], function($) {
                function InfiniteScroll(decorated, $element, options, dataAdapter) {
                    this.lastParams = {}, decorated.call(this, $element, options, dataAdapter), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return InfiniteScroll.prototype.append = function(decorated, data) {
                    this.$loadingMore.remove(), this.loading = !1, decorated.call(this, data), this.showLoadingMore(data) && this.$results.append(this.$loadingMore)
                }, InfiniteScroll.prototype.bind = function(decorated, container, $container) {
                    var self = this;
                    decorated.call(this, container, $container), container.on("query", function(params) {
                        self.lastParams = params, self.loading = !0
                    }), container.on("query:append", function(params) {
                        self.lastParams = params, self.loading = !0
                    }), this.$results.on("scroll", function() {
                        var isLoadMoreVisible = $.contains(document.documentElement, self.$loadingMore[0]);
                        if (!self.loading && isLoadMoreVisible) {
                            var currentOffset = self.$results.offset().top + self.$results.outerHeight(!1),
                                loadingMoreOffset = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(!1);
                            currentOffset + 50 >= loadingMoreOffset && self.loadMore()
                        }
                    })
                }, InfiniteScroll.prototype.loadMore = function() {
                    this.loading = !0;
                    var params = $.extend({}, {
                        page: 1
                    }, this.lastParams);
                    params.page++, this.trigger("query:append", params)
                }, InfiniteScroll.prototype.showLoadingMore = function(_, data) {
                    return data.pagination && data.pagination.more
                }, InfiniteScroll.prototype.createLoadingMore = function() {
                    var $option = $('<li class="option load-more" role="treeitem"></li>'),
                        message = this.options.get("translations").get("loadingMore");
                    return $option.html(message(this.lastParams)), $option
                }, InfiniteScroll
            }), S2.define("select2/dropdown/attachBody", ["jquery", "../utils"], function($, Utils) {
                function AttachBody(decorated, $element, options) {
                    this.$dropdownParent = options.get("dropdownParent") || document.body, decorated.call(this, $element, options)
                }
                return AttachBody.prototype.bind = function(decorated, container, $container) {
                    var self = this,
                        setupResultsEvents = !1;
                    decorated.call(this, container, $container), container.on("open", function() {
                        self._showDropdown(), self._attachPositioningHandler(container), setupResultsEvents || (setupResultsEvents = !0, container.on("results:all", function() {
                            self._positionDropdown(), self._resizeDropdown()
                        }), container.on("results:append", function() {
                            self._positionDropdown(), self._resizeDropdown()
                        }))
                    }), container.on("close", function() {
                        self._hideDropdown(), self._detachPositioningHandler(container)
                    }), this.$dropdownContainer.on("mousedown", function(evt) {
                        evt.stopPropagation()
                    })
                }, AttachBody.prototype.destroy = function(decorated) {
                    decorated.call(this), this.$dropdownContainer.remove()
                }, AttachBody.prototype.position = function(decorated, $dropdown, $container) {
                    $dropdown.attr("class", $container.attr("class")), $dropdown.removeClass("select2"), $dropdown.addClass("select2-container--open"), $dropdown.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = $container
                }, AttachBody.prototype.render = function(decorated) {
                    var $container = $("<span></span>"),
                        $dropdown = decorated.call(this);
                    return $container.append($dropdown), this.$dropdownContainer = $container, $container
                }, AttachBody.prototype._hideDropdown = function(decorated) {
                    this.$dropdownContainer.detach()
                }, AttachBody.prototype._attachPositioningHandler = function(container) {
                    var self = this,
                        scrollEvent = "scroll.select2." + container.id,
                        resizeEvent = "resize.select2." + container.id,
                        orientationEvent = "orientationchange.select2." + container.id,
                        $watchers = this.$container.parents().filter(Utils.hasScroll);
                    $watchers.each(function() {
                        $(this).data("select2-scroll-position", {
                            x: $(this).scrollLeft(),
                            y: $(this).scrollTop()
                        })
                    }), $watchers.on(scrollEvent, function(ev) {
                        var position = $(this).data("select2-scroll-position");
                        $(this).scrollTop(position.y)
                    }), $(window).on(scrollEvent + " " + resizeEvent + " " + orientationEvent, function(e) {
                        self._positionDropdown(), self._resizeDropdown()
                    })
                }, AttachBody.prototype._detachPositioningHandler = function(container) {
                    var scrollEvent = "scroll.select2." + container.id,
                        resizeEvent = "resize.select2." + container.id,
                        orientationEvent = "orientationchange.select2." + container.id,
                        $watchers = this.$container.parents().filter(Utils.hasScroll);
                    $watchers.off(scrollEvent), $(window).off(scrollEvent + " " + resizeEvent + " " + orientationEvent)
                }, AttachBody.prototype._positionDropdown = function() {
                    var $window = $(window),
                        isCurrentlyAbove = this.$dropdown.hasClass("select2-dropdown--above"),
                        isCurrentlyBelow = this.$dropdown.hasClass("select2-dropdown--below"),
                        newDirection = null,
                        offset = (this.$container.position(), this.$container.offset());
                    offset.bottom = offset.top + this.$container.outerHeight(!1);
                    var container = {
                        height: this.$container.outerHeight(!1)
                    };
                    container.top = offset.top, container.bottom = offset.top + container.height;
                    var dropdown = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        viewport = {
                            top: $window.scrollTop(),
                            bottom: $window.scrollTop() + $window.height()
                        },
                        enoughRoomAbove = viewport.top < offset.top - dropdown.height,
                        enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height,
                        css = {
                            left: offset.left,
                            top: container.bottom
                        };
                    isCurrentlyAbove || isCurrentlyBelow || (newDirection = "below"), enoughRoomBelow || !enoughRoomAbove || isCurrentlyAbove ? !enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove && (newDirection = "below") : newDirection = "above", ("above" == newDirection || isCurrentlyAbove && "below" !== newDirection) && (css.top = container.top - dropdown.height), null != newDirection && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + newDirection), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + newDirection)), this.$dropdownContainer.css(css)
                }, AttachBody.prototype._resizeDropdown = function() {
                    var css = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (css.minWidth = css.width, css.width = "auto"), this.$dropdown.css(css)
                }, AttachBody.prototype._showDropdown = function(decorated) {
                    this.$dropdownContainer.css("opacity", 0), this.$dropdownContainer.appendTo(this.$dropdownParent), setTimeout(function() {
                        this.$dropdownContainer.css("opacity", 1)
                    }.bind(this), 4), this._positionDropdown(), this._resizeDropdown()
                }, AttachBody
            }), S2.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function countResults(data) {
                    for (var count = 0, d = 0; d < data.length; d++) {
                        var item = data[d];
                        item.children ? count += countResults(item.children) : count++
                    }
                    return count
                }

                function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
                    this.minimumResultsForSearch = options.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), decorated.call(this, $element, options, dataAdapter)
                }
                return MinimumResultsForSearch.prototype.showSearch = function(decorated, params) {
                    return countResults(params.data.results) < this.minimumResultsForSearch ? !1 : decorated.call(this, params)
                }, MinimumResultsForSearch
            }), S2.define("select2/dropdown/selectOnClose", [], function() {
                function SelectOnClose() {}
                return SelectOnClose.prototype.bind = function(decorated, container, $container) {
                    var self = this;
                    decorated.call(this, container, $container), container.on("close", function() {
                        self._handleSelectOnClose()
                    })
                }, SelectOnClose.prototype._handleSelectOnClose = function() {
                    var $highlightedResults = this.getHighlightedResults();
                    $highlightedResults.length < 1 || this.trigger("select", {
                        data: $highlightedResults.data("data")
                    })
                }, SelectOnClose
            }), S2.define("select2/dropdown/closeOnSelect", [], function() {
                function CloseOnSelect() {}
                return CloseOnSelect.prototype.bind = function(decorated, container, $container) {
                    var self = this;
                    decorated.call(this, container, $container), container.on("select", function(evt) {
                        self._selectTriggered(evt)
                    }), container.on("unselect", function(evt) {
                        self._selectTriggered(evt)
                    })
                }, CloseOnSelect.prototype._selectTriggered = function(_, evt) {
                    var originalEvent = evt.originalEvent;
                    originalEvent && originalEvent.ctrlKey || this.trigger("close", {})
                }, CloseOnSelect
            }), S2.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(args) {
                        var overChars = args.input.length - args.maximum,
                            message = "Please delete " + overChars + " character";
                        return 1 != overChars && (message += "s"), message
                    },
                    inputTooShort: function(args) {
                        var remainingChars = args.minimum - args.input.length,
                            message = "Please enter " + remainingChars + " or more characters";
                        return message
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(args) {
                        var message = "You can only select " + args.maximum + " item";
                        return 1 != args.maximum && (message += "s"), message
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    }
                }
            }), S2.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
                function Defaults() {
                    this.reset()
                }
                Defaults.prototype.apply = function(options) {
                    if (options = $.extend({}, this.defaults, options), null == options.dataAdapter) {
                        if (null != options.ajax ? options.dataAdapter = AjaxData : null != options.data ? options.dataAdapter = ArrayData : options.dataAdapter = SelectData, options.minimumInputLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength)), options.maximumInputLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength)), options.maximumSelectionLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength)), options.tags && (options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags)), (null != options.tokenSeparators || null != options.tokenizer) && (options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer)), null != options.query) {
                            var Query = require(options.amdBase + "compat/query");
                            options.dataAdapter = Utils.Decorate(options.dataAdapter, Query)
                        }
                        if (null != options.initSelection) {
                            var InitSelection = require(options.amdBase + "compat/initSelection");
                            options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection)
                        }
                    }
                    if (null == options.resultsAdapter && (options.resultsAdapter = ResultsList, null != options.ajax && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll)), null != options.placeholder && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder)), options.selectOnClose && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose))), null == options.dropdownAdapter) {
                        if (options.multiple) options.dropdownAdapter = Dropdown;
                        else {
                            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
                            options.dropdownAdapter = SearchableDropdown
                        }
                        if (0 !== options.minimumResultsForSearch && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch)), options.closeOnSelect && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect)), null != options.dropdownCssClass || null != options.dropdownCss || null != options.adaptDropdownCssClass) {
                            var DropdownCSS = require(options.amdBase + "compat/dropdownCss");
                            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS)
                        }
                        options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody)
                    }
                    if (null == options.selectionAdapter) {
                        if (options.multiple ? options.selectionAdapter = MultipleSelection : options.selectionAdapter = SingleSelection, null != options.placeholder && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder)), options.allowClear && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear)), options.multiple && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch)), null != options.containerCssClass || null != options.containerCss || null != options.adaptContainerCssClass) {
                            var ContainerCSS = require(options.amdBase + "compat/containerCss");
                            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS)
                        }
                        options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay)
                    }
                    if ("string" == typeof options.language)
                        if (options.language.indexOf("-") > 0) {
                            var languageParts = options.language.split("-"),
                                baseLanguage = languageParts[0];
                            options.language = [options.language, baseLanguage]
                        } else options.language = [options.language];
                    if ($.isArray(options.language)) {
                        var languages = new Translation;
                        options.language.push("en");
                        for (var languageNames = options.language, l = 0; l < languageNames.length; l++) {
                            var name = languageNames[l],
                                language = {};
                            try {
                                language = Translation.loadPath(name)
                            } catch (e) {
                                try {
                                    name = this.defaults.amdLanguageBase + name, language = Translation.loadPath(name)
                                } catch (ex) {
                                    options.debug && window.console && console.warn && console.warn('Select2: The language file for "' + name + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            languages.extend(language)
                        }
                        options.translations = languages
                    } else {
                        var baseTranslation = Translation.loadPath(this.defaults.amdLanguageBase + "en"),
                            customTranslation = new Translation(options.language);
                        customTranslation.extend(baseTranslation), options.translations = customTranslation
                    }
                    return options
                }, Defaults.prototype.reset = function() {
                    function stripDiacritics(text) {
                        function match(a) {
                            return DIACRITICS[a] || a
                        }
                        return text.replace(/[^\u0000-\u007E]/g, match)
                    }

                    function matcher(params, data) {
                        if ("" === $.trim(params.term)) return data;
                        if (data.children && data.children.length > 0) {
                            for (var match = $.extend(!0, {}, data), c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c],
                                    matches = matcher(params, child);
                                null == matches && match.children.splice(c, 1)
                            }
                            return match.children.length > 0 ? match : matcher(params, match)
                        }
                        var original = stripDiacritics(data.text).toUpperCase(),
                            term = stripDiacritics(params.term).toUpperCase();
                        return original.indexOf(term) > -1 ? data : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: Utils.escapeMarkup,
                        language: EnglishTranslation,
                        matcher: matcher,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(data) {
                            return data
                        },
                        templateResult: function(result) {
                            return result.text
                        },
                        templateSelection: function(selection) {
                            return selection.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, Defaults.prototype.set = function(key, value) {
                    var camelKey = $.camelCase(key),
                        data = {};
                    data[camelKey] = value;
                    var convertedData = Utils._convertData(data);
                    $.extend(this.defaults, convertedData)
                };
                var defaults = new Defaults;
                return defaults
            }), S2.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(require, $, Defaults, Utils) {
                function Options(options, $element) {
                    if (this.options = options, null != $element && this.fromElement($element), this.options = Defaults.apply(this.options), $element && $element.is("input")) {
                        var InputCompat = require(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat)
                    }
                }
                return Options.prototype.fromElement = function($e) {
                    var excludedData = ["select2"];
                    null == this.options.multiple && (this.options.multiple = $e.prop("multiple")), null == this.options.disabled && (this.options.disabled = $e.prop("disabled")), null == this.options.language && ($e.prop("lang") ? this.options.language = $e.prop("lang").toLowerCase() : $e.closest("[lang]").prop("lang") && (this.options.language = $e.closest("[lang]").prop("lang"))), null == this.options.dir && ($e.prop("dir") ? this.options.dir = $e.prop("dir") : $e.closest("[dir]").prop("dir") ? this.options.dir = $e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), $e.prop("disabled", this.options.disabled), $e.prop("multiple", this.options.multiple), $e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), $e.data("data", $e.data("select2Tags")), $e.data("tags", !0)), $e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), $e.attr("ajax--url", $e.data("ajaxUrl")), $e.data("ajax--url", $e.data("ajaxUrl")));
                    var dataset = {};
                    dataset = $.fn.jquery && "1." == $.fn.jquery.substr(0, 2) && $e[0].dataset ? $.extend(!0, {}, $e[0].dataset, $e.data()) : $e.data();
                    var data = $.extend(!0, {}, dataset);
                    data = Utils._convertData(data);
                    for (var key in data) $.inArray(key, excludedData) > -1 || ($.isPlainObject(this.options[key]) ? $.extend(this.options[key], data[key]) : this.options[key] = data[key]);
                    return this
                }, Options.prototype.get = function(key) {
                    return this.options[key]
                }, Options.prototype.set = function(key, val) {
                    this.options[key] = val
                }, Options
            }), S2.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function($, Options, Utils, KEYS) {
                var Select2 = function($element, options) {
                    null != $element.data("select2") && $element.data("select2").destroy(), this.$element = $element, this.id = this._generateId($element), options = options || {}, this.options = new Options(options, $element), Select2.__super__.constructor.call(this);
                    var tabindex = $element.attr("tabindex") || 0;
                    $element.data("old-tabindex", tabindex), $element.attr("tabindex", "-1");
                    var DataAdapter = this.options.get("dataAdapter");
                    this.dataAdapter = new DataAdapter($element, this.options);
                    var $container = this.render();
                    this._placeContainer($container);
                    var SelectionAdapter = this.options.get("selectionAdapter");
                    this.selection = new SelectionAdapter($element, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, $container);
                    var DropdownAdapter = this.options.get("dropdownAdapter");
                    this.dropdown = new DropdownAdapter($element, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, $container);
                    var ResultsAdapter = this.options.get("resultsAdapter");
                    this.results = new ResultsAdapter($element, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var self = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(initialData) {
                        self.trigger("selection:update", {
                            data: initialData
                        })
                    }), $element.addClass("select2-hidden-accessible"), $element.attr("aria-hidden", "true"), this._syncAttributes(), $element.data("select2", this)
                };
                return Utils.Extend(Select2, Utils.Observable), Select2.prototype._generateId = function($element) {
                    var id = "";
                    return id = null != $element.attr("id") ? $element.attr("id") : null != $element.attr("name") ? $element.attr("name") + "-" + Utils.generateChars(2) : Utils.generateChars(4), id = "select2-" + id
                }, Select2.prototype._placeContainer = function($container) {
                    $container.insertAfter(this.$element);
                    var width = this._resolveWidth(this.$element, this.options.get("width"));
                    null != width && $container.css("width", width)
                }, Select2.prototype._resolveWidth = function($element, method) {
                    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == method) {
                        var styleWidth = this._resolveWidth($element, "style");
                        return null != styleWidth ? styleWidth : this._resolveWidth($element, "element")
                    }
                    if ("element" == method) {
                        var elementWidth = $element.outerWidth(!1);
                        return 0 >= elementWidth ? "auto" : elementWidth + "px"
                    }
                    if ("style" == method) {
                        var style = $element.attr("style");
                        if ("string" != typeof style) return null;
                        for (var attrs = style.split(";"), i = 0, l = attrs.length; l > i; i += 1) {
                            var attr = attrs[i].replace(/\s/g, ""),
                                matches = attr.match(WIDTH);
                            if (null !== matches && matches.length >= 1) return matches[1]
                        }
                        return null
                    }
                    return method
                }, Select2.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, Select2.prototype._registerDomEvents = function() {
                    var self = this;
                    this.$element.on("change.select2", function() {
                        self.dataAdapter.current(function(data) {
                            self.trigger("selection:update", {
                                data: data
                            })
                        })
                    }), this._sync = Utils.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                    var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != observer ? (this._observer = new observer(function(mutations) {
                        $.each(mutations, self._sync)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", self._sync, !1)
                }, Select2.prototype._registerDataEvents = function() {
                    var self = this;
                    this.dataAdapter.on("*", function(name, params) {
                        self.trigger(name, params)
                    })
                }, Select2.prototype._registerSelectionEvents = function() {
                    var self = this,
                        nonRelayEvents = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        self.toggleDropdown()
                    }), this.selection.on("focus", function(params) {
                        self.focus(params)
                    }), this.selection.on("*", function(name, params) {
                        -1 === $.inArray(name, nonRelayEvents) && self.trigger(name, params)
                    })
                }, Select2.prototype._registerDropdownEvents = function() {
                    var self = this;
                    this.dropdown.on("*", function(name, params) {
                        self.trigger(name, params)
                    })
                }, Select2.prototype._registerResultsEvents = function() {
                    var self = this;
                    this.results.on("*", function(name, params) {
                        self.trigger(name, params)
                    })
                }, Select2.prototype._registerEvents = function() {
                    var self = this;
                    this.on("open", function() {
                        self.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        self.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        self.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        self.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        self.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(params) {
                        self.isOpen() || self.trigger("open", {}), this.dataAdapter.query(params, function(data) {
                            self.trigger("results:all", {
                                data: data,
                                query: params
                            })
                        })
                    }), this.on("query:append", function(params) {
                        this.dataAdapter.query(params, function(data) {
                            self.trigger("results:append", {
                                data: data,
                                query: params
                            })
                        })
                    }), this.on("keypress", function(evt) {
                        var key = evt.which;
                        self.isOpen() ? key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey ? (self.close(), evt.preventDefault()) : key === KEYS.ENTER ? (self.trigger("results:select", {}), evt.preventDefault()) : key === KEYS.SPACE && evt.ctrlKey ? (self.trigger("results:toggle", {}), evt.preventDefault()) : key === KEYS.UP ? (self.trigger("results:previous", {}), evt.preventDefault()) : key === KEYS.DOWN && (self.trigger("results:next", {}), evt.preventDefault()) : (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) && (self.open(), evt.preventDefault())
                    })
                }, Select2.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, Select2.prototype.trigger = function(name, args) {
                    var actualTrigger = Select2.__super__.trigger,
                        preTriggerMap = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (name in preTriggerMap) {
                        var preTriggerName = preTriggerMap[name],
                            preTriggerArgs = {
                                prevented: !1,
                                name: name,
                                args: args
                            };
                        if (actualTrigger.call(this, preTriggerName, preTriggerArgs), preTriggerArgs.prevented) return void(args.prevented = !0)
                    }
                    actualTrigger.call(this, name, args)
                }, Select2.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, Select2.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, Select2.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, Select2.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, Select2.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, Select2.prototype.focus = function(data) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, Select2.prototype.enable = function(args) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == args || 0 === args.length) && (args = [!0]);
                    var disabled = !args[0];
                    this.$element.prop("disabled", disabled)
                }, Select2.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var data = [];
                    return this.dataAdapter.current(function(currentData) {
                        data = currentData
                    }), data
                }, Select2.prototype.val = function(args) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == args || 0 === args.length) return this.$element.val();
                    var newVal = args[0];
                    $.isArray(newVal) && (newVal = $.map(newVal, function(obj) {
                        return obj.toString()
                    })), this.$element.val(newVal).trigger("change")
                }, Select2.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, Select2.prototype.render = function() {
                    var $container = $('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return $container.attr("dir", this.options.get("dir")), this.$container = $container, this.$container.addClass("select2-container--" + this.options.get("theme")), $container.data("element", this.$element), $container
                }, Select2
            }), S2.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function($, require, Select2, Defaults) {
                if (require("jquery.mousewheel"), null == $.fn.select2) {
                    var thisMethods = ["open", "close", "destroy"];
                    $.fn.select2 = function(options) {
                        if (options = options || {}, "object" == typeof options) return this.each(function() {
                            var instanceOptions = $.extend({}, options, !0);
                            new Select2($(this), instanceOptions)
                        }), this;
                        if ("string" == typeof options) {
                            var instance = this.data("select2");
                            null == instance && window.console && console.error && console.error("The select2('" + options + "') method was called on an element that is not using Select2.");
                            var args = Array.prototype.slice.call(arguments, 1),
                                ret = instance[options](args);
                            return $.inArray(options, thisMethods) > -1 ? this : ret
                        }
                        throw new Error("Invalid arguments for Select2: " + options)
                    }
                }
                return null == $.fn.select2.defaults && ($.fn.select2.defaults = Defaults), Select2
            }), S2.define("jquery.mousewheel", ["jquery"], function($) {
                return $
            }), {
                define: S2.define,
                require: S2.require
            }
        }(),
        select2 = S2.require("jquery.select2");
    return jQuery.fn.select2.amd = S2, select2
});