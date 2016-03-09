
$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
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
		console.log($(window).scrollTop());
		moveHeader();
	});


});
