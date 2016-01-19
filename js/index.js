$(function() {
    $("#continueButton").click(function() {
        if ($('#consent').prop('checked')) {
            location.href = "1.html"
        }
    })
})