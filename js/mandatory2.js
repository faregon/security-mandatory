$(document).on("ready", function () {
    

    // event handler on change for the form
    // source: https://api.jquery.com/change/
    $(".calculateForm").change(function onKeyPressed() {
        

        // we are using an array with the alphabet
        // instead of getting the values from String.fromCharCode
        // For me it seems easier so far
        var alphabet = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");


        // adding encription and decription functionality
        // source: http://stackoverflow.com/questions/7960208/jquery-if-checkbox-is-checked
        if ($("#decriptMessage").is(":checked")) {
            alphabet = alphabet;
            $("#calculate").text("DECRIPT");
        } else {
            alphabet = alphabet.reverse();
            $("#calculate").text("ENCRIPT");
        }



        var decriptedMessage = "";
        var decriptedSegment = "";
        // variable for letter
        var letter = null;
        var letterIndex = null; // the index of the number in the alphabet array
        var keyVal = null;
        var decLetterIndex = null; // the index of the number when decripted
        var decLetter = ""; // letter from the alphabet



        // console.log(alphabet.length);
        var messageArray = $("#decMessage").val();
        var messageLength = $("#decMessage").val().length;
        keyVal = $("#decKey").val();
        var keyLength = $("#decKey").val().length;

        // breaking down the message and the key to an arrays so we can use them in blqblq decription
        var message = messageArray.split("");
        var key = keyVal.split("");

        // loop through each letter of the message
        for (var m = 0; m < messageLength; m++) {

            //console.log(alphabet[i]);
            // console.log(i + " letter: " + messageArray[i]);
            // Saving the letter that is being typed last from the encript/decript message form
            letter = messageArray[m];

            // if the letter is uppercase it will change it to lowercase. This is made so there won't be any issues with the array
            if (letter == letter.toUpperCase()) {
                letter = letter.toLowerCase(letter);
            }


            // Finding the letter index by getting the Index of the current typed letter through our alphabet array
            // console.log("Letter: " + letter + "\nLetter Index: " + letterIndex);
            letterIndex = alphabet.indexOf(letter);


            // if the user has not entered key to decript the message this code sets the value of the key to 0
            if (!keyVal) { keyVal = 0; }
            if (!keyLength) { keyLength = 1; }


            // we are getting the decripted letter index
            // it is the sum of the index of the letter plus the value of the key
            decLetterIndex = letterIndex + Number(keyVal);


            // to avoid getting in and out of the alphabet array we check if the index of the dectipted letter is bigger than the array lenght
            // if yes we need to start from the beginning and calculate how many numbers extra we need to jump from the start
            // we javascript arithmetic operator
            // source: http://www.w3schools.com/js/js_operators.asp
            if (decLetterIndex > 25) { decLetterIndex = (decLetterIndex % 26); }

            // here we check if the entered letter is an empty space
            // the decripted letter will also be an empty space
            if (letter == " ") { decLetter = " "; }

            
            for (var k = 0; k < keyLength; k++) {
                // so we can start from 1 not from 0
                k = k + 1;
                if (k >= 0 && k < 10) {
                    // we search through the alphabet array for the letter that we need to show as dectipted/encripted by using the index of the decripted letter
                    decLetter = alphabet[decLetterIndex];
                    console.log(k);
                }
                else if (k > 9) {

                }

                console.log(decLetterIndex);
            }





            
            // decLetter = String.fromCharCode(((letter - 96) - (parseInt(keyVal) - 96) + 25) % 26 + 97);
            // we add the dectipted letter that we get
            // the process is simple
            // 1. we get the letter that is being typed
            // 2. search what index it is in the alphabet array
            // 3. we add the key value to the index of the letter that is typed
            // 4. when we have the index of the decripted letter we search which letter it is in the array
            // 5. we post the letter to the decripted message variable
            decriptedMessage += decLetter;

           
            // console.log("Decripted Letter Index: " + decLetterIndex + "\nDecripted Letter: " + decLetter);
            // console.log(decriptedMessage);
            
        }

        // we post the decripted/encripted message to the decripted/encripted form
        $("#decDecripted").text(decriptedMessage);
    });
});

