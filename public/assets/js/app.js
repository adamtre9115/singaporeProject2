// -------- Log In --------
$(document).ready(function () {
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
        // Post To SQL
        $.post("/createUser", userInfo, function () {});
    });


    // -------- Main ---------

    // Option Selection (Go to Table, Random Quote, Quick Quote)


    // ##### Quick Quote #####

    $("#submitQuickQuilly").on("click", function (e) {
        e.preventDefault();
        console.log("YYOOOO");
        var message = $("#quillyMsg").val().trim();;
        var time = $("#qqTime").val().trim();
        var phone = $("#qqPhone").val().trim();
        // Grab user input for text and time and send data to twilio
        var twilioData = {
            message: message,
            time: time,
            phoneNum: phone
        }
        console.log("WHEREA ARE you KLJFLK:D J");
        $.post("/main", twilioData, function () {});
    });

    // ##### Random #####

    // $("#randQuote").on("click", function (e) {
    //     e.preventDefault();
    //     // Grab API quote
    //     var randQuote = "*** API CALL ***"; // Import this
    //     // Get time
    //     var sendTime = $("#randTime").val();
    //     // Get phone number
    //     var randPhone = $("#randPhone").val();
    //     console.log(randQuote, sendTime, randPhone);
    //     // Send info to twilio 
    //     twilio(randQuote, sendTime, randPhone);
    // });

    // ### MAYBE ADD LATER ####
    // Option to store quote in SQL (checkbox maybe)


    // -------- Table --------

    // // Checkbox on side to select quotes
    // Click event for button below table to select the checked quotes
    // $("#quoteCheck").on("click", function notifTime() {
    //     // When quotes selected Pop up box for time select
    //     var checkedQuote = $("***Checkbox.Quote***").val() // ***** Not sure exactly how to work this *****

    // });


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