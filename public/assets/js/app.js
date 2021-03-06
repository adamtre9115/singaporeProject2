$(document).ready(function () {

    // -------- Log In --------

    // Grab User Log In & Event to go to main page
    $("#regSubmit").on("click", function (e) {
        // Grab Username
        var userName = $("#regName").val().trim();
        // Grab Email
        var grabEmail = $("#regEmail").val();
        // Grab password
        var password = $("#regPassword").val().trim();
        var userInfo = {
            userName: userName,
            password: password
        }
        console.log(userInfo);
        // Post To SQL
        $.post("/createUser", userInfo, function () {});
    });


    // -------- Main ---------

    // Option Selection (Go to Table, Random Quote, Quick Quote)


    // ##### Quick Quote #####
    $("#submitQuickQuilly").on("click", function (e) {
        e.preventDefault();
        var message = $("#quickQuillyTextarea").val().trim();
        var time = $("#quickQuillyTime").val().trim();
        var phone = $("#quickQuillyPhone").val().trim();
        // Grab user input for text and time and send data to twilio
        var twilioData = {
            message: message,
            time: time,
            phoneNum: phone
        }
        $.post("/twilio", twilioData, function () {});
    });

    // ##### Random #####
    $("#submitRandomQuilly").on("click", function (e) {
        e.preventDefault();
        // Grab API quote
        var twilioData = {
            time: $("#randTime").val(),
            phoneNum: $("#randPhone").val()
        }

        // Send info to twilio
        $.post("/twilio/rand", twilioData, function () {});
    });

    // ### MAYBE ADD LATER ####
    // Option to store quote in SQL (checkbox maybe)


    // -------- Table --------

    // Click event for button below table to select the checked quotes
    $("#persQuillySubmit").on("click", function (e) {
        e.preventDefault();
        var message = "";
        var phone = $("#persQuillyPhone").val().trim();
        var time = $("#persQuillyTime").val().trim();
        var items = $('.line-through');

        // When quotes selected Pop up box for time select
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].innerText);
            message += " " + items[i].innerText;
        }
        // console.log(message);
        var twilioData = {
            message: message,
            time: time,
            phoneNum: phone
        }
        $.post("/twilio", twilioData, function () {});
    });


    // Click event for submit and send info to twilio api 
    // $("#submitTimes").on("click", function submitTimes() {
    //     // Grab input for time (make it required before submitting)
    //     var quote = ? ? ? ;
    //     var time = $("#selectTime").val();
    //     var userPhone = $("#userPhone").val();
    //     twilio(quote, time, userPhone);
    // });



    // -------- Checkbox --------

    // Make sure checkbox is checked
    // function check() {
    //     // If not ingnore field
    //     // Grab quote out of checked box
    //     for (var i = 1; i < table.rows.length; i++) {
    //         if ($('#quoteCheck')[i].is(':checked')) { // Maybe able to use THIS.CHECKED
    //             value_check += i + ": " + $('#quoteCheck')[i].val();
    //             // Alert(this.value) <-- maybe
    //         }
    //     }
    // }

    // ######## Probably don't need this ########
    // function check() {
    //     $("#myCheck").checked = true;
    // }

    // -------- TWILIO --------


    // -------- RANDOM QUOTE MAIN PAGE --------

    function getRandQuote() {
        var quotes = [
            "You look really nice today... Just kidding!",
            "In order to succeed, we must first believe that we can. ~ Nikos Kazantzakis",
            "Only I can change my life. No one can do it for me. ~ Carol Burnett",
            "We should not give up and we should not allow the problem to defeat us. ~ A. P. J. Abdul Kalam",
            "The past cannot be changed. The future is yet in your power.",
            "Perfection is not attainable, but if we chase perfection we can catch excellence. ~ Vince Lombardi",
            "No matter what people tell you, words and ideas can change the world. Robin Williams",
            "When you have a dream, you've got to grab it and never let go.",
            "Shoot for the moon and if you miss you will still be among the stars. ~ Les Brown",
            "Out of difficulties grow miracles. ~ Jean de la Bruyere",
            "When we seek to discover the best in others, we somehow bring out the best in ourselves. ~ William Arthur Ward",
            "There is nothing impossible to him who will try. ~ Alexander the Great",
            "Your big opportunity may be right where you are now. ~ Napoleon Hill",
            "We can change our lives. We can do, have, and be exactly what we wish.  ~Tony Robbins"
        ]

        // generate random quote for jumbotron tag
        function quote() {
            setInterval(function () {
                var num = Math.floor(Math.random() * quotes.length);
                $("#quoteDisplay").text(quotes[num]);
            }, 5000)

        }
        quote();
    }
    getRandQuote();
});