$(document).ready(function(){
    
   
    //Countdown Timer

    var countDownDate = new Date("Feb 26, 2020 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("countDays").innerHTML = days;
    document.getElementById("countHours").innerHTML = hours;
    document.getElementById("countMins").innerHTML = minutes;
    document.getElementById("countSecs").innerHTML = seconds;

    
    }, 1000);

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