

! function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t(require("aws-sdk/global"), require("aws-sdk/clients/cognitoidentityserviceprovider")) : "function" == typeof define && define.amd ? define(["aws-sdk/global", "aws-sdk/clients/cognitoidentityserviceprovider"], t) : "object" == typeof exports ? exports.AmazonCognitoIdentity = t(require("aws-sdk/global"), require("aws-sdk/clients/cognitoidentityserviceprovider")) : e.AmazonCognitoIdentity = t(e.AWSCognito, e.AWSCognito.CognitoIdentityServiceProvider)
}(this, function (e, t) {
	return function (e) {
		function t(i) {
			if (n[i]) return n[i].exports;
			var s = n[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return e[i].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.p = "", t(0)
	}([function (e, t, n) {
		"use strict";

		function i(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		}

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(15);
		Object.keys(r).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return r[e]
				}
			})
		});
		var o = n(12),
			a = s(o),
			u = i(r);
		Object.keys(u).forEach(function (e) {
			a.default[e] = u[e]
		}), "undefined" != typeof window && !window.crypto && window.msCrypto && (window.crypto = window.msCrypto)
	}, function (t, n) {
		t.exports = e
	}, function (e, t, n) {
		"use strict";

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			o = n(1),
			a = n(3),
			u = i(a),
			l = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
			c = "userAttributes.",
			h = function () {
				function e(t) {
					s(this, e), this.N = new u.default(l, 16), this.g = new u.default("2", 16), this.k = new u.default(this.hexHash("00" + this.N.toString(16) + "0" + this.g.toString(16)), 16), this.smallAValue = this.generateRandomSmallA(), this.largeAValue = this.calculateA(this.smallAValue), this.infoBits = new o.util.Buffer("Caldera Derived Key", "utf8"), this.poolName = t
				}
				return r(e, [{
					key: "getSmallAValue",
					value: function () {
						return this.smallAValue
					}
				}, {
					key: "getLargeAValue",
					value: function () {
						return this.largeAValue
					}
				}, {
					key: "generateRandomSmallA",
					value: function () {
						var e = o.util.crypto.lib.randomBytes(128).toString("hex"),
							t = new u.default(e, 16),
							n = t.mod(this.N);
						return n
					}
				}, {
					key: "generateRandomString",
					value: function () {
						return o.util.crypto.lib.randomBytes(40).toString("base64")
					}
				}, {
					key: "getRandomPassword",
					value: function () {
						return this.randomPassword
					}
				}, {
					key: "getSaltDevices",
					value: function () {
						return this.SaltToHashDevices
					}
				}, {
					key: "getVerifierDevices",
					value: function () {
						return this.verifierDevices
					}
				}, {
					key: "generateHashDevice",
					value: function (e, t) {
						this.randomPassword = this.generateRandomString();
						var n = "" + e + t + ":" + this.randomPassword,
							i = this.hash(n),
							s = o.util.crypto.lib.randomBytes(16).toString("hex");
						this.SaltToHashDevices = this.padHex(new u.default(s, 16));
						var r = this.g.modPow(new u.default(this.hexHash(this.SaltToHashDevices + i), 16), this.N);
						this.verifierDevices = this.padHex(r)
					}
				}, {
					key: "calculateA",
					value: function (e) {
						var t = this.g.modPow(e, this.N);
						if (t.mod(this.N).equals(u.default.ZERO)) throw new Error("Illegal paramater. A mod N cannot be 0.");
						return t
					}
				}, {
					key: "calculateU",
					value: function (e, t) {
						this.UHexHash = this.hexHash(this.padHex(e) + this.padHex(t));
						var n = new u.default(this.UHexHash, 16);
						return n
					}
				}, {
					key: "hash",
					value: function (e) {
						var t = o.util.crypto.sha256(e, "hex");
						return new Array(64 - t.length).join("0") + t
					}
				}, {
					key: "hexHash",
					value: function (e) {
						return this.hash(new o.util.Buffer(e, "hex"))
					}
				}, {
					key: "computehkdf",
					value: function (e, t) {
						var n = o.util.crypto.hmac(t, e, "buffer", "sha256"),
							i = o.util.buffer.concat([this.infoBits, new o.util.Buffer(String.fromCharCode(1), "utf8")]),
							s = o.util.crypto.hmac(n, i, "buffer", "sha256");
						return s.slice(0, 16)
					}
				}, {
					key: "getPasswordAuthenticationKey",
					value: function (e, t, n, i) {
						if (n.mod(this.N).equals(u.default.ZERO)) throw new Error("B cannot be zero.");
						if (this.UValue = this.calculateU(this.largeAValue, n), this.UValue.equals(u.default.ZERO)) throw new Error("U cannot be zero.");
						var s = "" + this.poolName + e + ":" + t,
							r = this.hash(s),
							a = new u.default(this.hexHash(this.padHex(i) + r), 16),
							l = this.g.modPow(a, this.N),
							c = n.subtract(this.k.multiply(l)),
							h = c.modPow(this.smallAValue.add(this.UValue.multiply(a)), this.N).mod(this.N),
							f = this.computehkdf(new o.util.Buffer(this.padHex(h), "hex"), new o.util.Buffer(this.padHex(this.UValue.toString(16)), "hex"));
						return f
					}
				}, {
					key: "getNewPasswordRequiredChallengeUserAttributePrefix",
					value: function () {
						return c
					}
				}, {
					key: "padHex",
					value: function (e) {
						var t = e.toString(16);
						return t.length % 2 === 1 ? t = "0" + t : "89ABCDEFabcdef".indexOf(t[0]) !== -1 && (t = "00" + t), t
					}
				}]), e
			}();
		t.default = h
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			null != e && this.fromString(e, t)
		}

		function i() {
			return new n(null)
		}

		function s(e, t, n, i, s, r) {
			for (; --r >= 0;) {
				var o = t * this[e++] + n[i] + s;
				s = Math.floor(o / 67108864), n[i++] = 67108863 & o
			}
			return s
		}

		function r(e) {
			return J.charAt(e)
		}

		function o(e, t) {
			var n = G[e.charCodeAt(t)];
			return null == n ? -1 : n
		}

		function a(e) {
			for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
			e.t = this.t, e.s = this.s
		}

		function u(e) {
			this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
		}

		function l(e) {
			var t = i();
			return t.fromInt(e), t
		}

		function c(e, t) {
			var i;
			if (16 == t) i = 4;
			else if (8 == t) i = 3;
			else if (2 == t) i = 1;
			else if (32 == t) i = 5;
			else {
				if (4 != t) throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
				i = 2
			}
			this.t = 0, this.s = 0;
			for (var s = e.length, r = !1, a = 0; --s >= 0;) {
				var u = o(e, s);
				u < 0 ? "-" == e.charAt(s) && (r = !0) : (r = !1, 0 == a ? this[this.t++] = u : a + i > this.DB ? (this[this.t - 1] |= (u & (1 << this.DB - a) - 1) << a, this[this.t++] = u >> this.DB - a) : this[this.t - 1] |= u << a, a += i, a >= this.DB && (a -= this.DB))
			}
			this.clamp(), r && n.ZERO.subTo(this, this)
		}

		function h() {
			for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t
		}

		function f(e) {
			if (this.s < 0) return "-" + this.negate().toString();
			var t;
			if (16 == e) t = 4;
			else if (8 == e) t = 3;
			else if (2 == e) t = 1;
			else if (32 == e) t = 5;
			else {
				if (4 != e) throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
				t = 2
			}
			var n, i = (1 << t) - 1,
				s = !1,
				o = "",
				a = this.t,
				u = this.DB - a * this.DB % t;
			if (a-- > 0)
				for (u < this.DB && (n = this[a] >> u) > 0 && (s = !0, o = r(n)); a >= 0;) u < t ? (n = (this[a] & (1 << u) - 1) << t - u, n |= this[--a] >> (u += this.DB - t)) : (n = this[a] >> (u -= t) & i, u <= 0 && (u += this.DB, --a)), n > 0 && (s = !0), s && (o += r(n));
			return s ? o : "0"
		}

		function d() {
			var e = i();
			return n.ZERO.subTo(this, e), e
		}

		function v() {
			return this.s < 0 ? this.negate() : this
		}

		function g(e) {
			var t = this.s - e.s;
			if (0 != t) return t;
			var n = this.t;
			if (t = n - e.t, 0 != t) return this.s < 0 ? -t : t;
			for (; --n >= 0;)
				if (0 != (t = this[n] - e[n])) return t;
			return 0
		}

		function m(e) {
			var t, n = 1;
			return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n
		}

		function p() {
			return this.t <= 0 ? 0 : this.DB * (this.t - 1) + m(this[this.t - 1] ^ this.s & this.DM)
		}

		function y(e, t) {
			var n;
			for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
			for (n = e - 1; n >= 0; --n) t[n] = 0;
			t.t = this.t + e, t.s = this.s
		}

		function S(e, t) {
			for (var n = e; n < this.t; ++n) t[n - e] = this[n];
			t.t = Math.max(this.t - e, 0), t.s = this.s
		}

		function C(e, t) {
			var n, i = e % this.DB,
				s = this.DB - i,
				r = (1 << s) - 1,
				o = Math.floor(e / this.DB),
				a = this.s << i & this.DM;
			for (n = this.t - 1; n >= 0; --n) t[n + o + 1] = this[n] >> s | a, a = (this[n] & r) << i;
			for (n = o - 1; n >= 0; --n) t[n] = 0;
			t[o] = a, t.t = this.t + o + 1, t.s = this.s, t.clamp()
		}

		function w(e, t) {
			t.s = this.s;
			var n = Math.floor(e / this.DB);
			if (n >= this.t) return void(t.t = 0);
			var i = e % this.DB,
				s = this.DB - i,
				r = (1 << i) - 1;
			t[0] = this[n] >> i;
			for (var o = n + 1; o < this.t; ++o) t[o - n - 1] |= (this[o] & r) << s, t[o - n] = this[o] >> i;
			i > 0 && (t[this.t - n - 1] |= (this.s & r) << s), t.t = this.t - n, t.clamp()
		}

		function k(e, t) {
			for (var n = 0, i = 0, s = Math.min(e.t, this.t); n < s;) i += this[n] - e[n], t[n++] = i & this.DM, i >>= this.DB;
			if (e.t < this.t) {
				for (i -= e.s; n < this.t;) i += this[n], t[n++] = i & this.DM, i >>= this.DB;
				i += this.s
			} else {
				for (i += this.s; n < e.t;) i -= e[n], t[n++] = i & this.DM, i >>= this.DB;
				i -= e.s
			}
			t.s = i < 0 ? -1 : 0, i < -1 ? t[n++] = this.DV + i : i > 0 && (t[n++] = i), t.t = n, t.clamp()
		}

		function A(e, t) {
			var i = this.abs(),
				s = e.abs(),
				r = i.t;
			for (t.t = r + s.t; --r >= 0;) t[r] = 0;
			for (r = 0; r < s.t; ++r) t[r + i.t] = i.am(0, s[r], t, r, 0, i.t);
			t.s = 0, t.clamp(), this.s != e.s && n.ZERO.subTo(t, t)
		}

		function T(e) {
			for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;) e[n] = 0;
			for (n = 0; n < t.t - 1; ++n) {
				var i = t.am(n, t[n], e, 2 * n, 0, 1);
				(e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, i, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1)
			}
			e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp()
		}

		function U(e, t, s) {
			var r = e.abs();
			if (!(r.t <= 0)) {
				var o = this.abs();
				if (o.t < r.t) return null != t && t.fromInt(0), void(null != s && this.copyTo(s));
				null == s && (s = i());
				var a = i(),
					u = this.s,
					l = e.s,
					c = this.DB - m(r[r.t - 1]);
				c > 0 ? (r.lShiftTo(c, a), o.lShiftTo(c, s)) : (r.copyTo(a), o.copyTo(s));
				var h = a.t,
					f = a[h - 1];
				if (0 != f) {
					var d = f * (1 << this.F1) + (h > 1 ? a[h - 2] >> this.F2 : 0),
						v = this.FV / d,
						g = (1 << this.F1) / d,
						p = 1 << this.F2,
						y = s.t,
						S = y - h,
						C = null == t ? i() : t;
					for (a.dlShiftTo(S, C), s.compareTo(C) >= 0 && (s[s.t++] = 1, s.subTo(C, s)), n.ONE.dlShiftTo(h, C), C.subTo(a, a); a.t < h;) a[a.t++] = 0;
					for (; --S >= 0;) {
						var w = s[--y] == f ? this.DM : Math.floor(s[y] * v + (s[y - 1] + p) * g);
						if ((s[y] += a.am(0, w, s, S, 0, h)) < w)
							for (a.dlShiftTo(S, C), s.subTo(C, s); s[y] < --w;) s.subTo(C, s)
					}
					null != t && (s.drShiftTo(h, t), u != l && n.ZERO.subTo(t, t)), s.t = h, s.clamp(), c > 0 && s.rShiftTo(c, s), u < 0 && n.ZERO.subTo(s, s)
				}
			}
		}

		function E(e) {
			var t = i();
			return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t), t
		}

		function D() {
			if (this.t < 1) return 0;
			var e = this[0];
			if (0 == (1 & e)) return 0;
			var t = 3 & e;
			return t = t * (2 - (15 & e) * t) & 15, t = t * (2 - (255 & e) * t) & 255, t = t * (2 - ((65535 & e) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t
		}

		function I(e) {
			return 0 == this.compareTo(e)
		}

		function b(e, t) {
			for (var n = 0, i = 0, s = Math.min(e.t, this.t); n < s;) i += this[n] + e[n], t[n++] = i & this.DM, i >>= this.DB;
			if (e.t < this.t) {
				for (i += e.s; n < this.t;) i += this[n], t[n++] = i & this.DM, i >>= this.DB;
				i += this.s
			} else {
				for (i += this.s; n < e.t;) i += e[n], t[n++] = i & this.DM, i >>= this.DB;
				i += e.s
			}
			t.s = i < 0 ? -1 : 0, i > 0 ? t[n++] = i : i < -1 && (t[n++] = this.DV + i), t.t = n, t.clamp()
		}

		function P(e) {
			var t = i();
			return this.addTo(e, t), t
		}

		function R(e) {
			var t = i();
			return this.subTo(e, t), t
		}

		function F(e) {
			var t = i();
			return this.multiplyTo(e, t), t
		}

		function _(e) {
			var t = i();
			return this.divRemTo(e, t, null), t
		}

		function B(e) {
			this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
		}

		function O(e) {
			var t = i();
			return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t), t
		}

		function M(e) {
			var t = i();
			return e.copyTo(t), this.reduce(t), t
		}

		function N(e) {
			for (; e.t <= this.mt2;) e[e.t++] = 0;
			for (var t = 0; t < this.m.t; ++t) {
				var n = 32767 & e[t],
					i = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
				for (n = t + this.m.t, e[n] += this.m.am(0, i, e, t, 0, this.m.t); e[n] >= e.DV;) e[n] -= e.DV, e[++n]++
			}
			e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
		}

		function V(e, t) {
			e.squareTo(t), this.reduce(t)
		}

		function K(e, t, n) {
			e.multiplyTo(t, n), this.reduce(n)
		}

		function q(e, t) {
			var n, s = e.bitLength(),
				r = l(1),
				o = new B(t);
			if (s <= 0) return r;
			n = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6;
			var a = new Array,
				u = 3,
				c = n - 1,
				h = (1 << n) - 1;
			if (a[1] = o.convert(this), n > 1) {
				var f = i();
				for (o.sqrTo(a[1], f); u <= h;) a[u] = i(), o.mulTo(f, a[u - 2], a[u]), u += 2
			}
			var d, v, g = e.t - 1,
				p = !0,
				y = i();
			for (s = m(e[g]) - 1; g >= 0;) {
				for (s >= c ? d = e[g] >> s - c & h : (d = (e[g] & (1 << s + 1) - 1) << c - s, g > 0 && (d |= e[g - 1] >> this.DB + s - c)), u = n; 0 == (1 & d);) d >>= 1, --u;
				if ((s -= u) < 0 && (s += this.DB, --g), p) a[d].copyTo(r), p = !1;
				else {
					for (; u > 1;) o.sqrTo(r, y), o.sqrTo(y, r), u -= 2;
					u > 0 ? o.sqrTo(r, y) : (v = r, r = y, y = v), o.mulTo(y, a[d], r)
				}
				for (; g >= 0 && 0 == (e[g] & 1 << s);) o.sqrTo(r, y), v = r, r = y, y = v, --s < 0 && (s = this.DB - 1, --g)
			}
			return o.revert(r)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = n, n.prototype.am = s;
		var j = 26;
		n.prototype.DB = j, n.prototype.DM = (1 << j) - 1, n.prototype.DV = 1 << j;
		var x = 52;
		n.prototype.FV = Math.pow(2, x), n.prototype.F1 = x - j, n.prototype.F2 = 2 * j - x;
		var H, L, J = "0123456789abcdefghijklmnopqrstuvwxyz",
			G = new Array;
		for (H = "0".charCodeAt(0), L = 0; L <= 9; ++L) G[H++] = L;
		for (H = "a".charCodeAt(0), L = 10; L < 36; ++L) G[H++] = L;
		for (H = "A".charCodeAt(0), L = 10; L < 36; ++L) G[H++] = L;
		B.prototype.convert = O, B.prototype.revert = M, B.prototype.reduce = N, B.prototype.mulTo = K, B.prototype.sqrTo = V, n.prototype.copyTo = a, n.prototype.fromInt = u, n.prototype.fromString = c, n.prototype.clamp = h, n.prototype.dlShiftTo = y, n.prototype.drShiftTo = S, n.prototype.lShiftTo = C, n.prototype.rShiftTo = w, n.prototype.subTo = k, n.prototype.multiplyTo = A, n.prototype.squareTo = T, n.prototype.divRemTo = U, n.prototype.invDigit = D, n.prototype.addTo = b, n.prototype.toString = f, n.prototype.negate = d, n.prototype.abs = v, n.prototype.compareTo = g, n.prototype.bitLength = p, n.prototype.mod = E, n.prototype.equals = I, n.prototype.add = P, n.prototype.subtract = R, n.prototype.multiply = F, n.prototype.divide = _, n.prototype.modPow = q, n.ZERO = l(0), n.ONE = l(1)
	}, function (e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			r = n(1),
			o = function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.AccessToken;
					i(this, e), this.jwtToken = n || ""
				}
				return s(e, [{
					key: "getJwtToken",
					value: function () {
						return this.jwtToken
					}
				}, {
					key: "getExpiration",
					value: function () {
						var e = this.jwtToken.split(".")[1],
							t = JSON.parse(r.util.base64.decode(e).toString("utf8"));
						return t.exp
					}
				}]), e
			}();
		t.default = o
	}, function (e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			r = n(1),
			o = function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.IdToken;
					i(this, e), this.jwtToken = n || ""
				}
				return s(e, [{
					key: "getJwtToken",
					value: function () {
						return this.jwtToken
					}
				}, {
					key: "getExpiration",
					value: function () {
						var e = this.jwtToken.split(".")[1],
							t = JSON.parse(r.util.base64.decode(e).toString("utf8"));
						return t.exp
					}
				}]), e
			}();
		t.default = o
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			s = function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						i = t.RefreshToken;
					n(this, e), this.token = i || ""
				}
				return i(e, [{
					key: "getToken",
					value: function () {
						return this.token
					}
				}]), e
			}();
		t.default = s
	}, function (e, t, n) {
		"use strict";

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			o = n(1),
			a = n(3),
			u = i(a),
			l = n(2),
			c = i(l),
			h = n(4),
			f = i(h),
			d = n(5),
			v = i(d),
			g = n(6),
			m = i(g),
			p = n(9),
			y = i(p),
			S = n(10),
			C = i(S),
			w = n(8),
			k = i(w),
			A = n(11),
			T = i(A),
			U = function () {
				function e(t) {
					if (s(this, e), null == t || null == t.Username || null == t.Pool) throw new Error("Username and pool information are required.");
					this.username = t.Username || "", this.pool = t.Pool, this.Session = null, this.client = t.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = (new T.default).getStorage()
				}
				return r(e, [{
					key: "getSignInUserSession",
					value: function () {
						return this.signInUserSession
					}
				}, {
					key: "getUsername",
					value: function () {
						return this.username
					}
				}, {
					key: "getAuthenticationFlowType",
					value: function () {
						return this.authenticationFlowType
					}
				}, {
					key: "setAuthenticationFlowType",
					value: function (e) {
						this.authenticationFlowType = e
					}
				}, {
					key: "authenticateUser",
					value: function (e, t) {
						var n = this,
							i = new c.default(this.pool.getUserPoolId().split("_")[1]),
							s = new C.default,
							r = void 0,
							a = void 0,
							l = {};
						null != this.deviceKey && (l.DEVICE_KEY = this.deviceKey), l.USERNAME = this.username, l.SRP_A = i.getLargeAValue().toString(16), "CUSTOM_AUTH" === this.authenticationFlowType && (l.CHALLENGE_NAME = "SRP_A"), this.client.makeUnauthenticatedRequest("initiateAuth", {
							AuthFlow: this.authenticationFlowType,
							ClientId: this.pool.getClientId(),
							AuthParameters: l,
							ClientMetadata: e.getValidationData()
						}, function (l, c) {
							if (l) return t.onFailure(l);
							var h = c.ChallengeParameters;
							n.username = h.USER_ID_FOR_SRP, r = new u.default(h.SRP_B, 16), a = new u.default(h.SALT, 16), n.getCachedDeviceKeyAndPassword();
							var f = i.getPasswordAuthenticationKey(n.username, e.getPassword(), r, a),
								d = s.getNowString(),
								v = o.util.crypto.hmac(f, o.util.buffer.concat([new o.util.Buffer(n.pool.getUserPoolId().split("_")[1], "utf8"), new o.util.Buffer(n.username, "utf8"), new o.util.Buffer(h.SECRET_BLOCK, "base64"), new o.util.Buffer(d, "utf8")]), "base64", "sha256"),
								g = {};
							g.USERNAME = n.username, g.PASSWORD_CLAIM_SECRET_BLOCK = h.SECRET_BLOCK, g.TIMESTAMP = d, g.PASSWORD_CLAIM_SIGNATURE = v, null != n.deviceKey && (g.DEVICE_KEY = n.deviceKey);
							var m = function e(t, i) {
								return n.client.makeUnauthenticatedRequest("respondToAuthChallenge", t, function (s, r) {
									return s && "ResourceNotFoundException" === s.code && s.message.toLowerCase().indexOf("device") !== -1 ? (g.DEVICE_KEY = null, n.deviceKey = null, n.randomPassword = null, n.deviceGroupKey = null, n.clearCachedDeviceKeyAndPassword(), e(t, i)) : i(s, r)
								})
							};
							m({
								ChallengeName: "PASSWORD_VERIFIER",
								ClientId: n.pool.getClientId(),
								ChallengeResponses: g,
								Session: c.Session
							}, function (e, s) {
								if (e) return t.onFailure(e);
								var r = s.ChallengeName;
								if ("NEW_PASSWORD_REQUIRED" === r) {
									n.Session = s.Session;
									var o = null,
										a = null,
										u = [],
										l = i.getNewPasswordRequiredChallengeUserAttributePrefix();
									if (s.ChallengeParameters && (o = JSON.parse(s.ChallengeParameters.userAttributes), a = JSON.parse(s.ChallengeParameters.requiredAttributes)), a)
										for (var c = 0; c < a.length; c++) u[c] = a[c].substr(l.length);
									return t.newPasswordRequired(o, u)
								}
								return n.authenticateUserInternal(s, i, t)
							})
						})
					}
				}, {
					key: "authenticateUserInternal",
					value: function (e, t, n) {
						var i = this,
							s = e.ChallengeName,
							r = e.ChallengeParameters;
						if ("SMS_MFA" === s) return this.Session = e.Session, n.mfaRequired(s, r);
						if ("CUSTOM_CHALLENGE" === s) return this.Session = e.Session, n.customChallenge(r);
						if ("DEVICE_SRP_AUTH" === s) return void this.getDeviceResponse(n);
						this.signInUserSession = this.getCognitoUserSession(e.AuthenticationResult), this.cacheTokens();
						var a = e.AuthenticationResult.NewDeviceMetadata;
						if (null == a) return n.onSuccess(this.signInUserSession);
						t.generateHashDevice(e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, e.AuthenticationResult.NewDeviceMetadata.DeviceKey);
						var u = {
							Salt: new o.util.Buffer(t.getSaltDevices(), "hex").toString("base64"),
							PasswordVerifier: new o.util.Buffer(t.getVerifierDevices(), "hex").toString("base64")
						};
						this.verifierDevices = u.PasswordVerifier, this.deviceGroupKey = a.DeviceGroupKey, this.randomPassword = t.getRandomPassword(), this.client.makeUnauthenticatedRequest("confirmDevice", {
							DeviceKey: a.DeviceKey,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							DeviceSecretVerifierConfig: u,
							DeviceName: navigator.userAgent
						}, function (t, s) {
							return t ? n.onFailure(t) : (i.deviceKey = e.AuthenticationResult.NewDeviceMetadata.DeviceKey, i.cacheDeviceKeyAndPassword(), s.UserConfirmationNecessary === !0 ? n.onSuccess(i.signInUserSession, s.UserConfirmationNecessary) : n.onSuccess(i.signInUserSession))
						})
					}
				}, {
					key: "completeNewPasswordChallenge",
					value: function (e, t, n) {
						var i = this;
						if (!e) return n.onFailure(new Error("New password is required."));
						var s = new c.default(this.pool.getUserPoolId().split("_")[1]),
							r = s.getNewPasswordRequiredChallengeUserAttributePrefix(),
							o = {};
						t && Object.keys(t).forEach(function (e) {
							o[r + e] = t[e]
						}), o.NEW_PASSWORD = e, o.USERNAME = this.username, this.client.makeUnauthenticatedRequest("respondToAuthChallenge", {
							ChallengeName: "NEW_PASSWORD_REQUIRED",
							ClientId: this.pool.getClientId(),
							ChallengeResponses: o,
							Session: this.Session
						}, function (e, t) {
							return e ? n.onFailure(e) : i.authenticateUserInternal(t, s, n)
						})
					}
				}, {
					key: "getDeviceResponse",
					value: function (e) {
						var t = this,
							n = new c.default(this.deviceGroupKey),
							i = new C.default,
							s = {};
						s.USERNAME = this.username, s.DEVICE_KEY = this.deviceKey, s.SRP_A = n.getLargeAValue().toString(16), this.client.makeUnauthenticatedRequest("respondToAuthChallenge", {
							ChallengeName: "DEVICE_SRP_AUTH",
							ClientId: this.pool.getClientId(),
							ChallengeResponses: s
						}, function (s, r) {
							if (s) return e.onFailure(s);
							var a = r.ChallengeParameters,
								l = new u.default(a.SRP_B, 16),
								c = new u.default(a.SALT, 16),
								h = n.getPasswordAuthenticationKey(t.deviceKey, t.randomPassword, l, c),
								f = i.getNowString(),
								d = o.util.crypto.hmac(h, o.util.buffer.concat([new o.util.Buffer(t.deviceGroupKey, "utf8"), new o.util.Buffer(t.deviceKey, "utf8"), new o.util.Buffer(a.SECRET_BLOCK, "base64"), new o.util.Buffer(f, "utf8")]), "base64", "sha256"),
								v = {};
							v.USERNAME = t.username, v.PASSWORD_CLAIM_SECRET_BLOCK = a.SECRET_BLOCK, v.TIMESTAMP = f, v.PASSWORD_CLAIM_SIGNATURE = d, v.DEVICE_KEY = t.deviceKey, t.client.makeUnauthenticatedRequest("respondToAuthChallenge", {
								ChallengeName: "DEVICE_PASSWORD_VERIFIER",
								ClientId: t.pool.getClientId(),
								ChallengeResponses: v,
								Session: r.Session
							}, function (n, i) {
								return n ? e.onFailure(n) : (t.signInUserSession = t.getCognitoUserSession(i.AuthenticationResult), t.cacheTokens(), e.onSuccess(t.signInUserSession))
							})
						})
					}
				}, {
					key: "confirmRegistration",
					value: function (e, t, n) {
						this.client.makeUnauthenticatedRequest("confirmSignUp", {
							ClientId: this.pool.getClientId(),
							ConfirmationCode: e,
							Username: this.username,
							ForceAliasCreation: t
						}, function (e) {
							return e ? n(e, null) : n(null, "SUCCESS")
						})
					}
				}, {
					key: "sendCustomChallengeAnswer",
					value: function (e, t) {
						var n = this,
							i = {};
						i.USERNAME = this.username, i.ANSWER = e, this.client.makeUnauthenticatedRequest("respondToAuthChallenge", {
							ChallengeName: "CUSTOM_CHALLENGE",
							ChallengeResponses: i,
							ClientId: this.pool.getClientId(),
							Session: this.Session
						}, function (e, i) {
							if (e) return t.onFailure(e);
							var s = i.ChallengeName;
							return "CUSTOM_CHALLENGE" === s ? (n.Session = i.Session, t.customChallenge(i.ChallengeParameters)) : (n.signInUserSession = n.getCognitoUserSession(i.AuthenticationResult), n.cacheTokens(), t.onSuccess(n.signInUserSession))
						})
					}
				}, {
					key: "sendMFACode",
					value: function (e, t) {
						var n = this,
							i = {};
						i.USERNAME = this.username, i.SMS_MFA_CODE = e, null != this.deviceKey && (i.DEVICE_KEY = this.deviceKey), this.client.makeUnauthenticatedRequest("respondToAuthChallenge", {
							ChallengeName: "SMS_MFA",
							ChallengeResponses: i,
							ClientId: this.pool.getClientId(),
							Session: this.Session
						}, function (e, i) {
							if (e) return t.onFailure(e);
							var s = i.ChallengeName;
							if ("DEVICE_SRP_AUTH" === s) return void n.getDeviceResponse(t);
							if (n.signInUserSession = n.getCognitoUserSession(i.AuthenticationResult), n.cacheTokens(), null == i.AuthenticationResult.NewDeviceMetadata) return t.onSuccess(n.signInUserSession);
							var r = new c.default(n.pool.getUserPoolId().split("_")[1]);
							r.generateHashDevice(i.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, i.AuthenticationResult.NewDeviceMetadata.DeviceKey);
							var a = {
								Salt: new o.util.Buffer(r.getSaltDevices(), "hex").toString("base64"),
								PasswordVerifier: new o.util.Buffer(r.getVerifierDevices(), "hex").toString("base64")
							};
							n.verifierDevices = a.PasswordVerifier, n.deviceGroupKey = i.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, n.randomPassword = r.getRandomPassword(), n.client.makeUnauthenticatedRequest("confirmDevice", {
								DeviceKey: i.AuthenticationResult.NewDeviceMetadata.DeviceKey,
								AccessToken: n.signInUserSession.getAccessToken().getJwtToken(),
								DeviceSecretVerifierConfig: a,
								DeviceName: navigator.userAgent
							}, function (e, s) {
								return e ? t.onFailure(e) : (n.deviceKey = i.AuthenticationResult.NewDeviceMetadata.DeviceKey, n.cacheDeviceKeyAndPassword(), s.UserConfirmationNecessary === !0 ? t.onSuccess(n.signInUserSession, s.UserConfirmationNecessary) : t.onSuccess(n.signInUserSession))
							})
						})
					}
				}, {
					key: "changePassword",
					value: function (e, t, n) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("changePassword", {
							PreviousPassword: e,
							ProposedPassword: t,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (e) {
							return e ? n(e, null) : n(null, "SUCCESS")
						}) : n(new Error("User is not authenticated"), null)
					}
				}, {
					key: "enableMFA",
					value: function (e) {
						if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
						var t = [],
							n = {
								DeliveryMedium: "SMS",
								AttributeName: "phone_number"
							};
						t.push(n), this.client.makeUnauthenticatedRequest("setUserSettings", {
							MFAOptions: t,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (t) {
							return t ? e(t, null) : e(null, "SUCCESS")
						})
					}
				}, {
					key: "disableMFA",
					value: function (e) {
						if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
						var t = [];
						this.client.makeUnauthenticatedRequest("setUserSettings", {
							MFAOptions: t,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (t) {
							return t ? e(t, null) : e(null, "SUCCESS")
						})
					}
				}, {
					key: "deleteUser",
					value: function (e) {
						var t = this;
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("deleteUser", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (n) {
							return n ? e(n, null) : (t.clearCachedTokens(), e(null, "SUCCESS"))
						}) : e(new Error("User is not authenticated"), null)
					}
				}, {
					key: "updateAttributes",
					value: function (e, t) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("updateUserAttributes", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							UserAttributes: e
						}, function (e) {
							return e ? t(e, null) : t(null, "SUCCESS")
						}) : t(new Error("User is not authenticated"), null)
					}
				}, {
					key: "getUserAttributes",
					value: function (e) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("getUser", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (t, n) {
							if (t) return e(t, null);
							for (var i = [], s = 0; s < n.UserAttributes.length; s++) {
								var r = {
										Name: n.UserAttributes[s].Name,
										Value: n.UserAttributes[s].Value
									},
									o = new k.default(r);
								i.push(o)
							}
							return e(null, i)
						}) : e(new Error("User is not authenticated"), null)
					}
				}, {
					key: "getMFAOptions",
					value: function (e) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("getUser", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (t, n) {
							return t ? e(t, null) : e(null, n.MFAOptions)
						}) : e(new Error("User is not authenticated"), null)
					}
				}, {
					key: "deleteAttributes",
					value: function (e, t) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("deleteUserAttributes", {
							UserAttributeNames: e,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (e) {
							return e ? t(e, null) : t(null, "SUCCESS")
						}) : t(new Error("User is not authenticated"), null)
					}
				}, {
					key: "resendConfirmationCode",
					value: function (e) {
						this.client.makeUnauthenticatedRequest("resendConfirmationCode", {
							ClientId: this.pool.getClientId(),
							Username: this.username
						}, function (t) {
							return t ? e(t, null) : e(null, "SUCCESS")
						})
					}
				}, {
					key: "getSession",
					value: function (e) {
						if (null == this.username) return e(new Error("Username is null. Cannot retrieve a new session"), null);
						if (null != this.signInUserSession && this.signInUserSession.isValid()) return e(null, this.signInUserSession);
						var t = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
							n = t + ".idToken",
							i = t + ".accessToken",
							s = t + ".refreshToken";
						if (this.storage.getItem(n)) {
							var r = new v.default({
									IdToken: this.storage.getItem(n)
								}),
								o = new f.default({
									AccessToken: this.storage.getItem(i)
								}),
								a = new m.default({
									RefreshToken: this.storage.getItem(s)
								}),
								u = {
									IdToken: r,
									AccessToken: o,
									RefreshToken: a
								},
								l = new y.default(u);
							if (l.isValid()) return this.signInUserSession = l, e(null, this.signInUserSession);
							if (null == a.getToken()) return e(new Error("Cannot retrieve a new session. Please authenticate."), null);
							this.refreshSession(a, e)
						} else e(new Error("Local storage is missing an ID Token, Please authenticate"), null)
					}
				}, {
					key: "refreshSession",
					value: function (e, t) {
						var n = this,
							i = {};
						i.REFRESH_TOKEN = e.getToken();
						var s = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
							r = s + ".LastAuthUser";
						if (this.storage.getItem(r)) {
							this.username = this.storage.getItem(r);
							var o = s + "." + this.username + ".deviceKey";
							this.deviceKey = this.storage.getItem(o), i.DEVICE_KEY = this.deviceKey
						}
						this.client.makeUnauthenticatedRequest("initiateAuth", {
							ClientId: this.pool.getClientId(),
							AuthFlow: "REFRESH_TOKEN_AUTH",
							AuthParameters: i
						}, function (i, s) {
							if (i) return "NotAuthorizedException" === i.code && n.clearCachedTokens(), t(i, null);
							if (s) {
								var r = s.AuthenticationResult;
								return Object.prototype.hasOwnProperty.call(r, "RefreshToken") || (r.RefreshToken = e.getToken()), n.signInUserSession = n.getCognitoUserSession(r), n.cacheTokens(), t(null, n.signInUserSession)
							}
						})
					}
				}, {
					key: "cacheTokens",
					value: function () {
						var e = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
							t = e + "." + this.username + ".idToken",
							n = e + "." + this.username + ".accessToken",
							i = e + "." + this.username + ".refreshToken",
							s = e + ".LastAuthUser";
						this.storage.setItem(t, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(i, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(s, this.username)
					}
				}, {
					key: "cacheDeviceKeyAndPassword",
					value: function () {
						var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
							t = e + ".deviceKey",
							n = e + ".randomPasswordKey",
							i = e + ".deviceGroupKey";
						this.storage.setItem(t, this.deviceKey), this.storage.setItem(n, this.randomPassword), this.storage.setItem(i, this.deviceGroupKey)
					}
				}, {
					key: "getCachedDeviceKeyAndPassword",
					value: function () {
						var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
							t = e + ".deviceKey",
							n = e + ".randomPasswordKey",
							i = e + ".deviceGroupKey";
						this.storage.getItem(t) && (this.deviceKey = this.storage.getItem(t), this.randomPassword = this.storage.getItem(n), this.deviceGroupKey = this.storage.getItem(i))
					}
				}, {
					key: "clearCachedDeviceKeyAndPassword",
					value: function () {
						var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
							t = e + ".deviceKey",
							n = e + ".randomPasswordKey",
							i = e + ".deviceGroupKey";
						this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(i)
					}
				}, {
					key: "clearCachedTokens",
					value: function () {
						var e = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
							t = e + "." + this.username + ".idToken",
							n = e + "." + this.username + ".accessToken",
							i = e + "." + this.username + ".refreshToken",
							s = e + ".LastAuthUser";
						this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(i), this.storage.removeItem(s)
					}
				}, {
					key: "getCognitoUserSession",
					value: function (e) {
						var t = new v.default(e),
							n = new f.default(e),
							i = new m.default(e),
							s = {
								IdToken: t,
								AccessToken: n,
								RefreshToken: i
							};
						return new y.default(s)
					}
				}, {
					key: "forgotPassword",
					value: function (e) {
						this.client.makeUnauthenticatedRequest("forgotPassword", {
							ClientId: this.pool.getClientId(),
							Username: this.username
						}, function (t, n) {
							return t ? e.onFailure(t) : "function" == typeof e.inputVerificationCode ? e.inputVerificationCode(n) : e.onSuccess()
						})
					}
				}, {
					key: "confirmPassword",
					value: function (e, t, n) {
						this.client.makeUnauthenticatedRequest("confirmForgotPassword", {
							ClientId: this.pool.getClientId(),
							Username: this.username,
							ConfirmationCode: e,
							Password: t
						}, function (e) {
							return e ? n.onFailure(e) : n.onSuccess()
						})
					}
				}, {
					key: "getAttributeVerificationCode",
					value: function (e, t) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("getUserAttributeVerificationCode", {
							AttributeName: e,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (e, n) {
							return e ? t.onFailure(e) : t.inputVerificationCode(n)
						}) : t.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "verifyAttribute",
					value: function (e, t, n) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("verifyUserAttribute", {
							AttributeName: e,
							Code: t,
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (e) {
							return e ? n.onFailure(e) : n.onSuccess("SUCCESS")
						}) : n.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "getDevice",
					value: function (e) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("getDevice", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							DeviceKey: this.deviceKey
						}, function (t, n) {
							return t ? e.onFailure(t) : e.onSuccess(n)
						}) : e.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "forgetSpecificDevice",
					value: function (e, t) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("forgetDevice", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							DeviceKey: e
						}, function (e) {
							return e ? t.onFailure(e) : t.onSuccess("SUCCESS")
						}) : t.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "forgetDevice",
					value: function (e) {
						var t = this;
						this.forgetSpecificDevice(this.deviceKey, {
							onFailure: e.onFailure,
							onSuccess: function (n) {
								return t.deviceKey = null, t.deviceGroupKey = null, t.randomPassword = null, t.clearCachedDeviceKeyAndPassword(), e.onSuccess(n)
							}
						})
					}
				}, {
					key: "setDeviceStatusRemembered",
					value: function (e) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("updateDeviceStatus", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							DeviceKey: this.deviceKey,
							DeviceRememberedStatus: "remembered"
						}, function (t) {
							return t ? e.onFailure(t) : e.onSuccess("SUCCESS")
						}) : e.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "setDeviceStatusNotRemembered",
					value: function (e) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("updateDeviceStatus", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							DeviceKey: this.deviceKey,
							DeviceRememberedStatus: "not_remembered"
						}, function (t) {
							return t ? e.onFailure(t) : e.onSuccess("SUCCESS")
						}) : e.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "listDevices",
					value: function (e, t, n) {
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("listDevices", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
							Limit: e,
							PaginationToken: t
						}, function (e, t) {
							return e ? n.onFailure(e) : n.onSuccess(t)
						}) : n.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "globalSignOut",
					value: function (e) {
						var t = this;
						return null != this.signInUserSession && this.signInUserSession.isValid() ? void this.client.makeUnauthenticatedRequest("globalSignOut", {
							AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
						}, function (n) {
							return n ? e.onFailure(n) : (t.clearCachedTokens(), e.onSuccess("SUCCESS"))
						}) : e.onFailure(new Error("User is not authenticated"))
					}
				}, {
					key: "signOut",
					value: function () {
						this.signInUserSession = null, this.clearCachedTokens()
					}
				}]), e
			}();
		t.default = U
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			s = function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						i = t.Name,
						s = t.Value;
					n(this, e), this.Name = i || "", this.Value = s || ""
				}
				return i(e, [{
					key: "getValue",
					value: function () {
						return this.Value
					}
				}, {
					key: "setValue",
					value: function (e) {
						return this.Value = e, this
					}
				}, {
					key: "getName",
					value: function () {
						return this.Name
					}
				}, {
					key: "setName",
					value: function (e) {
						return this.Name = e, this
					}
				}, {
					key: "toString",
					value: function () {
						return JSON.stringify(this)
					}
				}, {
					key: "toJSON",
					value: function () {
						return {
							Name: this.Name,
							Value: this.Value
						}
					}
				}]), e
			}();
		t.default = s
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			s = function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						i = t.IdToken,
						s = t.RefreshToken,
						r = t.AccessToken;
					if (n(this, e), null == r || null == i) throw new Error("Id token and Access Token must be present.");
					this.idToken = i, this.refreshToken = s, this.accessToken = r
				}
				return i(e, [{
					key: "getIdToken",
					value: function () {
						return this.idToken
					}
				}, {
					key: "getRefreshToken",
					value: function () {
						return this.refreshToken
					}
				}, {
					key: "getAccessToken",
					value: function () {
						return this.accessToken
					}
				}, {
					key: "isValid",
					value: function () {
						var e = Math.floor(new Date / 1e3);
						return e < this.accessToken.getExpiration() && e < this.idToken.getExpiration()
					}
				}]), e
			}();
		t.default = s
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			o = function () {
				function e() {
					n(this, e)
				}
				return i(e, [{
					key: "getNowString",
					value: function () {
						var e = new Date,
							t = r[e.getUTCDay()],
							n = s[e.getUTCMonth()],
							i = e.getUTCDate(),
							o = e.getUTCHours();
						o < 10 && (o = "0" + o);
						var a = e.getUTCMinutes();
						a < 10 && (a = "0" + a);
						var u = e.getUTCSeconds();
						u < 10 && (u = "0" + u);
						var l = e.getUTCFullYear(),
							c = t + " " + n + " " + i + " " + o + ":" + a + ":" + u + " UTC " + l;
						return c
					}
				}]), e
			}();
		t.default = o
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			s = {},
			r = function () {
				function e() {
					n(this, e)
				}
				return i(e, null, [{
					key: "setItem",
					value: function (e, t) {
						return s[e] = t, s[e]
					}
				}, {
					key: "getItem",
					value: function (e) {
						return Object.prototype.hasOwnProperty.call(s, e) ? s[e] : void 0
					}
				}, {
					key: "removeItem",
					value: function (e) {
						return delete s[e]
					}
				}, {
					key: "clear",
					value: function () {
						return s = {}
					}
				}]), e
			}(),
			o = function () {
				function e() {
					n(this, e);
					try {
						this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls")
					} catch (e) {
						this.storageWindow = r
					}
				}
				return i(e, [{
					key: "getStorage",
					value: function () {
						return this.storageWindow
					}
				}]), e
			}();
		t.default = o
	}, function (e, n) {
		e.exports = t
	}, function (e, t) {
		"use strict";

		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			s = function () {
				function e(t) {
					n(this, e);
					var i = t || {},
						s = i.ValidationData,
						r = i.Username,
						o = i.Password;
					this.validationData = s || [], this.username = r, this.password = o
				}
				return i(e, [{
					key: "getUsername",
					value: function () {
						return this.username
					}
				}, {
					key: "getPassword",
					value: function () {
						return this.password
					}
				}, {
					key: "getValidationData",
					value: function () {
						return this.validationData
					}
				}]), e
			}();
		t.default = s
	}, function (e, t, n) {
		"use strict";

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			o = n(12),
			a = i(o),
			u = n(7),
			l = i(u),
			c = n(11),
			h = i(c),
			f = function () {
				function e(t) {
					s(this, e);
					var n = t || {},
						i = n.UserPoolId,
						r = n.ClientId;
					if (!i || !r) throw new Error("Both UserPoolId and ClientId are required.");
					if (!/^[\w-]+_.+$/.test(i)) throw new Error("Invalid UserPoolId format.");
					var o = i.split("_")[0];
					this.userPoolId = i, this.clientId = r, this.client = new a.default({
						apiVersion: "2016-04-19",
						region: o
					}), this.storage = (new h.default).getStorage()
				}
				return r(e, [{
					key: "getUserPoolId",
					value: function () {
						return this.userPoolId
					}
				}, {
					key: "getClientId",
					value: function () {
						return this.clientId
					}
				}, {
					key: "signUp",
					value: function (e, t, n, i, s) {
						var r = this;
						this.client.makeUnauthenticatedRequest("signUp", {
							ClientId: this.clientId,
							Username: e,
							Password: t,
							UserAttributes: n,
							ValidationData: i
						}, function (t, n) {
							if (t) return s(t, null);
							var i = {
									Username: e,
									Pool: r
								},
								o = {
									user: new l.default(i),
									userConfirmed: n.UserConfirmed
								};
							return s(null, o)
						})
					}
				}, {
					key: "getCurrentUser",
					value: function () {
						var e = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser",
							t = this.storage.getItem(e);
						if (t) {
							var n = {
								Username: t,
								Pool: this
							};
							return new l.default(n)
						}
						return null
					}
				}]), e
			}();
		t.default = f
	}, function (e, t, n) {
		"use strict";

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = n(13);
		Object.defineProperty(t, "AuthenticationDetails", {
			enumerable: !0,
			get: function () {
				return i(s).default
			}
		});
		var r = n(2);
		Object.defineProperty(t, "AuthenticationHelper", {
			enumerable: !0,
			get: function () {
				return i(r).default
			}
		});
		var o = n(4);
		Object.defineProperty(t, "CognitoAccessToken", {
			enumerable: !0,
			get: function () {
				return i(o).default
			}
		});
		var a = n(5);
		Object.defineProperty(t, "CognitoIdToken", {
			enumerable: !0,
			get: function () {
				return i(a).default
			}
		});
		var u = n(6);
		Object.defineProperty(t, "CognitoRefreshToken", {
			enumerable: !0,
			get: function () {
				return i(u).default
			}
		});
		var l = n(7);
		Object.defineProperty(t, "CognitoUser", {
			enumerable: !0,
			get: function () {
				return i(l).default
			}
		});
		var c = n(8);
		Object.defineProperty(t, "CognitoUserAttribute", {
			enumerable: !0,
			get: function () {
				return i(c).default
			}
		});
		var h = n(14);
		Object.defineProperty(t, "CognitoUserPool", {
			enumerable: !0,
			get: function () {
				return i(h).default
			}
		});
		var f = n(9);
		Object.defineProperty(t, "CognitoUserSession", {
			enumerable: !0,
			get: function () {
				return i(f).default
			}
		});
		var d = n(10);
		Object.defineProperty(t, "DateHelper", {
			enumerable: !0,
			get: function () {
				return i(d).default
			}
		});
	}]);
});