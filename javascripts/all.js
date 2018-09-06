
$( document ).ready(function() {
  function upShowToggle() {
    var scrollValue = $(this).scrollTop(),
      windowHeight = $(window).height()*0.5;
    if (window.innerWidth > 767){
      if (scrollValue > windowHeight) {
        $('#up').fadeIn();
      } else {
        $('#up').fadeOut();
      }
    }
  }
  $(window).scroll(function(){
      upShowToggle();
  });
  $('#js-show-menu, #js-menu a').on('click',  function(e){
      e.preventDefault();
      $('.header').toggleClass('menu-show');
  });
  $('#js-menu a').on('click', function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 50 //scrollTop 是scroll的垂直位置
    }, 1000);
    return false;
  });
  $('#up').click(function(){
      $('html,body').animate({scrollTop:0}, 1000);
  });
});
