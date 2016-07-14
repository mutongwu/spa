
fis.set('project.ignore', ['bower_components/**','node_modules/**','fis-conf.js']);

// npm install [-g] fis3-hook-commonjs
fis.hook('commonjs');

fis.match('/(comp/*).js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    // useMap: false //公共组件已经在页面引用，无需打包到map.js
});

fis.match('/(page/**/*).js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
});

// fis-parser-sass
fis.match('*.scss', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('node-sass', {
        //fis-parser-node-sass option
    })
});


fis.match('::package', {
//     // npm install [-g] fis3-postpackager-loader
//     // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
//         // resourceType: 'mod',
//         // sourceMap: false,
//         // include: '/comp/**/*.css',
//         // allInOne: true, // 基于页面的打包方式，即可对散列的引用链接进行合并，而不需要进行配置 packTo 指定合并包名.配合__RESOURCE_MAP__使用
//         // useInlineMap: false // 资源映射表内嵌
    })
})

fis.match('*.{js,css,scss,png,jpeg,jpg,eot,svg,ttf,woff,woff2}',{
    domain: '/fis3-mod/dist'
});

// fis.match('/page/*/*.html', {
//     useSameNameRequire: true
// });



fis.match('/lib/{jquery\.min,mod,sammy}.js', {
        packTo: '/static/common.js',
        packOrder: -100 //打包顺序，值越小，越靠前
    }).match('/lib/**/*.min.js', {
        packTo: '/static/common.js'
    }).match('*.css', {
        packTo: '/static/common.css'
    });
    
// fis3 release prod 产品发布，进行合并
fis.media('prod').match('*.{js,css,png,jpeg,jpg,eot,svg,ttf,woff,woff2}',{
        domain: '/fis3-mod/dist',
        useHash: true
    }).match('*.js', {
        optimizer: fis.plugin('uglify-js',{
            mangle: {
                expect: ['require', 'define','jQuery'] //不想被压的
            }
        })
    }).match('*.scss', {
        optimizer: fis.plugin('clean-css', {
            // option of clean-css
        })
    });

