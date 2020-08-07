$(document).ready(function (){

      var response = '';
      // let data = window.location; //the whole link
      // data = data.toString(); //set it to string
      // let arr = data.split("username="); //split and get the link
      // let username =  arr[arr.length-1];


      // document.querySelector("#view_chats").name = username ;
      let static_studentNumber = 990916;
    $.ajax({
      header: {"Access-Control-Allow-Origin" : "*"},
      type: "GET",
      url: 'https://lamp.ms.wits.ac.za/~s1819369/profile.php',

      data: {
        StudentNo : static_studentNumber
      },
      success : function(output){
        //alert(static_studentNumber);
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
