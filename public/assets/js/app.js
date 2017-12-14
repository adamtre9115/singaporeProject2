// -------- Log In --------

// // Grab User Log In & Event to go to main page
// $("#regSubmit").on("click", function (e) {
//     e.preventDefault();
//     // Grab Username
//     var userID = $("#regID").val();
//     // Grab password
//     var password = $("#regPassword").val();
//     // Send to firebase
// });


// // -------- Main ---------

// // Option Selection (Go to Table, Random Quote, Quick Quote)
// // Event to got to table page
// $("#quoteTable").on("click", function (e) {
//     e.preventDefault();
//     // Route to table

// });
// // Random & Quick Quote
// $("#randQuote").on("click", function (e) {
//     e.preventDefault();
//     // Grab API quote
//     var randQuote = "*** API CALL ***"; // Import this
//     // Get time
//     var sendTime = $("#randTime").val();
//     // Get phone number
//     var randPhone = $("#randPhone").val();
//     // Send info to twilio 
// });
// $("#quickQuote").on("click", function (e) {
//     e.preventDefault();
//     // Popup/form for quick quote
//     quickQuote();
// });


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
// $("#addQuote").on("click", function newQuote() {


//     console.log("Inserting new quote...\n");
//     var query = connection.query(
//         "INSERT INTO quotes SET ?", {
//             quote: $("***USER QUOTE INPUT***").val(),
//             time: CURRENT_TIME
//         },
//         function (err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " new quote inserted!\n");
//         }
//     );
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


// // -------- Quick Quote --------

// // Click event to open form 
// function quickQuote() {
//     // Open form
//     var quote = $("#qqInput").val();
//     var time = $("#qqTime").val();
//     var phoneNum = $("#qqPhone").val();
//     client.messages.create({
//             body: quote,
//             to: '+' + phoneNum,
//             from: '+' + phoneNum,
//             // mediaUrl: 'http://www.example.com/hearts.png',
//         })
//         .then((message) => process.stdout.write(message.sid));
// }
// // Grab user input for text and time and send data to twilio
// $("#qqSubmit").on("click", function () {

// });
// // Option to store in SQL (checkbox maybe)

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
console.log("HI");
$(document).ready(function () {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $quoteContainer = $(".quotes-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteQuote);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".quotes-item", editQuote);
    $(document).on("keyup", ".quotes-item", finishEdit);
    $(document).on("blur", ".quotes-item", cancelEdit);
    $(document).on("submit", "#quotes-form", insertQuote);

    // Our initial todos array
    var quotes = [];

    // Getting todos from database when page loads
    getQuotes();

    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
        $quoteContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < quotes.length; i++) {
            rowsQuotes.push(createNewRow(quotes[i]));
        }
        $quoteContainer.prepend(rowsToAdd);
    }

    // This function grabs todos from the database and updates the view
    function getQuotes() {
        $.get("/api/quotes", function (data) {
            quotes = data;
            initializeRows();
        });
    }

    // This function deletes a todo when the user clicks the delete button
    function deleteQuote(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/quotes/" + id
        }).done(getQuotes);
    }

    // This function handles showing the input box for a user to edit a todo
    function editQuote() {
        var currentQuote = $(this).data("quote");
        $(this).children().hide();
        $(this).children("input.edit").val(currentQuote.text);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    // Toggles complete status
    function toggleComplete(event) {
        event.stopPropagation();
        var quotes = $(this).parent().data("quotes");
        quotes.complete = !quotes.complete;
        updateTodo(todo);
    }

    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit() {
        var updatedTodo = $(this).data("todo");
        if (event.keyCode === 13) {
            updatedQuote.text = $(this).children("input").val().trim();
            $(this).blur();
            updateTodo(updatedQuote);
        }
    }

    // This function updates a todo in our database
    function updateQuotes(quotes) {
        $.ajax({
            method: "PUT",
            url: "/api/quotes",
            data: quotes
        }).done(getQuotes);
    }

    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
        var currentQuote = $(this).data("quotes");
        if (currentQuote) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentQuote.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }

    // This function constructs a todo-item row
    function createNewRow(quotes) {
        var $newInputRow = $(
            [
                "<li class='list-group-item todo-item'>",
                "<span>",
                quotes.text,
                "</span>",
                "<input type='text' class='edit' style='display: none;'>",
                "<button class='delete btn btn-default'>x</button>",
                "<button class='complete btn btn-default'>✓</button>",
                "</li>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", todo.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("quotes", quotes);
        if (quotes.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }

    // This function inserts a new todo into our database and then updates the view
    function insertQuotes(event) {
        event.preventDefault();
        var quote = {
            text: $newItemInput.val().trim(),
            complete: false
        };

        $.post("/api/quotes", quotes, getQuotes);
        $newItemInput.val("");
    }
});