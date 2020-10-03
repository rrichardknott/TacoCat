$(document).ready(function () {

    $("#errorAlert").hide();
    $("#errorAlertButton").hide();

    $("#phrase").keypress(function (e) {
        var keycode = (e.keycode ? event.keycode : event.which);
        if (keycode == "13") {
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
            $("#title").html(cleanPhrase + " spelled backwards is " + reversedPhrase + ".<p><br/>It's a Palindrome!</p>");
        } else {
            $("#title").html(cleanPhrase + " spelled backwards is " + reversedPhrase + ".<p><br/>It's not a Palindrome.</p>");
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

    //Email Setup//
    emailjs.init("user_LwjM5EqrkyKKqnIS0Feds");

    $("#contactButton").on("click", function () {
        $("#contactButton").text("Sending...");
        var template_params = {
            "subject": $("#subject").val(),
            "message": $("#message").val(),
            "name": $("#name").val(),
            "email": $("#email").val()
        };

        if ($("#email").val().length < 10) {
            swal("Email Error!, You must enter a valid email address, error");
            $("#contactButton").text("Send");
            return;
        }

        var service_id = "default_service";
        var template_id = "emailtemplate1";
        var emailSuccess = swal({
            title: "Sent!",
            text: "Your email to Richard was successfully sent!",
            icon: "success",
        });

        emailjs.send(service_id, template_id, template_params).then(function () {
            emailSuccess;
            $("#contactButton").text("Send");
            $("#subject").val("");
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
        }, function (err) {
            swal("Error! Email not sent", "\r\n Response:\n " + JSON.stringify(err), "error");
            $("#contactButton").text("Send");
        });
        return false;
    });

});
