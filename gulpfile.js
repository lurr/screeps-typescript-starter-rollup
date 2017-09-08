"use strict";

let gulp      = require("gulp"),
	shell       = require("gulp-shell"),
	screeps     = require("gulp-screeps");

let screepsOptions = require("./screeps.js");

gulp.task("build", shell.task("npm run build"));

gulp.task("push", ["build"], function() {
	gulp.src("./dist/**/*").pipe(screeps(require("screeps.js")));
});
