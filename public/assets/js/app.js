// -------- Log In --------

// Grab User Log In & Event to go to main page
$("***LOGIN SUBMIT***").on("click", function (e) {
    e.preventDefault();
    // Grab Username
    var userID = $("***USER ID***").val().trim();
    // Grab password
    var password = $("***USER PASSWORD***").val().trim();
    // Send to firebase
});




// -------- Main -------- 

// Option Selection (Go to Table, Random Quote, Quick Quote)
// Event to got to table page
$("***GO TO TABLE***").on("click", function (e) {
    e.preventDefault();
    // Route to table
});
// Random & Quick Quote
$("***RANDOM***").on("click", function (e) {
    e.preventDefault();
    // Grab API quote
    var randQuote = "*** API CALL ***";
    // Get time
    var sendTime = $("***TIME INPUT***").val().trim();
    // Send info to twilio 
});
$("***QUICK QUOTE***").on("click", function (e) {
    e.preventDefault();
    // Route to table
});


// -------- Table --------

// Grab Data from SQL and Display it in Table 
connection.connect(function (err) {
    if (err) throw err;
    readData();
});

function readData() {
    console.log("Reading...");
    connection.query(
        "SELECT quote_id, quote, time FROM quotes",
        function (err, result) {
            if (err) throw err;
            for (var i in result) {
                console.log("Quote ID: " + result[i].quote_id + "   Quote: " + result[i].quote +
                    "   Time: " + result[i].time);
            }
        }
    )
}
// Grab User Input and Add to SQL (Click event to submit)
$("***NEW QUOTE***").on("click", function newQuote() {


    console.log("Inserting new quote...\n");
    var query = connection.query(
        "INSERT INTO quotes SET ?", {
            quote: $("***USER QUOTE INPUT***").val().trim(),
            time: CURRENT_TIME
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " new quote inserted!\n");
        }
    );
});

// Delete from SQL when User clicks delete button
$("***DELETE QUOTE***").on("click", function deleteQuote() {
    console.log("Deleting quote...\n");
    connection.query(
        "DELETE FROM quotes WHERE ?", {
            id: this.id // ******** Need to test & prob change this ********
        },
        function (err, res) {
            console.log(res.affectedRows + " Quotes deleted!\n");
        }
    );
});

// Checkbox on side to select quotes
var checkedQuote = $("***Checkbox.Quote***").val() // ***** Not sure exactly how to work this *****
// Click event for button below table to select the checked quotes
$("***SELECT CHECKED BOXES***").on("click", function notifTime() {
    // When quotes selected Pop up box

});


// Click event for submit and send info to twilio api 
$("***SUBMIT TIMES***").on("click", function submitTimes() {
    // Grab input for time (make it required before submitting)
});


// -------- Random --------
// Click event to call api when clicked 
// **** Maybe popup to ask for time ****
// ^^^^ If so grab user input and send to twilio api ^^^^
// **** otherwise send at random time during day and pass info to twilio****

// -------- Quick Quote --------
// Click event to open form 
$("***QUICK QUOTE***").on("click", function quickQuote() {
    // Open form
});
// Grab user input for text and time and send data to twilio
$("***QQ SUBMIT***").on("click", function () {

});
// Option to store in SQL (checkbox maybe)