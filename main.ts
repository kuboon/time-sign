// 1.Wasmをロード
const wasmCode = await Deno.readFile("./ibe-wasm/target/wasm32-unknown-unknown/debug/ibe_wasm.wasm");
// 2.ロードしたファイルからWasmモジュールを作成
const wasmModule = new WebAssembly.Module(wasmCode);
// 3.関数を使用できるようモジュールのインスタンスを作成
const wasmInstance = new WebAssembly.Instance(wasmModule);

const { square } = wasmInstance.exports;

console.log(square(1)); // 1
console.log(square(2)); // 4
console.log(square(3)); // 9
console.log(square(4)); // 16
