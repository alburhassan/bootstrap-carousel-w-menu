(function($) {
  $.fn.hSlider = function() {
    $el = $(this);

    var carousel = $el.carousel('pause');
    var init = function() {
      var dataset = {};
      $el.find('.item').each(function() {
        var h3 = $(this).find("h3");
        var title = h3.first().text();
        var group = "";
        if(typeof h3.attr('data-group') !== "undefined") {
          group = h3.attr('data-group');
        }
        if(typeof dataset[group] === "undefined")
          dataset[group] = [];

        dataset[group].push(title);
      });

      for(var key in dataset) {
        $('.h-slider-nav-list').append("<li><h4>"+ key +"</h4></li>");
        $('.h-slider-nav-select').append("<optgroup label='"+ key +"'>");
        for(var stepKey in dataset[key]) {
          $('.h-slider-nav-select').append("<option>"+ dataset[key][stepKey] +"</option>");
          $('.h-slider-nav-list').append("<li><a href='#'>"+ dataset[key][stepKey] +"</a></li>");
        }
        $('.h-slider-nav-select').append("</optgroup>");
      }

      $('.h-slider-nav-list a').click(function() {
        var linkText = $(this).text();
        $('.h-slider .item').each(function(elIndex, el) {
          if($(el).find('h3').first().text() === linkText) {
            $('.carousel').carousel(elIndex);
          }
        });
      });

      $('.h-slider-nav-select').change(function() {
        $('.carousel').carousel($(this)[0].selectedIndex);
      });
    };

    var updateNav = function() {
      var nextButton = $('#next-button');
      var previousButton = $('#previous-button');
      // to hide or show the next previous buttons
      if($('.item.active').next().length <= 0) {
        nextButton.hide();
        previousButton.removeClass('col-sm-3');
        previousButton.addClass('col-sm-12');
      } else {
        nextButton.show();
        previousButton.addClass('col-sm-3');
        previousButton.removeClass('col-sm-12');
      }

      if($('.item.active').prev().length <= 0) {
        previousButton.hide();
        nextButton.removeClass('col-sm-9');
        nextButton.addClass('col-sm-12');
      } else {
        previousButton.show();
        nextButton.addClass('col-sm-9');
        nextButton.removeClass('col-sm-12');
      }

      var titleOfActive = $('.carousel .item.active').find("h3").first().text();
      $('.h-slider-nav-select option').each(function() {
        if($(this).text() == titleOfActive) {
          $(this).attr("selected","selected");
        } else {
          $(this).removeAttr("selected");
        }
      });

      $('.h-slider-nav-list li').each(function() {
        if($(this).text() == titleOfActive) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    };

    carousel.on('slid.bs.carousel', updateNav);
    init();
    updateNav();
    return this;
  };
}(jQuery));
