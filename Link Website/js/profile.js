$(document).ready(function (){

    var response = '';
    let static_studentNumber = 9899;
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

        
        $('#text2').html("Name : ".concat(firstname));
        $('#text1').html("LastName : ".concat(surname));
        $('#text3').html("Username : ".concat(username));
        $('#text4').html("Email : ".concat(e_mail));


      }

    });

}
)
