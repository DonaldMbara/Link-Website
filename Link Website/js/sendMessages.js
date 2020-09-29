// live search
  function search(inputVal, courseid){
    $.ajax({

      header: {"Access-Control-Allow-Origin" :"*"},
      datatype:'json',
      type:'GET',
      url:"https://lamp.ms.wits.ac.za/~s1819369/liveS.php",
      data:{term: inputVal},success:(function(data){
         var data = jQuery.parseJSON(data);

         var username = '';
         $.each(data, function (key, value) {
             username +=
                 '<div class="border_bottom" >'  ;

                 username += '<div id = "i_holder2" class="div">';
                 username += '<i class="fa fa-ellipsis-v option2" id ='+value.StudentNo+'>'+'</i>';
                 username += '<div class="dropdown-content2">';
                  username += '<a class="delete2" href="#">'+ "clear" +'</a>';
                  username += '</div>';
                  username += '</div>';
             username += '<p class="username" id ='+value.StudentNo+'>' +
                 value.Username  +'</p>';
             username +=  '</div>';
         });

         //INSERTING ROWS INTO TABLE
         $('#table').append(username);

          })

       });
       return 1;
  };

//delete question
function delete_q(q_id){
  alert('you are about to delete a text')
  $.ajax({

    header: {"Access-Control-Allow-Origin" :"*"},
    datatype:'json',
    type:'POST',
    url:"https://lamp.ms.wits.ac.za/~s1819369/deleteMessage.php",
    data:{id: q_id},success:(function(data){
      alert(data);
      window.location.reload(true);


        })

     });
     return 1;
};

//clear all the messages_style
function clear(studn,receiver_stud){
  alert('you are about to clear the whole conversation')
  $.ajax({

    header: {"Access-Control-Allow-Origin" :"*"},
    datatype:'json',
    type:'POST',
    url:"https://lamp.ms.wits.ac.za/~s1819369/deleteMessages.php",
    data:{ studentNo: studn, rstudentNo:receiver_stud},success:(function(data){
      alert(data);
      window.location.reload(true);

        })

     });
     return 1;
};

$(document).ready(function () {
    $.getJSON("https://lamp.ms.wits.ac.za/~s1819369/getNames.php",

        function (data) {
            var username = '';

            $.each(data, function (key, value) {


                username +=
                    '<div class="border_bottom" >'  ;

                    username += '<div id = "i_holder2" class="div">';
                    username += '<i class="fa fa-ellipsis-v option2" id ='+value.StudentNo+'>'+'</i>';
                    username += '<div class="dropdown-content2">';
                     username += '<a class="delete2" href="#">'+ "clear" +'</a>';
                     username += '</div>';
                     username += '</div>';

                username += '<p class="username" id ='+value.StudentNo+'>' +
                    value.Username  +'</p>';
                username +=  '</div>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(username);
        });

    $('#table').on('click', '.username', function(){
        //alert("Marcel");
//        $("div.card").remove();
        var name =$(this).text();
        var studentNo =$(this).attr('id');
        // window.location("events.html");
        document.getElementById("recName").innerHTML = name; //set username
        localStorage.setItem("uName",name);
        localStorage.setItem("uStdNo",studentNo);


        let receiver_stud = localStorage.getItem("uStdNo");
        let sender_stud = localStorage.getItem("key");
        getDetails(receiver_stud,sender_stud);


        // alert(name);

    });


    $('body').on('click', '#send_message', function (e) {
        e.preventDefault();
        let sender_name = localStorage.getItem("username");
        let receiver_name = localStorage.getItem("uName");
        let receiver_stud = localStorage.getItem("uStdNo");
        let sender_stud =  localStorage.getItem("key");
        let message = document.getElementById("message_input").value;

        //Checking validation of our inputs
        if (message.length < 1 ) {
            alert("You cant send an empty message");
        }else {
                $.ajax({
                    header: {"Access-Control-Allow-Origin": "*"},
                    type: "POST",
                    url: 'https://lamp.ms.wits.ac.za/~s1819369/insertMessage.php',
                    data: {
                        message: message,
                        sender: sender_name,
                        receiver: receiver_name,
                        rStudNum: receiver_stud,
                        sStudNum: sender_stud

                    },
                    success: function (data) {
                        $('#message_input').val("");//clear
                    },
                });
        }

    });



//searching for a question
$('#txt-search').on("keyup input", function(){
   $("#table").html('');
   var inputVal = $(this).val();
   if(inputVal.length){
   search(inputVal);
     }

 });

//deletes a question
 $('body').on('click',".delete", function(){
     var id1 = $(this).parents()[1].id;
     q_id = $('#'+id1).find('.option').attr('id');
     delete_q(q_id);
  });


//clear a chat
$('body').on('click',".delete2", function(){
    var id1 = $(this).parents()[1].id;
    receiver_stud= $('#'+id1).find('.option2').attr('id');
    let studn = localStorage.getItem("key");
    clear(studn, receiver_stud);
 });


});



const sum1 = (vals) => {

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

const positive1 = (vals) => {

    return vals.filter((x) => { return x > 0; });
}

const negative1 = (vals) => {

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
function s3(vals){

    let sum = 0;

    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}

function p3(vals){

    return vals.filter((x) => { return x > 0; });
}

function n3(vals){

    return vals.filter((x) => { return x < 0; });
}
module.exports = { sum1, positive1, negative1, search, clear, delete_q,s2,p2,n2, s3,p3,n3};
