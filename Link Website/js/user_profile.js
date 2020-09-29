$(document).ready(function (){


        let uStudent = localStorage.getItem("uStdNo")
        let uName = localStorage.getItem("uName");
        $.ajax({
            header: {"Access-Control-Allow-Origin" : "*"},
            type: "GET",
            url: 'https://lamp.ms.wits.ac.za/~s1819369/profile.php',

            data: {
                studentNo : uStudent
            },
            success : function(output){
                var obj = JSON.parse(output);
                firstname = obj.FirstName;
                surname = obj.LastName;
                username = obj.Username;
                e_mail = obj.email;

                // alert(e_mail)

                $('#text2').html("Name : ".concat(firstname));
                $('#text1').html("LastName : ".concat(surname));
                $('#text3').html("Username : ".concat(username));
                $('#text4').html("Email : ".concat(e_mail));
                $("#profile_header").text(uName + "'s Profile");

            }

        });

    }
);


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
