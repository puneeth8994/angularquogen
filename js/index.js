$(document).ready(function() {

    function getRandomColor() {
        var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        var color = '#';
        
        for (var i = 0; i < 6; i++) {
        	num=Math.floor(Math.random() * 16);
            color += letters[num];
        }
        console.log(letters[num]);
        console.log(color);
        return color;
    }

    $("#newQuote").click(function() {
        $('body').css("background-color", getRandomColor());
        $('.quotes').css("background-color","black");
        $('.quotes').css("color","white");
    });

});
