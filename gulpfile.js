var gulp=require("gulp");
var $=require("gulp-load-plugins")();


var app={
	src:"src/",
	bulid:"bulid/",
	dist:"dist/"
};

gulp.task("depend",function(){
	gulp.src("bower_components/**/*.js")
	.pipe(gulp.dest(app.bulid+"depend"))
	.pipe(gulp.dest(app.dist+"depend"));

})

gulp.task("html",function(){
	gulp.src(app.src+"**/*.html")
	.pipe(gulp.dest(app.bulid))
	.pipe(gulp.dest(app.dist));

})

gulp.task("less",function(){
	gulp.src(app.src+"less/index.less")
	.pipe($.less())//编译
	.pipe(gulp.dest(app.bulid+"css"))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.dist+"css"));

})

gulp.task("js",function(){
	gulp.src(app.src+"js/**/*.js")
	.pipe($.concat("index.js"))
	.pipe(gulp.dest(app.bulid+"js"))
	.pipe($.uglify())
	.pipe(gulp.dest(app.dist+"js"));

})

gulp.task("img",function(){
	gulp.src(app.src+"img/**/*")
	.pipe(gulp.dest(app.bulid+"img"))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.dist+"img"));

})

gulp.task("clean",function(){
	gulp.src([app.bulid,app.dist])
	.pipe($.clean());
})

gulp.task("data",function(){
	gulp.src(app.src+"data/**/*")
	.pipe(gulp.dest(app.bulid+"data"))
	.pipe(gulp.dest(app.dist+"data"));

})

gulp.task("bulid",["depend","html","less","js","img","data"])

gulp.watch("bower_components/**/*.js",["depend"]);
gulp.watch(app.src+"data/**/*",["data"]);
gulp.watch(app.src+"**/*.html",["html"]);
gulp.watch(app.src+"less/**/*.less",["less"]);
gulp.watch(app.src+"js/**/*.js",["js"]);
gulp.watch(app.src+"img/**/*",["img"]);

gulp.task("default",["bulid"]);


