$(document).on("ready", function () {

    // event handler on change for the form
    // source: https://api.jquery.com/change/
    $(".calculateForm").change(function () {


        // find the letter from array
        // we are using this function to avoid going through the process of finding letter indexes and reverse
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
        var messageArray = $("#decMessage").val();
        var keyVal = $("#decKey").val();
        var keyLength = $("#decKey").val().length;

        // registering the variables that we gonna need in the script
        var decriptedSegment = new Array();


        if (keyLength <= messageLength) {

            if ($("#decriptMessage").is(":checked")) {
                $("#calculate").text("ENCRYPT");

                for (var i = 0; i < messageLength; i++) {
                    decriptedSegment[i] = ((find(alphabet, messageArray[i]) + find(alphabet, keyVal[i])) % 26);
                }

                for (var k = 0; k < decriptedSegment.length; k++) {
                    decriptedSegment[k] = alphabet[decriptedSegment[k]];
                }

            } else {
                $("#calculate").text("DECRYPT");

                for (var i = 0; i < messageLength; i++) {
                    decriptedSegment[i] = ((find(alphabet, messageArray[i]) - find(alphabet, keyVal[i]) + 26) % 26);
                }
                for (var k = 0; k < decriptedSegment.length; k++) {
                    decriptedSegment[k] = alphabet[decriptedSegment[k]];
                }
            }

            decriptedSegment = decriptedSegment.join('');

            $("#decDecripted").val(decriptedSegment);


        } else {
            $("#decDecripted").text("YOUR KEY VALUE IS LONGER THAN THE MESSAGE!");
        }

    });
});