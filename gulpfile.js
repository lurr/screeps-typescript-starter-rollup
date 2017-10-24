"use strict";

let gulp			= require("gulp"),
	shell			= require("gulp-shell"),
	screeps		= require("gulp-screeps"),
	del			= require("del");

gulp.task("clean", ()=>del(["dist/*"]));
	
gulp.task("build", ["clean"], shell.task("npm run build"));

gulp.task("push", ["clean", "build"], function() {
	gulp.src("./dist/**/*").pipe(screeps(require("./screeps.js")));
});
