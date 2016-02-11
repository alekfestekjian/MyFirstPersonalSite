// var divs = document.getElementsByTagName('div');
// for(var i=0; i<divs.length; i++) {
//   divs[i].addEventListener("click", highlightThis);
//   /*
//   divs[i].addEventListener("click", highlightThis, true);
//   divs[i].addEventListener("click", highlightThis, false);*/
// }

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

/*
http://www.bootply.com/109943
shrinking nav bar
*/

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
$(document).scroll(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      console.log($target.offset().top)

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 40
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});
