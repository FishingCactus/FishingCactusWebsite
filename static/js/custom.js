var cacti = [
    "../img/cactus_bob.svg",
    "../img/cactus_sam.svg",
    "../img/cactus_emmett.svg",
    "../img/cactus_clark.svg",
    ];
var cacti_images = [
    {img: null, used:false},
    {img: null, used:false},
    {img: null, used:false},
    {img: null, used:false}
    ];

$(document).ready(function(){
    // preload cacti:
    for(var i = 0; i < cacti.length; ++i) {
        var img = '<img src="' + cacti[i] + '">';
        var img = $(img);
        img.hide();
        img.addClass("cactus img-responsive");
        cacti_images[i].img = img;
    }
    $("nav .navbar-collapse li").filter(function() {
        return !$(this).hasClass("hidden");
    }).each(function(index) {
        $(this).hover(
            function(){
                if ( index <= cacti.length && !cacti_images[index].used ) {
                    cacti_images[index].used = true;
                    var img = cacti_images[index].img;
                    img.removeAttr("style");
                    img.hide();
                    img.appendTo("body");
                    var position = $(this).position();
                    img.css({"left": position.left + ($(this).width() - img.width()) / 2.0});
                    img.slideDown(200);
                }
            },
            function() {
                cacti_images[index].img.slideUp({ "queue": false, "complete": function() {cacti_images[index].used = false; $(this).remove();}, "speed": 200 });
            }
        );
    });
});