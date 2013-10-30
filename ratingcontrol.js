var Rating =
{
    Init: function (options) {
        //init varibales
        Rating.Config = { RatingArea: "", Css: "", OverCss: "", RateTo: 0, ReadOnly: false };
        $.extend(Rating.Config, options);
        Rating.Rate = Rating.Config.RateTo;
        Rating.ReviewArea = $('#' + Rating.Config.RatingArea);
        Rating.ReviewArea.empty();
        //create rating controls
        for (var i = 1; i <= 5; i++) {
            Rating.ReviewArea.append('<span class="glyphicon glyphicon-star ' + Rating.Config.Css + '" id="' + Rating.Config.Css + '-' + i + '" data-position="' + i + '"></span>');
        }

        if (!Rating.Config.ReadOnly) {
            //fire event on mouse enter
            $('.' + Rating.Config.Css).on('mouseenter', function (e) {
                var stars = $(this);
                var star_position = parseInt(stars.attr("data-position"));
                Rating.RateTo(star_position);
            });
            //mouse leave
            $('.' + Rating.Config.Css).on('mouseleave', function (e) {
                if (Rating.Rate == 0) {
                    //for all clear
                    $('.' + Rating.Config.Css).removeClass(Rating.Config.OverCss);
                }
                else {
                    Rating.RateFrom(Rating.Rate + 1);
                }
            });
            //mouse click
            $('.' + Rating.Config.Css).on('click', function (e) {
                var stars = $(this);
                var star_position = parseInt(stars.attr("data-position"));
                Rating.RateTo(star_position);
                Rating.Rate = star_position;
            });
        }
        else {
            if (Rating.Rate > 0) {
                Rating.RateTo(Rating.Rate);
            }
        }
    },
    RateTo: function (to) {
        //remove all marked class
        for (var i = 1; i <= to; i++) {
            $("#" + Rating.Config.Css + '-' + i).addClass(Rating.Config.OverCss);
        }
    },
    RateFrom: function (from) {
        for (var i = from; i <= 5; i++) {
            $("#" + Rating.Config.Css + '-' + i).removeClass(Rating.Config.OverCss);
        }
    }
}
