$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.info__title').click(function (event) {
		$(this).toggleClass('active-title').next().slideToggle(300);
	});
});