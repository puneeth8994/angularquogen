// this is without $scope
myApp.controller('mainController', ['$http', 'QuoteService', function($http, QuoteService) {

    //create a context
    var main = this;

    this.baseUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';

    this.loadQuote = function() {
            QuoteService.getQuotes()
                .then(function successCallback(data) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(data.data.quote);
                    console.log(data.data.author);
                    var quote = data.data.quote;
                    var author = data.data.author;
                    $("#title").html(quote);
                    $("#title2").html(author);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert("some error occurred. Check the console.");
                    console.log(response);

                });
        } //end loadQuote


    $("#newQuote").click(function() {


        main.loadQuote();
    });




}]); // end controller