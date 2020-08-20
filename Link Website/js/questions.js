$(document).ready(function(){
    var courseid= localStorage.getItem("c_id");
    var querySet;
    var userid = localStorage.getItem("key");

    //this loads all the questions from the selected course.
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

//this is the live question filter.
    $('#txt-search').on("keyup input", function(){
       var inputVal = $(this).val();
       if(inputVal.length){

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

         }

     });

//this the question like.
  $('body').on('click','i',function(e){
    var id  = $(this).parent();
    var post_id = id[0].id;
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
    $('body').on('click', '.question_card', function() {

       n = $(this).contents();
       var post_id = (this.id);
       localStorage.setItem("post_id",post_id);
       localStorage.setItem("author",$(this).find("#author").text());
       localStorage.setItem("question",$(this).find("#question_content").text());
       localStorage.setItem("date",$(this).find("#date").text());
       localStorage.setItem("likes",$(this).find("#like_button").text());
       localStorage.setItem("userid",userid);
        window.location.href = "answers.html";


        });

});
