
$(document).ready(function() {


	//var slide = $("figure.slide:nth-child(3)")

	$(document).everyTime('10s', function() {
		console.log($(this));
  		changeSlide($("#main-slider>.show-slide").next());
 	});


	//-----------------------CENTERIZER---------------------------------
	function changeSlide(slide) {
		var img = slide.find("img");
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
		}, 10);
		//-----------------------SLIDER---------------------------------
		var timer = 7000;
		var endPosition = slide.width() + 2;

		var oldSlide = $("figure.show-slide")

		oldSlide.addClass('old-slide').removeClass("show-slide");

		slide.addClass('show-slide');

		oldSlide.animate({left: "+=" + endPosition, opacity: 0.2}, timer)
				.delay(100)
				.queue(function() {
					$(this).removeClass('old-slide');
					$(this).css("left", 0);
				});
	}
});