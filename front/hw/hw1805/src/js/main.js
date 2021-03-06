
$(document).ready(function() {

	var speedChangePage = 15000;
	var speedMovePage = 10000;
	var speedCentralize = 10000;

	var timerSlider;
	
	startSlideTimer(1);

	function startSlideTimer(slideId){
		if (
			Number.isInteger(slideId)
			&& slideId >= 0
			&& slideId < $( "#main-slider" ).children().length - 2
			){
				console.log(slideId)

				if($( ".old-slide" )) clearOldSlide();

				changeSlide($("figure.slide").eq(slideId));
				//startSlideTimer();
			}
			timerSlider = setInterval(function() {
				if (!Number.isInteger(slideId)) {	
					if ($( "#main-slider>.show-slide" ).next().prop("tagName") == "FIGURE") {
						changeSlide($("#main-slider>.show-slide").next());	
					} else {
						changeSlide($("figure.slide").first());	
					}
				}
				slideId = null;
			}, speedChangePage);
	}
	function clearOldSlide() {
		$("figure.old-slide").css("opacity", 1);
		$("figure.old-slide").css("left", 0);
		$("figure.old-slide").removeClass('old-slide');
		$("div.circle-nav").css("opacity", 0.5);
	}
	//---------------------------SLIDER NAV-----------------------------
	var countSlidez = $( "figure.slide" ).length;

	for ( var i = 1; i <= countSlidez; i++) {
		$( "#slider-navi" ).append("<a href='#'><div class='circle-nav'></div></a>");
	}
	//$( "#slider-navi" ).css("left", "-=" + (countSlidez / 2) * 13 + ((countSlidez * 4) - 4);

		$( "div.circle-nav" ).click(function(e){
			clearInterval(timerSlider);
			startSlideTimer($(this).parent().index());
		});
	//-----------------------CENTERIZER---------------------------------
	function changeSlide(slide) {
		var img = slide.find("img");

		img.css("left", 0);
		img.css("top", 0);

		var positionX = img.attr("X");
		var positionY = img.attr("Y");

		var offsetWidthImg;
		var offsetHeightImg;

		var calcOffset = function(){return (img.width() - img.parent().width())};

		switch (positionX) {
			case "left":
			offsetWidthImg = 0;
			break;
			case "right":
			offsetWidthImg = Math.floor(calcOffset());
			break;
			case "center":
			default:
			offsetWidthImg = Math.floor(calcOffset() / 2);
		}
		switch (positionY) {
			case "top":
			offsetHeightImg = 0;
			break;
			case "bottom":
			offsetHeightImg = Math.floor(img.height()-img.parent().height());
			break;
			case "center":
			default:
			offsetHeightImg = Math.floor((img.height() - img.parent().height()) / 2);
		}		
		// alert (positionX+"="+offsetWidthImg+", "+positionY+"="+offsetHeightImg)

		img.animate({
			left: "-=" + offsetWidthImg,
			top: "-=" + offsetHeightImg,
		}, speedCentralize);
		//-----------------------SLIDER---------------------------------

		var endPosition = slide.width();

		clearOldSlide()

		$("div.circle-nav").eq(slide.index()).css("opacity", 1);

		var oldSlide = $("figure.show-slide");
		oldSlide.addClass('old-slide');
		oldSlide.removeClass("show-slide");

		slide.addClass('show-slide');


		$( "figure.old-slide" ).animate({
			left: "+=" + endPosition, 
			opacity: 0
		}, speedMovePage);
	}
});