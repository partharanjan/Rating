Rating
======

Bootstrap Rating Control

Easy way to create Rating Control in Bootstrap

How To Use
==================================
Simple Import ratingcontrol.js in you application
```
$(function () {
Rating.Init({ RatingArea: "rating_area", Css: "review_star", OverCss: "mark" });
});
```

Parameters For Rating
===========================
 RatingArea: This is for where the Rating Control will draw.
 Css: CSS class for Rating control
 OverCss: When User Hover the mouse on control which css will fire
 RateTo: Initial display the Rating Controls (default:0)
 ReadOnly: Is Rating Control is Enabele or not (default:false)

How To Get Selected Rating Value
=====================================
```
$(function () {
Rating.Init({ RatingArea: "rating_area", Css: "review_star", OverCss: "mark" });
});
```
Rating.Rate

This will get the value in integer from (0-5)

Apply Rate To
=================================
In some case you want to display default Rating
Its very simple
```
$(function () {
Rating.Init({ RatingArea: "rating_area", Css: "review_star", OverCss: "mark",RateTo:4,ReadyOnly:true });
});
```

Apply ReadyOnly
=========================
No event for mouse hover or leave
```
$(function () {
Rating.Init({ RatingArea: "rating_area", Css: "review_star", OverCss: "mark",ReadyOnly:true });
});
```
