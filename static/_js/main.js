
// ...
//= require _jquery-1.8.1.min
//= require _jquery.unveil.min

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

$(document).ready(function() {
    $("img.lazy").show().unveil(1000);
});


$("a.video").hover(
  function () {
    $(this).addClass("hover");
    $(this).find(".video-play-icon").addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
    $(this).find(".video-play-icon").removeClass("hover");
  }
);

$('a.video').click(function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    var video_id = url.match(/v=(.{11})/)[1];
    var video = '<div class="video-wrapper"><iframe src="http://www.youtube.com/embed/'+ video_id +'?autoplay=1&hd=1&rel=0&autohide=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>';
    console.log(video);
    $(this).replaceWith(video);
});