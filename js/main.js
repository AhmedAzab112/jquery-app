let days = document.getElementById('days');
let hour = document.getElementById('hours');
let min = document.getElementById('mins');
let sec = document.getElementById('seconds');


(() => {
    let d = days.innerHTML;
    let h = hour.innerHTML;
    let m = min.innerHTML;
    let s = sec.innerHTML;
  setInterval(() => {
    if(s > 0) {
        sec.innerHTML = --s;
    } else if(m > 0) {
        min.innerHTML = --m;
        s = 60;
    }
    else if(h > 0) {
        hour.innerHTML = --h;
        m = 60;
    }
    else if(d > 0) {
        days.innerHTML = --d;
        h = 24;
    }
  }, 1000);
})();

let navWidth = $(".nav-bar").width();
let left = true;
$("#openNav").click(() => {
  if (left) {
    $(".nav-bar").animate({ left: `-${navWidth}` }, 1000);
    $(".toggle-button").animate({ left: 20 }, 1000);
    left = false;
  } else {
    $(".nav-bar").animate({ left: 0 }, 1000);
    $(".toggle-button").animate({ left: 240 }, 1000);
    left = true;
  }
});

$("#close-nav").click(() => {
  $(".nav-bar").animate({ left: `-${navWidth}` }, 1000);
  $(".toggle-button").animate({ left: 20 }, 1000);
});

$("#Singer_one").click(() => {
  $("#Singer_one_body").slideToggle(500);
});
$("#Singer_two").click(() => {
  $("#Singer_two_body").slideToggle(500);
});
$("#Singer_three").click(() => {
  $("#Singer_three_body").slideToggle(500);
});
$("#Singer_four").click(() => {
  $("#Singer_four_body").slideToggle(500);
});




$('.nav-bar a').click(function (){
    // $('.nav-bar a').removeClass('active-anchor');
    // $(this).addClass('active-anchor');

    let ahref = $(this).attr('href');
    let offset = $(ahref).offset().top
    $('html,body').animate({scrollTop: offset}, 500);
});