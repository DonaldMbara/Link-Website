$(document).ready(function () {
    $('#login-form').submit(function (e) {
        e.preventDefault();


        let studentNo = $('#login_stdNo').val();
        let password = $('#login_password').val();

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
                url: 'https://lamp.ms.wits.ac.za/~s1819369/login.php',
                data: {
                    studentNo: studentNo,
                    password :password

                },
                success: function (data) {

                    alert(data);
                    if(data === 'data matched'){
                        window.location = 'home.html';
                    }
                    if(data === 'try again'){
                        alert('Invalid Credentials')
                    }

                },
            });






    });
});