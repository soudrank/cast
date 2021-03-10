$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
      { el: this.el, multiple: this.multiple },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.accordion-menu'), false);
})





// SP版メニュー開閉

$(function () {
  $('#nav-toggle').on('click', function () {
    $('nav ul').toggleClass('is-active');// #nav-toggleをクリックしたら(nav ulにis-activeクラスが追加される)
  });
}());

$(function () {
  $('.sliders').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '80%%',
    pauseOnHover: false,
    fade: true,
    speed: 3700,
    slidesToShow: 1,
    pauseOnFocus: false,
    prevArrow: 'false',
    nextArrow: 'false',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      }]

  });
});




$(function () {

  $('.slider1').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 1,
    prevArrow: '<div class="slick-prev"><i class="icon-l"></i></div>',
    nextArrow: '<div class="slick-next"><i class="icon-r"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      }]
  });
});




$(function () {

  $('.slider').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '80%%',
    slidesToShow: 1,
    prevArrow: '<div class="slick-prev"><i class="icon-l"></i></div>',
    nextArrow: '<div class="slick-next"><i class="icon-r"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      }]
  });
});



$(function () {
  $('.slid').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '80%%',
    pauseOnHover: false,
    fade: true,
    speed: 3700,
    pauseOnFocus: false,
    slidesToShow: 1,
    prevArrow: 'false',
    nextArrow: 'false',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      }]

  });
});



