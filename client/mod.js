// lib/rs_lib.generated.js
var wasm;
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
var cachedTextDecoder = new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachedUint8Memory0 = new Uint8Array();
function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
var WASM_VECTOR_LEN = 0;
var cachedTextEncoder = new TextEncoder("utf-8");
var encodeString = function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
var cachedInt32Memory0 = new Int32Array();
function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
function setup() {
  const ret = wasm.setup();
  return takeObject(ret);
}
function extract_usk(sk, id) {
  const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.extract_usk(addHeapObject(sk), ptr0, len0);
  return takeObject(ret);
}
function encaps(pk, id) {
  const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.encaps(addHeapObject(pk), ptr0, len0);
  return takeObject(ret);
}
function decaps(usk, ct) {
  const ret = wasm.decaps(addHeapObject(usk), addHeapObject(ct));
  return takeObject(ret);
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
var imports = {
  __wbindgen_placeholder__: {
    __wbindgen_object_drop_ref: function(arg0) {
      takeObject(arg0);
    },
    __wbindgen_object_clone_ref: function(arg0) {
      const ret = getObject(arg0);
      return addHeapObject(ret);
    },
    __wbindgen_string_new: function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return addHeapObject(ret);
    },
    __wbg_randomFillSync_6894564c2c334c42: function() {
      return handleError(function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_getRandomValues_805f1c3d65988a5a: function() {
      return handleError(function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
      }, arguments);
    },
    __wbg_crypto_e1d53a1d73fb10b8: function(arg0) {
      const ret = getObject(arg0).crypto;
      return addHeapObject(ret);
    },
    __wbindgen_is_object: function(arg0) {
      const val = getObject(arg0);
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg_process_038c26bf42b093f8: function(arg0) {
      const ret = getObject(arg0).process;
      return addHeapObject(ret);
    },
    __wbg_versions_ab37218d2f0b24a8: function(arg0) {
      const ret = getObject(arg0).versions;
      return addHeapObject(ret);
    },
    __wbg_node_080f4b19d15bc1fe: function(arg0) {
      const ret = getObject(arg0).node;
      return addHeapObject(ret);
    },
    __wbindgen_is_string: function(arg0) {
      const ret = typeof getObject(arg0) === "string";
      return ret;
    },
    __wbg_msCrypto_6e7d3e1f92610cbb: function(arg0) {
      const ret = getObject(arg0).msCrypto;
      return addHeapObject(ret);
    },
    __wbg_require_78a3dcfbdba9cbce: function() {
      return handleError(function() {
        const ret = module.require;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbindgen_is_function: function(arg0) {
      const ret = typeof getObject(arg0) === "function";
      return ret;
    },
    __wbg_new_1d9a920c6bfc44a8: function() {
      const ret = new Array();
      return addHeapObject(ret);
    },
    __wbg_newnoargs_b5b063fc6c2f0376: function(arg0, arg1) {
      const ret = new Function(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    },
    __wbg_call_97ae9d8645dc388b: function() {
      return handleError(function(arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_self_6d479506f72c6a71: function() {
      return handleError(function() {
        const ret = self.self;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_window_f2557cc78490aceb: function() {
      return handleError(function() {
        const ret = window.window;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_globalThis_7f206bda628d5286: function() {
      return handleError(function() {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_global_ba75c50d1cf384f4: function() {
      return handleError(function() {
        const ret = global.global;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbindgen_is_undefined: function(arg0) {
      const ret = getObject(arg0) === void 0;
      return ret;
    },
    __wbg_set_a68214f35c417fa9: function(arg0, arg1, arg2) {
      getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    },
    __wbg_call_168da88779e35f61: function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_buffer_3f3d764d4747d564: function(arg0) {
      const ret = getObject(arg0).buffer;
      return addHeapObject(ret);
    },
    __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: function(arg0, arg1, arg2) {
      const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
      return addHeapObject(ret);
    },
    __wbg_new_8c3f0052272a457a: function(arg0) {
      const ret = new Uint8Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbg_set_83db9690f9353e79: function(arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbg_length_9e1ae1900cb0fbd5: function(arg0) {
      const ret = getObject(arg0).length;
      return ret;
    },
    __wbg_newwithlength_f5933855e4f48a19: function(arg0) {
      const ret = new Uint8Array(arg0 >>> 0);
      return addHeapObject(ret);
    },
    __wbg_subarray_58ad4efbb5bcb886: function(arg0, arg1, arg2) {
      const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
      return addHeapObject(ret);
    },
    __wbindgen_debug_string: function(arg0, arg1) {
      const ret = debugString(getObject(arg1));
      const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    },
    __wbindgen_throw: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbindgen_memory: function() {
      const ret = wasm.memory;
      return addHeapObject(ret);
    }
  }
};
async function instantiate(opts) {
  return (await instantiateWithInstance(opts)).exports;
}
var instanceWithExports;
var lastLoadPromise;
function instantiateWithInstance(opts) {
  if (instanceWithExports != null) {
    return Promise.resolve(instanceWithExports);
  }
  if (lastLoadPromise == null) {
    lastLoadPromise = (async () => {
      try {
        const instance = (await instantiateModule(opts ?? {})).instance;
        wasm = instance.exports;
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        instanceWithExports = {
          instance,
          exports: getWasmInstanceExports()
        };
        return instanceWithExports;
      } finally {
        lastLoadPromise = null;
      }
    })();
  }
  return lastLoadPromise;
}
function getWasmInstanceExports() {
  return {
    setup,
    extract_usk,
    encaps,
    decaps
  };
}
async function instantiateModule(opts) {
  const wasmUrl = opts.url ?? new URL("rs_lib_bg.wasm", import.meta.url);
  const decompress = opts.decompress;
  const isFile = wasmUrl.protocol === "file:";
  const isNode = globalThis.process?.versions?.node != null;
  if (isNode && isFile) {
    const wasmCode = await Deno.readFile(wasmUrl);
    return WebAssembly.instantiate(decompress ? decompress(wasmCode) : wasmCode, imports);
  }
  switch (wasmUrl.protocol) {
    case "file:":
    case "https:":
    case "http:": {
      if (isFile) {
        if (typeof Deno !== "object") {
          throw new Error("file urls are not supported in this environment");
        }
        if ("permissions" in Deno) {
          await Deno.permissions.request({
            name: "read",
            path: wasmUrl
          });
        }
      } else if (typeof Deno === "object" && "permissions" in Deno) {
        await Deno.permissions.request({
          name: "net",
          host: wasmUrl.host
        });
      }
      const wasmResponse = await fetch(wasmUrl);
      if (decompress) {
        const wasmCode = new Uint8Array(await wasmResponse.arrayBuffer());
        return WebAssembly.instantiate(decompress(wasmCode), imports);
      }
      if (isFile || wasmResponse.headers.get("content-type")?.toLowerCase().startsWith("application/wasm")) {
        return WebAssembly.instantiateStreaming(wasmResponse, imports);
      } else {
        return WebAssembly.instantiate(await wasmResponse.arrayBuffer(), imports);
      }
    }
    default:
      throw new Error(`Unsupported protocol: ${wasmUrl.protocol}`);
  }
}

// deno:https://jsr.io/@std/encoding/1.0.10/_common64.ts
var padding = "=".charCodeAt(0);
var alphabet = {
  base64: new TextEncoder().encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
  base64url: new TextEncoder().encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")
};
var rAlphabet = {
  base64: new Uint8Array(128).fill(64),
  base64url: new Uint8Array(128).fill(64)
};
alphabet.base64.forEach((byte, i) => rAlphabet.base64[byte] = i);
alphabet.base64url.forEach((byte, i) => rAlphabet.base64url[byte] = i);
function decode(buffer, i, o, alphabet3, padding3) {
  for (let x = buffer.length - 2; x < buffer.length; ++x) {
    if (buffer[x] === padding3) {
      for (let y = x + 1; y < buffer.length; ++y) {
        if (buffer[y] !== padding3) {
          throw new TypeError(`Cannot decode input as base64: Invalid character (${String.fromCharCode(buffer[y])})`);
        }
      }
      buffer = buffer.subarray(0, x);
      break;
    }
  }
  if ((buffer.length - o) % 4 === 1) {
    throw new RangeError(`Cannot decode input as base64: Length (${buffer.length - o}), excluding padding, must not have a remainder of 1 when divided by 4`);
  }
  i += 3;
  for (; i < buffer.length; i += 4) {
    const x = getByte(buffer[i - 3], alphabet3) << 18 | getByte(buffer[i - 2], alphabet3) << 12 | getByte(buffer[i - 1], alphabet3) << 6 | getByte(buffer[i], alphabet3);
    buffer[o++] = x >> 16;
    buffer[o++] = x >> 8 & 255;
    buffer[o++] = x & 255;
  }
  switch (i) {
    case buffer.length + 1: {
      const x = getByte(buffer[i - 3], alphabet3) << 18 | getByte(buffer[i - 2], alphabet3) << 12;
      buffer[o++] = x >> 16;
      break;
    }
    case buffer.length: {
      const x = getByte(buffer[i - 3], alphabet3) << 18 | getByte(buffer[i - 2], alphabet3) << 12 | getByte(buffer[i - 1], alphabet3) << 6;
      buffer[o++] = x >> 16;
      buffer[o++] = x >> 8 & 255;
      break;
    }
  }
  return o;
}
function getByte(char, alphabet3) {
  const byte = alphabet3[char] ?? 64;
  if (byte === 64) {
    throw new TypeError(`Cannot decode input as base64: Invalid character (${String.fromCharCode(char)})`);
  }
  return byte;
}

// deno:https://jsr.io/@std/encoding/1.0.10/base64.ts
var padding2 = "=".charCodeAt(0);
var alphabet2 = new TextEncoder().encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
var rAlphabet2 = new Uint8Array(128).fill(64);
alphabet2.forEach((byte, i) => rAlphabet2[byte] = i);
function decodeBase64(b64) {
  const output = new TextEncoder().encode(b64);
  return new Uint8Array(output.buffer.transfer(decode(output, 0, 0, rAlphabet2, padding2)));
}

// deno:https://jsr.io/@std/msgpack/1.0.3/decode.ts
function decode2(data) {
  const pointer = {
    consumed: 0
  };
  const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const value = decodeSlice(data, dataView, pointer);
  if (pointer.consumed < data.length) {
    throw new EvalError("Messagepack decode did not consume whole array");
  }
  return value;
}
function decodeString(uint8, size, pointer) {
  pointer.consumed += size;
  const u8 = uint8.subarray(pointer.consumed - size, pointer.consumed);
  if (u8.length !== size) {
    throw new EvalError("Messagepack decode reached end of array prematurely");
  }
  return decoder.decode(u8);
}
function decodeArray(uint8, dataView, size, pointer) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    const value = decodeSlice(uint8, dataView, pointer);
    arr.push(value);
  }
  return arr;
}
function decodeMap(uint8, dataView, size, pointer) {
  const map = {};
  for (let i = 0; i < size; i++) {
    const key = decodeSlice(uint8, dataView, pointer);
    const value = decodeSlice(uint8, dataView, pointer);
    if (typeof key !== "number" && typeof key !== "string") {
      throw new EvalError("Cannot decode a key of a map: The type of key is invalid, keys must be a number or a string");
    }
    map[key] = value;
  }
  return map;
}
var decoder = new TextDecoder();
var FIXMAP_BITS = 128;
var FIXMAP_MASK = 240;
var FIXARRAY_BITS = 144;
var FIXARRAY_MASK = 240;
var FIXSTR_BITS = 160;
var FIXSTR_MASK = 224;
function decodeSlice(uint8, dataView, pointer) {
  if (pointer.consumed >= uint8.length) {
    throw new EvalError("Messagepack decode reached end of array prematurely");
  }
  const type = dataView.getUint8(pointer.consumed);
  pointer.consumed++;
  if (type <= 127) {
    return type;
  }
  if ((type & FIXMAP_MASK) === FIXMAP_BITS) {
    const size = type & ~FIXMAP_MASK;
    return decodeMap(uint8, dataView, size, pointer);
  }
  if ((type & FIXARRAY_MASK) === FIXARRAY_BITS) {
    const size = type & ~FIXARRAY_MASK;
    return decodeArray(uint8, dataView, size, pointer);
  }
  if ((type & FIXSTR_MASK) === FIXSTR_BITS) {
    const size = type & ~FIXSTR_MASK;
    return decodeString(uint8, size, pointer);
  }
  if (type >= 224) {
    return type - 256;
  }
  switch (type) {
    case 192:
      return null;
    case 193:
      throw new Error("Messagepack decode encountered a type that is never used");
    case 194:
      return false;
    case 195:
      return true;
    case 196: {
      if (pointer.consumed >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint8(pointer.consumed);
      pointer.consumed++;
      const u8 = uint8.subarray(pointer.consumed, pointer.consumed + length);
      if (u8.length !== length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      pointer.consumed += length;
      return u8;
    }
    case 197: {
      if (pointer.consumed + 1 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint16(pointer.consumed);
      pointer.consumed += 2;
      const u8 = uint8.subarray(pointer.consumed, pointer.consumed + length);
      if (u8.length !== length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      pointer.consumed += length;
      return u8;
    }
    case 198: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint32(pointer.consumed);
      pointer.consumed += 4;
      const u8 = uint8.subarray(pointer.consumed, pointer.consumed + length);
      if (u8.length !== length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      pointer.consumed += length;
      return u8;
    }
    case 199:
    case 200:
    case 201:
      throw new Error("Cannot decode a slice: Large extension type 'ext' not implemented yet");
    case 202: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getFloat32(pointer.consumed);
      pointer.consumed += 4;
      return value;
    }
    case 203: {
      if (pointer.consumed + 7 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getFloat64(pointer.consumed);
      pointer.consumed += 8;
      return value;
    }
    case 204: {
      if (pointer.consumed >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getUint8(pointer.consumed);
      pointer.consumed += 1;
      return value;
    }
    case 205: {
      if (pointer.consumed + 1 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getUint16(pointer.consumed);
      pointer.consumed += 2;
      return value;
    }
    case 206: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getUint32(pointer.consumed);
      pointer.consumed += 4;
      return value;
    }
    case 207: {
      if (pointer.consumed + 7 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getBigUint64(pointer.consumed);
      pointer.consumed += 8;
      return value;
    }
    case 208: {
      if (pointer.consumed >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getInt8(pointer.consumed);
      pointer.consumed += 1;
      return value;
    }
    case 209: {
      if (pointer.consumed + 1 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getInt16(pointer.consumed);
      pointer.consumed += 2;
      return value;
    }
    case 210: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getInt32(pointer.consumed);
      pointer.consumed += 4;
      return value;
    }
    case 211: {
      if (pointer.consumed + 7 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const value = dataView.getBigInt64(pointer.consumed);
      pointer.consumed += 8;
      return value;
    }
    case 212:
    case 213:
    case 214:
    case 215:
    case 216:
      throw new Error("Cannot decode a slice: 'fixext' not implemented yet");
    case 217: {
      if (pointer.consumed >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint8(pointer.consumed);
      pointer.consumed += 1;
      return decodeString(uint8, length, pointer);
    }
    case 218: {
      if (pointer.consumed + 1 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint16(pointer.consumed);
      pointer.consumed += 2;
      return decodeString(uint8, length, pointer);
    }
    case 219: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint32(pointer.consumed);
      pointer.consumed += 4;
      return decodeString(uint8, length, pointer);
    }
    case 220: {
      if (pointer.consumed + 1 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint16(pointer.consumed);
      pointer.consumed += 2;
      return decodeArray(uint8, dataView, length, pointer);
    }
    case 221: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint32(pointer.consumed);
      pointer.consumed += 4;
      return decodeArray(uint8, dataView, length, pointer);
    }
    case 222: {
      if (pointer.consumed + 1 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint16(pointer.consumed);
      pointer.consumed += 2;
      return decodeMap(uint8, dataView, length, pointer);
    }
    case 223: {
      if (pointer.consumed + 3 >= uint8.length) {
        throw new EvalError("Messagepack decode reached end of array prematurely");
      }
      const length = dataView.getUint32(pointer.consumed);
      pointer.consumed += 4;
      return decodeMap(uint8, dataView, length, pointer);
    }
  }
  throw new Error("Unreachable");
}

// deno:https://jsr.io/@std/bytes/1.0.6/concat.ts
function concat(buffers) {
  let length = 0;
  for (const buffer of buffers) {
    length += buffer.length;
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const buffer of buffers) {
    output.set(buffer, index);
    index += buffer.length;
  }
  return output;
}

// deno:https://jsr.io/@std/msgpack/1.0.3/encode.ts
var FOUR_BITS = 16;
var FIVE_BITS = 32;
var SEVEN_BITS = 128;
var EIGHT_BITS = 256;
var FIFTEEN_BITS = 32768;
var SIXTEEN_BITS = 65536;
var THIRTY_ONE_BITS = 2147483648;
var THIRTY_TWO_BITS = 4294967296;
var SIXTY_THREE_BITS = 9223372036854775808n;
var SIXTY_FOUR_BITS = 18446744073709551616n;
var encoder = new TextEncoder();
function encode2(object) {
  const byteParts = [];
  encodeSlice(object, byteParts);
  return concat(byteParts);
}
function encodeFloat64(num) {
  const dataView = new DataView(new ArrayBuffer(9));
  dataView.setFloat64(1, num);
  dataView.setUint8(0, 203);
  return new Uint8Array(dataView.buffer);
}
function encodeNumber(num) {
  if (!Number.isInteger(num)) {
    return encodeFloat64(num);
  }
  if (num < 0) {
    if (num >= -FIVE_BITS) {
      return new Uint8Array([
        num
      ]);
    }
    if (num >= -SEVEN_BITS) {
      return new Uint8Array([
        208,
        num
      ]);
    }
    if (num >= -FIFTEEN_BITS) {
      const dataView = new DataView(new ArrayBuffer(3));
      dataView.setInt16(1, num);
      dataView.setUint8(0, 209);
      return new Uint8Array(dataView.buffer);
    }
    if (num >= -THIRTY_ONE_BITS) {
      const dataView = new DataView(new ArrayBuffer(5));
      dataView.setInt32(1, num);
      dataView.setUint8(0, 210);
      return new Uint8Array(dataView.buffer);
    }
    return encodeFloat64(num);
  }
  if (num <= 127) {
    return new Uint8Array([
      num
    ]);
  }
  if (num < EIGHT_BITS) {
    return new Uint8Array([
      204,
      num
    ]);
  }
  if (num < SIXTEEN_BITS) {
    const dataView = new DataView(new ArrayBuffer(3));
    dataView.setUint16(1, num);
    dataView.setUint8(0, 205);
    return new Uint8Array(dataView.buffer);
  }
  if (num < THIRTY_TWO_BITS) {
    const dataView = new DataView(new ArrayBuffer(5));
    dataView.setUint32(1, num);
    dataView.setUint8(0, 206);
    return new Uint8Array(dataView.buffer);
  }
  return encodeFloat64(num);
}
function encodeSlice(object, byteParts) {
  if (object === null) {
    byteParts.push(new Uint8Array([
      192
    ]));
    return;
  }
  if (object === false) {
    byteParts.push(new Uint8Array([
      194
    ]));
    return;
  }
  if (object === true) {
    byteParts.push(new Uint8Array([
      195
    ]));
    return;
  }
  if (typeof object === "number") {
    byteParts.push(encodeNumber(object));
    return;
  }
  if (typeof object === "bigint") {
    if (object < 0) {
      if (object < -SIXTY_THREE_BITS) {
        throw new Error("Cannot safely encode bigint larger than 64 bits");
      }
      const dataView2 = new DataView(new ArrayBuffer(9));
      dataView2.setBigInt64(1, object);
      dataView2.setUint8(0, 211);
      byteParts.push(new Uint8Array(dataView2.buffer));
      return;
    }
    if (object >= SIXTY_FOUR_BITS) {
      throw new Error("Cannot safely encode bigint larger than 64 bits");
    }
    const dataView = new DataView(new ArrayBuffer(9));
    dataView.setBigUint64(1, object);
    dataView.setUint8(0, 207);
    byteParts.push(new Uint8Array(dataView.buffer));
    return;
  }
  if (typeof object === "string") {
    const encoded = encoder.encode(object);
    const len = encoded.length;
    if (len < FIVE_BITS) {
      byteParts.push(new Uint8Array([
        160 | len
      ]));
    } else if (len < EIGHT_BITS) {
      byteParts.push(new Uint8Array([
        217,
        len
      ]));
    } else if (len < SIXTEEN_BITS) {
      const dataView = new DataView(new ArrayBuffer(3));
      dataView.setUint16(1, len);
      dataView.setUint8(0, 218);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else if (len < THIRTY_TWO_BITS) {
      const dataView = new DataView(new ArrayBuffer(5));
      dataView.setUint32(1, len);
      dataView.setUint8(0, 219);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else {
      throw new Error("Cannot safely encode string with size larger than 32 bits");
    }
    byteParts.push(encoded);
    return;
  }
  if (object instanceof Uint8Array) {
    if (object.length < EIGHT_BITS) {
      byteParts.push(new Uint8Array([
        196,
        object.length
      ]));
    } else if (object.length < SIXTEEN_BITS) {
      const dataView = new DataView(new ArrayBuffer(3));
      dataView.setUint16(1, object.length);
      dataView.setUint8(0, 197);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else if (object.length < THIRTY_TWO_BITS) {
      const dataView = new DataView(new ArrayBuffer(5));
      dataView.setUint32(1, object.length);
      dataView.setUint8(0, 198);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else {
      throw new Error("Cannot safely encode Uint8Array with size larger than 32 bits");
    }
    byteParts.push(object);
    return;
  }
  if (Array.isArray(object)) {
    if (object.length < FOUR_BITS) {
      byteParts.push(new Uint8Array([
        144 | object.length
      ]));
    } else if (object.length < SIXTEEN_BITS) {
      const dataView = new DataView(new ArrayBuffer(3));
      dataView.setUint16(1, object.length);
      dataView.setUint8(0, 220);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else if (object.length < THIRTY_TWO_BITS) {
      const dataView = new DataView(new ArrayBuffer(5));
      dataView.setUint32(1, object.length);
      dataView.setUint8(0, 221);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else {
      throw new Error("Cannot safely encode array with size larger than 32 bits");
    }
    for (const obj of object) {
      encodeSlice(obj, byteParts);
    }
    return;
  }
  const prototype = Object.getPrototypeOf(object);
  if (prototype === null || prototype === Object.prototype) {
    const numKeys = Object.keys(object).length;
    if (numKeys < FOUR_BITS) {
      byteParts.push(new Uint8Array([
        128 | numKeys
      ]));
    } else if (numKeys < SIXTEEN_BITS) {
      const dataView = new DataView(new ArrayBuffer(3));
      dataView.setUint16(1, numKeys);
      dataView.setUint8(0, 222);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else if (numKeys < THIRTY_TWO_BITS) {
      const dataView = new DataView(new ArrayBuffer(5));
      dataView.setUint32(1, numKeys);
      dataView.setUint8(0, 223);
      byteParts.push(new Uint8Array(dataView.buffer));
    } else {
      throw new Error("Cannot safely encode map with size larger than 32 bits");
    }
    for (const [key, value] of Object.entries(object)) {
      encodeSlice(key, byteParts);
      encodeSlice(value, byteParts);
    }
    return;
  }
  throw new Error("Cannot safely encode value into messagepack");
}

// client/mod.ts
await instantiate();
function missingFeature() {
  if (typeof Deno != "undefined") return null;
  if (typeof crypto == "undefined") return "crypto";
  const { subtle: subtle2 } = crypto;
  if (!subtle2) return "crypto.subtle";
  if (!subtle2.generateKey) return "crypto.subtle.generateKey";
  if (!subtle2.encrypt) return "crypto.subtle.encrypt";
  if (!subtle2.decrypt) return "crypto.subtle.decrypt";
  if (!subtle2.wrapKey) return "crypto.subtle.wrapKey";
  if (!subtle2.unwrapKey) return "crypto.subtle.unwrapKey";
  if (!subtle2.importKey) return "crypto.subtle.importKey";
  if (!subtle2.exportKey) return "crypto.subtle.exportKey";
  if (!crypto.getRandomValues) return "crypto.getRandomValues";
  return null;
}
var subtle = globalThis.crypto?.subtle;
async function encrypt(mpk, id, plain) {
  const [ct_, ss_] = await encaps(mpk, id);
  const ct = decodeBase64(ct_);
  const ss = decodeBase64(ss_);
  const aeskey = await subtle.importKey("raw", ss, "AES-CBC", true, [
    "encrypt"
  ]);
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const encrypted = new Uint8Array(await aesEncrypt(aeskey, iv, plain));
  return encode2({
    ct,
    iv,
    encrypted
  });
}
async function decrypt(usk, enc) {
  const { ct, iv, encrypted } = decode2(enc);
  const ss = await decaps(usk, ct);
  const aeskey = await subtle.importKey("raw", ss, "AES-CBC", true, [
    "decrypt"
  ]);
  return aesDecrypt(aeskey, iv, encrypted);
}
function aesEncrypt(key, iv, plain) {
  return subtle.encrypt({
    name: "AES-CBC",
    iv
  }, key, plain);
}
function aesDecrypt(key, iv, encrypted) {
  return subtle.decrypt({
    name: "AES-CBC",
    iv
  }, key, encrypted);
}
export {
  decrypt,
  encrypt,
  missingFeature
};
//# sourceMappingURL=mod.js.map
