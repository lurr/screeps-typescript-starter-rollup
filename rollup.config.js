"use strict";

import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

let tsconfig = require("./tsconfig.json").compilerOptions;

// In Screeps, require works different and expects actual code
// This "plugin" merely prepends "module.exports = " to the source map so that it can be loaded in Screeps properly
function exportSourceMaps() {
	return {
		name: "export-source-maps",
		ongenerate: function(options, bundle) {
			let oldToString = bundle.map.toString;
			bundle.map.toString = function() {
				console.log("Adding module export to source map");
				return "module.exports = " + oldToString.apply(this, arguments);
			}
		}
	};
}

delete tsconfig.module;
tsconfig.typescript = require("typescript");

export default {
	entry: "src/Main.ts",
	dest: "dist/main.js",
	format: "cjs",
	sourceMap: true,

	plugins: [
		resolve(),
		commonjs(),
		typescript(tsconfig),
		exportSourceMaps()
	]
}
