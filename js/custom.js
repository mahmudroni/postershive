(function($) {
    
  'use strict';
  $(document).on('ready', function() {


    /**
     * =======================================
     * Custom Function
     * =======================================
     */

    /* centerTheContent() */
/*    function verticalCenter($content){
      var content = $($content),
      half = content.outerHeight() / 2,
      calc = "calc(50% - "+half+"px)";
      content.css({
        top: calc
      });
    }
	
    verticalCenter('.iphone-mockup');

    function horizontalCenter($content){
      var content = $($content),
      half = content.outerWidth() / 2,
      calc = "calc(50% - "+half+"px)";
      content.css({
        right: '-' + calc
      });
    }
  
    horizontalCenter('.iphone-mockup');*/

    function perfectCenter ($content) {
      var content = $($content),
      verticalHalf = content.outerHeight() / 2,
      calcVerticalCenter = "calc(50% - "+verticalHalf+"px)",
      horizontalHalf = content.outerWidth() / 2,
      calcHorizontalCenter = "calc(0% - "+horizontalHalf+"px)";
      console.log(calcHorizontalCenter);

      content.css({
        'top': calcVerticalCenter,
        'right': calcHorizontalCenter
      });
    }

    perfectCenter('.iphone-mockup');

	  
    /**
     * =======================================
     * COUNT DOWN TIMER
     * =======================================
     */
    $('.countdown-timer').dsCountDown({
        endDate: new Date("October 18, 2019 23:59:00")
    });

    var rainBg = new RainyDay({
        image: 'rain',
        blur: 10,
        gravityThreshold: 5,
        enableSizeChange: true
    })

  });


} (jQuery) );

