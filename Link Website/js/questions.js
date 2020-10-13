    var querySet;


const class1 = {
   questions(courseid){
     $.ajax({
        header: {"Access-Control-Allow-Origin" :"*"},
        type: 'GET',
        url:'https://lamp.ms.wits.ac.za/~s1819369/getposts.php',
        data:{courseid:courseid},
        datatype:'json',
        success: function (data, status){
           var data = jQuery.parseJSON(data);
           querySet = data;
           var source = $("#questions_template").html();
           var template = Handlebars.compile(source);
           $('body').append(template(data));
            }

     });
     return 1;
   }
};

// live search
const class2 = {
  search(inputVal, courseid){
    $.ajax({

      header: {"Access-Control-Allow-Origin" :"*"},
      datatype:'json',
      type:'GET',
      url:"https://lamp.ms.wits.ac.za/~s1819369/live.php",
      data:{term: inputVal,courseid: courseid},success:(function(data){

         var data = jQuery.parseJSON(data);
         var output = '<div class="container">';
         $.each(data, function(key, value){
            output += '<h5>' + value.POST_AUTHOR + '</h5>';
            output += '<p id="question_p">' + value.POST_STATUS + '</p>'

             });

       output += '</div>';
       $('#results').html(output);

          })

       });
       return 1;
  }
};

//liking a q
const class3 = {
 like(post_id, userid){
   $.ajax({
     header: {"Access-Control-Allow-Origin" :"*"},
     datatype:'json',
     type: "POST",
     url: 'https://lamp.ms.wits.ac.za/~s1819369/Testing.php',
     data:{id:post_id, userid:userid},
     success: function (data, status) {
         $(this).val(data.likes);
         window.location.reload(true);

        }
      });
    return 1;
 }

};

$(document).ready(function(){
    var courseid= localStorage.getItem("c_id");
    var userid = localStorage.getItem("key");

    //this loads all the questions from the selected course.
  class1.questions(courseid);

//this is the live question filter.
    $('#txt-search').on("keyup input", function(){
       var inputVal = $(this).val();
       if(inputVal.length){
       class2.search(inputVal, courseid);
         }

     });

//this the question like.
  $('body').on('click','i',function(e){
    var id  = $(this).parent();
    var post_id = id[0].id;
    class3.like(post_id, userid);
   });


//this takes the question you will search to the top of the page.
  $('#results').on('click', 'p', function() {

     var click_text = $(this).text().split('|');
     $('#txt-search').val($.trim(click_text[0]));
     $("#results").html('');
     var question_id;
     $.each(querySet, function(key, value){
        if(value.POST_STATUS == $("#txt-search").val()){
           question_id = value.POST_ID;

           }
       });
      var el_up = document.getElementById("question_id");
        window.scrollTo(0, $("#"+question_id).offset().top);
    });

// this takes the required data and loads the answers html
    $('body').on('click', '#question_content', function() {

       n = $(this).contents();
       var post_id = $(this).parent()[0].id;
       localStorage.setItem("post_id",post_id);
       localStorage.setItem("author",$("#"+post_id).find("#author").text());
       localStorage.setItem("question",$("#"+post_id).find("#question_content").text());
       localStorage.setItem("date",$("#"+post_id).find("#date").text());
       localStorage.setItem("likes",$("#"+post_id).find("#like_button").text());
       localStorage.setItem("userid",userid);
        window.location.href = "answers.html";
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

module.exports = { sum, positive, negative, class1,class2,s1,p1,n1,s2,p2,n2};
