
    $("#errorAlert").hide();
    $("#errorAlertButton").hide();

    $("#submitButton").click(function () {
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
            $("#title").text("It's a Palindrome!");
        } else {
            $("#title").text("It's not a Palindrome.");
        }
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