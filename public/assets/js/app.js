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

    $.post("/createUser", userInfo, function () {});
});


// -------- Main ---------

// Option Selection (Go to Table, Random Quote, Quick Quote)

// Random & Quick Quote
$("#randQuote").on("click", function (e) {
    e.preventDefault();
    // Grab API quote
    var randQuote = "*** API CALL ***"; // Import this
    // Get time
    var sendTime = $("#randTime").val();
    // Get phone number
    var randPhone = $("#randPhone").val();
    // Send info to twilio 
});
$("#submitQuickQuilly").on("click", function (e) {
    e.preventDefault();
    // Popup/form for quick quote
    quickQuote();
});


// // -------- Table --------

// // Grab Data from SQL and Display it in Table 
// connection.connect(function (err) {
//     if (err) throw err;
//     readData();
// });

// function readData() {
//     console.log("Reading...");
//     connection.query(
//         "SELECT quote_id, quote, time FROM quotes",
//         function (err, result) {
//             if (err) throw err;
//             for (var i in result) {
//                 console.log("Quote ID: " + result[i].quote_id + "   Quote: " + result[i].quote +
//                     "   Time: " + result[i].time);
//             }
//         }
//     )
// }
// // Grab User Input and Add to SQL (Click event to submit)
// $("#addNeverForget").on("click", function newQuote() {
//     var input = $("#newInput").val();
//     var newInput = {
//         text: input,
//         complete: 0
//     }

//     $.post("/api/quotes", newInput, function () {});

// });

// // Delete from SQL when User clicks delete button
// $("#deleteQuote").on("click", function deleteQuote() {
//     console.log("Deleting quote...\n");
//     connection.query(
//         "DELETE FROM quotes WHERE ?", {
//             id: this.id // ******** Need to test & prob change this ********
//         },
//         function (err, res) {
//             console.log(res.affectedRows + " Quotes deleted!\n");
//         }
//     );
// });

// // Checkbox on side to select quotes
// var checkedQuote = $("***Checkbox.Quote***").val() // ***** Not sure exactly how to work this *****
// // Click event for button below table to select the checked quotes
// $("#quoteCheck").on("click", function notifTime() {
//     // When quotes selected Pop up box

// });


// // Click event for submit and send info to twilio api 
// $("#submitTimes").on("click", function submitTimes() {
//     // Grab input for time (make it required before submitting)
//     var time = $("#selectTime").val();
//     var userPhone = $("#userPhone").val();
// });


// // -------- Random --------
// // Click event to call api when clicked 
// // **** Maybe popup to ask for time ****
// // ^^^^ If so grab user input and send to twilio api ^^^^
// // **** otherwise send at random time during day and pass info to twilio****


// // -------- Twilio Account Info --------

// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';
// const client = require('twilio')(accountSid, authToken);


// -------- Quick Quote --------

// Click event to open form 
function quickQuote() {
    // Open form
    var quote = $("#quillyMessage").val();
    var time = $("#qqTime").val();
    var phoneNum = $("#qqPhone").val();
    client.messages.create({
            body: quote,
            to: '+1' + phoneNum,
            from: '+1' + phoneNum,
            // mediaUrl: 'http://www.example.com/hearts.png',
        })
        .then((message) => process.stdout.write(message.sid));
}
// Grab user input for text and time and send data to twilio
$("#qqSubmit").on("click", function () {

});
// Option to store in SQL (checkbox maybe)

// // -------- Checkbox --------

// // Make sure checkbox is checked
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