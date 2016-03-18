$(document).on("ready", function () {

    // event handler on change for the form
    // source: https://api.jquery.com/change/
    $(".calculateForm").change(function () {


        // find the letter from array
        // we are using this function to avoid going through the process of finding letter indexes
        // and also avoiding to have to reverse the array

        // also we don't need to use the reverse alphabet because we are calculating
        // the result in a different way more clean and shorter
        function find(array, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == value) { return i; }
            }

            return -1;
        }

        var alphabet = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

        // registering the forms and some variables that we will need later in the code
        // making arrays of the forms - message, decrypted/encrypted message, key value
        var messageLength = $("#decMessage").val().length;
        var messageArray = $("#decMessage").val().toLowerCase();
        var keyVal = $("#decKey").val().toLowerCase().split("");
        var keyLength = $("#decKey").val().length;

        // registering the variables that we gonna need in the script
        // making an array that will hold the decrypted/encrypted message
        // this array actually holds pieces of the lenght of the key
        var decriptedSegment = new Array();


        // we check if the key is smaller or equal to the lenght of the message
        // if it's shorter we continue and
        // check if the user is going to encrypt or decrypt
        if (keyLength <= messageLength) {

            for (var k = 0; k < messageLength - 1; k++) {
                keyVal[keyVal.length] = keyVal[k];
                console.log(keyVal[keyVal.length]);
            }

            // we are still checking what operation the user want to do
            // like in the shift cipher script but
            // this time we are adding script for both actions
            // the funtion "find()" help us shorten the code when it comes
            // to going through the alphabet array
            if ($("#decriptMessage").is(":checked")) {
                $("#calculate").text("ENCRYPT");

                for (var i = 0; i < messageLength; i++) {
                    decriptedSegment[i] = ((find(alphabet, messageArray[i]) + find(alphabet, keyVal[i])) % 26);
                }

                for (var s = 0; s < decriptedSegment.length; s++) {
                    decriptedSegment[s] = alphabet[decriptedSegment[s]];
                }

                
                decriptedSegment = decriptedSegment.join("");

            } else {
                $("#calculate").text("DECRYPT");

                for (var i = 0; i < messageLength; i++) {
                    // will leave 26 spaces before the zero
                    decriptedSegment[i] = ((find(alphabet, messageArray[i]) - find(alphabet, keyVal[i]) + 26) % 26);
                }

                for (var s = 0; s < decriptedSegment.length; s++) {
                    decriptedSegment[s] = alphabet[decriptedSegment[s]];
                }
                
                decriptedSegment = decriptedSegment.join("");
            }

            

            $("#decDecripted").text(decriptedSegment);


        } else {
            $("#decDecripted").text("YOUR KEY VALUE IS LONGER THAN THE MESSAGE!");
        }

    });
});