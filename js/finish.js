$(function() {
        text1ID = readCookie("text1ID")
        text1Counter = readCookie("text1Counter")
        text2Counter = readCookie("text2Counter")
    	text1LH = readCookie("text1LH")
        text2ID = readCookie("text2ID")
        text2LH = readCookie("text2LH")
        $("#text1ID").text(text1ID)
        $("#text1Counter").text(text1Counter)
        $("#text2Counter").text(text2Counter)
        $("#text1LH").text(text1LH)
        $("#text2ID").text(text2ID)
        $("#text2LH").text(text2LH)
    });