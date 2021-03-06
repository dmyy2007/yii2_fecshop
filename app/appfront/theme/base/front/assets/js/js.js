$(document).ready(function(){
	currentBaseUrl = $(".currentBaseUrl").val();
	$(".top_currency .currency_list ul li").click(function(){
		currency = $(this).attr("rel");
		
		htmlobj=$.ajax({url:currentBaseUrl+"/cms/home/changecurrency?currency="+currency,async:false});
		//alert(htmlobj.responseText);
		location.reload() ;
	});
	$(".top_lang .store_lang").click(function(){
		//http = document.location.protocol+"://";
		currentStore = $(".current_lang").attr("rel");
		changeStore = $(this).attr("rel");
		currentUrl = window.location.href;
		redirectUrl = currentUrl.replace("://"+currentStore,"://"+changeStore);
		//alert(redirectUrl);
		//alert(2);
		location.href=redirectUrl;
	});
	
	// ajax get account login info
	
	loginInfoUrl = currentBaseUrl+"/customer/account/logininfo";
	logoutUrl 	 = $(".logoutUrl").val();
	
	jQuery.ajax({
		async:true,
		timeout: 6000,
		dataType: 'json', 
		type:'get',
		data: {
			'currentUrl':window.location.href
		},
		url:loginInfoUrl,
		success:function(data, textStatus){ 
			welcome = $('.welcome_str').val();
			if(data.loginStatus){
				str = '<span id="welcome">'+welcome+'</span>';
				str += '<span id="js_isNotLogin">';
				str += '<a href="'+logoutUrl+'" rel="nofollow">Logout</a>';
				str += '</span>';
				$(".login-text").html(str);
			}
		},
		error:function (XMLHttpRequest, textStatus, errorThrown){}
	});
	
});

