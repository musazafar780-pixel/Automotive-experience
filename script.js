$(window).on('scroll', function () {

  let scrolled = $(window).scrollTop();

  $('.layer-back').css('transform', 'translateY(' + scrolled * 0.2 + 'px)');
  $('.layer-mid').css('transform', 'translateY(' + scrolled * 0.4 + 'px)');
  $('.layer-front').css('transform', 'translateY(' + scrolled * 0.6 + 'px)');

});
