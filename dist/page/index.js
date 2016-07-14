require.resourceMap({
    "res": {
        "comp/app.js": {
            "uri": "/fis3-mod/dist/comp/app.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/app"
            }
        },
        "lib/bootstrap-3.3.5/css/bootstrap-theme.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap-theme.css",
            "type": "css",
            "extras": {}
        },
        "lib/bootstrap-3.3.5/css/bootstrap-theme.min.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap-theme.min.css",
            "type": "css"
        },
        "lib/bootstrap-3.3.5/css/bootstrap.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap.css",
            "type": "css",
            "extras": {}
        },
        "lib/bootstrap-3.3.5/css/bootstrap.min.css": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/css/bootstrap.min.css",
            "type": "css"
        },
        "lib/bootstrap-3.3.5/js/bootstrap.js": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/js/bootstrap.js",
            "type": "js"
        },
        "lib/bootstrap-3.3.5/js/bootstrap.min.js": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/js/bootstrap.min.js",
            "type": "js"
        },
        "lib/bootstrap-3.3.5/js/npm.js": {
            "uri": "/fis3-mod/dist/lib/bootstrap-3.3.5/js/npm.js",
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
        "lib/jquery.min.js": {
            "uri": "/fis3-mod/dist/lib/jquery.min.js",
            "type": "js"
        },
        "lib/mod.js": {
            "uri": "/fis3-mod/dist/lib/mod.js",
            "type": "js"
        },
        "lib/sammy.js": {
            "uri": "/fis3-mod/dist/lib/sammy.js",
            "type": "js"
        },
        "page/brand/brand.js": {
            "uri": "/fis3-mod/dist/page/brand/brand.js",
            "type": "js",
            "extras": {
                "moduleId": "page/brand/brand"
            },
            "deps": [
                "page/brand/brand.scss"
            ]
        },
        "page/brand/brand.scss": {
            "uri": "/fis3-mod/dist/page/brand/brand.css",
            "type": "css"
        },
        "page/index.js": {
            "uri": "/fis3-mod/dist/page/index.js",
            "type": "js",
            "deps": [
                "comp/app.js",
                "page/main/main.js"
            ]
        },
        "page/main/main.js": {
            "uri": "/fis3-mod/dist/page/main/main.js",
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
            "uri": "/fis3-mod/dist/page/product/product.js",
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
            "uri": "/fis3-mod/dist/page/profile/profile.js",
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
    "pkg": {}
});

console.log('app.js');

var router = [
    {
        url: '#/main',
        modId: 'page/main/main'
    },{
        url: '#/profile',
        modId: 'page/profile/profile'
    },{
        url: '#/product',
        modId: 'page/product/product'
    },{
        url: '#/brand',
        modId: 'page/brand/brand'
    }
]
var app = Sammy(function() {
    var target = this;
    var appMod = require('comp/app');

    router.forEach(function(item){
        

        target.get(item.url,function(){
            require.async(item.modId,function(mod){
                console.log(item.modId);
                appMod.initPage(mod);

            });
        });
    });
    // this.before({except: {path: '#/main'}}, function() {
    //     console.log('gogo')
    //     app.run('#/main');
    // });
    // this.get('#/hello/:name/to/:friend', function(context) {
    //   // fetch mustache-partial first
    //   this.load('mypartial.ms')
    //       .then(function(partial) {
    //         // set local vars
    //         context.partials = {hello_friend: partial};
    //         context.name = context.params.name;
    //         context.friend = context.params.friend;

    //         // render the template and pass it through mustache
    //         context.partial('mytemplate.ms');
    //       });
    // });
});
$(function() {
    // var hash = location.hash;
    // if(hash)
    require('page/main/main')
    app.run('#/main');
    // setTimeout(function(){
    //     console.log(hash)
    //      app.run(hash);
    // },2000);
});
