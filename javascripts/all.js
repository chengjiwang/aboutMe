
$( document ).ready(function() {
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
});
