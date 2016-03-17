$(document).on("ready", function () {

    // event handler on change for the form
    // source: https://api.jquery.com/change/
    $(".calculateForm").change(function () {

        // we are using an array with the alphabet
        // instead of getting the values from String.fromCharCode
        // For me it seems easier so far
        var alphabet = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

        // adding encription and decription functionality
        // source: http://stackoverflow.com/questions/7960208/jquery-if-checkbox-is-checked
        if ($("#decriptMessage").is(":checked")) {
            alphabet = alphabet;
            $("#calculate").text("DECRYPT");
        } else {
            alphabet = alphabet.reverse();
            $("#calculate").text("ENCRYPT");
        }

        // registering the forms and some variables that we will need later in the code
        // making arrays of the forms - message, decrypted/encrypted message, key value
        var messageText = $("#decMessage").text();
        var messageLength = $("#decMessage").val().length;
        var messageArray = $("#decMessage").val();
        var keyVal = $("#decKey").val();

        // registering the variables that we gonna need in the script
        var decriptedMessage = "";
        var letter = null;
        var letterIndex = null; // the index of the number in the alphabet
        var decLetterIndex = null; // the index of the number when decripted
        var decLetter = null; // letter from the alphabet

        // loop through each letter of the message
        for (var i = 0; i < (messageLength) ; i++) {

            // Saving the letter that is being typed last from the encript/decript message form
            letter = messageArray[i];

            // if the letter is uppercase it will change it to lowercase. This is made so there won't be any issues with the array
            if (letter == letter.toUpperCase()) {
                letter = letter.toLowerCase(letter);
            }

            // Finding the letter index by getting the Index of the current typed letter through our alphabet array
            // console.log("Letter: " + letter + "\nLetter Index: " + letterIndex);
            letterIndex = alphabet.indexOf(letter);

            // if the user has not entered key to decript the message this code sets the value of the key to 0
            if (!keyVal) {
                keyVal = 0;
            }

            // we are getting the decripted letter index
            // it is the sum of the index of the letter plus the value of the key
            decLetterIndex = letterIndex + Number(keyVal);

            // to avoid getting in and out of the alphabet array we check if the index of the dectipted letter is bigger than the array lenght
            // if yes we need to start from the beginning and calculate how many numbers extra we need to jump from the start
            // we javascript arithmetic operator
            // source: http://www.w3schools.com/js/js_operators.asp
            if (decLetterIndex > 25) {
                decLetterIndex = (decLetterIndex % 26);
            }

            // here we check if the entered letter is an empty space
            if (letter == " ") {
                // if yes - the decripted letter will also be an empty space
                decLetter = " ";
            } else {
                // if not - we search through the alphabet array for the letter that we need to show as dectipted/encripted by using the index of the decripted letter
                decLetter = alphabet[decLetterIndex];
                // decLetter = String.fromCharCode(((letter - 96) - (parseInt(keyVal) - 96) + 25) % 26 + 97);
            }

            // we add the dectipted letter that we get
            // the process is simple
            // 1. we get the letter that is being typed
            // 2. search what index it is in the alphabet array
            // 3. we add the key value to the index of the letter that is typed
            // 4. when we have the index of the decripted letter we search which letter it is in the array
            // 5. we post the letter to the decripted message variable
            decriptedMessage += decLetter;
        }

        // we post the decripted/encripted message to the decripted/encripted form
        $("#decDecripted").text(decriptedMessage);
    });
});