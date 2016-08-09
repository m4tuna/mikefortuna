$(document).ready(function() {

	$("body").addClass("loaded");

	var wordSwap = function() {
		var words = Array('a creative web developer','a unicorn','a cool guy','a front end developer', 'a drummer, snowboarder and a web developer', 'not a cat', "wondering how many times you'll hit refresh to see how many alternate first sentences exist", "not the creator of this amazing background image - that would be the incredible: <a target='_blank' href='https://unsplash.com/@albertorestifo'>Alberto Restifo</a>");
		var word = words[Math.floor(Math.random()*words.length)];

		console.log("hello");
		$('#word').append(word);

	};

	wordSwap();


	$(function() {
		$('a[rel="lightbox"]').fluidbox();
	});



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


	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		// moveHeader();

		// $('.bg_scroll').css('background-position', 0 -0.023*$(window).scrollTop());

	});


});
