
$(document).ready(function() {

	var speedChangePage = 5000;
	var speedMovePage = 4000;
	var speedCentralize = 3000;


	changeSlide($("figure.slide").first());	

	var timerId = setInterval(function() {
		
		if ($( "#main-slider>.show-slide" ).next().prop("tagName") == "FIGURE") {
			changeSlide($("#main-slider>.show-slide").next());	
		} else {
			changeSlide($("figure.slide").first());	
		}

		//TODO fix bag with removing  class 'old-slide', why dont run oldSlyde.animate in second ring???
		$("figure.old-slide").removeClass('old-slide');
	}, speedChangePage);

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

		var oldSlide = $("figure.show-slide")

		oldSlide.addClass('old-slide').removeClass("show-slide");

		slide.addClass('show-slide');

		oldSlide.animate({left: "+=" + endPosition, opacity: 0.2}, speedMovePage)
				.delay(1)
				.queue(function() {
					$(this).css("left", 0);
					$(this).css("opacity", 1);
					$(this).removeClass('old-slide');
				});
		oldSlide = null;
		slide = null;
	}
});