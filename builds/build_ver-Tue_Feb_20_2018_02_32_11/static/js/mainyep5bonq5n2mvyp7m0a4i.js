/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

!function(){"use strict";if("undefined"!=typeof window){var t=-1!==window.navigator.userAgent.indexOf("Edge/16.");if("objectFit"in document.documentElement.style!=!1&&!t)return void(window.objectFitPolyfill=function(){return!1});var e=function(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("position"),n=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");i&&"static"!==i||(t.style.position="relative"),"hidden"!==n&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")},i=function(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i){e.getPropertyValue(n)!==i[n]&&(t.style[n]=i[n])}},n=function(t,e,i){var n,o,l,a,d;if(i=i.split(" "),i.length<2&&(i[1]=i[0]),"x"===t)n=i[0],o=i[1],l="left",a="right",d=e.clientWidth;else{if("y"!==t)return;n=i[1],o=i[0],l="top",a="bottom",d=e.clientHeight}return n===l||o===l?void(e.style[l]="0"):n===a||o===a?void(e.style[a]="0"):"center"===n||"50%"===n?(e.style[l]="50%",void(e.style["margin-"+l]=d/-2+"px")):n.indexOf("%")>=0?(n=parseInt(n),void(n<50?(e.style[l]=n+"%",e.style["margin-"+l]=d*(n/-100)+"px"):(n=100-n,e.style[a]=n+"%",e.style["margin-"+a]=d*(n/-100)+"px"))):void(e.style[l]=n)},o=function(t){var o=t.dataset?t.dataset.objectFit:t.getAttribute("data-object-fit"),l=t.dataset?t.dataset.objectPosition:t.getAttribute("data-object-position");o=o||"cover",l=l||"50% 50%";var a=t.parentNode;e(a),i(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto","scale-down"===o&&(t.style.height="auto",t.clientWidth<a.clientWidth&&t.clientHeight<a.clientHeight?(n("x",t,l),n("y",t,l)):(o="contain",t.style.height="100%")),"none"===o?(t.style.width="auto",t.style.height="auto",n("x",t,l),n("y",t,l)):"cover"===o&&t.clientWidth>a.clientWidth||"contain"===o&&t.clientWidth<a.clientWidth?(t.style.top="0",t.style.marginTop="0",n("x",t,l)):"scale-down"!==o&&(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",n("y",t,l))},l=function(e){if(void 0===e)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=typeof e||!e.length||!e[0].nodeName)return!1;e=e}for(var i=0;i<e.length;i++)if(e[i].nodeName){var n=e[i].nodeName.toLowerCase();"img"!==n||t?"video"===n&&(e[i].readyState>0?o(e[i]):e[i].addEventListener("loadedmetadata",function(){o(this)})):e[i].complete?o(e[i]):e[i].addEventListener("load",function(){o(this)})}return!0};document.addEventListener("DOMContentLoaded",function(){l()}),window.addEventListener("resize",function(){l()}),window.objectFitPolyfill=l}}();
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.0.4
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):t.stickybits=s()}(this,function(){"use strict";function t(t,s){var e=void 0!==s?s:{};this.version='"3.0.4"',this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={noStyles:e.noStyles||!1,stickyBitStickyOffset:e.stickyBitStickyOffset||0,parentClass:e.parentClass||"js-stickybit-parent",scrollEl:document.querySelector(e.scrollEl)||window,stickyClass:e.stickyClass||"js-is-sticky",stuckClass:e.stuckClass||"js-is-stuck",useStickyClasses:e.useStickyClasses||!1,verticalPosition:e.verticalPosition||"top"};var i=this.props;i.positionVal=this.definePosition()||"fixed";var o=i.verticalPosition,n=i.noStyles,r=i.positionVal;this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]),this.instances=[];for(var a=0;a<this.els.length;a+=1){var l=this.els[a],c=l.style;if(c[o]="top"!==o||n?"":i.stickyBitStickyOffset+"px",c.position="fixed"!==r?r:"","fixed"===r||i.useStickyClasses){var p=this.addInstance(l,i);this.instances.push(p)}}return this}return t.prototype.definePosition=function(){for(var t=["","-o-","-webkit-","-moz-","-ms-"],s=document.head.style,e=0;e<t.length;e+=1)s.position=t[e]+"sticky";var i=s.position?s.position:"fixed";return s.position="",i},t.prototype.addInstance=function(t,s){var e=this,i={el:t,parent:t.parentNode,props:s};this.isWin=this.props.scrollEl===window;var o=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);return this.computeScrollOffsets(i),i.parent.className+=" "+s.parentClass,i.state="default",i.stateContainer=function(){return e.manageState(i)},o.addEventListener("scroll",i.stateContainer),i},t.prototype.getClosestParent=function(t,s){var e=s,i=t;if(i.parentElement===e)return e;for(;i.parentElement!==e;)i=i.parentElement;return e},t.prototype.computeScrollOffsets=function(t){var s=t,e=s.props,i=s.parent,o=!this.isWin&&"fixed"===e.positionVal,n="bottom"!==e.verticalPosition,r=o?e.scrollEl.getBoundingClientRect().top:0,a=o?i.getBoundingClientRect().top-r:i.getBoundingClientRect().top;return s.offset=r+e.stickyBitStickyOffset,s.stickyStart=n?a-s.offset:0,s.stickyStop=n?a+i.offsetHeight-(s.el.offsetHeight+s.offset):a+i.offsetHeight,s},t.prototype.toggleClasses=function(t,s,e){var i=t,o=i.className.split(" ");e&&-1===o.indexOf(e)&&o.push(e);var n=o.indexOf(s);-1!==n&&o.splice(n,1),i.className=o.join(" ")},t.prototype.manageState=function(t){var s=t,e=s.el,i=s.props,o=s.state,n=s.stickyStart,r=s.stickyStop,a=e.style,l=i.noStyles,c=i.positionVal,p=i.scrollEl,f=i.stickyClass,u=i.stuckClass,y=i.verticalPosition,d=function(t){t()},h=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||d,k=this.toggleClasses,m=this.isWin||p.getBoundingClientRect().top?window.scrollY||window.pageYOffset:p.scrollTop,v=m<=n&&"sticky"===o,g=m>=r&&"sticky"===o;return m>n&&m<r&&("default"===o||"stuck"===o)?(s.state="sticky",h(function(){k(e,u,f),a.position=c,l||(a.bottom="",a[y]=i.stickyBitStickyOffset+"px")})):v?(s.state="default",h(function(){k(e,f),"fixed"===c&&(a.position="")})):g&&(s.state="stuck",h(function(){k(e,f,u),"fixed"!==c||l||(a.top="",a.bottom="0",a.position="absolute")})),s},t.prototype.removeInstance=function(t){var s=t.el,e=t.props,i=this.toggleClasses;s.style.position="",s.style[e.verticalPosition]="",i(s,e.stickyClass),i(s,e.stuckClass),i(s.parentNode,e.parentClass)},t.prototype.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var s=this.instances[t];s.props.scrollEl.removeEventListener("scroll",s.stateContainer),this.removeInstance(s)}this.manageState=!1,this.instances=[]},function(s,e){return new t(s,e)}});

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.0.3
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){var e=document.documentElement,t=null,n="initial",o=n,i=null,r=["input","select","textarea"],u=[],d=[16,17,18,91,93],a={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},s=!1,c=!1,w={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},f=!1;try{var l=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,l)}catch(e){}var v=function(){var e=!!f&&{passive:!0};window.PointerEvent?(window.addEventListener("pointerdown",m),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",m),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",m),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",x,e),window.addEventListener("touchend",m))),window.addEventListener(b(),y,e),window.addEventListener("keydown",x),window.addEventListener("keyup",x),window.addEventListener("focusin",E),window.addEventListener("focusout",L)},m=function(e){if(!s){var t=e.which,i=a[e.type];"pointer"===i&&(i=g(e));var u="keyboard"===i&&t&&-1===d.indexOf(t)||"mouse"===i||"touch"===i;if(n!==i&&u&&(n=i,h("input")),o!==i&&u){var c=document.activeElement;c&&c.nodeName&&-1===r.indexOf(c.nodeName.toLowerCase())&&(o=i,h("intent"))}}},h=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),M(t)},y=function(e){if(O(e),!s&&!c){var t=a[e.type];"pointer"===t&&(t=g(e)),o!==t&&(o=t,h("intent"))}},E=function(n){t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))},L=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},x=function(e){m(e),window.clearTimeout(i),s=!0,i=window.setTimeout(function(){s=!1},100)},g=function(e){return"number"==typeof e.pointerType?p[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},b=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},M=function(e){for(var t=0,i=u.length;t<i;t++)u[t].type===e&&u[t].fn.call(void 0,"input"===e?n:o)},k=function(e){for(var t=0,n=u.length;t<n;t++)if(u[t].fn===e)return t},O=function(e){w.x!==e.screenX||w.y!==e.screenY?(c=!1,w.x=e.screenX,w.y=e.screenY):c=!0};return"addEventListener"in window&&Array.prototype.indexOf&&function(){a[b()]="mouse",v(),h("input"),h("intent")}(),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){d=e},registerOnChange:function(e,t){u.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=k(e);t&&u.splice(t,1)}}}()}])});
// переключаем калькулятор

[].forEach.call(document.querySelectorAll('.js-toggle-calculator'), function (el) {
	el.addEventListener('click', function() {
		var calc = document.querySelector('.calculator');

		// calc.style.willChange = 'transform';

		setTimeout(function() {

			calc.classList.toggle('calculator--active');
			calc.addEventListener('transitionend', function () {
				this.style.willChange = 'initial';
			});

		}, 100);

		

	}, false);
});







// переключаем фильтр

[].forEach.call(document.querySelectorAll('.js-toggle-filter'), function (el) {
	el.addEventListener('click', function() {
		var filter = document.querySelector('.filter');

		filter.style.willChange = 'transform';

		setTimeout(function() {

			filter.classList.toggle('filter--active');
			filter.addEventListener('transitionend', function () {
				this.style.willChange = 'initial';
			});

		}, 100);

	}, false);
});


// Удаление выбранного варианта в фильтре

[].forEach.call(document.querySelectorAll('.js-delete-filter-item'), function (el) {
	el.addEventListener('click', function() {

		var self = this;
		var filterItem = self.parentNode;

		filterItem.classList.add('filter__item--delete');

		function removeFilterItem() {
			filterItem.parentNode.removeChild(filterItem);
		}

		filterItem.addEventListener("transitionend", removeFilterItem, false);

	}, false);
});



// Добавить опции в фильтре

[].forEach.call(document.querySelectorAll('.js-toggle-filter-options'), function (el) {
	el.addEventListener('click', function() {

		this.classList.toggle('button-hide');
		document.querySelector('.more-filter-items').classList.toggle('more-filter-items--active');

	}, false);
});











































[].forEach.call(document.querySelectorAll('.js-show-full-nav'), function (el) {
	el.addEventListener('click', function() {

		document.querySelector('.page-container').classList.toggle('page-container--full-nav');

	}, false);
});


[].forEach.call(document.querySelectorAll('.js-toggle-car-item'), function (el) {
	el.addEventListener('click', function() {

		this.parentNode.parentNode.classList.toggle('is-excluded');

	}, false);
});



function TabWidget (el, selectedIndex) {

    if (!el) {
        return;
    }

    this.el = el;
    this.tabTriggers = this.el.getElementsByClassName('js-tab-trigger');
    this.tabPanels = this.el.getElementsByClassName('js-tab-panel');

    if (this.tabTriggers.length === 0 || this.tabTriggers.length !== this.tabPanels.length) {
        return;
    }

    this._init(selectedIndex);
}

TabWidget.prototype._init = function (selectedIndex) {

    this.tabTriggersLength = this.tabTriggers.length;
    this.selectedTab = 0;
    this.prevSelectedTab = null;
    this.clickListener = this._clickEvent.bind(this);
    this.keydownListener = this._keydownEvent.bind(this);
    this.keys = {
        prev: 37,
        next: 39
    };

    for (var i = 0; i < this.tabTriggersLength; i++) {
        this.tabTriggers[i].index = i;
        this.tabTriggers[i].addEventListener('click', this.clickListener, false);
        this.tabTriggers[i].addEventListener('keydown', this.keydownListener, false);

        if (this.tabTriggers[i].classList.contains('is-selected')) {
            this.selectedTab = i;
        }
    }

    if (!isNaN(selectedIndex)) {
        this.selectedTab = selectedIndex < this.tabTriggersLength ? selectedIndex : this.tabTriggersLength - 1;
    }

    this.selectTab(this.selectedTab);
    this.el.classList.add('is-initialized');
};

TabWidget.prototype._clickEvent = function (e) {

    e.preventDefault();

    if (e.target.index === this.selectedTab) {
        return;
    }

    this.selectTab(e.target.index, true);
};

TabWidget.prototype._keydownEvent = function (e) {

    var targetIndex;

    if (e.keyCode === this.keys.prev || e.keyCode === this.keys.next) {
        e.preventDefault();
    }
    else {
        return;
    }

    if (e.keyCode === this.keys.prev && e.target.index > 0) {
        targetIndex = e.target.index - 1;
    }
    else if (e.keyCode === this.keys.next && e.target.index < this.tabTriggersLength - 1) {
        targetIndex = e.target.index + 1;
    }
    else {
        return;
    }

    this.selectTab(targetIndex, true);
};

TabWidget.prototype._show = function (index, userInvoked) {

    this.tabTriggers[index].classList.add('is-selected');
    this.tabTriggers[index].setAttribute('aria-selected', true);
    this.tabTriggers[index].setAttribute('tabindex', 0);

    this.tabPanels[index].classList.remove('is-hidden');
    this.tabPanels[index].setAttribute('aria-hidden', false);
    this.tabPanels[index].setAttribute('tabindex', 0);

    if (userInvoked) {
        this.tabTriggers[index].focus();
    }
};

TabWidget.prototype._hide = function (index) {

    this.tabTriggers[index].classList.remove('is-selected');
    this.tabTriggers[index].setAttribute('aria-selected', false);
    this.tabTriggers[index].setAttribute('tabindex', -1);

    this.tabPanels[index].classList.add('is-hidden');
    this.tabPanels[index].setAttribute('aria-hidden', true);
    this.tabPanels[index].setAttribute('tabindex', -1);
};

TabWidget.prototype.selectTab = function (index, userInvoked) {

    if (this.prevSelectedTab === null) {
        for (var i = 0; i < this.tabTriggersLength; i++) {
            if (i !== index) {
                this._hide(i);
            }
        }
    }
    else {
        this._hide(this.selectedTab);
    }

    this.prevSelectedTab = this.selectedTab;
    this.selectedTab = index;

    this._show(this.selectedTab, userInvoked);
};

TabWidget.prototype.destroy = function () {

    for (var i = 0; i < this.tabTriggersLength; i++) {
        this.tabTriggers[i].classList.remove('is-selected');
        this.tabTriggers[i].removeAttribute('aria-selected');
        this.tabTriggers[i].removeAttribute('tabindex');

        this.tabPanels[i].classList.remove('is-hidden');
        this.tabPanels[i].removeAttribute('aria-hidden');
        this.tabPanels[i].removeAttribute('tabindex');

        this.tabTriggers[i].removeEventListener('click', this.clickListener, false);
        this.tabTriggers[i].removeEventListener('keydown', this.keydownListener, false);

        delete this.tabTriggers[i].index;
    }

    this.el.classList.remove('is-initialized');
};

new TabWidget(document.getElementsByClassName('js-tabs')[0]);








(function() {
	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( '.input-default__input, .textarea-default__input' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input-default--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input-default--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input-default--filled' );
		}
	}
})();





function iosBugFixCaret() {
	var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1|OS 11_2/.test(ua);

    var html = document.getElementsByTagName( 'html' )[0]; 
	var body = document.getElementsByTagName( 'body' )[0]; 

    if (iOS) {
		html.classList.add('ios');
	}
    // ios 11 bug caret position
    if ( iOS && iOS11 ) {

    	[].slice.call( document.querySelectorAll( '.input-default__input, .textarea-default__input' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			body.classList.add('ios-bug-fix');
		}

		function onInputBlur( ev ) {
			body.classList.remove('ios-bug-fix');
		}

    }
}


document.addEventListener("DOMContentLoaded", function(event) {
	
	iosBugFixCaret(); // Фикс сдвига инпута на айоси 11

});




/* Adapted from http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design */ 

var links = document.querySelectorAll("[data-ripple]");

function animate(e) {
  var parent = this;

  if (parent.querySelectorAll(".ripple").length === 0) {
    var span = document.createElement("span");
    span.classList.add("ripple");
    parent.insertBefore(span, parent.firstChild);
  }

  var ink = parent.querySelectorAll(".ripple")[0];

  ink.classList.remove("ripple--animate");

  if (!ink.offsetHeight && !ink.offsetWidth) {
    var d = Math.max(parent.offsetHeight, parent.offsetWidth);
    ink.style.height = d + "px";
    ink.style.width = d + "px";
  }

  var rect = parent.getBoundingClientRect();

  var offset = {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };

  var x = e.pageX - offset.left - ink.offsetWidth / 2;
  var y = e.pageY - offset.top - ink.offsetHeight / 2;

  ink.style.top = y + "px";
  ink.style.left = x + "px";
  ink.classList.add("ripple--animate");
}

links.forEach(function (link) {
  return link.addEventListener("click", animate);
});