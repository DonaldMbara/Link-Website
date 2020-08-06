// $(document).ready(function () {
//     $('#prof-form').submit(function (e) {
//         e.preventDefault();
//
//
//         // let studentNo = $('#login_stdNo').val();
//         let studentNo = 90;
//
//         $(".error").remove(); //removing everything else that is in the span before using it
//
//         //Checking validation of our inputs
//         // if (studentNo.length < 1 ) {
//         //     $('#login_stdNo').after('<span class="error">This field is required</span>');
//         // }
//
//                $.ajax({
//
//                 header: {"Access-Control-Allow-Origin" :"*"},
//                 type: "GET",
//                 url: 'https://lamp.ms.wits.ac.za/~s1819369/profile.php',
//                 data: {
//                     studentNo: studentNo,
//                 },
//                 success: function (data) {
//
//                     // alert(data);
//                     /*
//                       *data is from the php file, I made it send response and username
//                       * so data = 'data match-username' if successful or data = 'try again-username'
//                       * here I split so that i can get username and response separately
//                      */
//                     // let arr  = data.split("-");
//                     // let response = arr[0];
//                     // let username = arr[arr.length-1];
//
//                     alert(data);
//                     $('#text1').html(data);
//
//                 },
//             });
//
//
//
//     });
// });
//
//







$(document).ready(function (){

  // $('#profile-btn').click(function(){
    var response = '';
    let s = 33333;
    $.ajax({
      header: {"Access-Control-Allow-Origin" : "*"},
      type: "GET",
      url: 'https://lamp.ms.wits.ac.za/~s1819369/profile.php',
      // dataType: "json",
      // async: false,
      data: {
        studentNo : s
      },
      success : function(output){
        var obj = JSON.parse(output);
        firstname = obj.FirstName;
        surname = obj.LastName;
        username = obj.Username;
        e_mail = obj.email;

        // alert(surname);
        $('#text2').html("Name : ".concat(firstname));
        $('#text1').html("LastName : ".concat(surname));
        $('#text3').html("Username : ".concat(username));
        $('#text4').html("Email : ".concat(e_mail));


      }

    });

  // });


}
)





//    $.ajax({
//      header: {"Access-Control-Allow-Origin" : "*"},
//      type: "POST",
//      url: 'https://lamp.ms.wits.ac.za/~s1819369/profile.php',
//      dataType: "json",
//      async: false,
//      data: {
//        studentNo : 90
//      },
//
//      success: function (data){
//        // alert(data);
//
//      }
//    }) .responseText;
// });
