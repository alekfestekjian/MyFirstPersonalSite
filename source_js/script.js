

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
  //Change nav bar anchor tags to classes
  $('a[href^="#"]').on('click',function (e) {
    //get child hash
      var target = this.hash;
      var $target = $(target);
      if(this.hash == "#close" || this.hash == "#MasteryModal" || this.hash == "#ArmadaModal" || this.hash == "#FastModal"){
        return;
      }
    

      e.preventDefault();
   
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 40
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
   
  });
});
/*Position derived from*/
/*https://api.jquery.com/hover/*/
/*http://stackoverflow.com/questions/23206101/navigation-bar-that-tells-where-you-are*/
function onScreen() {
    // Check if the top of the page collides with each section
    $('section').each(function() {
        var windowScroll = $(document).scrollTop();
        var navHeight = $('.nav-bar').height();
  
        if( windowScroll + navHeight >= $(this).offset().top && windowScroll + navHeight < $(this).offset().top + $(this).height()) {
            $('.nav-bar ul a#' + $(this).attr('id')+'_button').addClass('highlight');
        } else {
            $('.nav-bar ul a#' + $(this).attr('id')+'_button').removeClass('highlight');
        }

    });
}

$(window).on('scroll resize', function () {
    onScreen();
});