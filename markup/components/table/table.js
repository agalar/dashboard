[].forEach.call(document.querySelectorAll('.js-toggle-car-item'), function (el) {
	el.addEventListener('click', function() {

		this.parentNode.parentNode.classList.toggle('is-excluded');

	}, false);
});


