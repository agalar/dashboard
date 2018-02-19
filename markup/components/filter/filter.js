
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







































