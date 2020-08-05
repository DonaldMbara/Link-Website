$(document).ready(function () {
    $('#posting-form').submit(function (e) {
        e.preventDefault();


        let status = $('#status').val();
        let course = $('.dropbtn').val();

        $(".error").remove(); //removing everything else that is in the span before using it

        //Checking validation of our inputs
        if (status.length < 1 ) {
            $('#status').after('<span class="error">This field is required</span>');
        }
        if( course.length < 1) {
            $('#select_courses').after('<span class="error">This field is required</span>');
        }

        //i will dix minor bugs
        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/post.php',
            data: {
                status: status,
                author :"Dons",
                courseid: "1"

            },
            success: function (data) {

                alert(data);
                if(data === 'Uploaded Successfully'){
                }


            },
        });






    });
});