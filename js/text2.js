$(function() {
    var textID, lineHeight
	$.getJSON("text.json", function(data) {
        if (readCookie("text1ID") == 1) {
            if (getRandomInt(1,2) == 1) {
                text = data.text[1]
            } else {
                text = data.text[2]
            }
        } else if (readCookie("text1ID") == 2) {
            if (getRandomInt(1,2) == 1) {
                text = data.text[0]
            } else {
                text = data.text[2]
            }
        } else if (readCookie("text1ID") == 3) {
            if (getRandomInt(1,2) == 1) {
                text = data.text[0]
            } else {
                text = data.text[1]
            }
        }
    	textID = text.ID
        console.log(textID)
    	if (readCookie("text1LH") == 1) {
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
        createCookie("text2Counter", counter, 30)
        createCookie("text2ID", textID, 30)
        createCookie("text2LH", lineHeight, 30)
        location.href = "2-questions.html"
    });
    
	})