"use strict";

import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";

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
	input: "src/Main.ts",
	output: {
		format: "cjs",
		file: "dist/main.js"
	},
	sourcemap: true,

	plugins: [
		resolve(),
		commonjs(),
		replace({
			delimiters: ['__', '__'],
			values: {
				PROFILER_ENABLED: "true"
			}
		}),
		typescript(tsconfig),
		exportSourceMaps()
	]
}
