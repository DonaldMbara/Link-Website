//this function sends the message to the database using insertMessage.php
//i copied it so it is not complete
function getMessageFromUser() {
    let message = document.getElementById("myTextarea").value;
    document.getElementById("myTextarea").value = "";

    //create a day variable
    var d = new Date();
    //getting the date, month and year
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    //date, not sure if this is the correct format
    var theWholeDate = date + "" + month + "" + year;

    //sender student number
    var studNo = localStorage.getItem("key");

    //get the time
    var time = d.getTime();

    //sender name
    var name =localStorage.getItem("name");

    //receiver student number and name missing only
}

$(document).ready(function () {
    $('#send-form').submit(function (e) {
        e.preventDefault();


        let sender_name = $('#login_stdNo').val();
        let receiver_name = $('#login_password').val();
        let receiver_stud;
        let sender_stud;
        let message = document.getElementById("myTextarea").value;



        $(".error").remove(); //removing everything else that is in the span before using it

        //Checking validation of our inputs
        if (studentNo.length < 1 ) {
            $('#login_stdNo').after('<span class="error">This field is required</span>');
        }
        if( password.length < 1) {
            $('#login_password').after('<span class="error">Password must be at least 8 characters long</span>');
        }



        $.ajax({
            header: {"Access-Control-Allow-Origin" :"*"},
            type: "POST",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/insertMessage.php',
            data: {
                studentNo: studentNo,
                password :password

            },
            success: function (data) {

                // alert(data);
                /*
                  *data is from the php file, I made it send response and username
                  * so data = 'data match-username' if successful or data = 'try again-username'
                  * here I split so that i can get username and response separately
                 */
                let arr  = data.split("-");
                let response = arr[0];
                let username = arr[arr.length-1];
                localStorage.setItem("username", username);


                alert(response);
                if(response === 'data matched'){
                    window.location = 'home.html?username='+ encodeURIComponent(username); //passed the username with the link, now check home.html at the top
                    localStorage.setItem("key", studentNo);
                }
                if(response === 'try again'){
                    alert('Invalid Credentials')
                }

            },
        });






    });
});
