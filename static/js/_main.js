
// // Replace mailtos, avoid some spam
// function _mailme() {
//   var at = / at /;
//   var dot = / dot /g;
//   $('span.mailme').each(function() {
//     var addr = $(this).text().replace(at,"@").replace(dot,".");
//     $(this).after('<a href="mailto:'+addr+'" title="Send an email" class="stealth-link">'+ addr +'</a>')
//     .remove();
//   });
// }

// $(document).ready(_mailme);

smoothScroll.init();

new Imager({
  availableWidths: [192, 960, 1152, 1920],
  lazyload: true
});
