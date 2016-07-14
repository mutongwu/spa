require.resourceMap(__RESOURCE_MAP__);

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
    var appMod = require('../comp/app.js');

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
    require('./main/main.js')
    app.run('#/main');
    // setTimeout(function(){
    //     console.log(hash)
    //      app.run(hash);
    // },2000);
});
