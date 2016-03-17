$(document).on("ready", function () {
 
    $(".calculateForm").change(function () {
        
        var first = Math.abs($("#formOne").val());
        var second = Math.abs($("#formTwo").val());

        var result = "";

        if ($.isNumeric(first) && $.isNumeric(second)) {
            var x = parseInt(first);
            var y = parseInt(second);

            result = calculateGCD(x, y);
            $("#formResult").val(result);
        } else {
            $("#formResult").val("WRITE A NUMBER!");
        }
    });



    function calculateGCD(x, y) {
        while (y != 0) {
            var z = x % y;
            x = y;
            y = z;
        }

        return x;
    }

});