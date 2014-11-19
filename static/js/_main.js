
// Replace mailtos, avoid some spam
function _mailme() {
    var at = / at /;
    var dot = / dot /g;
    $('span.mailme').each(function() {
      var addr = $(this).text().replace(at,"@").replace(dot,".");
      $(this).after('<a href="mailto:'+addr+'" title="Send an email" class="stealth-link">'+ addr +'</a>')
            .remove();
    });
}

$(document).ready(_mailme);

// Smooth scroller
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        if (target == '#contact') { target = '#about'};
        console.log($target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// Lazy-load images
$(document).ready(function() {
    $("img").unveil(1000, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});

