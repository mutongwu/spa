define('comp/app', function(require, exports, module) {

  
  function initPage(mod){
      if (typeof mod.html === 'string'){
          $('#contentBox').html(mod.html);
      }
  }
  
  exports.initPage = initPage;

});