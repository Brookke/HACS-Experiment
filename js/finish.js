$(function() {
    d = new Date();
    date = d.toUTCString()
    text1ID = readCookie("text1ID")
    text1Counter = readCookie("text1Counter")
    text2Counter = readCookie("text2Counter")
	text1LH = readCookie("text1LH")
    text2ID = readCookie("text2ID")
    text2LH = readCookie("text2LH")
    signature = localStorage.getItem("signature")
    text2Score = readCookie("text2Score")
    text1Score = readCookie("text1Score")
    text2Difficulty = readCookie("text2Difficulty")
    text1Difficulty = readCookie("text1Difficulty")
    ID = getID()
    $("#date").val(date)
    $("#userID").val(ID)
    $("#signature").val(signature)
    $("#text1ID").val(text1ID)
    $("#text1Counter").val(text1Counter)
    $("#text2Counter").val(text2Counter)
    $("#text1LH").val(text1LH)
    $("#text2ID").val(text2ID)
    $("#text2LH").val(text2LH)
    $("#text2Score").val(text2Score)
    $("#text1Score").val(text1Score)
    $("#text1Difficulty").val(text1Difficulty)
    $("#text2Difficulty").val(text2Difficulty)
    $('#ID').text("ID:" + ID)
    
});
function formValidation() {
    if (!$("[name=textPreference]").val()) {

    } else if (!$("[name=textPreference]").val()) {

    }

}