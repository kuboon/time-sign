var y, v = new Array(32).fill(void 0);
v.push(void 0, null, !0, !1);
function f(e) {
  return v[e];
}
var E = v.length;
function gt(e) {
  e < 36 || (v[e] = E, E = e);
}
function U(e) {
  let t = f(e);
  return gt(e), t;
}
function l(e) {
  E === v.length && v.push(v.length + 1);
  let t = E;
  return E = v[t], v[t] = e, t;
}
var et = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
et.decode();
var M = new Uint8Array();
function B() {
  return M.byteLength === 0 && (M = new Uint8Array(y.memory.buffer)), M;
}
function W(e, t) {
  return et.decode(B().subarray(e, e + t));
}
function K(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    let i = e.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (t == "function") {
    let i = e.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(e)) {
    let i = e.length, o = "[";
    i > 0 && (o += K(e[0]));
    for (let s = 1; s < i; s++) o += ", " + K(e[s]);
    return o += "]", o;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), r;
  if (n.length > 1) r = n[1];
  else return toString.call(e);
  if (r == "Object") {
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  }
  return e instanceof Error
    ? `${e.name}: ${e.message}
${e.stack}`
    : r;
}
var T = 0,
  nt = new TextEncoder("utf-8"),
  bt = function (e, t) {
    return nt.encodeInto(e, t);
  };
function R(e, t, n) {
  if (n === void 0) {
    let c = nt.encode(e), u = t(c.length);
    return B().subarray(u, u + c.length).set(c), T = c.length, u;
  }
  let r = e.length, i = t(r), o = B(), s = 0;
  for (; s < r; s++) {
    let c = e.charCodeAt(s);
    if (c > 127) break;
    o[i + s] = c;
  }
  if (s !== r) {
    s !== 0 && (e = e.slice(s)), i = n(i, r, r = s + e.length * 3);
    let c = B().subarray(i + s, i + r), u = bt(e, c);
    s += u.written;
  }
  return T = s, i;
}
var F = new Int32Array();
function tt() {
  return F.byteLength === 0 && (F = new Int32Array(y.memory.buffer)), F;
}
function mt() {
  let e = y.setup();
  return U(e);
}
function vt(e, t) {
  let n = R(t, y.__wbindgen_malloc, y.__wbindgen_realloc),
    r = T,
    i = y.extract_usk(l(e), n, r);
  return U(i);
}
function V(e, t) {
  let n = R(t, y.__wbindgen_malloc, y.__wbindgen_realloc),
    r = T,
    i = y.encaps(l(e), n, r);
  return U(i);
}
function N(e, t) {
  let n = y.decaps(l(e), l(t));
  return U(n);
}
function m(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    y.__wbindgen_exn_store(l(n));
  }
}
function _t(e, t) {
  return B().subarray(e / 1, e / 1 + t);
}
var k = {
  __wbindgen_placeholder__: {
    __wbindgen_object_drop_ref: function (e) {
      U(e);
    },
    __wbindgen_object_clone_ref: function (e) {
      let t = f(e);
      return l(t);
    },
    __wbindgen_string_new: function (e, t) {
      let n = W(e, t);
      return l(n);
    },
    __wbg_randomFillSync_6894564c2c334c42: function () {
      return m(function (e, t, n) {
        f(e).randomFillSync(_t(t, n));
      }, arguments);
    },
    __wbg_getRandomValues_805f1c3d65988a5a: function () {
      return m(function (e, t) {
        f(e).getRandomValues(f(t));
      }, arguments);
    },
    __wbg_crypto_e1d53a1d73fb10b8: function (e) {
      let t = f(e).crypto;
      return l(t);
    },
    __wbindgen_is_object: function (e) {
      let t = f(e);
      return typeof t == "object" && t !== null;
    },
    __wbg_process_038c26bf42b093f8: function (e) {
      let t = f(e).process;
      return l(t);
    },
    __wbg_versions_ab37218d2f0b24a8: function (e) {
      let t = f(e).versions;
      return l(t);
    },
    __wbg_node_080f4b19d15bc1fe: function (e) {
      let t = f(e).node;
      return l(t);
    },
    __wbindgen_is_string: function (e) {
      return typeof f(e) == "string";
    },
    __wbg_msCrypto_6e7d3e1f92610cbb: function (e) {
      let t = f(e).msCrypto;
      return l(t);
    },
    __wbg_require_78a3dcfbdba9cbce: function () {
      return m(function () {
        let e = module.require;
        return l(e);
      }, arguments);
    },
    __wbindgen_is_function: function (e) {
      return typeof f(e) == "function";
    },
    __wbg_new_1d9a920c6bfc44a8: function () {
      let e = new Array();
      return l(e);
    },
    __wbg_newnoargs_b5b063fc6c2f0376: function (e, t) {
      let n = new Function(W(e, t));
      return l(n);
    },
    __wbg_call_97ae9d8645dc388b: function () {
      return m(function (e, t) {
        let n = f(e).call(f(t));
        return l(n);
      }, arguments);
    },
    __wbg_self_6d479506f72c6a71: function () {
      return m(function () {
        let e = self.self;
        return l(e);
      }, arguments);
    },
    __wbg_window_f2557cc78490aceb: function () {
      return m(function () {
        let e = window.window;
        return l(e);
      }, arguments);
    },
    __wbg_globalThis_7f206bda628d5286: function () {
      return m(function () {
        let e = globalThis.globalThis;
        return l(e);
      }, arguments);
    },
    __wbg_global_ba75c50d1cf384f4: function () {
      return m(function () {
        let e = global.global;
        return l(e);
      }, arguments);
    },
    __wbindgen_is_undefined: function (e) {
      return f(e) === void 0;
    },
    __wbg_set_a68214f35c417fa9: function (e, t, n) {
      f(e)[t >>> 0] = U(n);
    },
    __wbg_call_168da88779e35f61: function () {
      return m(function (e, t, n) {
        let r = f(e).call(f(t), f(n));
        return l(r);
      }, arguments);
    },
    __wbg_buffer_3f3d764d4747d564: function (e) {
      let t = f(e).buffer;
      return l(t);
    },
    __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: function (e, t, n) {
      let r = new Uint8Array(f(e), t >>> 0, n >>> 0);
      return l(r);
    },
    __wbg_new_8c3f0052272a457a: function (e) {
      let t = new Uint8Array(f(e));
      return l(t);
    },
    __wbg_set_83db9690f9353e79: function (e, t, n) {
      f(e).set(f(t), n >>> 0);
    },
    __wbg_length_9e1ae1900cb0fbd5: function (e) {
      return f(e).length;
    },
    __wbg_newwithlength_f5933855e4f48a19: function (e) {
      let t = new Uint8Array(e >>> 0);
      return l(t);
    },
    __wbg_subarray_58ad4efbb5bcb886: function (e, t, n) {
      let r = f(e).subarray(t >>> 0, n >>> 0);
      return l(r);
    },
    __wbindgen_debug_string: function (e, t) {
      let n = K(f(t)),
        r = R(n, y.__wbindgen_malloc, y.__wbindgen_realloc),
        i = T;
      tt()[e / 4 + 1] = i, tt()[e / 4 + 0] = r;
    },
    __wbindgen_throw: function (e, t) {
      throw new Error(W(e, t));
    },
    __wbindgen_memory: function () {
      let e = y.memory;
      return l(e);
    },
  },
};
async function rt(e) {
  return (await xt(e)).exports;
}
var C, D;
function xt(e) {
  return C != null ? Promise.resolve(C) : (D == null && (D = (async () => {
    try {
      let t = (await At(e ?? {})).instance;
      return y = t.exports,
        F = new Int32Array(y.memory.buffer),
        M = new Uint8Array(y.memory.buffer),
        C = { instance: t, exports: Ut() },
        C;
    } finally {
      D = null;
    }
  })()),
    D);
}
function Ut() {
  return { setup: mt, extract_usk: vt, encaps: V, decaps: N };
}
async function At(e) {
  let t = e.url ?? new URL("rs_lib_bg.wasm", import.meta.url),
    n = e.decompress,
    r = t.protocol === "file:";
  if (globalThis.process?.versions?.node != null && r) {
    let o = await Deno.readFile(t);
    return WebAssembly.instantiate(n ? n(o) : o, k);
  }
  switch (t.protocol) {
    case "file:":
    case "https:":
    case "http:": {
      if (r) {
        if (typeof Deno != "object") {
          throw new Error("file urls are not supported in this environment");
        }
        "permissions" in Deno &&
          await Deno.permissions.request({ name: "read", path: t });
      } else {typeof Deno == "object" && "permissions" in Deno &&
          await Deno.permissions.request({ name: "net", host: t.host });}
      let o = await fetch(t);
      if (n) {
        let s = new Uint8Array(await o.arrayBuffer());
        return WebAssembly.instantiate(n(s), k);
      }
      return r ||
          o.headers.get("content-type")?.toLowerCase().startsWith(
            "application/wasm",
          )
        ? WebAssembly.instantiateStreaming(o, k)
        : WebAssembly.instantiate(await o.arrayBuffer(), k);
    }
    default:
      throw new Error(`Unsupported protocol: ${t.protocol}`);
  }
}
var it = {
    base64: new TextEncoder().encode(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    ),
    base64url: new TextEncoder().encode(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    ),
  },
  ot = {
    base64: new Uint8Array(128).fill(64),
    base64url: new Uint8Array(128).fill(64),
  };
it.base64.forEach((e, t) => ot.base64[e] = t);
it.base64url.forEach((e, t) => ot.base64url[e] = t);
function st(e, t, n, r, i) {
  for (let o = e.length - 2; o < e.length; ++o) {
    if (e[o] === i) {
      for (let s = o + 1; s < e.length; ++s) {
        if (e[s] !== i) {
          throw new TypeError(
            `Cannot decode input as base64: Invalid character (${
              String.fromCharCode(e[s])
            })`,
          );
        }
      }
      e = e.subarray(0, o);
      break;
    }
  }
  if ((e.length - n) % 4 === 1) {
    throw new RangeError(
      `Cannot decode input as base64: Length (${
        e.length - n
      }), excluding padding, must not have a remainder of 1 when divided by 4`,
    );
  }
  for (t += 3; t < e.length; t += 4) {
    let o = _(e[t - 3], r) << 18 | _(e[t - 2], r) << 12 | _(e[t - 1], r) << 6 |
      _(e[t], r);
    e[n++] = o >> 16, e[n++] = o >> 8 & 255, e[n++] = o & 255;
  }
  switch (t) {
    case e.length + 1: {
      let o = _(e[t - 3], r) << 18 | _(e[t - 2], r) << 12;
      e[n++] = o >> 16;
      break;
    }
    case e.length: {
      let o = _(e[t - 3], r) << 18 | _(e[t - 2], r) << 12 | _(e[t - 1], r) << 6;
      e[n++] = o >> 16, e[n++] = o >> 8 & 255;
      break;
    }
  }
  return n;
}
function _(e, t) {
  let n = t[e] ?? 64;
  if (n === 64) {
    throw new TypeError(
      `Cannot decode input as base64: Invalid character (${
        String.fromCharCode(e)
      })`,
    );
  }
  return n;
}
var St = 61,
  Et = new TextEncoder().encode(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  ),
  ct = new Uint8Array(128).fill(64);
Et.forEach((e, t) => ct[e] = t);
function $(e) {
  let t = new TextEncoder().encode(e);
  return new Uint8Array(t.buffer.transfer(st(t, 0, 0, ct, St)));
}
import S from "node:process";
var x = 4294967295;
function Bt(e, t, n) {
  var r = n / 4294967296, i = n;
  e.setUint32(t, r), e.setUint32(t + 4, i);
}
function ft(e, t, n) {
  var r = Math.floor(n / 4294967296), i = n;
  e.setUint32(t, r), e.setUint32(t + 4, i);
}
function lt(e, t) {
  var n = e.getInt32(t), r = e.getUint32(t + 4);
  return n * 4294967296 + r;
}
function Tt(e, t) {
  var n = e.getUint32(t), r = e.getUint32(t + 4);
  return n * 4294967296 + r;
}
var H,
  G,
  q,
  j = (typeof S > "u" ||
    ((H = S?.env) === null || H === void 0 ? void 0 : H.TEXT_ENCODING) !==
      "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
function at(e) {
  for (var t = e.length, n = 0, r = 0; r < t;) {
    var i = e.charCodeAt(r++);
    if (i & 4294967168) {
      if (!(i & 4294965248)) n += 2;
      else {
        if (i >= 55296 && i <= 56319 && r < t) {
          var o = e.charCodeAt(r);
          (o & 64512) === 56320 &&
            (++r, i = ((i & 1023) << 10) + (o & 1023) + 65536);
        }
        i & 4294901760 ? n += 4 : n += 3;
      }
    } else {
      n++;
      continue;
    }
  }
  return n;
}
function It(e, t, n) {
  for (var r = e.length, i = n, o = 0; o < r;) {
    var s = e.charCodeAt(o++);
    if (s & 4294967168) {
      if (!(s & 4294965248)) t[i++] = s >> 6 & 31 | 192;
      else {
        if (s >= 55296 && s <= 56319 && o < r) {
          var c = e.charCodeAt(o);
          (c & 64512) === 56320 &&
            (++o, s = ((s & 1023) << 10) + (c & 1023) + 65536);
        }
        s & 4294901760
          ? (t[i++] = s >> 18 & 7 | 240,
            t[i++] = s >> 12 & 63 | 128,
            t[i++] = s >> 6 & 63 | 128)
          : (t[i++] = s >> 12 & 15 | 224, t[i++] = s >> 6 & 63 | 128);
      }
    } else {
      t[i++] = s;
      continue;
    }
    t[i++] = s & 63 | 128;
  }
}
var Y = j ? new TextEncoder() : void 0,
  Lt = j
    ? typeof S < "u" &&
        ((G = S?.env) === null || G === void 0 ? void 0 : G.TEXT_ENCODING) !==
          "force"
      ? 200
      : 0
    : x;
function kt(e, t, n) {
  t.set(Y.encode(e), n);
}
function Ct(e, t, n) {
  Y.encodeInto(e, t.subarray(n));
}
var Dt = Y?.encodeInto ? Ct : kt, Mt = 4096;
function pt(e, t, n) {
  for (var r = t, i = r + n, o = [], s = ""; r < i;) {
    var c = e[r++];
    if (!(c & 128)) o.push(c);
    else if ((c & 224) === 192) {
      var u = e[r++] & 63;
      o.push((c & 31) << 6 | u);
    } else if ((c & 240) === 224) {
      var u = e[r++] & 63, a = e[r++] & 63;
      o.push((c & 31) << 12 | u << 6 | a);
    } else if ((c & 248) === 240) {
      var u = e[r++] & 63,
        a = e[r++] & 63,
        p = e[r++] & 63,
        d = (c & 7) << 18 | u << 12 | a << 6 | p;
      d > 65535 &&
      (d -= 65536, o.push(d >>> 10 & 1023 | 55296), d = 56320 | d & 1023),
        o.push(d);
    } else o.push(c);
    o.length >= Mt && (s += String.fromCharCode.apply(String, o), o.length = 0);
  }
  return o.length > 0 && (s += String.fromCharCode.apply(String, o)), s;
}
var Ft = j ? new TextDecoder() : null,
  zt = j
    ? typeof S < "u" &&
        ((q = S?.env) === null || q === void 0 ? void 0 : q.TEXT_DECODER) !==
          "force"
      ? 200
      : 0
    : x;
function Ot(e, t, n) {
  var r = e.subarray(t, t + n);
  return Ft.decode(r);
}
var z = function () {
    function e(t, n) {
      this.type = t, this.data = n;
    }
    return e;
  }(),
  jt = function () {
    var e = function (t, n) {
      return e = Object.setPrototypeOf ||
        { __proto__: [] } instanceof Array && function (r, i) {
            r.__proto__ = i;
          } ||
        function (r, i) {
          for (var o in i) {
            Object.prototype.hasOwnProperty.call(i, o) &&
              (r[o] = i[o]);
          }
        },
        e(t, n);
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null) {
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      }
      e(t, n);
      function r() {
        this.constructor = t;
      }
      t.prototype = n === null
        ? Object.create(n)
        : (r.prototype = n.prototype, new r());
    };
  }(),
  g = function (e) {
    jt(t, e);
    function t(n) {
      var r = e.call(this, n) || this, i = Object.create(t.prototype);
      return Object.setPrototypeOf(r, i),
        Object.defineProperty(r, "name", {
          configurable: !0,
          enumerable: !1,
          value: t.name,
        }),
        r;
    }
    return t;
  }(Error),
  Pt = -1,
  Wt = 4294967296 - 1,
  Kt = 17179869184 - 1;
function Rt(e) {
  var t = e.sec, n = e.nsec;
  if (t >= 0 && n >= 0 && t <= Kt) {
    if (n === 0 && t <= Wt) {
      var r = new Uint8Array(4), i = new DataView(r.buffer);
      return i.setUint32(0, t), r;
    } else {
      var o = t / 4294967296,
        s = t & 4294967295,
        r = new Uint8Array(8),
        i = new DataView(r.buffer);
      return i.setUint32(0, n << 2 | o & 3), i.setUint32(4, s), r;
    }
  } else {
    var r = new Uint8Array(12), i = new DataView(r.buffer);
    return i.setUint32(0, n), ft(i, 4, t), r;
  }
}
function Vt(e) {
  var t = e.getTime(),
    n = Math.floor(t / 1e3),
    r = (t - n * 1e3) * 1e6,
    i = Math.floor(r / 1e9);
  return { sec: n + i, nsec: r - i * 1e9 };
}
function Nt(e) {
  if (e instanceof Date) {
    var t = Vt(e);
    return Rt(t);
  } else return null;
}
function $t(e) {
  var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  switch (e.byteLength) {
    case 4: {
      var n = t.getUint32(0), r = 0;
      return { sec: n, nsec: r };
    }
    case 8: {
      var i = t.getUint32(0),
        o = t.getUint32(4),
        n = (i & 3) * 4294967296 + o,
        r = i >>> 2;
      return { sec: n, nsec: r };
    }
    case 12: {
      var n = lt(t, 4), r = t.getUint32(0);
      return { sec: n, nsec: r };
    }
    default:
      throw new g(
        "Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(
          e.length,
        ),
      );
  }
}
function Ht(e) {
  var t = $t(e);
  return new Date(t.sec * 1e3 + t.nsec / 1e6);
}
var Gt = { type: Pt, encode: Nt, decode: Ht },
  dt = function () {
    function e() {
      this.builtInEncoders = [],
        this.builtInDecoders = [],
        this.encoders = [],
        this.decoders = [],
        this.register(Gt);
    }
    return e.prototype.register = function (t) {
      var n = t.type, r = t.encode, i = t.decode;
      if (n >= 0) this.encoders[n] = r, this.decoders[n] = i;
      else {
        var o = 1 + n;
        this.builtInEncoders[o] = r, this.builtInDecoders[o] = i;
      }
    },
      e.prototype.tryToEncode = function (t, n) {
        for (var r = 0; r < this.builtInEncoders.length; r++) {
          var i = this.builtInEncoders[r];
          if (i != null) {
            var o = i(t, n);
            if (o != null) {
              var s = -1 - r;
              return new z(s, o);
            }
          }
        }
        for (var r = 0; r < this.encoders.length; r++) {
          var i = this.encoders[r];
          if (i != null) {
            var o = i(t, n);
            if (o != null) {
              var s = r;
              return new z(s, o);
            }
          }
        }
        return t instanceof z ? t : null;
      },
      e.prototype.decode = function (t, n, r) {
        var i = n < 0 ? this.builtInDecoders[-1 - n] : this.decoders[n];
        return i ? i(t, n, r) : new z(n, t);
      },
      e.defaultCodec = new e(),
      e;
  }();
function O(e) {
  return e instanceof Uint8Array
    ? e
    : ArrayBuffer.isView(e)
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : Uint8Array.from(e);
}
function qt(e) {
  if (e instanceof ArrayBuffer) return new DataView(e);
  var t = O(e);
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
var Xt = 100,
  Jt = 2048,
  Qt = function () {
    function e(t, n, r, i, o, s, c, u) {
      t === void 0 && (t = dt.defaultCodec),
        n === void 0 && (n = void 0),
        r === void 0 && (r = Xt),
        i === void 0 && (i = Jt),
        o === void 0 && (o = !1),
        s === void 0 && (s = !1),
        c === void 0 && (c = !1),
        u === void 0 && (u = !1),
        this.extensionCodec = t,
        this.context = n,
        this.maxDepth = r,
        this.initialBufferSize = i,
        this.sortKeys = o,
        this.forceFloat32 = s,
        this.ignoreUndefined = c,
        this.forceIntegerToFloat = u,
        this.pos = 0,
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize)),
        this.bytes = new Uint8Array(this.view.buffer);
    }
    return e.prototype.reinitializeState = function () {
      this.pos = 0;
    },
      e.prototype.encodeSharedRef = function (t) {
        return this.reinitializeState(),
          this.doEncode(t, 1),
          this.bytes.subarray(0, this.pos);
      },
      e.prototype.encode = function (t) {
        return this.reinitializeState(),
          this.doEncode(t, 1),
          this.bytes.slice(0, this.pos);
      },
      e.prototype.doEncode = function (t, n) {
        if (n > this.maxDepth) {
          throw new Error("Too deep objects in depth ".concat(n));
        }
        t == null
          ? this.encodeNil()
          : typeof t == "boolean"
          ? this.encodeBoolean(t)
          : typeof t == "number"
          ? this.encodeNumber(t)
          : typeof t == "string"
          ? this.encodeString(t)
          : this.encodeObject(t, n);
      },
      e.prototype.ensureBufferSizeToWrite = function (t) {
        var n = this.pos + t;
        this.view.byteLength < n && this.resizeBuffer(n * 2);
      },
      e.prototype.resizeBuffer = function (t) {
        var n = new ArrayBuffer(t), r = new Uint8Array(n), i = new DataView(n);
        r.set(this.bytes), this.view = i, this.bytes = r;
      },
      e.prototype.encodeNil = function () {
        this.writeU8(192);
      },
      e.prototype.encodeBoolean = function (t) {
        t === !1 ? this.writeU8(194) : this.writeU8(195);
      },
      e.prototype.encodeNumber = function (t) {
        Number.isSafeInteger(t) && !this.forceIntegerToFloat
          ? t >= 0
            ? t < 128
              ? this.writeU8(t)
              : t < 256
              ? (this.writeU8(204), this.writeU8(t))
              : t < 65536
              ? (this.writeU8(205), this.writeU16(t))
              : t < 4294967296
              ? (this.writeU8(206), this.writeU32(t))
              : (this.writeU8(207), this.writeU64(t))
            : t >= -32
            ? this.writeU8(224 | t + 32)
            : t >= -128
            ? (this.writeU8(208), this.writeI8(t))
            : t >= -32768
            ? (this.writeU8(209), this.writeI16(t))
            : t >= -2147483648
            ? (this.writeU8(210), this.writeI32(t))
            : (this.writeU8(211), this.writeI64(t))
          : this.forceFloat32
          ? (this.writeU8(202), this.writeF32(t))
          : (this.writeU8(203), this.writeF64(t));
      },
      e.prototype.writeStringHeader = function (t) {
        if (t < 32) this.writeU8(160 + t);
        else if (t < 256) this.writeU8(217), this.writeU8(t);
        else if (t < 65536) this.writeU8(218), this.writeU16(t);
        else if (t < 4294967296) this.writeU8(219), this.writeU32(t);
        else throw new Error("Too long string: ".concat(t, " bytes in UTF-8"));
      },
      e.prototype.encodeString = function (t) {
        var n = 5, r = t.length;
        if (r > Lt) {
          var i = at(t);
          this.ensureBufferSizeToWrite(n + i),
            this.writeStringHeader(i),
            Dt(t, this.bytes, this.pos),
            this.pos += i;
        } else {
          var i = at(t);
          this.ensureBufferSizeToWrite(n + i),
            this.writeStringHeader(i),
            It(t, this.bytes, this.pos),
            this.pos += i;
        }
      },
      e.prototype.encodeObject = function (t, n) {
        var r = this.extensionCodec.tryToEncode(t, this.context);
        if (r != null) this.encodeExtension(r);
        else if (Array.isArray(t)) this.encodeArray(t, n);
        else if (ArrayBuffer.isView(t)) this.encodeBinary(t);
        else if (typeof t == "object") this.encodeMap(t, n);
        else {throw new Error(
            "Unrecognized object: ".concat(Object.prototype.toString.apply(t)),
          );}
      },
      e.prototype.encodeBinary = function (t) {
        var n = t.byteLength;
        if (n < 256) this.writeU8(196), this.writeU8(n);
        else if (n < 65536) this.writeU8(197), this.writeU16(n);
        else if (n < 4294967296) this.writeU8(198), this.writeU32(n);
        else throw new Error("Too large binary: ".concat(n));
        var r = O(t);
        this.writeU8a(r);
      },
      e.prototype.encodeArray = function (t, n) {
        var r = t.length;
        if (r < 16) this.writeU8(144 + r);
        else if (r < 65536) this.writeU8(220), this.writeU16(r);
        else if (r < 4294967296) this.writeU8(221), this.writeU32(r);
        else throw new Error("Too large array: ".concat(r));
        for (var i = 0, o = t; i < o.length; i++) {
          var s = o[i];
          this.doEncode(s, n + 1);
        }
      },
      e.prototype.countWithoutUndefined = function (t, n) {
        for (var r = 0, i = 0, o = n; i < o.length; i++) {
          var s = o[i];
          t[s] !== void 0 && r++;
        }
        return r;
      },
      e.prototype.encodeMap = function (t, n) {
        var r = Object.keys(t);
        this.sortKeys && r.sort();
        var i = this.ignoreUndefined
          ? this.countWithoutUndefined(t, r)
          : r.length;
        if (i < 16) this.writeU8(128 + i);
        else if (i < 65536) this.writeU8(222), this.writeU16(i);
        else if (i < 4294967296) this.writeU8(223), this.writeU32(i);
        else throw new Error("Too large map object: ".concat(i));
        for (var o = 0, s = r; o < s.length; o++) {
          var c = s[o], u = t[c];
          this.ignoreUndefined && u === void 0 ||
            (this.encodeString(c), this.doEncode(u, n + 1));
        }
      },
      e.prototype.encodeExtension = function (t) {
        var n = t.data.length;
        if (n === 1) this.writeU8(212);
        else if (n === 2) this.writeU8(213);
        else if (n === 4) this.writeU8(214);
        else if (n === 8) this.writeU8(215);
        else if (n === 16) this.writeU8(216);
        else if (n < 256) this.writeU8(199), this.writeU8(n);
        else if (n < 65536) this.writeU8(200), this.writeU16(n);
        else if (n < 4294967296) this.writeU8(201), this.writeU32(n);
        else throw new Error("Too large extension object: ".concat(n));
        this.writeI8(t.type), this.writeU8a(t.data);
      },
      e.prototype.writeU8 = function (t) {
        this.ensureBufferSizeToWrite(1),
          this.view.setUint8(this.pos, t),
          this.pos++;
      },
      e.prototype.writeU8a = function (t) {
        var n = t.length;
        this.ensureBufferSizeToWrite(n),
          this.bytes.set(t, this.pos),
          this.pos += n;
      },
      e.prototype.writeI8 = function (t) {
        this.ensureBufferSizeToWrite(1),
          this.view.setInt8(this.pos, t),
          this.pos++;
      },
      e.prototype.writeU16 = function (t) {
        this.ensureBufferSizeToWrite(2),
          this.view.setUint16(this.pos, t),
          this.pos += 2;
      },
      e.prototype.writeI16 = function (t) {
        this.ensureBufferSizeToWrite(2),
          this.view.setInt16(this.pos, t),
          this.pos += 2;
      },
      e.prototype.writeU32 = function (t) {
        this.ensureBufferSizeToWrite(4),
          this.view.setUint32(this.pos, t),
          this.pos += 4;
      },
      e.prototype.writeI32 = function (t) {
        this.ensureBufferSizeToWrite(4),
          this.view.setInt32(this.pos, t),
          this.pos += 4;
      },
      e.prototype.writeF32 = function (t) {
        this.ensureBufferSizeToWrite(4),
          this.view.setFloat32(this.pos, t),
          this.pos += 4;
      },
      e.prototype.writeF64 = function (t) {
        this.ensureBufferSizeToWrite(8),
          this.view.setFloat64(this.pos, t),
          this.pos += 8;
      },
      e.prototype.writeU64 = function (t) {
        this.ensureBufferSizeToWrite(8),
          Bt(this.view, this.pos, t),
          this.pos += 8;
      },
      e.prototype.writeI64 = function (t) {
        this.ensureBufferSizeToWrite(8),
          ft(this.view, this.pos, t),
          this.pos += 8;
      },
      e;
  }(),
  Yt = {};
function yt(e, t) {
  t === void 0 && (t = Yt);
  var n = new Qt(
    t.extensionCodec,
    t.context,
    t.maxDepth,
    t.initialBufferSize,
    t.sortKeys,
    t.forceFloat32,
    t.ignoreUndefined,
    t.forceIntegerToFloat,
  );
  return n.encodeSharedRef(e);
}
function X(e) {
  return "".concat(e < 0 ? "-" : "", "0x").concat(
    Math.abs(e).toString(16).padStart(2, "0"),
  );
}
var Zt = 16,
  te = 16,
  ee = function () {
    function e(t, n) {
      t === void 0 && (t = Zt),
        n === void 0 && (n = te),
        this.maxKeyLength = t,
        this.maxLengthPerKey = n,
        this.hit = 0,
        this.miss = 0,
        this.caches = [];
      for (var r = 0; r < this.maxKeyLength; r++) this.caches.push([]);
    }
    return e.prototype.canBeCached = function (t) {
      return t > 0 && t <= this.maxKeyLength;
    },
      e.prototype.find = function (t, n, r) {
        var i = this.caches[r - 1];
        t: for (var o = 0, s = i; o < s.length; o++) {
          for (var c = s[o], u = c.bytes, a = 0; a < r; a++) {
            if (u[a] !== t[n + a]) continue t;
          }
          return c.str;
        }
        return null;
      },
      e.prototype.store = function (t, n) {
        var r = this.caches[t.length - 1], i = { bytes: t, str: n };
        r.length >= this.maxLengthPerKey
          ? r[Math.random() * r.length | 0] = i
          : r.push(i);
      },
      e.prototype.decode = function (t, n, r) {
        var i = this.find(t, n, r);
        if (i != null) return this.hit++, i;
        this.miss++;
        var o = pt(t, n, r), s = Uint8Array.prototype.slice.call(t, n, n + r);
        return this.store(s, o), o;
      },
      e;
  }(),
  ne = function (e, t, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function (s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function (o, s) {
      function c(p) {
        try {
          a(r.next(p));
        } catch (d) {
          s(d);
        }
      }
      function u(p) {
        try {
          a(r.throw(p));
        } catch (d) {
          s(d);
        }
      }
      function a(p) {
        p.done ? o(p.value) : i(p.value).then(c, u);
      }
      a((r = r.apply(e, t || [])).next());
    });
  },
  J = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      r,
      i,
      o,
      s;
    return s = { next: c(0), throw: c(1), return: c(2) },
      typeof Symbol == "function" && (s[Symbol.iterator] = function () {
        return this;
      }),
      s;
    function c(a) {
      return function (p) {
        return u([a, p]);
      };
    }
    function u(a) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; n;) {
        try {
          if (
            r = 1,
              i && (o = a[0] & 2
                ? i.return
                : a[0]
                ? i.throw || ((o = i.return) && o.call(i), 0)
                : i.next) &&
              !(o = o.call(i, a[1])).done
          ) return o;
          switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
            case 0:
            case 1:
              o = a;
              break;
            case 4:
              return n.label++, { value: a[1], done: !1 };
            case 5:
              n.label++, i = a[1], a = [0];
              continue;
            case 7:
              a = n.ops.pop(), n.trys.pop();
              continue;
            default:
              if (
                o = n.trys,
                  !(o = o.length > 0 && o[o.length - 1]) &&
                  (a[0] === 6 || a[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                n.label = a[1];
                break;
              }
              if (a[0] === 6 && n.label < o[1]) {
                n.label = o[1], o = a;
                break;
              }
              if (o && n.label < o[2]) {
                n.label = o[2], n.ops.push(a);
                break;
              }
              o[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          a = t.call(e, n);
        } catch (p) {
          a = [6, p], i = 0;
        } finally {
          r = o = 0;
        }
      }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: !0 };
    }
  },
  ut = function (e) {
    if (!Symbol.asyncIterator) {
      throw new TypeError("Symbol.asyncIterator is not defined.");
    }
    var t = e[Symbol.asyncIterator], n;
    return t
      ? t.call(e)
      : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](),
        n = {},
        r("next"),
        r("throw"),
        r("return"),
        n[Symbol.asyncIterator] = function () {
          return this;
        },
        n);
    function r(o) {
      n[o] = e[o] && function (s) {
        return new Promise(function (c, u) {
          s = e[o](s), i(c, u, s.done, s.value);
        });
      };
    }
    function i(o, s, c, u) {
      Promise.resolve(u).then(function (a) {
        o({ value: a, done: c });
      }, s);
    }
  },
  A = function (e) {
    return this instanceof A ? (this.v = e, this) : new A(e);
  },
  re = function (e, t, n) {
    if (!Symbol.asyncIterator) {
      throw new TypeError("Symbol.asyncIterator is not defined.");
    }
    var r = n.apply(e, t || []), i, o = [];
    return i = {},
      s("next"),
      s("throw"),
      s("return"),
      i[Symbol.asyncIterator] = function () {
        return this;
      },
      i;
    function s(h) {
      r[h] && (i[h] = function (b) {
        return new Promise(function (w, L) {
          o.push([h, b, w, L]) > 1 || c(h, b);
        });
      });
    }
    function c(h, b) {
      try {
        u(r[h](b));
      } catch (w) {
        d(o[0][3], w);
      }
    }
    function u(h) {
      h.value instanceof A
        ? Promise.resolve(h.value.v).then(a, p)
        : d(o[0][2], h);
    }
    function a(h) {
      c("next", h);
    }
    function p(h) {
      c("throw", h);
    }
    function d(h, b) {
      h(b), o.shift(), o.length && c(o[0][0], o[0][1]);
    }
  },
  ie = function (e) {
    var t = typeof e;
    return t === "string" || t === "number";
  },
  I = -1,
  Z = new DataView(new ArrayBuffer(0)),
  oe = new Uint8Array(Z.buffer),
  Q = function () {
    try {
      Z.getInt8(0);
    } catch (e) {
      return e.constructor;
    }
    throw new Error("never reached");
  }(),
  ht = new Q("Insufficient data"),
  se = new ee(),
  ce = function () {
    function e(t, n, r, i, o, s, c, u) {
      t === void 0 && (t = dt.defaultCodec),
        n === void 0 && (n = void 0),
        r === void 0 && (r = x),
        i === void 0 && (i = x),
        o === void 0 && (o = x),
        s === void 0 && (s = x),
        c === void 0 && (c = x),
        u === void 0 && (u = se),
        this.extensionCodec = t,
        this.context = n,
        this.maxStrLength = r,
        this.maxBinLength = i,
        this.maxArrayLength = o,
        this.maxMapLength = s,
        this.maxExtLength = c,
        this.keyDecoder = u,
        this.totalPos = 0,
        this.pos = 0,
        this.view = Z,
        this.bytes = oe,
        this.headByte = I,
        this.stack = [];
    }
    return e.prototype.reinitializeState = function () {
      this.totalPos = 0, this.headByte = I, this.stack.length = 0;
    },
      e.prototype.setBuffer = function (t) {
        this.bytes = O(t), this.view = qt(this.bytes), this.pos = 0;
      },
      e.prototype.appendBuffer = function (t) {
        if (this.headByte === I && !this.hasRemaining(1)) this.setBuffer(t);
        else {
          var n = this.bytes.subarray(this.pos),
            r = O(t),
            i = new Uint8Array(n.length + r.length);
          i.set(n), i.set(r, n.length), this.setBuffer(i);
        }
      },
      e.prototype.hasRemaining = function (t) {
        return this.view.byteLength - this.pos >= t;
      },
      e.prototype.createExtraByteError = function (t) {
        var n = this, r = n.view, i = n.pos;
        return new RangeError(
          "Extra ".concat(r.byteLength - i, " of ").concat(
            r.byteLength,
            " byte(s) found at buffer[",
          ).concat(t, "]"),
        );
      },
      e.prototype.decode = function (t) {
        this.reinitializeState(), this.setBuffer(t);
        var n = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return n;
      },
      e.prototype.decodeMulti = function (t) {
        return J(this, function (n) {
          switch (n.label) {
            case 0:
              this.reinitializeState(), this.setBuffer(t), n.label = 1;
            case 1:
              return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
            case 2:
              return n.sent(), [3, 1];
            case 3:
              return [2];
          }
        });
      },
      e.prototype.decodeAsync = function (t) {
        var n, r, i, o;
        return ne(this, void 0, void 0, function () {
          var s, c, u, a, p, d, h, b;
          return J(this, function (w) {
            switch (w.label) {
              case 0:
                s = !1, w.label = 1;
              case 1:
                w.trys.push([1, 6, 7, 12]), n = ut(t), w.label = 2;
              case 2:
                return [4, n.next()];
              case 3:
                if (r = w.sent(), !!r.done) return [3, 5];
                if (u = r.value, s) {
                  throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(u);
                try {
                  c = this.doDecodeSync(), s = !0;
                } catch (L) {
                  if (!(L instanceof Q)) throw L;
                }
                this.totalPos += this.pos, w.label = 4;
              case 4:
                return [3, 2];
              case 5:
                return [3, 12];
              case 6:
                return a = w.sent(), i = { error: a }, [3, 12];
              case 7:
                return w.trys.push([7, , 10, 11]),
                  r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 9];
              case 8:
                w.sent(), w.label = 9;
              case 9:
                return [3, 11];
              case 10:
                if (i) throw i.error;
                return [7];
              case 11:
                return [7];
              case 12:
                if (s) {
                  if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  return [2, c];
                }
                throw p = this,
                  d = p.headByte,
                  h = p.pos,
                  b = p.totalPos,
                  new RangeError(
                    "Insufficient data in parsing ".concat(X(d), " at ").concat(
                      b,
                      " (",
                    ).concat(h, " in the current buffer)"),
                  );
            }
          });
        });
      },
      e.prototype.decodeArrayStream = function (t) {
        return this.decodeMultiAsync(t, !0);
      },
      e.prototype.decodeStream = function (t) {
        return this.decodeMultiAsync(t, !1);
      },
      e.prototype.decodeMultiAsync = function (t, n) {
        return re(this, arguments, function () {
          var r, i, o, s, c, u, a, p, d;
          return J(this, function (h) {
            switch (h.label) {
              case 0:
                r = n, i = -1, h.label = 1;
              case 1:
                h.trys.push([1, 13, 14, 19]), o = ut(t), h.label = 2;
              case 2:
                return [4, A(o.next())];
              case 3:
                if (s = h.sent(), !!s.done) return [3, 12];
                if (c = s.value, n && i === 0) {
                  throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(c),
                  r && (i = this.readArraySize(), r = !1, this.complete()),
                  h.label = 4;
              case 4:
                h.trys.push([4, 9, , 10]), h.label = 5;
              case 5:
                return [4, A(this.doDecodeSync())];
              case 6:
                return [4, h.sent()];
              case 7:
                return h.sent(), --i === 0 ? [3, 8] : [3, 5];
              case 8:
                return [3, 10];
              case 9:
                if (u = h.sent(), !(u instanceof Q)) throw u;
                return [3, 10];
              case 10:
                this.totalPos += this.pos, h.label = 11;
              case 11:
                return [3, 2];
              case 12:
                return [3, 19];
              case 13:
                return a = h.sent(), p = { error: a }, [3, 19];
              case 14:
                return h.trys.push([14, , 17, 18]),
                  s && !s.done && (d = o.return) ? [4, A(d.call(o))] : [3, 16];
              case 15:
                h.sent(), h.label = 16;
              case 16:
                return [3, 18];
              case 17:
                if (p) throw p.error;
                return [7];
              case 18:
                return [7];
              case 19:
                return [2];
            }
          });
        });
      },
      e.prototype.doDecodeSync = function () {
        t: for (;;) {
          var t = this.readHeadByte(), n = void 0;
          if (t >= 224) n = t - 256;
          else if (t < 192) {
            if (t < 128) n = t;
            else if (t < 144) {
              var r = t - 128;
              if (r !== 0) {
                this.pushMapState(r), this.complete();
                continue t;
              } else n = {};
            } else if (t < 160) {
              var r = t - 144;
              if (r !== 0) {
                this.pushArrayState(r), this.complete();
                continue t;
              } else n = [];
            } else {
              var i = t - 160;
              n = this.decodeUtf8String(i, 0);
            }
          } else if (t === 192) n = null;
          else if (t === 194) n = !1;
          else if (t === 195) n = !0;
          else if (t === 202) n = this.readF32();
          else if (t === 203) n = this.readF64();
          else if (t === 204) n = this.readU8();
          else if (t === 205) n = this.readU16();
          else if (t === 206) n = this.readU32();
          else if (t === 207) n = this.readU64();
          else if (t === 208) n = this.readI8();
          else if (t === 209) n = this.readI16();
          else if (t === 210) n = this.readI32();
          else if (t === 211) n = this.readI64();
          else if (t === 217) {
            var i = this.lookU8();
            n = this.decodeUtf8String(i, 1);
          } else if (t === 218) {
            var i = this.lookU16();
            n = this.decodeUtf8String(i, 2);
          } else if (t === 219) {
            var i = this.lookU32();
            n = this.decodeUtf8String(i, 4);
          } else if (t === 220) {
            var r = this.readU16();
            if (r !== 0) {
              this.pushArrayState(r), this.complete();
              continue t;
            } else n = [];
          } else if (t === 221) {
            var r = this.readU32();
            if (r !== 0) {
              this.pushArrayState(r), this.complete();
              continue t;
            } else n = [];
          } else if (t === 222) {
            var r = this.readU16();
            if (r !== 0) {
              this.pushMapState(r), this.complete();
              continue t;
            } else n = {};
          } else if (t === 223) {
            var r = this.readU32();
            if (r !== 0) {
              this.pushMapState(r), this.complete();
              continue t;
            } else n = {};
          } else if (t === 196) {
            var r = this.lookU8();
            n = this.decodeBinary(r, 1);
          } else if (t === 197) {
            var r = this.lookU16();
            n = this.decodeBinary(r, 2);
          } else if (t === 198) {
            var r = this.lookU32();
            n = this.decodeBinary(r, 4);
          } else if (t === 212) n = this.decodeExtension(1, 0);
          else if (t === 213) n = this.decodeExtension(2, 0);
          else if (t === 214) n = this.decodeExtension(4, 0);
          else if (t === 215) n = this.decodeExtension(8, 0);
          else if (t === 216) n = this.decodeExtension(16, 0);
          else if (t === 199) {
            var r = this.lookU8();
            n = this.decodeExtension(r, 1);
          } else if (t === 200) {
            var r = this.lookU16();
            n = this.decodeExtension(r, 2);
          } else if (t === 201) {
            var r = this.lookU32();
            n = this.decodeExtension(r, 4);
          } else throw new g("Unrecognized type byte: ".concat(X(t)));
          this.complete();
          for (var o = this.stack; o.length > 0;) {
            var s = o[o.length - 1];
            if (s.type === 0) {
              if (
                s.array[s.position] = n, s.position++, s.position === s.size
              ) o.pop(), n = s.array;
              else continue t;
            } else if (s.type === 1) {
              if (!ie(n)) {
                throw new g(
                  "The type of key must be string or number but " + typeof n,
                );
              }
              if (n === "__proto__") {
                throw new g("The key __proto__ is not allowed");
              }
              s.key = n, s.type = 2;
              continue t;
            } else if (
              s.map[s.key] = n, s.readCount++, s.readCount === s.size
            ) o.pop(), n = s.map;
            else {
              s.key = null, s.type = 1;
              continue t;
            }
          }
          return n;
        }
      },
      e.prototype.readHeadByte = function () {
        return this.headByte === I && (this.headByte = this.readU8()),
          this.headByte;
      },
      e.prototype.complete = function () {
        this.headByte = I;
      },
      e.prototype.readArraySize = function () {
        var t = this.readHeadByte();
        switch (t) {
          case 220:
            return this.readU16();
          case 221:
            return this.readU32();
          default: {
            if (t < 160) return t - 144;
            throw new g("Unrecognized array type byte: ".concat(X(t)));
          }
        }
      },
      e.prototype.pushMapState = function (t) {
        if (t > this.maxMapLength) {
          throw new g(
            "Max length exceeded: map length (".concat(
              t,
              ") > maxMapLengthLength (",
            ).concat(this.maxMapLength, ")"),
          );
        }
        this.stack.push({ type: 1, size: t, key: null, readCount: 0, map: {} });
      },
      e.prototype.pushArrayState = function (t) {
        if (t > this.maxArrayLength) {
          throw new g(
            "Max length exceeded: array length (".concat(
              t,
              ") > maxArrayLength (",
            ).concat(this.maxArrayLength, ")"),
          );
        }
        this.stack.push({ type: 0, size: t, array: new Array(t), position: 0 });
      },
      e.prototype.decodeUtf8String = function (t, n) {
        var r;
        if (t > this.maxStrLength) {
          throw new g(
            "Max length exceeded: UTF-8 byte length (".concat(
              t,
              ") > maxStrLength (",
            ).concat(this.maxStrLength, ")"),
          );
        }
        if (this.bytes.byteLength < this.pos + n + t) throw ht;
        var i = this.pos + n, o;
        return this.stateIsMapKey() &&
            !((r = this.keyDecoder) === null || r === void 0) &&
            r.canBeCached(t)
          ? o = this.keyDecoder.decode(this.bytes, i, t)
          : t > zt
          ? o = Ot(this.bytes, i, t)
          : o = pt(this.bytes, i, t),
          this.pos += n + t,
          o;
      },
      e.prototype.stateIsMapKey = function () {
        if (this.stack.length > 0) {
          var t = this.stack[this.stack.length - 1];
          return t.type === 1;
        }
        return !1;
      },
      e.prototype.decodeBinary = function (t, n) {
        if (t > this.maxBinLength) {
          throw new g(
            "Max length exceeded: bin length (".concat(t, ") > maxBinLength (")
              .concat(this.maxBinLength, ")"),
          );
        }
        if (!this.hasRemaining(t + n)) throw ht;
        var r = this.pos + n, i = this.bytes.subarray(r, r + t);
        return this.pos += n + t, i;
      },
      e.prototype.decodeExtension = function (t, n) {
        if (t > this.maxExtLength) {
          throw new g(
            "Max length exceeded: ext length (".concat(t, ") > maxExtLength (")
              .concat(this.maxExtLength, ")"),
          );
        }
        var r = this.view.getInt8(this.pos + n),
          i = this.decodeBinary(t, n + 1);
        return this.extensionCodec.decode(i, r, this.context);
      },
      e.prototype.lookU8 = function () {
        return this.view.getUint8(this.pos);
      },
      e.prototype.lookU16 = function () {
        return this.view.getUint16(this.pos);
      },
      e.prototype.lookU32 = function () {
        return this.view.getUint32(this.pos);
      },
      e.prototype.readU8 = function () {
        var t = this.view.getUint8(this.pos);
        return this.pos++, t;
      },
      e.prototype.readI8 = function () {
        var t = this.view.getInt8(this.pos);
        return this.pos++, t;
      },
      e.prototype.readU16 = function () {
        var t = this.view.getUint16(this.pos);
        return this.pos += 2, t;
      },
      e.prototype.readI16 = function () {
        var t = this.view.getInt16(this.pos);
        return this.pos += 2, t;
      },
      e.prototype.readU32 = function () {
        var t = this.view.getUint32(this.pos);
        return this.pos += 4, t;
      },
      e.prototype.readI32 = function () {
        var t = this.view.getInt32(this.pos);
        return this.pos += 4, t;
      },
      e.prototype.readU64 = function () {
        var t = Tt(this.view, this.pos);
        return this.pos += 8, t;
      },
      e.prototype.readI64 = function () {
        var t = lt(this.view, this.pos);
        return this.pos += 8, t;
      },
      e.prototype.readF32 = function () {
        var t = this.view.getFloat32(this.pos);
        return this.pos += 4, t;
      },
      e.prototype.readF64 = function () {
        var t = this.view.getFloat64(this.pos);
        return this.pos += 8, t;
      },
      e;
  }(),
  ae = {};
function wt(e, t) {
  t === void 0 && (t = ae);
  var n = new ce(
    t.extensionCodec,
    t.context,
    t.maxStrLength,
    t.maxBinLength,
    t.maxArrayLength,
    t.maxMapLength,
    t.maxExtLength,
  );
  return n.decode(e);
}
await rt();
function Ee() {
  if (typeof Deno < "u") return null;
  if (typeof crypto > "u") return "crypto";
  let { subtle: e } = crypto;
  return e
    ? e.generateKey
      ? e.encrypt
        ? e.decrypt
          ? e.wrapKey
            ? e.unwrapKey
              ? e.importKey
                ? e.exportKey
                  ? crypto.getRandomValues ? null : "crypto.getRandomValues"
                  : "crypto.subtle.exportKey"
                : "crypto.subtle.importKey"
              : "crypto.subtle.unwrapKey"
            : "crypto.subtle.wrapKey"
          : "crypto.subtle.decrypt"
        : "crypto.subtle.encrypt"
      : "crypto.subtle.generateKey"
    : "crypto.subtle";
}
var P = globalThis.crypto?.subtle;
async function Be(e, t, n) {
  let [r, i] = await V(e, t),
    o = $(r),
    s = $(i),
    c = await P.importKey("raw", s, "AES-CBC", !0, ["encrypt"]),
    u = crypto.getRandomValues(new Uint8Array(16)),
    a = new Uint8Array(await he(c, u, n));
  return yt({ ct: o, iv: u, encrypted: a });
}
async function Te(e, t) {
  let { ct: n, iv: r, encrypted: i } = wt(t),
    o = await N(e, n),
    s = await P.importKey("raw", o, "AES-CBC", !0, ["decrypt"]);
  return fe(s, r, i);
}
function he(e, t, n) {
  return P.encrypt({ name: "AES-CBC", iv: t }, e, n);
}
function fe(e, t, n) {
  return P.decrypt({ name: "AES-CBC", iv: t }, e, n);
}
export { Be as encrypt, Ee as missingFeature, Te as decrypt };
//# sourceMappingURL=mod.js.map
