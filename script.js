
window.console = window.console || function(t) {};




if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}


$(document).ready(function () {
var quote;
var author;
function getNewQuote() {
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        success: function (response) {
            quote = response.quoteText;
            author = response.quoteAuthor;
            $('#quote').text(quote);
            if (author) {
                $('#author').text('- ' + author);
            } else {
                $('#author').text('- Who knows');
            }
        }
    });
}
getNewQuote();
$('.getquote').on('click', function () {
    getNewQuote();
});
$('.tweet-it').on('click', function () {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' + author));
});
// $('.tumblr-it').on('click', function () {
//     event.preventDefault();
//     window.open('https://www.tumblr.com/share/tools?' + encodeURIComponent(quote + '- ' + author));
// });
});
