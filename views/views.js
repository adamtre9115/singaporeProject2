$(document).ready(function() {
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
      $.get("/api/quotes", function(data) {
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
  