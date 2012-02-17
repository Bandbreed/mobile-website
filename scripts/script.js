
////////////////////////////////////////////////////////////////////////////////////////////////////
//	Global variables															  				  //
////////////////////////////////////////////////////////////////////////////////////////////////////

//	Background image variables: URL for background images
	var bg = $('#bg');	//	Background image
	var bgOffset;		//	a number
	
//	Declare initScreen variables
	var wh;				//	Viewport height
	var ww;				//	Viewport width
	var dh;				//	Document height (whole content)
	var dw = 960;		//	column width of site
	var sd;				//	Screen dimensions 
	var iw = 1024;		//	Width of the actual bg image
	var ih = 768;		//	Height of the actual bg image	
	var idim = iw/ih;	//	Image dimension
	
	var scrolled = 0;

//	////	End global variables

////////////////////////////////////////////////////////////////////////////////////////////////////
//	Page initialisation and control	of screen													  //
////////////////////////////////////////////////////////////////////////////////////////////////////

//	Before page is loaded
	$(document).on('pagebeforecreate',function() {
	
		//	Do stuff like loading data before the page is build
		//	Prevents events from triggering on items that do not exist yet
		
	});	//	////	End pagebeforecreate
	
//	When document structure is loaded
	$(document).ready(function() {
	
		//	Basic functions to do once
			//	Update screen
				initScreen();
		
		//	Start features
			//	Add classes to list items
				geenAlphaOmega();
		
	});	//	////	End document ready

//	When page is loaded completely
	$(window).load(function() {
	
		//	Stuff to do last
		
	});	//	////	End window load

//	When user scrolls
	$(window).scroll(function() {
	
		//	Check how far user is scrolled
			scrolled = parseInt($(window).scrollTop());
			
	});	//	////	End window scroll

//	When user resizes window
	$(window).resize(function() {
	
		//	Update background
			initScreen();
				
	});	//	////	End window resize

////////////////////////////////////////////////////////////////////////////////////////////////////
//	Functions																					  //
////////////////////////////////////////////////////////////////////////////////////////////////////

//	When screen is drawn
	function initScreen() {
	
		//	Initscreen variables
			wh = $(window).height();
			ww = $(window).width();
			dh = $(document.body).height();
			sd = ww / wh;
	
		//	Set background image dimension to fit the screen
			if (idim < sd) {
				// when screen is smaller than the background
					bg.width(ww).height(ww / idim);
			} else if (idim > sd) {
				// or wider
					bg.height(wh).width(wh * idim);
			};
	
		//	Position the image, around the middle of the screen
			var offsetleft = Math.floor((ww - bg.width())/2);
			var offsettop = Math.floor((wh - bg.height())/3);
			bg.css('left', offsetleft + 'px').css('top', offsettop + 'px');
		
	};
	
//	Template for click and hover functions
	function clicker() {
	
		//	Load script to handle the actual click
			$('div').on({click: handler_click});
		
	};
	
//	////	End functions

////////////////////////////////////////////////////////////////////////////////////////////////////
//	Click handlers																			  	  //
////////////////////////////////////////////////////////////////////////////////////////////////////

//	Template clickHandler function
	function handler_click() {
		//	Stuff to do on the click
	};
	
//	////	End click handlers

////////////////////////////////////////////////////////////////////////////////////////////////////
//	Features																			  	  //
////////////////////////////////////////////////////////////////////////////////////////////////////

// Adding alpha, omega and middle classes to lists
	function geenAlphaOmega() {
	
		//	Add classes to list items
			$('ul li:first-child').addClass('alpha');
			$('ul li:last-child').addClass('omega');
			$('ul li').not(':first').not(':last').addClass('middle');
		
	};
	
//	////	End click handlers

////////////////////////////////////////////////////////////////////////////////////////////////////
//	Plug-ins 													  								  //
////////////////////////////////////////////////////////////////////////////////////////////////////

//	jQuery advanced easing
	jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if (b==0)return c;if ((b/=e)==1)return c+d;g||(g=e*.3);if (h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if (b==0)return c;if ((b/=e)==1)return c+d;g||(g=e*.3);if (h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if (b==0)return c;if ((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if (h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})

//	format string function
	String.prototype.format=function() {var a=/\{\d+\}/g,b=arguments;return this.replace(a,function(a){return b[a.match(/\d+/)]})}
	
//	Local storage
	function createCookie(a,b){if ("localStorage"in window&&window["localStorage"]!=null)localStorage.setItem(a,b);else{var c=new Date;c.setTime(c.getTime()+31104e6);var d="; expires="+c.toGMTString();document.cookie=a+"="+b+d+"; path=/"}}
	function clearCookie(a,b){if ("localStorage"in window&&window["localStorage"]!=null)localStorage.setItem(a,null);else{var c="; expires=Thu, 01-Jan-70 00:00:01 GMT";document.cookie=a+"="+c+"; path=/"}}
	function readCookie(a){var b=null;if ("localStorage"in window&&window["localStorage"]!=null)b=localStorage.getItem(a);else{var c=a+"=",d=document.cookie.split(";");for(var e=0;e<d.length;e++){var f=d[e];while(f.charAt(0)==" ")f=f.substring(1,f.length);f.indexOf(c)==0&&(b=f.substring(c.length,f.length))}}if (b!=null){if (b.toLowerCase()=="true")return!0;if (b.toLowerCase()=="false")return!1}return b}

<<<<<<< HEAD
=======
//	Helper
	(function(a){function b(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if(typeof c=="object"&&c.handleEvent)a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e}else"attachEvent"in a&&(typeof c=="object"&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))}function c(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if(typeof c=="object"&&c.handleEvent)a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e}else"detachEvent"in a&&(typeof c=="object"&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))}window.MBP=window.MBP||{},MBP.viewportmeta=a.querySelector&&a.querySelector('meta[name="viewport"]'),MBP.ua=navigator.userAgent,MBP.scaleFix=function(){MBP.viewportmeta&&/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua)&&(MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",a.addEventListener("gesturestart",MBP.gestureStart,!1))},MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},MBP.BODY_SCROLL_TOP=!1,MBP.getScrollTop=function(){var b=window,c=a;return b.pageYOffset||c.compatMode==="CSS1Compat"&&c.documentElement.scrollTop||c.body.scrollTop||0},MBP.hideUrlBar=function(){var a=window;!location.hash&&MBP.BODY_SCROLL_TOP!==!1&&a.scrollTo(0,MBP.BODY_SCROLL_TOP===1?0:1)},MBP.hideUrlBarOnLoad=function(){var a=window,b=a.document;!location.hash&&a.addEventListener&&(window.scrollTo(0,1),MBP.BODY_SCROLL_TOP=1,bodycheck=setInterval(function(){b.body&&(clearInterval(bodycheck),MBP.BODY_SCROLL_TOP=MBP.getScrollTop(),MBP.hideUrlBar())},15),a.addEventListener("load",function(){setTimeout(function(){MBP.getScrollTop()<20&&MBP.hideUrlBar()},0)}))},MBP.fastButton=function(a,c){this.element=a,this.handler=c,b(a,"touchstart",this,!1),b(a,"click",this,!1)},MBP.fastButton.prototype.handleEvent=function(a){a=a||window.event;switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchend":this.onClick(a);break;case"click":this.onClick(a)}},MBP.fastButton.prototype.onTouchStart=function(b){b.stopPropagation(),this.element.addEventListener("touchend",this,!1),a.body.addEventListener("touchmove",this,!1),this.startX=b.touches[0].clientX,this.startY=b.touches[0].clientY,this.element.style.backgroundColor="rgba(0,0,0,.7)"},MBP.fastButton.prototype.onTouchMove=function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&this.reset()},MBP.fastButton.prototype.onClick=function(a){a=a||window.event,a.stopPropagation&&a.stopPropagation(),this.reset(),this.handler(a),a.type=="touchend"&&MBP.preventGhostClick(this.startX,this.startY),this.element.style.backgroundColor=""},MBP.fastButton.prototype.reset=function(){c(this.element,"touchend",this,!1),c(a.body,"touchmove",this,!1),this.element.style.backgroundColor=""},MBP.preventGhostClick=function(a,b){MBP.coords.push(a,b),window.setTimeout(function(){MBP.coords.splice(0,2)},2500)},MBP.ghostClickHandler=function(a){if(!MBP.hadTouchEvent&&"ontouchstart"in window){a.stopPropagation(),a.preventDefault();return}for(var b=0,c=MBP.coords.length;b<c;b+=2){var d=MBP.coords[b],e=MBP.coords[b+1];Math.abs(a.clientX-d)<25&&Math.abs(a.clientY-e)<25&&(a.stopPropagation(),a.preventDefault())}},a.addEventListener&&a.addEventListener("click",MBP.ghostClickHandler,!0),b(a.documentElement,"touchstart",function(){MBP.hadTouchEvent=!0},!1),MBP.coords=[],MBP.splash=function(){var b=navigator.platform==="iPad"?"h/":"l/";a.write('<link rel="apple-touch-startup-image" href="/img/'+b+'splash.png" />')},MBP.autogrow=function(a,b){function c(a){var b=this.scrollHeight,c=this.clientHeight;b>c&&(this.style.height=b+3*e+"px")}var d=b?b:12,e=a.currentStyle?a.currentStyle.lineHeight:getComputedStyle(a,null).lineHeight;e=e.indexOf("px")==-1?d:parseInt(e,10),a.style.overflow="hidden",a.addEventListener?a.addEventListener("keyup",c,!1):a.attachEvent("onkeyup",c)},MBP.enableActive=function(){a.addEventListener("touchstart",function(){},!1)},MBP.viewportMeta=$('meta[name="viewport"]'),MBP.preventZoom=function(){$("input, select, textarea").bind("focus blur",function(a){MBP.viewportMeta.attr("content","width=device-width,initial-scale=1,maximum-scale="+(a.type=="blur"?10:1))})}})(document)

>>>>>>> gh-pages
//	////	End Plug-ins
