$(document).ready(function () {

    $("#felixCatImageContainer").addClass("animate__flip");

    $("#errorAlert").hide();
    $("#errorAlertButton").hide();

    $("#phrase1").keypress(function (e) {
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
        $("#phrase1").val("").focus();
        $("#submitButton").show();
        $("#clearButton").show();
        $("#title").text("Enter a Word or Phrase Below");
        $("#resultText").val("");
        $("#errorAlert").hide();
    });

    $("#clearButton").on("click", function () {
        $("#phrase1").val("").focus();
        $("#title").text("Enter a Word or Phrase Below");
        $("#resultText").val("");
        $("#resultTextContainer").addClass("hidden");
        $("#felixCatImageYeah").addClass("hidden");
        $("#felixCatImageContainer").removeClass("animate__zoomInLeft");
        $("#felixCatSadImageContainer").addClass("hidden");
        $("#felixCatImageContainer").removeClass("hidden");
       

    });  


    //===my function===//
    function isItAPalindrome() {
        if ($("#phrase1").val().length == 0) {
            $("#errorAlertButton").show();
            $("#submitButton").hide();
            $("#clearButton").hide();
            $("#errorAlert").show();
            return;
        }

        let lettersOnly = /[\W0-9_]/g;
        let cleanPhrase = $("#phrase1").val().toLowerCase().replace(lettersOnly, "");
        let reversedPhrase = cleanPhrase.split("").reverse().join("");

        $("#resultText").val(reversedPhrase);

        if (cleanPhrase === reversedPhrase) {
            $("#resultTextContainer").removeClass("hidden");            
            $("#felixCatImageYeah").removeClass("hidden");
            $("#felixCatImageContainer").removeClass("animate__flip");
            $("#felixCatImageContainer").addClass("animate__zoomInLeft");
        } else { 
            $("#resultTextContainer").removeClass("hidden");
            $("#felixCatImageContainer").addClass("hidden");
            $("#felixCatSadImageContainer").removeClass("hidden");
            $("#felixCatSadImageContainer").addClass("animate__zoomInRight");
        }
    }


});
