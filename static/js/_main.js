
// Replace mailtos, avoid some spam
function _mailme() {
  var mailmeOriginal = document.getElementById("mailme").outerHTML;
  var at = / at /;
  var dot = / dot /g;
  var mailmeEmail = mailmeOriginal.match(/>(.*)</)[1];
  mailmeEmail = mailmeEmail.replace(at,"@").replace(dot,".");
  mailmeClass = mailmeOriginal.match(/class="(.*?)"/)[1];
  var mailmeReplacement = '<a href="mailto:'+mailmeEmail+'" title="Send an email" class="'+mailmeClass+'">'+mailmeEmail+'</a>';
  document.getElementById("mailme").outerHTML = mailmeReplacement;
}
_mailme();

smoothScroll.init();

new Imager({
  availableWidths: [192, 960, 1152, 1920],
  lazyload: true
});
