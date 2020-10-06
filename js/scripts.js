$(document).ready(function () {

    $("#errorAlert").hide();
    $("#errorAlertButton").hide();

    $("#phrase").keypress(function (e) {
        var keycode = (e.keycode ? event.keycode : event.which);
        if (keycode == "13") {
            isItAPalindrome();
        }
    });

    $("#submitButton").click(function () {
        isItAPalindrome();
    });

    $("#errorAlertButton").on("click", function () {
        $("#errorAlertButton").hide();
        $("#phrase").val("").focus();
        $("#submitButton").show();
        $("#clearButton").show();
        $("#title").text("taco cat");
        $("#resultText").val("");
        $("#errorAlert").hide();
    });

    $("#clearButton").on("click", function () {
        $("#phrase").val("").focus();
        $("#title").text("taco cat");
        $("#resultText").val("");
    });  


    //===my function===//
    function isItAPalindrome() {
        if ($("#phrase").val().length == 0) {
            $("#errorAlertButton").show();
            $("#submitButton").hide();
            $("#clearButton").hide();
            $("#errorAlert").show();
            return;
        }

        let lettersOnly = /[\W0-9_]/g;
        let cleanPhrase = $("#phrase").val().toLowerCase().replace(lettersOnly, "");
        let reversedPhrase = cleanPhrase.split("").reverse().join("");

        $("#resultText").val(reversedPhrase);

        if (cleanPhrase === reversedPhrase) {
            $("#title").html(cleanPhrase + " spelled backwards is " + reversedPhrase + ".<p><br/>It's a Palindrome!</p>");
        } else {
            $("#title").html(cleanPhrase + " spelled backwards is " + reversedPhrase + ".<p><br/>It's not a Palindrome.</p>");
        }
    }


});
