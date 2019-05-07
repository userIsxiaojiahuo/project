let gulp = require('gulp');//等价于HTML代码：<script src='gulp.js'>
//合并
// let concat = require('gulp-concat');
//压缩js
// let uglify = require('gulp-uglify');
//重命名
// let rename = require('gulp-rename');
//压缩css
// let minfyCss = require('gulp-minify-css');
//图片
// let imagemin = require('gulp-imagemin');
//sass
// let sass = require('gulp-sass');

//这个任务：把当前目录下的index.html文件拷贝到服务器目录
// gulp.task("copy-html", async () => {
//     gulp.src("html/*.html").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear"));
// });
// gulp.task("copy-css", async ()=>{
// 	gulp.src("css/*.css").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\css"));
// });
// gulp.task("copy-js", async ()=>{
//     gulp.src("js/*.js").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\js"));
// });
// gulp.task("copy-img", async ()=>{
// 	gulp.src("img/index/imgs/*.{jpg,png,jpeg}").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\img\\index\\imgs"));
// });
// gulp.task("copy-php", async ()=>{
// 	gulp.src("php/*.php").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\php"));
// });
//建立一个监听的任务
gulp.task("watchall", async () => {
    gulp.watch("html/*.html", async () => {
        gulp.src("html/*.html").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\html"));
    });
    gulp.watch("css/*.css", async () => {
        gulp.src("css/*.css").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\css"));
    });
    gulp.watch("php/*.php", async () => {
        gulp.src("php/*.php").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\php"));
    });
    gulp.watch("img/**/*", async () => {
        gulp.src("img/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\img"));
    });
    gulp.watch(["js/*.js"], async () => {
        gulp.src("js/*.js")
        // .pipe(uglify())
            .pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\js"));
    });
    // gulp.watch("css/*.css", async () => {
    //     gulp.src("css/*.css")
    //         .pipe(minfyCss())
    //         .pipe(gulp.dest("E:\\phpStudy\\WWW\\womenswear\\css"));
    // });
// 	gulp.watch("sass/**/*.scss",async ()=>{
// 		gulp.src("sass/**/*.scss")
// 		.pipe(sass())
// 		.pipe(gulp.dest("E:\\phpStudy\\WWW\\oppo\\css"));
// 	});
});