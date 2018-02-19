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

