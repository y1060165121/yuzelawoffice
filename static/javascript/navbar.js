$('#zhuanyelingyu').hover(function() {
  $('#zhuanyelingyu_dropdown').addClass('show');
  $('#logo').css({ "height": "60px", "margin-top": "5px", "margin-left": "35px" })

}, function() {
  $('#zhuanyelingyu_dropdown').removeClass('show');
  $('#logo').css({ "height": "150px", "margin-top": "0px", "margin-left": "0px" })
});

// console.log(document.getElementById("logo"))
