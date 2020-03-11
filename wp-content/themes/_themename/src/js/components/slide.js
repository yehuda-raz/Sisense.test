const slidersize = (perent, silde) => {
    $(silde).css("width", $(perent).width());
}


$(window).resize(function () {
    slidersize();

});

$(document).ready(function () {
    slidersize();

});
