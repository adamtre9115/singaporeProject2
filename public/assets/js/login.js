// firebase setup
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD53GEoZL2BOyhyXEYd7niGjD98YK_N2hw",
    authDomain: "signifie-38adf.firebaseapp.com",
    databaseURL: "https://signifie-38adf.firebaseio.com",
    projectId: "signifie-38adf",
    storageBucket: "",
    messagingSenderId: "203847661100"
};
firebase.initializeApp(config);

var database = firebase.database();

//   initialize google sign-in
var provider = new firebase.auth.GoogleAuthProvider();


firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});


$("#googleSignIn").on("click", function (e) {
    firebase.auth().signInWithRedirect(provider);
})

// handle manual user sign up

$("#signUp").on("click", function () {
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();

    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });

    $("#email").val("");
    $("#password").val("");
})