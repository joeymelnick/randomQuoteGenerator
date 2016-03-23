$(document).ready(function() {
    $("#new-quote").on("click", function(){
     $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
       dataType: 'JSON',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var quote = response.quote;
      var author = response.author;
      var quoteAuthor = quote + ' - ' + author
      $('.quote-text').hide().html(quote).fadeIn(600);
      $('#author-text').hide().html("- " + author).fadeIn(600);
      console.log(quote.length)
     if (quote.length >= (138-author.length)) {
        quote = quote.slice(0, (138-author.length));
        quoteAuthor = quote + '... - ' + author;
      updateTwitterValues(quoteAuthor);
       }
       else{
       updateTwitterValues(quoteAuthor);
     }
      
      changeColors(getRandomColor());
       
    }
     });
     });  
});

function changeColors(colorValue){
  $('.quote-text, #author-text').css('color', colorValue)
  $('.container').css('background', colorValue)
  
}

function updateTwitterValues(quotehere) {
// clear out the <a> tag that's currently there...probably don't really need this since you're replacing whatever is in there already.
  $('tweet').html('&nbsp;'); 
  $('.tweet').html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="none" data-text="' + quotehere + '" data-count="none">Tweet</a>');
twttr.widgets.load();
}

function getRandomColor() {
        var colors = ['9C27B0', '3F51B5', '303F9F', '388E3C', '7B1FA2'];
        var color = '#';
  color += colors[Math.floor(Math.random() * 5)];
        console.log(color)
  return color;
    };
