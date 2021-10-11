$(document).ready(function() {

	$("body").addClass("loaded");

	function wordSwap() {
		var words = Array(
			 'a creative web developer',
			 'a unicorn',
			 'a UX developer',
			 'a UI developer',
			 'a front end developer',
			 'a developer',
			 'a developer',
			 'a drummer, snowboarder and web developer',
			 'a drummer, snowboarder and web developer',
			 'a drummer, snowboarder and web developer',
			 'not a cat',
			 "secretely counting how many times you have clicked to see a new sentence"
		);
		var word = words[Math.floor(Math.random()*words.length)];
		$('#word').text(word);
	}


	function setIntroHeight() {
		var wH = $( window ).height();
		$('.intro').css('height', wH);
	}





	var word = 'a drummer, snowboarder and web developer';
	$('#word').text(word);

	$('#intro').click(function(){
		wordSwap();
		$('#counter').html(function(i, val) {
			$.ajax({
				url: '#',
				type: 'POST',
				data: {increment: true},
				success: function() { console.log('top intro clicked') }
			});
			return +val+1;
		});
	});

	setIntroHeight();




	var moveHeader = function() {
		scrollTotal = $(window).scrollTop();
		scrollTotal = Math.floor(scrollTotal / 3);
		$("#logo-container").css({
			transform: "translate3d(0, " + scrollTotal + "px, 0px)"
		})
		$(".intro:first-child").css({
			transform: "translate3d(0, " + scrollTotal + "px, 0px)"
		})
	};

	$( window ).resize(function() {
		setIntroHeight();

		$('.intro').css('bottom', wH);
	});


	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		// moveHeader();

		// $('.bg_scroll').css('background-position', 0 -0.023*$(window).scrollTop());

	});


});
