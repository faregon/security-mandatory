$(document).on("ready", function () {

    $(".calculateForm").on("keyup", function () {


        var alphabet = new Array(" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");


        // console.log(alphabet.length);
        var ls = $("#letterStatistics");
        var messageText = $("#decMessage").text();
        var messageLength = $("#decMessage").val().length;
        var messageArray = $("#decMessage").val();

        var keyVal = $("#decKey").val();
        if (!keyVal) {
            keyVal = 0;
        }

        var decriptedMessage = "";
        var letter = null;
        var letterIndex = null; // the index of the number in the alphabet
        var decLetterIndex = null; // the index of the number when decripted
        var decLetter = null; // letter from the alphabet
        var dexLetterIndexFinal = null;


        // loop through each letter of the message
        // 
        for (var i = 0; i < (messageLength); i++) {
            //console.log(alphabet[i]);

            // console.log(i + " letter: " + messageArray[i]);

            // Saving the letter, so we could find it in the alphabet array 
            letter = messageArray[i];
            // if the letter is uppercase it will change it to lowercase. This is made so there won't be any issues with the array
            if (letter == letter.toUpperCase()) {
                letter = letter.toLowerCase(letter);
            }
            // Finding the letter index by running all the letters thought our alphabet array

            // console.log("Letter: " + letter + "\nLetter Index: " + letterIndex);

            letterIndex = alphabet.indexOf(letter);

            decLetterIndex = letterIndex + parseInt(keyVal);


            if (decLetterIndex > 25) {
                decLetterIndex = decLetterIndex % 26;
            }


            if (letter == " ") {
                decLetter = " ";
            } else {

                decLetter = alphabet[decLetterIndex];
                // decLetter = String.fromCharCode(((letter - 96) - (parseInt(keyVal) - 96) + 25) % 26 + 97);
            }


            decriptedMessage += decLetter;


            // console.log("Decripted Letter Index: " + decLetterIndex + "\nDecripted Letter: " + decLetter);
            // console.log(decriptedMessage);

        }

        $("#decDecripted").text(decriptedMessage);


    });
});