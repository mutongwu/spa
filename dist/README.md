## use-mod.js

- framework `mod.js`
- fis3 plugin
    - fis3-hook-commonjs 本地解析替换路径，为合并做准备
    - fis3-postpackager-loader 解析 fis3 的 {
    "res": {
        "comp/app.js": {
            "uri": "/fis3-mod/dist/comp/app_43f6b43.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/app"
            }
        },
        "lib/bootstrap-3.3.5/css/bootstrap.min.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap.min_8c9957d.css",
            "type": "css",
            "pkg": "p0"
        },
        "lib/jquery.min.js": {
            "uri": "/fis3-mod/dist/lib/jquery.min_0886ab3.js",
            "type": "js",
            "pkg": "p1"
        },
        "lib/bootstrap-3.3.5/js/bootstrap.min.js": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/js/bootstrap.min_1ce1e48.js",
            "type": "js",
            "pkg": "p1"
        },
        "lib/mod.js": {
            "uri": "/fis3-mod/dist/lib/mod_530c857.js",
            "type": "js",
            "pkg": "p1"
        },
        "lib/sammy.js": {
            "uri": "/fis3-mod/dist/lib/sammy_a7ad017.js",
            "type": "js",
            "pkg": "p1"
        },
        "page/index.js": {
            "uri": "/fis3-mod/dist/page/index_5675c46.js",
            "type": "js",
            "deps": [
                "comp/app.js",
                "page/main/main.js"
            ]
        },
        "lib/bootstrap-3.3.5/css/bootstrap-theme.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap-theme_335bea2.css",
            "type": "css",
            "extras": {},
            "pkg": "p0"
        },
        "lib/bootstrap-3.3.5/css/bootstrap-theme.min.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap-theme.min_bf3499d.css",
            "type": "css",
            "pkg": "p0"
        },
        "lib/bootstrap-3.3.5/css/bootstrap.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap_93fe3da.css",
            "type": "css",
            "extras": {},
            "pkg": "p0"
        },
        "lib/bootstrap-3.3.5/js/bootstrap.js": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/js/bootstrap_1ce1e48.js",
            "type": "js"
        },
        "lib/bootstrap-3.3.5/js/npm.js": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/js/npm_8c110a3.js",
            "type": "js",
            "deps": [
                "../../js/transition.js",
                "../../js/alert.js",
                "../../js/button.js",
                "../../js/carousel.js",
                "../../js/collapse.js",
                "../../js/dropdown.js",
                "../../js/modal.js",
                "../../js/tooltip.js",
                "../../js/popover.js",
                "../../js/scrollspy.js",
                "../../js/tab.js",
                "../../js/affix.js"
            ]
        },
        "page/brand/brand.js": {
            "uri": "/fis3-mod/dist/page/brand/brand_a14fe97.js",
            "type": "js",
            "extras": {
                "moduleId": "page/brand/brand"
            }
        },
        "page/brand/brand.scss": {
            "uri": "/fis3-mod/dist/page/brand/brand.css",
            "type": "css"
        },
        "page/main/main.js": {
            "uri": "/fis3-mod/dist/page/main/main_8c6e466.js",
            "type": "js",
            "extras": {
                "moduleId": "page/main/main"
            }
        },
        "page/main/main.scss": {
            "uri": "/fis3-mod/dist/page/main/main.css",
            "type": "css"
        },
        "page/product/product.js": {
            "uri": "/fis3-mod/dist/page/product/product_f0640a7.js",
            "type": "js",
            "extras": {
                "moduleId": "page/product/product"
            }
        },
        "page/product/product.scss": {
            "uri": "/fis3-mod/dist/page/product/product.css",
            "type": "css"
        },
        "page/profile/profile.js": {
            "uri": "/fis3-mod/dist/page/profile/profile_b1988e9.js",
            "type": "js",
            "extras": {
                "moduleId": "page/profile/profile"
            }
        },
        "page/profile/profile.scss": {
            "uri": "/fis3-mod/dist/page/profile/profile.css",
            "type": "css"
        }
    },
    "pkg": {
        "p0": {
            "uri": "/fis3-mod/dist/static/common_6d51a96.css",
            "type": "css",
            "has": [
                "lib/bootstrap-3.3.5/css/bootstrap.min.css",
                "lib/bootstrap-3.3.5/css/bootstrap-theme.css",
                "lib/bootstrap-3.3.5/css/bootstrap-theme.min.css",
                "lib/bootstrap-3.3.5/css/bootstrap.css"
            ]
        },
        "p1": {
            "uri": "/fis3-mod/dist/static/common_dbc1c33.js",
            "type": "js",
            "has": [
                "lib/jquery.min.js",
                "lib/mod.js",
                "lib/sammy.js",
                "lib/bootstrap-3.3.5/js/bootstrap.min.js"
            ]
        }
    }
} 来加载 js 组件
- command
    - fis3 release  组件分散预览
    - fis3 release prod 资源或者组件进行了合并处理


npm install -g fis3
npm install [-g] fis3-postpackager-loader
npm install [-g] fis3-hook-commonjs
npm install [-g] fis-parser-node-sass
npm install -g bower
bower install