$(function() {
    var textID, lineHeight
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	
	$.getJSON("text.json", function(data) {
    	text = data.text[getRandomInt(0,1)]
    	textID = text.ID
        console.log(textID)
    	if (getRandomInt(0,1) == 1) {
    		$(".text").css("line-height", "150%")
    		lineHeight = 1.5

		} else {
            $(".text").css("line-height", "100%")
            lineHeight = 1.0
        }
    		$(".text").text(text.content)
    });
    
    var counter = 0;
    var myInterval = setInterval(function () {
      ++counter;
    }, 1000);

    // to stop the counter
    $('.next').click(function(){
        clearInterval(myInterval)
        createCookie('text1Counter', counter, 30)
        createCookie('text1LH', lineHeight, 30)
        createCookie('text1ID', textID, 30)
        location.href = "1-questions.html"
    });
    
	})