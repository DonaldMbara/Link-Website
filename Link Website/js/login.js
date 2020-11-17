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

const sum = (vals) => {

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

const positive = (vals) => {

    return vals.filter((x) => { return x > 0; });
}

const negative = (vals) => {

    return vals.filter((x) => { return x < 0; });
}

function s1(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

function p1(vals){

    return vals.filter((x) => { return x > 0; });
}

function n1(vals){

    return vals.filter((x) => { return x < 0; });
}

function s2(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

function p2(vals){

    return vals.filter((x) => { return x > 0; });
}

function n2(vals){

    return vals.filter((x) => { return x < 0; });
}

module.exports = { sum, positive, negative,s1,p1,n1,s2,p2,n2};
