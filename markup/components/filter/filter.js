// Кастомный скролл
var ps = new PerfectScrollbar('.js-custom-scroll');


// для ие подключаем полифилл на позицию стики

stickybits('.filter', {stickyBitStickyOffset: 60});

// переключаем фильтр

[].forEach.call(document.querySelectorAll('.js-toggle-filter'), function (el) {
	el.addEventListener('click', function() {

		document.querySelector('.filter').classList.toggle('filter--active');

	}, false);
});