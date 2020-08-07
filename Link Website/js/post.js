$(document).ready(function () {
    $('#posting-form').submit(function (e) {
        e.preventDefault();




        let status = $('#status').val().trim();
        let courseid = $('.dropbtn').attr("name");
        let name = localStorage.getItem("username");//here I made the name to be the name of the button which is the username

        $(".error").remove(); //removing everything else that is in the span before using it

        //Checking validation of our inputs
        if (status == "") {
            $('#status').after('<span class="error">The no question to submit</span>');
        }
        if( courseid.length < 1) {
            $('#select_courses').after('<span class="error">This field is required</span>');
        }

        else {

            $.ajax({
                header: {"Access-Control-Allow-Origin": "*"},
                type: "POST",
                url: 'https://lamp.ms.wits.ac.za/~s1819369/post.php',
                data: {
                    status: status,
                    author: name,
                    courseid: courseid

                },
                success: function (data) {

                    alert(data);
                    if (data === 'Uploaded Successfully') {
                        $('#status').val("");//clear
                        document.getElementById("charLength").innerHTML = ""; //clear
                    }


                },
            });


        }


    });


});