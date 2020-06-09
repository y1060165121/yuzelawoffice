$('#zhuanyelingyu').hover(function() {
  $('#zhuanyelingyu_dropdown').addClass('show');
  $('#logo').css({ "height": "60px", "margin-top": "5px", "margin-left": "35px" })

}, function() {
  $('#zhuanyelingyu_dropdown').removeClass('show');
  $('#logo').css({ "height": "150px", "margin-top": "0px", "margin-left": "0px" })
});

$(window).scroll(function() {
  if ($(this).scrollTop() < 10) {
    $('#logo').animate({ "height": "150px", "margin-top": "0px", "margin-left": "0px" }, { duration: 1 })
    // $("#feature1").fadeOut(1000)
  }
  else {
    $('#logo').animate({ "height": "60px", "margin-top": "5px", "margin-left": "35px" }, { duration: 1 })
    // $("#feature1").fadeIn(1000)
  }
});
new WOW().init();

// var waypoint = new Waypoint({
//   element: document.getElementById('feature1'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//     $("#feature1").fadeIn(1000)
//   }
// })
// var waypoint = new Waypoint({
//   element: document.getElementById('feature1'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//     console.log(direction)
//     $('#feature1').fadeIn(1000)
//   },
//   offset: 200
// })
// $(window).scrollTop(function() {
//   console.log('hererer')
//   $('#logo').css({ "height": "150px", "margin-top": "0px", "margin-left": "0px" })
// });
// console.log(document.getElementById("logo"))
