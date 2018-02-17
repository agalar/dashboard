var html = document.getElementsByTagName( 'html' )[0]; 
var body = document.getElementsByTagName( 'body' )[0]; 
var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

var $ = function (el) {
	return document.querySelectorAll(el);
}


if (iOS) {
	html.classList.add('ios');
}


function findScrollbarWidth() {
	var scrollDiv = document.createElement("div");
	scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
	document.body.appendChild(scrollDiv);
	var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	document.body.removeChild(scrollDiv);
	return scrollbarSize;
}

// Удаляем ховеры при скролле

function disableHover() {
  var body = document.body,
    timer;
  window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover');
    }
    timer = setTimeout(function() {
      body.classList.remove('disable-hover');
    }, 200);
  }, false);
}

// Открываем меню

var clickCount = 0;
var headerMenu = document.querySelector('.page-header__bottom');
var subMenu = document.querySelector('.submenu');

// $(document).on('click', '.js-open-menu', function(event) {
//   event.preventDefault();
//   if(clickCount == 0) {
//     headerMenu.style.willChange = 'transform';
//     if ($('.expando').length) {
//       $('.expando').css('display', 'none');
//     }
//     setTimeout(function() {
//       clickCount++;
//       $('html').addClass('show-menu');

//       clearlayersMenu();

//       if ($('html').hasClass('filter--active')) {
//         $('html').removeClass('filter--active');
//       }
//       blockWithOverlay();
//     }, 50);

//   } else {
//     unblockWithOverlay();

//     setTimeout(function() {
//       headerMenu.style.willChange = 'initial';
//     }, 600);
//   }
// });



// по клику на оверлей скрываем все попапы

[].forEach.call(document.querySelectorAll('.overlay'), function (el) {
	el.addEventListener('click', function() {
		// тут
	}, false);
});


// закрываем по свайпу


var swipeMobileMenu = new SwipeIt('.mobile-menu');
var swipeSubmenu = new SwipeIt('.submenu');



swipeMobileMenu.on('swipeLeft',function(e){
    unblockWithOverlay();
});

swipeSubmenu.on('swipeLeft',function(e){
    unblockWithOverlay();
});


document.addEventListener("DOMContentLoaded", function(event) {
	
	iosBugFixCaret(); // Фикс сдвига инпута на айоси 11

	disableHover(); // Удаляем ховеры при скролле

	var scrollWidth = findScrollbarWidth(); // Определение ширины скроллбара
});