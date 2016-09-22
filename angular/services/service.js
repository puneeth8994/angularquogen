myApp.factory('QuoteService', function QuoteFactory($http) {

    // this method first 
    var quoteAPIS = {};
    var baseUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';



    quoteAPIS.getQuotes = function() {

            return $http({

                method: 'GET',
                url: baseUrl,
                data: {}, // Additional parameters here
                dataType: 'json',
                headers: {
                    "X-Mashape-Authorization": "YmswcSvOv5mshsquXC7MIXbHaibsp1WCDStjsn8Du87hUCSWRd"
                }

            })


        } // end get quotes
    return quoteAPIS;



}); //end Quote service