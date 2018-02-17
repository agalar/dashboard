[].forEach.call(document.querySelectorAll('.js--show-full-nav'), function (el) {
	el.addEventListener('click', function() {

		document.querySelector('.page-container').classList.toggle('page-container--full-nav');

	}, false);
});