$(document).ready(function() {
    $('#signup-form').submit(function(e) {
        e.preventDefault();

        let username = $('#username').val();
        let first_name = $('#first_name').val();
        let last_name = $('#last_name').val();
        let email = $('#email').val();
        let studentNo = $('#signup_studentNo').val();
        let password = $('#signup_password').val();

        let check ;


        $(".error").remove();//removing everything else that is in the span before using it

        //Checking validation of our inputs

        if (username.length < 1) {
            $('#username').after('<span class="error">This field is required</span>');

        }
        else {check = true;}
        if (first_name.length < 1) {
            $('#first_name').after('<span class="error">This field is required</span>');
        }
        else {check = true;}

        if (last_name.length < 1) {
            $('#last_name').after('<span class="error">This field is required</span>');
        }
        else {check = true;}

        if (email.length < 1) {
            $('#email').after('<span class="error">This field is required</span>');
        } else  {
            let regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            let validEmail = regEx.test(email);
            if (!validEmail) {
                $('#email').after('<span class="error">Enter a valid email</span>');
            }
            else {check = true;}

        }
        if (studentNo.length < 1) {
            $('#signup_studentNo').after('<span class="error">This field is required</span>');
        }
        else {check = true;}

        if (password.length < 1) {
            $('#signup_password').after('<span class="error">Password must be at least 8 characters long</span>');
        }
        else {check = true;}

        //still have to do ajax part . anyone can finish this part
        //if they managed to figured out a way to bypass CORS

    });

});