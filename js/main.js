function sizeshards() {
    $(".wrap").each(function() {
        var t = .99 * $(window).width(),
            e = .7 * t,
            a = -1 * (t / 2),
            n = -1 * (e / 2) - 0;

        $(this).each(function() {
            $(this).css({
                width: t,
                height: e,
                "margin-top": n,
                "margin-left": a
            })
        })
    });
}


$("body").addClass("start-up-seq");
$("body").delay(1000).addClass("thirty-pieces-titles");
$(document).ready(function() {
    sizeshards(),$(".level-one, .loading").removeClass("hidden-startup")
});