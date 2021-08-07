$(document).ready(function(){
    
   (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let event = "Aug 12, 2021 00:00:00",
      countDown = new Date(event).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          $(".countdown_timer").hide()
          
        }
        //seconds
      }, 0)
  }());
    //Wow JS integration
    new WOW().init();

    //Mobile Menu Toggle Function
    $('#nav').click(function(){
        $('.navWrapper').toggle();
        $('.navWrapper').addClass('wow');
        $('.navWrapper').addClass('animated');
        $('.navWrapper').addClass('fadeInUpBig');
        $('.navWrapper').addClass('fast');
        $('.navWrapper ul li').addClass('wow');
        $('.navWrapper ul li').addClass('animated');
        $('.navWrapper ul li').addClass('fadeInUp');
        $('.navWrapper ul li').addClass('delay-1s');
    })
    
    
    });

    function myFunct1(){
		var x = document.getElementById("TEDxSIMSREE");
		var y = document.getElementById("TEDx");
		var z = document.getElementById("TED");

		var a = document.getElementById("tedXSButton");
		var b = document.getElementById("tedXButton");
		var c = document.getElementById("tedButton");

		a.style.color = "#000";
		b.style.color = "#898989";
		c.style.color = "#898989";

		
		y.style.display = "none";
		z.style.display = "none";
		
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "block";
		}
	}	
	function myFunct2(){
		var x = document.getElementById("TEDxSIMSREE");
		var y = document.getElementById("TEDx");
		var z = document.getElementById("TED");

		var a = document.getElementById("tedXSButton");
		var b = document.getElementById("tedXButton");
		var c = document.getElementById("tedButton");

		b.style.color = "#000";
		a.style.color = "#898989";
		c.style.color = "#898989";

		
		x.style.display = "none";
		z.style.display = "none";
		
		if (y.style.display === "none") {
			y.style.display = "block";
		} else {
			y.style.display = "block";
		}
	}
	function myFunct3(){
		var x = document.getElementById("TEDxSIMSREE");
		var y = document.getElementById("TEDx");
		var z = document.getElementById("TED");

		var a = document.getElementById("tedXSButton");
		var b = document.getElementById("tedXButton");
		var c = document.getElementById("tedButton");

		c.style.color = "#000";
		b.style.color = "#898989";
		a.style.color = "#898989";
		
		x.style.display = "none";
		y.style.display = "none";
		
		if (z.style.display === "none") {
			z.style.display = "block";
		} else {
			z.style.display = "block";
		}
	}

	function changeAtiveTab(event,tabID){
    let element = event.target;
    while(element.nodeName !== "A"){
      element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++){
      aElements[i].classList.remove("text-white");
      aElements[i].classList.remove("bg-red-600");
      aElements[i].classList.add("text-red-600");
      aElements[i].classList.add("bg-white");
      tabContents[i].classList.add("hidden");
      tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-red-600");
    element.classList.remove("bg-white");
    element.classList.add("text-white");
    element.classList.add("bg-red-600");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
  }