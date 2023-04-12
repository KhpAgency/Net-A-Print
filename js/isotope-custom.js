// (function ($) {
//   // USE STRICT
//   "use strict";

//   /*ISOTOPE*/
//   var $topeContainer = $('#isotope-grid');
//   var $filter = $('#filter');

//   // filter items on button click
//   $filter.each(function () {
//     $filter.on('click', 'li span', function () {
//       var filterValue = $(this).attr('data-filter');
//       $topeContainer.isotope({
//         filter: filterValue
//       });
//     });
//     var $buttonGroup = $('#filter');
//     $buttonGroup.on('click', 'li', function () {
//       $buttonGroup.find('.active').removeClass('active');
//       $(this).addClass('active');
//     });
//   });

//   // init Isotope
//   $(window).on('load', function () {
//     var $grid = $topeContainer.each(function () {
//       $(this).isotope({
//         itemSelector: '.item',
//         percentPosition: true,
//         animationEngine: 'best-available',
//         masonry: {
//           columnWidth: '.item'
//         }
//       });
//     });
//   });


// })(jQuery);


// (function ($) {
  // USE STRICT
  // "use strict";

  /*ISOTOPE*/
  // var $topeContainer = $('#isotope-grid');
  // var $filter1 = $('#filter-1');
  // var $filter2 = $('#filter-2');

  // filter items on button click
//   $filter1.on('click', 'li span', function () {
//     var filterValue = $(this).attr('data-filter');
//     $topeContainer.isotope({
//       filter: filterValue
//     });
//   });
//   $filter2.on('click', 'li span', function () {
//     var filterValue = $(this).attr('data-filter');
//     $topeContainer.isotope({
//       filter: filterValue
//     });
//   });

//   var $buttonGroup1 = $('#filter-1');
//   $buttonGroup1.on('click', 'li', function () {
//     $buttonGroup1.find('.active').removeClass('active');
//     $(this).addClass('active');
//   });
//   var $buttonGroup2 = $('#filter-2');
//   $buttonGroup2.on('click', 'li', function () {
//     $buttonGroup2.find('.active').removeClass('active');
//     $(this).addClass('active');
//   });

// })(jQuery);

(function($) {
  // USE STRICT
  "use strict";

  /*ISOTOPE*/
  var $topeContainer = $("#isotope-grid");
  var $filter1 = $("#filter-1");
  var $filter2 = $("#filter-2");

  // filter items on button click
  $filter1.on("click", "li span", function() {
    var filterValue = $(this).attr("data-filter");
    $topeContainer.isotope({
      filter: filterValue
    });
    $(this)
      .closest("li")
      .siblings()
      .removeClass("active")
      .end()
      .addClass("active");
      $filter2.find(".active").removeClass("active");
  });
  $filter2.on("click", "li span", function() {
    var filterValue = $(this).attr("data-filter");
    $topeContainer.isotope({
      filter: filterValue
    });
    $(this)
      .closest("li")
      .siblings()
      .removeClass("active")
      .end()
      .addClass("active");
      $filter1.find(".active").removeClass("active");
  });

  // init Isotope
  $(window).on("load", function() {
    var $grid = $topeContainer.each(function() {
      $(this).isotope({
        itemSelector: ".item",
        percentPosition: true,
        animationEngine: "best-available",
        masonry: {
          columnWidth: ".item"
        }
      });
    });
  });
})(jQuery);


