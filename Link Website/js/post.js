$(document).ready(function () {
    $('#posting-form').submit(function (e) {
        e.preventDefault();

        let status = $('#status').val().trim();
        let courseid = $('.dropbtn').attr("name");
        let name = localStorage.getItem("username");//here I made the name to be the name of the button which is the username

        $(".error").remove(); //removing everything else that is in the span before using it

        //Checking validation of our inputs
        if (status == "") {
            $('#status').after('<span class="error">There is no question to submit</span>');
        }
        else if( courseid.length < 1) {
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
                        document.querySelector('#courses').innerText = "Select Course";

                    }


                },
            });


        }


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
