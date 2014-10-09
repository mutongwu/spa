var sammyApp = $.sammy('#page-content',function(){
	this.get('#/',function(){
		this.partial('dwstatic/main.html');
	});
	
	this.get(/\#\/dwstatic\/(.*)/, function() {
		App.setParams(this.params);
		this.partial('dwstatic/' + this.params['splat'] + '.html');
	});
});

App = (function (){
	var leftNav = {
		init: function(){
			this.initEvent();
		},
		initEvent: function(){
			var $sideBar = $('#sidebar');
			
			$sideBar.find('.nav-list>li a').on('click',function(e){
				
				var liEl = $(this).closest('li');
				var subMenu = $(this).siblings('.submenu');
				var tmpMenu = null;
				if(subMenu.length){
					e.preventDefault();
					if(liEl.hasClass('open')){
						subMenu.slideUp('fast',function(){
							liEl.removeClass('open');
						});
					}else{
						tmpMenu = liEl.siblings('li.open').not('.active').find('.submenu');
						if(tmpMenu.length){
							tmpMenu.slideUp('fast',function(){
								$(this).closest('li').removeClass('open');
							});
						}
						subMenu.slideDown('fast');
						liEl.addClass('open');
					}
				}else{
				
					$sideBar.find('li').not(liEl).removeClass('active');
					
					liEl.add(liEl.parents('li')).addClass('active').siblings('li').removeClass('active').find('.submenu').slideUp('fast',function(){
						$(this).closest('li').removeClass('open');
					});
					
				}
				
			});
			
			var $sbCollpase = $('#sidebar-collapse');
			$sbCollpase.click(function(){
				var el = $(this).children('i');
				el.toggleClass(function(){
					var icon1 = el.attr("data-icon1"),
						icon2 = el.attr("data-icon2");
					if(el.hasClass(icon1)){
						return icon2;
					}else{
						return icon1;
					}
					
				});
				$sideBar.toggleClass('menu-min');
			});
		}
	};
	
	
	return {
		paramKEY: 'ss_params',
		
		init: function(){
			leftNav.init();
			
			//默认打开首页
			sammyApp.run('#/');			
		},
		setParams: function(obj){
			var params = {};
			for(var p in obj){
				if(p !== 'splat' && obj.hasOwnProperty(p)){
					params[p] = decodeURIComponent(obj[p]);
				}
			}
			sessionStorage.setItem(this.paramKEY,JSON.stringify(params));
		},
		getParams: function(key){
			var params = sessionStorage.getItem(this.paramKEY);
			if(!params){
				return null;
			}
			params = JSON.parse(params);
			return key ? params[key] : params;			
		}
	};
})();

$(function(){
	App.init();
	

});