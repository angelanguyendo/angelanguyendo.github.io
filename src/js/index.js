import 'bootstrap';
import '../scss/index.scss';
import $ from 'jquery';

const width = $(window).width();
window.onscroll = function onScroll() {
  if (width >= 1000) {
    if (
      document.body.scrollTop > 80
      || document.documentElement.scrollTop > 80
    ) {
      $('#header').css('background', '#fff');
      $('#header').css('color', '#000');
      $('#header').css('box-shadow', '0px 0px 20px rgba(0,0,0,0.09)');
      $('#header').css('padding', '4vh 4vw');
      $('#navigation a').on(
        'hover',
        function onHover() {
          $(this).css('border-bottom', '2px solid rgb(255, 44, 90)');
        },
        function onHoverFail() {
          $(this).css('border-bottom', '2px solid transparent');
        },
      );
    } else {
      $('#header').css('background', 'transparent');
      $('#header').css('color', '#fff');
      $('#header').css('box-shadow', '0px 0px 0px rgba(0,0,0,0)');
      $('#header').css('padding', '6vh 4vw');
      $('#navigation a').on(
        'hover',
        function onHover() {
          $(this).css('border-bottom', '2px solid #fff');
        },
        function onHoverFail() {
          $(this).css('border-bottom', '2px solid transparent');
        },
      );
    }
  }
};

setTimeout(() => {
  $('#loading').addClass('animated fadeOut');
  setTimeout(() => {
    $('#loading').removeClass('animated fadeOut');
    $('#loading').css('display', 'none');
  }, 800);
}, 1650);

$(document).ready(() => {
  $('a').on('click', function onLinkClick(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const { hash } = this;
      $('body,html').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1800,
        () => {
          window.location.hash = hash;
        },
      );
    }
  });
});
