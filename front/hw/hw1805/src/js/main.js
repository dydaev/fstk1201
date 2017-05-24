
$(document).ready(function() {

	var speedChangePage = 15000;
	var speedMovePage = 10000;
	var speedCentralize = 10000;


	changeSlide($("figure.slide").first());	

	var timerId = setInterval(function() {
		
		if ($( "#main-slider>.show-slide" ).next().prop("tagName") == "FIGURE") {
			changeSlide($("#main-slider>.show-slide").next());	
		} else {
			changeSlide($("figure.slide").first());	
		}
		//TODO fix bag with removing  class 'old-slide', why dont run oldSlyde.animate in second ring???

	}, speedChangePage);
	//-----------------------------------------------------
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

		$("figure.old-slide").css("opacity", 1);
		$("figure.old-slide").css("left", 0);
		$("figure.old-slide").removeClass('old-slide')

		var oldSlide = $("figure.show-slide")
		oldSlide.addClass('old-slide');
		oldSlide.removeClass("show-slide");

		slide.addClass('show-slide');

		$("figure.old-slide").animate({
			left: "+=" + endPosition, 
			opacity: 0
		}, speedMovePage);
	}
});