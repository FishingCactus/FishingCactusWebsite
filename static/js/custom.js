var cacti = [
    "../img/cactus_bob.svg",
    "../img/cactus_sam.svg",
    "../img/cactus_emmett.svg",
    "../img/cactus_clark.svg",
    ];
var cacti_images = [
    null,
    null,
    null,
    null
    ];

$(document).ready(function(){
    // preload cacti:
    for(var i = 0; i < cacti.length; ++i) {
        var img = '<img src="' + cacti[i] + '">';
        var img = $(img);
        img.hide();
        img.addClass("cactus img-responsive");
        cacti_images[i] = img;
    }
    $("nav .navbar-collapse li").filter(function() {
        return !$(this).hasClass("hidden");
    }).each(function(index) {
        $(this).hover(
            function(){
                if ( index <= cacti.length ) {
                    var img = cacti_images[index];
                    img.removeAttr("style");
                    img.hide();
                    img.appendTo("body");
                    var position = $(this).position();
                    img.css({ "left": position.left + ($(this).width() - img.width()) / 2.0});
                    img.stop(false,true);
                    img.slideDown({ "queue": true, "speed": 200});
                }
            },
            function() {
                cacti_images[index].slideUp({ "queue": true, "speed": 200 });
            }
        );
    });
});