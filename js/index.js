$(document).ready(function() {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $("#newQuote").click(function() {
        $('body').css("background-color", getRandomColor());
        $('.quotes').css("background-color","black");
        $('.quotes').css("color","white");
    });




});
