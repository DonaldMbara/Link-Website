// live search
  function search(inputVal){
    $.ajax({

      header: {"Access-Control-Allow-Origin" :"*"},
      datatype:'json',
      type:'GET',
      url:"https://lamp.ms.wits.ac.za/~s1819369/liveS.php",
      data:{term: inputVal},
      cache: false,
      success:(function(data){
         var data = jQuery.parseJSON(data);
         $('body').find('#table').empty();
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
         $('body').find('#table').append(username);

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
