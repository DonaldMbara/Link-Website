$(document).ready(function (){

    var response = '';


    var s = localStorage.getItem("key");
    let static_studentNumber = s;
    

    $.ajax({
      header: {"Access-Control-Allow-Origin" : "*"},
      type: "GET",
      url: 'https://lamp.ms.wits.ac.za/~s1819369/profile.php',

      data: {
        studentNo : static_studentNumber
      },
      success : function(output){
        var obj = JSON.parse(output);
        firstname = obj.FirstName;
        surname = obj.LastName;
        username = obj.Username;
        e_mail = obj.email;
        localStorage.setItem("Fname", firstname);
        // alert(e_mail);
        $('#text2').html("Name : ".concat(firstname));
        $('#text1').html("LastName : ".concat(surname));
        $('#text3').html("Username : ".concat(username));
        $('#text4').html("Email : ".concat(e_mail));


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
module.exports = { sum, positive, negative};
